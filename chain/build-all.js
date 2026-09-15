// build-all.js — the whole site build, in the one order that works.
//
// This did not exist. The chain lived in memory and got reconstructed from
// scratch each time, which is how eight shelves shipped with untagged Amazon
// links and how every page ended up running two competing affiliate rewriters
// at once. Both were sequencing mistakes, not code mistakes.
//
// Three ordering rules the chain depends on:
//   1. generate-recipes rewrites every recipe page from the template, which
//      strips every injected marker. Injectors therefore run LAST, always.
//   2. generate-aisles walks the filesystem to build the sitemap, so it runs
//      after everything that creates a page and before the injectors (which
//      create none).
//   3. inject-skim.js is deliberately NOT in this chain. It and inject-awin.js
//      each default to every page, so running both puts two link rewriters on
//      the same anchors. See strip-skimlinks.js for why Awin is the one kept.
//
// Usage:  node build-all.js            full build
//         node build-all.js --from=8   resume at stage 8 (after a failure)
//         node build-all.js --list     print the stages and exit
const { execFileSync } = require('child_process');
const fs = require('fs');

const STAGES = [
  ['generate-recipes.js',       'recipe pages from batch data'],
  ['build-shelves.js',          'shelf pages + maker cards'],
  ['generate-recipe-index.js',  'recipe browse index'],
  ['generate-hubs.js',          'meal/occasion hubs'],
  ['generate-cuisine-hubs.js',  'cuisine hubs'],
  ['generate-vertical-hubs.js', 'vertical hubs'],
  ['generate-cuts.js',          'butcher cut pages from cut-content/'],
  ['generate-data-tables.js',   '/data/ — citable datasets + Dataset JSON-LD'],
  ['generate-method-pages.js',  'method pages + recipe strip'],
  ['generate-pantry.js',        'pantry search index'],
  ['generate-search.js',        'site search'],
  ['generate-crosslinks.js',    'shelf <-> recipe interlinking'],
  ['generate-list-widget.js',   'list widget'],
  ['generate-aisles.js',        'aisles + SITEMAP (walks the filesystem)'],
  // ---- injectors from here down; nothing above may run after them ----
  ['inject-header.js',          'top header'],
  ['inject-navbar.js',          'navbar'],
  ['inject-favicon.js',         'favicon'],
  ['inject-font.js',            'font legibility floor'],
  ['inject-seo.js',             'shelf SEO'],
  ['inject-adsense.js',         'AdSense loader'],
  ['inject-awin.js',            'Awin MasterTag (the ONLY rewriter)'],
  ['inject-source-links.js',    'ingredient source links', ['--apply']],
  ['inject-affiliate-marks.js', 'affiliate disclosure'],
  ['inject-maker-cta.js',       'maker CTA'],
  ['inject-cut-links.js',       'cut links', ['--apply']],
  ['inject-click-tracking.js',  'GA4 affiliate_click tracking'],
  ['inject-itemlist.js',        'ItemList structured data', ['--apply']],
  ['inject-data-link.js',       'open-data footer link (CC BY)'],
  // ---- normalise + gate ----
  ['strip-skimlinks.js',        'enforce one rewriter per page', ['--apply']],
  ['fix-untagged-amazon.js',    'exactly one associate tag per Amazon link'],
];

if (process.argv.includes('--list')) {
  STAGES.forEach((s, i) => console.log(String(i + 1).padStart(2) + '. ' + s[0].padEnd(28) + s[1]));
  process.exit(0);
}

const fromArg = (process.argv.find(a => a.startsWith('--from=')) || '').split('=')[1];
const start = fromArg ? parseInt(fromArg, 10) : 1;

console.log(`build-all: ${STAGES.length} stages, starting at ${start}\n`);
const t0 = Date.now();
let ran = 0, skipped = 0;

for (let i = 0; i < STAGES.length; i++) {
  const n = i + 1;
  const [script, label, args = []] = STAGES[i];
  if (n < start) { skipped++; continue; }
  if (!fs.existsSync(script)) {
    console.log(`${String(n).padStart(2)}. ${script.padEnd(28)} ABSENT — skipped`);
    skipped++;
    continue;
  }
  process.stdout.write(`${String(n).padStart(2)}. ${script.padEnd(28)}`);
  try {
    const out = execFileSync('node', [script, ...args], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
    const last = out.trim().split('\n').filter(Boolean).pop() || 'ok';
    console.log(last.slice(0, 78));
    ran++;
  } catch (e) {
    console.log('FAILED');
    console.log('\n' + (e.stdout || '').slice(-1500));
    console.log((e.stderr || '').slice(-1500));
    console.log(`\nStage ${n} (${script}) failed. Fix it, then: node build-all.js --from=${n}`);
    process.exit(1);
  }
}

console.log(`\nran ${ran}, skipped ${skipped}, ${((Date.now() - t0) / 1000).toFixed(0)}s`);
console.log('Now run the gate:  node gate-amazon.js C:/tmp/5b2b-live');

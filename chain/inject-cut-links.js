// inject-cut-links.js — stop orphaning the cut guides.
//
//   node inject-cut-links.js            dry run
//   node inject-cut-links.js --apply
//
// The link audit found the 22 cut guides averaging ONE inbound link each. Every
// recipe links to the /cuts/ hub, none link to the specific guide. That is the
// worst gap on the site, because the cut guides ARE the thesis: know what cut
// goes in what dish so you don't make nuggets out of eye of round.
//
// So: when a recipe's ingredients name a specific cut, put a line under the
// ingredients pointing at that cut's guide. Same containment rule as the
// ingredient linker -- every word of the cut slug must appear in the ingredient,
// so "beef" alone never fires and "short ribs" reaches short-rib rather than ribs.
//
// Idempotent via <!--CUTLINK-->.
const fs = require('fs'), path = require('path');

// ---- paths resolve from this file, not from the working directory -------
// Every path here used to be the literal string 'C:/tmp/...'. That made the
// chain unmovable and made the restore procedure depend on cloning to one
// exact directory. __site is the site being written; __work is the folder
// holding the chain and the corpus. A script sitting inside the site finds
// 'hunt' beside it; one sitting in the workspace does not. SITE_ROOT wins
// over both when it is set.
const __path_ = require('path'), __fs_ = require('fs');
const __work = __fs_.existsSync(__path_.join(__dirname, 'recipe-batches'))
  ? __dirname : __path_.resolve(__dirname, '..');
const __site = process.env.SITE_ROOT
  || (__fs_.existsSync(__path_.join(__dirname, 'hunt'))
        ? __dirname : __path_.join(__work, '5b2b-live'));
// ------------------------------------------------------------------------
const ROOT = __site;
const APPLY = process.argv.includes('--apply');

const IDX = JSON.parse(fs.readFileSync(__path_.join(__work,'5b2b-extension','index.json'), 'utf8'));
const CUTS = IDX.cuts || [];

const STOP = new Set('the and for with from that this fresh dried ground whole large small medium plus cup cups tbsp tsp about into more some each optional taste finely thinly chopped sliced minced trimmed boneless bone lean'.split(' '));
const tokens = s => {
  const out = [], seen = {};
  for (const w of String(s || '').toLowerCase().replace(/&[a-z#0-9]+;/g, ' ').replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/)) {
    if (w.length < 3 || STOP.has(w) || seen[w]) continue;
    seen[w] = 1; out.push(w);
  }
  return out;
};
const stem = w => w.replace(/(ies)$/, 'y').replace(/([^s])s$/, '$1');

function matchCut(ingredientNames) {
  let best = null;
  for (const name of ingredientNames) {
    const toks = tokens(name);
    if (!toks.length) continue;
    const stems = new Set(toks.map(stem));
    const nameSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    for (const c of CUTS) {
      const words = c.s.split('-');
      // a single generic word ("beef", "pork") is never enough on its own
      if (words.length < 2) continue;
      if (!words.every(w => stems.has(stem(w)) || nameSlug.includes(w))) continue;
      const sc = words.length + (words.join('') === toks.map(stem).join('') ? 2 : 0);
      if (!best || sc > best.sc) best = { sc, cut: c, via: name.trim() };
    }
  }
  return best;
}

const NOTE = (cut, via) => `<!--CUTLINK--><p style="font-size:15px;line-height:1.7;color:#9aabc4;background:rgba(240,197,96,.06);border-left:2px solid #f0c560;border-radius:0 8px 8px 0;padding:10px 14px;margin:14px 0 0;">Using <b style="color:#c8d3e6;">${cut.n.toLowerCase()}</b>? It behaves the way it does for a reason &mdash; <a href="/cuts/${cut.s}/" style="color:#5fb0ef;">what this cut is for and how to cook it &rarr;</a></p><!--/CUTLINK-->`;

let scanned = 0, wired = 0, already = 0;
const byCut = {}, sample = [];

for (const d of fs.readdirSync(path.join(ROOT, 'recipes'))) {
  const p = path.join(ROOT, 'recipes', d, 'index.html');
  if (!fs.existsSync(p)) continue;
  let h = fs.readFileSync(p, 'utf8');
  scanned++;
  if (h.includes('<!--CUTLINK-->')) { already++; continue; }

  const names = [...h.matchAll(/<div class="n">([^<]+)<\/div>/g)].map(m => m[1]);
  if (!names.length) continue;
  const hit = matchCut(names);
  if (!hit) continue;

  // sits directly after the ingredients section, where the decision is being made
  const anchor = h.lastIndexOf('</section>', h.indexOf('class="ing"') >= 0 ? h.indexOf('class="ing"') + 4000 : 0);
  const idx = h.indexOf('</section>', h.indexOf('class="ing"'));
  if (idx < 0) continue;

  wired++;
  byCut[hit.cut.s] = (byCut[hit.cut.s] || 0) + 1;
  if (sample.length < 12) sample.push(`${d.slice(0, 26).padEnd(28)} ${hit.via.slice(0, 24).padEnd(26)} -> /cuts/${hit.cut.s}/`);
  if (APPLY) fs.writeFileSync(p, h.slice(0, idx) + NOTE(hit.cut, hit.via) + h.slice(idx));
}

console.log(`${APPLY ? 'APPLIED' : 'DRY RUN'}  recipes ${scanned} | already had a cut link ${already} | NEWLY WIRED ${wired}`);
console.log(`  cut guides now reached: ${Object.keys(byCut).length} of ${CUTS.length}`);
console.log('\n  sample:');
sample.forEach(s => console.log('    ' + s));
console.log('\n  inbound per cut guide:');
Object.entries(byCut).sort((a, b) => b[1] - a[1]).slice(0, 12).forEach(([c, n]) => console.log(`    ${String(n).padStart(4)}x  /cuts/${c}/`));
if (!APPLY) console.log('\n  re-run with --apply to write.');

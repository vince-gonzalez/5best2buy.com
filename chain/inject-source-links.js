// inject-source-links.js — fill every ingredient's "Source it" link it can.
//
//   node inject-source-links.js            dry run
//   node inject-source-links.js --apply
//
// Replaces the separate single-name and combo passes; both now share resolver.js
// so the rules cannot drift apart. Handles:
//   - a plain ingredient  -> one shelf
//   - a compound          -> one link per component it can resolve
//
// Leaves the "Local / market" label wherever nothing resolves confidently,
// because a wrong source link sends a cook to buy the wrong thing and nobody
// reviews these one at a time.
const fs = require('fs'), path = require('path');
const { resolve, resolveCombo, isCombo } = require('./resolver.js');

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

const SRC = hits => `<div class="src">` +
  hits.map(h => `<a class="on" href="/hunt/${h.slug}/">${h.label || 'Source it'} &rarr;</a>`).join(' ') +
  `</div>`;

let scanned = 0, already = 0, wiredSingle = 0, wiredCombo = 0, links = 0, skipped = 0, files = 0;
const reached = new Set(), sample = [];

for (const d of fs.readdirSync(path.join(ROOT, 'recipes'))) {
  const p = path.join(ROOT, 'recipes', d, 'index.html');
  if (!fs.existsSync(p)) continue;
  let h = fs.readFileSync(p, 'utf8');
  const before = h;

  let out = '', pos = 0;
  for (;;) {
    const start = h.indexOf('<div class="ing">', pos);
    if (start < 0) { out += h.slice(pos); break; }
    out += h.slice(pos, start);

    let depth = 0, end = -1;
    const re = /<div\b|<\/div>/g; re.lastIndex = start;
    let m;
    while ((m = re.exec(h))) {
      if (m[0] === '</div>') { depth--; if (depth === 0) { end = m.index + 6; break; } }
      else depth++;
    }
    if (end < 0) { out += h.slice(start); break; }

    const block = h.slice(start, end);
    pos = end; scanned++;

    if (/class="src"><a class="on" href="\/hunt\//.test(block)) { already++; out += block; continue; }
    const name = (block.match(/<div class="n">([^<]+)<\/div>/) || [])[1];
    if (!name) { skipped++; out += block; continue; }

    let hits = null;
    if (isCombo(name)) {
      const c = resolveCombo(name);
      if (c) { hits = c; wiredCombo++; }
    } else {
      const r = resolve(name);
      if (r) { hits = [{ slug: r.slug }]; wiredSingle++; }
    }
    if (!hits) { skipped++; out += block; continue; }

    links += hits.length;
    hits.forEach(x => reached.add(x.slug));
    if (sample.length < 18) sample.push(`${name.trim().slice(0, 32).padEnd(34)} -> ${hits.map(x => x.slug).join(' + ')}`);
    out += block.replace(/<div class="src">[\s\S]*?<\/div>/, SRC(hits));
  }
  h = out;
  if (h !== before) { files++; if (APPLY) fs.writeFileSync(p, h); }
}

console.log(`${APPLY ? 'APPLIED' : 'DRY RUN'}  lines ${scanned} | already ${already} | single ${wiredSingle} | combo ${wiredCombo} | links ${links} | left alone ${skipped}`);
console.log(`  recipes affected: ${files} | distinct shelves reached by this pass: ${reached.size}`);
console.log('\n  sample:');
sample.forEach(s => console.log('    ' + s));
if (!APPLY) console.log('\n  re-run with --apply to write.');

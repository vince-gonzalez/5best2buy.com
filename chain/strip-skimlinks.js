// strip-skimlinks.js — one auto-affiliate rewriter per page, and it's Awin.
//
// Two link rewriters on one page race to convert the same anchor. Whichever
// wins, both networks can log a click on it, and a merchant seeing one sale
// claimed twice is how a publisher account gets closed rather than paid.
//
// The site had 180 pages running both. Re-running the full build made it 2,439
// -- every page -- because inject-awin.js and inject-skim.js each default to
// "everywhere" and running both in sequence is all it takes.
//
// Keeping Awin over Skimlinks: it is a direct publisher relationship with no
// aggregator revenue share, and it was already deployed on four times as many
// pages, which is the closest thing to a stated intent in the repo. That is a
// reversible call -- to invert it, strip the Awin tag instead and drop
// inject-awin.js from the chain rather than inject-skim.js.
const fs = require('fs'), path = require('path');
const ROOT = 'C:/tmp/5b2b-live';
const APPLY = process.argv.includes('--apply');

const SKIM = '<script type="text/javascript" src="https://s.skimresources.com/js/305454X1793659.skimlinks.js"></script>';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

let stripped = 0, alsoBlank = 0, hadAwin = 0, scanned = 0;
for (const f of walk(ROOT)) {
  let h = fs.readFileSync(f, 'utf8');
  scanned++;
  if (h.includes('dwin2.com/pub.2961345')) hadAwin++;
  if (!h.includes('skimresources.com')) continue;

  const before = h;
  h = h.split(SKIM + '\n').join('').split(SKIM).join('');
  // catch any variant the exact-string pass missed rather than reporting a
  // clean run while leaving the tag on the page
  if (h.includes('skimresources.com')) {
    h = h.replace(/<script[^>]*skimresources\.com[^>]*>\s*<\/script>\s*/g, '');
    alsoBlank++;
  }
  if (h !== before) { stripped++; if (APPLY) fs.writeFileSync(f, h); }
}

console.log(`${APPLY ? 'APPLIED' : 'DRY RUN'}  scanned ${scanned} | Skimlinks removed from ${stripped} | needed the fallback pattern ${alsoBlank} | pages carrying Awin ${hadAwin}`);
if (!APPLY) console.log('  re-run with --apply to write.');

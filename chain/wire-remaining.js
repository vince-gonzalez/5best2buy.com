// wire-remaining.js — the last gaps the link audit turned up.
//
//   /data/         1.5 inbound. It is the citable asset and almost nothing points
//                  at it. The halal and kosher hubs are its natural home: the
//                  tables ARE those hubs, in a form a journalist can cite.
//   /states/       2.0 inbound.
//   /gifts/,
//   /independent/  orphaned, reachable only from the footer.
//
// (/flag/ stays orphaned on purpose -- it is noindex and only for our own use.)
//
// Idempotent via <!--XWIRE-->.
const fs = require('fs'), path = require('path');
// SITE_ROOT wins, like the rest of the chain; the old literal stays as the fallback.
// generate-cert-hubs rewrites /halal/ and /kosher/ from scratch, so this has to
// run after it, or the open-data box disappears from both hubs.
const ROOT = process.env.SITE_ROOT || 'C:/tmp/5b2b-live';

const box = inner => `<!--XWIRE--><p style="font-size:15px;line-height:1.75;color:#9aabc4;background:rgba(18,30,48,.55);border-left:2px solid #5fe39a;border-radius:0 8px 8px 0;padding:11px 15px;margin:22px 0 0;">${inner}</p><!--/XWIRE-->`;
const A = (href, text) => `<a href="${href}" style="color:#5fb0ef;">${text}</a>`;

const TARGETS = [
  // certification hubs -> the citable tables
  ['halal/index.html', box(`Every maker here is recorded with the authority that certifies it. That whole list is published as an open dataset you can download or cite: ${A('/data/halal-certified/', 'halal-certified makers, with certifier')} &mdash; part of our ${A('/data/', 'open data')}.`)],
  ['kosher/index.html', box(`Every maker here is recorded with the agency that certifies it. The whole list is published as an open dataset you can download or cite: ${A('/data/kosher-certified/', 'kosher-certified makers, with agency')} &mdash; part of our ${A('/data/', 'open data')}.`)],
  // the standards page now has 572 inbound; spend some of it on the thin sections
  ['how-we-hunt/index.html', box(`Two things that come out of this process and stand on their own: the makers sorted by ${A('/states/', 'the state they work in')}, and the whole list published as ${A('/data/', 'open, citable datasets')} &mdash; including which authority certifies each halal and kosher maker, which almost nobody records.`)],
  // catalogue page -> the orphans
  ['shelves/index.html', box(`Other ways in: ${A('/states/', 'makers by state')}, ${A('/cuts/', 'cut guides')}, ${A('/independent/', 'who is still independent')}, ${A('/gifts/', 'the gift guide')}, and our ${A('/data/', 'open datasets')}.`)],
];

let done = 0, missed = 0;
for (const [rel, block] of TARGETS) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) { console.log('  MISSING ' + rel); missed++; continue; }
  let h = fs.readFileSync(p, 'utf8');
  const RE = /<!--XWIRE-->[\s\S]*?<!--\/XWIRE-->/;
  const before = h;
  if (RE.test(h)) h = h.replace(RE, block);
  else if (h.includes('<footer')) h = h.replace('<footer', block + '\n<footer');
  else if (h.includes('</body>')) h = h.replace('</body>', block + '\n</body>');
  else { missed++; continue; }
  if (h !== before) { fs.writeFileSync(p, h); done++; console.log('  wired ' + rel); }
}
console.log(`cross-wiring: ${done} page(s) updated, ${missed} skipped`);

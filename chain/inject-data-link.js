// inject-data-link.js — link the open datasets from every page.
//
// /data/ was reachable from seven pages. Every other section — swap, cuts,
// soda, states — is linked from all 2,549. The badge, which is linked from 572
// shelves, produced zero backlinks across 243 audited maker sites. The datasets
// are the one link mechanism that has not been disproven, because CC BY makes
// attribution a licence condition rather than a favour, and they were the least
// discoverable thing on the site.
//
// This is a footer line rather than a seventh bottom-nav item: the nav already
// has six entries and a seventh is unusable on a phone. The line states the
// licence, because "you may reuse this if you credit us" is the part that
// actually produces a link — a bare nav link says nothing about permission.
//
// Idempotent via <!--DATALINK-->.
const fs = require('fs'), path = require('path');
const ROOT = 'C:/tmp/5b2b-live';

const SNIP = `<!--DATALINK--><div style="max-width:62ch;margin:26px auto 78px;padding:11px 14px;border:1px solid rgba(120,150,190,.25);border-left:3px solid #f0c560;border-radius:9px;font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;font-size:15px;line-height:1.5;color:#9aabc4;">
<b style="color:#f0c560;font-weight:600;">Open data.</b> Every maker on this site is published as a free dataset under <a href="https://creativecommons.org/licenses/by/4.0/" rel="license nofollow" style="color:#c8d3e6;">CC&nbsp;BY&nbsp;4.0</a> &mdash; use it in anything, commercial or not, as long as you credit <a href="/data/" style="color:#c8d3e6;">5best2buy</a>. <a href="/data/" style="color:#f0c560;text-decoration:none;">Browse the datasets &rarr;</a>
</div><!--/DATALINK-->`;

const RE = /<!--DATALINK-->[\s\S]*?<!--\/DATALINK-->/;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === '.well-known' || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

let added = 0, refreshed = 0, skipped = 0;
for (const f of walk(ROOT)) {
  // don't put a "browse the datasets" link on the datasets
  if (/[\\/]data[\\/]/.test(f)) { skipped++; continue; }
  let h = fs.readFileSync(f, 'utf8');
  const before = h;
  if (RE.test(h)) { h = h.replace(RE, SNIP); if (h !== before) refreshed++; }
  else if (h.includes('</body>')) { h = h.replace('</body>', SNIP + '\n</body>'); added++; }
  else { skipped++; continue; }
  if (h !== before) fs.writeFileSync(f, h);
}
console.log(`open-data link: ${added} page(s) added, ${refreshed} refreshed, ${skipped} skipped (is /data/ or no body)`);

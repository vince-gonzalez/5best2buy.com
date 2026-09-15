// generate-crosslinks.js — reverse-link shelves -> recipes.
// Scans every /recipes/*/index.html for the shelves it sources (/hunt/<slug>/),
// then injects a "Cook With This" block onto each /hunt/<slug>/index.html.
// Idempotent: replaces the block between <!--XREF-START--> / <!--XREF-END--> markers.
const fs = require('fs'), path = require('path');
const ROOT = 'C:/tmp/5b2b-live';
const CAP = 30; // max recipes listed per shelf (alphabetical); overflow noted as "+N more"

// ---- 1. Build shelf -> [{slug,name}] from rendered recipe pages ----
const recipeDirs = fs.readdirSync(path.join(ROOT, 'recipes')).filter(d =>
  fs.existsSync(path.join(ROOT, 'recipes', d, 'index.html')));
const shelfToRecipes = {};
for (const r of recipeDirs) {
  const h = fs.readFileSync(path.join(ROOT, 'recipes', r, 'index.html'), 'utf8');
  const m = h.match(/<h1>([\s\S]*?)<\/h1>/);
  let name = m ? m[1].replace(/<[^>]+>/g, '').replace(/,?\s*and where to source (it|them).*$/i, '').trim() : r;
  const shelves = new Set();
  for (const mm of h.matchAll(/href="\/hunt\/([a-z0-9-]+)\//g)) shelves.add(mm[1]);
  for (const s of shelves) (shelfToRecipes[s] = shelfToRecipes[s] || []).push({ slug: r, name });
}
for (const s in shelfToRecipes) shelfToRecipes[s].sort((a, b) => a.name.localeCompare(b.name));

// ---- 2. Inject block into each shelf page ----
let updated = 0, totalLinks = 0;
for (const s in shelfToRecipes) {
  const p = path.join(ROOT, 'hunt', s, 'index.html');
  if (!fs.existsSync(p)) continue;
  let h = fs.readFileSync(p, 'utf8');
  const all = shelfToRecipes[s];
  const shown = all.slice(0, CAP);
  totalLinks += shown.length;
  const links = shown.map(r => `<a href="/recipes/${r.slug}/" style="color:var(--gold);text-decoration:none;">${r.name}</a>`).join(' &middot; ');
  const more = all.length > CAP ? ` &middot; <a href="/recipes/" style="color:var(--meta);text-decoration:none;">+${all.length - CAP} more &rarr;</a>` : '';
  const block = `<!--XREF-START-->
  <div style="font-family:var(--fm);border-top:1px solid var(--line);margin-top:30px;padding-top:20px;">
    <div style="font-family:var(--fd);font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:8px;">Cook With This</div>
    <div style="font-size:14px;line-height:1.95;color:var(--soft);">${all.length} recipe${all.length > 1 ? 's' : ''} on 5best2buy use this &mdash; ${links}${more}</div>
  </div>
  <!--XREF-END-->`;
  if (/<!--XREF-START-->[\s\S]*?<!--XREF-END-->/.test(h)) {
    h = h.replace(/<!--XREF-START-->[\s\S]*?<!--XREF-END-->/, block);
  } else {
    h = h.replace(/(\n\s*)(<p class="disclosure">)/, `\n  ${block}\n$1$2`);
  }
  fs.writeFileSync(p, h);
  updated++;
}
console.log('shelves cross-linked:', updated, '| total recipe links added:', totalLinks);

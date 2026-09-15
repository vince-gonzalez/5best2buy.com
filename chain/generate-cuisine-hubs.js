// generate-cuisine-hubs.js — /cuisine/<slug>/ landing pages (one per cuisine with enough recipes) +
// a /cuisine/ index. Captures head terms ("italian recipes", "thai recipes"). Ad-supported (not recipes).
// Run AFTER method-pages / vertical-hubs, BEFORE inject-navbar. Appends to sitemap.
const fs = require('fs'), path = require('path');
const ROOT = 'C:/tmp/5b2b-live', DATE = '2026-07-11', BASE = 'https://www.5best2buy.com';
const R = JSON.parse(fs.readFileSync(ROOT + '/data-methods.json', 'utf8'));
const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const cslug = c => String(c).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const MIN = 4;   // don't build thin hubs

const byC = {};
// Mocktails carry a BAR-FAMILY in the cuisine field (Tiki/Sour/Highball...), not a world cuisine —
// they have their own home at /mocktails/, so keep them out of the cuisine landing pages.
for (const r of R) { if (/^mocktail$/i.test(r.category || '')) continue; (byC[r.cuisine] = byC[r.cuisine] || []).push(r); }
const cuisines = Object.keys(byC).filter(c => c && byC[c].length >= MIN).sort();

const STYLE = `<style>
  :root{--navy:#0d1421;--surface:#121e30;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fd:'Rajdhani','Arial Narrow',sans-serif;--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--navy);color:var(--text);font-family:Georgia,'Times New Roman',serif;line-height:1.7;padding:18px 18px 60px;max-width:860px;margin:0 auto;font-size:17px;}
  nav.bc{font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);}
  nav.bc a{color:var(--meta);text-decoration:none;}
  .eyebrow{font-family:var(--fm);font-size:12.5px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin:20px 0 8px;}
  h1{font-family:var(--fd);font-size:clamp(32px,6.5vw,52px);font-weight:700;letter-spacing:.5px;line-height:1.03;margin-bottom:14px;}
  .dek{color:var(--soft);max-width:66ch;margin-bottom:20px;}
  .vnav{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 26px;}
  .vnav a{font-family:var(--fm);font-size:15px;font-weight:600;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:6px 14px;text-decoration:none;}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px;}
  .rc{display:block;background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:10px;padding:14px 15px;text-decoration:none;}
  .rc .t{font-family:var(--fd);font-size:19px;font-weight:700;letter-spacing:.2px;color:var(--text);line-height:1.12;}
  .rc .m{font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);margin-top:5px;}
  .rc:hover{border-color:var(--gold);}
  .count{font-family:var(--fm);font-size:12px;color:var(--meta);margin-bottom:14px;}
  .foot{font-family:var(--fm);font-size:15px;color:var(--meta);border-top:1px solid var(--line);padding-top:18px;margin-top:34px;}
  .foot a{color:var(--gold);text-decoration:none;}
</style>`;

const head = (title, desc, url, graph) => `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/png" href="/logo.png" /><meta name="theme-color" content="#0d1421" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc).slice(0, 290)}" />
<link rel="canonical" href="${url}" />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GG5QF6LH0D"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GG5QF6LH0D');</script>
<meta name="google-adsense-account" content="ca-pub-8826956454892311" />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8826956454892311" crossorigin="anonymous"></script>
${STYLE}
<meta property="og:title" content="${esc(title)}" /><meta property="og:description" content="${esc(desc).slice(0, 200)}" />
<meta property="og:url" content="${url}" /><meta property="og:image" content="${BASE}/logo.png" />
<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>
</head><body>`;

const urls = []; let built = 0;
for (const c of cuisines) {
  const list = byC[c].slice().sort((a, b) => a.title.localeCompare(b.title));
  const slug = cslug(c), url = `${BASE}/cuisine/${slug}/`;
  const title = `${c} Recipes — ${list.length}, Ingredients First & Ad-Free | 5best2buy.com`;
  const desc = `${list.length} ${c} recipes — the real method, ingredients first, every page ad-free, and exactly where to source each ingredient. No pop-ups, no life story.`;
  const others = cuisines.filter(x => x !== c).slice(0, 10);
  const nav = `<a href="/recipes/">All recipes</a>` + others.map(x => `<a href="/cuisine/${cslug(x)}/">${esc(x)}</a>`).join('');
  const cards = list.map(r => `<a class="rc" href="/recipes/${r.slug}/"><div class="t">${esc(r.title)}</div><div class="m">${esc(r.category)}</div></a>`).join('\n');
  const graph = [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "5best2buy", "item": BASE + "/" },
      { "@type": "ListItem", "position": 2, "name": "Recipes", "item": BASE + "/recipes/" },
      { "@type": "ListItem", "position": 3, "name": `${c} Recipes`, "item": url }]},
    { "@type": "CollectionPage", "name": `${c} Recipes`, "description": desc, "url": url,
      "isPartOf": { "@type": "WebSite", "name": "5best2buy", "url": BASE + "/" } }
  ];
  const page = head(title, desc, url, graph) + `
  <nav class="bc" aria-label="Breadcrumb"><a href="/">5best2buy.com</a> &rsaquo; <a href="/recipes/">Recipes</a> &rsaquo; ${esc(c)}</nav>
  <div class="eyebrow">Cuisine &middot; ${esc(c)}</div>
  <h1>${esc(c)} Recipes</h1>
  <p class="dek">${esc(list.length)} ${esc(c)} recipes done right &mdash; the real method, ingredients first, and next to every ingredient, exactly where to buy the best version. Every recipe page is ad-free.</p>
  <div class="vnav">${nav}</div>
  <p class="count">${list.length} recipes &middot; every one ad-free and sourced</p>
  <div class="grid">
${cards}
  </div>
  <p class="foot">No paywall. Recipes stay ad-free. <a href="/cuisine/">Browse every cuisine &rarr;</a> &middot; <a href="/recipes/">All ${R.length} recipes &rarr;</a></p>
</body></html>`;
  fs.mkdirSync(path.join(ROOT, 'cuisine', slug), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'cuisine', slug, 'index.html'), page);
  urls.push(url); built++;
}

// /cuisine/ index
const idxCards = cuisines.map(c => `<a class="rc" href="/cuisine/${cslug(c)}/"><div class="t">${esc(c)}</div><div class="m">${byC[c].length} recipes</div></a>`).join('\n');
const idxUrl = `${BASE}/cuisine/`;
const idxGraph = [{ "@type": "CollectionPage", "name": "Recipes by Cuisine", "url": idxUrl, "isPartOf": { "@type": "WebSite", "name": "5best2buy", "url": BASE + "/" } }];
fs.writeFileSync(path.join(ROOT, 'cuisine', 'index.html'), head('Recipes by Cuisine — Every Kitchen, Ad-Free | 5best2buy.com', `Browse ${R.length} recipes across ${cuisines.length} cuisines — Italian, Mexican, Thai, and more. Ingredients first, ad-free, sourced.`, idxUrl, idxGraph) + `
  <nav class="bc" aria-label="Breadcrumb"><a href="/">5best2buy.com</a> &rsaquo; <a href="/recipes/">Recipes</a> &rsaquo; By Cuisine</nav>
  <div class="eyebrow">5best2buy &middot; Recipes</div>
  <h1>Recipes by Cuisine</h1>
  <p class="dek">Every kitchen we cook from &mdash; ${cuisines.length} cuisines, ${R.length} recipes, all ad-free and sourced. Pick a tradition.</p>
  <p class="count">${cuisines.length} cuisines</p>
  <div class="grid">
${idxCards}
  </div>
  <p class="foot"><a href="/recipes/">All ${R.length} recipes &rarr;</a></p>
</body></html>`);
urls.push(idxUrl);

// append to sitemap (idempotent)
const smp = path.join(ROOT, 'sitemap.xml');
if (fs.existsSync(smp)) {
  let sm = fs.readFileSync(smp, 'utf8');
  const add = urls.filter(u => !sm.includes(u)).map(u => `  <url><loc>${u}</loc><lastmod>${DATE}</lastmod><changefreq>weekly</changefreq></url>`).join('\n');
  if (add) { fs.writeFileSync(smp, sm.replace('</urlset>', add + '\n</urlset>')); }
}
console.log('cuisine hubs:', built, '+ index |', cuisines.length, 'cuisines >=', MIN, 'recipes');

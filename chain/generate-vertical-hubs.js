// generate-vertical-hubs.js — top-level course/component hubs (/sauces/, /sides/, /appetizers/, /drinks/).
// Turns buried recipe CATEGORIES into destinations that rank as topics and get bookmarked. Ad-supported
// (not recipe pages). Reads data-methods.json {slug,title,cuisine,category}. Run AFTER generate-aisles /
// method-pages, BEFORE inject-navbar (so navbar + skim + awin stamp these new pages).
const fs = require('fs'), path = require('path');
const ROOT = 'C:/tmp/5b2b-live';
const DATE = '2026-07-10';
const R = JSON.parse(fs.readFileSync(ROOT + '/data-methods.json', 'utf8'));

// condiment mascots (hand-authored SVG) — used as the hero on the sauce hub
const SAUCE_MASCOTS = `<svg viewBox="0 0 520 150" width="260" height="75" aria-hidden="true" style="margin:6px 0 2px;">
<g transform="translate(20,14) rotate(-5) scale(0.62)"><animateTransform attributeName="transform" type="translate" additive="sum" dur="2.2s" begin="0s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" values="0 0;0 -8;0 0"/><rect x="29" y="4" width="6" height="7" rx="2" fill="#b71c1c"/><path d="M23 30 L41 30 L37 12 L27 12 Z" fill="#b71c1c"/><path d="M22 42 L42 42 Q56 46 56 76 L56 150 Q56 158 48 158 L16 158 Q8 158 8 150 L8 76 Q8 46 22 42 Z" fill="#e53935" stroke="#8e1414" stroke-width="2"/><rect x="15" y="80" width="34" height="48" rx="8" fill="#fff" stroke="#e0b0b0" stroke-width="1.5"/><circle cx="25" cy="98" r="4.2" fill="#1b1b1b"/><circle cx="39" cy="98" r="4.2" fill="#1b1b1b"/><path d="M24 107 q8 7 16 0" fill="none" stroke="#1b1b1b" stroke-width="2.4" stroke-linecap="round"/><circle cx="18" cy="105" r="3.2" fill="#ff8a80"/><circle cx="46" cy="105" r="3.2" fill="#ff8a80"/></g>
<g transform="translate(150,16) rotate(5) scale(0.6)"><animateTransform attributeName="transform" type="translate" additive="sum" dur="2.2s" begin="0.18s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" values="0 0;0 -8;0 0"/><path d="M54 34 L66 26 L61 42 Z" fill="#fdfaf0" stroke="#cbb56a" stroke-width="1.5"/><rect x="10" y="34" width="44" height="106" rx="7" fill="#f6c945" stroke="#d9a521" stroke-width="2"/><rect x="6" y="104" width="52" height="42" rx="7" fill="#fdfaf0" stroke="#cbb56a" stroke-width="2"/><circle cx="26" cy="64" r="4.2" fill="#1b1b1b"/><circle cx="40" cy="64" r="4.2" fill="#1b1b1b"/><path d="M25 72 q8 7 16 0" fill="none" stroke="#1b1b1b" stroke-width="2.4" stroke-linecap="round"/><circle cx="19" cy="70" r="3.2" fill="#e8a13a" opacity="0.7"/><circle cx="47" cy="70" r="3.2" fill="#e8a13a" opacity="0.7"/></g>
<g transform="translate(270,20) rotate(-4) scale(0.58)"><animateTransform attributeName="transform" type="translate" additive="sum" dur="2.2s" begin="0.36s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" values="0 0;0 -8;0 0"/><path d="M12 30 q0 -14 20 -14 q20 0 20 14 v112 a8 8 0 0 1 -8 8 h-44 a8 8 0 0 1 -8 -8 z" fill="#f7f7f7" stroke="#9aa0a6" stroke-width="2"/><rect x="10" y="30" width="44" height="14" rx="4" fill="#cfd3d7" stroke="#9aa0a6" stroke-width="1.5"/><circle cx="24" cy="70" r="4" fill="#1b1b1b"/><circle cx="40" cy="70" r="4" fill="#1b1b1b"/><path d="M24 78 q8 7 16 0" fill="none" stroke="#1b1b1b" stroke-width="2.2" stroke-linecap="round"/></g>
<g transform="translate(370,20) rotate(6) scale(0.58)"><animateTransform attributeName="transform" type="translate" additive="sum" dur="2.2s" begin="0.54s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" values="0 0;0 -8;0 0"/><path d="M12 30 q0 -14 20 -14 q20 0 20 14 v112 a8 8 0 0 1 -8 8 h-44 a8 8 0 0 1 -8 -8 z" fill="#4e4034" stroke="#2c231a" stroke-width="2"/><rect x="10" y="30" width="44" height="14" rx="4" fill="#6e5c48" stroke="#2c231a" stroke-width="1.5"/><circle cx="24" cy="70" r="4" fill="#fff"/><circle cx="40" cy="70" r="4" fill="#fff"/><path d="M24 78 q8 7 16 0" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></g>
<g transform="translate(462,22) rotate(-5) scale(0.56)"><animateTransform attributeName="transform" type="translate" additive="sum" dur="2.2s" begin="0.72s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" values="0 0;0 -8;0 0"/><path d="M32 8 q6 8 2 16" fill="none" stroke="#b7a77f" stroke-width="3" stroke-linecap="round"/><path d="M32 22 q-30 6 -26 60 q4 42 26 44 q22 -2 26 -44 q4 -54 -26 -60 z" fill="#fbfaf6" stroke="#c9bfa6" stroke-width="2"/><circle cx="25" cy="70" r="4" fill="#1b1b1b"/><circle cx="39" cy="70" r="4" fill="#1b1b1b"/><path d="M25 78 q7 7 14 0" fill="none" stroke="#1b1b1b" stroke-width="2.2" stroke-linecap="round"/><circle cx="19" cy="76" r="3" fill="#e1bee7"/><circle cx="45" cy="76" r="3" fill="#e1bee7"/></g>
</svg>`;

const VERTICALS = [
  { slug:'sauces', cat:'Sauce', name:'Sauces & Dips', mascot:true,
    dek:'Every dipping sauce, spread, dressing, and copycat "what IS that" restaurant sauce — with our tested starting ratio and the seasonings left up to you. Every ingredient links to where to buy the best of it, and every page is ad-free.' },
  { slug:'sides', cat:'Side', name:'Sides', mascot:false,
    dek:'The supporting cast — potatoes every way, greens, grains, breads, and the sides that make the plate. Real methods, ingredients first, sourced, and ad-free.' },
  { slug:'appetizers', cat:'Appetizer', name:'Appetizers & Starters', mascot:false,
    dek:'Dips, bites, boards, and the things you put out before dinner. Crowd-pleasers with the real method and exactly where to source them — ad-free.' },
  { slug:'drinks', cat:'Drink', name:'Drinks & Sodas', mascot:false,
    dek:'Lemonades, punches, sodas, coolers, iced teas, and everyday refreshers for the whole table. Our ratio, your taste, sourced, and ad-free. (Looking for cocktails made alcohol-free? That is its own home — the Mocktail Bible.)' },
  { slug:'mocktails', cat:'Mocktail', name:'The Mocktail Bible', mascot:false,
    dek:'The entire cocktail canon, built alcohol-free — mojito to Negroni, margarita to espresso martini, frozen and tiki and brunch. Written by an ex-bartender: every one names the real make-or-break move (build vs shake, express the peel, the bitter that replaces the booze). Same 25 ingredients, the whole bar. Our ratio, your taste, sourced, and ad-free.' },
];

const esc = s => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const STYLE = `<style>
  :root{--navy:#0d1421;--surface:#121e30;--blue:#5fb0ef;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fd:'Rajdhani','Arial Narrow',sans-serif;--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--navy);color:var(--text);font-family:Georgia,'Times New Roman',serif;line-height:1.7;padding:18px 18px 60px;max-width:860px;margin:0 auto;font-size:17px;}
  nav.bc{font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);}
  nav.bc a{color:var(--meta);text-decoration:none;}
  .eyebrow{font-family:var(--fm);font-size:12.5px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin:20px 0 8px;}
  h1{font-family:var(--fd);font-size:clamp(32px,6.5vw,52px);font-weight:700;letter-spacing:.5px;line-height:1.03;margin-bottom:14px;}
  .dek{color:var(--soft);max-width:66ch;margin-bottom:20px;}
  .vnav{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 26px;}
  .vnav a{font-family:var(--fm);font-size:15px;font-weight:600;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:6px 14px;text-decoration:none;}
  .vnav a.on{color:#10203a;background:var(--gold);border-color:var(--gold);}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px;}
  .rc{display:block;background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:10px;padding:14px 15px;text-decoration:none;}
  .rc .t{font-family:var(--fd);font-size:19px;font-weight:700;letter-spacing:.2px;color:var(--text);line-height:1.12;}
  .rc .m{font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);margin-top:5px;}
  .rc:hover{border-color:var(--gold);}
  .count{font-family:var(--fm);font-size:12px;color:var(--meta);margin-bottom:14px;}
  .foot{font-family:var(--fm);font-size:15px;color:var(--meta);border-top:1px solid var(--line);padding-top:18px;margin-top:34px;}
  .foot a{color:var(--gold);text-decoration:none;}
</style>`;

const sitemapUrls = []; let built = 0;
for (const v of VERTICALS) {
  const list = R.filter(r => r.category === v.cat).sort((a,b)=>a.title.localeCompare(b.title));
  if (!list.length) { console.log('skip', v.slug, '(no recipes)'); continue; }
  const url = `https://www.5best2buy.com/${v.slug}/`;
  const title = `${v.name} — ${list.length} Recipes, Ingredients First & Ad-Free | 5best2buy.com`;
  const desc = esc(v.dek).slice(0,290);
  const vnav = VERTICALS.map(x=>`<a href="/${x.slug}/"${x.slug===v.slug?' class="on"':''}>${x.name}</a>`).join('') + '<a href="/recipes/">All recipes</a>';
  const cards = list.map(r=>`<a class="rc" href="/recipes/${r.slug}/"><div class="t">${esc(r.title)}</div><div class="m">${esc(r.cuisine)}</div></a>`).join('\n');
  const graph = [
    {"@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"5best2buy.com","item":"https://www.5best2buy.com/"},
      {"@type":"ListItem","position":2,"name":v.name,"item":url}]},
    {"@type":"CollectionPage","name":v.name,"description":v.dek,"url":url,
      "isPartOf":{"@type":"WebSite","name":"5best2buy.com","url":"https://www.5best2buy.com/"}}
  ];
  const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/png" href="/logo.png" />
<link rel="apple-touch-icon" href="/logo.png" />
<meta name="theme-color" content="#0d1421" />
<title>${esc(title)}</title>
<meta name="description" content="${desc}" />
<link rel="canonical" href="${url}" />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GG5QF6LH0D"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GG5QF6LH0D');</script>
<meta name="google-adsense-account" content="ca-pub-8826956454892311" />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8826956454892311" crossorigin="anonymous"></script>
${STYLE}
<meta property="og:type" content="website" />
<meta property="og:site_name" content="5best2buy.com" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${desc}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="https://www.5best2buy.com/logo.png" />
<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@graph":graph})}</script>
</head>
<body>
  <nav class="bc" aria-label="Breadcrumb"><a href="/">5best2buy.com</a> &rsaquo; ${esc(v.name)}</nav>
  <div class="eyebrow">5best2buy &middot; ${esc(v.name)}</div>
  ${v.mascot ? SAUCE_MASCOTS : ''}
  <h1>${esc(v.name)}</h1>
  <p class="dek">${esc(v.dek)}</p>
  <div class="vnav">${vnav}</div>
  <p class="count">${list.length} recipes &middot; every one is ad-free and links to where to source the ingredients</p>
  <div class="grid">
${cards}
  </div>
  <p class="foot">No paywall. Recipes stay ad-free. Want your product on a shelf here? <a href="mailto:admin@5best2buy.com">admin@5best2buy.com</a> &middot; <a href="/recipes/">Browse all ${R.length} recipes &rarr;</a></p>
</body>
</html>`;
  fs.mkdirSync(path.join(ROOT, v.slug), {recursive:true});
  fs.writeFileSync(path.join(ROOT, v.slug, 'index.html'), page);
  built++; sitemapUrls.push(url);
  console.log(v.slug.padEnd(12), list.length, 'recipes');
}

// append hub urls to sitemap (idempotent)
const smp = path.join(ROOT,'sitemap.xml');
if (fs.existsSync(smp)) {
  let sm = fs.readFileSync(smp,'utf8');
  const add = sitemapUrls.filter(u=>!sm.includes(u))
    .map(u=>`  <url><loc>${u}</loc><lastmod>${DATE}</lastmod><changefreq>weekly</changefreq></url>`).join('\n');
  if (add) { sm = sm.replace('</urlset>', add + '\n</urlset>'); fs.writeFileSync(smp, sm); console.log('sitemap: +'+sitemapUrls.length+' hubs'); }
}

// (homepage strip injection REMOVED — the front door is now authored once in generate-aisles.js homePage())
console.log('vertical hubs built:', built);

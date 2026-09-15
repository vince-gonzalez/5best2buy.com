// generate-method-pages.js — appliance landing pages (/recipes/air-fryer/ etc.) from data-methods.json.
// Owns "air fryer recipes" head terms + feeds internal links; each recipe page already answers the long-tail
// "can you make X in an air fryer" via FAQ schema. Ad-free, matching the recipes browse. Run AFTER generate-aisles,
// BEFORE inject-navbar.
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
const DATE = '2026-07-08';
const M = JSON.parse(fs.readFileSync(ROOT + '/data-methods.json', 'utf8'));

const METHODS = [
  { slug:'air-fryer', name:'Air Fryer', match:r=>r.af==='yes',
    blurb:'Recipes that genuinely crisp up in an air-fryer basket — no wishful thinking. On every recipe page we answer straight whether it can be air-fried, including the ones that only work in an oven-safe insert and the ones that just don’t.' },
  { slug:'instant-pot', name:'Instant Pot', match:r=>r.tags.includes('Instant Pot'),
    blurb:'Braises, stews, beans, and soups that a pressure cooker turns around fast without losing depth.' },
  { slug:'slow-cooker', name:'Slow Cooker', match:r=>r.tags.includes('Slow cooker'),
    blurb:'Set-and-forget braises and soups that only get better over a long, low afternoon.' },
  { slug:'one-pot', name:'One-Pot', match:r=>r.tags.includes('One-pot'),
    blurb:'Everything in a single pot or skillet — fewer dishes, one clean cleanup.' },
  { slug:'sheet-pan', name:'Sheet Pan', match:r=>r.tags.includes('Sheet pan'),
    blurb:'Roast it all on one tray in the oven and walk away.' },
  { slug:'grill', name:'Grill', match:r=>r.tags.includes('Grill'),
    blurb:'Fire and char — cookout mains and anything better with a lick of smoke.' },
  { slug:'no-cook', name:'No-Cook', match:r=>r.tags.includes('No-cook'),
    blurb:'No heat, no stove — dips, salads, drinks, and cures you just assemble.' },
];

const esc = s => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const STYLE = `<style>
  :root{--navy:#0d1421;--surface:#121e30;--card:#16223a;--blue:#5fb0ef;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fd:'Rajdhani','Arial Narrow',sans-serif;--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--navy);color:var(--text);font-family:Georgia,'Times New Roman',serif;line-height:1.7;padding:18px 18px 60px;max-width:820px;margin:0 auto;font-size:17px;}
  nav.bc{font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);}
  nav.bc a{color:var(--meta);text-decoration:none;}
  .eyebrow{font-family:var(--fm);font-size:12.5px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin:22px 0 8px;}
  h1{font-family:var(--fd);font-size:clamp(32px,6.5vw,52px);font-weight:700;letter-spacing:.5px;line-height:1.03;margin-bottom:14px;}
  .dek{color:var(--soft);max-width:64ch;margin-bottom:22px;}
  .mnav{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 30px;}
  .mnav a{font-family:var(--fm);font-size:15px;font-weight:600;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:6px 14px;text-decoration:none;}
  .mnav a.on{color:#10203a;background:var(--gold);border-color:var(--gold);}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;}
  .rc{display:block;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:14px 15px;text-decoration:none;}
  .rc .t{font-family:var(--fd);font-size:20px;font-weight:700;letter-spacing:.2px;color:var(--text);line-height:1.1;}
  .rc .m{font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);margin-top:5px;}
  .rc:hover{border-color:var(--gold);}
  .count{font-family:var(--fm);font-size:12px;color:var(--meta);margin-bottom:14px;}
  .foot{font-family:var(--fm);font-size:15px;color:var(--meta);border-top:1px solid var(--line);padding-top:18px;margin-top:34px;}
</style>`;

let built = 0; const sitemapUrls = [];
for (const method of METHODS) {
  const list = M.filter(method.match).sort((a,b)=>a.title.localeCompare(b.title));
  const url = `https://www.5best2buy.com/recipes/${method.slug}/`;
  const title = `${method.name} Recipes — ${list.length} to Cook, Honestly Tagged | 5best2buy`;
  const desc = esc(method.blurb).slice(0,290);
  const graph = [
    {"@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"5best2buy.com","item":"https://www.5best2buy.com/"},
      {"@type":"ListItem","position":2,"name":"Recipes","item":"https://www.5best2buy.com/recipes/"},
      {"@type":"ListItem","position":3,"name":`${method.name} Recipes`,"item":url}]},
    {"@type":"CollectionPage","name":`${method.name} Recipes`,"description":method.blurb,"url":url,
      "isPartOf":{"@type":"WebSite","name":"5best2buy.com","url":"https://www.5best2buy.com/"}}
  ];
  const mnav = METHODS.map(x=>`<a href="/recipes/${x.slug}/"${x.slug===method.slug?' class="on"':''}>${x.name}</a>`).join('');
  const cards = list.map(r=>`<a class="rc" href="/recipes/${r.slug}/"><div class="t">${esc(r.title)}</div><div class="m">${esc(r.cuisine)} &middot; ${esc(r.category)}</div></a>`).join('\n');
  const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/png" href="/logo.png" />
<link rel="apple-touch-icon" href="/logo.png" />
<link rel="manifest" href="/manifest.webmanifest" />
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
  <nav class="bc" aria-label="Breadcrumb"><a href="/">5best2buy.com</a> &rsaquo; <a href="/recipes/">Recipes</a> &rsaquo; ${method.name}</nav>
  <div class="eyebrow">Cook by Method &middot; ${method.name}</div>
  <h1>${method.name} Recipes</h1>
  <p class="dek">${esc(method.blurb)}</p>
  <div class="mnav">${mnav}</div>
  <p class="count">${list.length} recipes &middot; every one links to where to source the ingredients</p>
  <div class="grid">
${cards}
  </div>
  <p class="foot">No paywall. Minimal ads. Every recipe is ad-free and tells you straight what it can and can’t do. <a href="/recipes/" style="color:var(--gold);">All recipes &rarr;</a></p>
</body>
</html>`;
  fs.mkdirSync(path.join(ROOT,'recipes',method.slug), {recursive:true});
  fs.writeFileSync(path.join(ROOT,'recipes',method.slug,'index.html'), page);
  built++; sitemapUrls.push(url);
  console.log(method.slug.padEnd(14), list.length, 'recipes');
}

// append method pages to sitemap.xml (idempotent)
const smp = path.join(ROOT,'sitemap.xml');
if (fs.existsSync(smp)) {
  let sm = fs.readFileSync(smp,'utf8');
  const add = sitemapUrls.filter(u=>!sm.includes(u))
    .map(u=>`  <url><loc>${u}</loc><lastmod>${DATE}</lastmod><changefreq>weekly</changefreq></url>`).join('\n');
  if (add) { sm = sm.replace('</urlset>', add + '\n</urlset>'); fs.writeFileSync(smp, sm); console.log('sitemap: +'+sitemapUrls.filter(u=>!fs.readFileSync(smp,'utf8')).length); }
  console.log('sitemap updated with method pages');
}
// inject a "Cook by method" strip into the /recipes/ browse hub (runs after generate-recipe-index, so it persists)
const idx = path.join(ROOT,'recipes','index.html');
if (fs.existsSync(idx)) {
  let html = fs.readFileSync(idx,'utf8');
  html = html.replace(/<div class="mstrip"[\s\S]*?<\/div>\s*<!--\/mstrip-->/,'').replace(/\n\n(?=<)/g,'\n'); // clear any prior strip
  const links = METHODS.map(x=>`<a href="/recipes/${x.slug}/" style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;font-size:15px;font-weight:600;color:#c8d3e6;background:#121e30;border:1px solid rgba(120,150,190,0.18);border-radius:20px;padding:6px 14px;text-decoration:none;">${x.name}</a>`).join('');
  const strip = `\n  <div class="mstrip" style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:18px 0 6px;"><span style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#9aabc4;">Cook by method:</span>${links}</div><!--/mstrip-->`;
  if (!html.includes('class="mstrip"')) {
    html = html.replace(/(<h1>[^<]*Recipes[^<]*<\/h1>)/, '$1'+strip);
    fs.writeFileSync(idx, html);
    console.log('injected method strip into /recipes/');
  }
}
console.log('method pages built:', built);

// generate-cert-hubs.js — the two FEATURED hubs: /halal/ (Independent Halal) + /kosher/ (Independent Kosher).
// Reads the verified shelf-content gap files, groups the 6 shelves per certification, and builds a flagship
// directory page: the independent-vs-conglomerate wedge, certifier transparency, every shelf + its makers.
// These are HUBS (ad-supported) — one disclosed, non-anchor, in-article ad. Runs AFTER build-shelves /
// generate-aisles, BEFORE inject-navbar/skim/awin. Shelves live at /hunt/<slug>/ (built by build-shelves).
const fs = require('fs'), path = require('path');
// Same path rule as the build chain: SITE_ROOT wins, then a site beside this
// file, then the 5b2b-live next to the workspace. This was the last stage still
// hardcoded to C:/tmp/5b2b-live, so it had nothing to write once the site moved.
const __work = fs.existsSync(path.join(__dirname, 'recipe-batches'))
  ? __dirname : path.resolve(__dirname, '..');
const ROOT = process.env.SITE_ROOT
  || (fs.existsSync(path.join(__dirname, 'hunt'))
        ? __dirname : path.join(__work, '5b2b-live'));
const AD_CLIENT = 'ca-pub-8826956454892311';
const AD_SLOT = '6318594352';   // in-article unit, wired 2026-08-12

// Auto-collect every halal-*/kosher-* shelf from ALL shelf-content files so expansion waves appear
// in the hubs with zero rewiring. Ordered by a known priority, then any extras alphabetically.
const CONTENT = path.join(__work, 'shelf-content');
let ALL = [];
for (const f of fs.readdirSync(CONTENT).filter(f => f.endsWith('.js'))) {
  try { const a = require(path.join(CONTENT, f)); if (Array.isArray(a)) ALL = ALL.concat(a); } catch (e) {}
}
const bySlug = Object.fromEntries(ALL.map(s => [s.slug, s]));
const ORDER = ['halal-meat','halal-poultry','halal-seafood','halal-deli','halal-prepared','halal-frozen','halal-cheese','halal-jerky-snacks','halal-sweets','halal-pantry',
  'kosher-meat','kosher-fish','kosher-dairy','kosher-bakery','kosher-prepared','kosher-frozen','kosher-pantry','kosher-pickles','kosher-sweets','kosher-nuts','kosher-granola','kosher-oil','kosher-honey','kosher-specialty'];
const collect = prefix => {
  const slugs = Object.keys(bySlug).filter(s => s.startsWith(prefix));
  slugs.sort((a, b) => { const ia = ORDER.indexOf(a), ib = ORDER.indexOf(b); return (ia<0?99:ia) - (ib<0?99:ib) || a.localeCompare(b); });
  return slugs.map(s => bySlug[s]).filter(s => s && s.makers && s.makers.length);
};

const HUBS = [
  {
    slug: 'halal', name: 'Independent Halal', kind: 'Halal', cert: 'halal-certified', authority: 'certifier',
    shelves: collect('halal-'),
    dek: 'The home for independent, halal-certified American makers — the ones you cannot find on the big-box shelf. Most nationally-distributed halal packaged food is a handful of large operations; this hub points instead to the family butchers, small farms, and founder-run makers who hand-slaughter, small-batch, and ship direct. Every maker here names who certifies it halal, so you can check it yourself.',
    reads: 'Every maker on these shelves names its certifier — IFANCA, HFSAA, Halal Monitoring Services (HMS), Islamic Services of America (ISA), Halal Advocates, the American Halal Foundation, and named local authorities. We state the certifier on every listing rather than asking you to take "halal" on faith. Where the independent-and-certified field is genuinely small (certified-halal candy, for instance), we say so plainly and name the real makers rather than pad the shelf.',
    other: { slug:'kosher', name:'Independent Kosher' }
  },
  {
    slug: 'kosher', name: 'Independent Kosher', kind: 'Kosher', cert: 'kosher-certified', authority: 'hechsher',
    shelves: collect('kosher-'),
    dek: 'The home for independent, kosher-certified American makers — kept deliberately clear of the holding-company roll-ups that own much of the packaged-kosher aisle. This hub points to the last family matzo bakery, the pasture-raised glatt farms, the single-shop pickle makers and small creameries, each under a named supervision. Every maker here names its hechsher, so you can check it yourself.',
    reads: 'Every maker on these shelves names its certifying agency — OU (Orthodox Union), Star-K, OK, Kof-K, CRC, or a named local Vaad or rabbinical supervision. We state the hechsher on every listing, note "glatt" only where it truly applies, and keep conglomerate- and private-equity-owned brands off entirely. Where a shelf is small (kosher cheese needs a mashgiach at curd-set, so it stays rare), we say so plainly rather than pad it.',
    other: { slug:'halal', name:'Independent Halal' }
  },
];

const esc = s => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const shipLabel = { fast:'Ships fast', ground:'Ships ground', local:'Regional / local' };

const STYLE = `<style>
  :root{--navy:#0d1421;--surface:#121e30;--blue:#5fb0ef;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;--fd:'Rajdhani','Arial Narrow',sans-serif;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--navy);color:var(--text);font-family:Georgia,'Times New Roman',serif;line-height:1.7;padding:18px 18px 60px;max-width:900px;margin:0 auto;font-size:17px;}
  nav.bc{font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);}
  nav.bc a{color:var(--meta);text-decoration:none;}
  .eyebrow{font-family:var(--fm);font-size:12.5px;letter-spacing:3px;text-transform:uppercase;color:var(--green);margin:20px 0 8px;}
  h1{font-family:var(--fd);font-size:clamp(34px,7vw,56px);font-weight:700;letter-spacing:.5px;line-height:1.02;margin-bottom:12px;}
  .dek{color:var(--soft);max-width:68ch;margin-bottom:16px;}
  .reads{font-family:var(--fm);font-size:15px;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--green);border-radius:8px;padding:12px 15px;margin:0 0 20px;}
  .reads b{color:var(--green);}
  .hnav{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 22px;}
  .hnav a{font-family:var(--fm);font-size:15px;text-decoration:none;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:5px 13px;}
  .hnav a.on{background:var(--green);color:#08160d;border-color:var(--green);font-weight:700;}
  h2.sh{font-family:var(--fd);font-size:25px;font-weight:700;letter-spacing:.3px;margin:26px 0 4px;color:var(--gold);}
  h2.sh a{color:var(--gold);text-decoration:none;}
  .shdek{color:var(--soft);font-size:15px;margin:0 0 12px;max-width:68ch;}
  .makers{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:9px;margin-bottom:6px;}
  a.mk{display:block;text-decoration:none;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:11px 13px;color:var(--text);}
  a.mk:hover{border-color:var(--green);}
  a.mk .nm{font-family:var(--fm);font-weight:700;font-size:15px;}
  a.mk .cf{font-family:var(--fm);font-size:15px;color:var(--green);margin-top:2px;}
  a.mk .ln{font-family:var(--fm);font-size:15px;color:var(--meta);margin-top:3px;line-height:1.4;}
  .seesh{font-family:var(--fm);font-size:15px;}
  .seesh a{color:var(--blue);text-decoration:none;}
  .hubad{border:1px dashed var(--line);border-radius:10px;padding:10px 12px;margin:26px 0;background:rgba(255,255,255,0.015);}
  .hubad .adlbl{font-family:var(--fm);font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--meta);display:block;margin-bottom:6px;}
  .hubad .addis{font-family:var(--fm);font-size:12.5px;color:var(--meta);margin-top:8px;font-style:italic;}
  .cta{border:1px solid rgba(95,227,154,.35);border-radius:12px;padding:15px 17px;margin:28px 0 10px;background:linear-gradient(180deg,rgba(95,227,154,.07),transparent);}
  .cta b{color:var(--green);}
  .cta a{color:var(--green);text-decoration:none;font-weight:700;}
  .foot{font-family:var(--fm);font-size:15px;color:var(--meta);margin-top:30px;border-top:1px solid var(--line);padding-top:14px;}
  .foot a{color:var(--blue);text-decoration:none;}
</style>`;

const AD = `<div class="hubad"><span class="adlbl">Advertisement</span>
<ins class="adsbygoogle" style="display:block;text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="${AD_CLIENT}" data-ad-slot="${AD_SLOT}"></ins>
<script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>
<p class="addis">This hub is free to read. It links to the maker shelves, which stay ad-light and never sell placement.</p></div>`;

const sitemapUrls = [];

function render(h) {
  const url = `https://www.5best2buy.com/${h.slug}/`;
  const makerCount = h.shelves.reduce((n, s) => n + s.makers.length, 0);
  const title = `${h.name} — Independent, Certified Makers (Certifier Named) | 5best2buy.com`;
  const desc = esc(h.dek).slice(0, 290);
  const hnav = HUBS.map(x => `<a href="/${x.slug}/"${x.slug===h.slug?' class="on"':''}>${esc(x.name)}</a>`).join('') +
    `<a href="/aisles/glass-case/">The Glass Case</a>`;

  let sections = '';
  h.shelves.forEach((s, i) => {
    const makers = s.makers.map(m => `<a class="mk" href="${esc(m.url)}" target="_blank" rel="sponsored nofollow noopener"><div class="nm">${esc(m.name)}</div><div class="cf">${esc(m.rank||'')}</div><div class="ln">${esc(m.line||'')}</div></a>`).join('\n');
    sections += `<h2 class="sh"><a href="/hunt/${s.slug}/">${esc(s.name)}</a> <span style="font-family:var(--fm);font-size:15px;color:var(--meta);font-weight:400;">(${s.makers.length})</span></h2>\n`;
    sections += `<p class="shdek">${esc(s.dek)}</p>\n<div class="makers">\n${makers}\n</div>\n`;
    sections += `<p class="seesh"><a href="/hunt/${s.slug}/">See the full ${esc(s.name)} shelf, with the FAQ &rarr;</a></p>\n`;
    if (i === 1) sections += AD;   // one ad, after the second shelf — never an anchor
  });

  const graph = [
    {"@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"5best2buy.com","item":"https://www.5best2buy.com/"},
      {"@type":"ListItem","position":2,"name":"The Glass Case","item":"https://www.5best2buy.com/aisles/glass-case/"},
      {"@type":"ListItem","position":3,"name":h.name,"item":url}]},
    {"@type":"CollectionPage","name":h.name,"description":h.dek,"url":url,
      "isPartOf":{"@type":"WebSite","name":"5best2buy.com","url":"https://www.5best2buy.com/"}}
  ];

  return `<!DOCTYPE html>
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
<meta name="google-adsense-account" content="${AD_CLIENT}" />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}" crossorigin="anonymous"></script>
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
  <nav class="bc" aria-label="Breadcrumb"><a href="/">5best2buy.com</a> &rsaquo; <a href="/aisles/glass-case/">The Glass Case</a> &rsaquo; ${esc(h.name)}</nav>
  <div class="eyebrow">The Glass Case &middot; Featured Hub</div>
  <h1>${esc(h.name)}</h1>
  <p class="dek">${esc(h.dek)}</p>
  <p class="reads"><b>How to read this hub.</b> ${esc(h.reads)}</p>
  <div class="hnav">${hnav}</div>
  <p class="seesh" style="color:var(--meta);font-family:var(--fm);">${h.shelves.length} shelves &middot; ${makerCount} verified independent makers</p>
  ${sections}
  <div class="cta"><b>Are you an independent ${h.kind.toLowerCase()}-certified maker?</b> If you ship direct and carry a named ${h.authority}, you belong here — placement is on merit and always free. Reach us at <a href="mailto:admin@5best2buy.com">admin@5best2buy.com</a>.</div>
  <p class="foot">No paywall. Makers never pay for placement and it never decides the list. See also <a href="/${h.other.slug}/">${esc(h.other.name)}</a> &middot; <a href="/aisles/glass-case/">The Glass Case</a> &middot; <a href="/shelves/">All shelves &rarr;</a></p>
</body>
</html>`;
}

let built = 0;
for (const h of HUBS) {
  if (!h.shelves.length) { console.log('skip', h.slug, '(no shelves loaded)'); continue; }
  fs.mkdirSync(path.join(ROOT, h.slug), { recursive: true });
  fs.writeFileSync(path.join(ROOT, h.slug, 'index.html'), render(h));
  sitemapUrls.push(`https://www.5best2buy.com/${h.slug}/`);
  built++;
  console.log(h.slug.padEnd(8), h.shelves.length, 'shelves,', h.shelves.reduce((n,s)=>n+s.makers.length,0), 'makers');
}

// append to sitemap (idempotent)
const smp = path.join(ROOT, 'sitemap.xml');
if (fs.existsSync(smp)) {
  let sm = fs.readFileSync(smp, 'utf8');
  const add = sitemapUrls.filter(u => !sm.includes(u)).map(u => `<url><loc>${u}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join('\n');
  if (add) { sm = sm.replace('</urlset>', add + '\n</urlset>'); fs.writeFileSync(smp, sm); console.log('sitemap: +' + add.split('\n').length + ' cert hubs'); }
}

// (homepage strip injection REMOVED — the front door is now authored once in generate-aisles.js homePage())
console.log('\nCERT HUBS BUILT:', built);

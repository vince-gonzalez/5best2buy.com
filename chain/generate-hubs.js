// generate-hubs.js — DECISION HUBS: protein (/chicken/ /beef/ ...) + meal-time (/breakfast/ /dinner/ ...).
// These are HUBS, not recipes: they exist to help you DECIDE, and they are the ad-supported surface so
// the recipe pages can stay 100% ad-free. Every hub groups its recipes BY CUISINE — the "I want chicken
// but don't know if I want Asian or Italian" front door. ONE disclosed, non-anchor, in-article ad slot
// per hub (HARD RULE: never an anchor/overlay on a hub). Reads data-methods + data-ingredients + facets +
// diet, joined by slug. Runs AFTER generate-aisles / vertical-hubs, BEFORE inject-navbar/skim/awin.
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
const AD_CLIENT = 'ca-pub-8826956454892311';
const AD_SLOT = '6318594352';   // in-article unit, wired 2026-08-12

const M = JSON.parse(fs.readFileSync(ROOT + '/data-methods.json', 'utf8'));      // {slug,title,cuisine,category,af,tags}
const ING = JSON.parse(fs.readFileSync(ROOT + '/data-ingredients.json', 'utf8')); // {s,n,g,c:[...],t,d}
const FAC = JSON.parse(fs.readFileSync(ROOT + '/data-facets.json', 'utf8'));       // {s,t,d,x,g,vg,gf}
const DIET = JSON.parse(fs.readFileSync(ROOT + '/data-diet.json', 'utf8'));        // {slug,contains,veg,vegan,gf,df}

const ingBy = Object.fromEntries(ING.map(r => [r.s, r]));
const facBy = Object.fromEntries(FAC.map(r => [r.s, r]));
const dietBy = Object.fromEntries(DIET.map(r => [r.slug, r]));

// joined record + a lowercased haystack of title + core ingredients.
// Drinks & mocktails aren't a protein or a meal — they have their own hubs (/drinks/, /mocktails/), so keep them out.
const REC = M.filter(r => !/^(mocktail|drink)$/i.test(r.category || '')).map(r => {
  const ig = ingBy[r.slug] || {}, fc = facBy[r.slug] || {}, dt = dietBy[r.slug] || {};
  return {
    slug: r.slug, title: r.title, cuisine: r.cuisine || 'Other', category: r.category || 'Main',
    t: fc.t || ig.t || 0, g: fc.g || 0, veg: !!dt.veg,
    hay: (r.title + ' ' + (ig.c || []).join(' ')).toLowerCase()
  };
});

// ---- classifiers ----------------------------------------------------------
const PROTEIN = {
  chicken:    h => /\bchicken\b|drumstick|chicken thigh|\bwing/.test(h),
  beef:       h => /\bbeef\b|\bsteak\b|brisket|\bchuck\b|sirloin|short rib|oxtail|\bburger\b|meatloaf|corned beef|pastrami|ground beef/.test(h),
  pork:       h => /\bpork\b|\bbacon\b|\bham\b|sausage|chorizo|prosciutto|pancetta|carnitas|char siu|pork belly|lardon|salami|pepperoni/.test(h),
  seafood:    h => /\bfish\b|salmon|tuna|shrimp|prawn|\bcrab\b|lobster|\bclam|mussel|oyster|squid|calamari|\bcod\b|tilapia|anchovy|scallop|seafood|halibut|snapper|mackerel|sardine/.test(h),
  exotic:     h => /\blamb\b|mutton|\bduck\b|\bgoat\b|venison|bison|rabbit|quail|\bgame\b|ostrich|\belk\b/.test(h),
};
// meal-time — honest structural signals, not vibes
const MEAL = {
  breakfast:  r => r.category === 'Breakfast',
  brunch:     r => r.category === 'Breakfast' || /\begg|pancake|waffle|french toast|frittata|shakshuka|benedict|\bhash\b|quiche|omelet|crepe|granola|bagel|scone|cinnamon roll|mimosa/.test(r.hay),
  lunch:      r => r.category === 'Salad' || r.category === 'Soup' || r.category === 'Appetizer' || (r.category === 'Main' && r.t && r.t <= 30) || /sandwich|\bwrap\b|\bsub\b|panini|quesadilla|\bbowl\b|\bsalad\b/.test(r.hay),
  dinner:     r => r.category === 'Main',
  'late-night': r => (r.g >= 4 && r.t && r.t <= 35) || /fried|nacho|quesadilla|grilled cheese|\bramen\b|\bnoodle|\bwing|\bpizza\b|mac and cheese|loaded|cheesy|\bmelt\b|poutine|corn dog|mozzarella stick|\bslider/.test(r.hay),
};

// ---- hub copy (Goyim voice — an editor's steer, never filler) --------------
const HUBS = [
  { slug:'chicken', name:'Chicken', kind:'protein', match:PROTEIN.chicken,
    dek:'The most-searched protein on earth, and the most forgiving one to cook. This page is the "I want chicken, I just don\'t know which direction" fix — scroll by cuisine and let the craving decide.',
    insight:'Stuck between Asian and Italian? That\'s the whole reason this page exists. Pick a cuisine below; every link is a full, ad-free recipe.' },
  { slug:'beef', name:'Beef', kind:'protein', match:PROTEIN.beef,
    dek:'From a 10-minute weeknight stir-fry to a low Sunday braise. Beef by cuisine, so you can match the cut and the craving in one place.',
    insight:'Weeknight or weekend? Fast sears sit next to long braises here — read the time label before you commit the evening.' },
  { slug:'pork', name:'Pork', kind:'protein', match:PROTEIN.pork,
    dek:'Bacon at breakfast, carnitas at midnight, a shoulder that feeds a crowd. The whole range of pork, sorted by where in the world it\'s from.',
    insight:'Pork rewards patience or speed, rarely the middle. Grab a quick chop or a long belly — the page tells you which is which.' },
  { slug:'seafood', name:'Fish & Seafood', kind:'protein', match:PROTEIN.seafood,
    dek:'Fish, shrimp, crab, the whole catch — cooked the way each cuisine actually cooks it. The trick with seafood is never overcooking it, and every recipe here says exactly when to pull it.',
    insight:'Seafood is a two-minute window, not a guess. Sourcing matters most here — every ingredient links to where to buy it right.' },
  { slug:'vegetarian', name:'Vegetarian', kind:'protein', match:(r=>r.veg), byRec:true,
    dek:'No meat, no apology — dishes that were built to be vegetarian, not the ones with the chicken picked out. Sorted by cuisine so the flavor does the heavy lifting.',
    insight:'These are provably meat-free from the ingredient list up, not "close enough." Grouped by cuisine so you cook by craving, not by restriction.' },
  { slug:'exotic', name:'Lamb, Duck & Game', kind:'protein', match:PROTEIN.exotic,
    dek:'Lamb, duck, goat, and the proteins you cook when you want the meal to feel like an event. Less forgiving than chicken, more memorable — and every recipe walks you through it.',
    insight:'The "make it a night" page. These reward reading the method first — so we put the make-or-break step right up top in every one.' },

  { slug:'breakfast', name:'Breakfast', kind:'meal', match:MEAL.breakfast, byRec:true,
    dek:'The first plate of the day, from a two-minute egg to a stack worth waking up for. Sorted by cuisine, because breakfast looks wildly different across the world.',
    insight:'Fast enough for a Tuesday or slow enough for a Sunday — check the time label and pick your morning.' },
  { slug:'brunch', name:'Brunch', kind:'meal', match:MEAL.brunch, byRec:true,
    dek:'The leisurely middle — eggs, pancakes, hashes, and the shareable plates that earn a second coffee. Built for the table you actually want to host.',
    insight:'The next bruncheon will ask you for the recipe. Bookmark two of these and host like you meant to all along.' },
  { slug:'lunch', name:'Lunch', kind:'meal', match:MEAL.lunch, byRec:true,
    dek:'Sandwiches, salads, soups, bowls, and the quick mains that get you back to your afternoon. Real food you can actually make on a break.',
    insight:'The DIY-lunch home base. Faster and cheaper than delivery, and you know exactly what went in it.' },
  { slug:'dinner', name:'Dinner', kind:'meal', match:MEAL.dinner, byRec:true,
    dek:'The main event, every cuisine on one page. When "what\'s for dinner" is the hardest question of the day, start here and scroll.',
    insight:'Can\'t decide? Pick a cuisine, not a recipe — narrowing the world down to one aisle is half the battle.' },
  { slug:'late-night', name:'Late Night', kind:'meal', match:MEAL['late-night'], byRec:true,
    dek:'The fried, cheesy, fast, and gloriously unserious food for after the party — or instead of it. The stuff worth keeping the ingredients on hand for.',
    insight:'This is the stock-your-freezer-before-a-night-out page. Grab a couple of these now, and you\'ll thank yourself at 1am.' },
];

// ---- assign recipes to hubs ----
for (const h of HUBS) {
  h.recs = REC.filter(r => h.byRec ? h.match(r) : h.match(r.hay))
    .sort((a,b)=>a.cuisine.localeCompare(b.cuisine) || a.title.localeCompare(b.title));
}

const PROT = HUBS.filter(h=>h.kind==='protein');
const MEALH = HUBS.filter(h=>h.kind==='meal');
const esc = s => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

const STYLE = `<style>
  :root{--navy:#0d1421;--surface:#121e30;--blue:#5fb0ef;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fd:'Rajdhani','Arial Narrow',sans-serif;--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--navy);color:var(--text);font-family:Georgia,'Times New Roman',serif;line-height:1.7;padding:18px 18px 60px;max-width:900px;margin:0 auto;font-size:17px;}
  nav.bc{font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);}
  nav.bc a{color:var(--meta);text-decoration:none;}
  .eyebrow{font-family:var(--fm);font-size:12.5px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin:20px 0 8px;}
  h1{font-family:var(--fd);font-size:clamp(32px,6.5vw,52px);font-weight:700;letter-spacing:.5px;line-height:1.03;margin-bottom:12px;}
  .dek{color:var(--soft);max-width:66ch;margin-bottom:16px;}
  .hubnote{font-family:var(--fm);font-size:15px;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:8px;padding:11px 14px;margin:0 0 20px;}
  .hubnote b{color:var(--gold);}
  .hnav{display:flex;flex-wrap:wrap;gap:7px;margin:0 0 8px;}
  .hnav a{font-family:var(--fm);font-size:15px;text-decoration:none;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:5px 12px;}
  .hnav a.on{background:var(--gold);color:#1a1200;border-color:var(--gold);font-weight:600;}
  .hnav .lbl{font-family:var(--fm);font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--meta);align-self:center;margin-right:2px;}
  .insight{font-family:var(--fm);font-size:14px;color:var(--text);border:1px solid var(--line);border-radius:10px;padding:12px 15px;margin:18px 0 6px;background:linear-gradient(180deg,rgba(95,176,239,0.06),transparent);}
  .count{font-family:var(--fm);font-size:15px;letter-spacing:.4px;color:var(--meta);margin:16px 0 6px;}
  h2.cz{font-family:var(--fd);font-size:24px;font-weight:700;letter-spacing:.4px;margin:24px 0 10px;padding-bottom:5px;border-bottom:1px solid var(--line);color:var(--blue);}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:9px;}
  a.rc{display:block;text-decoration:none;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:11px 13px;color:var(--text);}
  a.rc:hover{border-color:var(--blue);}
  a.rc .t{font-family:var(--fm);font-weight:600;font-size:15px;line-height:1.25;}
  a.rc .m{font-family:var(--fm);font-size:12.5px;color:var(--meta);margin-top:3px;text-transform:uppercase;letter-spacing:.6px;}
  .hubad{border:1px dashed var(--line);border-radius:10px;padding:10px 12px;margin:26px 0;background:rgba(255,255,255,0.015);}
  .hubad .adlbl{font-family:var(--fm);font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--meta);display:block;margin-bottom:6px;}
  .hubad .addis{font-family:var(--fm);font-size:12.5px;color:var(--meta);margin-top:8px;font-style:italic;}
  .foot{font-family:var(--fm);font-size:15px;color:var(--meta);margin-top:34px;border-top:1px solid var(--line);padding-top:14px;}
  .foot a{color:var(--blue);text-decoration:none;}
</style>`;

// disclosed, bounded, IN-ARTICLE ad (structurally never an anchor/overlay). One per hub, mid-content.
const AD = `<div class="hubad"><span class="adlbl">Advertisement</span>
<ins class="adsbygoogle" style="display:block;text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="${AD_CLIENT}" data-ad-slot="${AD_SLOT}"></ins>
<script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>
<p class="addis">This hub is free to read. The recipes it links to stay 100% ad-free &mdash; always.</p></div>`;

const sitemapUrls = []; let built = 0;

function render(h) {
  const url = `https://www.5best2buy.com/${h.slug}/`;
  const kindLabel = h.kind === 'protein' ? 'by protein' : 'by meal';
  const title = `${h.name} Recipes by Cuisine — a Hub, Not a Recipe | 5best2buy.com`;
  const desc = esc(h.dek).slice(0,290);

  // group by cuisine
  const byC = {};
  for (const r of h.recs) (byC[r.cuisine] = byC[r.cuisine] || []).push(r);
  const cuisines = Object.keys(byC).sort((a,b)=>byC[b].length-byC[a].length || a.localeCompare(b));

  const protNav = `<div class="hnav"><span class="lbl">Protein</span>` +
    PROT.map(x=>`<a href="/${x.slug}/"${x.slug===h.slug?' class="on"':''}>${esc(x.name)}</a>`).join('') + `</div>`;
  const mealNav = `<div class="hnav"><span class="lbl">Meal</span>` +
    MEALH.map(x=>`<a href="/${x.slug}/"${x.slug===h.slug?' class="on"':''}>${esc(x.name)}</a>`).join('') +
    `<a href="/recipes/">All ${REC.length} recipes</a></div>`;

  // build sections; drop the ad in after the first (largest) cuisine block
  let sections = '';
  cuisines.forEach((cz, i) => {
    const cards = byC[cz].map(r=>`<a class="rc" href="/recipes/${r.slug}/"><div class="t">${esc(r.title.split(',')[0])}</div><div class="m">${esc(cz)}</div></a>`).join('\n');
    sections += `<h2 class="cz">${esc(cz)} <span style="font-family:var(--fm);font-size:15px;color:var(--meta);font-weight:400;">(${byC[cz].length})</span></h2>\n<div class="grid">\n${cards}\n</div>\n`;
    if (i === 0) sections += AD;   // one ad, after the top cuisine block — never an anchor
  });

  const graph = [
    {"@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"5best2buy.com","item":"https://www.5best2buy.com/"},
      {"@type":"ListItem","position":2,"name":h.name+" hub","item":url}]},
    {"@type":"CollectionPage","name":h.name+" Recipes","description":h.dek,"url":url,
      "about":h.name,"isPartOf":{"@type":"WebSite","name":"5best2buy.com","url":"https://www.5best2buy.com/"}}
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
  <nav class="bc" aria-label="Breadcrumb"><a href="/">5best2buy.com</a> &rsaquo; ${esc(h.name)} hub</nav>
  <div class="eyebrow">5best2buy &middot; Decide ${kindLabel}</div>
  <h1>${esc(h.name)}</h1>
  <p class="dek">${esc(h.dek)}</p>
  <p class="hubnote"><b>You're on a hub, not a recipe.</b> This page exists to help you <i>decide</i> what to make. Pick a cuisine below and every link opens a full, ad-free recipe with sourcing for each ingredient.</p>
  ${protNav}
  ${mealNav}
  <p class="insight">${esc(h.insight)}</p>
  <p class="count">${h.recs.length} recipes across ${cuisines.length} cuisines</p>
  ${sections}
  <p class="foot">No paywall. Recipes stay ad-free; hubs like this one carry a single, labeled ad so the recipes don't have to. Want your product sourced on a shelf here? <a href="mailto:admin@5best2buy.com">admin@5best2buy.com</a> &middot; <a href="/recipes/">Browse all ${REC.length} recipes &rarr;</a></p>
</body>
</html>`;
}

for (const h of HUBS) {
  if (h.recs.length < 4) { console.log('skip', h.slug, '(' + h.recs.length + ' recipes)'); continue; }
  fs.mkdirSync(path.join(ROOT, h.slug), { recursive: true });
  fs.writeFileSync(path.join(ROOT, h.slug, 'index.html'), render(h));
  const url = `https://www.5best2buy.com/${h.slug}/`;
  sitemapUrls.push(url); built++;
  console.log(h.slug.padEnd(12), h.kind.padEnd(8), h.recs.length, 'recipes');
}

// append to sitemap (idempotent)
const smp = path.join(ROOT, 'sitemap.xml');
if (fs.existsSync(smp)) {
  let sm = fs.readFileSync(smp, 'utf8');
  const add = sitemapUrls.filter(u => !sm.includes(u))
    .map(u => `<url><loc>${u}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`).join('\n');
  if (add) { sm = sm.replace('</urlset>', add + '\n</urlset>'); fs.writeFileSync(smp, sm); console.log('sitemap: +' + add.split('\n').length + ' hub urls'); }
  else console.log('sitemap: hub urls already present');
}

// (homepage strip injection REMOVED — the front door is now authored once in generate-aisles.js homePage())
console.log('\nHUBS BUILT:', built);

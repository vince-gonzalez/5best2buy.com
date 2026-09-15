const fs=require('fs'),path=require('path');

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
const ROOT=__site;
const SITE='https://www.5best2buy.com';
const MAP={
 'octopus':['daily-catch','The Daily Catch','Octopus'],
 'tinned-fish':['daily-catch','The Daily Catch','Tinned Fish'],
 'regenerative-meat':['butcher','The Butcher','Regenerative Meat'],
 'charcuterie':['butcher','The Butcher','Charcuterie'],
 'hot-sauce':['heat-and-sauce','Heat & Sauce','Hot Sauce'],
 'chili-crisp':['heat-and-sauce','Heat & Sauce','Chili Crisp'],
 'hot-honey':['heat-and-sauce','Heat & Sauce','Hot Honey'],
 'pickles':['heat-and-sauce','Heat & Sauce','Pickles & Ferments'],
 'spices':['pantry','The Pantry','Spices'],
 'olive-oil':['pantry','The Pantry','Olive Oil'],
 'maple-syrup':['pantry','The Pantry','Maple Syrup'],
 'pasta':['pantry','The Pantry','Pasta'],
 'jam':['pantry','The Pantry','Jam'],
 'jerky':['snacks','Snacks & the Jerky Drawer','Jerky'],
 'popcorn':['snacks','Snacks & the Jerky Drawer','Popcorn'],
 'chips':['snacks','Snacks & the Jerky Drawer','Chips'],
 'chocolate':['sweets','Sweets & Bakery','Chocolate'],
 'candy':['sweets','Sweets & Bakery','Candy'],
 'cookies':['sweets','Sweets & Bakery','Cookies'],
 'coffee':['drink-cart','The Drink Cart','Coffee'],
 'tea':['drink-cart','The Drink Cart','Tea'],
 'matcha':['drink-cart','The Drink Cart','Matcha'],
 'craft-soda':['drink-cart','The Drink Cart','Craft Soda'],
 'kombucha':['drink-cart','The Drink Cart','Kombucha'],
 'cheese':['cold-case','The Cold Case','Cheese'],
 'cultured-butter':['cold-case','The Cold Case','Cultured Butter'],
 'tofu-tempeh':['cold-case','The Cold Case','Tofu & Tempeh'],
 'frozen':['frozen','The Frozen Aisle','Regional Frozen'],
 'mushrooms':['garden','The Garden','Mushrooms'],
 'seeds':['garden','The Garden','Seeds'],
 'plant-only':['glass-case','The Glass Case','Plant-Only'],
 'no-additive':['glass-case','The Glass Case','No-Additive'],
 'organic':['glass-case','The Glass Case','Organic'],
 'raw-honey':['pantry','The Pantry','Raw Honey'],
 'bacon':['butcher','The Butcher','Bacon'],
 'smoked-fish':['daily-catch','The Daily Catch','Smoked Fish'],
 'drinking-chocolate':['drink-cart','The Drink Cart','Drinking Chocolate'],
 'crackers':['snacks','Snacks & the Jerky Drawer','Crackers'],
 'finishing-salt':['pantry','The Pantry','Finishing Salt'],
 'vinegar':['pantry','The Pantry','Vinegar'],
 'nut-butter':['pantry','The Pantry','Nut Butter'],
 'heirloom-beans':['pantry','The Pantry','Heirloom Beans'],
 'ice-cream':['frozen','The Frozen Aisle','Ice Cream'],
 'granola':['snacks','Snacks & the Jerky Drawer','Granola'],
 'bone-broth':['butcher','The Butcher','Bone Broth'],
 'mustard':['heat-and-sauce','Heat & Sauce','Mustard'],
 'bbq-sauce':['heat-and-sauce','Heat & Sauce','BBQ Sauce'],
 'pasta-sauce':['pantry','The Pantry','Pasta Sauce'],
 'sausage':['butcher','The Butcher','Sausage'],
 'bread':['sweets','Sweets & Bakery','Bread'],
 'bagels':['sweets','Sweets & Bakery','Bagels'],
 'salsa':['heat-and-sauce','Heat & Sauce','Salsa'],
 'caviar':['daily-catch','The Daily Catch','Caviar & Roe'],
 'rice':['pantry','The Pantry','Heritage Rice & Grains'],
 'miso':['pantry','The Pantry','Miso'],
 'dried-fruit':['garden','The Garden','Dried Fruit'],
 'pretzels':['snacks','Snacks & the Jerky Drawer','Pretzels'],
};
const dec=s=>(s||'').replace(/&amp;/g,'&').replace(/&middot;/g,'·').replace(/&quot;/g,'"');
const txt=s=>dec((s||'').replace(/<[^>]+>/g,'')).trim();
const enc=s=>(s||'').replace(/&/g,'&amp;');
let n=0,skip=0;
for(const slug of Object.keys(MAP)){
  const f=path.join(ROOT,'hunt',slug,'index.html');
  if(!fs.existsSync(f)){console.log('MISSING',slug);continue;}
  let h=fs.readFileSync(f,'utf8');
  if(h.includes('application/ld+json')){skip++;continue;}
  const title=(h.match(/<title>(.*?)<\/title>/)||[])[1]||'';
  const desc=(h.match(/<meta name="description" content="(.*?)"/)||[])[1]||'';
  const canon=(h.match(/<link rel="canonical" href="(.*?)"/)||[])[1]||(SITE+'/hunt/'+slug+'/');
  const h1=txt((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)||[])[1]||title);
  const makers=[...h.matchAll(/<h2>([\s\S]*?)<\/h2>/g)].map(m=>txt(m[1]));
  const [as,an,sn]=MAP[slug];
  const og=`<meta property="og:type" content="article" />
<meta property="og:site_name" content="5best2buy.com" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${desc}" />
<meta property="og:url" content="${canon}" />
<meta property="og:image" content="${SITE}/logo.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${desc}" />
<meta name="twitter:image" content="${SITE}/logo.png" />`;
  const ld={"@context":"https://schema.org","@graph":[
    {"@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"5best2buy.com","item":SITE+"/"},
      {"@type":"ListItem","position":2,"name":an,"item":SITE+"/aisles/"+as+"/"},
      {"@type":"ListItem","position":3,"name":sn,"item":canon}]},
    {"@type":"Article","headline":h1,"description":dec(desc),"datePublished":"2026-06-01","dateModified":"2026-06-29","mainEntityOfPage":canon,"author":{"@type":"Organization","name":"5best2buy.com","url":SITE+"/"},"publisher":{"@type":"Organization","name":"5best2buy","logo":{"@type":"ImageObject","url":SITE+"/logo.png"}}},
    {"@type":"ItemList","name":h1,"numberOfItems":makers.length,"itemListElement":makers.map((nm,i)=>({"@type":"ListItem","position":i+1,"name":nm}))}
  ]};
  const ldscript='<script type="application/ld+json">'+JSON.stringify(ld)+'</script>';
  h=h.replace('</head>',og+'\n'+ldscript+'\n</head>');
  const crumb='<nav style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:#9aabc4;" aria-label="Breadcrumb"><a href="/" style="color:#9aabc4;text-decoration:none;">5best2buy.com</a> &rsaquo; <a href="/aisles/'+as+'/" style="color:#9aabc4;text-decoration:none;">'+enc(an)+'</a> &rsaquo; '+enc(sn)+'</nav>';
  h=h.replace('<a class="home" href="/">← 5best2buy</a>',crumb);
  fs.writeFileSync(f,h);n++;
}
console.log('SEO injected into',n,'shelves; skipped',skip);

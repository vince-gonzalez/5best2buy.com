// build-shelves.js — assemble finished /hunt/<slug>/ pages from shelf-content/*.js (writer output).
// Matches the established shelf template (HEAD @graph schema, .find cards, badges, FAQ, one open slot, recruit, disclosure).
const fs = require('fs'), path = require('path');
const ROOT = 'C:/tmp/5b2b-live';
const DATE = '2026-07-07';

// slug -> which aisle it joins (I control placement; writers only wrote copy)
const AISLE = {
  garlic:'greengrocer', 'fresh-peppers':'greengrocer', 'sweet-corn':'greengrocer',
  apples:'greengrocer', 'stone-fruit':'greengrocer', pears:'greengrocer', avocados:'greengrocer',
  microgreens:'greengrocer', 'fresh-herbs':'greengrocer', 'farm-box':'greengrocer',
  'oats-hot-cereal':'pantry', 'grits-polenta':'pantry', 'cooking-oil':'pantry', 'vanilla-extract':'pantry',
  ketchup:'heat-and-sauce', mayonnaise:'heat-and-sauce', 'salad-dressing':'heat-and-sauce',
  'baking-chocolate':'sweets',
  // wave 1b — shippable forms of the staples that don't ship fresh
  carrots:'greengrocer', 'onions-shallots':'greengrocer', 'root-vegetables':'greengrocer',
  'fresh-tomatoes':'greengrocer', 'winter-squash':'greengrocer', melons:'greengrocer',
  'potatoes-pantry':'pantry',
  // gap wave (main-loop, one at a time)
  beef:'butcher', pork:'butcher', chicken:'butcher', lamb:'butcher', 'hot-dogs':'butcher', 'deli-meat':'butcher',
  hummus:'cold-case', 'fresh-pasta':'cold-case', 'plant-milk':'cold-case', 'sour-cream':'cold-case', 'cottage-cheese':'cold-case',
  tortillas:'sweets', pie:'sweets', pastry:'sweets',
  juice:'drink-cart', 'sparkling-water':'drink-cart', shrubs:'drink-cart', mixers:'drink-cart',
  'peanut-butter':'pantry', 'canned-beans':'pantry', tahini:'pantry',
  'coconut-milk':'pantry', worcestershire:'heat-and-sauce',
  // international pantries (new aisles) + asian workhorses + condiments
  gochujang:'asian-pantry', 'thai-curry-paste':'asian-pantry', 'stir-fry-sauce':'asian-pantry',
  'dulce-de-leche':'latin-pantry', sofrito:'latin-pantry', 'plantain-chips':'latin-pantry',
  harissa:'middle-eastern-pantry', zaatar:'middle-eastern-pantry', 'pomegranate-molasses':'middle-eastern-pantry',
  teff:'african-pantry', berbere:'african-pantry', 'piri-piri':'african-pantry',
  ghee:'indian-pantry', 'dal-lentils':'indian-pantry', 'curry-simmer-sauce':'indian-pantry',
  capers:'pantry', relish:'heat-and-sauce',
  // depth wave 2
  kimchi:'asian-pantry', 'rice-vinegar':'asian-pantry', mirin:'asian-pantry', doenjang:'asian-pantry', dashi:'asian-pantry',
  'guava-paste':'latin-pantry', masarepa:'latin-pantry',
  'atta-flour':'indian-pantry', 'mango-chutney':'indian-pantry',
  halva:'middle-eastern-pantry', labneh:'middle-eastern-pantry',
  fonio:'african-pantry', egusi:'african-pantry',
  molasses:'pantry', 'shredded-coconut':'pantry', breadcrumbs:'pantry', 'baking-leaveners':'pantry',
  sauerkraut:'heat-and-sauce',
  // the 200 push
  dates:'pantry', 'dried-mushrooms':'pantry', pistachios:'pantry',
  'preserved-lemon':'middle-eastern-pantry', dukkah:'middle-eastern-pantry', furikake:'asian-pantry',
  'sazon-adobo':'latin-pantry', marshmallows:'sweets',
  berries:'greengrocer', 'dried-vegetables':'greengrocer',
  saffron:'pantry', ginger:'pantry', tamarind:'pantry', hominy:'latin-pantry', bulgur:'middle-eastern-pantry',
  'wild-salmon':'daily-catch', shrimp:'daily-catch',
  // Glass Case — the featured Independent Halal + Independent Kosher hubs (certified, small makers)
  'halal-meat':'glass-case', 'halal-poultry':'glass-case', 'halal-prepared':'glass-case',
  'halal-jerky-snacks':'glass-case', 'halal-sweets':'glass-case', 'halal-pantry':'glass-case',
  'kosher-meat':'glass-case', 'kosher-pantry':'glass-case', 'kosher-dairy':'glass-case',
  'kosher-sweets':'glass-case', 'kosher-pickles':'glass-case', 'kosher-specialty':'glass-case',
  // cert-hub expansion wave 2
  'halal-seafood':'glass-case', 'halal-frozen':'glass-case', 'halal-deli':'glass-case', 'halal-cheese':'glass-case',
  'kosher-fish':'glass-case', 'kosher-oil':'glass-case', 'kosher-nuts':'glass-case', 'kosher-granola':'glass-case',
  'kosher-bakery':'glass-case', 'kosher-frozen':'glass-case', 'kosher-prepared':'glass-case', 'kosher-honey':'glass-case',
  'halal-bakery':'glass-case', 'halal-nuts':'glass-case', 'halal-supplements':'glass-case',
  'halal-wagyu':'glass-case',
  'halal-breakfast':'glass-case',
  'halal-meal-prep':'glass-case',
  'halal-pizza':'glass-case',
  'halal-organic':'glass-case',
  'halal-seasonings':'glass-case',
  'halal-bulk':'glass-case',
  'halal-pet':'glass-case',
  'halal-baby-food':'glass-case',
  'halal-icecream':'glass-case',
  'kosher-soup':'glass-case', 'kosher-tea':'glass-case', 'kosher-baking':'glass-case', 'kosher-grains':'glass-case',
  'kosher-wine':'glass-case',
  'kosher-spirits':'glass-case',
  'kosher-jerky':'glass-case',
  'kosher-deli':'glass-case',
  'kosher-chocolate':'glass-case',
  'kosher-maple':'glass-case',
  'kosher-coffee':'glass-case',
  'kosher-chips':'glass-case',
  'kosher-juice':'glass-case',
  // gap-fill wave 1 — new aisles The Spice Rack + The Mill, plus Pantry/Snacks/Asian-Pantry adds
  cinnamon:'spice-rack', 'black-pepper':'spice-rack', cumin:'spice-rack', turmeric:'spice-rack', 'smoked-paprika':'spice-rack', cardamom:'spice-rack', coriander:'spice-rack', 'nutmeg-cloves':'spice-rack',
  'curry-powder':'spice-rack', 'garam-masala':'spice-rack', 'ras-el-hanout':'spice-rack', 'cajun-creole-seasoning':'spice-rack', 'jerk-seasoning':'spice-rack', 'everything-seasoning':'spice-rack', 'chili-powder':'spice-rack', 'five-spice':'spice-rack',
  quinoa:'mill', farro:'mill', barley:'mill', buckwheat:'mill', millet:'mill', amaranth:'mill', freekeh:'mill', 'wild-rice':'mill',
  'semolina-flour':'mill', 'rye-flour':'mill', 'chickpea-flour':'mill', 'almond-flour':'mill', 'coconut-flour':'mill', 'cassava-flour':'mill', cornmeal:'mill', 'spelt-flour':'mill',
  'avocado-oil':'pantry', 'coconut-oil':'pantry', 'specialty-nut-oil':'pantry', 'balsamic-vinegar':'pantry', 'sherry-red-wine-vinegar':'pantry', 'tallow-duck-fat':'pantry', 'malt-coconut-vinegar':'pantry',
  'date-syrup':'pantry', 'sorghum-syrup':'pantry', 'coconut-sugar':'pantry', agave:'pantry', 'cane-syrup':'pantry', jaggery:'pantry', 'brown-turbinado-sugar':'pantry',
  cashews:'snacks', hazelnuts:'snacks', macadamia:'snacks', 'pine-nuts':'snacks', 'pumpkin-seeds':'snacks', 'sunflower-seeds':'snacks', 'chia-flax':'snacks', 'hemp-seeds':'snacks',
  tamari:'asian-pantry', 'oyster-sauce':'asian-pantry', hoisin:'asian-pantry', 'sriracha-chili-sauce':'asian-pantry', ponzu:'asian-pantry', sambal:'asian-pantry', gochugaru:'asian-pantry', 'kecap-manis':'asian-pantry',
  // gap-fill wave 2 — seafood/sea-veg, butcher cuts, dairy, bakery, confection, beverages, new Mediterranean Pantry
  scallops:'daily-catch', mussels:'daily-catch', oysters:'daily-catch', clams:'daily-catch', crab:'daily-catch', lobster:'daily-catch', 'white-fish':'daily-catch', trout:'daily-catch',
  'nori-seaweed':'daily-catch', 'kombu-kelp':'daily-catch', 'wakame-dulse':'daily-catch', bottarga:'daily-catch', 'dried-seafood':'daily-catch',
  'goat-meat':'butcher', bison:'butcher', 'venison-game':'butcher', 'duck-meat':'butcher', veal:'butcher', 'organ-meats':'butcher', 'country-ham':'butcher', 'ground-blends':'butcher',
  yogurt:'cold-case', kefir:'cold-case', 'cream-cheese':'cold-case', 'mascarpone-creme-fraiche':'cold-case', 'goat-cheese':'cold-case', 'blue-cheese':'cold-case', feta:'cold-case', 'aged-cheddar':'cold-case',
  'english-muffins':'sweets', 'pita-flatbread':'sweets', naan:'sweets', donuts:'sweets', muffins:'sweets', 'cinnamon-rolls':'sweets', cake:'sweets', 'babka-brioche':'sweets',
  caramel:'sweets', fudge:'sweets', 'gummy-candy':'sweets', licorice:'sweets', 'lollipops-hard-candy':'sweets', brittle:'sweets', truffles:'sweets', 'marzipan-nougat':'sweets',
  chai:'drink-cart', 'herbal-tea':'drink-cart', 'yerba-mate':'drink-cart', 'cold-brew':'drink-cart', 'chicory-coffee':'drink-cart', 'tonic-water':'drink-cart', 'cocktail-bitters':'drink-cart', 'ginger-beer':'drink-cart',
  'sun-dried-tomatoes':'mediterranean-pantry', 'roasted-peppers':'mediterranean-pantry', 'artichoke-hearts':'mediterranean-pantry', tapenade:'mediterranean-pantry', 'grape-leaves':'mediterranean-pantry', giardiniera:'mediterranean-pantry', 'orzo-pasta':'mediterranean-pantry', pepperoncini:'mediterranean-pantry',
  // gap wave 3 — sauces, Japanese/Korean pantry, new Caribbean aisle, baking, cheese, snacks
  pesto:'heat-and-sauce', 'teriyaki-sauce':'heat-and-sauce', 'cocktail-sauce':'heat-and-sauce', horseradish:'heat-and-sauce', 'ranch-dressing':'heat-and-sauce', 'steak-sauce':'heat-and-sauce', 'tartar-sauce':'heat-and-sauce', 'pan-gravy':'heat-and-sauce',
  'tomato-paste':'heat-and-sauce', 'pizza-sauce':'heat-and-sauce', 'alfredo-sauce':'heat-and-sauce', 'vodka-sauce':'heat-and-sauce', 'mole-paste':'heat-and-sauce', 'enchilada-sauce':'heat-and-sauce', 'tikka-cooking-sauce':'heat-and-sauce', 'peanut-satay-sauce':'heat-and-sauce',
  panko:'asian-pantry', 'japanese-rice':'asian-pantry', 'udon-soba':'asian-pantry', katsuobushi:'asian-pantry', wasabi:'asian-pantry', yuzu:'asian-pantry', 'curry-roux':'asian-pantry', umeboshi:'asian-pantry',
  ssamjang:'asian-pantry', 'rice-cakes-tteok':'asian-pantry', 'korean-noodles':'asian-pantry', perilla:'asian-pantry', danmuji:'asian-pantry', 'korean-anchovy':'asian-pantry', 'korean-soybean':'asian-pantry',
  'scotch-bonnet-sauce':'caribbean-pantry', 'browning-sauce':'caribbean-pantry', ackee:'caribbean-pantry', callaloo:'caribbean-pantry', saltfish:'caribbean-pantry', 'caribbean-allspice':'caribbean-pantry', pikliz:'caribbean-pantry', 'sorrel-drink':'caribbean-pantry',
  'cocoa-powder':'pantry', sprinkles:'pantry', 'gelatin-pectin':'pantry', 'food-coloring':'pantry', frosting:'pantry', 'baking-extracts':'pantry', 'active-yeast':'pantry', 'pie-filling':'pantry',
  burrata:'cold-case', 'cheese-curds':'cold-case', 'pimento-cheese':'cold-case', 'swiss-alpine':'cold-case', 'gouda-aged':'cold-case', clothbound:'cold-case', 'plant-cheese':'cold-case', 'plant-yogurt':'cold-case',
  'pork-rinds':'snacks', 'trail-mix':'snacks', 'fruit-leather':'snacks', 'meat-sticks':'snacks', 'veggie-chips':'snacks', 'rice-crackers':'snacks', 'energy-bars':'snacks', 'puffs-cheese-snacks':'snacks',
  // gap wave 4 — beverages, coffee/tea, frozen, Filipino + SE-Asian pantry, fermented, frozen desserts, dairy
  horchata:'drink-cart', 'aguas-frescas':'drink-cart', lemonade:'drink-cart', 'coconut-water':'drink-cart', 'aloe-drink':'drink-cart', switchel:'drink-cart', 'cordial-syrups':'drink-cart', 'oat-milk-drink':'drink-cart',
  'espresso-beans':'drink-cart', 'decaf-coffee':'drink-cart', 'single-origin-coffee':'drink-cart', 'oolong-tea':'drink-cart', 'puerh-tea':'drink-cart', rooibos:'drink-cart', 'green-tea':'drink-cart', 'instant-specialty-coffee':'drink-cart',
  'frozen-dumplings':'frozen', 'frozen-meals':'frozen', 'frozen-pot-pies':'frozen', 'frozen-pizza':'frozen', 'frozen-breakfast':'frozen', 'frozen-fruit':'frozen', 'frozen-appetizers':'frozen', 'frozen-vegetables-prepared':'frozen',
  'banana-ketchup':'asian-pantry', calamansi:'asian-pantry', 'patis-bagoong':'asian-pantry', ube:'asian-pantry', 'filipino-longganisa':'asian-pantry', 'filipino-vinegar':'asian-pantry', 'pancit-noodles':'asian-pantry', 'filipino-sauce-mix':'asian-pantry',
  'rice-paper':'asian-pantry', 'palm-sugar':'asian-pantry', 'shrimp-paste':'asian-pantry', 'lemongrass-aromatics':'asian-pantry', 'kaffir-lime':'asian-pantry', 'vietnamese-noodles':'asian-pantry', 'thai-sticky-rice':'asian-pantry', 'tamarind-paste-seasian':'asian-pantry',
  'pickled-onions':'heat-and-sauce', curtido:'heat-and-sauce', 'fermented-hot-sauce':'heat-and-sauce', 'pickled-vegetables':'heat-and-sauce', escabeche:'heat-and-sauce', 'fermented-vegetables':'heat-and-sauce', 'pickled-garlic':'heat-and-sauce', 'chow-chow':'heat-and-sauce',
  gelato:'sweets', sorbet:'sweets', 'ice-cream-cones':'sweets', 'italian-ice':'sweets', 'mochi-ice-cream':'sweets', 'custard-pudding':'sweets', 'whipped-cream-topping':'sweets',
  quark:'cold-case', buttermilk:'cold-case', 'clotted-cream':'cold-case', 'plant-butter':'cold-case', 'egg-substitute':'cold-case', 'farmer-cheese':'cold-case', 'cheese-spread':'cold-case', 'heavy-cream':'cold-case',
  // gap wave 5 — British & Irish pantry (new aisle), German & Nordic pantry (new aisle), snacks depth, jams/spreads
  'branston-pickle':'british-pantry', marmite:'british-pantry', marmalade:'british-pantry', custard:'british-pantry', 'digestive-biscuits':'british-pantry', 'lemon-curd':'british-pantry', 'mince-pie':'british-pantry', 'british-brown-sauce':'british-pantry',
  spaetzle:'german-nordic', 'red-cabbage':'german-nordic', 'lebkuchen-stollen':'german-nordic', lingonberry:'german-nordic', crispbread:'german-nordic', 'brown-cheese':'german-nordic', 'remoulade-german':'german-nordic', 'german-spice-mix':'german-nordic',
  'roasted-chickpeas':'snacks', 'dried-edamame':'snacks', 'seed-crackers':'snacks', 'protein-cookies':'snacks', 'fruit-chips':'snacks', 'dark-chocolate-nuts':'snacks', 'nut-clusters':'snacks', 'jerky-alternative':'snacks',
  'pepper-jelly':'heat-and-sauce', 'tomato-jam':'heat-and-sauce', 'onion-jam':'heat-and-sauce', 'apple-butter':'heat-and-sauce', 'wine-jelly':'heat-and-sauce', 'compound-butter':'heat-and-sauce', 'fig-spread':'heat-and-sauce', conserves:'heat-and-sauce',
  // gap wave 5b — charcuterie/pate (butcher), pastry doughs (frozen), truffle/luxury pantry (pantry), gourmet mushrooms & specialty produce (greengrocer)
  pate:'butcher', rillettes:'butcher', 'duck-confit':'butcher', nduja:'butcher', saucisson:'butcher', 'coppa-capicola':'butcher', 'prosciutto-cured-ham':'butcher', 'mortadella-cooked':'butcher',
  'puff-pastry':'frozen', 'phyllo-dough':'frozen', 'pie-crust':'frozen', 'pizza-dough':'frozen', 'cookie-dough':'frozen', 'tart-shells':'frozen', 'empanada-wrappers':'frozen', 'biscuit-dough':'frozen',
  'truffle-oil':'pantry', 'truffle-salt':'pantry', 'truffle-paste':'pantry', 'truffle-honey':'pantry', 'vanilla-bean-paste':'pantry', mostarda:'pantry', 'fleur-de-sel':'pantry', 'aged-balsamic-tradizionale':'pantry',
  'fresh-gourmet-mushrooms':'greengrocer', 'mushroom-grow-kits':'greengrocer', 'edible-flowers':'greengrocer', 'sprouting-seeds':'greengrocer', 'specialty-chiles-fresh':'greengrocer', 'exotic-fruit':'greengrocer', 'fresh-truffles':'greengrocer', 'specialty-citrus':'greengrocer',
};
const AISLE_NAME = { greengrocer:'The Greengrocer', pantry:'The Pantry', 'heat-and-sauce':'Heat & Sauce', sweets:'Sweets & Bakery', butcher:'The Butcher', 'cold-case':'The Cold Case', 'drink-cart':'The Drink Cart', 'asian-pantry':'The Asian Pantry', 'latin-pantry':'The Latin Pantry', 'middle-eastern-pantry':'The Middle-Eastern Pantry', 'african-pantry':'The African Pantry', 'indian-pantry':'The Indian Pantry', 'glass-case':'The Glass Case', 'spice-rack':'The Spice Rack', 'mill':'The Mill', 'mediterranean-pantry':'The Mediterranean Pantry', 'caribbean-pantry':'The Caribbean Pantry', 'daily-catch':'The Daily Catch', frozen:'The Frozen Aisle', snacks:'Snacks & the Jerky Drawer', 'british-pantry':'The British & Irish Pantry', 'german-nordic':'The German & Nordic Pantry' };

// load writer content
let shelves = [];
for (const f of fs.readdirSync('C:/tmp/shelf-content').filter(f=>f.endsWith('.js'))) {
  try { shelves = shelves.concat(require('C:/tmp/shelf-content/'+f)); }
  catch(e){ console.log('CONTENT PARSE FAIL', f, e.message); }
}

// assign shelf numbers continuing from the current max No.
let maxNo = 0;
for (const d of fs.readdirSync(path.join(ROOT,'hunt'))) {
  const p = path.join(ROOT,'hunt',d,'index.html');
  if (!fs.existsSync(p)) continue;
  const m = fs.readFileSync(p,'utf8').match(/No\.(\d{2,3})/);
  if (m) maxNo = Math.max(maxNo, parseInt(m[1],10));
}
shelves.sort((a,b)=> a.slug.localeCompare(b.slug));

const esc = s => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const jsesc = s => String(s||'').replace(/\\/g,'\\\\').replace(/"/g,'\\"');
const stars = n => '★'.repeat(n);
const SHIP = { fast:'✈️ Ships fast', ground:'🚛 Ground only', local:'🚜 Local / limited' };
const SHIPTITLE = { fast:'Ships nationwide, fast options', ground:'Ships ground; may be slower/perishable', local:'Regional, seasonal, or limited availability' };

function badges(m){
  return `<div class="badges" style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin:-2px 0 13px;font-family:var(--fm);font-size:15px;">`+
    `<span title="Typical price" style="font-weight:700;color:var(--green);letter-spacing:1.5px;">${esc(m.price||'$$')}</span>`+
    `<span title="5best2buy rating: ${m.rating||5} of 5" style="color:var(--gold);letter-spacing:2px;font-size:15px;">${stars(m.rating||5)}</span>`+
    `<span title="${SHIPTITLE[m.ship]||SHIPTITLE.fast}" style="color:var(--soft);letter-spacing:.2px;">${SHIP[m.ship]||SHIP.fast}</span></div>`;
}
function makerCard(m){
  return `  <div class="find" id="m-${String(m.name).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}">
    <div class="rank">${esc(m.rank)}</div>
    <h2>${esc(m.name)}</h2>
    <div class="maker">${esc(m.line)}</div>
    ${badges(m)}
    <p>${esc(m.body)}</p>
    <p class="why"><b>Why it's worth finding</b>${esc(m.why)}</p>
    <a class="hunt" href="${esc(m.url)}" rel="sponsored nofollow" target="_blank">See it at ${esc(m.name)} →</a>
  </div>`;
}
function faqHTML(faq){
  return faq.map(f=>`    <details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n');
}
function graph(s, no, aName, aSlug){
  const g = [
    {"@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"5best2buy.com","item":"https://www.5best2buy.com/"},
      {"@type":"ListItem","position":2,"name":aName,"item":`https://www.5best2buy.com/aisles/${aSlug}/`},
      {"@type":"ListItem","position":3,"name":s.name,"item":`https://www.5best2buy.com/hunt/${s.slug}/`}]},
    {"@type":"Article","headline":`${s.name} Worth the Hunt`,"description":s.dek,"datePublished":DATE,"dateModified":DATE,
      "mainEntityOfPage":`https://www.5best2buy.com/hunt/${s.slug}/`,
      "author":{"@type":"Organization","name":"5best2buy.com","url":"https://www.5best2buy.com/"},
      "publisher":{"@type":"Organization","name":"5best2buy","logo":{"@type":"ImageObject","url":"https://www.5best2buy.com/logo.png"}}},
    {"@type":"ItemList","name":`${s.name} Worth the Hunt`,"numberOfItems":s.makers.length,
      "itemListElement":s.makers.map((m,i)=>({"@type":"ListItem","position":i+1,"name":m.name}))},
    {"@type":"FAQPage","mainEntity":s.faq.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))}
  ];
  return JSON.stringify({"@context":"https://schema.org","@graph":g});
}

const STYLE = `<style>
  :root{--navy:#0d1421;--surface:#121e30;--card:#16223a;--blue:#5fb0ef;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fd:'Rajdhani','Arial Narrow',sans-serif;--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--navy);color:var(--text);font-family:Georgia,'Times New Roman',serif;line-height:1.72;padding:18px 18px 60px;max-width:740px;margin:0 auto;font-size:17px;}
  .home{font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--meta);text-decoration:none;}
  .home:hover{color:var(--gold);}
  .eyebrow{font-family:var(--fm);font-size:12.5px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin:22px 0 8px;}
  h1{font-family:var(--fd);font-size:clamp(32px,6.5vw,52px);font-weight:700;letter-spacing:.5px;line-height:1.02;color:var(--text);margin-bottom:16px;}
  .dek{color:var(--soft);max-width:62ch;margin-bottom:20px;}
  .creed{font-family:var(--fm);font-size:15px;line-height:1.7;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:14px 16px;margin-bottom:30px;}
  .creed b{color:var(--gold);}
  .find{border-top:1px solid var(--line);padding:24px 0;}
  .find.open .rank{color:var(--green);}
  .rank{font-family:var(--fd);font-size:13px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:5px;}
  .find h2{font-family:var(--fd);font-size:27px;font-weight:700;letter-spacing:.4px;line-height:1.08;color:var(--text);margin-bottom:3px;}
  .maker{font-family:var(--fm);font-size:12px;color:var(--blue);letter-spacing:.4px;margin-bottom:13px;}
  .find p{color:var(--text);margin-bottom:12px;}
  .find p.why{color:var(--soft);font-size:15.5px;}
  .why b{color:var(--gold);font-family:var(--fm);font-size:12.5px;letter-spacing:1.5px;text-transform:uppercase;display:block;margin-bottom:2px;}
  .hunt{display:inline-block;margin-top:4px;font-family:var(--fd);font-size:15px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#10203a;background:var(--gold);padding:11px 22px;border-radius:5px;text-decoration:none;}
  .hunt:hover{background:#ffd877;}
  .recruit{font-family:var(--fm);font-size:13px;color:var(--soft);margin-top:24px;line-height:1.7;}
  .recruit a{color:var(--gold);}
  .disclosure{font-family:var(--fm);font-size:15px;color:var(--meta);border-top:1px solid var(--line);padding-top:18px;margin-top:28px;line-height:1.7;}
  .faq{border-top:1px solid var(--line);padding-top:24px;margin-top:26px;}
  .faqhead{font-family:var(--fd);font-size:13px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:4px;}
  .faqtitle{font-family:var(--fd);font-size:27px;font-weight:700;letter-spacing:.4px;color:var(--text);margin-bottom:12px;}
  .faq details{border-bottom:1px solid var(--line);padding:13px 0;}
  .faq summary{font-family:var(--fd);font-size:20px;font-weight:700;letter-spacing:.2px;color:var(--text);cursor:pointer;list-style:none;}
  .faq summary::-webkit-details-marker{display:none;}
  .faq summary::before{content:'+';color:var(--gold);font-weight:700;margin-right:9px;}
  .faq details[open] summary::before{content:'\\2013';}
  .faq details p{font-family:var(--fm);font-size:15px;color:var(--soft);margin:9px 0 2px;line-height:1.62;}
</style>`;

let built = 0; const manifest = [];
for (const s of shelves) {
  const aSlug = AISLE[s.slug]; if (!aSlug) { console.log('NO AISLE for', s.slug, '- skipping'); continue; }
  const aName = AISLE_NAME[aSlug];
  // idempotent numbering: reuse an existing page's No.; only new shelves consume a fresh number
  const existingPath = path.join(ROOT,'hunt',s.slug,'index.html');
  let no;
  if (fs.existsSync(existingPath)) {
    const mm = fs.readFileSync(existingPath,'utf8').match(/No\.(\d{2,3})/);
    no = mm ? mm[1] : String(++maxNo).padStart(3,'0');
  } else {
    no = String(++maxNo).padStart(3,'0');
  }
  const title = `5best2buy No.${no} — ${esc(s.name)}, and Where to Actually Buy It | 5best2buy`;
  const desc = esc(s.dek).slice(0,300);
  const lower = s.name.toLowerCase();

  const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/png" href="/logo.png" />
<link rel="apple-touch-icon" href="/logo.png" />
<link rel="manifest" href="/manifest.webmanifest" />
<meta name="theme-color" content="#0d1421" />
<title>${title}</title>
<meta name="description" content="${desc}" />
<link rel="canonical" href="https://www.5best2buy.com/hunt/${s.slug}/" />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GG5QF6LH0D"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GG5QF6LH0D');</script>
<meta name="google-adsense-account" content="ca-pub-8826956454892311" />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8826956454892311" crossorigin="anonymous"></script>
${STYLE}
<meta property="og:type" content="article" />
<meta property="og:site_name" content="5best2buy.com" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${desc}" />
<meta property="og:url" content="https://www.5best2buy.com/hunt/${s.slug}/" />
<meta property="og:image" content="https://www.5best2buy.com/logo.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${desc}" />
<script type="application/ld+json">${graph(s,no,aName,aSlug)}</script>
</head>
<body>
  <nav style="font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;font-size:12.5px;letter-spacing:1px;text-transform:uppercase;color:#9aabc4;" aria-label="Breadcrumb"><a href="/" style="color:#9aabc4;text-decoration:none;">5best2buy.com</a> &rsaquo; <a href="/aisles/${aSlug}/" style="color:#9aabc4;text-decoration:none;">${aName}</a> &rsaquo; ${esc(s.name)}</nav>
  <div class="eyebrow">${aName} · No.${no} · ${esc(s.name)}</div>
  <h1>${esc(s.name)} Worth the Hunt</h1>
  <p class="dek">${esc(s.dek)}</p>
  <p style="font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;font-size:15px;letter-spacing:1px;color:#9aabc4;margin-bottom:18px;">Published July 2026 &middot; Updated 7 Jul 2026</p>
  <div class="creed"><b>How this list works.</b> Every maker here is small or independent, actually ships what it makes, and earns its spot on merit — nobody pays to be listed. ${esc(s.creedTail)}</div>
  <div class="legend" style="font-family:var(--fm);font-size:15px;color:var(--meta);margin:-20px 0 28px;line-height:1.75;">On each pick: <b style="color:var(--green);">$</b> typical price &middot; <b style="color:var(--gold);">★</b> our rating &middot; <b>✈️</b> ships fast &middot; <b>🚛</b> ground only &middot; <b>🚜</b> local / limited</div>
  <!--LISTW-->
  <div style="margin:0 0 26px;">
    <button data-add-shelf data-name="${jsesc(s.name)} — 5best2buy" style="display:inline-flex;align-items:center;gap:7px;font-family:var(--fm);font-size:15px;font-weight:700;letter-spacing:.4px;color:#10203a;background:var(--gold);border:none;border-radius:6px;padding:11px 18px;cursor:pointer;">🛒 Add to my shopping list</button>
  </div>
  <!--/LISTW-->
${s.makers.map(makerCard).join('\n\n')}

  <div class="find open">
    <div class="rank">Open Spot</div>
    <h2>Make or grow exceptional ${esc(lower)}?</h2>
    <p>This seat's open on purpose — we won't pad the list to hit a number. If you ship real ${esc(lower)} direct, it's earned, not sold.</p>
    <a class="hunt" href="/contact/">Add your brand →</a>
  </div>

  <div class="faq">
    <div class="faqhead">Straight Answers</div>
    <div class="faqtitle">${esc(s.name)} FAQ</div>
${faqHTML(s.faq)}
  </div>
  <!--XREF-START--><!--XREF-END-->

  <p class="recruit">Make or grow real ${esc(lower)} and think you belong here? <a href="/contact/">Tell us →</a> — features are on merit, never for sale.</p>
  <p class="disclosure">
    Some "see it at…" links are affiliate links — if you buy through one, 5best2buy may earn a small commission at no extra cost to you. It never costs the maker anything, and it never decides who makes the list. The list is the list.<br>
    © 2026 5best2buy.com · No.${no}
  </p>
<script src="https://www.dwin2.com/pub.2961345.min.js" type="text/javascript" defer></script>
  <script src="/list.js" defer></script>
</body>
</html>`;

  fs.mkdirSync(path.join(ROOT,'hunt',s.slug), {recursive:true});
  fs.writeFileSync(path.join(ROOT,'hunt',s.slug,'index.html'), page);
  built++;
  manifest.push({slug:s.slug, name:s.name, no, aisle:aSlug, makers:s.makers.length, desc:s.dek.split('.')[0]+'.'});
}
console.log('built', built, 'shelves. No. range up to', String(maxNo).padStart(3,'0'));
console.log(JSON.stringify(manifest.map(m=>`${m.aisle}/${m.slug} (No.${m.no}, ${m.makers} makers)`), null, 0));
fs.writeFileSync('C:/tmp/shelf-build-manifest.json', JSON.stringify(manifest,null,2));

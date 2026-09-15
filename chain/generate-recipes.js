// generate-recipes.js — data-driven ad-free "simple" recipe pages.
// Each recipe = one compact data object. Run: node generate-recipes.js
// Writes /recipes/<slug>/index.html (ad-free) + injects hub cards between
// <!--SIMPLE-START--> and <!--SIMPLE-END--> in /recipes/index.html.
const fs = require('fs'), path = require('path');
const { matchCast, groupPhoto } = require('./mascots.js');   // ingredient-character group-photo hero
let BYCUISINE = {};   // cuisine -> [{slug,title}] for "related recipes" internal linking (populated after `all` is built)
const cslug = c => String(c).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const ROOT = 'C:/tmp/5b2b-live';
const DATE = '2026-07-05';

// ---- auto-relink resolver: link a `local` single-ingredient if a real shelf now exists ----
const VALID = new Set(fs.readdirSync(ROOT + '/hunt'));
const SYN = {
  'coconut milk':'coconut-milk','shredded coconut':'shredded-coconut','cream of tartar':'baking-leaveners',
  'baking soda':'baking-leaveners','baking powder':'baking-leaveners','active dry yeast':'baking-leaveners','instant yeast':'baking-leaveners',
  'vanilla extract':'vanilla-extract','rice vinegar':'rice-vinegar','fish sauce':'fish-sauce','soy sauce':'soy-sauce',
  'sesame oil':'sesame-oil','olive oil':'olive-oil','maple syrup':'maple-syrup','rolled oats':'oats-hot-cereal',
  'corn tortillas':'tortillas','flour tortillas':'tortillas','preserved lemon':'preserved-lemon','dried mushrooms':'dried-mushrooms',
  'mango chutney':'mango-chutney','fresh pasta':'fresh-pasta','dulce de leche':'dulce-de-leche','pomegranate molasses':'pomegranate-molasses',
  'ground beef':'beef','ground pork':'pork','peanut butter':'peanut-butter',
  garlic:'garlic',onion:'onions-shallots',onions:'onions-shallots',shallot:'onions-shallots',egg:'eggs',eggs:'eggs',
  butter:'butter',milk:'milk',cream:'milk',buttermilk:'milk',yeast:'baking-leaveners',vanilla:'vanilla-extract',
  mayonnaise:'mayonnaise',mayo:'mayonnaise',honey:'raw-honey',molasses:'molasses',tahini:'tahini',miso:'miso',
  kimchi:'kimchi',gochujang:'gochujang',doenjang:'doenjang',dashi:'dashi',mirin:'mirin',ghee:'ghee',harissa:'harissa',
  zaatar:'zaatar',dukkah:'dukkah',furikake:'furikake',halva:'halva',labneh:'labneh',teff:'teff',berbere:'berbere',
  sauerkraut:'sauerkraut',hummus:'hummus',oats:'oats-hot-cereal',bacon:'bacon',beef:'beef',pork:'pork',chicken:'chicken',
  lamb:'lamb',turkey:'turkey',sausage:'sausage',pepperoni:'pepperoni',pistachio:'pistachios',pistachios:'pistachios',
  almond:'almonds',almonds:'almonds',walnut:'walnuts',walnuts:'walnuts',pecan:'pecans',pecans:'pecans',dates:'dates',
  marshmallow:'marshmallows',plantain:'plantain-chips',sofrito:'sofrito',tortilla:'tortillas',masa:'masa',
  parmesan:'parmesan',parmigiano:'parmesan',pecorino:'parmesan',mozzarella:'mozzarella',ricotta:'ricotta',
  tofu:'tofu-tempeh',tempeh:'tofu-tempeh',lard:'lard',pickles:'pickles',relish:'relish',capers:'capers',
  // herbs -> the fresh-herbs shelf (live plants + cut + freeze-dried)
  cilantro:'fresh-herbs',parsley:'fresh-herbs',basil:'fresh-herbs',dill:'fresh-herbs',mint:'fresh-herbs',chives:'fresh-herbs',
  thyme:'fresh-herbs',rosemary:'fresh-herbs',oregano:'fresh-herbs',sage:'fresh-herbs',tarragon:'fresh-herbs',scallion:'fresh-herbs',
  scallions:'fresh-herbs',herbs:'fresh-herbs','fresh herbs':'fresh-herbs',microgreens:'microgreens',
  // produce -> shippable-form shelves
  berries:'berries',berry:'berries',strawberr:'berries',blueberr:'berries',raspberr:'berries',blackberr:'berries',cranberr:'cranberries',
  broccoli:'dried-vegetables',cauliflower:'dried-vegetables',spinach:'dried-vegetables',kale:'dried-vegetables',
  zucchini:'dried-vegetables','green beans':'dried-vegetables',peas:'dried-vegetables','mixed veg':'dried-vegetables',
  vegetable:'dried-vegetables',cabbage:'sauerkraut',cucumber:'pickles',avocado:'avocados',avocados:'avocados',
  mushroom:'dried-mushrooms',mushrooms:'dried-mushrooms',
  // last-push shelves + quick resolver fixes
  saffron:'saffron',ginger:'ginger',tamarind:'tamarind',hominy:'hominy',bulgur:'bulgur',
  salmon:'wild-salmon',shrimp:'shrimp',prawn:'shrimp',
  'neutral oil':'cooking-oil','vegetable oil':'cooking-oil','canola oil':'cooking-oil','avocado oil':'cooking-oil','sunflower oil':'cooking-oil',
  'orange zest':'citrus',orange:'citrus',oranges:'citrus','sour cherries':'dried-fruit',raisins:'dried-fruit',
};
const SYN_KEYS = Object.keys(SYN).sort((a,b)=>b.length-a.length);
function resolveShelf(name){
  const n = String(name||'').toLowerCase().replace(/&amp;/g,'&');
  if(n.includes(',') || n.includes('&') || / and /.test(n)) return null; // combos stay local/honest
  for(const k of SYN_KEYS){ if(n.includes(k) && VALID.has(SYN[k])) return SYN[k]; }
  return null;
}

// ---- METHOD LAYER: derive honest appliance fit + air-fryer FAQ from recipe data ----
// Auto-tags every recipe (no per-recipe work) so we can own long-tail "can you make X in an air fryer" searches.
// Honesty valve: a real No (or Yes-with-an-insert) still answers the search and stays true to the shelf philosophy.
function deriveMethods(r){
  const cat = (r.category||'').toLowerCase();
  const t = [r.title, r.kw, r.desc, r.dek, r.category, ...(r.steps||[]).map(s=>s.b+' '+s.t)].join(' ').toLowerCase();
  const cook0 = /pt0m/i.test((r.iso&&r.iso[1])||'') || /^0\s*min/i.test(r.cook||'');
  const nobake = /no[- ]bake/.test(t);
  // ---- structural signals first: category + cook-time beat loose keywords (no-slop discipline) ----
  const isSalad = /\bsalad\b|coleslaw|\bslaw\b|tabbouleh|panzanella|fattoush/.test(t);
  const mayoSalad = isSalad && /potato salad|pasta salad|macaroni salad|egg salad|chicken salad|tuna salad|coleslaw|\bslaw\b|olivier/.test(t);
  const nocook = cook0 || cat==='drink' || /no-cook|no[- ]bake|\bceviche|tartare|overnight oats|smoothie|gazpacho|guacamole|gravlax/.test(t);
  const liquidy = cat==='soup' || /\bsoup\b|\bstew|chowder|\bbroth|bisque|gumbo|\bchili\b(?!\s*(?:flake|powder|crisp|oil|paste|garlic|pepper|sauce|jam))|jjigae|\bramen\b|\bpho\b|congee|braise|bourguignon|cioppino|bouillabaisse|\bcurry\b|\bdal\b/.test(t);
  const soupy = liquidy || /risotto|paella|pilaf|jambalaya|\bbeans\b|lentil|pot roast|pulled/.test(t);
  const bakey = !nobake && /\bbaked?\b|\broast|broil/.test(t);
  const bakedgood = bakey && !nocook && !isSalad && /\bbread\b|muffin|cookie|\bcake\b|scone|\brolls?\b|\bwaffle|biscuit|brownie|babka|\bloaf\b|cinnamon roll|banana bread|cornbread|\bpie\b|\btart\b|shortbread|\bpastry/.test(t) && !/garlic bread|bread ?crumb|breaded|crouton|tiramisu|cheesecake|icebox/.test(t);
  // fried = a genuine fry/roast ACTION — never the texture word "crisp" or "wedge salad"
  const fried = !isSalad && !liquidy && !nocook && (/deep[- ]?fr|pan[- ]?fr|shallow[- ]?fr|\bfried\b|\bfry\b|crispy|breaded|\bbatter[- ]?fri|\bwings?\b|nuggets?|chicken tenders?|fritter|\btots?\b|\bfries\b|katsu|karaage|tempura|croquet|schnitzel|falafel|poppers?|nashville|meatball|kebab|skewer/.test(t) || (bakey && !bakedgood));
  const grilly = /\bgrill|barbecue|\bbbq\b|\bchar\b|souvlaki|yakitori|\bsatay/.test(t);
  const batter = !isSalad && /pancake|cr[eê]pe|waffle|scrambl|omelet|souffl/.test(t);
  const potty = soupy || /skillet|dutch oven|one[- ]pot|saut|\bsimmer\b/.test(t);

  let af; // {v: yes|insert|no|na|maybe, a: honest answer}
  if(cat==='drink' || cat==='sauce') af = null;
  else if(isSalad) af = {v:'na', a:'It’s a salad — nothing to air-fry once it’s tossed. You can crisp a topping in one, though: croutons, bacon, or chickpeas in a single layer while you build the rest.'};
  else if(nocook) af = {v:'na', a:'No cooking needed here — this one comes together without heat, so the air fryer sits it out.'};
  else if(liquidy) af = {v:'insert', a:'Not on its own — an air fryer can’t hold a pool of liquid. You can simmer it in an oven-safe dish or a silicone insert made to fit the basket, but the broth won’t reduce or brown the way it does on the stove, and that insert comes out scorching, so use oven mitts. For real depth, a pot on the stove wins.'};
  else if(/\bcustard\b|creme br|crème br|\bflan\b|creme caramel|crème caramel|pot de cr/.test(t)) af = {v:'maybe', a:'You can, but a custard needs gentle, even heat and usually a water bath the basket can’t give, so the top tends to set before the middle. Bake it in ramekins that fit and watch closely, or use the oven for a foolproof set.'};
  else if(batter) af = {v:'no', a:'Not really — loose batter spreads and needs a flat, hot surface. Keep this one on the stovetop or griddle.'};
  else if(bakedgood) af = {v:'yes', a:'Yes — bake it in a small pan or dish that fits the basket, at about 25°F below the recipe temperature. Air fryers run hot and fast, so check it early; no flipping needed.'};
  else if(fried) af = {v:'yes', a:'Yes — this is exactly what an air fryer does well. Work in a single layer so the air can move, and shake or flip halfway for even crisping. It runs a touch faster than the oven, so check early.'};
  else af = {v:'maybe', a:'Sometimes — if the pieces are small and cooked dry, an air fryer can handle it in a single layer; anything saucy or liquid needs a pan. When in doubt, the stovetop or oven is the safe call.'};

  const tags = [];
  if(af && af.v==='yes') tags.push('Air fryer');
  if(grilly && !isSalad) tags.push('Grill');
  if(soupy && !nocook){ tags.push('Instant Pot'); tags.push('Slow cooker'); }
  if(potty && !nocook && !isSalad) tags.push('One-pot');
  if(bakey && !liquidy && !nocook && !isSalad) tags.push('Sheet pan');
  if(nocook || isSalad || cat==='drink' || cat==='sauce') tags.push('No-cook');
  if(!tags.length) tags.push((cat==='dessert'||bakey) ? 'Oven' : 'Stovetop');

  // ---- "Can you freeze it?" (honest) ----
  let freeze;
  if(cat==='drink') freeze = null;
  else if(isSalad) freeze = {v:'Best fresh', a:'Not really — the vegetables and dressing turn to mush once thawed. Salads are a make-fresh thing.'};
  else if(/custard|panna cotta|mousse|cheesecake|tiramisu|whipped|meringue|mayonnaise|\bmayo\b|dressing|hollandaise|\baioli/.test(t)) freeze = {v:'Not ideal', a:'Not really — the cream, custard, or emulsion turns grainy or splits once thawed. This one is best kept fresh in the fridge.'};
  else if(soupy || /casserole|lasagna|\bchili\b|\bstew|\bsauce\b|\bragu|\bbeans\b|braise|meatball|dumpling|pot pie|pulled|\bstock\b|\bbroth\b/.test(t)) freeze = {v:'Yes', a:'Yes — it freezes well. Cool it fully, portion into airtight containers, and it keeps a few months; thaw in the fridge and reheat gently.'};
  else if(bakedgood || (cat==='dessert' && bakey)) freeze = {v:'Yes', a:'Yes — freeze it well-wrapped, then reheat or toast straight from frozen. Frost or glaze after thawing.'};
  else if(fried) freeze = {v:'Not ideal', a:'You can, but the crisp coating softens. Freeze the cooked pieces, then re-crisp them in a hot oven or air fryer — never the microwave.'};
  else freeze = {v:'Yes', a:'Yes — cool it, portion into airtight containers, and freeze; thaw in the fridge and reheat.'};

  // ---- "Can you make it ahead?" (honest) ----
  let makeahead;
  if(mayoSalad) makeahead = {v:'Yes', a:'Yes — it actually wants a few hours in the fridge for the flavors to settle. Make it ahead and give it a stir before serving.'};
  else if(/serve (it |them )?(right )?(away|immediately|at once)|within (the|an) hour|best (served |made )?fresh|loses? (its? )?(nose|bite|edge|fizz|crunch|kick|sharpness)|fades (fast|quickly)|don'?t make (it |them )?(too )?far ahead/.test(t)) makeahead = {v:'Best fresh', a:'Best made fresh and served soon — it loses its edge standing around. You can prep the parts ahead, but finish and serve it close to the table.'};
  else if(isSalad) makeahead = {v:'Best fresh', a:'Dress it just before serving — the greens wilt and brown once coated. Wash, cut, and chill the components ahead, then toss at the last minute.'};
  else if(cat==='drink') makeahead = {v:'Partly', a:'You can batch the mix and keep it cold, but add the ice, soda, and garnish and shake or stir to order — a made-up drink goes flat and watery if it sits.'};
  else if(cat==='sauce' || /\bdip\b/.test((r.title||'').toLowerCase())) makeahead = {v:'Yes', a:'Yes — it keeps in the fridge for several days; stir or shake it before serving.'};
  else if(soupy || /casserole|lasagna|\bchili\b|\bstew|braise|\bcurry\b|\bdal\b|marinat|\bcure\b|gravlax/.test(t)) makeahead = {v:'Yes', a:'Yes — it holds well and often tastes better the next day. Make it ahead and reheat gently before serving.'};
  else if(bakedgood) makeahead = {v:'Yes', a:'Yes — bake it a day or two ahead; it keeps well-wrapped at room temperature and freezes cleanly. Add any frosting or glaze close to serving.'};
  else if(/tiramisu|panna cotta|cheesecake|overnight|\bchill|refrigerate|pickle|ferment/.test(t) || (nocook && cat==='dessert')) makeahead = {v:'Yes', a:'Yes — it needs the chill time to set, so making it ahead is the whole point.'};
  else if(/guacamole|fresh herb/.test(t)) makeahead = {v:'Best fresh', a:'Best made close to serving — cut fruit and herbs brown and wilt. Prep the parts ahead and combine at the last minute.'};
  else if(fried) makeahead = {v:'Prep ahead', a:'Best fried to order — the crunch fades if it sits. Do the breading or shaping ahead and cook it fresh when you serve.'};
  else if(cat==='drink' || cat==='sauce' || /\bdip\b|dressing/.test(t)) makeahead = {v:'Yes', a:'Yes — it keeps in the fridge for a few days; stir or shake it before serving.'};
  else makeahead = {v:'Partly', a:'The components hold — prep the parts ahead and finish it close to serving for the best texture.'};

  return {af, freeze, makeahead, tags:[...new Set(tags)]};
}
const AFLABEL = {yes:'Yes', insert:'Yes, with an insert', no:'Not really', na:'Not needed', maybe:'Sometimes'};

// ---- THE RATIO: surface r.card, but only when it actually answers ----
// Every batch has written a `card` field and nothing has ever rendered it --
// 1,492 recipes carrying a one-line summary that appeared on no page. Rendering
// all of them would put 1,441 narrating cards ("Penne in a garlicky tomato
// sauce") above the fold, which is the thing cards are explicitly not for.
// So it ships only when the card carries something actionable: a quantity, a
// ratio, a temperature, a time. That is 51 recipes today and it is the correct
// 51 -- the rest become visible as they get rewritten, with no further code.
// Unicode fractions count as digits here. Cards are written the way a cook
// reads them -- "½ cup tahini" -- and a bare \d silently rejected every card
// that led with one, which is a quiet way to hide the exact recipes this is for.
const ANSWERS = /[\d½¼¾⅓⅔⅛⅜⅝⅞]\s*(cup|tbsp|tsp|oz|lb|g\b|ml|quart|pint|min|hour|%|:|°|part|clove|egg|slice|stick|bunch|head|can)|^[\d½¼¾⅓⅔⅛]|\d\s*:\s*\d/i;
function ratioBlock(r){
  const c = (r.card||'').trim();
  if(!c || !ANSWERS.test(c)) return '';
  // NOT class="ratio" -- that class already belongs to the "Our ratio, your
  // call" scaler box further down the page, and reusing it restyled that box on
  // every recipe.
  return `<p class="ratioline"><b>The ratio</b>${c}</p>`;
}

// ---- DIETARY / ALLERGEN engine: classify from the structured ingredient names. SAFETY-CRITICAL: never claim
// "free of X" unless provable; warn on "Contains"; offer honest swaps for near-misses. Hidden sources handled
// (Worcestershire=fish, mayo/aioli/hollandaise=egg, soy sauce=gluten+soy, ghee/niter kibbeh=dairy, dashi=fish). ----
function deriveDiet(r){
  const N = (r.ing||[]).map(i=>' '+(i.n||'').toLowerCase().replace(/&amp;/g,'&')+' ');
  const any = re => N.some(n=>re.test(n));
  const meat = any(/beef|\bpork|chicken|turkey|\blamb|\bveal|bacon|sausage|\bham\b|prosciutto|pancetta|guanciale|chorizo|salami|pepperoni|\bduck|rabbit|meatball|\bmince\b|ground (?:beef|pork|lamb|meat|turkey|veal)|\bsteak|brisket|\bribs?\b|hot ?dog|jerky|\blard\b|gelatin|\bsuet\b|tallow|pluck|\bliver|kielbasa|andouille|bologna|mortadella|capicola|carnitas|pastrami|corned beef|salt pork|niter kibbeh|\bgoat\b|venison|bison|schmaltz|chorizo|boudin/);
  const fish = any(/\bfish|salmon|\bcod\b|\btuna|anchov|haddock|sardine|mackerel|sea bass|\bsole\b|\btrout|caviar|\broe\b|bacalhau|\bdashi|katsuo|bonito|worcestershire|fish sauce|smoked fish/);
  const shellfish = any(/shrimp|prawn|\bcrab|lobster|\bclam|mussel|oyster|scallop|squid|octopus|crawfish|crayfish|langoustine|shrimp paste|ikan bilis|oyster sauce/);
  const dairyRe = /\bmilk|butter|cheese|\bcream|yogurt|yoghurt|mascarpone|ricotta|mozzarella|parmes|parmigiano|pecorino|cheddar|\bfeta|gruy|\bghee\b|buttermilk|condensed milk|evaporated milk|cr[eè]?me fra|\bqueso|cotija|paneer|\bcurd\b|bryndza|halloumi|labneh|kefir|gelato|ice cream|custard powder|niter kibbeh|clotted|dulce de leche|khoya/;
  // plant "butter"/"milk"/"cream" and butternut/butter-bean etc. are NOT dairy — strip them, then re-test
  const notDairy = /(?:peanut|almond|cashew|hazelnut|pecan|walnut|macadamia|pine ?nut|sun ?flower|sunflower|pumpkin|seed|soy|oat|\brice|coconut|hemp|\bpea\b|cocoa|shea|apple|body|nut)[\s-]*(?:butter|milk|cream)|butter\s?nut|butter\s?head|butter\s?cup|butter\s?bean|butter lettuce|non-?dairy|creamer\b/g;
  const dairy = N.some(n=> dairyRe.test(n) && dairyRe.test(n.replace(notDairy,' ')));
  const egg = any(/\begg(?!plant)|mayonnaise|\bmayo\b|aioli|hollandaise|meringue|ladyfinger|savoiardi|custard powder/);
  // gluten with careful exclusions (GF flours/noodles are named)
  const glutenFlour = N.some(n=>/flour/.test(n) && !/almond|chickpea|besan|\brice|coconut|\bcorn|masa|masarepa|buckwheat|cassava|tapioca|oat\b|nut\b|potato/.test(n));
  const glutenNoodle = N.some(n=>/noodle|pasta|spaghetti|macaroni|linguine|penne|rigatoni|fettuccine|orzo|lasagna|ravioli|gnocchi|udon|\bramen/.test(n) && !/rice noodle|glass noodle|bean thread|vermicelli|shirataki|buckwheat|soba|gluten-?free/.test(n));
  const gluten = glutenFlour || glutenNoodle || any(/wheat|\bbread(?!fruit)|breadcrumb|panko|couscous|bulgur|semolina|barley|\brye\b|farro|seitan|soy sauce|\bbeer\b|cracker|phyllo|puff pastry|pie crust|\bpastry|pretzel|\bbun\b|\bpita|\bnaan|biscuit|croissant|wonton|gyoza|dumpling wrapper|graham|shortbread|malt|hoisin|ladyfinger|savoiardi|crouton|\bwafer|\bcake\b|\bmuffin|\brolls?\b|pancake|waffle|\bpie crust|puff|filo|strudel|brioche|challah|focaccia|baguette|ciabatta|sourdough|scone|\bdough\b/) || N.some(n=>/tortilla/.test(n)&&!/corn|maize/.test(n));
  const treenut = any(/almond|walnut|pecan|pistachio|cashew|hazelnut|macadamia|pine ?nut|brazil nut|chestnut|praline|marzipan|frangipane|nutella|amaretti|mixed nuts|\bnuts\b/);
  const peanut = any(/peanut|groundnut/);
  const sesame = any(/sesame|tahini|\bhalva|gomashio|furikake|dukkah|za'?atar/);
  const soy = any(/soy sauce|\btofu|tempeh|edamame|\bmiso\b|soybean|soy milk|\btamari|doenjang|\bnatto|doubanjiang|gochujang/);
  const honey = any(/honey/);

  const contains = [];
  if(dairy) contains.push('dairy'); if(egg) contains.push('eggs'); if(gluten) contains.push('gluten');
  if(treenut) contains.push('tree nuts'); if(peanut) contains.push('peanuts');
  if(fish) contains.push('fish'); if(shellfish) contains.push('shellfish');
  if(soy) contains.push('soy'); if(sesame) contains.push('sesame');

  const veg = !meat && !fish && !shellfish;
  const vegan = veg && !dairy && !egg && !honey;
  const gf = !gluten;
  const df = !dairy;

  // honest swaps for near-misses (only offered, never claimed as-is)
  const swaps = [];
  if(veg && !vegan){
    const parts = [];
    if(dairy) parts.push('use plant milk, oil, or a vegan cheese for the dairy');
    if(egg) parts.push('a flax or aquafaba egg for the egg');
    if(honey && !dairy && !egg) parts.push('maple syrup for the honey');
    if(parts.length) swaps.push({d:'vegan', t:'Make it vegan: '+parts.join(', and ')+'.'});
  }
  if(gluten){
    const src = glutenNoodle?'a gluten-free pasta or noodle' : any(/soy sauce/)&&!glutenFlour&&!glutenNoodle?'tamari instead of soy sauce' : glutenFlour?'a gluten-free flour blend' : 'gluten-free versions of the wheat items';
    swaps.push({d:'gluten-free', t:'Make it gluten-free: swap in '+src+' (check the other labels too).'});
  }

  return {contains, veg, vegan, gf, df, swaps, flags:{meat,fish,shellfish,dairy,egg,gluten,treenut,peanut,sesame,soy,honey}};
}

// ---- GREEDOMETER: the anti-nutrition. A playful richness/indulgence vibe-check (1–5), NOT a calorie count.
// High = decadent. Mom says no up top; big sis learns which dishes run lighter. Derived from indulgent signals. ----
function deriveGreed(r){
  const cat=(r.category||'').toLowerCase();
  const N=(r.ing||[]).map(i=>(i.n+' '+(i.q||'')).toLowerCase());
  const t=[r.title,r.kw,r.desc,r.category,...(r.steps||[]).map(s=>s.t)].join(' ').toLowerCase();
  const has=re=>N.some(n=>re.test(n))||re.test(t);
  let s=1;
  if(has(/butter|\bcream\b|heavy cream|double cream|\blard|\bghee|tallow|schmaltz|duck fat|mayonnaise|clotted|crème fra|creme fra/)) s++;
  if(has(/cheese|parmes|mozzarella|cheddar|mascarpone|ricotta|gruy|\bbrie\b|cream cheese|\bqueso|pecorino|feta/)) s++;
  if(has(/\bsugar|honey|\bsyrup|chocolate|caramel|condensed milk|frosting|\bicing|dulce|toffee|\bfudge|nutella|\bcandy/) || cat==='dessert') s++;
  if(has(/deep[- ]?fry|deep[- ]?fried|\bfried\b|batter[- ]?fri|\bfries\b|\bfritter|doughnut|\bdonut/)) s++;
  if(has(/\bbacon|\bsausage|chorizo|pancetta|guanciale|salami|pepperoni|pork belly|\bbrisket|short rib/)) s++;
  if((/\bsalad\b|steamed|\bbroth\b|poached|\bgrilled|\braw\b|no[- ]cook|fresh vegetable|\bveggie/.test(t)) && s>1 && cat!=='dessert' && cat!=='drink') s--;
  if(cat==='dessert') s=Math.max(s,3);
  if(cat==='drink' && !has(/cream|coconut cream|condensed|chocolate|\bsyrup/)) s=Math.min(s,2);
  s=Math.max(1,Math.min(5,s));
  const label={1:'Squeaky clean',2:'Barely a splurge',3:'A fair little treat',4:'Getting greedy',5:'Full-send decadent'}[s];
  const note={1:'About as virtuous as dinner gets.',2:'A light hand — your arteries say thanks.',3:'A reasonable little indulgence.',4:'Rich enough that Mom might raise an eyebrow.',5:'No notes. Pure, unrepentant comfort.'}[s];
  return {score:s, label, note};
}
// ---- rough grocery-cost band ($–$$$) from the ingredient list. Insights-section feature, not precise. ----
function deriveCost(r){
  const N=(r.ing||[]).map(i=>(i.n||'').toLowerCase());
  const joined=N.join(' | ');
  const splurge=/beef|steak|brisket|short rib|\blamb\b|\bveal\b|prime rib|tenderloin|ribeye|filet|salmon|\btuna\b|halibut|sea bass|swordfish|shrimp|prawn|\bcrab\b|lobster|scallop|oyster|clams?|mussels?|saffron|truffle|caviar|\bduck\b|venison|bison|pine ?nuts?|vanilla bean|prosciutto|guanciale/;
  const midish=/chicken|turkey|\bpork\b|sausage|\bbacon\b|\bfish\b|\bcod\b|shellfish|\bnuts?\b|almond|walnut|pecan|pistachio|cashew|hazelnut|parmigiano|pecorino|gruy|mascarpone|manchego|\bwine\b|heavy cream|\bcream\b|maple syrup|dried chile/;
  let n = splurge.test(joined) ? 3 : (midish.test(joined) || N.length>=10) ? 2 : 1;
  const label='$'.repeat(n);
  const note={1:'Pantry-friendly — everyday, inexpensive ingredients.',2:'Mid-range — a protein or some real dairy does most of the cost.',3:'A splurge — premium protein, seafood, or specialty ingredients.'}[n];
  return {n, label, note};
}

// ---- TIME + DIFFICULTY facets ----
function parseMin(str){ if(!str) return 0; let m=0; const h=String(str).match(/(\d+)\s*h/i), mm=String(str).match(/(\d+)\s*m/i); if(h)m+=+h[1]*60; if(mm)m+=+mm[1]; return m; }
function isoMin(iso){ if(!iso) return 0; const m=String(iso).match(/PT(?:(\d+)H)?(?:(\d+)M)?/); return m?(+(m[1]||0))*60+(+(m[2]||0)):0; }
function deriveFacets(r){
  const t=(r.steps||[]).map(s=>s.b+' '+s.t).join(' ').toLowerCase();
  const timeMin = isoMin(r.iso&&r.iso[2]) || (parseMin(r.prep)+parseMin(r.cook));
  const nIng=(r.ing||[]).length, nStep=(r.steps||[]).length;
  const hard=/temper|emulsif|\bknead|proof|laminat|caramel|deep[- ]?fr|double boiler|candy therm|soft ball|hard crack|\bconfit|sous vide|clarif|\bbrine\b|ferment|debone|\bfillet\b|flamb|reduce by half|whip.*(stiff|peaks)|beurre|\broux\b|blind bak|water bath|bain|pi[eè]ce|score the|tie the|truss/.test(t);
  let d=2;
  if(nIng<=6 && nStep<=4 && timeMin<=40 && !hard) d=1;
  else if(nIng>=12 || timeMin>=150 || nStep>=7 || (hard && nStep>=6)) d=3;
  // plan-ahead ONLY for genuine advance time — overnight, soak, marinate, ferment, or multiple hours.
  // (A brief 30-min/1-hour chill is NOT plan-ahead; the old `chill .*hour` matched "chill" and "hour"
  //  anywhere in the page and over-flagged quick recipes.)
  const extra=/marinat|overnight|\bsoak(?:ed|ing|s)?\b|proof|\brise\b|ferment|\bcure[ds]?\b|gravlax|day[- ]ahead|a day in advance|several hours|\bfew hours|\d+\s*(?:-|to|–|and)?\s*\d*\s*hours|plus (chill|rising|soak|marinat|the soak)/.test((r.prep+' '+r.makes+' '+t).toLowerCase());
  return {timeMin, d, label:{1:'Easy',2:'Some doing',3:'A project'}[d], extra};
}
// pantry staples excluded from reverse-search "core" (having them isn't required)
const PANTRY=/(^|\s)(kosher |sea |flaky |fine |coarse |finishing |table |flaky finishing )*salt$|^(black pepper|white pepper|freshly ground black pepper|ground black pepper|cracked black pepper|pepper)$|^(water|ice water|cold water|warm water|hot water|ice)$|^(olive oil|extra[- ]virgin olive oil|vegetable oil|neutral oil|cooking oil|canola oil|sunflower oil|oil for frying|oil|neutral cooking oil)$|^(sugar|granulated sugar|caster sugar|white sugar)$/;
function coreIngredients(r){
  return (r.ing||[]).map(i=>String(i.n||'').toLowerCase().replace(/&amp;/g,'&').trim())
    .filter(n=>n && !PANTRY.test(n) && !/to taste|as needed|for (frying|serving|dusting|the|garnish)/.test(n));
}

// ---- DATA: add a recipe = add an object here. shelf: links /hunt/<shelf>/; local:true = fresh/local note ----
const simpleRecipes = [
  { slug:'fried-rice', no:'12', title:'Fried Rice, and Where to Source It', cuisine:'Chinese', category:'Main',
    kw:'fried rice, egg fried rice, day-old rice', iso:['PT10M','PT10M','PT20M'], prep:'10 min', cook:'10 min', makes:'2–3 servings',
    desc:'Real fried rice — cold day-old rice fried hard and fast with egg, soy, and sesame oil. Ten minutes, one pan.',
    dek:'The trick to fried rice isn’t a secret sauce — it’s cold, day-old rice and a screaming-hot pan. Fresh rice steams and clumps; chilled rice fries into separate, toasty grains. Here’s how, and where to buy the handful of things that carry it.',
    card:'Cold day-old rice fried hard with egg, real soy, and toasted sesame oil. Ten minutes, one pan, endlessly riffable.',
    ing:[
      {n:'Day-old rice', q:'Cooked, cooled, and refrigerated overnight so it fries instead of steams. Long-grain or jasmine.', amt:'3 cups, cold', shelf:'rice'},
      {n:'Eggs', q:'Scrambled soft and folded through at the end. Deep-gold pasture yolks make it richer.', amt:'2', shelf:'eggs'},
      {n:'Soy sauce', q:'A naturally-brewed soy for real savory depth, not just salt. Add at the edge of the pan so it sizzles.', amt:'2 tbsp', shelf:'soy-sauce'},
      {n:'Toasted sesame oil', q:'Off the heat, at the very end — it’s a finishing aroma, not a frying fat.', amt:'1 tsp', shelf:'sesame-oil'},
      {n:'Scallion, garlic &amp; veg', q:'Whatever’s in the fridge — peas, carrot, scallion, garlic. Fresh and local.', amt:'to taste', local:true},
    ],
    steps:[
      {b:'Prep everything first', t:'Fried rice cooks in three minutes, so have it all cut and ready. Break up the cold rice with your hands so there are no clumps.'},
      {b:'Scramble the egg', t:'Get a wok or wide pan very hot with a little oil, scramble the eggs until just set, and scrape them out.'},
      {b:'Fry the rice', t:'More oil, then the aromatics for a few seconds, then the rice. Press it into the hot pan and let it sit before tossing, so it toasts. Add the soy at the edge so it caramelizes.'},
      {b:'Finish', t:'Fold the egg and any veg back in, kill the heat, and stir through the sesame oil and scallion. Serve straight away.'},
    ],
    tools:['Wok|carbon steel wok','Metal spatula|metal wok spatula','Rice cooker|rice cooker'] },

  { slug:'pesto-pasta', no:'13', title:'Pesto Pasta, and Where to Source It', cuisine:'Italian', category:'Main',
    kw:'pesto, basil pesto, pesto pasta', iso:['PT10M','PT12M','PT22M'], prep:'10 min', cook:'12 min', makes:'4 servings',
    desc:'Fresh basil pesto pounded with good olive oil, real Parmigiano, and nuts, tossed through pasta — never cooked.',
    dek:'Pesto is raw — the second you cook it, it goes dull and army-green. The whole art is a bright, barely-warm sauce that clings to the pasta, and that rides entirely on a real olive oil and real Parmigiano. Here’s how, and where to buy them.',
    card:'Raw basil, real Parmigiano, good olive oil, nuts — pounded bright and tossed through pasta, never cooked.',
    ing:[
      {n:'Pasta', q:'A shape with grip — trofie, fusilli, or spaghetti. Bronze-die holds the sauce.', amt:'1 lb', shelf:'pasta'},
      {n:'Parmigiano-Reggiano', q:'Grated into the pesto and over the top. Real aged parm is the salt and the savor.', amt:'1 cup, grated', shelf:'parmesan'},
      {n:'Extra-virgin olive oil', q:'A third of the sauce by volume — it has to taste good raw. Fresh, grassy, single-estate.', amt:'½ cup', shelf:'olive-oil'},
      {n:'Nuts', q:'Traditionally pine nuts; toasted almonds or walnuts are a great, cheaper swap. Toast them first.', amt:'⅓ cup', shelf:'almonds'},
      {n:'Basil &amp; garlic', q:'A big bunch of fresh basil and a clove of garlic. Buy them local — this is the fresh part.', amt:'2 cups leaves', local:true},
    ],
    steps:[
      {b:'Toast the nuts', t:'Toast the nuts in a dry pan until fragrant and let them cool — raw nuts make a flat pesto.'},
      {b:'Make the pesto', t:'Pound or pulse basil, garlic, nuts, and a little salt, then work in the Parmigiano and stream in the olive oil to a loose paste. Don’t over-blend or it heats and dulls.'},
      {b:'Cook the pasta', t:'Boil the pasta to al dente and save a mug of the starchy water.'},
      {b:'Toss off the heat', t:'Toss the drained pasta with the pesto and a splash of pasta water — off the heat — until glossy. Never cook the pesto. Top with more Parmigiano.'},
    ],
    tools:['Mortar &amp; pestle|marble mortar and pestle','Food processor|small food processor','Microplane|microplane grater'] },

  { slug:'grilled-cheese', no:'14', title:'Grilled Cheese, and Where to Source It', cuisine:'American', category:'Main',
    kw:'grilled cheese, grilled cheese sandwich', iso:['PT5M','PT8M','PT13M'], prep:'5 min', cook:'8 min', makes:'1 sandwich',
    desc:'The perfect grilled cheese — good bread, a real melting cheese, butter, low and slow.',
    dek:'A grilled cheese is three ingredients and a lot of patience. The mistakes are always the same: heat too high, cheese that won’t melt, bland bread. Fix those three and it’s perfect. Here’s how, and where to buy the parts.',
    card:'Good bread, a real melting cheese, butter, low and slow. Three ingredients, one skill: patience.',
    ing:[
      {n:'Bread', q:'A sturdy, real loaf — sourdough or a good country white. It has to hold up and crisp, not collapse.', amt:'2 slices', shelf:'bread'},
      {n:'Cheese', q:'Something that actually melts — a good aged cheddar, or a mix with a gooey melter. Grated melts faster and more evenly than sliced.', amt:'a generous handful', shelf:'cheese'},
      {n:'Butter', q:'Real butter, softened, spread edge to edge on the outsides. Good cultured butter browns beautifully.', amt:'2 tbsp', shelf:'butter'},
    ],
    steps:[
      {b:'Build it', t:'Butter the outsides of both slices, right to the edges. Pile the grated cheese inside — more than feels reasonable.'},
      {b:'Low and slow', t:'Into a cold pan, then low-to-medium heat. Rushing on high burns the bread before the cheese melts — the single most common mistake.'},
      {b:'Cover to melt', t:'Cover the pan for a minute to trap heat and melt the middle. Flip once the first side is deep golden.'},
      {b:'Rest a second', t:'Give it thirty seconds on the board before you cut it, so the cheese sets just enough not to run out.'},
    ],
    tools:['Cast-iron skillet|cast iron skillet','Fish spatula|fish spatula','Box grater|box grater'] },

  { slug:'chili', no:'15', title:'Chili, and Where to Source It', cuisine:'American', category:'Main',
    kw:'chili, chili con carne, beef and bean chili', iso:['PT20M','PT2H','PT2H20M'], prep:'20 min', cook:'2 hr', makes:'6 servings',
    desc:'A deep pot of chili built on real dried chiles, heirloom beans, and pasture-raised beef.',
    dek:'Great chili doesn’t come from a seasoning packet — it comes from real dried chiles, toasted and blended into the pot. That one step is the whole difference between flat and deep. Here’s how, and where to buy every part.',
    card:'Built on real toasted dried chiles, heirloom beans, and pasture-raised beef — not a seasoning packet. Low and slow.',
    ing:[
      {n:'Dried chiles', q:'Ancho and a little chipotle, toasted and blended into a paste — the real backbone. Powder can’t match it.', amt:'4–5 chiles', shelf:'dried-chiles'},
      {n:'Ground beef', q:'Pasture-raised, browned hard for a deep base. A chuck grind with some fat is ideal.', amt:'2 lb', shelf:'regenerative-meat'},
      {n:'Heirloom beans', q:'Pinto or black, cooked from dry for real texture (or added cooked). Rancho-Gordo-class beans are a different food.', amt:'1 lb dry', shelf:'heirloom-beans'},
      {n:'Crushed tomatoes', q:'The body of the sauce. A sweet, low-acid California crushed tomato.', amt:'1 can (28 oz)', shelf:'canned-tomatoes'},
      {n:'Onion, garlic &amp; spices', q:'Onion, garlic, cumin, oregano. Fresh aromatics local; spices from the shelf.', amt:'to taste', local:true},
    ],
    steps:[
      {b:'Make the chile paste', t:'Stem and seed the dried chiles, toast them on a dry pan until fragrant, soak in hot water, then blend to a smooth paste.'},
      {b:'Brown the beef', t:'Brown the beef hard in batches — don’t steam it — then soften the onion and garlic in the fat.'},
      {b:'Build the pot', t:'Add the chile paste, cumin, and oregano and cook a minute, then the crushed tomatoes and beans. Add water or broth to loosen.'},
      {b:'Simmer low', t:'Simmer gently, partly covered, at least 1–2 hours, stirring now and then, until deep and thick. Season with salt at the end. Better the next day.'},
    ],
    tools:['Dutch oven|enameled dutch oven','Blender|blender','Wooden spoon|wooden spoon'] },

  { slug:'pancakes', no:'16', title:'Pancakes, and Where to Source It', cuisine:'American', category:'Breakfast',
    kw:'pancakes, buttermilk pancakes, fluffy pancakes', iso:['PT10M','PT15M','PT25M'], prep:'10 min', cook:'15 min', makes:'12 pancakes',
    desc:'Tall, fluffy pancakes from scratch — good flour, real eggs and milk, and real maple syrup.',
    dek:'Scratch pancakes take the same ten minutes as the box and taste like a different food — if you don’t overmix the batter and you use real maple syrup, not the corn-syrup imposter. Here’s how, and where to buy the parts.',
    card:'Tall and fluffy from scratch — good flour, real eggs and milk, and real maple syrup, not the corn-syrup imposter.',
    ing:[
      {n:'Flour', q:'A good all-purpose or a soft pastry flour for tenderness. Fresh-milled flour actually has flavor.', amt:'2 cups', shelf:'baking-flour'},
      {n:'Eggs', q:'Two, for lift and richness. Deep-gold pasture yolks give a golden batter.', amt:'2', shelf:'eggs'},
      {n:'Milk', q:'Whole milk, or buttermilk for tang and extra fluff. Cream-line milk is a treat here.', amt:'1¾ cups', shelf:'milk'},
      {n:'Butter', q:'Melted into the batter and cooked on the griddle. Good butter browns the edges.', amt:'3 tbsp', shelf:'butter'},
      {n:'Maple syrup', q:'Real Grade A, full stop — the whole reason to make pancakes. Never pancake syrup.', amt:'to serve', shelf:'maple-syrup'},
    ],
    steps:[
      {b:'Mix dry, then wet', t:'Whisk flour, a spoon of sugar, baking powder, and salt. Separately whisk eggs, milk, and melted butter.'},
      {b:'Barely combine', t:'Fold the wet into the dry until <em>just</em> combined — lumps are good. Overmixing builds gluten and makes them rubbery. Rest the batter 5 minutes.'},
      {b:'Cook on medium', t:'Ladle onto a buttered griddle over medium heat. Flip when the tops bubble and the edges look set — only once.'},
      {b:'Serve hot', t:'Stack them and drown them in warm real maple syrup and a knob of butter.'},
    ],
    tools:['Griddle|flat top griddle pan','Ladle|batter ladle','Whisk|balloon whisk'] },

  { slug:'marinara', no:'17', title:'Marinara Sauce, and Where to Source It', cuisine:'Italian', category:'Sauce',
    kw:'marinara, tomato sauce, pasta sauce from scratch', iso:['PT5M','PT35M','PT40M'], prep:'5 min', cook:'35 min', makes:'enough for 1 lb pasta',
    desc:'A real marinara from a can and a clove — great tomatoes, olive oil, garlic, simmered simple.',
    dek:'Marinara is proof that two ingredients bought well beat a jar of anything: a great canned tomato and good olive oil. No sugar, no twenty ingredients — just a clove of garlic and a little patience. Here’s how, and where to buy the two that matter.',
    card:'Two ingredients bought well beat any jar — a great canned tomato and good olive oil, a clove of garlic, patience.',
    ing:[
      {n:'Whole peeled tomatoes', q:'The entire dish. A sweet, low-acid San Marzano or California tomato, crushed by hand.', amt:'1 can (28 oz)', shelf:'canned-tomatoes'},
      {n:'Extra-virgin olive oil', q:'A generous glug to start and a raw thread to finish. It carries the whole flavor.', amt:'¼ cup', shelf:'olive-oil'},
      {n:'Garlic &amp; basil', q:'A clove or two, and a few basil leaves at the end. Fresh — buy local.', amt:'to taste', local:true},
    ],
    steps:[
      {b:'Warm the garlic', t:'Gently warm the olive oil with smashed garlic until fragrant and pale gold — not browned.'},
      {b:'Add the tomatoes', t:'Crush the tomatoes in by hand, add a pinch of salt, and let it come to a low simmer.'},
      {b:'Simmer down', t:'Simmer gently 30–40 minutes, stirring now and then, until it thickens and the oil turns orange at the edges — the sign it’s done.'},
      {b:'Finish', t:'Tear in basil, add a raw thread of olive oil, and toss with pasta, saving a little pasta water to loosen.'},
    ],
    tools:['Saucepan|heavy saucepan','Wooden spoon|wooden spoon','Can strainer|colander'] },

  { slug:'miso-soup', no:'18', title:'Miso Soup, and Where to Source It', cuisine:'Japanese', category:'Soup',
    kw:'miso soup, miso, tofu miso soup', iso:['PT5M','PT10M','PT15M'], prep:'5 min', cook:'10 min', makes:'4 bowls',
    desc:'A clean bowl of miso soup — real fermented miso and fresh tofu, never boiled.',
    dek:'Miso soup is a five-minute bowl with one rule you can’t break: never boil the miso, or you kill the living cultures and the flavor goes flat. Whisk it in off the boil. Here’s how, and where to buy real miso and tofu.',
    card:'Real fermented miso whisked into dashi with fresh tofu — five minutes, one rule: never boil the miso.',
    ing:[
      {n:'Miso', q:'Real unpasteurized fermented miso — white for mellow, red for deeper. Whisk it in off the heat to keep it alive.', amt:'3–4 tbsp', shelf:'miso'},
      {n:'Tofu', q:'Soft or silken, cut into small cubes and warmed through gently. Fresh craft tofu is worlds better.', amt:'½ block', shelf:'tofu-tempeh'},
      {n:'Dashi, scallion &amp; wakame', q:'A simple dashi base (kombu, or instant), scallion, and a little seaweed. Fresh/pantry.', amt:'4 cups dashi', local:true},
    ],
    steps:[
      {b:'Warm the dashi', t:'Bring the dashi to a bare simmer — never a rolling boil once the miso goes in.'},
      {b:'Add the tofu', t:'Slip in the cubed tofu and any wakame and warm through gently for a couple of minutes.'},
      {b:'Whisk in the miso', t:'Take the pot off the heat. Loosen the miso with a ladle of the warm broth in a bowl, then stir it back in — off the boil, always.'},
      {b:'Serve', t:'Scatter with sliced scallion and serve immediately, before it sits and separates.'},
    ],
    tools:['Small whisk|small whisk','Fine strainer|fine mesh strainer','Ladle|soup ladle'] },

  { slug:'french-toast', no:'19', title:'French Toast, and Where to Source It', cuisine:'French', category:'Breakfast',
    kw:'french toast, pain perdu', iso:['PT10M','PT12M','PT22M'], prep:'10 min', cook:'12 min', makes:'4 servings',
    desc:'Custardy French toast from real bread, eggs, and milk, finished with real maple syrup.',
    dek:'French toast is a rescue mission for slightly stale bread — <em>pain perdu</em>, "lost bread." The keys are a real, sturdy loaf and a proper soak so the custard reaches the middle. Here’s how, and where to buy the parts.',
    card:'Custardy “lost bread” — sturdy real bread soaked in an egg-and-milk custard, griddled, drowned in real maple.',
    ing:[
      {n:'Bread', q:'A sturdy loaf, slightly stale — brioche, challah, or a good country bread. Thin fresh sandwich bread turns to mush.', amt:'8 thick slices', shelf:'bread'},
      {n:'Eggs', q:'The custard’s backbone — they set the soaked bread into something rich, not soggy.', amt:'4', shelf:'eggs'},
      {n:'Milk', q:'Whole milk or a splash of cream for a richer custard. Warm it slightly to help it soak in.', amt:'1 cup', shelf:'milk'},
      {n:'Butter &amp; maple syrup', q:'Butter for the griddle and browning; real Grade A maple to finish. Never the corn-syrup stuff.', amt:'to serve', shelf:'maple-syrup'},
    ],
    steps:[
      {b:'Make the custard', t:'Whisk eggs, milk, a little sugar, vanilla, and a pinch of salt in a wide dish.'},
      {b:'Soak properly', t:'Soak each slice a good 20–30 seconds a side — long enough for the custard to reach the center, not just wet the surface.'},
      {b:'Griddle in butter', t:'Cook on a buttered griddle over medium heat until deep golden and set, flipping once. Low heat leaves the middle raw; high heat burns it.'},
      {b:'Serve hot', t:'Straight to the plate with butter and warm real maple syrup.'},
    ],
    tools:['Griddle|flat griddle pan','Wide dish|shallow baking dish','Fish spatula|fish spatula'] },
];

// ---- RENDER ----
const esc = s => String(s);
const toolLink = t => { const [label, terms] = t.split('|'); return `<a href="https://www.amazon.com/s?k=${encodeURIComponent(terms)}&amp;tag=5best2buy-20" rel="sponsored nofollow" target="_blank">${label}</a>`; };

function recipeHTML(r){
  const url = `https://www.5best2buy.com/recipes/${r.slug}/`;
  const graph = [
    {"@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"5best2buy.com","item":"https://www.5best2buy.com/"},
      {"@type":"ListItem","position":2,"name":"Recipes","item":"https://www.5best2buy.com/recipes/"},
      {"@type":"ListItem","position":3,"name":r.title.split(',')[0],"item":url}]},
    {"@type":"Recipe","name":r.title.split(',')[0],"description":r.desc,"image":[`https://www.5best2buy.com/recipes/${r.slug}/og.jpg`],
      "author":{"@type":"Person","name":"Vince Gonzalez","url":"https://www.5best2buy.com/about/"},
      "publisher":{"@type":"Organization","name":"5best2buy.com","logo":{"@type":"ImageObject","url":"https://www.5best2buy.com/logo.png"}},
      "datePublished":DATE,"dateModified":DATE,"recipeCuisine":r.cuisine,"recipeCategory":r.category,"keywords":r.kw,
      "prepTime":r.iso[0],"cookTime":r.iso[1],"totalTime":r.iso[2],"recipeYield":r.makes,
      "recipeIngredient":r.ing.map(i=> i.amt && i.amt!=='to taste' ? `${i.n.replace(/&amp;/g,'and')} (${i.amt})` : i.n.replace(/&amp;/g,'and')),
      "recipeInstructions":r.steps.map(s=>({"@type":"HowToStep","name":s.b,"text":s.t.replace(/<[^>]+>/g,'')}))}
  ];
  const M = deriveMethods(r);
  const nm = r.title.split(',')[0];
  const faqs = [];
  if(M.af) faqs.push({q:`Can you make ${nm} in an air fryer?`, label:AFLABEL[M.af.v], a:M.af.a});
  if(M.freeze) faqs.push({q:`Can you freeze ${nm}?`, label:M.freeze.v, a:M.freeze.a});
  if(M.makeahead) faqs.push({q:`Can you make ${nm} ahead of time?`, label:M.makeahead.v, a:M.makeahead.a});
  // ---- dietary / allergen FAQ + panel (safety-critical: claim positives only when provable) ----
  const D = deriveDiet(r);
  const gfSwap = D.swaps.find(s=>s.d==='gluten-free'), vgSwap = D.swaps.find(s=>s.d==='vegan');
  const animalBlock = [D.flags.dairy&&'dairy', D.flags.egg&&'egg', D.flags.honey&&'honey'].filter(Boolean).join(' and ');
  const meatWord = D.flags.meat?'meat':(D.flags.fish||D.flags.shellfish)?'seafood':'an animal ingredient';
  faqs.push({q:`Is ${nm} gluten-free?`, label:D.gf?'Yes':'Not as written', a: D.gf
    ? `Yes — nothing in this recipe as written contains gluten. As always, glance at the labels on any packaged items (broth, sauces, chocolate), since brands vary.`
    : `Not as written — it contains gluten. ${gfSwap?gfSwap.t:'Swap in gluten-free versions of the wheat items to adapt it.'}`});
  faqs.push({q:`Is ${nm} vegan?`, label:D.vegan?'Yes':(D.veg?'Vegetarian, not vegan':'No'), a: D.vegan
    ? `Yes — no meat, seafood, dairy, egg, or honey in it as written.`
    : D.veg
    ? `It’s vegetarian but not vegan as written — it has ${animalBlock||'an animal ingredient'}. ${vgSwap?vgSwap.t:''}`.trim()
    : `No — it contains ${meatWord}, so it isn’t vegetarian or vegan.`});
  const suits = [];
  if(D.vegan) suits.push('Vegan'); else if(D.veg) suits.push('Vegetarian');
  if(D.gf) suits.push('Gluten-free');
  if(D.df && !D.vegan) suits.push('Dairy-free');
  const dietPanel = (suits.length || D.contains.length || D.swaps.length) ? `<div class="diet" style="margin:0 0 24px;">
    ${suits.length?`<div style="font-family:var(--fm);font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--meta);margin-bottom:9px;">Suits</div><div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:${(D.contains.length||D.swaps.length)?'12px':'0'};">${suits.map(s=>`<span style="font-family:var(--fm);font-size:15px;font-weight:600;color:#10203a;background:var(--green);border-radius:20px;padding:5px 14px;">${s}</span>`).join('')}</div>`:''}
    ${D.contains.length?`<div style="font-family:var(--fm);font-size:15px;color:var(--soft);margin-bottom:${D.swaps.length?'8px':'0'};"><b style="font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);">Contains</b> &nbsp;${D.contains.join(' &middot; ')}</div>`:''}
    ${D.swaps.map(s=>`<div style="font-family:var(--fm);font-size:12.5px;color:var(--meta);line-height:1.6;">${s.t}</div>`).join('')}
  </div>` : '';
  if(faqs.length) graph.push({"@type":"FAQPage","mainEntity":faqs.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});
  // ---- greedometer + difficulty + total time ----
  const G = deriveGreed(r), F = deriveFacets(r), C = deriveCost(r);
  // meta description — guaranteed length + keywords (Bing flagged short metas). ~150–300 chars.
  const metaDesc = (r.desc + ' A ' + r.cuisine + ' ' + (r.category||'recipe').toLowerCase() + ' recipe with the real method, ingredients first, and exactly where to source every ingredient — ad-free, no pop-ups.').replace(/\s+/g,' ').replace(/"/g,'').slice(0,300);
  const diffColor = F.d===1?'var(--green)':F.d===3?'var(--gold)':'var(--soft)';
  const greedBlock = `<div class="greed" style="margin:0 0 24px;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:12px 16px;">
    <div style="display:flex;align-items:center;gap:11px;flex-wrap:wrap;">
      <span style="font-family:var(--fd);font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);">Greedometer</span>
      <span style="letter-spacing:3px;font-size:15px;"><span style="color:var(--gold);">${'●'.repeat(G.score)}</span><span style="color:var(--line);">${'●'.repeat(5-G.score)}</span></span>
      <span style="font-family:var(--fd);font-size:18px;font-weight:700;color:var(--text);">${G.label}</span>
      <span style="margin-left:auto;font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);">Level <b style="color:${diffColor};font-family:var(--fd);font-size:14px;letter-spacing:.3px;">${F.label}</b></span>
    </div>
    <div style="font-family:var(--fm);font-size:12.5px;color:var(--meta);margin-top:5px;">${G.note}${F.extra?` &middot; <span style="color:var(--soft);">plan ahead — needs marinating, soaking, or rising time on top of the clock</span>`:''}</div>
  </div>`;
  // ---- scaling slider (1–8): base servings + yield noun from r.makes ----
  const baseServ = Math.max(1, parseInt((String(r.makes).match(/\d+/)||[4])[0],10)||4);
  let noun = /servings?|people/i.test(r.makes) ? 'servings' : ((String(r.makes).match(/\d+\s*([a-zA-Z][a-zA-Z \-]*)/)||[])[1]||'servings').trim();
  if(noun.length>18) noun='servings';
  const smax = Math.max(8, baseServ);
  const scalerBlock = `<div class="scaler" style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:0 0 20px;font-family:var(--fm);">
    <span style="font-size:12.5px;letter-spacing:1px;text-transform:uppercase;color:var(--meta);">Cook for</span>
    <input type="range" min="1" max="${smax}" value="${baseServ}" step="1" aria-label="number of ${noun}" style="accent-color:var(--gold);flex:1;min-width:120px;max-width:230px;">
    <b id="sv" style="color:var(--gold);font-family:var(--fd);font-size:22px;line-height:1;">${baseServ}</b>
    <span style="font-size:15px;color:var(--soft);">${noun}</span>
    <button type="button" id="sreset" style="font-family:var(--fm);font-size:15px;color:var(--meta);background:none;border:1px solid var(--line);border-radius:5px;padding:4px 9px;cursor:pointer;">reset</button>
  </div>`;
  const scalerScript = `<script>(function(){var base=${baseServ},sl=document.querySelector('.scaler input');if(!sl)return;var out=document.getElementById('sv'),rs=document.getElementById('sreset'),amts=[].slice.call(document.querySelectorAll('.amt[data-amt]'));function fmt(v){if(v<=0)return '0';if(v>=10)return String(Math.round(v));var e=Math.round(v*8),w=Math.floor(e/8),r=e%8,m=['','⅛','¼','⅜','½','⅝','¾','⅞'];if(r===0)return String(w);return (w>0?w:'')+m[r];}function parse(str){var u={'½':0.5,'⅓':0.3333,'⅔':0.6667,'¼':0.25,'¾':0.75,'⅛':0.125,'⅜':0.375,'⅝':0.625,'⅞':0.875},m;if(m=str.match(/^(\\d+)?\\s*([½⅓⅔¼¾⅛⅜⅝⅞])/))return{v:(m[1]?+m[1]:0)+u[m[2]],n:m[0].length};if(m=str.match(/^(\\d+)\\s+(\\d+)\\/(\\d+)/))return{v:+m[1]+(+m[2]/+m[3]),n:m[0].length};if(m=str.match(/^(\\d+)\\/(\\d+)/))return{v:+m[1]/+m[2],n:m[0].length};if(m=str.match(/^(\\d+(?:\\.\\d+)?)/))return{v:+m[1],n:m[0].length};return null;}function scale(s,f){if(/to taste|as needed|for |pinch|handful|drizzle|optional|garnish|to serve/i.test(s))return s;var p=parse(s);if(!p)return s;var head=fmt(p.v*f),tail=s.slice(p.n),rm=tail.match(/^\\s*[-–]\\s*(\\d+(?:\\.\\d+)?|[½⅓⅔¼¾⅛⅜⅝⅞])/);if(rm){var p2=parse(rm[1]);if(p2){head+='–'+fmt(p2.v*f);tail=tail.slice(rm[0].length);}}return head+tail;}function render(n){out.textContent=n;var f=n/base;amts.forEach(function(a){a.textContent=scale(a.getAttribute('data-amt'),f);});}sl.addEventListener('input',function(){render(+sl.value);});if(rs)rs.addEventListener('click',function(){sl.value=base;render(base);});})();</script>`;
  const ld = JSON.stringify({"@context":"https://schema.org","@graph":graph});
  // component recipes (sauces/dips/dressings/drinks) get the "recommended vs. to taste" treatment:
  // we publish OUR ratio, and mark the seasoning knobs "to taste" — a version, never THE version.
  const isComponent = /^(sauce|dip|dressing|drink|mocktail|cocktail|condiment)$/i.test(r.category||'');
  const ingBlocks = r.ing.map(i=>{
    let slug = (i.shelf && VALID.has(i.shelf)) ? i.shelf : null;   // valid explicit shelf
    if(!slug) slug = resolveShelf(i.n);                            // auto-relink locals + fix broken shelves
    const src = slug ? `<a class="on" href="/hunt/${slug}/">Source it &rarr;</a>` : '<span class="plain">Local / market</span>';
    const adjustable = /to taste|as needed|optional|to serve|to your (taste|liking)/i.test(String(i.amt||'')+' '+String(i.q||''));
    const pill = isComponent ? (adjustable ? '<span class="tt tt-taste">to taste</span>' : '<span class="tt tt-rec">recommended</span>') : '';
    return `  <div class="ing">
    <div><div class="n">${i.n}</div><div class="q">${i.q}</div><div class="amt" data-amt="${String(i.amt).replace(/"/g,'&quot;')}">${i.amt}${pill}</div></div>
    <div class="src">${src}</div>
  </div>`;
  }).join('\n');
  const ratioNote = isComponent ? `<div class="ratio"><b>Our ratio, your call.</b> The amounts below are a tested starting point &mdash; <b>a</b> version, not the one and only. Anything tagged <span class="tt tt-taste">to taste</span> is the knob you turn: start there, then make it yours.</div>` : '';
  // ---- top diet block: dietary fit lives up top with the at-a-glance facts (Suits / Contains / swaps) ----
  const topDiet = (suits.length || D.contains.length || D.swaps.length) ? `<div class="topdiet">
    ${suits.length?`<div class="badges">${suits.map(s=>`<span class="badge suit">${s}</span>`).join('')}</div>`:''}
    ${D.contains.length?`<div class="containsline"><b>Contains</b> &nbsp;${D.contains.join(' &middot; ')}</div>`:''}
    ${D.swaps.map(s=>`<div class="swapline">${s.t}</div>`).join('')}
  </div>` : '';
  // ---- Community Notes (anonymous comments; Supabase-backed, no accounts) ----
  const invite = isComponent
    ? `Made it, tweaked it, or recognize which restaurant this tastes like? Leave a note &mdash; first-name basis, no account.`
    : `Cooked it? Changed something that worked? Leave a note for the next person &mdash; first-name basis, no account.`;
  const commentsCard = `<section class="card" id="cbox" data-slug="${r.slug}">
    <div class="cardlabel">Community Notes</div>
    <p style="font-family:var(--fm);font-size:15px;color:var(--meta);margin:-4px 0 14px;">${invite}</p>
    <div id="clist" style="margin-bottom:16px;"><div class="cmuted">Loading notes&hellip;</div></div>
    <form id="cform" autocomplete="off">
      <input id="cname" maxlength="60" placeholder="Name (optional)" />
      <input id="cweb" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0;" />
      <textarea id="cbody" maxlength="1200" rows="3" placeholder="Add a note&hellip;"></textarea>
      <div style="display:flex;align-items:center;gap:12px;margin-top:2px;">
        <button type="submit" id="csend">Post note</button>
        <span id="cmsg" style="font-family:var(--fm);font-size:15px;color:var(--meta);"></span>
      </div>
      <p style="font-family:var(--fm);font-size:15px;color:var(--meta);margin-top:10px;line-height:1.5;">Notes are public and posted as written. Be kind, no links. Spam and abuse get removed.</p>
    </form>
  </section>`;
  const commentsScript = `<script>(function(){var box=document.getElementById('cbox');if(!box)return;var U='https://ihclxurachkewtgnrldc.supabase.co',K='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloY2x4dXJhY2hrZXd0Z25ybGRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MjQwNjEsImV4cCI6MjA5MDMwMDA2MX0.pRGhaAjtT1VpghQgoEEl7Yns7yZHMP2KL_UE9oMiigY';var slug=box.getAttribute('data-slug');var list=document.getElementById('clist'),form=document.getElementById('cform'),msg=document.getElementById('cmsg'),send=document.getElementById('csend');function esc(s){var d=document.createElement('div');d.textContent=s==null?'':String(s);return d.innerHTML;}function when(t){try{return new Date(t).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});}catch(e){return '';}}function render(rows){if(!rows||!rows.length){list.innerHTML='<div class="cmuted">No notes yet. Been here, tried it, or recognize the copycat? Leave the first one.</div>';return;}list.innerHTML=rows.map(function(c){return '<div class="citem"><div class="cmeta"><b>'+esc(c.name||'Anonymous')+'</b> &middot; '+when(c.created_at)+'</div><div class="ctext">'+esc(c.body)+'</div></div>';}).join('');}function load(){fetch(U+'/rest/v1/wth_comments?recipe_slug=eq.'+encodeURIComponent(slug)+'&select=name,body,created_at&order=created_at.desc&limit=200',{headers:{apikey:K,Authorization:'Bearer '+K}}).then(function(r){return r.json();}).then(render).catch(function(){list.innerHTML='<div class="cmuted">Couldn\\u2019t load notes right now.</div>';});}form.addEventListener('submit',function(e){e.preventDefault();var name=(document.getElementById('cname').value||'').trim().slice(0,60);var body=(document.getElementById('cbody').value||'').trim();var hp=document.getElementById('cweb').value||'';if(body.length<2){msg.textContent='Add a little more.';return;}if(/https?:\\/\\/|www\\./i.test(body)){msg.textContent='Links aren\\u2019t allowed here.';return;}var last=+(localStorage.getItem('wthc')||0);if(Date.now()-last<30000){msg.textContent='Easy \\u2014 give it a few seconds between notes.';return;}send.disabled=true;msg.textContent='Posting\\u2026';fetch(U+'/rest/v1/wth_comments',{method:'POST',headers:{apikey:K,Authorization:'Bearer '+K,'Content-Type':'application/json',Prefer:'return=representation'},body:JSON.stringify({recipe_slug:slug,name:name||'Anonymous',body:body,hp:hp})}).then(function(r){if(!r.ok)throw 0;return r.json();}).then(function(){document.getElementById('cbody').value='';msg.textContent='Posted \\u2014 thanks!';localStorage.setItem('wthc',String(Date.now()));load();}).catch(function(){msg.textContent='Couldn\\u2019t post that \\u2014 try again, and no links.';}).then(function(){send.disabled=false;});});load();})();</script>`;
  const stepBlocks = r.steps.map(s=>`    <li><b>${s.b}</b>${s.t}</li>`).join('\n');
  const toolBlocks = r.tools.map(toolLink).join(' &middot;\n    ');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="google-adsense-account" content="ca-pub-8826956454892311" />
<link rel="icon" type="image/png" href="/logo.png" />
<link rel="apple-touch-icon" href="/logo.png" />
<title>${r.title.split(',')[0]} — Ad-Free Recipe, Ingredients First | 5best2buy</title>
<meta name="description" content="${metaDesc}" />
<link rel="canonical" href="${url}" />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GG5QF6LH0D"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GG5QF6LH0D');</script>
<style>
  :root{--navy:#0d1421;--surface:#121e30;--card:#16223a;--blue:#5fb0ef;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fd:'Rajdhani','Arial Narrow',sans-serif;--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--navy);color:var(--text);font-family:Georgia,'Times New Roman',serif;line-height:1.72;padding:18px 18px 60px;max-width:740px;margin:0 auto;font-size:17px;}
  a{color:var(--blue);}
  .eyebrow{font-family:var(--fm);font-size:12.5px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin:22px 0 8px;}
  h1{font-family:var(--fd);font-size:clamp(32px,6.5vw,52px);font-weight:700;letter-spacing:.5px;line-height:1.02;color:var(--text);margin-bottom:12px;}
  .dek{color:var(--soft);max-width:62ch;margin-bottom:14px;}
  .ratioline{background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:10px;padding:12px 15px;margin:0 0 14px;max-width:62ch;color:var(--text);font-size:16px;line-height:1.45;}
  .ratioline b{font-family:var(--fd);font-size:12.5px;letter-spacing:.6px;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:3px;}
  .promise{font-family:var(--fm);font-size:15px;letter-spacing:.3px;color:var(--green);margin-bottom:18px;}
  .dateline{font-family:var(--fm);font-size:15px;letter-spacing:.5px;color:var(--meta);margin-bottom:14px;}
  .facts{font-family:var(--fm);font-size:15px;letter-spacing:.3px;color:var(--soft);display:flex;flex-wrap:wrap;gap:22px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:12px 0;margin:0 0 26px;}
  .facts b{color:var(--gold);text-transform:uppercase;font-size:12px;letter-spacing:1px;display:block;margin-bottom:2px;}
  .sechead{font-family:var(--fd);font-size:13px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;border-top:1px solid var(--line);padding-top:22px;margin:34px 0 6px;}
  .sectitle{font-family:var(--fd);font-size:30px;font-weight:700;letter-spacing:.4px;line-height:1.06;color:var(--text);margin-bottom:14px;}
  .ing{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;border-bottom:1px solid var(--line);padding:14px 0;}
  .ing .n{font-family:var(--fd);font-size:20px;font-weight:700;letter-spacing:.3px;color:var(--text);}
  .ing .q{font-family:var(--fm);font-size:15px;color:var(--soft);margin-top:2px;max-width:46ch;line-height:1.55;}
  .ing .amt{font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;color:var(--meta);text-transform:uppercase;margin-top:5px;}
  .hero{margin:12px 0 20px;border-radius:14px;overflow:hidden;border:1px solid var(--line);line-height:0;}
  .hero svg{display:block;width:100%;height:auto;}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 18px;margin:0 0 14px;}
  .cardlabel{font-family:var(--fd);font-size:12.5px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:13px;}
  .rrow{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
  .rk{font-family:var(--fm);font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--meta);}
  .rv{font-family:var(--fd);font-size:18px;font-weight:700;color:var(--text);}
  .rv2{font-family:var(--fd);font-size:15px;font-weight:700;}
  .pips{letter-spacing:3px;font-size:15px;}
  .rmeta{font-family:var(--fm);font-size:15px;color:var(--meta);line-height:1.55;margin-top:6px;}
  .rline{border-top:1px solid var(--line);margin:13px 0;}
  .badges{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;}
  .badge{font-family:var(--fm);font-size:15px;font-weight:600;color:var(--text);background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:5px 14px;}
  .badge.suit{color:#10203a;background:var(--green);border-color:var(--green);}
  .topdiet{margin:14px 0 26px;}
  .topdiet .badges{margin-top:0;}
  .containsline{font-family:var(--fm);font-size:15px;color:var(--soft);margin-top:11px;}
  .containsline b{font-size:12px;letter-spacing:1px;text-transform:uppercase;color:var(--gold);}
  .swapline{font-family:var(--fm);font-size:12px;color:var(--meta);line-height:1.55;margin-top:6px;}
  .facts .cost{cursor:help;}
  .cmuted{font-family:var(--fm);font-size:15px;color:var(--meta);}
  .citem{border-top:1px solid var(--line);padding:12px 0;}
  .citem:first-child{border-top:none;padding-top:0;}
  .cmeta{font-family:var(--fm);font-size:15px;letter-spacing:.3px;color:var(--meta);}
  .cmeta b{color:var(--soft);}
  .ctext{font-family:var(--fm);font-size:15px;color:var(--text);line-height:1.55;margin-top:3px;white-space:pre-wrap;word-break:break-word;}
  #cname,#cbody{width:100%;font-family:var(--fm);font-size:15px;color:var(--text);background:var(--navy);border:1px solid var(--line);border-radius:8px;padding:10px 12px;margin-bottom:8px;outline:none;}
  #cname:focus,#cbody:focus{border-color:var(--gold);}
  #csend{font-family:var(--fd);font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#10203a;background:var(--gold);border:none;border-radius:6px;padding:9px 18px;cursor:pointer;}
  #csend:disabled{opacity:.55;cursor:default;}
  .tt{display:inline-block;margin-left:8px;font-size:12px;letter-spacing:.8px;text-transform:uppercase;border-radius:20px;padding:2px 8px;vertical-align:middle;}
  .tt-taste{color:#10203a;background:var(--gold);font-weight:700;}
  .tt-rec{color:var(--meta);background:var(--surface);border:1px solid var(--line);}
  .ratio{font-family:var(--fm);font-size:15px;line-height:1.6;color:var(--soft);background:linear-gradient(180deg,rgba(240,197,96,.07),rgba(240,197,96,0));border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:10px;padding:12px 15px;margin:0 0 18px;}
  .ratio b{color:var(--gold);}
  .src{flex:0 0 auto;align-self:center;}
  .src a{display:inline-block;font-family:var(--fd);font-size:12.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;text-decoration:none;white-space:nowrap;padding:8px 14px;border-radius:5px;}
  .src a.on{color:#10203a;background:var(--gold);}
  .src a.on:hover{background:#ffd877;}
  .src .plain{font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;color:var(--meta);text-transform:uppercase;white-space:nowrap;}
  ol.method{list-style:none;counter-reset:step;margin:8px 0 0;}
  ol.method li{counter-increment:step;position:relative;padding:0 0 18px 46px;color:var(--text);}
  ol.method li::before{content:counter(step);position:absolute;left:0;top:-2px;width:30px;height:30px;border-radius:50%;background:var(--gold);color:#10203a;font-family:var(--fd);font-weight:700;font-size:16px;display:flex;align-items:center;justify-content:center;}
  ol.method li b{color:var(--gold);font-family:var(--fm);font-size:12px;letter-spacing:.5px;text-transform:uppercase;display:block;margin-bottom:1px;}
  .tools{font-family:var(--fm);font-size:14.5px;line-height:2.05;color:var(--soft);}
  .tools a{color:var(--blue);text-decoration:none;border-bottom:1px solid rgba(95,176,239,.3);}
  .tools a:hover{color:var(--gold);border-color:var(--gold);}
  .xlink{background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:10px;padding:16px 18px;margin:30px 0 0;font-family:var(--fm);font-size:15px;line-height:1.7;color:var(--soft);}
  .xlink b{color:var(--text);font-size:15px;}
  .xlink a{color:var(--gold);font-weight:600;text-decoration:none;}
  .disclosure{font-family:var(--fm);font-size:15px;color:var(--meta);border-top:1px solid var(--line);padding-top:18px;margin-top:32px;line-height:1.7;}
</style>
<meta property="og:type" content="article" />
<meta property="og:site_name" content="5best2buy.com" />
<meta property="og:title" content="${r.title.split(',')[0]} — ad-free recipe, ingredients first" />
<meta property="og:description" content="${metaDesc}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="https://www.5best2buy.com/recipes/${r.slug}/og.jpg" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${r.title.split(',')[0]} — ad-free recipe" />
<meta name="twitter:description" content="${metaDesc}" />
<meta name="twitter:image" content="https://www.5best2buy.com/recipes/${r.slug}/og.jpg" />
<script type="application/ld+json">${ld}</script>
</head>
<body>
  <nav style="font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:#9aabc4;" aria-label="Breadcrumb"><a href="/" style="color:#9aabc4;text-decoration:none;">5best2buy.com</a> &rsaquo; <a href="/recipes/" style="color:#9aabc4;text-decoration:none;">Recipes</a> &rsaquo; ${r.title.split(',')[0]}</nav>
  <div class="eyebrow">The Recipe &middot; No.${r.no} &middot; ${r.title.split(',')[0]}</div>
  <h1>${r.title}</h1>
  <div class="hero">${groupPhoto(matchCast(r), r.title.split(',')[0], r.cuisine)}</div>
  <p class="dek">${r.dek}</p>
  ${ratioBlock(r)}
  <p class="dateline">By <a href="/about/" style="color:var(--soft);">Vince Gonzalez</a> &middot; Published July 2026 &middot; Sourcing verified 5 Jul 2026</p>
  <div class="facts">
    <div><b>Prep</b>${r.prep}</div>
    <div><b>Cook</b>${r.cook}</div>
    <div><b>Makes</b>${r.makes}</div>
    <div><b>Cuisine</b>${r.cuisine}</div>
    <div><b>Cost</b><span class="cost" title="${C.note}" style="color:var(--gold);">${C.label}</span></div>
  </div>
  ${topDiet}

  <section class="card">
    <div class="cardlabel">The Ingredients &mdash; and where to get them</div>
    ${scalerBlock}
    ${ratioNote}
${ingBlocks}
  </section>

  <section class="card">
    <div class="cardlabel">The Rundown</div>
    <div class="rrow">
      <span class="rk">Greedometer</span>
      <span class="pips"><span style="color:var(--gold);">${'●'.repeat(G.score)}</span><span style="color:var(--line);">${'●'.repeat(5-G.score)}</span></span>
      <span class="rv">${G.label}</span>
    </div>
    <div class="rmeta">${G.note}${F.extra?` &middot; <span style="color:var(--soft);">plan ahead &mdash; needs marinating, soaking, or resting time</span>`:''}</div>
    <div class="rline"></div>
    <div class="rrow">
      <span class="rk">Effort</span><span class="rv2" style="color:${diffColor};">${F.label}</span>
    </div>
    <div class="rline"></div>
    <div class="rk">Cook it with</div>
    <div class="badges">${M.tags.map(t=>`<span class="badge">${t}</span>`).join('')}</div>
  </section>

  <section class="card">
    <div class="cardlabel">The Method</div>
    <ol class="method">
${stepBlocks}
    </ol>
  </section>

  <section class="card">
    <div class="cardlabel">The Toolkit</div>
    <p class="tools" style="margin:0;">
    ${toolBlocks}
    </p>
  </section>

  ${faqs.length?`<section class="card">
    <div class="cardlabel">Straight Answers</div>
${faqs.map(f=>`    <details style="border-top:1px solid var(--line);padding:13px 0;"><summary style="font-family:var(--fd);font-size:19px;font-weight:700;letter-spacing:.2px;color:var(--text);cursor:pointer;list-style:none;">${f.q} <span style="font-size:15px;font-family:var(--fm);font-weight:600;color:${/^Yes/.test(f.label)?'var(--green)':/Best fresh|Not ideal|Not really|Not needed|Partly|Prep ahead|Sometimes/.test(f.label)?'var(--meta)':'var(--gold)'};">&mdash; ${f.label}</span></summary><p style="font-family:var(--fm);font-size:15px;color:var(--soft);margin:9px 0 2px;line-height:1.65;">${f.a}</p></details>`).join('\n')}
  </section>`:''}

  ${commentsCard}

  ${(()=>{const arr=BYCUISINE[r.cuisine]||[];const i=arr.findIndex(s=>s.slug===r.slug);const rel=[];for(let k=1;k<=6&&k<arr.length;k++)rel.push(arr[(i+k)%arr.length]);
    return rel.length?`<section class="card"><div class="cardlabel">More ${r.cuisine} recipes</div><div style="display:flex;flex-wrap:wrap;gap:8px;">${rel.map(s=>`<a href="/recipes/${s.slug}/" style="font-family:var(--fm);font-size:15px;font-weight:600;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:6px 13px;text-decoration:none;">${s.title}</a>`).join('')}</div><div style="font-family:var(--fm);font-size:15px;margin-top:12px;"><a href="/cuisine/${cslug(r.cuisine)}/" style="color:var(--gold);text-decoration:none;font-weight:600;">All ${r.cuisine} recipes &rarr;</a> &nbsp;&middot;&nbsp; <a href="/recipes/" style="color:var(--gold);text-decoration:none;font-weight:600;">Browse all ${all.length} &rarr;</a></div></section>`
      :`<div class="xlink">Recipe No.${r.no} of the collection. <a href="/recipes/">Browse all the recipes &rarr;</a></div>`;})()}

  <p class="disclosure">
    Some ingredient and tool links are affiliate links &mdash; if you buy through one, 5best2buy may earn a small commission at no extra cost to you. It never costs the maker anything, and it never decides who we recommend. The list is the list.<br>
    &copy; 2026 5best2buy.com &middot; Recipe No.${r.no}
  </p>
  ${scalerScript}
  ${commentsScript}
</body>
</html>`;
}

// ---- LOAD BATCH FILES (parallel-authored recipe data) ----
const batchDir = 'C:/tmp/recipe-batches';
let all = simpleRecipes.slice();
if(fs.existsSync(batchDir)){
  const batchFiles = fs.readdirSync(batchDir).filter(f=>f.endsWith('.js')).sort((a,b)=>(parseInt((a.match(/\d+/)||[0])[0])||0)-(parseInt((b.match(/\d+/)||[0])[0])||0));
  for(const f of batchFiles){
    try{ const arr = require(path.join(batchDir,f)); if(Array.isArray(arr)) all = all.concat(arr); else console.log('SKIP (not array)',f); }
    catch(e){ console.log('SKIP (parse error)',f,'-',e.message.slice(0,90)); }
  }
}
// dedupe by slug (first wins), drop malformed
all = all.filter(r=> r && r.slug && r.title && Array.isArray(r.ing) && Array.isArray(r.steps));
const seen = new Set(); all = all.filter(r=>{ if(seen.has(r.slug))return false; seen.add(r.slug); return true; });
// auto-number sequentially from 12
all.forEach((r,i)=>{ if(!r.no) r.no = String(12+i); });   // flagships carry their own No.01–11
all.forEach(r=>{ (BYCUISINE[r.cuisine]=BYCUISINE[r.cuisine]||[]).push({slug:r.slug,title:r.title.split(',')[0]}); });

// ---- WRITE PAGES ----
let written = 0;
for(const r of all){
  const dir = path.join(ROOT,'recipes',r.slug);
  fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,'index.html'), recipeHTML(r));
  written++;
}

// ---- (hub is now owned by generate-recipe-index.js — the searchable browse) ----

// ---- WRITE SLUG FILE for sitemap (read by generate-aisles.js) ----
fs.writeFileSync(path.join(ROOT,'data-recipe-slugs.json'), JSON.stringify(all.map(r=>r.slug)));
// method map for the appliance landing pages (/recipes/air-fryer/ etc.)
fs.writeFileSync(path.join(ROOT,'data-methods.json'), JSON.stringify(all.map(r=>{const M=deriveMethods(r);return {slug:r.slug, title:r.title.split(',')[0], cuisine:r.cuisine, category:r.category, af:M.af?M.af.v:null, tags:M.tags};})));
fs.writeFileSync(path.join(ROOT,'data-diet.json'), JSON.stringify(all.map(r=>{const D=deriveDiet(r);return {slug:r.slug, contains:D.contains, veg:D.veg, vegan:D.vegan, gf:D.gf, df:D.df, swaps:D.swaps.map(s=>s.d)};})));
fs.writeFileSync(path.join(ROOT,'data-facets.json'), JSON.stringify(all.map(r=>{const F=deriveFacets(r),G=deriveGreed(r),D=deriveDiet(r);return {s:r.slug, t:F.timeMin, d:F.d, x:F.extra?1:0, g:G.score, vg:D.vegan?1:(D.veg?2:0), gf:D.gf?1:0};})));
fs.writeFileSync(path.join(ROOT,'data-ingredients.json'), JSON.stringify(all.map(r=>{const F=deriveFacets(r);return {s:r.slug, n:r.title.split(',')[0], g:r.category, c:coreIngredients(r), t:F.timeMin, d:F.d};})));
console.log('simple recipes written:', written, '(seed', simpleRecipes.length, '+ batches', written-simpleRecipes.length + ')');

// Exported for the flagship injector (generate-flagship-facets.js). Requiring this file runs the
// build above as a harmless side effect, then hands over the pure derive functions (single source of truth).
module.exports = { deriveMethods, AFLABEL, deriveDiet, deriveGreed, deriveFacets };

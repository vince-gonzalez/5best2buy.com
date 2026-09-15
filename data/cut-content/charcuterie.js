// charcuterie.js — the cured and preserved shelves, which had eleven makers
// and no page between them.
//
// These are not cuts in the butchery sense but they map onto the same schema
// honestly, because every one of them starts as a specific piece of a specific
// animal: prosciutto is the hind leg, coppa the neck, bacon the belly, nduja
// ground shoulder and fat. `anatomy` says which piece and how it is made,
// `science` covers the cure chemistry rather than muscle behaviour, and `temps`
// covers serving and storage rather than doneness.
//
// The recurring theme is water activity. Nearly every preservation method here
// works by removing water or binding it up with salt so bacteria cannot use it,
// and the 30-40% weight loss figure that keeps appearing is not a texture
// preference — it is the measurable point at which a dry-cured product is safe.
module.exports = [

{
  slug: "bacon",
  name: "Bacon",
  animal: "pork",
  shelf: "bacon",
  aka: ["streaky bacon", "back bacon", "rashers", "slab bacon", "lardons"],
  match: ["bacon", "lardons", "streaky bacon"],
  dek: "Cured pork belly, usually smoked, and the difference between good and bad is almost entirely whether water was pumped into it. Supermarket bacon that shrinks to half its size and floods the pan was sold to you as brine.",
  anatomy: "American bacon is the belly — the same slab as pork belly, cured and smoked and sliced across into rashers, which is why it has alternating stripes of fat and muscle. British and Irish back bacon is cut from the loin with a tail of belly attached, so it's much leaner with a round eye of meat. Canadian bacon is loin only, effectively a lean ham. Slab bacon is uncut belly, which lets you cut lardons at whatever thickness you want and is generally better value. Pancetta is the same belly cured without smoke.",
  science: "Curing is salt plus nitrite. The salt lowers water activity so bacteria can't multiply; sodium nitrite — pink curing salt, or celery powder in products labelled uncured, which is chemically the same thing — prevents Clostridium botulinum, fixes the pink colour and produces the flavour people recognise as cured. The industrial shortcut is pumping brine into the belly to add weight, sometimes 15% or more, which is why cheap bacon releases a flood of white liquid and shrinks dramatically: you're boiling out water you paid for. Dry-cured bacon, rubbed rather than injected, loses weight during curing rather than gaining it, and renders cleanly.",
  methods: [
    { m: "Cold pan, medium-low",
      why: "Starting cold lets the fat render out gradually before the meat browns, which gives evenly crisp bacon rather than curled strips with raw fat.",
      how: "Lay strips in an unheated pan, then turn the heat to medium-low. Eight to twelve minutes, turning occasionally, pouring off fat as it accumulates. Drain on a rack, not paper, so the underside stays crisp." },
    { m: "Oven on a rack",
      why: "The only sane method for more than four strips — no turning, no splatter, and uniform results.",
      how: "400°F on a wire rack over a foil-lined sheet, fifteen to twenty minutes. No flipping. The rack keeps it out of the rendered fat." },
    { m: "Cure your own",
      why: "It's one of the easiest cures to do at home and the result is dramatically better than injected supermarket bacon.",
      how: "Equilibrium cure a belly at 2% salt, 0.25% pink salt #1 and 1% sugar by weight, bagged and refrigerated seven days, turning daily. Rinse, dry overnight uncovered, then smoke at 200°F to 150°F internal, or roast at the same temperature." },
    { m: "Lardons from slab",
      why: "Cutting your own from a slab gives thick batons that render and crisp on the outside while staying meaty inside — impossible with thin rashers.",
      how: "Cut quarter-inch batons, render from cold in a dry pan eight to ten minutes until the fat is out and the edges are brown. Keep the fat." }
  ],
  avoid: {
    m: "Buying pumped bacon, and cooking it in a hot pan",
    why: "Two things produce the sad, shrunken, curled strips people accept as normal. Most supermarket bacon has been injected with brine — often 12-15% added water — so when it hits heat that water floods out, the pan drops below browning temperature, and the bacon simmers in a white liquid before it ever crisps, ending up half its original size. The tell is that white foam in the pan and a package that feels wet. Dry-cured bacon costs more per pound and gives more bacon. The second error is starting in a hot pan: bacon fat needs time to render out, and high heat browns the meat before the fat has gone, leaving strips that are simultaneously burnt and flabby. Cold pan, medium-low, patience."
  },
  buying: "Look for dry-cured or dry-rubbed on the label, and a package with no liquid pooling in it. Uncured on American labels is a legal term meaning the nitrite came from celery powder rather than a bottle — chemically identical, so it's not a meaningful health distinction. Thick-cut renders better and is harder to ruin. Slab bacon is usually cheaper per pound and lets you cut what you want. Ask about the wood if it's smoked; applewood and hickory are noticeably different. Good butcher bacon costs perhaps twice supermarket bacon and gives you roughly twice as much cooked weight, so the real difference is smaller than it looks.",
  temps: "Cook to your preference — chewy around 8 minutes, crisp around 12 in a pan or 18-20 in a 400°F oven. If curing your own, take it to 150°F internal. Store cured bacon refrigerated up to a week once opened, or freeze in portions.",
  faq: [
    { q: "Is uncured bacon actually nitrite-free?",
      a: "No. Uncured on a US label means no synthetic sodium nitrite was added, but the product is almost always cured with celery powder or juice, which is naturally high in nitrate that converts to nitrite. The chemistry in the finished bacon is the same, and celery-cured products sometimes contain more nitrite than conventionally cured ones. It's a labelling rule, not a compositional difference." },
    { q: "Why does mine shrink so much?",
      a: "Added water. Most supermarket bacon is injected with brine to increase weight, and that water boils out in the pan — which is also the white foam. A dry-cured bacon loses weight during curing rather than gaining it, so a pound of it yields substantially more cooked bacon than a pound of pumped bacon. Check the package for pooled liquid before buying." },
    { q: "What should I do with the fat?",
      a: "Keep it. Strained into a jar it lasts months in the fridge and is excellent for frying eggs, roasting potatoes, starting a pot of greens, or making cornbread. A pound of bacon renders a substantial amount and pouring it away is discarding the most useful by-product in the kitchen." }
  ]
},

{
  slug: "prosciutto",
  name: "Prosciutto",
  animal: "pork",
  shelf: "prosciutto-cured-ham",
  aka: ["prosciutto di Parma", "San Daniele", "jamón serrano", "dry-cured ham", "crudo"],
  match: ["prosciutto", "jamon", "serrano", "cured ham"],
  dek: "A whole hind leg packed in salt and hung for one to three years, and nothing else — no smoke, no nitrite in the traditional Parma method, no additives. The entire product is a leg, salt and time.",
  anatomy: "The same hind leg that raw is a fresh ham. It's trimmed to expose the muscle at the cut end, salted heavily, rested, washed, then hung in cellars where controlled airflow and humidity draw water out slowly over months to years. The exposed face is sealed with sugna, a paste of lard and rice flour, to slow drying so the outside doesn't case-harden before the inside is done. A finished Parma leg weighs about a third less than it started. Jamón ibérico is from a different breed — black Iberian pigs, often acorn-fed — with fat that melts at a lower temperature, which is why it's served at room temperature and why it tastes different rather than simply better.",
  science: "Preservation here is water activity, not chemistry. Salt penetrates slowly and binds water, and over months the leg loses roughly 30% of its weight to evaporation, dropping water activity below the level where bacteria can grow. Meanwhile enzymes in the muscle break proteins into free amino acids — glutamate above all — which is where the savoury depth comes from, and fats oxidise into aromatic compounds. That process cannot be hurried, which is why a two-year leg tastes different from a one-year leg and why nothing made in a fridge approximates it. Slicing thickness matters enormously: cut thick, the fat doesn't melt on the tongue and it eats as salty and chewy.",
  methods: [
    { m: "Serve raw, sliced paper-thin",
      why: "It's already finished. Thin slicing lets the fat melt at body temperature, which is where the flavour lives.",
      how: "Sliced so thin it's translucent, ideally to order. Let it sit at room temperature fifteen minutes before eating. With bread, melon, figs or nothing at all." },
    { m: "Wrap and roast briefly",
      why: "The fat bastes whatever it's wrapped around and the salt seasons it, but sustained heat makes it tough and overly salty.",
      how: "Wrapped around chicken, fish or asparagus and roasted at 400°F for the length of time the interior needs — twelve to twenty minutes. Not longer." },
    { m: "Crisp it",
      why: "Rendered flat it becomes a brittle salty sheet that works as a garnish where bacon would be too heavy.",
      how: "Single layer on parchment, 350°F for eight to ten minutes until it darkens and stiffens. It crisps further as it cools." },
    { m: "Use the bone and end",
      why: "The hock end and bone are too tough to slice but carry enormous flavour, and Italian cooks never discard them.",
      how: "The bone into a pot of beans, minestrone or stock, simmered an hour or more. The tough end cubed and rendered as a soffritto base." }
  ],
  avoid: {
    m: "Cooking it hard, and slicing it thick",
    why: "Prosciutto is finished — a two-year process is complete before you buy it — and prolonged heat undoes what that process built. The fat renders away, the muscle fibers tighten, and the salt that was balanced against a delicate texture becomes the only thing you taste, so a slice cooked for twenty minutes is tough and aggressively salty where the same slice raw was silky. Brief heat, wrapped around something else, is fine. The other error is thickness. Prosciutto is cut translucent for a reason: the fat has a low melting point and dissolves on the tongue at body temperature, which is where most of the flavour and all of the texture come from. Cut a quarter inch thick, the same ham is chewy and reads as nothing but salt."
  },
  buying: "Prosciutto di Parma and San Daniele are protected designations with a stamped crown or ham logo on the rind. Jamón serrano is the Spanish equivalent, generally cheaper and firmer; jamón ibérico is from black Iberian pigs and de bellota means acorn-finished, which is the top grade and priced accordingly. Buy it sliced to order if you possibly can — pre-packaged slices are usually cut thicker and have oxidised. It should smell nutty and sweet, not sharp or ammoniac, and the fat should be creamy white to faintly pink rather than yellow. Two ounces per person as an appetiser. Ask for the bone if you're near the end of a leg.",
  temps: "Serve at room temperature — fifteen to twenty minutes out of the fridge. Cold prosciutto tastes of much less because the fat hasn't softened. Whole legs keep at cool room temperature for months; sliced, use within a few days.",
  faq: [
    { q: "Prosciutto, serrano or ibérico?",
      a: "Prosciutto is Italian, generally from white pigs, cured twelve to thirty-six months, sweet and delicate. Serrano is Spanish, from white pigs, usually cured less time, firmer and saltier, and much cheaper. Ibérico is Spanish from black Iberian pigs, and the fat is genuinely different — higher in oleic acid, so it melts at a lower temperature and coats the mouth. Bellota grade is acorn-finished and is the most expensive cured meat in normal commerce." },
    { q: "Why is it safe to eat raw?",
      a: "Water activity. Over one to three years the leg loses about a third of its weight to evaporation while salt binds much of the remaining water, dropping the available moisture below what bacteria need to grow. It's the same principle as dried fruit. That's also why the process cannot be shortened — the safety and the flavour arrive together, slowly." },
    { q: "What do I do with the rind and bone?",
      a: "Both are valuable. The rind, cut into pieces, goes into beans and soups to add body and salt. The bone goes into stock or a pot of minestrone and will flavour a whole pot. Italian delis will often sell the bone cheaply when they finish a leg, and it's one of the best-value things in the shop." }
  ]
},

{
  slug: "country-ham",
  name: "Country Ham",
  animal: "pork",
  shelf: "country-ham",
  aka: ["Virginia ham", "Smithfield ham", "salt-cured ham", "American dry-cured ham"],
  match: ["country ham", "smithfield ham", "virginia ham"],
  dek: "The American dry-cured ham — salt-cured, smoked and aged for months, and dramatically saltier than prosciutto or a supermarket city ham. Most of it is meant to be soaked and cooked rather than sliced raw, and skipping that step is the classic mistake.",
  anatomy: "A hind leg, cured with salt and usually sugar and pepper, often smoked over hickory, then aged from three months to well over a year. The result is firm, deep red, and covered in mould that looks alarming and is normal and harmless — it's scrubbed off before use. Smithfield ham is a legally protected designation requiring aging in Smithfield, Virginia. Unlike prosciutto, the American tradition cures harder and faster with more salt and usually adds smoke, which produces a much more assertive product intended to be cooked and served in small quantities.",
  science: "The same water-activity principle as prosciutto, driven harder. Higher salt concentration and shorter aging give a product that's safe and shelf-stable but far saltier — often several times the sodium of a wet-cured city ham. Aging still develops free amino acids and the associated savoury depth, and hams aged over a year develop tyrosine crystals, the small white specks people mistake for salt or spoilage, which are actually a marker of long aging and good quality. The soaking step before cooking works by simple diffusion, pulling salt back out into the water, and it is why the same ham can be pleasant or inedible depending on preparation.",
  methods: [
    { m: "Soak, then simmer or bake whole",
      why: "The traditional preparation. Soaking removes enough salt to make it edible as a main dish rather than a condiment.",
      how: "Scrub the mould off, then soak twenty-four to seventy-two hours in cold water, changing it every eight hours. Then simmer at a bare bubble twenty minutes per pound, or bake covered at 325°F to 150°F internal. Glaze at the end if you like." },
    { m: "Fry as slices with red-eye gravy",
      why: "The Southern breakfast use — thin slices fried hard, then the pan deglazed with coffee, which cuts the salt.",
      how: "Quarter-inch slices, hot cast iron, two minutes a side until the edges curl and brown. Remove, then deglaze with strong black coffee and a little water, scraping. Pour over the ham and grits." },
    { m: "Shave raw, prosciutto-style",
      why: "Long-aged country hams from good producers are excellent sliced thin and uncooked, and are increasingly sold that way.",
      how: "Only with hams aged a year or more and sold explicitly for raw service. Sliced paper-thin, room temperature, with biscuits or fruit." },
    { m: "Use as seasoning",
      why: "Its salt and smoke make it a seasoning ingredient rather than a protein in most Southern cooking.",
      how: "Cubed into beans, greens, or a pot of peas. Add it early and taste before adding any salt at all — often none is needed." }
  ],
  avoid: {
    m: "Cooking it without soaking, and salting anything it goes into",
    why: "Country ham carries several times the salt of a supermarket city ham, because it was cured to be shelf-stable in a Virginia summer before refrigeration. Baked straight from the bag it's genuinely inedible for most people — not strongly seasoned, but harsh in a way that no glaze covers. The soak is not a refinement, it's part of the recipe: twenty-four to seventy-two hours in cold water changed regularly, which pulls salt back out by diffusion. The same misunderstanding wrecks anything it's cooked into. A pot of beans seasoned normally and then given a piece of country ham will be oversalted by the time it's done, and salt cannot be removed from a finished pot. Add the ham, cook it, then taste and season."
  },
  buying: "Whole hams are sold uncooked and unrefrigerated, often in a cloth bag, and keep for months in a cool dry place — the mould on the outside is expected. Centre slices are sold separately and are the practical purchase for cooking a few breakfasts. Aging time is the main quality variable; longer-aged hams are more complex and more expensive, and those aged over a year may show white tyrosine crystals, which are a good sign rather than a defect. Producers in Virginia, Kentucky and Tennessee are the traditional sources, and several now age hams specifically for raw service. Check whether the one you're buying is meant to be cooked or shaved.",
  temps: "If baking whole, 150-160°F internal after soaking. Slices fried two minutes a side. Uncut whole hams store at cool room temperature for months; once cut, refrigerate and use within a few weeks.",
  faq: [
    { q: "Country ham versus city ham?",
      a: "Completely different products. City ham — the pink spiral-cut thing at holidays — is wet-cured in brine, often injected, fully cooked, mild and moist. Country ham is dry salt-cured, aged for months, uncooked, firm and very salty. They are not substitutes in either direction: a recipe for one will fail badly with the other, most obviously on salt." },
    { q: "Is the mould on the outside safe?",
      a: "Yes, and it's expected on a properly aged ham — the same kind of surface mould that grows on aged cheese and dry salami, and it plays a part in the aging. Scrub it off under cold water with a stiff brush before cooking. What's not normal is a sour or ammoniac smell, or slimy black or fuzzy green patches, which indicate the ham was stored too warm or too damp." },
    { q: "What are the white crystals?",
      a: "Tyrosine — an amino acid released as proteins break down during long aging, which crystallises out. They're the same crystals found in aged Parmesan and long-cured prosciutto, and they're a marker of extended aging rather than a defect. People mistake them for salt or mould regularly." }
  ]
},

{
  slug: "coppa",
  name: "Coppa",
  animal: "pork",
  shelf: "coppa-capicola",
  aka: ["capicola", "capocollo", "gabagool", "coppa di Parma"],
  match: ["coppa", "capicola", "capocollo"],
  dek: "The neck and shoulder muscle, dry-cured whole — fattier and more marbled than prosciutto, and the best-value dry-cured whole muscle in most delis. Hot coppa is rubbed with chili before curing, sweet coppa isn't.",
  anatomy: "Coppa is cut from the neck, running from the base of the skull into the shoulder — essentially the muscle that would otherwise be the top of a Boston butt. It's a single well-marbled cylinder with fat distributed through it rather than as a cap, which is what distinguishes it from prosciutto's leaner leg meat. It's seasoned, cased and hung for two to six months, considerably less than a whole leg because the piece is far smaller. Sliced across, it shows the characteristic pattern of muscle bundles separated by seams of fat.",
  science: "Same water-activity principle as any dry cure, but on a small enough piece that the process takes months rather than years. The higher intramuscular fat is the point: fat carries fat-soluble aromatic compounds developed during curing, and it melts at body temperature so thin slices dissolve on the tongue. Because the piece is smaller and rounder than a leg, it dries more evenly and case-hardening is less of a risk. Nitrite or nitrate is used in nearly all commercial production for colour and botulism control, and traditional recipes vary in whether they include a starter culture for controlled fermentation.",
  methods: [
    { m: "Serve raw, sliced thin",
      why: "It's finished. Thin slices let the marbled fat melt, which is the whole eating experience.",
      how: "Sliced thin but slightly thicker than prosciutto — coppa has enough structure to take it. Room temperature twenty minutes before serving." },
    { m: "On sandwiches",
      why: "Its fat content and pepper stand up to bread, cheese and vinegar in a way leaner cured meats don't.",
      how: "The standard in an Italian sub or a muffuletta. Layered with provolone, hot peppers and oil and vinegar." },
    { m: "Render into a pan sauce or pasta",
      why: "Diced and rendered it behaves like a leaner guanciale, giving fat and savour to a sauce.",
      how: "Diced small, rendered slowly from a cold pan, then the aromatics built in the rendered fat." },
    { m: "Cure your own",
      why: "One of the most achievable whole-muscle cures — small, forgiving, and the fat protects it from drying too fast.",
      how: "Equilibrium cure at 2.5% salt and 0.25% cure #2 by weight with pepper and fennel, bagged three weeks refrigerated, then cased and hung at 55-60°F and 70-75% humidity until it loses 35-40% of its weight, roughly two to three months." }
  ],
  avoid: {
    m: "Treating it as interchangeable with prosciutto in a recipe",
    why: "They look similar on a board and behave differently, because they're different muscles with different fat contents. Coppa is neck meat with fat marbled through it; prosciutto is lean leg with fat as an external rim. That makes coppa richer, more assertive and better able to stand up to strong flavours — vinegar, hot peppers, sharp cheese — while prosciutto is delicate and gets buried by them. Going the other way, coppa wrapped around something and roasted renders more fat and can turn greasy where prosciutto crisps. On a plate they're both excellent; in a dish, substituting one for the other changes the balance more than the appearance suggests."
  },
  buying: "Sold sliced at any decent Italian deli and increasingly pre-packaged. Hot coppa is rubbed with paprika or chili before curing and is noticeably spicy; sweet or dolce is seasoned with pepper and sometimes fennel or wine. Coppa di Parma and Capocollo di Calabria are protected designations. Look for a good ratio of marbled fat — a very lean coppa was cut too far toward the shoulder and will be dry. The fat should be white, not yellow. It's meaningfully cheaper than prosciutto for comparable quality, which makes it the value pick on a board. Two ounces per person.",
  temps: "Serve at room temperature, out of the fridge twenty minutes. If curing your own, hang at 55-60°F with 70-75% humidity to 35-40% weight loss. Sliced, use within a few days; whole and vacuum-sealed it keeps months refrigerated.",
  faq: [
    { q: "Coppa, capicola and gabagool — same thing?",
      a: "Yes. Coppa is the northern Italian name, capocollo or capicola the southern, and gabagool is the Italian-American pronunciation of capicola that survived in the New York and New Jersey dialect. All refer to the dry-cured neck muscle. Regional recipes differ in seasoning — Calabrian versions are typically hot, northern ones sweeter — but the cut is the same." },
    { q: "Is it the same as pancetta?",
      a: "No. Pancetta is cured belly — the same cut as bacon, without smoke. Coppa is neck. Pancetta is fattier and is generally cooked; coppa is leaner in proportion and generally eaten raw. Neither substitutes well for the other in a pasta dish, since pancetta renders a lot of fat and coppa renders comparatively little." },
    { q: "Can I cure one at home?",
      a: "It's the best whole-muscle cure to start with. The piece is small enough to fit a wine fridge, the marbling protects it from case-hardening, and it takes two to three months rather than a year. The rules are the same as any dry cure: weigh it, use cure #2 for anything hanging longer than a few weeks, hold humidity around 70-75%, and go by weight loss — 35-40% — rather than by time." }
  ]
},

{
  slug: "nduja",
  name: "Nduja",
  animal: "pork",
  shelf: "nduja",
  aka: ["'nduja", "spreadable salami", "Calabrian spreadable sausage"],
  match: ["nduja", "spreadable salami"],
  dek: "A fermented Calabrian salami so soft it spreads, made from fatty pork trim and a great deal of Calabrian chili. It functions as a condiment rather than a cold cut, and a spoonful melted into almost anything does the work of a whole sofrito.",
  anatomy: "Traditionally made from the fattiest trim — belly, jowl, shoulder and back fat — ground fine and blended with roasted Calabrian chili paste at up to a third of the total weight, then cased and fermented and aged for a few months. The very high fat content and fine grind are why it stays soft and spreadable rather than setting firm like a salami. The colour is a deep orange-red from the chili rather than from the meat. It's smoked in some traditions and not in others.",
  science: "It's a fermented sausage, so the safety comes from a combination of acidification and drying: lactic acid bacteria, either wild or from a starter culture, ferment sugars into lactic acid and drop the pH below about 5.3, which inhibits pathogens while the product dries and water activity falls. The high fat content slows drying, which is why nduja stays soft where a leaner salami hardens. Capsaicin from the chili contributes to preservation as well as flavour. The fine emulsion-like grind distributes fat and chili evenly, giving it the paste texture that defines it.",
  methods: [
    { m: "Spread on bread",
      why: "The traditional use and still the best one — it's a spread, not a slice.",
      how: "On warm crusty bread or grilled toast, sometimes with a little ricotta or honey against the heat." },
    { m: "Melt into a pasta sauce",
      why: "It dissolves completely into fat, chili and savour, doing the work of pancetta, chili and tomato paste in one ingredient.",
      how: "A heaped tablespoon into a warm pan with a little oil until it melts and separates, then tomato or just pasta water and cheese. Two minutes to a sauce." },
    { m: "Stir into eggs, beans or greens",
      why: "It functions as a seasoning paste with fat, heat and umami all at once.",
      how: "A teaspoon stirred into scrambled eggs off the heat, or melted into a pot of beans at the end." },
    { m: "On pizza",
      why: "It melts and spreads under the heat of the oven, distributing chili fat across the whole surface.",
      how: "Dotted over the top before baking rather than spread — it will run and cover on its own." }
  ],
  avoid: {
    m: "Treating it as a sliceable salami, or as a mild ingredient",
    why: "Two mismatched expectations. Nduja is deliberately soft — high fat and fine grind mean it will never slice, and trying to serve it on a board like soppressata just produces a smeared mess. It belongs in a small dish with a knife, or in a pan. The second error is quantity. It's typically a quarter to a third chili by weight and it is genuinely hot, so it seasons rather than fills: a heaped tablespoon dressed through a pound of pasta is a normal amount, and treating it like a sausage to be eaten in slices will overwhelm anything it's with. It's also very salty, so anything it goes into should be tasted before seasoning."
  },
  buying: "Sold in jars, tubs or short casings at Italian delis and increasingly in supermarkets. Look for a deep orange-red colour and a soft, spreadable texture — if it's firm enough to slice it's probably a different Calabrian salami. Producers from Spilinga in Calabria are the traditional benchmark; several American producers now make excellent versions. Check the chili content if you're heat-sensitive, since it varies substantially between makers. It keeps for weeks refrigerated once opened and the fat will separate slightly, which is normal — stir it back in. A small tub goes a long way.",
  temps: "Serve at room temperature to spread properly — straight from the fridge it's stiff. In cooking, melt gently over low heat; high heat separates the fat and scorches the chili. Refrigerate after opening and use within a few weeks.",
  faq: [
    { q: "How hot is it really?",
      a: "Hot, but not extreme — Calabrian chilies are moderate on the scale, roughly comparable to a jalapeño individually, and the heat is warm and fruity rather than sharp. What makes nduja assertive is the quantity, up to a third of the product by weight. A tablespoon in a pasta dish for two is noticeable and pleasant; a whole tub eaten as a spread is a different experience." },
    { q: "What can I substitute?",
      a: "Nothing does the same job in one ingredient, but a combination gets close: finely chopped pancetta or fatty salami rendered down with Calabrian chili paste or harissa and a little tomato paste. You're replacing fat, heat and cured savour, so all three need to be present. Chorizo is the nearest single substitute and is smokier and firmer." },
    { q: "Why is it spreadable when salami isn't?",
      a: "Fat content and grind. Nduja is made from the fattiest trim on the animal, ground very fine, so there's far more soft fat and far less muscle structure than in a lean salami. It also dries less, because that fat slows moisture loss. The result stays at a paste consistency through aging rather than firming up." }
  ]
},

{
  slug: "saucisson-sec",
  name: "Saucisson Sec",
  animal: "pork",
  shelf: "saucisson",
  aka: ["dry-cured salami", "salami sec", "soppressata", "saucisson", "chorizo seco"],
  match: ["saucisson", "dry salami", "soppressata", "cured sausage"],
  dek: "Ground pork and fat, salted, cased and hung until it loses a third of its weight. The white bloom on the outside is a deliberate mould culture doing a job, not a fault, and scraping it all off is a small vandalism.",
  anatomy: "Coarsely or finely ground lean pork with 20-30% back fat, seasoned, packed into a natural or collagen casing and hung to ferment and dry for four to twelve weeks depending on diameter. The white or grey powdery coating is Penicillium nalgiovense, applied deliberately, which outcompetes unwanted moulds, regulates moisture loss through the casing and contributes flavour. Regional versions differ mainly in grind, seasoning and diameter: French saucisson is usually coarse with pepper and sometimes garlic, Italian soppressata is pressed flatter, Spanish chorizo seco carries pimentón.",
  science: "Two safety mechanisms working together. Fermentation by lactic acid bacteria — from a starter culture or the environment — converts sugars to lactic acid and drops pH below roughly 5.3 in the first days, which stops pathogens while the sausage is still wet. Then drying takes water activity below the threshold for bacterial growth, measured as weight loss of 30-40%. Nitrate, as cure #2, is used because it converts slowly to nitrite over weeks and so remains protective through a long cure, unlike the faster-acting nitrite in cure #1. The mould coating regulates the drying rate so the outside doesn't harden into a shell that traps moisture inside.",
  methods: [
    { m: "Slice and serve",
      why: "It's finished and nothing improves it. The only variable is thickness.",
      how: "Sliced thin at an angle for a coarse-grained saucisson, thinner still for a fine one. Room temperature for twenty minutes before serving." },
    { m: "Dice into a cooked dish",
      why: "It renders fat and adds cured savour and, in the Spanish versions, pimentón, without needing to be cooked through.",
      how: "Diced small and rendered from a cold pan, or added late to beans, lentils or a rice dish where it seasons the liquid." },
    { m: "Cure your own",
      why: "It's the standard entry into fermented charcuterie, and the equipment is a scale, a culture and somewhere cool and humid.",
      how: "Lean pork and back fat at roughly 75:25, ground cold, mixed with 2.5-3% salt, 0.25% cure #2, dextrose and a starter culture. Stuffed, fermented at 70-75°F for 48-72 hours, then dried at 55-60°F and 70-75% humidity to 35% weight loss." },
    { m: "Serve with the right foils",
      why: "It's fat, salt and acid, so it wants something sharp and something plain alongside.",
      how: "Cornichons, mustard, bread and a sharp cheese. That's the whole tradition and it exists because it works." }
  ],
  avoid: {
    m: "Peeling off all the casing and mould, and refrigerating it hard",
    why: "The white bloom is Penicillium nalgiovense, deliberately applied, and it's doing real work — it outcompetes harmful moulds, moderates the rate of moisture loss so the sausage dries evenly, and contributes to the flavour. Scraping it off entirely removes part of what you paid for, and it's edible. Peel the casing back from the portion you're cutting if you prefer, and leave the rest intact. The second error is treating it like fresh meat. Dry-cured sausage is shelf-stable by design and is better at cool room temperature or in a cellar than in a cold fridge, which dries it out unevenly and mutes the flavour. Hang it or keep it wrapped loosely in paper somewhere cool."
  },
  buying: "Should feel firm with a slight give, not rock hard — over-dried saucisson is chalky. The white bloom should be even and powdery; fuzzy green, black or slimy patches mean it was stored badly. Look at the cut face: fat should be white and distinct, not yellowed or smeared. Coarse grinds generally have more character than fine. French saucisson sec, Italian soppressata and Spanish chorizo seco are all the same category with different seasoning. It keeps for weeks hanging in a cool place and improves slightly as it continues to dry. Two ounces per person on a board.",
  temps: "Serve at cool room temperature. Store hanging or loosely wrapped in paper at 50-60°F rather than in a sealed bag in the fridge, which makes it sweat. If curing your own, ferment at 70-75°F then dry at 55-60°F and 70-75% humidity to 35% weight loss.",
  faq: [
    { q: "Is the white coating safe to eat?",
      a: "Yes, and it's there on purpose. It's Penicillium nalgiovense, the same genus used on Brie, applied by the producer to colonise the surface before anything unwanted can. It regulates drying and adds flavour. What's not fine is fuzzy green or black growth or a slimy grey film, which indicate poor storage — those should be wiped with vinegar or the sausage discarded depending on extent." },
    { q: "How is it safe if it's never cooked?",
      a: "Two barriers. Fermentation drops the pH below about 5.3 within the first few days, which stops pathogens while the sausage is still moist. Then drying removes 30-40% of the weight as water, taking water activity below what bacteria need. Nitrate provides a third barrier against botulism. All three are measurable, which is why serious home curing uses a scale and a pH meter rather than judgement." },
    { q: "Can I make it at home?",
      a: "Yes, and it's the standard first fermented project — but unlike a whole-muscle cure, ground and stuffed products carry real botulism risk if the numbers are wrong, because the interior is anaerobic. Use cure #2 at 0.25% by weight, a commercial starter culture rather than wild fermentation, weigh everything, and track weight loss to 35%. A wine fridge with a humidity source works. Do not improvise the cure percentages." }
  ]
},

{
  slug: "mortadella",
  name: "Mortadella",
  animal: "pork",
  shelf: "mortadella-cooked",
  aka: ["mortadella di Bologna", "bologna", "baloney"],
  match: ["mortadella", "bologna"],
  dek: "A cooked emulsified sausage studded with cubes of back fat and often pistachio — the original that American bologna is a distant, degraded copy of. The texture comes from a genuine emulsion, which is a technical achievement rather than a filler.",
  anatomy: "Finely ground pork worked into a smooth paste with ice, then folded through with cubes of neck fat — lardelli — and often pistachios and whole peppercorns, packed into a large casing and slow-cooked in a dry oven for hours. Mortadella di Bologna IGP has protected status with rules covering meat content, fat percentage and process. The finished product can be enormous, up to a hundred pounds, and the visible white cubes are the defining feature: they should be distinct and evenly distributed rather than smeared.",
  science: "The paste is a real meat emulsion — fat suspended in a matrix of dissolved muscle protein and water — and it's held together by myosin, extracted from the muscle by salt and mechanical work. Temperature control is the whole technical problem: if the mixture warms above roughly 55-60°F during grinding and mixing, the fat melts and the emulsion breaks, giving a greasy, grainy product with fat pockets. That's why ice goes into the mix and why commercial production keeps everything near freezing. The slow cook that follows sets the emulsion without breaking it, and the folded-in fat cubes stay intact because they're added after emulsification.",
  methods: [
    { m: "Slice thin and eat as is",
      why: "It's fully cooked and the texture is the point — thin slicing lets the fat cubes soften at room temperature.",
      how: "Sliced very thin, at room temperature. In a panino with nothing else, or with stracciatella and pistachio." },
    { m: "Cube it into a board or salad",
      why: "Thick cubes give a different, meatier experience and hold up in a mixed dish.",
      how: "Half-inch cubes, room temperature, with olives and cheese, or through a bean salad." },
    { m: "Blend into a mousse",
      why: "Its emulsified texture blends into something silky that spreads, which is a common Emilian preparation.",
      how: "Blitzed with mascarpone or ricotta and a little cream, seasoned, served on toast or as a filling for pasta." },
    { m: "Fry a thick slice",
      why: "A half-inch slice seared hard browns and the fat cubes render slightly, which is the basis of the Brazilian sandwich and the American fried bologna sandwich.",
      how: "Half-inch slice, scored around the edge so it doesn't dome, hard sear in a dry pan two minutes a side." }
  ],
  avoid: {
    m: "Judging it by American bologna, and slicing it thick",
    why: "Most people meet this product as supermarket bologna — a highly processed, mechanically separated, uniformly pink slice with no visible fat and none of the aromatics — and reasonably conclude they don't like it. Real mortadella is a different food: whole-muscle pork emulsified with care, folded with distinct cubes of neck fat, seasoned with pepper, myrtle and often pistachio, and cooked slowly for hours. The relationship is roughly that of instant coffee to espresso. The second error is thickness. The visible fat cubes need to soften at room temperature and the emulsion is meant to dissolve on the tongue, both of which require thin slices — cut a quarter inch thick, the same mortadella is waxy and heavy."
  },
  buying: "Look for Mortadella di Bologna IGP for the protected traditional product, or a good Italian deli's own. The cut face should show distinct white fat cubes evenly distributed through a pale pink matrix, not a uniform colour and not smeared fat, which indicates a broken emulsion. Pistachio versions are common and worth the small premium. Buy it sliced to order and thin. It should smell mild and faintly of spice rather than sour. Keeps about a week refrigerated once sliced, less than firmer cured meats since it's cooked rather than dried. Two ounces per person.",
  temps: "Serve at room temperature, out of the fridge fifteen to twenty minutes — cold mortadella is waxy and mutes the aromatics. It is fully cooked and needs no further heating. If frying a thick slice, two minutes a side in a dry pan.",
  faq: [
    { q: "Is bologna the same thing?",
      a: "Historically descended from it, practically not. American bologna is typically made with mechanically separated meat, emulsified with more water and binders, and has no visible fat cubes or aromatics. Mortadella di Bologna IGP has legal requirements on meat content and process and contains distinct cubes of neck fat, whole peppercorns and often pistachio. They're different products that share an ancestor and a name." },
    { q: "What are the white cubes?",
      a: "Lardelli — cubes of pork neck fat, blanched and folded into the emulsion after it's made rather than ground into it. They should be distinct and evenly spread. If the fat looks smeared or the whole slice is uniformly coloured, the emulsion broke during production, which means a greasier and less pleasant texture." },
    { q: "Why is it so smooth?",
      a: "It's a genuine meat emulsion — fat suspended in a protein and water matrix, stabilised by myosin extracted from the muscle by salt and mechanical work. Getting it right requires keeping everything close to freezing during mixing, since warm fat breaks the emulsion. It's the same technical process behind a hot dog, done carefully with better ingredients." }
  ]
},

{
  slug: "fresh-sausage",
  name: "Fresh Sausage",
  animal: "pork",
  shelf: "sausage",
  aka: ["Italian sausage", "bratwurst", "breakfast sausage", "salsiccia", "banger"],
  match: ["sausage", "italian sausage", "bratwurst", "sausage links"],
  dek: "Ground meat, fat and salt in a casing, uncured and uncooked. The fat ratio decides everything — below about 25% it comes out dry and crumbly no matter how carefully you cook it — and the two things that ruin it are heat during grinding and a fork.",
  anatomy: "Coarsely ground pork shoulder with added back fat to reach roughly 70:30 or 75:25 meat to fat, seasoned, and stuffed into natural hog casings. Regional versions differ mostly in seasoning and grind: Italian with fennel and chili, bratwurst finer with nutmeg and marjoram, British bangers with rusk as a binder, breakfast sausage with sage. Natural casings — cleaned intestine — snap when bitten and shrink with the sausage; collagen casings are more uniform and don't. Uncured, so it must be cooked through and doesn't keep like salami.",
  science: "Two failure modes, both physical. Fat smear happens when the meat, grinder or hands warm above roughly 55°F: the fat softens and smears through the mix rather than staying in discrete particles, so it renders straight out during cooking and leaves a dry, crumbly sausage sitting in grease. Keeping everything at 32-35°F is the single most important variable in sausage-making. The second is the bind: salt dissolves myosin, and mixing after salting develops a sticky protein matrix that holds the fat and water in place, which is why a properly mixed sausage is juicy and an under-mixed one falls apart. Casings should be soaked and rinsed, and the sausage pricked only if you want to lose fat, which you don't.",
  methods: [
    { m: "Poach then sear",
      why: "The most reliable method — gentle heat cooks the interior evenly without bursting the casing, then a hard sear browns it.",
      how: "Simmer gently in water or beer at 175-180°F for ten to twelve minutes to 150°F internal, then dry and sear hard in a pan for two minutes for colour. The casing stays intact." },
    { m: "Pan over medium",
      why: "Slower than instinct suggests, because high heat bursts the casing and renders the fat out before the middle is done.",
      how: "Medium heat, a splash of water in the pan, covered for six to eight minutes, then uncovered and turned until browned. Total twelve to fifteen minutes to 160°F." },
    { m: "Grill indirect then direct",
      why: "Direct flame the whole way splits casings and flares as fat drips; indirect cooks them through first.",
      how: "Indirect at 350°F for twelve to fifteen minutes, then two to three minutes over direct heat to colour." },
    { m: "Make your own",
      why: "Total control of the fat ratio and seasoning, and shoulder plus back fat costs a fraction of good sausage.",
      how: "Pork shoulder and back fat at 75:25 by weight, cubed and frozen thirty minutes. Grind through a coarse plate with everything at 32-35°F. Add 1.5-2% salt and seasoning, mix hard two minutes until sticky, fry a test patty, adjust, then stuff into soaked hog casings without overpacking." }
  ],
  avoid: {
    m: "Pricking the casings, and cooking them hot",
    why: "Pricking sausages is widely repeated advice and it does exactly the wrong thing. The casing is holding in fat and rendered juices, and puncturing it lets both escape into the pan — the sausage ends up drier, and the fat you paid for is on the bottom of the skillet. Casings burst because the interior is heating too fast and the water inside is turning to steam faster than it can escape; the fix is lower heat, not a hole. Which is the same root cause as the second error. High heat browns the casing and renders the fat long before the centre reaches 160°F, so you end up with a burst, dark sausage that's raw in the middle. Medium heat, or poach first and sear at the end."
  },
  buying: "Ask what the fat percentage is — good butchers know, and anything below 25% will be dry. Natural casings are worth choosing for the snap. Look for a coarse grind with visible distinct fat rather than a uniform pink paste, which suggests fat smear or heavy emulsification. Fresh sausage should smell of meat and seasoning, not sour. It's uncured, so treat it as raw meat and use within a couple of days or freeze. Butcher-made is usually far better than supermarket and often not much more expensive, since it's made from shoulder trim either way.",
  temps: "160°F internal for pork sausage, or 150°F if poaching then searing since it carries over. Poach at 175-180°F, never boiling. Fresh sausage is uncured and must be cooked through — this is not a cut where pink is acceptable.",
  faq: [
    { q: "Should I prick sausages before cooking?",
      a: "No. The casing is retaining fat and juice, and piercing it lets both run out, giving a drier sausage and a greasy pan. Casings split when the interior heats too fast and steam builds faster than it can escape — the answer is lower heat or a gentle poach first, not a hole. The advice persists from an era of much fattier sausages cooked over open fire." },
    { q: "Why is my homemade sausage dry and crumbly?",
      a: "Almost always one of two things. The fat ratio was too low — under about 25% by weight there simply isn't enough. Or the fat smeared during grinding because the meat and equipment weren't cold enough, so it rendered out in the pan instead of staying suspended. Keep everything at 32-35°F, including the grinder parts, and freeze the cubed meat for thirty minutes before grinding." },
    { q: "Natural or collagen casings?",
      a: "Natural — cleaned hog intestine — shrink with the sausage as it cooks and give the snap people associate with a good sausage. Collagen casings are more uniform, easier to stuff and don't need soaking, but they can be slightly tough and don't have the same bite. For anything you're cooking whole, natural is worth the extra handling." }
  ]
},

{
  slug: "pate",
  name: "Pâté",
  animal: "pork",
  shelf: "pate",
  aka: ["pâté de campagne", "country terrine", "liver pâté", "parfait", "terrine"],
  match: ["pate", "terrine", "country pate", "liver pate"],
  dek: "Ground meat, fat and liver baked in a mould, or liver blended with butter until smooth. Country pâté is coarse and rustic; a parfait is silky and roughly half butter. Both live or die on being cooked to temperature rather than to time.",
  anatomy: "Pâté de campagne is coarsely ground pork shoulder and fat with a proportion of liver — usually 10-25% — bound with egg and seasoned, packed into a terrine mould often lined with caul fat or bacon, and baked in a water bath. A parfait or mousse is the smooth end: liver cooked briefly, blended with a large quantity of butter and often cream and brandy, passed through a sieve and set in the fridge under a butter seal. Terrine technically refers to the mould, though it's used interchangeably. Caul fat — the lacy membrane from around the stomach — melts during baking and bastes from the outside.",
  science: "For a baked pâté, the water bath is doing the essential work: it caps the effective cooking temperature and heats the mould evenly, so the proteins set gently instead of contracting and squeezing out fat and moisture, which is what produces a greasy, crumbly terrine sitting in a pool. Internal temperature is the reliable control at 150-160°F. For a smooth parfait, the emulsion of liver, butter and liquid depends on temperature: too hot and it splits, too cold and it won't come together, so the butter is added to warm — not hot — liver. Both improve after two or three days as the seasoning distributes and the texture firms.",
  methods: [
    { m: "Country pâté in a water bath",
      why: "The bath moderates heat so the mixture sets rather than shrinking and weeping fat.",
      how: "Line the mould with caul fat or bacon, pack the mixture in and fold over, cover with foil. Into a roasting tin with hot water halfway up, 300°F for one and a half to two hours to 150-160°F internal. Cool, then weight it overnight in the fridge." },
    { m: "Chicken liver parfait",
      why: "The smooth, rich end of the category, and much faster than a baked terrine.",
      how: "Sear livers briefly still pink, deglaze with brandy and reduce, then blend hot with an equal weight of softened butter and pass through a fine sieve. Set in ramekins under a layer of clarified butter." },
    { m: "Weight it, always",
      why: "Pressing while it cools compacts the mixture and removes air pockets, which is the difference between a terrine that slices and one that crumbles.",
      how: "A board and a couple of tins on top, overnight in the fridge. Some fat and jelly will be forced out; that's expected." },
    { m: "Serve with sharp foils",
      why: "It's fat and salt, so it needs acid — every traditional accompaniment is a form of vinegar.",
      how: "Cornichons, pickled onions, mustard and bread. Nothing else is required." }
  ],
  avoid: {
    m: "Baking it without a water bath, and slicing it the day you make it",
    why: "The water bath is not a refinement. Baked dry in an oven, the outside of the terrine races ahead of the centre, the proteins contract hard and squeeze out fat and moisture, and what emerges is a shrunken, greasy block sitting in a pool of rendered fat with a crumbly texture. The bath caps the effective temperature and heats the mould evenly so the mixture sets gently. The second error is impatience. A pâté eaten the day it's made tastes flat and under-seasoned and hasn't firmed enough to slice cleanly — two to three days in the fridge under weight lets the salt and aromatics distribute and the texture set. It's one of the few dishes where the recipe genuinely includes waiting."
  },
  buying: "Country pâté should look coarse with visible pieces of meat and fat rather than uniform, and should smell rich rather than metallic — an aggressive liver smell means either too much liver or an old one. Smooth parfaits should be pale and even. Buy from a deli that makes its own if you can. Both keep about a week refrigerated once cut; a parfait sealed under butter keeps longer until broken. If making your own, pork shoulder, back fat and chicken livers cost very little, which makes it one of the cheapest impressive things to produce.",
  temps: "Baked terrines to 150-160°F internal in a 300°F oven with a water bath — one and a half to two hours. Then cooled and weighted overnight. Serve at room temperature, out of the fridge twenty to thirty minutes, since cold fat mutes everything.",
  faq: [
    { q: "Pâté or terrine?",
      a: "Terrine strictly refers to the earthenware mould and to anything cooked in one; pâté originally meant something baked in pastry. In practice the words are used interchangeably, with pâté leaning toward smoother preparations and terrine toward coarse ones. Nobody will misunderstand you either way." },
    { q: "Why did mine come out greasy and crumbly?",
      a: "Almost certainly baked without a water bath, or taken well past 160°F. Both cause the proteins to contract sharply and expel fat and moisture, leaving a dry crumbly texture and a pool of grease. Use a bath, use a thermometer, and pull at 150-160°F. Weighting it as it cools also compacts the texture and helps it slice." },
    { q: "How long should I let it sit?",
      a: "Two to three days minimum, weighted, in the fridge. The seasoning needs time to distribute and the texture needs time to set — a terrine cut the same day tastes under-seasoned and falls apart. Five days is better. It keeps about a week after that, or longer sealed under a layer of fat." }
  ]
},

{
  slug: "rillettes",
  name: "Rillettes",
  animal: "pork",
  shelf: "rillettes",
  aka: ["potted meat", "rillettes de Tours", "duck rillettes", "shredded confit"],
  match: ["rillettes", "potted meat"],
  dek: "Meat cooked slowly in its own fat until it falls apart, shredded, mixed back with that fat and packed into a jar under a sealed layer of it. Somewhere between a confit and a spread, and it keeps for weeks because the fat excludes air.",
  anatomy: "Traditionally pork shoulder or belly, cut into large pieces, salted and cooked very slowly in lard or its own rendered fat for four hours or more until it collapses. Duck and rabbit versions follow the same method. The cooked meat is shredded — traditionally with two forks, never blended, since the texture should be fibrous rather than smooth — then mixed with enough of the cooking fat to bind, seasoned, and packed into jars or crocks with a half-inch layer of clarified fat poured over as a seal.",
  science: "The preservation mechanism is exclusion of oxygen. A solid layer of fat over the surface prevents air reaching the meat, which stops oxidative rancidity and aerobic spoilage, and the meat has already been cooked long enough to eliminate vegetative bacteria. This is the same principle as confit and it's why an unbroken seal is essential — any meat protruding above the fat line becomes a spoilage point. It is not a defence against botulism, which is anaerobic, so rillettes belong in the fridge rather than a cupboard despite the historical association with room-temperature storage. The long low cook converts collagen to gelatin, which is what makes the shredded meat cohere.",
  methods: [
    { m: "Slow-cook in fat, then shred",
      why: "The defining method. Long low heat converts collagen while the fat prevents any drying at all.",
      how: "Salt the meat overnight. Cook in lard or its own fat at 250-275°F, covered, four to five hours until it falls apart under a fork. Strain the fat. Shred the meat with two forks, then beat in enough warm fat to bind, and season aggressively." },
    { m: "Pack and seal",
      why: "The fat seal is what makes it keep, and it has to be complete.",
      how: "Pack into sterilised jars, pressing out air pockets, leaving half an inch of headspace. Pour clarified fat over to cover completely. Refrigerate at least three days before eating." },
    { m: "Duck or rabbit versions",
      why: "The same technique on richer or leaner meat, with duck rillettes being the most common variation.",
      how: "Duck legs confited and shredded, bound with duck fat. Rabbit needs added pork fat, since it's too lean to bind on its own." },
    { m: "Serve at room temperature",
      why: "Cold fat is waxy and tastes of nothing; warmed slightly it becomes spreadable and the flavour opens up.",
      how: "Out of the fridge thirty minutes. On toasted bread with cornichons, mustard and something sharp." }
  ],
  avoid: {
    m: "Blending it, and breaking the fat seal early",
    why: "Rillettes are defined by texture — long fibrous strands of meat suspended in fat — and a food processor destroys exactly that, producing a smooth paste that is technically a mousse and misses the point entirely. Shred with two forks, or with a mixer paddle on low if you're making a lot. The second error is practical: the fat cap over the surface is the preservation mechanism, excluding air from the meat below, and once it's broken the clock starts. An unopened jar with an intact seal keeps for weeks refrigerated; an opened one should be treated as ordinary cooked meat and used within a week. If you only want some, take from one jar and leave the others sealed rather than opening several."
  },
  buying: "French delis and good charcuterie counters carry pork and duck versions in jars or crocks. Look for visible shredded texture rather than a smooth paste, and a clean fat seal with no meat breaking the surface. It should smell rich and faintly sweet, not sour or rancid — fat that has oxidised smells like old nuts. Homemade is straightforward and very cheap, since pork shoulder and lard cost little and the process is largely unattended. Keeps several weeks sealed, about a week once opened. Two ounces per person as part of a board.",
  temps: "Cook at 250-275°F for four to five hours until the meat collapses. Serve at room temperature, thirty minutes out of the fridge. Store refrigerated under an intact fat seal for several weeks; once opened, one week.",
  faq: [
    { q: "How is this different from pâté?",
      a: "Method and texture. Pâté is ground raw meat and liver bound with egg and baked in a mould, so it sets into a sliceable block. Rillettes are meat slow-cooked until it falls apart, then shredded and mixed with fat, so they stay soft and fibrous and are spread rather than sliced. Pâté usually contains liver; rillettes usually don't." },
    { q: "How long do they actually keep?",
      a: "Several weeks refrigerated with an intact fat seal, which was the original point of the technique. The seal excludes oxygen; break it and you're looking at about a week. Despite the historical association with cellars, keep them refrigerated — the fat seal protects against aerobic spoilage and oxidation, not against botulism, which is anaerobic and would be perfectly comfortable under it." },
    { q: "Can I use a food processor?",
      a: "You can, and you'll have made something else. The texture that defines rillettes is long strands of meat suspended in fat, and a processor cuts them into a paste. Two forks is the traditional method; a stand mixer with the paddle on low speed works well for larger batches and keeps the fibers intact." }
  ]
},

{
  slug: "duck-confit",
  name: "Duck Confit",
  animal: "duck",
  shelf: "duck-confit",
  aka: ["confit de canard", "confit duck leg", "preserved duck"],
  match: ["duck confit", "confit de canard"],
  dek: "Duck legs salt-cured, then cooked submerged in fat at low temperature for hours and stored under that fat. A preservation method that turned out to produce the best possible version of the cut, which is why it survived refrigeration.",
  anatomy: "Duck leg quarters — thigh and drumstick — cured overnight with salt, garlic, thyme and bay, rinsed, then fully submerged in duck fat and held at 200-215°F until the meat pulls from the bone. They're cooled and stored in the fat, which sets solid around them. Moulard legs from foie gras production are the traditional and largest; Pekin legs are smaller and more common in shops. The skin stays soft during the confit and is crisped separately at serving.",
  science: "Two mechanisms in sequence. The salt cure lowers water activity and seasons the meat throughout, and historically was the main preservative step. The fat then does two things: it conducts heat gently and evenly at a temperature that converts the leg's substantial collagen into gelatin over three hours, and once cooled it forms an airtight seal that excludes oxygen and prevents aerobic spoilage. Fat is a poor solvent for the compounds that cause rancidity at low temperature, so properly sealed confit keeps for months refrigerated. The meat cannot dry out during cooking because there's no evaporation into fat.",
  methods: [
    { m: "Cure, confit, store",
      why: "The full traditional method, and the storage stage genuinely improves the result over a few weeks.",
      how: "Salt the legs with garlic, thyme and bay for twenty-four hours. Rinse and dry thoroughly. Submerge in duck fat at 200-215°F for two and a half to three hours until the meat pulls from the bone. Cool in the fat, then store submerged in the fridge." },
    { m: "Crisp the skin to serve",
      why: "Confit skin is soft, and the contrast between crackling skin and yielding meat is the whole dish.",
      how: "Scrape off excess fat, then skin-side down in a dry pan over medium heat, eight to ten minutes without moving, until deep brown and crisp. Or 425°F oven for fifteen minutes." },
    { m: "Sous vide confit",
      why: "Achieves the same collagen conversion with a fraction of the fat, since the bag holds it against the meat.",
      how: "Cure as normal, then bag each leg with two tablespoons of duck fat at 167-175°F for eighteen to twenty-four hours. Chill in the bag. It won't keep like traditional confit, since there's no fat seal in a jar." },
    { m: "Shred into other dishes",
      why: "Confit meat is the base for cassoulet, rillettes, hash and countless bistro dishes.",
      how: "Pulled from the bone and folded into beans, potatoes or a salad. The fat it was stored in comes with it and is part of the seasoning." }
  ],
  avoid: {
    m: "Reheating it in the fat, and treating a broken seal as still preserved",
    why: "Confit legs are already cooked through, so warming them in the fat achieves nothing except making the skin flabby — and the skin is the reason to eat the dish. Take them out, scrape the excess fat off, and crisp them skin-side down in a dry pan or a hot oven. That contrast between crackling skin and meat that falls off the bone is the entire point, and it takes eight minutes. The storage error matters more. Confit keeps for months only while the legs are completely submerged and the fat has set as an unbroken seal; any part of the meat above the fat line is exposed to air and becomes a spoilage point. Once you break the seal to remove a leg, either re-melt the fat and reseal properly or treat the remainder as ordinary cooked meat with a week's life."
  },
  buying: "Sold vacuum-packed or in tins at French delis and better supermarkets, usually two legs per pack. Ready-made is a legitimate purchase and saves finding a litre of duck fat; the main complaint is that commercial versions run salty, so rinse and pat dry before crisping. Look for legs fully coated in fat with no exposed meat. Making your own is straightforward if you can source the fat, and rendered duck fat from cooking breasts accumulates over time. The fat is reusable indefinitely — strain it after each batch and it improves. One leg per person, two for large appetites.",
  temps: "Confit at 200-215°F ambient for two and a half to three hours, until the meat pulls from the bone. Sous vide 167-175°F for eighteen to twenty-four hours. To serve, crisp skin-side down over medium heat or at 425°F. Store submerged in fat, refrigerated, for months.",
  faq: [
    { q: "Do I need to fully submerge the legs?",
      a: "For traditional confit intended to keep, yes — the fat seal is the preservation mechanism and any exposed meat spoils. For cooking and eating within a few days, a narrow deep dish that lets less fat cover more, or a vacuum bag with a couple of tablespoons of fat, both work fine. The distinction is whether you're preserving or just cooking." },
    { q: "Can I reuse the fat?",
      a: "Yes, indefinitely, and it gets better. Strain it through cloth after each batch to remove meat particles and any jelly that has settled at the bottom — that jelly is concentrated flavour and worth keeping separately for sauces. Stored in the fridge, strained duck fat keeps for many months and is the best roasting fat available." },
    { q: "How long does it really keep?",
      a: "Several months refrigerated while fully submerged with an unbroken seal, which is what the technique was invented for. Once the seal is broken, about a week, treated as ordinary cooked meat. Sous vide confit in a bag keeps only as long as any cooked meat — a few days — because there's no protective fat cap." }
  ]
},

{
  slug: "smoked-fish",
  name: "Smoked Fish",
  animal: "seafood",
  shelf: "smoked-fish",
  aka: ["lox", "gravlax", "hot-smoked salmon", "kippers", "smoked mackerel"],
  match: ["smoked fish", "smoked salmon", "lox", "kippers"],
  dek: "Two entirely different products under one name. Cold-smoked fish is cured but essentially raw, silky and sliceable; hot-smoked fish is cooked through and flakes. Lox is neither — it's salt-cured with no smoke at all.",
  anatomy: "Cold smoking holds the fish below about 85°F, so smoke flavours and further dries it without cooking — the flesh stays translucent and is sliced paper-thin across the grain. Hot smoking runs at 160-225°F and cooks the fish through, giving opaque flesh that flakes. Salmon is the dominant fish for both, with mackerel, trout and haddock common for hot smoking. Kippers are herring split, brined and cold-smoked. Lox is salt-cured belly with no smoke; gravlax is cured with salt, sugar and dill, also unsmoked. Nova is cold-smoked and mildly cured, which is what most people actually buy calling it lox.",
  science: "Cold smoking depends on the cure for safety rather than on heat, since the fish never reaches a pasteurising temperature. Salt lowers water activity and the smoke contributes phenols and formaldehyde compounds that are mildly antimicrobial and slow oxidation. Because the fish stays raw, commercial cold-smoked salmon is required to be frozen first to a specified time-and-temperature to kill parasites, which is why home cold-smoking carries real risk if that step is skipped. Hot smoking pasteurises directly. The pellicle — a tacky protein surface formed by air-drying the cured fish for a few hours — is what smoke adheres to, and skipping it gives weak, uneven smoke flavour.",
  methods: [
    { m: "Serve cold-smoked raw",
      why: "It's cured and ready. Slicing thin across the grain is the only technique involved.",
      how: "Paper-thin slices at a shallow angle. With bagels and cream cheese, or with blini, or just lemon and pepper. Never cooked — heat turns it firm and fishy." },
    { m: "Flake hot-smoked into dishes",
      why: "It's fully cooked and its texture suits being broken up rather than sliced.",
      how: "Flaked into scrambled eggs off the heat, into a pasta with cream and dill, into a chowder at the last minute, or blitzed into a pâté with cream cheese and horseradish." },
    { m: "Cure gravlax at home",
      why: "It's the one member of the family that requires no equipment and no smoke — just salt, sugar and time.",
      how: "Equal salt and sugar, roughly 100g of each per kilo of fish, with dill and crushed pepper. Wrapped and weighted in the fridge for forty-eight hours, turning once. Rinse, dry, slice thin. Use commercially frozen fish." },
    { m: "Hot-smoke your own",
      why: "Straightforward with any smoker or a kettle grill, and hot smoking pasteurises so the safety margin is far wider than cold.",
      how: "Brine at 5% for two hours, dry uncovered until a tacky pellicle forms — two to four hours — then smoke at 175-200°F to 140°F internal, about an hour and a half." }
  ],
  avoid: {
    m: "Cooking cold-smoked salmon, and cold-smoking at home without frozen fish",
    why: "Cold-smoked salmon has been cured and smoked below cooking temperature specifically to stay silky and translucent, and applying heat to it undoes all of that — the proteins contract, the texture turns firm and dry, and the concentrated cure comes forward as an aggressive fishy saltiness. Add it to hot dishes off the heat at the very end, or not at all. The second point is a genuine safety matter rather than a quality one. Cold smoking never reaches a temperature that kills parasites, so commercial producers are required to freeze the fish first to a specified schedule. Home cold-smoking fresh, never-frozen fish skips the only parasite control in the process. Use commercially frozen fish, or hot-smoke instead, which pasteurises."
  },
  buying: "Know which you're buying: cold-smoked and lox are translucent and sliceable, hot-smoked is opaque and flakes. For cold-smoked salmon, look for even colour without white streaks of congealed albumin, which indicates it got too warm. It should smell clean and faintly of smoke, not fishy. Wild versus farmed changes the texture more than the flavour — wild is leaner and firmer. Sliced-to-order from a good counter beats vacuum packs. Hot-smoked mackerel and trout are excellent, cheap and underrated. Cold-smoked keeps about five days opened; hot-smoked a little longer.",
  temps: "Cold-smoked is held below 85°F and served cold, never heated. Hot-smoked is cooked to 140°F internal and can be eaten warm or cold. If hot-smoking at home, brine, form a pellicle, then smoke at 175-200°F to 140°F.",
  faq: [
    { q: "What's the difference between lox, nova and smoked salmon?",
      a: "Lox is strictly salt-cured belly with no smoke at all, and it's very salty. Nova — short for Nova Scotia — is mildly cured and cold-smoked, which is what most delis sell and most people mean when they say lox. Smoked salmon without qualification usually means cold-smoked. Gravlax is Scandinavian, cured with salt, sugar and dill, also unsmoked. All are sliced thin and eaten cold." },
    { q: "Can I hot-smoke at home safely?",
      a: "Yes, and it's much more forgiving than cold smoking, because the fish reaches 140°F and is pasteurised. Brine it, air-dry to form a pellicle so the smoke adheres, then smoke at 175-200°F. Cold smoking at home is where the risk lies, since nothing in the process kills parasites — that requires commercially frozen fish." },
    { q: "Why is mine chalky white in patches?",
      a: "That's albumin, the water-soluble protein that coagulates and is squeezed out when fish is heated too fast or too far. On hot-smoked fish it means the smoker ran too hot. On cold-smoked fish it shouldn't appear at all, and if it has, the product got warm during smoking or storage. A gentle brine and lower temperature both reduce it." }
  ]
},

{
  slug: "saltfish",
  name: "Salt Cod",
  animal: "seafood",
  shelf: "saltfish",
  aka: ["bacalao", "bacalhau", "morue", "salt fish", "baccalà"],
  match: ["salt cod", "bacalao", "bacalhau", "saltfish"],
  dek: "Cod preserved in salt until it's stiff as board and keeps for a year without refrigeration — the fish that provisioned the Atlantic trade. It needs one to three days of soaking with the water changed regularly, and that step is not negotiable.",
  anatomy: "Cod split, salted heavily and dried until it loses most of its water, coming out pale, rigid and intensely salty. Sold as whole flat sides, as thick loin pieces, or as skinless boneless fillets. The thickest loin sections rehydrate to the best texture and cost the most. Related products across the Caribbean and Africa use pollock, hake or ling under the same name and behave similarly but rehydrate faster. Some is sold partially desalted and refrigerated, which shortens the soak but doesn't eliminate it.",
  science: "Preservation is water activity again, achieved by heavy salting followed by drying, which together take moisture low enough that bacteria and moulds can't grow. Rehydration reverses the process by diffusion — the fish sits in fresh water and salt migrates out down the concentration gradient until it equalises — which is why the water has to be changed repeatedly. Leaving it in the same water means the gradient flattens and desalting stops. The salt also alters the protein structure permanently, giving rehydrated salt cod a firmer, more layered texture than fresh cod, which is why the two aren't interchangeable even after soaking.",
  methods: [
    { m: "Soak, then simmer or flake",
      why: "The essential first step for every preparation, and the length depends on thickness.",
      how: "Rinse the surface salt off, then submerge in cold water in the fridge for twenty-four to seventy-two hours, changing the water every six to eight hours. Thick loins want the full three days. Taste a corner before cooking — it should be pleasantly seasoned, not salty." },
    { m: "Brandade",
      why: "The classic Provençal and Portuguese use — poached, then emulsified with olive oil, milk and garlic into a whipped spread.",
      how: "Poach the soaked fish gently ten minutes, flake, then beat with warm olive oil and warm milk alternately until it emulsifies. Garlic and lemon. Serve warm with bread." },
    { m: "Bacalhau à brás and fritters",
      why: "Flaked salt cod holds its texture in mixed dishes far better than fresh cod, which disintegrates.",
      how: "Flaked into potato, onion and egg for à brás, or bound with potato and fried as fritters or acras. The firmness of the rehydrated fish is what makes these work." },
    { m: "Ackee and saltfish, and Caribbean preparations",
      why: "The Jamaican national dish and the dominant use across the region, where saltfish is sautéed with aromatics rather than poached.",
      how: "Soaked, then boiled briefly and flaked, sautéed with onion, scotch bonnet, thyme and tomato, then folded through ackee at the end." }
  ],
  avoid: {
    m: "Under-soaking, and soaking in the same water",
    why: "Salt cod is preserved with enough salt to keep for a year at room temperature, which means it is genuinely inedible until properly rehydrated — not strongly seasoned, but harsh, and no amount of dilution in a finished dish rescues it. Thick loin pieces need a full three days. The related error defeats the whole process: soaking in one unchanged bowl of water lets the salt concentration in the water rise until it equalises with the fish, at which point diffusion stops and nothing further comes out. The water has to be poured off and replaced every six to eight hours, and the fish kept refrigerated while it soaks. Taste a small corner before cooking; that's the only reliable test, and it takes ten seconds."
  },
  buying: "Thick loin cuts rehydrate to the best texture and are worth the premium over thin tail pieces, which can go stringy. It should be pale creamy white rather than yellow — yellowing indicates oxidation and age. Whole dried sides are cheapest and need cutting with a saw or heavy knife. Portuguese, Spanish, Italian and Caribbean groceries carry it reliably. Partially desalted refrigerated fillets are convenient and still need a shorter soak. Unopened dried salt cod keeps essentially indefinitely in a cool dry place, which was the entire point.",
  temps: "Soak twenty-four to seventy-two hours in the fridge, changing water every six to eight hours. Once soaked, poach gently at a bare simmer for eight to ten minutes — it's already firm and hard boiling makes it tough. Not a temperature-probe ingredient.",
  faq: [
    { q: "How long does it actually need to soak?",
      a: "Depends entirely on thickness. Thin fillets may be ready in twelve to twenty-four hours; thick loin pieces need forty-eight to seventy-two. Change the water every six to eight hours throughout, keep it refrigerated, and taste a small piece before cooking. Time guidance is a starting point — the taste test is the actual answer." },
    { q: "Can I use fresh cod instead?",
      a: "Not really, though recipes sometimes suggest it. Salting and drying permanently changes the protein structure, giving rehydrated salt cod a firm, layered texture that holds together in fritters, stews and brandade where fresh cod falls apart into mush. The flavour is also more concentrated. If you substitute fresh cod, expect a different and generally looser dish." },
    { q: "Is the yellow colour bad?",
      a: "It indicates oxidation and age. Good salt cod is pale creamy white; pronounced yellowing means the fats have oxidised, which brings a rancid edge that soaking won't remove. A slight ivory tone is fine. Avoid anything with deep yellow or brown patches, or any sour smell beyond the normal salty fish odour." }
  ]
},

{
  slug: "caviar",
  name: "Caviar",
  animal: "seafood",
  shelf: "caviar",
  aka: ["sturgeon roe", "osetra", "sevruga", "beluga", "malossol"],
  match: ["caviar", "sturgeon roe", "osetra"],
  dek: "Salted sturgeon roe, and strictly nothing else — everything sold as salmon, trout or lumpfish caviar is roe under a borrowed name. Nearly all of it is now farmed, and the metal spoon rule is real chemistry rather than affectation.",
  anatomy: "Roe from sturgeon species, screened from the ovarian membrane, rinsed, salted and packed. The traditional names are species: beluga from Huso huso with the largest grains, osetra mid-sized and nutty, sevruga smallest and most intense. Wild sturgeon are critically endangered and beluga import has been banned in the US since 2005, so essentially all commercial caviar is now farmed, including excellent osetra from Europe, China and the US. Malossol means little salt — under about 5% — which is the premium grade and also the most perishable.",
  science: "Salt is the only preservative in traditional caviar, and the quantity is the central trade-off: more salt keeps longer and tastes of salt, less salt tastes of roe and spoils faster. Malossol grades at 3-5% need constant refrigeration and have a shelf life of weeks rather than months. The metal spoon convention is genuine — silver and other reactive metals catalyse oxidation of the delicate lipids in the roe, producing a detectable metallic off-flavour within seconds, which is why mother-of-pearl, bone or plastic is used. Stainless steel is largely inert and does much less harm than silver, but the tradition predates stainless.",
  methods: [
    { m: "Serve plain and cold",
      why: "It's finished and expensive and everything added to it competes.",
      how: "Straight from the tin over ice, with a mother-of-pearl or bone spoon. Blini, crème fraîche and nothing else if you want an accompaniment. Chopped egg and onion belong with cheaper roe." },
    { m: "On its own or against something neutral",
      why: "Fat and starch carry the salt and let the roe's flavour come through without adding anything of their own.",
      how: "On a warm blini, on a plain potato, on toast with unsalted butter, or on crème fraîche. The neutrality is the point." },
    { m: "As a finishing garnish, off the heat",
      why: "Heat bursts the grains and destroys both texture and flavour, so it goes on at the last possible moment.",
      how: "Spooned over scrambled eggs, oysters or a beurre blanc after plating. Never stirred in, never cooked." },
    { m: "Know the substitutes",
      why: "Salmon, trout, whitefish and lumpfish roe are excellent in their own right at a fraction of the price and are better suited to dishes.",
      how: "Salmon roe — ikura — has large bursting grains and works where sturgeon caviar would be wasted. Use it for anything mixed, dressed or cooked around." }
  ],
  avoid: {
    m: "Serving it with a metal spoon, and doing anything hot to it",
    why: "The mother-of-pearl spoon is not affectation. Silver and other reactive metals catalyse oxidation of the delicate lipids in sturgeon roe, and the resulting metallic taint is detectable within seconds — one of the few pieces of dining etiquette with a straightforward chemical basis. Bone, mother-of-pearl, horn or even plastic all work; stainless is largely inert and acceptable in a pinch. The larger error is heat. The grains are membranes holding liquid, and warmth bursts them and cooks the interior, turning a delicate pop into a grainy paste and driving off the volatile compounds that make it worth the price. If it's going onto something hot, it goes on at the table, at the last second, and never gets stirred."
  },
  buying: "Farmed osetra is the sensible purchase — wild sturgeon are critically endangered, beluga import to the US has been banned since 2005, and farmed quality is now genuinely high. Look for a CITES code on the tin, which is required and identifies species and origin. Grains should be distinct, glossy and separate rather than a mushy mass, and the smell should be clean and faintly of the sea, never fishy or sour. Malossol indicates low salt and higher quality with shorter shelf life. Buy the smallest tin you'll finish in a sitting; once opened it declines within a couple of days. Half an ounce to an ounce per person.",
  temps: "Serve very cold, 28-32°F, over ice — the tin sitting in a bowl of crushed ice. Never heated, never cooked. Unopened tins keep two to four weeks refrigerated depending on salt level; once opened, two to three days at most.",
  faq: [
    { q: "Is salmon roe caviar?",
      a: "Not strictly. Caviar traditionally and legally in many jurisdictions means sturgeon roe only; everything else — salmon, trout, whitefish, lumpfish, paddlefish — is roe and is often sold as caviar with a qualifier. That isn't a knock on them. Salmon roe is excellent, has a completely different large-bursting texture, and costs a fraction, which makes it the better choice for anything mixed or dressed." },
    { q: "Does the spoon really matter?",
      a: "Yes, and it's chemistry rather than ceremony. Silver and other reactive metals catalyse oxidation of the lipids in the roe and produce a metallic off-taste almost immediately. Mother-of-pearl, bone, horn and plastic are inert. Stainless steel is much less reactive than silver and is fine if that's what you have — the tradition dates from when silver was the default." },
    { q: "How long does an opened tin last?",
      a: "Two to three days refrigerated, and it's noticeably worse on day two. Low-salt malossol grades are the most perishable. This is why tins are sold small — buy what you'll finish in one sitting rather than saving it, because unlike most preserved products it doesn't hold." }
  ]
},

{
  slug: "bottarga",
  name: "Bottarga",
  animal: "seafood",
  shelf: "bottarga",
  aka: ["botargo", "karasumi", "avgotaracho", "poor man's caviar", "cured fish roe"],
  match: ["bottarga", "botargo", "karasumi"],
  dek: "The whole roe sac of grey mullet or tuna, salted and pressed and air-dried into a firm amber block. Grated over pasta it does what anchovy and parmesan do at once, and a small piece lasts months.",
  anatomy: "The intact ovary sac is removed carefully so the membrane stays unbroken, then salted, pressed flat under weights, and air-dried for weeks until firm and translucent. Grey mullet bottarga — bottarga di muggine, from Sardinia — is smaller, amber, and finer in flavour; tuna bottarga is larger, darker and more assertive. Japanese karasumi is the same product from mullet. Often sold coated in wax to slow drying. It slices and grates like a hard cheese and should be firm but not rock hard.",
  science: "Salting followed by pressing and air-drying removes water and drops water activity below the threshold for spoilage, the same principle as any dry cure. Along the way, enzymes break proteins down into free amino acids — glutamate above all — and the roe's lipids concentrate and oxidise slightly into aromatic compounds, which is where the deep savoury intensity comes from. The result is one of the highest natural concentrations of glutamate in any food, which is why a small quantity transforms a dish. Heat drives off the volatile aromatics and can make it bitter, so it goes on at the end.",
  methods: [
    { m: "Grate over pasta",
      why: "The classic Sardinian use, and the fat in the pasta carries the flavour while the heat is gentle enough not to scorch it.",
      how: "Spaghetti with olive oil, garlic and chili, tossed off the heat, then bottarga grated generously over at the table. Nothing else, and no cheese." },
    { m: "Shave thin as a starter",
      why: "Thin slices show the texture and the flavour is intense enough to stand alone.",
      how: "Sliced paper-thin with a sharp knife, with good olive oil, lemon and bread. Or on butter on toast." },
    { m: "Over vegetables and eggs",
      why: "It seasons anything mild, functioning as salt and savour in one.",
      how: "Grated over soft-boiled eggs, steamed vegetables, avocado, or a plain risotto at the very end." },
    { m: "Use it as you'd use anchovy",
      why: "Same role — a concentrated savoury seasoning — but cleaner and less fishy.",
      how: "Grated into a dressing, over a salad, or across roasted cauliflower. It dissolves into fat readily." }
  ],
  avoid: {
    m: "Cooking it, and treating it as a main ingredient",
    why: "Bottarga is a seasoning with an extraordinary concentration of glutamate, and both common mistakes come from treating it as something else. Applied to real heat, the volatile aromatic compounds developed during curing simply evaporate and what's left turns bitter and faintly acrid — so it goes over a finished dish off the heat, never into a pan and never under a grill. The quantity error follows from the same misunderstanding: it's intense and salty enough that a tablespoon grated over pasta for two is a generous amount, and treating it as a protein rather than a condiment produces something overwhelming and, given the price, expensive to get wrong. Also don't add cheese to a bottarga pasta; both are doing the same job and they fight."
  },
  buying: "Grey mullet bottarga is finer and more expensive; tuna is larger, stronger and cheaper. Sardinian and Sicilian products are the benchmark, and Japanese karasumi is the same thing at a higher price. It should be firm with a slight give — rock-hard means over-dried and it will be bitter — and amber to deep orange, translucent when sliced thin. Whole lobes keep better than pre-grated, which loses aroma within days. Wrapped tightly it keeps months in the fridge and can be frozen. A single small lobe seasons many meals, which makes the sticker price less alarming than it looks.",
  temps: "Never cooked. Grate or shave over finished dishes at the table. Store wrapped tightly in the fridge for several months, or frozen for longer. Bring to room temperature briefly before slicing so it doesn't crumble.",
  faq: [
    { q: "Mullet or tuna bottarga?",
      a: "Mullet is the finer product — smaller lobes, amber colour, more delicate and complex, and considerably more expensive. Tuna bottarga is larger, darker, saltier and more aggressively fishy, and it's a reasonable place to start given the price difference. For grating over pasta, mullet is worth it. For general seasoning use, tuna does the job." },
    { q: "Why is it called poor man's caviar?",
      a: "Historically because it was made from the roe of common fish by coastal communities who couldn't access sturgeon, and it kept without refrigeration. The name is now misleading — good mullet bottarga is expensive, though far less so than caviar, and it lasts months rather than days, which makes the cost per meal much lower." },
    { q: "Can I substitute anchovy?",
      a: "For the savoury function, partly — both are concentrated glutamate seasonings and both dissolve into fat. Anchovy is oilier, softer and fishier; bottarga is drier, cleaner and has a distinct roe character. In a pasta where bottarga is the point, anchovy makes a different and still good dish. In a dressing or a sauce where it's a background note, they're reasonably interchangeable." }
  ]
}

];

// game-offal.js — the five animals that had shelves and no cuts at all.
//
// veal, bison, goat-meat, venison-game and organ-meats have all been sitting in
// /hunt with makers on them and nothing in the cuts section pointing at them.
// Goat in particular is the most widely eaten red meat on earth and had no page.
//
// The lean-game entries share one theme and it is worth stating once: bison,
// venison and goat all carry a fraction of beef's intramuscular fat, so every
// beef timing and temperature is wrong for them by a wide margin. That is the
// failure mode in each case and it is why they get a reputation for being dry.
module.exports = [

{
  slug: "veal-shank",
  name: "Veal Shank",
  animal: "veal",
  shelf: "veal",
  aka: ["osso buco", "veal hind shank", "cross-cut shank", "ossobuco alla milanese"],
  match: ["veal shank", "osso buco", "ossobuco"],
  dek: "Cut crosswise through the leg bone so each round has a core of marrow at its centre — which is what osso buco means, bone with a hole. Very high collagen and almost no fat, so it is inedible fast and superb after two hours.",
  anatomy: "The shank is the lower leg, and cutting it across the bone rather than along it produces rounds an inch and a half to two inches thick, each with a ring of muscle around a central bone containing marrow. Hind shanks are meatier than fore and are the ones to ask for. Because the animal is young, the connective tissue is less developed than in a beef shin but still substantial, and the muscle is pale and fine-grained. A membrane wraps the outside of each round and will contract during cooking, cupping the disc and pushing the marrow out, which is why they get tied around the circumference with butcher's twine.",
  science: "Veal sits between beef and poultry in behaviour. It has beef's collagen structure — the shank is a hard-working limb — but a young animal's muscle has finer fibers and much less intramuscular fat, so it cannot survive being pushed as hard or as long. Collagen converts over roughly two hours between 160 and 190°F, and past about two and a half hours the lean fibers have given up everything they had and the meat goes stringy. That's a narrower total window than beef shin, which will happily take four hours. The marrow is the other component: it renders during the braise, enriching the liquid, and the traditional practice of digging it out with a small spoon is part of the dish rather than an afterthought.",
  methods: [
    { m: "Braise — osso buco",
      why: "The definitive treatment. Wet heat converts a heavy collagen load, the marrow enriches the sauce, and the lean muscle is protected from drying by the liquid.",
      how: "Tie each round around its circumference. Flour lightly, brown hard, then braise in white wine, stock and soffritto at 300-325°F, covered, liquid two-thirds up, for one and a half to two hours until a fork twists freely. Finish with gremolata — lemon zest, parsley and raw garlic, added at the table." },
    { m: "Pressure cook",
      why: "Higher temperature converts the collagen much faster, and on a lean cut with a narrow window that reduces the risk of drifting past tender into stringy.",
      how: "Brown first, then twenty-five to thirty minutes at high pressure, natural release. Reduce the liquid afterwards. Check at twenty-five; veal moves faster than beef." },
    { m: "Low oven, uncovered for the last stretch",
      why: "Removing the lid at the end reduces the liquid into a glaze and lets the tops of the rounds colour, which a fully covered braise never does.",
      how: "Covered at 300°F for ninety minutes, then uncovered for the final twenty to thirty, basting twice." },
    { m: "Sous vide then reduce",
      why: "Holds the shank exactly in the conversion band without ever exceeding it, which suits a cut that goes stringy if pushed.",
      how: "158°F for eighteen to twenty-four hours, then the bag liquid reduced hard into a sauce and the shanks browned briefly under a broiler." }
  ],
  avoid: {
    m: "Cooking it like beef shin — four hours, or 200°F+",
    why: "Veal shank and beef shin look identical on the counter and take very different treatment, which is the mistake that turns an expensive cut into a disappointing one. Beef shin comes from a mature animal with dense collagen and enough intramuscular fat to survive four hours at 200°F, emerging rich and gelatinous. Veal is a young animal: finer fibers, far less fat, and less collagen in absolute terms even though the proportion is high. Give it beef timing and the collagen finishes converting after about two hours and then there is nothing left to protect the meat — the lean fibers, which have already expelled their water, simply keep breaking down, and what comes out is dry, stringy and falling into shreds rather than tender. Check at ninety minutes and stop as soon as a fork twists without resistance."
  },
  buying: "Ask for hind shank, cut an inch and a half to two inches thick — thinner rounds dry out and lose their marrow. Each round should have a clear ring of marrow at the centre and pale pink, fine-grained meat. Ask the butcher to tie them, or do it yourself with a single loop of twine around the circumference of each. Veal is expensive and the sourcing question is real: rose or pasture-raised veal from animals raised with their mothers is available from good butchers and is what most people mean when they want to buy veal without the welfare objection. One round per person, sometimes two for large appetites.",
  temps: "195-205°F internal, but time matters more here than the number — one and a half to two hours at 300-325°F, checked from ninety minutes. Done when a fork twists with no resistance. Past two and a half hours it goes stringy.",
  faq: [
    { q: "What is gremolata for and can I skip it?",
      a: "It's the counterweight, and skipping it changes the dish substantially. Osso buco is rich, unctuous and fatty from marrow and gelatin, and gremolata — raw garlic, lemon zest and parsley chopped together — cuts straight through that with acid and sharpness. It goes on at the table, never cooked in, because the zest oils fade within minutes of heat. It's the cheapest component and it does the most work." },
    { q: "Why tie the shanks?",
      a: "The membrane around the outside of each round contracts as it heats and pulls the disc into a cup shape, which pushes the marrow out of the bone and into the braising liquid and makes the rounds fall apart. A single loop of twine around the circumference holds them flat and intact. Cut it off before serving." },
    { q: "Can I use beef shin instead?",
      a: "Yes, and it's cheaper and very good — but it's a different dish. Beef shin needs three to four hours rather than two, has a much stronger flavour, and produces a darker, heavier sauce. Traditional osso buco alla milanese is pale, made with white wine, and depends on veal's mildness. If you're substituting, extend the time considerably and expect something closer to a beef stew." }
  ]
},

{
  slug: "bison",
  name: "Bison",
  animal: "bison",
  shelf: "bison",
  aka: ["buffalo", "American bison", "bison ribeye", "ground bison"],
  match: ["bison", "buffalo meat"],
  dek: "Beef's leaner cousin — most cuts run a quarter to a third of beef's fat — which means every timing you know is roughly 30% too long and every target temperature is about ten degrees too high.",
  anatomy: "Bison is butchered into the same primals as beef with the same cut names: ribeye, strip, tenderloin, chuck, brisket, short rib. The animal is larger but leaner, with fat concentrated as an external cap and around the organs rather than distributed as marbling through the muscle. Where a Choice beef ribeye might show heavy intramuscular flecking, a bison ribeye of the same size shows very little. Because bison is almost always grass-finished and slaughtered older than commercial beef, the muscle fibers are also slightly coarser and the colour deeper — a darker red from higher myoglobin.",
  science: "The fat difference drives everything. Intramuscular fat does three things in beef: it melts and lubricates the fibers, it carries fat-soluble flavour compounds, and it acts as a thermal buffer that slows the interior temperature climb. Bison has a fraction of it, so it cooks measurably faster — commonly a third quicker at the same oven or grill temperature — and it has almost no protection past the point where the fibers contract. A bison steak at 145°F is where a beef steak is at 160°F in terms of dryness. It also means the flavour is more directly muscular and mineral, less sweet and buttery, which people describe as cleaner or as gamey depending on what they were expecting.",
  methods: [
    { m: "Steaks: hot and fast, pulled early",
      why: "A lean steak needs its crust built quickly and its interior stopped well short of where beef would be, because there's no fat buffering the descent into dry.",
      how: "Dry-brine an hour ahead. Screaming hot cast iron or grill, two to three minutes a side for a one-inch steak, pulled at 120-125°F for medium-rare. Rest ten minutes. Butter in the pan at the end substitutes for the fat the meat lacks." },
    { m: "Roasts: low and slow, or braise",
      why: "The lean muscles benefit enormously from a gentle even climb, and the collagen-heavy cuts want the same wet treatment as beef.",
      how: "Reverse sear roasts at 225-250°F to 120°F then sear. Braise chuck and shank exactly as you would beef but check forty-five minutes earlier — the collagen converts on a similar schedule but the lean fibers give out sooner." },
    { m: "Ground: add fat or accept a dry burger",
      why: "Ground bison typically runs 90/10 or leaner against beef's 80/20, and a burger at 10% fat is dry regardless of technique.",
      how: "Either mix in ground beef fat, bacon or butter to bring it toward 80/20, or cook it as a smash burger where the thinness and hard crust compensate. Pull at 150-155°F, not 160°F." },
    { m: "Sous vide",
      why: "Removes the narrow window entirely on a meat whose main risk is overshooting by a few degrees.",
      how: "128-130°F for one to three hours, then dried and seared hard for sixty seconds a side." }
  ],
  avoid: {
    m: "Using beef timing and beef temperatures",
    why: "This is the entire reason bison has a reputation for being tough and dry, and it's a substitution error rather than a property of the meat. Bison carries roughly a quarter to a third of beef's intramuscular fat, and that fat is what makes beef forgiving — it buffers the temperature climb, so a beef steak takes longer to reach a given internal temperature, and it lubricates the fibers, so beef at 140°F still eats moist. Neither applies here. A bison steak cooked to a beef recipe's timing will land ten to fifteen degrees past target, and at that temperature there's no fat to hide it. The correction is straightforward: reduce cooking time by about a third, drop the target temperature roughly ten degrees, and pull steaks at 120-125°F. Cooked to those numbers bison is tender and not remotely gamey."
  },
  buying: "Sold at good butchers, direct from ranches and increasingly in supermarkets. Almost all of it is grass-fed and grass-finished, which is why it's lean — there is very little grain-finished bison. Look for deep red, almost purple meat with a fine grain; the colour is normal and not a sign of age. Steaks should be cut thick, at least an inch and preferably an inch and a half, since thin lean steaks have no margin at all. Ground bison is widely available and is the easiest entry point, but check the fat percentage and plan to supplement it. Expect to pay meaningfully more than beef per pound.",
  temps: "Steaks: 120-125°F pulled for medium-rare, resting to 130°F. Roasts: 120°F pulled. Ground: 150-155°F. Braises: same 195-205°F as beef but check earlier. Every one of these is roughly ten degrees below the beef equivalent.",
  faq: [
    { q: "Does bison taste gamey?",
      a: "Not in the way people expect. It's leaner and more mineral than grain-fed beef, with a cleaner and slightly sweeter finish, but it doesn't have the strong flavour of true game like venison. Most complaints about gaminess turn out to be complaints about texture from overcooking, since dry lean meat reads as strong-flavoured. Cooked to 125°F it tastes like a very good, lean beef." },
    { q: "Is it actually healthier?",
      a: "It's leaner — typically two to three times less fat than comparable beef cuts, with correspondingly fewer calories, and being grass-finished it has a better omega-3 to omega-6 ratio. Whether that constitutes healthier depends on what you're comparing and what you care about. It's a real compositional difference, not marketing, and it's also exactly why it cooks differently." },
    { q: "Can I substitute it one-for-one in beef recipes?",
      a: "In ingredient terms yes, in timing terms no. Use the same cuts and the same methods, but reduce the cooking time by roughly a third and the target internal temperature by about ten degrees. For ground applications, add fat. Braises and stews translate most easily since the liquid protects the meat; steaks and roasts need the most adjustment." }
  ]
},

{
  slug: "goat",
  name: "Goat",
  animal: "goat",
  shelf: "goat-meat",
  aka: ["chevon", "cabrito", "mutton (South Asian)", "kid goat"],
  match: ["goat", "chevon", "cabrito", "goat curry"],
  dek: "The most widely eaten red meat on earth and nearly absent from American butcher counters. Lean, collagen-heavy and strongly flavoured, it belongs in a pot for two or three hours — and in South Asian cooking, the word mutton on a menu usually means goat.",
  anatomy: "Goat is broken down like lamb into shoulder, leg, loin, ribs and shank, but the proportions are different: the animal is smaller, leaner and more muscular, with far less fat cover and almost no marbling. Kid goat, or cabrito, is under a year old and much more tender — suitable for roasting whole or grilling. Older goat, sold as chevon, has denser muscle and heavy connective tissue and is a braising animal exclusively. The bone-in shoulder and leg are the workhorses. What fat there is sits as a thin external layer, and unlike lamb the fat carries much less of the flavour, so trimming it changes the dish far less.",
  science: "Very low intramuscular fat — often under 3%, lower than skinless chicken breast — combined with a high collagen load from an active animal. That combination points in one direction: sustained wet heat for two to three hours, where the connective tissue converts to gelatin and the braising liquid substitutes for the fat the meat doesn't have. Dry heat on an older goat is a losing proposition, because the surface dehydrates long before the interior collagen converts. The flavour is stronger than lamb but less fatty, and since the compounds people find assertive in lamb concentrate in fat, goat is often described as cleaner despite being more intensely meaty.",
  methods: [
    { m: "Curry or stew, bone-in",
      why: "The dominant global preparation for good reason — long wet heat converts the collagen, and the bone contributes gelatin and flavour to a sauce that carries the whole dish.",
      how: "Bone-in shoulder or leg in two-inch pieces. Brown hard, then simmer with aromatics and spice for two to three hours until the meat pulls from the bone. Jamaican curry goat, Nigerian goat pepper soup and North Indian mutton curry are all the same structure." },
    { m: "Birria or barbacoa",
      why: "Chile-based braises suit goat's assertive flavour, and the long steam converts everything.",
      how: "Marinate in a chile paste, then braise covered at 300°F for three hours or steam over liquid in a sealed pot. Shred and serve with the consommé — the braising liquid is half the dish." },
    { m: "Cabrito on a spit",
      why: "Young goat has enough tenderness and just enough fat to take dry heat, which older goat does not.",
      how: "Whole kid, under twenty pounds, over indirect coals for three to four hours, basted constantly with brine or fat. The constant basting is doing the work the fat can't." },
    { m: "Pressure cook",
      why: "Cuts a three-hour braise to under an hour, which makes goat a weeknight proposition rather than a Sunday one.",
      how: "Brown, then thirty-five to forty-five minutes at high pressure with the spice base and just enough liquid. Natural release. Reduce afterwards." }
  ],
  avoid: {
    m: "Grilling or roasting anything but young kid",
    why: "Goat gets bought with lamb in mind and treated the same way, and adult goat cannot take it. Lamb has meaningful fat cover and marbling that protect it under dry heat; adult goat has almost none — under 3% intramuscular fat — alongside a collagen load closer to a working beef cut. Under a grill or in a hot oven the surface dries out and the exterior toughens long before the connective tissue inside has spent the hours it needs above 160°F to convert to gelatin. The result is uniformly tough, and it's the single reason people try goat once and conclude they don't like it. Young kid, under a year, is the exception and can be roasted or grilled. Everything else goes in a pot with liquid for two to three hours, which is how most of the world cooks it."
  },
  buying: "Halal butchers, Caribbean and West African groceries, South Asian markets and Mexican carnicerías all carry it reliably; conventional American supermarkets rarely do. Ask for bone-in shoulder or leg cut into curry pieces — most shops will do it and the bone matters for the sauce. Specify young if you want to grill; cabrito or kid is a different product from adult chevon. Frozen is common and fine given the long cook. It's usually inexpensive relative to lamb. If a South Asian recipe calls for mutton, it almost certainly means goat rather than old sheep, which is worth knowing before you shop.",
  temps: "195-205°F internal for braises, with fork-tenderness as the real test — two to three hours at 300-325°F, or thirty-five to forty-five minutes under pressure. Young kid roasted whole runs to about 160-170°F in the thickest part.",
  faq: [
    { q: "Does 'mutton' mean goat or sheep?",
      a: "Depends entirely on where the recipe is from. In Britain, Australia and the US, mutton means meat from an adult sheep. In India, Pakistan, Bangladesh and much of the Caribbean, mutton on a menu or in a recipe means goat. So an Indian mutton curry is a goat curry, and cooking it with sheep mutton gives a much fattier, differently flavoured dish. Check the cuisine before you buy." },
    { q: "Is goat gamey?",
      a: "It's more strongly flavoured than lamb but in a different register — meatier and more mineral rather than fatty and sweet. Much of what people call gaminess in lamb comes from branched-chain fatty acids concentrated in fat, and goat has very little fat, so it reads as cleaner to many people despite tasting more intensely of meat. Long braising with spice, which is how it's cooked nearly everywhere, mellows it considerably." },
    { q: "Why is it so hard to find in American supermarkets?",
      a: "Distribution and habit rather than demand. Goat is the most widely consumed red meat globally and consumption in the US is growing, largely driven by immigrant communities, but the mainstream retail supply chain is built around beef, pork and chicken. Halal and ethnic markets have supplied it continuously and remain the reliable source, usually at a lower price than lamb." }
  ]
},

{
  slug: "venison",
  name: "Venison",
  animal: "venison",
  shelf: "venison-game",
  aka: ["deer", "elk", "backstrap", "venison loin", "red deer"],
  match: ["venison", "deer meat", "backstrap", "elk"],
  dek: "The leanest red meat commonly eaten — often under 2% fat — which means it is done at 125°F and ruined at 145°F. Nearly everything people call gamey is a handling problem or an overcooking problem rather than a property of the animal.",
  anatomy: "Venison covers deer and often elk, sold either farmed or wild. The backstrap is the loin running along the spine, the most tender cut and the equivalent of a beef strip loin. The tenderloins sit beneath the spine, small and even more tender. Shoulders and shanks are heavily worked with substantial collagen and belong in a braise. There is essentially no intramuscular fat anywhere on the animal — what fat exists is a hard external layer with a waxy texture and a strong flavour that most butchers trim off entirely. Silverskin is abundant and tough and must be removed from any cut being cooked quickly.",
  science: "Under 2% intramuscular fat, against 8-15% in a marbled beef steak. That means no thermal buffering and no lubrication, so venison reaches temperature fast and has nothing to disguise fiber contraction — the difference between 125°F and 140°F is the difference between tender and liver-textured. Flavour intensity is largely a function of diet and handling rather than species: a wild deer that fed on sage or acorns tastes markedly different from a farmed one on grass, and an animal that ran a long distance before being taken builds lactic acid and adrenaline into the muscle, which is a large part of what people mean by gamey. Field dressing speed matters more than any culinary technique.",
  methods: [
    { m: "Backstrap: hard sear, pulled at 125°F",
      why: "The tender cuts want a fast crust and a rare centre — there is no fat to render, so extended cooking has nothing to gain.",
      how: "Trim all silverskin. Dry-brine an hour. Very hot pan with a high-smoke-point oil, two minutes a side for a two-inch medallion, pulled at 120-125°F. Finish with butter off the heat. Rest ten minutes." },
    { m: "Shoulder and shank: braise",
      why: "The working cuts have real collagen and no fat, so they need the same wet, sustained heat as beef shin and they need the liquid even more.",
      how: "Brown, then 300°F covered with liquid two-thirds up, two and a half to three hours to fork-tender. Red wine, juniper and bacon are traditional and the bacon is doing real work by adding the fat the meat lacks." },
    { m: "Grind with added fat",
      why: "Ground venison at 2% fat makes a dry, crumbly burger regardless of technique, and adding fat is standard practice rather than a compromise.",
      how: "Blend with 15-20% pork fatback or beef fat by weight. Keep everything at 32-35°F while grinding so the fat shears cleanly. Cook to 160°F as with any ground meat." },
    { m: "Sous vide",
      why: "The narrowest window of any red meat, and a water bath eliminates it entirely.",
      how: "129-131°F for two to four hours for loin cuts, then dried and seared hard for forty-five seconds a side. Shanks at 165°F for twenty-four hours." }
  ],
  avoid: {
    m: "Cooking it past medium-rare, and blaming the result on the animal",
    why: "Venison has under 2% intramuscular fat where a marbled beef steak has eight to fifteen. Every function that fat performs in beef is absent: nothing buffers the temperature climb, nothing lubricates the fibers, and nothing masks the mineral, iron-forward flavour once the muscle contracts and expels its water. At 140°F venison is already firm and livery; at 150°F it is dry and unpleasantly strong, and that strength is exactly what people describe as gaminess. Pulled at 120-125°F the same cut is tender, mild and closer to a very good beef fillet. This is why hunters who cook their own meat rarely complain about gaminess and people served overcooked venison at a restaurant frequently do. The other half of it is handling — an animal cooled quickly and aged properly tastes clean, and one left warm does not."
  },
  buying: "Farmed venison is widely available, consistent, milder and legal to sell; wild venison generally cannot be sold commercially in the US and comes from hunters. New Zealand farmed red deer is the most common import and is excellent. Look for deep, almost purple-red meat with a fine grain and no visible fat marbling — there won't be any. Ask for the silverskin removed or plan to do it yourself, since it's abundant and it does not soften. Backstrap and tenderloin for fast cooking, shoulder and shank for braises, and expect to add fat to anything ground. If someone gives you wild venison, ask how quickly it was field-dressed and cooled; that answer predicts the flavour better than the species does.",
  temps: "Loin and backstrap: 120-125°F pulled, resting to 128-130°F. Do not exceed 130°F. Braising cuts: 195-205°F over two and a half to three hours. Ground with added fat: 160°F. Sous vide loin at 129-131°F.",
  faq: [
    { q: "Why does venison taste gamey and can I fix it?",
      a: "Three causes, in order of importance. Overcooking, which concentrates the mineral flavour and is by far the most common. Handling — an animal that was stressed before death or cooled slowly develops strong flavours in the muscle. And diet, since a deer feeding on sage tastes different from one on clover. Soaking in milk or buttermilk is the traditional remedy and does modestly reduce perceived intensity. Cooking it to 125°F does much more." },
    { q: "Do I need to add fat?",
      a: "For anything ground, yes — 15-20% pork or beef fat, or you get a dry crumbly result no seasoning fixes. For whole cuts, you don't add fat so much as cook around its absence: pull early, rest properly, and finish with butter or a fat-based sauce. Barding a roast by wrapping it in bacon or caul fat is the traditional approach and works well." },
    { q: "Is elk different from deer?",
      a: "Milder and slightly less lean, with a coarser grain and larger cuts, but it cooks the same way and to the same temperatures. Both are sold as venison in most contexts. Moose is leaner again and stronger. In every case the rules are identical: remove silverskin, pull the tender cuts at 125°F, braise the working cuts, add fat to anything ground." }
  ]
},

{
  slug: "beef-liver",
  name: "Beef Liver",
  animal: "beef",
  shelf: "organ-meats",
  aka: ["calf liver", "veal liver", "fegato", "liver and onions"],
  match: ["liver", "beef liver", "calf liver", "liver and onions"],
  dek: "Cheap, nutrient-dense and almost always ruined the same way — cooked through until it turns grainy and metallic. Two minutes a side and a pink centre is a completely different food from the grey slab most people remember.",
  anatomy: "Liver is an organ rather than a muscle, and it has no fibers to speak of — the texture comes from densely packed cells held in a fine membrane, which is why it's smooth rather than grained and why it turns to paste rather than shreds when overworked. A thin outer membrane should be peeled off before cooking, since it contracts and curls the slice. Calf liver, from a young animal, is paler, milder and more tender and costs several times more than beef liver from a mature animal, which is darker, denser and much stronger. Liver should be sliced thin — half an inch at most — since thickness makes the narrow doneness window impossible to hit.",
  science: "The metallic, mineral flavour people object to comes largely from iron content and from the organ's function of processing metabolic waste, and it intensifies sharply with cooking. Liver proteins set fast and low, and past about 145°F the cells rupture and release the compounds that read as bitter and chalky, while the texture goes from creamy to grainy in the same few degrees. Soaking in milk is the traditional mitigation and it does work — the casein binds some of the compounds responsible for bitterness and draws out residual blood — though thirty minutes to two hours is sufficient and longer adds nothing. The nutritional density is genuinely exceptional: a single serving carries several times the daily requirement of vitamin A and B12.",
  methods: [
    { m: "Pan sear, hot and brief",
      why: "The only fast method, and the window is measured in seconds — high heat builds a crust before the interior passes the point where it turns grainy.",
      how: "Peel the membrane, slice half an inch, soak in milk thirty minutes, dry thoroughly. Dredge in seasoned flour. Very hot pan with butter and oil, ninety seconds to two minutes a side. It should be browned outside and rosy inside. Rest two minutes." },
    { m: "Liver and onions, done properly",
      why: "The onions want twenty-five minutes and the liver wants three, so cooking them together is the reason the classic dish has a bad reputation.",
      how: "Caramelize the onions slowly and completely first, then remove them. Sear the liver in the same pan for two minutes a side, return the onions, deglaze with vinegar or stock, and serve immediately." },
    { m: "Grill on skewers",
      why: "High direct heat and small pieces suit an ingredient with a short window, and the char masks the mineral edge.",
      how: "Cubed, marinated briefly in oil, garlic and lemon, threaded and grilled ninety seconds a side over very hot coals. This is Turkish ciğer and it is the best introduction to liver for a sceptic." },
    { m: "Pâté or parfait",
      why: "Blending removes the texture question entirely, and the added fat and acid buffer the mineral flavour more effectively than any other approach.",
      how: "Sear briefly, still pink, then blend with a large quantity of butter, a splash of brandy and shallots. Pass through a sieve. The pinkness matters — overcooked liver makes grey, grainy pâté." }
  ],
  avoid: {
    m: "Cooking it through until no pink remains",
    why: "This is what the dish's reputation is built on, and it is a single, correctable error. Liver has no muscle fibers and no collagen — its structure is densely packed cells in a fine membrane — and those cells rupture at around 145-150°F, releasing the iron-rich compounds that taste bitter and metallic while the texture collapses from creamy into grainy and chalky. There is no recovery point beyond it, no equivalent of pushing through to a braise, because there's no connective tissue to convert. The whole margin is between about 130 and 140°F, which on a half-inch slice is roughly ninety seconds to two minutes a side. A properly cooked slice is browned outside and distinctly rosy in the middle, and people who are certain they hate liver have very often only eaten it grey."
  },
  buying: "Calf liver is milder, paler, more tender and several times the price; beef liver from a mature animal is dark, strong and very cheap. For someone new to it, buy calf. Ask for it sliced no more than half an inch thick and check that the outer membrane has been removed, since it curls the slice in the pan. It should be glossy and deep red-brown with no grey patches or dryness at the edges, and it should smell clean and metallic rather than sour. Liver degrades faster than muscle meat, so buy it fresh and cook it within a day. Grass-fed liver from a good butcher is worth seeking out and is still inexpensive.",
  temps: "130-140°F internal, which on a half-inch slice means ninety seconds to two minutes a side in a hot pan. Browned outside, rosy inside. Past 145°F the texture turns grainy and the flavour turns bitter, and it does not come back.",
  faq: [
    { q: "Does soaking in milk actually do anything?",
      a: "Yes, modestly. Casein in the milk binds some of the compounds responsible for the bitter, metallic edge, and the soak draws out residual blood. Thirty minutes to two hours is enough and longer adds nothing. It's a real improvement but a smaller one than not overcooking — a slice cooked to 135°F without soaking tastes far better than one soaked overnight and then cooked through." },
    { q: "Calf liver or beef liver?",
      a: "Calf liver is from a young animal: paler, more delicate, noticeably milder and more tender, and it costs several times more. Beef liver from a mature animal is dark, dense and strongly flavoured, and very cheap. If you're cooking for someone unconvinced, buy calf. If you're making pâté where butter and brandy will buffer it, beef liver is the sensible economy." },
    { q: "Is liver actually as nutritious as people say?",
      a: "It's among the most nutrient-dense foods there is — a single serving provides several times the daily requirement of vitamin B12 and preformed vitamin A, plus substantial iron, folate and copper. The vitamin A content is high enough that it comes with a genuine caution: very large or frequent servings can accumulate toward toxicity, and pregnant women are generally advised to limit it for that reason. Once a week or so is the usual advice." }
  ]
},

{
  slug: "bone-marrow",
  name: "Bone Marrow",
  animal: "beef",
  shelf: "organ-meats",
  aka: ["marrow bones", "canoe cut", "os à moelle", "beef marrow"],
  match: ["bone marrow", "marrow bones", "roasted marrow"],
  dek: "Roasted in the bone and spread on toast, or dropped into stock where it does more for body than anything else you can add. Twenty minutes at 450°F and it is right; twenty-five and it has melted into the pan.",
  anatomy: "Marrow is the soft tissue inside the cavity of long bones — femur and tibia mostly — and it's almost entirely fat, around 85-95%, with some blood-forming tissue. Butchers cut it two ways. Canoe cut splits the bone lengthwise, exposing a long trough of marrow that roasts evenly and is easiest to eat. Cross-cut gives short cylinders with a round of marrow in the centre, which look better on a plate and hold their marrow less well. Femur bones give the most marrow; the smaller bones from the lower leg give less but have more collagen in the surrounding tissue, which suits stock better than roasting.",
  science: "Being nearly all fat, marrow has no protein structure to hold it together once it warms. It softens around 115°F, is at its best around 145-150°F where it's molten but still occupying the bone, and past roughly 160°F it simply renders out and runs into the pan. That's the entire cooking problem, and it's why the difference between perfect and gone is a few minutes. Soaking the bones in salted water for twelve to twenty-four hours before roasting draws out residual blood and prevents the grey, slightly livery appearance untreated marrow can develop. In stock, the same fat content is why marrow bones give a richer, rounder result than knuckle bones alone — though knuckles contribute more gelatin.",
  methods: [
    { m: "Roast canoe-cut and serve on toast",
      why: "The standard restaurant preparation. Direct high heat browns the surface while the interior turns molten, and the split bone keeps it contained.",
      how: "Soak twelve to twenty-four hours in salted water, changing it twice. Dry, salt, and roast marrow-side up at 450°F for fifteen to twenty minutes until bubbling and browned at the edges but still holding shape. Serve with toast, flaky salt and a sharp parsley-caper-shallot salad." },
    { m: "In stock",
      why: "Marrow contributes fat and body that lean bones can't, giving a stock a rounder mouthfeel.",
      how: "Roast the bones first at 450°F for thirty minutes, then into the stock pot with knuckle bones for gelatin. Six hours at a bare simmer. Skim the fat after chilling." },
    { m: "Whipped or compound marrow butter",
      why: "Rendered marrow sets soft and spreadable and carries flavour like butter, but with a deeper beef character.",
      how: "Roast and scoop the marrow, then beat it with softened butter, roasted garlic, herbs and salt. Roll in parchment and chill. A disc melted over a steak is the best use for it." },
    { m: "Stirred into a braise or risotto",
      why: "It dissolves completely and enriches without announcing itself, which is the traditional Milanese use.",
      how: "Scoop the raw marrow and add it to the soffritto at the start of a risotto alla milanese, or stir it into a braise in the last twenty minutes." }
  ],
  avoid: {
    m: "Roasting it past the point where it holds shape",
    why: "Marrow is 85-95% fat with essentially no protein structure holding it together, which means it does not have a doneness plateau the way meat does — it softens, becomes molten, and then simply liquefies and runs out of the bone into the pan. Past about 160°F there is nothing left to serve, and the difference between a bone full of glossy, spoonable marrow and an empty bone in a puddle of grease is roughly five minutes at 450°F. Watch it rather than timing it: it's ready when the surface is browned and bubbling at the edges and the centre has visibly softened but the marrow still fills the bone. Cross-cut bones lose it faster than canoe-cut, since the marrow has two open ends to escape from and nothing holding it in."
  },
  buying: "Ask specifically for marrow bones and specify canoe cut for roasting — most butchers have a band saw and will do it, but not if you don't ask, and cross-cut rounds are what you'll get by default. Femur bones give the most marrow. They should look pale pink to white rather than grey or yellowed. It is one of the cheapest things in the shop, often a few dollars a pound, since the demand is nothing like the demand for muscle. Ask for them to be cut into four to six inch lengths. Two to three pieces per person as a starter. Buy extra for stock; they freeze indefinitely.",
  temps: "Roast at 450°F for fifteen to twenty minutes, judged by eye rather than by probe — browned and bubbling at the edges, softened through, still filling the bone. Internal is around 145-150°F at that point. Past 160°F it renders out entirely.",
  faq: [
    { q: "Do I need to soak the bones?",
      a: "Not strictly, but it makes a visible difference. Twelve to twenty-four hours in cold salted water, changed a couple of times, draws out residual blood and gives marrow that roasts pale and clean rather than greyish and slightly livery. It's how restaurants prepare it. If you skip it, the marrow tastes fine but doesn't look as good." },
    { q: "Canoe cut or cross cut?",
      a: "Canoe for roasting — split lengthwise, the marrow is exposed in a long trough that browns evenly and stays put, and it's far easier to scoop out. Cross-cut rounds look more dramatic standing up on a plate but lose their marrow more readily since it can run out both ends, and they're harder to eat. For stock either works." },
    { q: "Is it too rich?",
      a: "It's essentially pure fat, so a little goes a long way — two or three pieces per person as a starter, not a main. What makes it work is the accompaniment: acid and sharpness cut it, which is why the classic service is with toast, flaky salt and a parsley-caper-shallot salad dressed hard with lemon. Served alone it's overwhelming; served with that, it's balanced." }
  ]
}

];

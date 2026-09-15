module.exports = [
  {
    slug: "eggs-benedict",
    title: "Eggs Benedict, and where to source it",
    cuisine: "American",
    category: "Breakfast",
    kw: "eggs benedict, poached eggs, hollandaise, canadian bacon, brunch",
    iso: ["PT20M", "PT15M", "PT35M"],
    prep: "20 min",
    cook: "15 min",
    makes: "4 servings",
    desc: "Poached eggs and ham stacked on toasted muffins under a blanket of warm hollandaise.",
    dek: "Benedict is a sauce dish held up by an egg, so buy fresh eggs with tight whites and real cultured butter for the hollandaise. The whole thing lives or dies on temperature control: keep the hollandaise between warm bathwater and body heat, and it will never break.",
    card: "Poached eggs and ham on toasted muffins, cloaked in warm hollandaise.",
    ing: [
      { n: "Fresh eggs", q: "Eight total: four to poach, four yolks for the sauce; the fresher the white, the tighter the poach.", amt: "8", shelf: "eggs" },
      { n: "English muffins", q: "Fork-split so the craggy interior catches butter and toasts crisp.", amt: "4", shelf: "bread" },
      { n: "Canadian bacon or ham", q: "Thick-cut, seared just until the edges curl and brown.", amt: "8 slices", shelf: "bacon" },
      { n: "Cultured butter", q: "Melted and clarified for the hollandaise; the extra fat carries the yolk emulsion.", amt: "1 cup", shelf: "butter" },
      { n: "Lemon", q: "Fresh juice to cut and stabilize the sauce; bottled tastes flat.", amt: "1", shelf: "citrus" },
      { n: "White vinegar", q: "A splash in the poaching water to set the whites fast.", amt: "1 tbsp", local: true }
    ],
    steps: [
      { b: "Poach", t: "Bring water to a bare 180F with a splash of vinegar, swirl a vortex, and slide each egg into the center. Cook three minutes for a runny yolk, then lift onto a towel." },
      { b: "Hollandaise", t: "Whisk yolks and lemon juice over a double boiler until ribboning, then stream in warm clarified butter drop by drop. Keep it below 140F so the yolks thicken but never scramble." },
      { b: "Assemble", t: "Toast the muffins, sear the ham, and stack muffin, ham, egg. Spoon hollandaise over so it slides down the sides." }
    ],
    tools: ["Slotted spoon|slotted spoon stainless", "Fine whisk|balloon whisk kitchen"]
  },
  {
    slug: "breakfast-sandwich",
    title: "Breakfast Sandwich, and where to source it",
    cuisine: "American",
    category: "Breakfast",
    kw: "breakfast sandwich, bagel egg cheese, bacon, sausage, morning",
    iso: ["PT10M", "PT10M", "PT20M"],
    prep: "10 min",
    cook: "10 min",
    makes: "2 servings",
    desc: "Folded egg, melted cheese, and crisp meat on a toasted split bagel.",
    dek: "A breakfast sandwich is only as good as its four parts, so start with a real seeded bagel and good sharp cheese instead of the plastic-wrapped stuff. The trick is folding the egg into a tidy square in a low-slow pan so it stacks flat and stays custardy.",
    card: "Folded egg, sharp cheese, and crisp meat on a toasted bagel.",
    ing: [
      { n: "Eggs", q: "Two per sandwich, beaten with a pinch of salt for a tender fold.", amt: "4", shelf: "eggs" },
      { n: "Bagels", q: "Split and toasted cut-side down until the ring is crisp.", amt: "2", shelf: "bagels" },
      { n: "Sharp cheese", q: "A melting cheese laid on the hot egg so it slumps before the sandwich closes.", amt: "2 slices", shelf: "cheese" },
      { n: "Bacon or sausage", q: "Bacon crisped flat, or a sausage patty smashed thin and browned.", amt: "4 slices", shelf: "bacon" },
      { n: "Butter", q: "For the pan and to swipe on the toasted bagel.", amt: "1 tbsp", shelf: "butter" },
      { n: "Fresh chives", q: "Snipped over the egg for a clean bite.", amt: "to taste", local: true }
    ],
    steps: [
      { b: "Crisp the meat", t: "Render bacon slowly until flat and crisp, or smash a sausage ball into a thin patty and brown both sides. Drain on a towel." },
      { b: "Fold the egg", t: "Beat the eggs and pour into a buttered low pan. As they set, fold the edges to the center into a square roughly the size of the bagel, then top with cheese to melt." },
      { b: "Build", t: "Butter the toasted bagel, stack meat and folded egg, close, and press for ten seconds so it settles." }
    ],
    tools: ["Nonstick skillet|nonstick skillet 8 inch", "Fish spatula|fish spatula thin"]
  },
  {
    slug: "hash-browns",
    title: "Hash Browns, and where to source it",
    cuisine: "American",
    category: "Breakfast",
    kw: "hash browns, shredded potatoes, crispy, diner breakfast",
    iso: ["PT15M", "PT12M", "PT27M"],
    prep: "15 min",
    cook: "12 min",
    makes: "4 servings",
    desc: "Shredded potatoes pressed into a golden, lacy crust in butter.",
    dek: "Starchy potatoes are the whole game, so reach for good russets or a firm all-purpose spud with real flavor. Before the shreds ever hit the pan, wring them bone-dry in a clean towel. That squeezed-out water is the line between a crisp lacy crust and a steamy mush.",
    card: "Shredded potatoes pressed into a lacy golden crust.",
    ing: [
      { n: "Russet potatoes", q: "Peeled and shredded on the large holes; their starch is what binds the crust.", amt: "1.5 lb", shelf: "potatoes" },
      { n: "Butter", q: "A generous amount so the shreds fry rather than steam.", amt: "3 tbsp", shelf: "butter" },
      { n: "Kosher salt", q: "Salted only after squeezing, so it draws no water back into the pan.", amt: "to taste", local: true }
    ],
    steps: [
      { b: "Dry the shreds", t: "Shred the potatoes and squeeze them hard in a clean towel, wringing out every drop. Wet potato steams and never crisps." },
      { b: "Press and set", t: "Melt butter in a hot skillet, spread the shreds in an even quarter-inch layer, and press flat. Leave it undisturbed five minutes so a crust forms before you flip." },
      { b: "Flip once", t: "Slide the whole cake onto a plate, invert it back into the pan, and cook the second side until deep gold. One flip only." }
    ],
    tools: ["Box grater|box grater stainless", "Cast iron skillet|cast iron skillet 10 inch"]
  },
  {
    slug: "dutch-baby",
    title: "Dutch Baby, and where to source it",
    cuisine: "German",
    category: "Breakfast",
    kw: "dutch baby, german pancake, oven pancake, popover, brunch",
    iso: ["PT10M", "PT20M", "PT30M"],
    prep: "10 min",
    cook: "20 min",
    makes: "4 servings",
    desc: "A single oven pancake that puffs up the sides of a hot skillet and collapses into custard.",
    dek: "A Dutch baby is flour, eggs, and milk doing physics, so use fresh eggs and whole milk for the lift and richness. Two rules make it dramatic: blend the batter smooth and let it rest, and pour it into a screaming-hot buttered pan.",
    card: "One oven pancake that puffs sky-high then folds into custard.",
    ing: [
      { n: "All-purpose flour", q: "Whisked or blended smooth so no lumps weigh down the rise.", amt: "0.5 cup", shelf: "baking-flour" },
      { n: "Eggs", q: "Three at room temperature; cold eggs blunt the puff.", amt: "3", shelf: "eggs" },
      { n: "Whole milk", q: "Warmed slightly to match the eggs for maximum steam.", amt: "0.5 cup", shelf: "milk" },
      { n: "Butter", q: "Melted in the hot skillet until it foams just before the batter goes in.", amt: "3 tbsp", shelf: "butter" },
      { n: "Lemon", q: "A squeeze and a dusting of sugar over the finished pancake.", amt: "1", shelf: "citrus" }
    ],
    steps: [
      { b: "Rest the batter", t: "Blend flour, eggs, milk, and salt until completely smooth, then let it sit fifteen minutes so the flour hydrates and the batter comes to room temperature." },
      { b: "Heat the pan", t: "Put a skillet in a 425F oven until ripping hot, add butter to foam, then pour in the batter all at once." },
      { b: "Bake and serve", t: "Bake twenty minutes without opening the door until the edges climb and brown. Finish with lemon and sugar; it will deflate fast, so serve immediately." }
    ],
    tools: ["Blender|countertop blender", "Oven-safe skillet|cast iron skillet 12 inch"]
  },
  {
    slug: "scones",
    title: "Scones, and where to source it",
    cuisine: "American",
    category: "Breakfast",
    kw: "scones, currants, cream scones, baked, tea",
    iso: ["PT20M", "PT18M", "PT38M"],
    prep: "20 min",
    cook: "18 min",
    makes: "8 scones",
    desc: "Tender, flaky wedges shot through with dried fruit and a crisp top.",
    dek: "Scones reward good cold butter and real cream, so don't cheap out on either. The technique that makes them flaky instead of dense: keep everything cold, cut the butter in coarse, and stop mixing the moment the dough comes together.",
    card: "Flaky wedges studded with fruit and a crisp, craggy top.",
    ing: [
      { n: "All-purpose flour", q: "Measured by spoon-and-level; packed flour makes bricks.", amt: "2.5 cups", shelf: "baking-flour" },
      { n: "Cold butter", q: "Frozen and grated or cut into pea-size bits to steam-lift the layers.", amt: "0.5 cup", shelf: "butter" },
      { n: "Heavy cream", q: "Cold, for both the dough and brushing the tops.", amt: "1 cup", shelf: "milk" },
      { n: "Sugar", q: "A little in the dough, a coarse sprinkle on top for crunch.", amt: "0.33 cup", shelf: "unrefined-sugar" },
      { n: "Dried currants", q: "Tossed in flour so they suspend evenly instead of sinking.", amt: "0.75 cup", shelf: "dried-fruit" },
      { n: "Lemon zest", q: "Grated fresh into the sugar to wake the whole thing up.", amt: "to taste", local: true }
    ],
    steps: [
      { b: "Cut cold", t: "Whisk the dry ingredients, then work in the cold butter until it looks like coarse gravel with visible flecks. Those flecks become flake." },
      { b: "Bring together", t: "Stir in the currants and pour in cold cream, mixing just until a shaggy dough forms. Overworked dough turns tough, so stop early." },
      { b: "Cut and bake", t: "Pat into a one-inch disc, cut into eight wedges, brush with cream and sugar, and bake at 400F until golden, about eighteen minutes." }
    ],
    tools: ["Bench scraper|bench scraper stainless", "Pastry brush|pastry brush silicone"]
  },
  {
    slug: "coffee-cake",
    title: "Coffee Cake, and where to source it",
    cuisine: "American",
    category: "Dessert",
    kw: "coffee cake, cinnamon streusel, crumb cake, brunch bake",
    iso: ["PT25M", "PT45M", "PT70M"],
    prep: "25 min",
    cook: "45 min",
    makes: "12 servings",
    desc: "A tender sour-cream crumb cake with a thick cinnamon streusel and a ribbon in the middle.",
    dek: "Real butter and good cinnamon carry this cake, so grind or buy fresh Ceylon or Vietnamese cinnamon for the streusel. The move that keeps it moist for days: cream the butter and sugar long enough to go pale and fluffy before anything else joins.",
    card: "Tender crumb cake with a cinnamon-streusel ribbon and lid.",
    ing: [
      { n: "All-purpose flour", q: "For both the batter and the streusel; the same bag does double duty.", amt: "3 cups", shelf: "baking-flour" },
      { n: "Butter", q: "Softened for the batter, cold and cubed for the crumb topping.", amt: "1 cup", shelf: "butter" },
      { n: "Sugar", q: "White in the batter, brown in the streusel for chew and depth.", amt: "1.5 cups", shelf: "unrefined-sugar" },
      { n: "Eggs", q: "Two, added one at a time so the batter never breaks.", amt: "2", shelf: "eggs" },
      { n: "Whole milk", q: "Or sour cream, for a close, moist crumb.", amt: "1 cup", shelf: "milk" },
      { n: "Cinnamon", q: "Fresh and fragrant; the whole cake tastes like whatever jar you use.", amt: "2 tbsp", shelf: "spices" }
    ],
    steps: [
      { b: "Cream", t: "Beat softened butter and sugar four to five minutes until pale and fluffy. This whipped-in air is the cake's rise, so don't rush it." },
      { b: "Layer", t: "Spread half the batter, scatter a cinnamon-sugar ribbon, top with the rest, then blanket with the cold-butter streusel rubbed to clumps." },
      { b: "Bake", t: "Bake at 350F until a skewer comes out clean, about 45 minutes. Cool in the pan so the crumb sets before you slice." }
    ],
    tools: ["Stand mixer|stand mixer", "Square baking pan|9 inch square baking pan"]
  },
  {
    slug: "breakfast-casserole",
    title: "Breakfast Casserole, and where to source it",
    cuisine: "American",
    category: "Breakfast",
    kw: "breakfast casserole, strata, egg bake, make ahead, brunch",
    iso: ["PT20M", "PT50M", "PT70M"],
    prep: "20 min",
    cook: "50 min",
    makes: "8 servings",
    desc: "A savory custard of eggs, bread, cheese, and sausage baked until puffed and set.",
    dek: "This is a strata, so day-old good bread and real sausage matter more than any seasoning. The single technique that saves it: let the assembled dish soak overnight so the bread drinks up the custard and bakes into one tender whole.",
    card: "Savory egg-and-bread custard baked with sausage and cheese.",
    ing: [
      { n: "Eggs", q: "Whisked with the milk into a loose custard base.", amt: "10", shelf: "eggs" },
      { n: "Crusty bread", q: "Stale or lightly toasted so it soaks without turning to paste.", amt: "8 cups cubed", shelf: "bread" },
      { n: "Cheese", q: "A good melter grated coarse; half in the mix, half on top.", amt: "2 cups", shelf: "cheese" },
      { n: "Breakfast sausage", q: "Browned and crumbled, fat drained so it doesn't grease out the custard.", amt: "1 lb", shelf: "sausage" },
      { n: "Whole milk", q: "The liquid backbone of the custard; whole milk sets richer than skim.", amt: "2.5 cups", shelf: "milk" },
      { n: "Fresh scallions", q: "Sliced through the layers for a green bite.", amt: "to taste", local: true }
    ],
    steps: [
      { b: "Brown the sausage", t: "Cook the sausage until well browned and crumbled, then drain. Browning is where the flavor lives." },
      { b: "Layer and soak", t: "Toss bread, sausage, and half the cheese in a buttered dish, pour the egg-milk custard over, and press down. Cover and refrigerate overnight." },
      { b: "Bake", t: "Top with the rest of the cheese and bake at 350F until the center is set and puffed, about 50 minutes. Rest ten minutes before cutting." }
    ],
    tools: ["9x13 baking dish|9x13 ceramic baking dish", "Large whisk|balloon whisk large"]
  },
  {
    slug: "breakfast-hash",
    title: "Breakfast Hash, and where to source it",
    cuisine: "American",
    category: "Breakfast",
    kw: "breakfast hash, potato sausage hash, skillet, eggs on top",
    iso: ["PT15M", "PT25M", "PT40M"],
    prep: "15 min",
    cook: "25 min",
    makes: "4 servings",
    desc: "Crisped potatoes and sausage in one skillet with eggs on top.",
    dek: "A hash asks for patience more than anything fancy, just good potatoes and real sausage. The crust is what you're after. Parboil the potatoes, dry them well, then let them sit undisturbed in a hot pan so they brown instead of steaming.",
    card: "Crisp potatoes and sausage in one skillet with eggs on top.",
    ing: [
      { n: "Potatoes", q: "Diced small and parboiled so the insides cook through before the outsides crisp.", amt: "1.5 lb", shelf: "potatoes" },
      { n: "Breakfast sausage", q: "Bulk sausage browned in craggy pieces for texture.", amt: "0.75 lb", shelf: "sausage" },
      { n: "Eggs", q: "Cracked into wells in the hash and cooked until the whites just set.", amt: "4", shelf: "eggs" },
      { n: "Onion and bell pepper", q: "Diced and cooked down soft and sweet before the potatoes crisp.", amt: "1 each", local: true }
    ],
    steps: [
      { b: "Parboil", t: "Boil the diced potatoes five minutes until barely tender, drain, and steam-dry. Dry potatoes are the price of a real crust." },
      { b: "Build the base", t: "Brown the sausage, cook the onion and pepper in the rendered fat, then add the potatoes and press them flat. Leave them to crust before stirring." },
      { b: "Nestle the eggs", t: "Make wells, crack in the eggs, cover, and cook until the whites set but the yolks stay loose." }
    ],
    tools: ["Cast iron skillet|cast iron skillet 12 inch", "Fish spatula|fish spatula metal"]
  },
  {
    slug: "corn-fritters",
    title: "Corn Fritters, and where to source it",
    cuisine: "American",
    category: "Side",
    kw: "corn fritters, fried corn cakes, sweet corn, brunch side",
    iso: ["PT15M", "PT15M", "PT30M"],
    prep: "15 min",
    cook: "15 min",
    makes: "12 fritters",
    desc: "Golden fried corn cakes, crisp at the edges and creamy in the middle.",
    dek: "Sweet summer corn and fresh eggs are what make these worth frying, so buy the best corn you can find and cut it off the cob yourself. Fold the batter together rather than beating it. A gentle hand keeps the gluten slack, and that slack is what lets the fritters fry up tender instead of tough.",
    card: "Golden fried corn cakes, crisp-edged and creamy inside.",
    ing: [
      { n: "All-purpose flour", q: "Just enough to bind; too much and they go leaden.", amt: "0.75 cup", shelf: "baking-flour" },
      { n: "Eggs", q: "Two, beaten to loosen the batter and give a little lift.", amt: "2", shelf: "eggs" },
      { n: "Whole milk", q: "Splashed in to loosen the batter to a thick drop consistency.", amt: "0.5 cup", shelf: "milk" },
      { n: "Fresh corn", q: "Kernels cut from the cob, plus a handful scraped to a pulp for creaminess.", amt: "2 cups", local: true }
    ],
    steps: [
      { b: "Mix the batter", t: "Whisk flour with baking powder and salt, then fold in eggs and milk just until combined. Lumps are fine; a smooth batter means tough fritters." },
      { b: "Fold the corn", t: "Stir in the corn kernels and the scraped corn milk so every fritter has both bite and cream." },
      { b: "Fry", t: "Drop spoonfuls into 350F oil or a buttered skillet and fry until deep gold on both sides. Drain on a rack, not paper, so they stay crisp." }
    ],
    tools: ["Cast iron skillet|cast iron skillet 10 inch", "Cooling rack|wire cooling rack"]
  },
  {
    slug: "home-fries",
    title: "Home Fries, and where to source it",
    cuisine: "American",
    category: "Breakfast",
    kw: "home fries, diner potatoes, skillet potatoes, paprika",
    iso: ["PT15M", "PT25M", "PT40M"],
    prep: "15 min",
    cook: "25 min",
    makes: "4 servings",
    desc: "Diced potatoes fried with onion and pepper until browned and craggy.",
    dek: "Good waxy or all-purpose potatoes hold their shape here where russets fall apart, so choose accordingly. The whole thing turns on one habit: get the pan hot with real olive oil and resist stirring so a crust can form.",
    card: "Diced potatoes fried crisp with sweet onion and pepper.",
    ing: [
      { n: "Potatoes", q: "Waxy or all-purpose, diced even so they cook at the same rate.", amt: "1.5 lb", shelf: "potatoes" },
      { n: "Olive oil", q: "A generous pour with a high smoke point for browning, not steaming.", amt: "3 tbsp", shelf: "olive-oil" },
      { n: "Smoked paprika", q: "Bloomed in the oil near the end for color and a smoky edge.", amt: "1 tsp", shelf: "spices" },
      { n: "Onion and bell pepper", q: "Diced and added late so they soften without burning.", amt: "1 each", local: true }
    ],
    steps: [
      { b: "Parcook", t: "Steam or microwave the diced potatoes until just tender, then cool. Precooking means they crisp outside without staying raw inside." },
      { b: "Crust the potatoes", t: "Heat the oil until shimmering, add the potatoes in a single layer, and leave them to brown before the first stir." },
      { b: "Finish", t: "Push the potatoes aside, cook onion and pepper until soft, bloom the paprika, then toss everything together and season." }
    ],
    tools: ["Cast iron skillet|cast iron skillet 12 inch", "Metal spatula|metal turner spatula"]
  },
  {
    slug: "monkey-bread",
    title: "Monkey Bread, and where to source it",
    cuisine: "American",
    category: "Dessert",
    kw: "monkey bread, pull apart bread, cinnamon sugar, caramel pecan",
    iso: ["PT30M", "PT35M", "PT65M"],
    prep: "30 min",
    cook: "35 min",
    makes: "10 servings",
    desc: "Pull-apart dough balls baked in cinnamon-sugar caramel with toasted pecans.",
    dek: "This is enriched dough drowned in butter and sugar, so real butter and fresh cinnamon are non-negotiable. The technique that makes the caramel cling instead of pool: toss every dough ball in cinnamon sugar, then pour hot butter-brown-sugar over so it seizes around each piece.",
    card: "Pull-apart dough balls baked in cinnamon caramel with pecans.",
    ing: [
      { n: "All-purpose flour", q: "For a soft enriched dough that tears apart in pillowy pieces.", amt: "3.5 cups", shelf: "baking-flour" },
      { n: "Butter", q: "Melted with brown sugar into the caramel that coats every ball.", amt: "0.75 cup", shelf: "butter" },
      { n: "Brown sugar", q: "For the caramel and the cinnamon-sugar dredge; it melts glossier than white.", amt: "1 cup", shelf: "unrefined-sugar" },
      { n: "Cinnamon", q: "Whisked into the sugar so every piece is coated before baking.", amt: "2 tbsp", shelf: "spices" },
      { n: "Pecans", q: "Toasted and scattered through the layers for crunch against the soft dough.", amt: "1 cup", shelf: "pecans" },
      { n: "Flaky salt", q: "A pinch over the top to keep the caramel from cloying.", amt: "to taste", local: true }
    ],
    steps: [
      { b: "Proof the dough", t: "Mix and knead the enriched dough, then let it rise until doubled. A full rise is what makes it tender rather than dense." },
      { b: "Dredge and layer", t: "Pinch the dough into balls, roll each in cinnamon sugar, and layer into a buttered tube pan with pecans between." },
      { b: "Pour and bake", t: "Pour hot melted butter and brown sugar over the top so it seizes around each ball, then bake at 350F until deep amber, about 35 minutes. Invert while warm." }
    ],
    tools: ["Bundt pan|bundt tube pan", "Dough scraper|plastic dough scraper"]
  },
  {
    slug: "granola-bars",
    title: "Granola Bars, and where to source it",
    cuisine: "American",
    category: "Snack",
    kw: "granola bars, no bake, oat bars, honey nut butter, chewy",
    iso: ["PT15M", "PT10M", "PT25M"],
    prep: "15 min",
    cook: "10 min",
    makes: "12 bars",
    desc: "Chewy no-bake bars bound with honey and nut butter, packed with fruit.",
    dek: "The binder is the whole trick, so use real raw honey and a natural nut butter with no added sugar or oil. Warm the honey and nut butter together just to loosen, then press the mix hard into the pan; underpacked bars crumble the moment you cut them.",
    card: "Chewy no-bake bars bound with honey and nut butter.",
    ing: [
      { n: "Granola", q: "A toasted oat granola with clusters gives body and crunch.", amt: "3 cups", shelf: "granola" },
      { n: "Raw honey", q: "Warmed just to pourable; it caramelizes slightly and sets the bars firm.", amt: "0.5 cup", shelf: "raw-honey" },
      { n: "Nut butter", q: "Natural and unsweetened, stirred smooth so it binds evenly.", amt: "0.5 cup", shelf: "nut-butter" },
      { n: "Dried fruit", q: "Chopped so it distributes and the bars hold together when cut.", amt: "0.75 cup", shelf: "dried-fruit" },
      { n: "Flaky salt", q: "A pinch to balance the honey's sweetness.", amt: "to taste", local: true }
    ],
    steps: [
      { b: "Warm the binder", t: "Heat honey and nut butter gently just until pourable and combined, then stir off the heat. Don't boil it or the bars turn hard." },
      { b: "Fold", t: "Mix the granola and dried fruit into the warm binder until every cluster is coated and sticky." },
      { b: "Press and set", t: "Pack the mix hard into a lined pan with the back of a measuring cup, then chill an hour before cutting. Firm packing is what keeps them from crumbling." }
    ],
    tools: ["Square baking pan|8 inch square baking pan", "Silicone spatula|silicone spatula heat resistant"]
  }
];

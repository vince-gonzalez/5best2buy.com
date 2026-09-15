module.exports = [
  {
    slug: "fajitas",
    title: "Fajitas, and where to source it",
    cuisine: "Tex-Mex",
    category: "Main",
    kw: "fajitas, skirt steak, sizzling, tex-mex, flour tortillas",
    iso: ["PT25M", "PT15M", "PT40M"],
    prep: "25 min",
    cook: "15 min",
    makes: "4 servings",
    desc: "Marinated skirt steak seared hard and sliced against the grain, served sizzling with charred peppers and warm tortillas.",
    dek: "Fajitas are only as good as the beef, so track down a well-marbled skirt or flank from a real butcher. Two things turn that cut tender: a pan hot enough to sear hard, and slicing thin across the grain once the steak has rested.",
    card: "Skirt steak marinated in lime and cumin, seared hot, and sliced thin for tortillas.",
    ing: [
      { n: "Skirt steak", q: "Marbling and a real grain are what let a fast, hot sear work.", amt: "1.5 lb", shelf: "regenerative-meat" },
      { n: "Flour or corn tortillas", q: "Fresh masa tortillas hold the juices without falling apart.", amt: "12 small", shelf: "masa" },
      { n: "Limes", q: "Fresh acid tenderizes the marinade and brightens the finish.", amt: "3", shelf: "citrus" },
      { n: "Cumin and chili powder", q: "Whole cumin toasted and ground beats stale pre-ground every time.", amt: "1 tbsp each", shelf: "spices" },
      { n: "Bell peppers and onion", q: "Sliced thick so they char before they go soft.", amt: "3 peppers, 1 onion", local: true }
    ],
    steps: [
      { b: "Marinate", t: "Whisk lime juice, minced garlic, cumin, chili powder, and oil, then coat the steak and rest it 30 minutes at room temp." },
      { b: "Char the vegetables", t: "Sear peppers and onion in a dry-hot cast iron until they blister and pick up black spots, then pull them out." },
      { b: "Sear the steak", t: "Lay the steak in the same screaming pan and leave it alone 3 minutes a side for a hard crust." },
      { b: "Rest and slice", t: "Rest 5 minutes, then slice thin against the grain so every bite stays tender." },
      { b: "Serve sizzling", t: "Pile steak and peppers back in the hot pan and bring it to the table while it still hisses." }
    ],
    tools: ["Cast iron skillet|cast iron fajita skillet", "Tongs|kitchen tongs", "Sharp chef knife|chef knife 8 inch"]
  },
  {
    slug: "burrito",
    title: "Burrito, and where to source it",
    cuisine: "Mexican",
    category: "Main",
    kw: "burrito, flour tortilla, rice and beans, carne, wrapped",
    iso: ["PT20M", "PT25M", "PT45M"],
    prep: "20 min",
    cook: "25 min",
    makes: "4 burritos",
    desc: "A big flour tortilla wrapped tight around seasoned rice, beans, cheese, and slow-cooked meat, then griddled to seal.",
    dek: "A burrito is only as good as what goes inside, so cook the beans from a real heirloom variety and use cheese that actually tastes of something. When you build it, fold it tight and set it seam-side down on the griddle. That toasted seam is what keeps the whole thing from unraveling in your hands.",
    card: "Rice, beans, cheese, and braised meat rolled tight in a flour tortilla and griddled.",
    ing: [
      { n: "Large flour tortillas", q: "A fresh, pliable tortilla folds without cracking at the seams.", amt: "4 burrito-size", shelf: "masa" },
      { n: "Long-grain rice", q: "A clean-cooking grain that stays separate under the fillings.", amt: "1 cup dry", shelf: "rice" },
      { n: "Dried pinto beans", q: "Heirloom beans cook up creamy instead of chalky.", amt: "1.5 cups cooked", shelf: "heirloom-beans" },
      { n: "Queso fresco or Oaxaca cheese", q: "A real Mexican cheese melts clean and tastes of milk.", amt: "1 cup", shelf: "mexican-cheese" },
      { n: "Braised beef or pork", q: "Low-and-slow meat that shreds and carries the seasoning.", amt: "1 lb", shelf: "regenerative-meat" },
      { n: "Onion and cilantro", q: "Raw for crunch and a green top note.", amt: "1/2 onion, 1 bunch", local: true }
    ],
    steps: [
      { b: "Cook the rice", t: "Toast the dry rice in a little oil until it smells nutty, then simmer covered until the water is gone." },
      { b: "Warm the fillings", t: "Heat the beans and shredded meat so nothing goes into a cold, condensation-prone wrap." },
      { b: "Soften the tortilla", t: "Pass each tortilla over a flame or hot dry pan a few seconds so it folds without tearing." },
      { b: "Build and roll", t: "Keep fillings in a tight log below center, fold the sides in, then roll firmly to trap everything." },
      { b: "Seal on the griddle", t: "Set the burrito seam-side down on a hot dry pan for a minute a side to crisp and lock it shut." }
    ],
    tools: ["Griddle or comal|flat top griddle", "Fine mesh strainer|rice strainer", "Foil|aluminum foil"]
  },
  {
    slug: "tostadas",
    title: "Tostadas, and where to source it",
    cuisine: "Mexican",
    category: "Main",
    kw: "tostadas, crispy tortilla, refried beans, tinga, layered",
    iso: ["PT20M", "PT15M", "PT35M"],
    prep: "20 min",
    cook: "15 min",
    makes: "8 tostadas",
    desc: "Flat corn tortillas fried crisp and stacked with refried beans, cheese, and cool toppings.",
    dek: "Everything rides on the base here. A real corn tortilla fried until it snaps beats a stale bagged shell every time. Fry them flat in shallow oil and don't pull them until they go stiff and rigid, because a shell with any give left in it turns to a soggy plate the moment you load it.",
    card: "Crisp-fried corn tortillas layered with refried beans, cheese, and fresh toppings.",
    ing: [
      { n: "Corn tortillas", q: "Real masa tortillas fry into a base that shatters cleanly.", amt: "8", shelf: "masa" },
      { n: "Dried black beans", q: "Heirloom beans mash into a smooth, well-flavored refried layer.", amt: "2 cups cooked", shelf: "heirloom-beans" },
      { n: "Cotija or queso fresco", q: "A salty, crumbly cheese that stands up to the crunch.", amt: "3/4 cup", shelf: "mexican-cheese" },
      { n: "Lettuce and avocado", q: "Shredded lettuce and sliced avocado for cool contrast.", amt: "2 cups, 1 avocado", local: true }
    ],
    steps: [
      { b: "Fry the shells", t: "Shallow-fry each tortilla flat in hot oil, flipping once, until stiff and golden, then drain on a rack." },
      { b: "Mash the beans", t: "Fry cooked beans in a little lard or oil, mashing to a spreadable paste and seasoning with salt." },
      { b: "Spread the base", t: "Smear a thick layer of warm beans across each crisp shell so it glues the toppings down." },
      { b: "Top and finish", t: "Layer lettuce, avocado, and a heavy crumble of cheese just before serving so the shell stays crisp." }
    ],
    tools: ["Deep skillet|deep frying pan", "Wire rack|cooling rack", "Slotted spatula|slotted turner"]
  },
  {
    slug: "taquitos",
    title: "Taquitos, and where to source it",
    cuisine: "Mexican",
    category: "Appetizer",
    kw: "taquitos, rolled tacos, crispy, fried, flautas",
    iso: ["PT25M", "PT15M", "PT40M"],
    prep: "25 min",
    cook: "15 min",
    makes: "12 taquitos",
    desc: "Corn tortillas rolled tight around shredded meat and cheese, then fried until crackling.",
    dek: "A taquito is mostly a vehicle for what's rolled inside, so lean on shredded braised meat and a cheese that really melts. Roll each one as tight as you can and drop it into the oil seam-side down first. That sets the seal so they don't spring open while they fry.",
    card: "Corn tortillas rolled around meat and cheese and fried until crackling crisp.",
    ing: [
      { n: "Corn tortillas", q: "Fresh masa tortillas roll tight without splitting.", amt: "12", shelf: "masa" },
      { n: "Shredded chicken or beef", q: "Slow-braised meat that packs into a tight roll.", amt: "1.5 cups", shelf: "regenerative-meat" },
      { n: "Oaxaca or Chihuahua cheese", q: "A real melting cheese that binds the filling.", amt: "1 cup", shelf: "mexican-cheese" },
      { n: "Onion and cilantro", q: "Finely chopped into the filling for lift.", amt: "1/2 onion, small handful", local: true }
    ],
    steps: [
      { b: "Warm the tortillas", t: "Heat tortillas on a comal until soft and flexible so they roll instead of crack." },
      { b: "Fill and roll", t: "Lay a line of meat and cheese along one edge and roll each one as tight as you can." },
      { b: "Secure the seam", t: "Pin each roll with a toothpick or set it seam-side down so it does not spring open." },
      { b: "Fry crisp", t: "Fry seam-side down first in hot oil, turning until deep golden and crackling all over." }
    ],
    tools: ["Comal or flat pan|comal griddle", "Toothpicks|wooden toothpicks", "Spider skimmer|frying spider"]
  },
  {
    slug: "tamales",
    title: "Tamales, and where to source it",
    cuisine: "Mexican",
    category: "Main",
    kw: "tamales, masa, corn husk, steamed, red chile pork",
    iso: ["PT60M", "PT90M", "PT150M"],
    prep: "60 min",
    cook: "90 min",
    makes: "18 tamales",
    desc: "Chile-braised pork wrapped in whipped masa and corn husks, then steamed until tender.",
    dek: "Tamales are a masa dish before they're anything else, so fresh masa harina and real rendered lard are what give the dough its lift and flavor. Whip the lard into the masa until it's light enough that a pinch of dough floats in a glass of water. Skip that test and the tamales come out dense and heavy.",
    card: "Whipped masa and red-chile pork wrapped in corn husks and steamed tender.",
    ing: [
      { n: "Masa harina", q: "Nixtamalized corn flour is the backbone of the dough.", amt: "4 cups", shelf: "masa" },
      { n: "Lard", q: "Real rendered lard whips light and carries corn flavor.", amt: "1.25 cups", shelf: "lard" },
      { n: "Dried guajillo and ancho chiles", q: "Toasted and blended into the pork sauce for deep red flavor.", amt: "8 chiles", shelf: "dried-chiles" },
      { n: "Pork shoulder", q: "A fatty cut that braises into tender shreds.", amt: "2 lb", shelf: "regenerative-meat" },
      { n: "Corn husks", q: "Soaked until pliable to wrap and steam.", amt: "24 husks", local: true }
    ],
    steps: [
      { b: "Braise the pork", t: "Simmer pork shoulder until fork-tender, then shred and reserve the broth." },
      { b: "Make the chile sauce", t: "Toast the dried chiles briefly, soak them soft, then blend and strain into a smooth red sauce for the meat." },
      { b: "Whip the masa", t: "Beat the lard until fluffy, then work in masa harina and warm broth until a pinch of dough floats in water." },
      { b: "Assemble", t: "Spread masa on a soaked husk, add chile pork down the center, and fold the husk snug around it." },
      { b: "Steam", t: "Stand tamales upright in a steamer and cook until the masa pulls cleanly away from the husk." }
    ],
    tools: ["Steamer pot|tamale steamer pot", "Stand mixer|stand mixer", "Blender|countertop blender"]
  },
  {
    slug: "arroz-con-pollo",
    title: "Arroz con Pollo, and where to source it",
    cuisine: "Mexican",
    category: "Main",
    kw: "arroz con pollo, chicken and rice, one pot, tomato, sofrito",
    iso: ["PT20M", "PT45M", "PT65M"],
    prep: "20 min",
    cook: "45 min",
    makes: "6 servings",
    desc: "Browned chicken simmered into seasoned tomato rice in one pot until every grain is stained and tender.",
    dek: "In a one-pot rice dish, the rice tastes like whatever it cooks in, so start with good bone-in chicken and real canned tomatoes. Brown the chicken hard first, then toast the raw rice in the fat it leaves behind. Coated that way, the grains cook up separate and distinct instead of clumping into a sticky mass.",
    card: "Browned chicken and tomato-stained rice simmered together in one pot.",
    ing: [
      { n: "Medium-grain rice", q: "A grain that drinks the broth and stays distinct.", amt: "2 cups", shelf: "rice" },
      { n: "Bone-in chicken thighs", q: "Skin-on thighs brown deep and stay juicy through the simmer.", amt: "2.5 lb", shelf: "regenerative-meat" },
      { n: "Whole peeled tomatoes", q: "Real canned tomatoes give body and color to the rice.", amt: "1 can", shelf: "canned-tomatoes" },
      { n: "Cumin, oregano, and bay", q: "Toasted spices for the backbone of the sofrito.", amt: "1 tbsp mix", shelf: "spices" },
      { n: "Bell pepper, onion, and peas", q: "Diced pepper and onion for the sofrito, peas stirred in late.", amt: "1 each, 1 cup peas", local: true }
    ],
    steps: [
      { b: "Brown the chicken", t: "Sear the seasoned thighs skin-side down in the pot until deeply golden, then set them aside." },
      { b: "Build the sofrito", t: "Soften onion and pepper in the chicken fat, add spices, and cook until fragrant." },
      { b: "Toast the rice", t: "Stir the rice into the sofrito for a minute so each grain coats in fat before liquid goes in." },
      { b: "Simmer", t: "Add crushed tomatoes and broth, nestle the chicken back in, cover, and cook low until the liquid is absorbed." },
      { b: "Finish", t: "Fold in the peas, cover off the heat 10 minutes, and fluff before serving." }
    ],
    tools: ["Wide Dutch oven|dutch oven pot", "Tight lid|pot lid", "Wooden spoon|wooden cooking spoon"]
  },
  {
    slug: "empanadas",
    title: "Beef Empanadas, and where to source it",
    cuisine: "Mexican",
    category: "Appetizer",
    kw: "empanadas, beef, hand pies, baked, dough, olives",
    iso: ["PT40M", "PT25M", "PT65M"],
    prep: "40 min",
    cook: "25 min",
    makes: "12 empanadas",
    desc: "Flaky pastry rounds folded over spiced beef with olives and egg, then baked golden.",
    dek: "Half the dish is the dough, so reach for a good baking flour and keep the butter cold enough to leave flakes rather than cardboard. The rest is about the seal: work quickly so nothing warms up, and crimp the edges tight. A well-closed empanada steams its filling inside instead of leaking it all over the pan.",
    card: "Flaky pastry folded over spiced beef, olives, and egg, then baked golden.",
    ing: [
      { n: "All-purpose flour", q: "A good baking flour builds a tender, flaky dough.", amt: "3 cups", shelf: "baking-flour" },
      { n: "Ground beef", q: "Well-marbled ground beef keeps the filling moist.", amt: "1 lb", shelf: "regenerative-meat" },
      { n: "Green olives", q: "Chopped in for briny bite against the rich beef.", amt: "1/2 cup", shelf: "olives" },
      { n: "Eggs", q: "One diced hard-boiled for the filling, one beaten for the wash.", amt: "3", shelf: "eggs" },
      { n: "Onion", q: "Finely diced and cooked into the beef.", amt: "1", local: true }
    ],
    steps: [
      { b: "Make the dough", t: "Cut cold butter into the flour, add water just until it comes together, and chill 30 minutes." },
      { b: "Cook the filling", t: "Brown the beef with onion and spices, then cool it fully so it does not melt the dough." },
      { b: "Fill and crimp", t: "Spoon filling onto rolled rounds, fold over, and crimp the edge with a fork for a tight seal." },
      { b: "Wash and bake", t: "Brush with beaten egg and bake in a hot oven until deep golden and blistered." }
    ],
    tools: ["Rolling pin|wood rolling pin", "Round cutter|dough cutter round", "Sheet pan|baking sheet pan"]
  },
  {
    slug: "cuban-sandwich",
    title: "Cubano Sandwich, and where to source it",
    cuisine: "Cuban",
    category: "Main",
    kw: "cubano, cuban sandwich, roast pork, ham, pressed, swiss",
    iso: ["PT15M", "PT10M", "PT25M"],
    prep: "15 min",
    cook: "10 min",
    makes: "2 sandwiches",
    desc: "Cuban bread layered with roast pork, ham, Swiss, pickles, and mustard, then pressed flat and crisp.",
    dek: "A Cubano is only the sum of its parts, so it really wants real roast pork and a proper soft-crust Cuban loaf. What pulls it together is the press. Weigh it down hard on a hot griddle until the cheese runs and the bread flattens into something thin and crackling.",
    card: "Roast pork, ham, Swiss, and pickles pressed crisp in Cuban bread.",
    ing: [
      { n: "Cuban or soft Italian bread", q: "A light loaf with a thin crust presses flat and crisp.", amt: "1 loaf", shelf: "bread" },
      { n: "Roast pork and ham", q: "Slow-roasted pork and good sliced ham are the heart of it.", amt: "3/4 lb total", shelf: "regenerative-meat" },
      { n: "Swiss cheese", q: "A clean melting cheese that binds the layers.", amt: "4 slices", shelf: "cheese" },
      { n: "Dill pickles", q: "Thin-sliced crisp pickles for a sharp cut through the richness.", amt: "1/2 cup", shelf: "pickles" },
      { n: "Yellow mustard", q: "A sharp mustard smeared on both cut faces.", amt: "2 tbsp", shelf: "mustard" }
    ],
    steps: [
      { b: "Build the stack", t: "Smear mustard on both cut faces, then layer pork, ham, Swiss, and pickles inside." },
      { b: "Butter the outside", t: "Spread butter across the top and bottom crust so it fries to gold under the press." },
      { b: "Press hot", t: "Set the sandwich on a hot griddle and press firmly until the bread is thin and the cheese runs." },
      { b: "Crisp and cut", t: "Flip once for even color, then slice on a hard diagonal and serve while it crackles." }
    ],
    tools: ["Griddle or panini press|panini press", "Heavy skillet as weight|cast iron press", "Serrated knife|bread knife"]
  },
  {
    slug: "migas",
    title: "Migas, and where to source it",
    cuisine: "Tex-Mex",
    category: "Breakfast",
    kw: "migas, eggs, tortilla chips, breakfast, tex-mex, scramble",
    iso: ["PT10M", "PT15M", "PT25M"],
    prep: "10 min",
    cook: "15 min",
    makes: "4 servings",
    desc: "Eggs scrambled soft with crisp tortilla strips, cheese, and salsa for a Tex-Mex breakfast.",
    dek: "Migas is really a showcase for good eggs, backed by fried strips of real corn tortilla. Crisp those strips first, then scramble the eggs low and slow. Keeping the heat gentle gives you soft curds while the tortilla holds onto its crunch instead of going limp in the pan.",
    card: "Soft-scrambled eggs with crisp tortilla strips, cheese, and salsa.",
    ing: [
      { n: "Eggs", q: "Fresh pasture eggs scramble rich and hold color.", amt: "8", shelf: "eggs" },
      { n: "Corn tortillas", q: "Cut into strips and fried crisp for the migas crunch.", amt: "4", shelf: "masa" },
      { n: "Queso fresco or Oaxaca", q: "A real Mexican cheese stirred in to melt through the eggs.", amt: "3/4 cup", shelf: "mexican-cheese" },
      { n: "Salsa", q: "A good jarred or fresh salsa spooned over at the end.", amt: "1/2 cup", shelf: "salsa" },
      { n: "Onion and jalapeno", q: "Diced and softened before the eggs go in.", amt: "1/2 onion, 1 pepper", local: true }
    ],
    steps: [
      { b: "Crisp the tortillas", t: "Fry the tortilla strips in a little oil until golden and rigid, then set most aside." },
      { b: "Soften the aromatics", t: "Cook onion and jalapeno in the same pan until soft and fragrant." },
      { b: "Scramble low", t: "Pour in beaten eggs over low heat and stir slowly for soft, custardy curds." },
      { b: "Fold and finish", t: "Fold in the crisp strips and cheese just before the eggs set, then top with salsa." }
    ],
    tools: ["Nonstick skillet|nonstick pan", "Silicone spatula|silicone spatula", "Small fry pan|frying pan small"]
  },
  {
    slug: "queso-dip",
    title: "Queso Dip, and where to source it",
    cuisine: "Tex-Mex",
    category: "Appetizer",
    kw: "queso, cheese dip, chile con queso, molten, chips",
    iso: ["PT10M", "PT15M", "PT25M"],
    prep: "10 min",
    cook: "15 min",
    makes: "8 servings",
    desc: "A molten dip of melted cheese loosened with milk and lit up with roasted chiles.",
    dek: "Queso is naked cheese, which leaves nowhere to hide a bad one, so use a real melting Mexican cheese and toasted dried chiles. Melt it slow over low heat and stream in warm milk a little at a time. Rush the heat and the cheese breaks into a greasy puddle; go gently and it stays glossy and smooth.",
    card: "Molten Mexican cheese loosened with milk and roasted chiles for dipping.",
    ing: [
      { n: "Oaxaca or Chihuahua cheese", q: "A real melting cheese gives queso its stretch and gloss.", amt: "1 lb", shelf: "mexican-cheese" },
      { n: "Dried chiles", q: "Toasted and soaked, then chopped in for smoke and heat.", amt: "2 chiles", shelf: "dried-chiles" },
      { n: "Whole milk", q: "Warm whole milk loosens the cheese into a pourable dip.", amt: "1 cup", shelf: "milk" },
      { n: "Onion and cilantro", q: "Softened onion in the base, cilantro over the top.", amt: "1/2 onion, small handful", local: true }
    ],
    steps: [
      { b: "Toast the chiles", t: "Toast the dried chiles until fragrant, soak them soft, then chop them fine." },
      { b: "Build the base", t: "Soften the onion in a pot, then pour in warm milk and bring it just under a simmer." },
      { b: "Melt low", t: "Add the grated cheese in handfuls over low heat, stirring until each melts before the next." },
      { b: "Loosen and serve", t: "Stir in the chiles and more warm milk if it tightens, then serve hot with chips." }
    ],
    tools: ["Heavy saucepan|heavy saucepan", "Box grater|cheese grater", "Whisk|kitchen whisk"]
  },
  {
    slug: "sopes",
    title: "Sopes, and where to source it",
    cuisine: "Mexican",
    category: "Main",
    kw: "sopes, masa boats, thick tortilla, refried beans, pinched",
    iso: ["PT30M", "PT20M", "PT50M"],
    prep: "30 min",
    cook: "20 min",
    makes: "8 sopes",
    desc: "Thick masa rounds pinched into little boats, griddled then fried, and loaded with beans, meat, and cheese.",
    dek: "At heart a sope is a masa dish, and fresh masa harina is what gives the base its tender inside and crisp shell. Shape it while it's still warm from the griddle, pinching up a raised rim all the way around. That little wall is what holds the beans and juices in place instead of letting them run off the edge.",
    card: "Thick masa boats fried crisp and loaded with beans, meat, and cheese.",
    ing: [
      { n: "Masa harina", q: "Nixtamalized corn flour makes a soft, corn-sweet base.", amt: "2 cups", shelf: "masa" },
      { n: "Refried beans", q: "Heirloom beans mashed into a smooth base layer.", amt: "1.5 cups", shelf: "heirloom-beans" },
      { n: "Cotija or queso fresco", q: "Crumbled over the top for salty finish.", amt: "3/4 cup", shelf: "mexican-cheese" },
      { n: "Shredded braised meat", q: "Slow-cooked pork or chicken piled on the beans.", amt: "1.5 cups", shelf: "regenerative-meat" },
      { n: "Lettuce and onion", q: "Shredded lettuce and diced onion to top.", amt: "2 cups, 1/2 onion", local: true }
    ],
    steps: [
      { b: "Mix the masa", t: "Knead masa harina with warm water into a smooth dough that does not crack at the edges." },
      { b: "Griddle the rounds", t: "Press thick discs and cook on a comal until the surface sets and the bottom firms up." },
      { b: "Pinch the rim", t: "While each round is still warm, pinch up a raised edge all the way around to make a boat." },
      { b: "Crisp and load", t: "Shallow-fry the bases until crisp, then fill with warm beans, meat, and a crumble of cheese." }
    ],
    tools: ["Comal|comal griddle", "Tortilla press|tortilla press", "Shallow fry pan|frying pan"]
  },
  {
    slug: "birria",
    title: "Birria, and where to source it",
    cuisine: "Mexican",
    category: "Main",
    kw: "birria, quesabirria, consomme, chile braise, dipped tacos",
    iso: ["PT30M", "PT180M", "PT210M"],
    prep: "30 min",
    cook: "180 min",
    makes: "6 servings",
    desc: "Beef braised low in a deep chile broth, shredded into cheesy tacos dipped in the consomme.",
    dek: "Birria is a chile braise at its core, so a blend of good dried chiles and a well-marbled cut are what build that brick-red consomme. Toast and blend the chiles into the braise, then keep it at a low simmer for hours. Given enough time the meat falls into shreds and a layer of red fat rises to the top, ready for dipping the tacos.",
    card: "Beef braised in deep chile broth, shredded into cheesy dip-and-fry tacos.",
    ing: [
      { n: "Dried guajillo and ancho chiles", q: "Toasted and blended into the base of the red consomme.", amt: "10 chiles", shelf: "dried-chiles" },
      { n: "Beef chuck and short rib", q: "Marbled, collagen-rich cuts that braise into shreds.", amt: "3 lb", shelf: "regenerative-meat" },
      { n: "Corn tortillas", q: "Dipped in the fat and griddled crisp for the tacos.", amt: "12", shelf: "masa" },
      { n: "Oaxaca cheese", q: "Melted into the dipped tacos for quesabirria.", amt: "1.5 cups", shelf: "mexican-cheese" },
      { n: "Onion and cilantro", q: "Diced fine to finish the tacos and consomme.", amt: "1 onion, 1 bunch", local: true }
    ],
    steps: [
      { b: "Build the chile paste", t: "Toast the dried chiles until fragrant, soak them soft, then blend with garlic and spices into a smooth paste." },
      { b: "Braise low", t: "Coat the beef in the chile paste, cover with broth, and braise low for three hours until it shreds." },
      { b: "Separate the fat", t: "Shred the meat and skim the red fat off the top of the consomme for dipping the tortillas." },
      { b: "Dip and fry", t: "Dip each tortilla in the fat, griddle with cheese and meat, and fold into a crisp taco." },
      { b: "Serve with consomme", t: "Serve the tacos alongside a bowl of hot consomme topped with onion and cilantro." }
    ],
    tools: ["Dutch oven|dutch oven pot", "Blender|countertop blender", "Comal|comal griddle"]
  }
];

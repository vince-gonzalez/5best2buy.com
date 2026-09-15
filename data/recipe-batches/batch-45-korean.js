module.exports = [
  {
    slug:"korean-bbq",
    title:"Korean BBQ, and where to source it",
    cuisine:"Korean",
    category:"Main",
    kw:"korean bbq, gogi gui, bulgogi, grilled beef, ssam, tabletop grill, banchan",
    iso:["PT30M","PT15M","PT45M"],
    prep:"30 min", cook:"15 min", makes:"4 servings",
    desc:"Thin-sliced marinated beef grilled hot and fast, wrapped in lettuce with rice, ssamjang, and banchan.",
    dek:"The beef makes Korean BBQ: fatty, well-marbled cuts sliced thin, which take a sweet-savory marinade and char in seconds. Get your grill surface blazing hot before the meat touches it. That heat caramelizes the marinade's sugars fast, before the beef has time to overcook and go gray.",
    card:"Marinated beef seared hard and fast, wrapped in lettuce with rice and ssamjang.",
    ing:[
      { n:"Ribeye or short rib", q:"Well-marbled beef sliced 1/8 inch thin is the whole dish; fat is where the flavor and tenderness come from.", amt:"2 lb", shelf:"regenerative-meat" },
      { n:"Soy sauce", q:"The salt-and-umami backbone of the marinade; a naturally brewed soy tastes rounder and less harsh.", amt:"1/3 cup", shelf:"soy-sauce" },
      { n:"Toasted sesame oil", q:"Finishes the marinade with nutty aroma; add it off the heat so it doesn't scorch.", amt:"2 tbsp", shelf:"sesame-oil" },
      { n:"Unrefined sugar", q:"Balances the soy and drives the caramelized char on the grill.", amt:"2 tbsp", shelf:"unrefined-sugar" },
      { n:"Toasted sesame seeds", q:"Sprinkled over the finished meat for texture and toasty aroma.", amt:"1 tbsp", shelf:"seeds" },
      { n:"Asian pear and garlic", q:"Grated pear tenderizes the beef with its enzymes while garlic and scallion round out the marinade.", amt:"1/2 pear, 4 cloves", local:true },
      { n:"Lettuce and perilla leaves", q:"Fresh wraps for the meat; cold and crisp against the hot beef.", amt:"2 heads", local:true }
    ],
    steps:[
      { b:"Slice", t:"Freeze the beef 30 minutes until firm, then slice across the grain 1/8 inch thick. Partial freezing is the only way to get slices this thin at home." },
      { b:"Marinate", t:"Blend soy, grated pear, garlic, sugar, and sesame oil; toss the beef and rest 30 minutes to 2 hours. Longer turns the meat mushy from the pear enzymes." },
      { b:"Grill hot", t:"Sear on a grill or cast iron over high heat, 45-60 seconds per side, until the edges char. Cook in batches so the pan stays hot and the meat sears instead of steams." },
      { b:"Wrap", t:"Pile beef, warm rice, and a dab of ssamjang into a lettuce leaf, top with sesame seeds, and eat in one bite." }
    ],
    tools:["Tabletop grill|korean bbq tabletop grill","Cast iron griddle|cast iron griddle pan","Kitchen shears|kitchen shears","Meat slicer|electric meat slicer","Grill tongs|short grill tongs"]
  },
  {
    slug:"kalbi",
    title:"Kalbi (Korean Short Ribs), and where to source it",
    cuisine:"Korean",
    category:"Main",
    kw:"kalbi, galbi, korean short ribs, flanken, marinated ribs, grilled short ribs",
    iso:["PT20M","PT10M","PT30M"],
    prep:"20 min", cook:"10 min", makes:"4 servings",
    desc:"Flanken-cut short ribs marinated in soy, pear, and sesame, then grilled until charred and caramelized.",
    dek:"Kalbi uses short ribs cut across the bone into thin flanken strips, so every piece has meat, fat, and a ribbon of bone marrow. The sweet soy marinade needs grated Asian pear to tenderize the meat, and the grill has to be hot enough to lacquer the sugars into a dark char.",
    card:"Flanken short ribs in a sweet soy-pear marinade, grilled until the edges blacken.",
    ing:[
      { n:"Flanken short ribs", q:"Short ribs cut 1/3 inch across the bones; the marbling and bone give kalbi its richness.", amt:"3 lb", shelf:"regenerative-meat" },
      { n:"Soy sauce", q:"Salt and umami base of the marinade; the darker and deeper the soy, the better the color.", amt:"1/2 cup", shelf:"soy-sauce" },
      { n:"Unrefined sugar", q:"Provides the caramelization that defines a good kalbi crust.", amt:"1/4 cup", shelf:"unrefined-sugar" },
      { n:"Toasted sesame oil", q:"Added at the end of the marinade for nutty depth.", amt:"2 tbsp", shelf:"sesame-oil" },
      { n:"Toasted sesame seeds", q:"Finishing sprinkle for aroma and crunch.", amt:"1 tbsp", shelf:"seeds" },
      { n:"Asian pear, garlic, scallion", q:"Grated pear tenderizes while garlic and scallion build the aromatic backbone.", amt:"1 pear, 6 cloves, 4 stalks", local:true }
    ],
    steps:[
      { b:"Rinse", t:"Soak the ribs in cold water 20 minutes to draw out bone dust and blood, then pat dry. This keeps the marinade clean and the char even." },
      { b:"Marinate", t:"Whisk soy, grated pear, sugar, garlic, and sesame oil; marinate the ribs 4 hours to overnight. The pear enzymes need time to soften the tougher rib meat." },
      { b:"Grill", t:"Grill over high heat 2-3 minutes per side until deeply charred and the sugars lacquer the surface. The bone protects the meat, so push the char hard." },
      { b:"Rest and cut", t:"Rest 5 minutes, then snip between the bones with shears and scatter sesame seeds and scallion over the top." }
    ],
    tools:["Charcoal grill|charcoal grill","Kitchen shears|kitchen shears","Grill tongs|short grill tongs","Box grater|box grater","Marinade container|large marinade container"]
  },
  {
    slug:"kimchi-jjigae",
    title:"Kimchi Jjigae, and where to source it",
    cuisine:"Korean",
    category:"Soup",
    kw:"kimchi jjigae, kimchi stew, korean stew, pork kimchi soup, fermented",
    iso:["PT10M","PT30M","PT40M"],
    prep:"10 min", cook:"30 min", makes:"4 servings",
    desc:"A bubbling stew of aged kimchi and pork simmered until deep, sour, and spicy, served with rice.",
    dek:"This stew is a use for kimchi that has gone too sour to eat straight, and the older and funkier the kimchi, the better the broth. The key move is frying the kimchi and fatty pork together first, so the fat carries the chili and the sourness concentrates before any liquid goes in.",
    card:"Aged sour kimchi and pork fried down, then simmered into a deep, spicy stew.",
    ing:[
      { n:"Pork belly or shoulder", q:"Fatty pork renders into the broth and stands up to the sour kimchi; lean cuts leave it thin.", amt:"1/2 lb", shelf:"regenerative-meat" },
      { n:"Gochugaru", q:"Korean chili flakes deepen the color and heat; coarse gochugaru gives a fruitier burn than fine.", amt:"1 tbsp", shelf:"dried-chiles" },
      { n:"Gochujang", q:"A spoonful of chili paste rounds out the broth with fermented sweetness and body.", amt:"1 tbsp", shelf:"chili-crisp" },
      { n:"Firm tofu", q:"Sliced tofu soaks up the broth and adds a soft counterpoint to the pork.", amt:"1/2 block", shelf:"tofu-tempeh" },
      { n:"Toasted sesame oil", q:"Drizzled at the end for aroma; it flattens if simmered.", amt:"1 tsp", shelf:"sesame-oil" },
      { n:"Aged kimchi, scallion, onion", q:"Overripe sour kimchi is the soul of the stew; its juice seasons the whole pot.", amt:"2 cups kimchi", local:true }
    ],
    steps:[
      { b:"Fry the base", t:"Cook pork in a hot pot until the fat renders, add chopped kimchi and gochugaru, and fry 5 minutes until the kimchi darkens. This concentrates the sour-spicy flavor before liquid dilutes it." },
      { b:"Simmer", t:"Add kimchi juice, water to cover, and gochujang; simmer 20 minutes until the pork is tender and the broth turns deep red." },
      { b:"Add tofu", t:"Slide in tofu slices and onion, simmer 5 more minutes just to heat through so the tofu stays intact." },
      { b:"Finish", t:"Off the heat, add scallion and a drizzle of sesame oil, and serve bubbling with rice." }
    ],
    tools:["Earthenware pot|korean ttukbaegi pot","Ladle|soup ladle","Chef knife|chef knife","Small saucepan|small saucepan","Rice cooker|rice cooker"]
  },
  {
    slug:"sundubu-jjigae",
    title:"Sundubu Jjigae, and where to source it",
    cuisine:"Korean",
    category:"Soup",
    kw:"sundubu jjigae, soft tofu stew, korean stew, spicy tofu soup, silken tofu",
    iso:["PT10M","PT20M","PT30M"],
    prep:"10 min", cook:"20 min", makes:"2 servings",
    desc:"Silky uncurdled tofu in a fiery chili-oil broth, cracked with a raw egg and served sizzling.",
    dek:"The dish rests on soft, barely-set sundubu tofu that you spoon straight into the pot so it stays in creamy clouds. The technique that makes it is blooming gochugaru in oil first to build a red chili base, which turns the broth glossy and deeply spicy rather than just watery and hot.",
    card:"Custardy soft tofu in a bloomed chili-oil broth, finished with a cracked egg.",
    ing:[
      { n:"Soft silken tofu", q:"Uncurdled sundubu tofu breaks into custardy clouds; firm tofu misses the whole texture.", amt:"1 tube", shelf:"tofu-tempeh" },
      { n:"Gochugaru", q:"Bloomed in oil, these chili flakes give the broth its red color and layered heat.", amt:"2 tbsp", shelf:"dried-chiles" },
      { n:"Toasted sesame oil", q:"Blooms the gochugaru into a chili oil that carries the flavor through the broth.", amt:"2 tbsp", shelf:"sesame-oil" },
      { n:"Soy sauce", q:"Seasons the broth with salt and umami; adjust to taste at the end.", amt:"1 tbsp", shelf:"soy-sauce" },
      { n:"Anchovy or bone broth", q:"A savory stock base gives the thin broth backbone; anchovy stock is traditional.", amt:"2 cups", shelf:"bone-broth" },
      { n:"Egg, garlic, scallion", q:"A raw egg cracked in at the table thickens the broth; garlic and scallion sharpen it.", amt:"1 egg, 3 cloves", local:true }
    ],
    steps:[
      { b:"Bloom the chili", t:"Heat sesame oil in a pot, add gochugaru and garlic, and stir 1 minute over low heat until the oil turns bright red. Don't let it burn or the broth goes bitter." },
      { b:"Build broth", t:"Pour in the stock and soy sauce, bring to a boil, and simmer 5 minutes to meld." },
      { b:"Add tofu", t:"Spoon in the soft tofu in large chunks and simmer 5 minutes; don't stir hard or it breaks up completely." },
      { b:"Crack the egg", t:"Slide a raw egg into the center, scatter scallion, and serve immediately while the broth is still furiously bubbling so the egg poaches at the table." }
    ],
    tools:["Earthenware pot|korean ttukbaegi pot","Ladle|soup ladle","Small strainer|fine mesh strainer","Chef knife|chef knife","Rice cooker|rice cooker"]
  },
  {
    slug:"jajangmyeon",
    title:"Jajangmyeon, and where to source it",
    cuisine:"Korean",
    category:"Main",
    kw:"jajangmyeon, black bean noodles, korean chinese, chunjang, pork noodles",
    iso:["PT20M","PT25M","PT45M"],
    prep:"20 min", cook:"25 min", makes:"4 servings",
    desc:"Chewy wheat noodles under a glossy black bean sauce of pork, onion, and fried chunjang.",
    dek:"This Korean-Chinese classic depends on chunjang, a fermented black bean paste that must be fried in oil before anything else to knock out its raw bitterness. Get that step right and you get a dark, glossy, savory-sweet sauce; skip it and the sauce tastes chalky and sharp.",
    card:"Wheat noodles under a glossy fried-black-bean sauce loaded with pork and onion.",
    ing:[
      { n:"Pork shoulder", q:"Diced pork gives the sauce its meaty base; a little fat keeps it from drying out.", amt:"1/2 lb", shelf:"regenerative-meat" },
      { n:"Wheat noodles", q:"Thick chewy noodles hold the heavy sauce; fresh jajang noodles are ideal.", amt:"1 lb", shelf:"rice-noodles" },
      { n:"Unrefined sugar", q:"A spoonful balances the salty-bitter black bean paste.", amt:"1 tbsp", shelf:"unrefined-sugar" },
      { n:"Toasted sesame oil", q:"Finishes the sauce with aroma after the heat is off.", amt:"1 tsp", shelf:"sesame-oil" },
      { n:"Chunjang, onion, zucchini, potato", q:"Fermented black bean paste is the flavor; onion caramelizes into the sweet backbone of the sauce.", amt:"1/4 cup paste, 2 onions", local:true }
    ],
    steps:[
      { b:"Fry the paste", t:"Fry chunjang in 3 tablespoons oil over medium heat 2-3 minutes until it smells nutty and loosens. This single step removes the raw bitterness and is non-negotiable." },
      { b:"Brown the pork", t:"In another pan, brown diced pork, then add onion, potato, and zucchini and cook until the onion goes soft and sweet, about 8 minutes." },
      { b:"Combine", t:"Stir the fried paste into the pork with sugar and a cup of water, then simmer 10 minutes. Slurry in a little cornstarch to thicken to a glossy coat." },
      { b:"Serve", t:"Boil the noodles until chewy, drain, top with sauce and a drizzle of sesame oil, and mix at the table." }
    ],
    tools:["Wok|carbon steel wok","Wok spatula|wok spatula","Noodle pot|large pasta pot","Chef knife|chef knife","Fine strainer|noodle strainer"]
  },
  {
    slug:"gimbap",
    title:"Gimbap, and where to source it",
    cuisine:"Korean",
    category:"Snack",
    kw:"gimbap, kimbap, korean seaweed rice roll, nori roll, lunchbox, picnic",
    iso:["PT40M","PT20M","PT60M"],
    prep:"40 min", cook:"20 min", makes:"4 rolls",
    desc:"Seasoned rice and colorful fillings rolled in seaweed, sliced into rounds for a portable meal.",
    dek:"Gimbap comes down to balance and knife work: rice seasoned with sesame oil and salt instead of vinegar, and fillings cut into neat matching strips. Roll it tight against the bamboo mat and let the finished log rest before you slice. A loose roll or an impatient knife is what makes gimbap fall apart.",
    card:"Sesame-seasoned rice and neat filling strips rolled in seaweed and sliced into rounds.",
    ing:[
      { n:"Short-grain rice", q:"Sticky short-grain rice binds the roll; long-grain won't hold together.", amt:"3 cups cooked", shelf:"rice" },
      { n:"Toasted sesame oil", q:"Seasons the rice and brushes the outside of the roll for shine and aroma.", amt:"2 tbsp", shelf:"sesame-oil" },
      { n:"Toasted sesame seeds", q:"Folded into the rice for nutty crunch in every slice.", amt:"1 tbsp", shelf:"seeds" },
      { n:"Eggs", q:"Fried into a thin omelet and cut into strips as one of the fillings.", amt:"3", shelf:"eggs" },
      { n:"Nori, carrot, spinach, pickled radish", q:"Dried seaweed sheets wrap the roll; the vegetable strips give color and crunch.", amt:"4 sheets", local:true }
    ],
    steps:[
      { b:"Season rice", t:"Toss warm cooked rice with sesame oil, salt, and sesame seeds; keep it just warm, not hot, so the seaweed doesn't go soggy." },
      { b:"Prep fillings", t:"Fry a thin egg sheet and slice into strips; blanch spinach, saute julienned carrot, and line up all fillings in matching sticks." },
      { b:"Roll", t:"Spread a thin rice layer over 3/4 of a nori sheet, lay fillings across the center, and roll tight with a bamboo mat, pressing as you go so no gaps form." },
      { b:"Rest and slice", t:"Brush the roll with sesame oil, rest 5 minutes, then slice with a wet, sharp knife into 3/4-inch rounds so the fillings don't drag." }
    ],
    tools:["Bamboo rolling mat|bamboo sushi mat","Sharp knife|santoku knife","Rice cooker|rice cooker","Nonstick pan|nonstick egg pan","Cutting board|large cutting board"]
  },
  {
    slug:"kimchi",
    title:"Homemade Kimchi, and where to source it",
    cuisine:"Korean",
    category:"Side",
    kw:"kimchi, homemade kimchi, baechu kimchi, fermented napa cabbage, banchan",
    iso:["PT60M","PT0M","PT60M"],
    prep:"1 hr", cook:"0 min", makes:"1 large jar",
    desc:"Napa cabbage salted and coated in a chili paste of gochugaru, garlic, and fish sauce, then fermented.",
    dek:"Good kimchi starts with properly salting the napa cabbage so it wilts but stays crunchy, which is the step most people rush. The paste needs real gochugaru for color and a fermented note from fish sauce, and then you leave it at room temperature until it starts to bubble and sour on its own.",
    card:"Salted napa cabbage coated in gochugaru chili paste and fermented until sour and fizzy.",
    ing:[
      { n:"Gochugaru", q:"Korean chili flakes give kimchi its red color and clean heat; the fresher the flakes, the brighter the batch.", amt:"1/2 cup", shelf:"dried-chiles" },
      { n:"Fish sauce", q:"Brings the funky, savory ferment note; a good fish sauce is the difference between flat and deep kimchi.", amt:"1/4 cup", shelf:"fish-sauce" },
      { n:"Unrefined sugar", q:"A small amount feeds the fermentation and rounds the heat.", amt:"1 tbsp", shelf:"unrefined-sugar" },
      { n:"Napa cabbage, daikon, garlic, ginger, scallion", q:"Napa cabbage is the body; the aromatics and daikon build the paste that coats every leaf.", amt:"1 head cabbage, 1 daikon", local:true }
    ],
    steps:[
      { b:"Salt the cabbage", t:"Quarter the cabbage, salt between every leaf, and rest 1-2 hours until the leaves bend without snapping. Rinse three times and drain well to control the final saltiness." },
      { b:"Make the paste", t:"Blend garlic, ginger, fish sauce, sugar, and gochugaru into a loose paste; some cooks add a cooled rice-flour porridge to help it cling." },
      { b:"Coat", t:"Wearing gloves, rub the paste into every leaf and fold in julienned daikon and scallion. Pack tight into a jar, pressing out air pockets." },
      { b:"Ferment", t:"Leave at room temperature 1-3 days until it bubbles and tastes sour, then refrigerate. Taste daily; warmth speeds it up." }
    ],
    tools:["Large mixing tub|large food-grade tub","Fermentation jar|glass fermentation jar","Food gloves|nitrile food gloves","Mandoline|julienne mandoline","Kitchen scale|kitchen scale"]
  },
  {
    slug:"tteok-guk",
    title:"Tteok Guk, and where to source it",
    cuisine:"Korean",
    category:"Soup",
    kw:"tteok guk, rice cake soup, korean new year soup, beef broth, garae tteok",
    iso:["PT15M","PT30M","PT45M"],
    prep:"15 min", cook:"30 min", makes:"4 servings",
    desc:"Chewy oval rice cakes simmered in a clear beef broth, topped with egg, seaweed, and scallion.",
    dek:"This New Year soup depends on a clean, deeply savory broth, traditionally built from brisket or bone broth that you skim carefully to keep it clear. The rice cakes should be soaked so they turn tender and chewy without releasing so much starch that they cloud the soup.",
    card:"Chewy oval rice cakes in a clear beef broth, crowned with egg ribbons and seaweed.",
    ing:[
      { n:"Brisket or beef shank", q:"Simmered for the broth and shredded back in; the collagen gives the soup body.", amt:"3/4 lb", shelf:"regenerative-meat" },
      { n:"Bone broth", q:"A rich beef stock is the base; skimming it keeps the broth clear and clean-tasting.", amt:"6 cups", shelf:"bone-broth" },
      { n:"Soy sauce", q:"Seasons the broth without darkening it too much; add gradually.", amt:"2 tbsp", shelf:"soy-sauce" },
      { n:"Toasted sesame oil", q:"A few drops at the end lift the aroma of the finished bowl.", amt:"1 tsp", shelf:"sesame-oil" },
      { n:"Egg", q:"Fried into a thin sheet and sliced into ribbons for garnish.", amt:"2", shelf:"eggs" },
      { n:"Rice cakes, garlic, scallion, roasted seaweed", q:"Sliced garae-tteok are the heart of the soup; seaweed and scallion finish the bowl.", amt:"1 lb rice cakes", local:true }
    ],
    steps:[
      { b:"Soak the cakes", t:"Soak sliced rice cakes in cold water 20 minutes so they cook evenly and don't cloud the broth." },
      { b:"Build broth", t:"Simmer beef in the stock with garlic 25 minutes, skimming the surface, then shred the meat and season with soy sauce." },
      { b:"Cook the cakes", t:"Add drained rice cakes to the simmering broth and cook 5-7 minutes until they float and turn tender and chewy." },
      { b:"Garnish", t:"Ladle into bowls and top with egg ribbons, crumbled seaweed, scallion, and a drop of sesame oil." }
    ],
    tools:["Stockpot|stockpot","Fine skimmer|broth skimmer","Nonstick pan|nonstick egg pan","Ladle|soup ladle","Chef knife|chef knife"]
  },
  {
    slug:"dak-galbi",
    title:"Dak Galbi, and where to source it",
    cuisine:"Korean",
    category:"Main",
    kw:"dak galbi, spicy chicken stir fry, chuncheon, gochujang chicken, cabbage",
    iso:["PT25M","PT20M","PT45M"],
    prep:"25 min", cook:"20 min", makes:"4 servings",
    desc:"Chunks of chicken and vegetables stir-fried in a gochujang marinade on a hot griddle.",
    dek:"Dak galbi is a griddle stir-fry where a gochujang-based marinade coats chicken thighs, cabbage, and rice cakes as they cook down together. The move that matters is marinating the thighs so the paste penetrates, then cooking on high heat so the sauce reduces and glazes rather than stewing.",
    card:"Chicken thighs and cabbage stir-fried in a gochujang glaze on a screaming-hot griddle.",
    ing:[
      { n:"Chicken thighs", q:"Boneless thighs stay juicy under high heat where breast would dry out.", amt:"2 lb", shelf:"regenerative-meat" },
      { n:"Gochujang", q:"The fermented chili paste is the backbone of the marinade, giving heat and sweet depth.", amt:"3 tbsp", shelf:"chili-crisp" },
      { n:"Gochugaru", q:"Extra chili flakes tune up the heat and color of the marinade.", amt:"1 tbsp", shelf:"dried-chiles" },
      { n:"Soy sauce", q:"Adds salt and umami to round out the marinade.", amt:"2 tbsp", shelf:"soy-sauce" },
      { n:"Toasted sesame oil", q:"Stirred in at the end for aroma.", amt:"1 tbsp", shelf:"sesame-oil" },
      { n:"Cabbage, sweet potato, rice cakes, garlic, perilla", q:"Cabbage and sweet potato sweeten as they cook; rice cakes soak up the glaze.", amt:"1/2 cabbage", local:true }
    ],
    steps:[
      { b:"Marinate", t:"Mix gochujang, gochugaru, soy, garlic, and sugar; coat the chicken and rest 30 minutes so the paste soaks in." },
      { b:"Sear chicken", t:"Cook the chicken on a hot griddle 5 minutes until it takes on color and the marinade starts to caramelize." },
      { b:"Add vegetables", t:"Add cabbage, sliced sweet potato, and rice cakes, and stir-fry 10-12 minutes over high heat until the sauce reduces and glazes everything." },
      { b:"Finish", t:"Off the heat, fold in perilla leaves and a drizzle of sesame oil, and serve straight from the pan." }
    ],
    tools:["Large griddle|electric griddle pan","Wok spatula|wok spatula","Chef knife|chef knife","Mixing bowl|stainless mixing bowl","Portable burner|portable butane burner"]
  },
  {
    slug:"haemul-pajeon",
    title:"Haemul Pajeon, and where to source it",
    cuisine:"Korean",
    category:"Appetizer",
    kw:"haemul pajeon, seafood scallion pancake, korean pancake, jeon, dipping sauce",
    iso:["PT20M","PT15M","PT35M"],
    prep:"20 min", cook:"15 min", makes:"2 pancakes",
    desc:"A crisp scallion-and-seafood pancake fried in plenty of oil and served with a soy dipping sauce.",
    dek:"The whole point of pajeon is contrast: a lacy crisp exterior against a tender interior packed with scallions and seafood. That crispness only happens with enough hot oil and a batter kept cold and thin, so the edges fry rather than steam.",
    card:"A crisp, lacy scallion-and-seafood pancake fried in hot oil with a soy dipping sauce.",
    ing:[
      { n:"All-purpose flour", q:"The base of the batter; a splash of cold sparkling water lightens it for extra crisp.", amt:"1 cup", shelf:"baking-flour" },
      { n:"Egg", q:"Binds the batter and helps the pancake set and brown.", amt:"1", shelf:"eggs" },
      { n:"Soy sauce", q:"The base of the dipping sauce, cut with vinegar and a pinch of gochugaru.", amt:"2 tbsp", shelf:"soy-sauce" },
      { n:"Toasted sesame oil", q:"A few drops in the dipping sauce for aroma.", amt:"1 tsp", shelf:"sesame-oil" },
      { n:"Scallions, squid, shrimp, mussels", q:"Whole scallions and mixed seafood are the filling; use whatever is freshest at the counter.", amt:"1 bunch scallions, 1/2 lb seafood", local:true }
    ],
    steps:[
      { b:"Mix batter", t:"Whisk flour, egg, and ice-cold water into a thin batter; keep it cold so the pancake fries crisp instead of gummy." },
      { b:"Layer", t:"Lay a bed of scallions in a hot oiled pan, pour batter over, and scatter chopped seafood on top so it presses into the pancake." },
      { b:"Fry crisp", t:"Fry in a generous slick of oil over medium-high heat 4-5 minutes per side until the edges are deep golden and lacy. Add more oil at the edges to crisp them." },
      { b:"Serve", t:"Flip once, press flat, and cut into wedges; serve hot with the soy-vinegar dipping sauce." }
    ],
    tools:["Nonstick skillet|large nonstick skillet","Wide spatula|wide fish spatula","Mixing bowl|stainless mixing bowl","Whisk|balloon whisk","Small dish|dipping sauce dishes"]
  },
  {
    slug:"budae-jjigae",
    title:"Budae Jjigae, and where to source it",
    cuisine:"Korean",
    category:"Soup",
    kw:"budae jjigae, army stew, spam stew, korean stew, ramen, sausage",
    iso:["PT15M","PT25M","PT40M"],
    prep:"15 min", cook:"25 min", makes:"4 servings",
    desc:"A spicy communal stew of spam, sausage, kimchi, and ramen simmered in a gochugaru broth.",
    dek:"Army stew is a post-war improvisation that layers American processed meats over a Korean chili base, and the fun is in the mix of spam, sausage, kimchi, and noodles in one pot. The key is a good gochugaru-and-gochujang broth simmered until savory, with the ramen added last so it stays springy.",
    card:"Spam, sausage, kimchi, and ramen simmered together in a spicy gochugaru broth.",
    ing:[
      { n:"Spam", q:"The salty, fatty canned meat is the signature; it seasons the broth as it simmers.", amt:"1 can", shelf:"sausage" },
      { n:"Sausage", q:"Sliced hot dogs or sausage add smoky richness to the pot.", amt:"1/2 lb", shelf:"sausage" },
      { n:"Gochugaru", q:"Provides the red heat and color of the broth.", amt:"2 tbsp", shelf:"dried-chiles" },
      { n:"Gochujang", q:"Fermented chili paste rounds the broth with sweetness and body.", amt:"1 tbsp", shelf:"chili-crisp" },
      { n:"Ramen noodles", q:"Added at the end for chew; the springy noodles soak up the spicy broth.", amt:"2 packs", shelf:"rice-noodles" },
      { n:"Baked beans, cheese, and kimchi", q:"American baked beans and a slice of cheese are the giveaway of this stew's origin; kimchi anchors it Korean.", amt:"1 cup kimchi", local:true }
    ],
    steps:[
      { b:"Arrange", t:"Lay sliced spam, sausage, kimchi, tofu, and vegetables in a wide shallow pot in neat sections so each ingredient shows." },
      { b:"Make broth paste", t:"Mix gochugaru, gochujang, garlic, and soy into a seasoning paste and dollop it in the center of the pot." },
      { b:"Simmer", t:"Pour in stock to nearly cover and simmer 15 minutes until the meats flavor the broth and it turns deep red." },
      { b:"Add noodles", t:"Add ramen and a slice of cheese in the last 3-4 minutes, cook until the noodles are just tender, and eat straight from the pot." }
    ],
    tools:["Wide shallow pot|wide shallow stew pot","Portable burner|portable butane burner","Ladle|soup ladle","Chef knife|chef knife","Serving tongs|serving tongs"]
  },
  {
    slug:"korean-corn-dog",
    title:"Korean Corn Dog, and where to source it",
    cuisine:"Korean",
    category:"Snack",
    kw:"korean corn dog, gamja hotdog, cheese corn dog, street food, panko, fried",
    iso:["PT30M","PT10M","PT40M"],
    prep:"30 min", cook:"10 min", makes:"6 corn dogs",
    desc:"Sausage and cheese on a stick, coated in a yeasted batter and panko, deep-fried and sugared.",
    dek:"The Korean version swaps the cornmeal batter for a yeasted, stretchy dough that puffs and crisps, and coats it in panko for extra crunch. The trick is chilling the skewered sausage and cheese first so it holds the thick batter, and frying at a steady 350F so the coating cooks through before it burns.",
    card:"Sausage and cheese on a stick in a puffy panko crust, deep-fried and rolled in sugar.",
    ing:[
      { n:"Sausage", q:"A firm sausage or hot dog is the core; half sausage, half cheese is the classic split.", amt:"6 links", shelf:"sausage" },
      { n:"Mozzarella cheese", q:"A block cut into sticks gives the stretchy cheese pull; low-moisture melts without leaking.", amt:"6 sticks", shelf:"cheese" },
      { n:"All-purpose flour", q:"The base of the yeasted batter that puffs around the skewer.", amt:"2 cups", shelf:"baking-flour" },
      { n:"Unrefined sugar", q:"Feeds the yeast in the batter and gets sprinkled over the fried crust.", amt:"3 tbsp", shelf:"unrefined-sugar" },
      { n:"Bread crumbs", q:"Panko is rolled over the battered dog for the shattering crunch.", amt:"2 cups", shelf:"bread" },
      { n:"Egg, yeast, and diced potato", q:"Egg enriches the batter and diced potato can be pressed on for the gamja version.", amt:"1 egg, 1 potato", local:true }
    ],
    steps:[
      { b:"Skewer", t:"Thread sausage and cheese sticks onto skewers and freeze 15 minutes so they stay firm and the batter grips." },
      { b:"Make batter", t:"Mix flour, egg, sugar, yeast, and warm water into a thick, sticky dough and let it rest 20 minutes until it puffs." },
      { b:"Coat", t:"Dip each skewer in the batter, turning to coat fully, then roll in panko, pressing so it sticks all over." },
      { b:"Fry", t:"Deep-fry at 350F for 3-4 minutes, rolling for even color, until deep golden. Drain, then dust with sugar and streak with ketchup and mustard." }
    ],
    tools:["Deep pot|deep frying pot","Frying thermometer|deep fry thermometer","Wooden skewers|wooden corn dog skewers","Spider strainer|spider strainer","Wire rack|wire cooling rack"]
  }
];

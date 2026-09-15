module.exports = [
  {
    slug:"chile-relleno",
    title:"Chile Relleno, and where to source it",
    cuisine:"Mexican",
    category:"Main",
    kw:"chile relleno, stuffed poblano, egg batter, mexican cheese, roasted chile",
    iso:["PT40M","PT20M","PT60M"],
    prep:"40 min", cook:"20 min", makes:"4 servings",
    desc:"Fire-roasted poblanos stuffed with melting cheese, dipped in whipped egg batter and fried until golden.",
    dek:"The whole dish lives or dies on the poblanos: char them hard so the skins blister and slip off, and stuff them with cheese that actually melts. The technique that matters is the batter — whip the whites to stiff peaks, fold the yolks in, and the coating puffs instead of turning to a greasy shell.",
    card:"Roasted poblanos stuffed with cheese in a puffed egg batter, fried crisp.",
    ing:[
      { n:"Poblano chiles", q:"The whole point; roast until the skin blisters black so it peels and the flesh softens.", amt:"4 large", local:true },
      { n:"Oaxaca cheese", q:"Stringy melting cheese that holds together when it hits the hot oil.", amt:"8 oz", shelf:"mexican-cheese" },
      { n:"Eggs", q:"Whip the whites for the batter; they carry the whole coating.", amt:"4", local:true },
      { n:"Baking flour", q:"A light dusting on the chiles gives the egg batter something to grip.", amt:"1/2 cup", shelf:"baking-flour" },
      { n:"Canned tomatoes", q:"Base for the warm caldillo the rellenos sit in.", amt:"1 can (14 oz)", shelf:"canned-tomatoes" },
      { n:"White onion", q:"Simmered into the tomato sauce for body and sweetness.", amt:"1/2", local:true }
    ],
    steps:[
      { b:"Roast", t:"Char the poblanos directly over a flame or under a broiler until the skin is blackened all over, about 8 minutes, then steam in a covered bowl 10 minutes and peel." },
      { b:"Stuff", t:"Slit each chile, remove the seeds, and pack with cheese; secure with a toothpick if needed." },
      { b:"Batter", t:"Beat egg whites to stiff peaks, fold in the yolks, dust the chiles with flour, and coat in the batter." },
      { b:"Fry", t:"Fry in 350F oil, spooning oil over the top, until golden and puffed, about 2 minutes per side." },
      { b:"Sauce", t:"Simmer blended tomato and onion 10 minutes, then serve the rellenos in the warm caldillo." }
    ],
    tools:["Cast iron skillet|cast iron skillet 10 inch","Tongs|kitchen tongs stainless","Whisk|balloon whisk","Blender|countertop blender","Spider strainer|spider skimmer frying","Instant-read thermometer|instant read thermometer"]
  },
  {
    slug:"mexican-rice",
    title:"Mexican Rice, and where to source it",
    cuisine:"Mexican",
    category:"Side",
    kw:"mexican rice, arroz rojo, spanish rice, tomato rice, side dish",
    iso:["PT10M","PT25M","PT35M"],
    prep:"10 min", cook:"25 min", makes:"6 servings",
    desc:"Long-grain rice toasted in oil then simmered in tomato and stock until every grain is separate and fluffy.",
    dek:"Restaurant arroz rojo is about two moves: toast the dry rice in oil until it smells nutty and turns chalky-white, then use the right liquid ratio so it steams dry instead of turning to mush. Skip the toast and you get sticky rice; overdo the liquid and it clumps.",
    card:"Toasted long-grain rice simmered in tomato and stock, fluffy and separate.",
    ing:[
      { n:"Long-grain white rice", q:"Toasting the dry grains in oil is what keeps them separate.", amt:"1 1/2 cups", shelf:"rice" },
      { n:"Canned tomatoes", q:"Blended into the cooking liquid for color and a low tomato hum.", amt:"1 cup", shelf:"canned-tomatoes" },
      { n:"White onion", q:"Blended with the tomato so it melts into the rice.", amt:"1/2", local:true },
      { n:"Garlic", q:"Two cloves in the blend for background depth.", amt:"2 cloves", local:true },
      { n:"Olive oil", q:"The fat that carries the toast and coats each grain.", amt:"3 tbsp", shelf:"olive-oil" }
    ],
    steps:[
      { b:"Toast", t:"Fry the rinsed and dried rice in the oil over medium heat, stirring, until it turns chalky white and smells nutty, about 5 minutes." },
      { b:"Blend", t:"Puree the tomato, onion, and garlic and add enough water to make 3 cups of liquid total." },
      { b:"Simmer", t:"Pour the liquid over the rice, bring to a boil, then cover and cook on low 18 minutes." },
      { b:"Rest", t:"Off the heat, let it sit covered 5 minutes, then fluff with a fork." }
    ],
    tools:["Heavy saucepan with lid|heavy saucepan 3 quart lid","Blender|countertop blender","Fine mesh strainer|fine mesh strainer","Fork|dinner fork","Wooden spoon|wooden spoon"]
  },
  {
    slug:"ceviche",
    title:"Ceviche, and where to source it",
    cuisine:"Mexican",
    category:"Appetizer",
    kw:"ceviche, lime cured fish, shrimp ceviche, mexican ceviche, tostada",
    iso:["PT25M","PT0M","PT25M"],
    prep:"25 min", cook:"0 min", makes:"4 servings",
    desc:"Fresh fish cured in lime juice with tomato, onion, and cilantro, spooned onto tostadas.",
    dek:"Nothing here is cooked with heat, so the fish itself has to be genuinely fresh; the lime firms it up but it can't rescue a bad piece. Timing is everything. Dice the fish small and even, then pull it the moment it turns opaque, around 20 minutes. Leave it any longer and the acid keeps working until the texture goes rubbery.",
    card:"Fresh fish cured in lime with tomato, onion, and cilantro on a tostada.",
    ing:[
      { n:"Fresh white fish", q:"Sushi-grade snapper or sea bass; it must be pristine because nothing is cooked with heat.", amt:"1 lb", local:true },
      { n:"Limes", q:"The acid that firms and cures the fish; use enough to submerge it.", amt:"8 to 10", shelf:"citrus" },
      { n:"Roma tomatoes", q:"Seeded and diced for sweetness and body.", amt:"2", local:true },
      { n:"White onion", q:"Finely diced and rinsed to take the raw bite off.", amt:"1/2", local:true },
      { n:"Cilantro", q:"Chopped and folded in at the end for freshness.", amt:"1/2 cup", local:true },
      { n:"Serrano chile", q:"Minced fine for even heat throughout.", amt:"1", local:true },
      { n:"Corn tostadas", q:"The crisp masa base you pile the ceviche onto.", amt:"8", shelf:"masa" },
      { n:"Sea salt", q:"A flaky finish that seasons the raw fish at the end.", amt:"to taste", shelf:"finishing-salt" }
    ],
    steps:[
      { b:"Cure", t:"Dice the fish into 1/4-inch cubes, cover with lime juice, and refrigerate until opaque, about 20 minutes." },
      { b:"Chop", t:"While it cures, dice the tomato, onion, and serrano and rinse the onion in cold water." },
      { b:"Toss", t:"Drain off half the lime, fold in the vegetables and cilantro, and season with salt." },
      { b:"Serve", t:"Pile onto tostadas with avocado and eat immediately." }
    ],
    tools:["Sharp chef knife|chef knife 8 inch","Glass mixing bowl|glass mixing bowl","Citrus juicer|citrus juicer handheld","Cutting board|cutting board plastic","Slotted spoon|slotted spoon"]
  },
  {
    slug:"arepas",
    title:"Arepas, and where to source it",
    cuisine:"Venezuelan",
    category:"Main",
    kw:"arepas, masarepa, venezuelan corn cakes, reina pepiada, stuffed arepa",
    iso:["PT15M","PT20M","PT35M"],
    prep:"15 min", cook:"20 min", makes:"6 arepas",
    desc:"Griddled corn cakes made from precooked masarepa, split and stuffed with cheese or shredded chicken.",
    dek:"Masarepa is precooked corn flour, not masa harina — using the wrong one gives you a dense hockey puck. The technique is hydration and rest: mix to a smooth dough that does not crack at the edges, let it hydrate 5 minutes, then griddle and finish in the oven so the inside cooks through while the crust sets.",
    card:"Griddled masarepa corn cakes, split and stuffed with cheese or chicken.",
    ing:[
      { n:"Masarepa", q:"Precooked white corn flour; this specific flour is what makes an arepa an arepa.", amt:"2 cups", shelf:"masa" },
      { n:"Queso fresco", q:"Crumbled inside or mixed into the dough so it melts into the crumb.", amt:"1 cup", shelf:"mexican-cheese" },
      { n:"Chicken breast", q:"Poached and shredded for a reina pepiada filling.", amt:"1 lb", shelf:"regenerative-meat" },
      { n:"Avocado", q:"Mashed with the chicken for a creamy filling.", amt:"1", local:true },
      { n:"Warm water", q:"Hydrates the flour into a smooth, crack-free dough.", amt:"2 1/2 cups", local:true }
    ],
    steps:[
      { b:"Mix", t:"Stir the masarepa, salt, and warm water into a soft dough and let it rest 5 minutes to hydrate." },
      { b:"Shape", t:"Divide into 6 balls and pat into 1/2-inch discs, smoothing any cracks with wet hands." },
      { b:"Griddle", t:"Cook on a lightly oiled griddle over medium heat until a crust forms, about 5 minutes per side." },
      { b:"Bake", t:"Finish in a 350F oven 10 minutes so the centers cook through, then split and stuff." }
    ],
    tools:["Cast iron griddle|cast iron griddle flat","Mixing bowl|large mixing bowl","Bench scraper|bench scraper","Spatula|metal spatula","Sheet pan|half sheet pan"]
  },
  {
    slug:"pupusas",
    title:"Pupusas, and where to source it",
    cuisine:"Salvadoran",
    category:"Main",
    kw:"pupusas, salvadoran, masa harina, curtido, stuffed masa cake",
    iso:["PT25M","PT20M","PT45M"],
    prep:"25 min", cook:"20 min", makes:"8 pupusas",
    desc:"Thick masa cakes stuffed with cheese and beans, griddled until spotted and served with curtido.",
    dek:"The skill is sealing the filling inside without it blowing out on the griddle: keep the masa dough soft and moist, press a well, add just a tablespoon of filling, and pinch it fully closed before flattening. Rush it and cheese leaks everywhere; get it right and you get a puffy, spotted disc with a molten center.",
    card:"Griddled masa cakes stuffed with cheese and beans, served with curtido.",
    ing:[
      { n:"Masa harina", q:"Nixtamalized corn flour; mix with warm water to a soft, pliable dough.", amt:"2 cups", shelf:"masa" },
      { n:"Quesillo", q:"Salvadoran melting cheese, or use Oaxaca; it is the classic filling.", amt:"1 1/2 cups", shelf:"mexican-cheese" },
      { n:"Refried beans", q:"Smooth and thick so they do not leak when sealed inside.", amt:"1 cup", shelf:"heirloom-beans" },
      { n:"Green cabbage", q:"Shredded and quick-pickled into the curtido that cuts the richness.", amt:"1/2 head", local:true },
      { n:"Warm water", q:"Hydrates the masa into a dough that seals without cracking.", amt:"1 1/2 cups", local:true }
    ],
    steps:[
      { b:"Dough", t:"Mix masa harina with warm water to a Play-Doh consistency and let rest 10 minutes." },
      { b:"Fill", t:"Flatten a ball, press a well, add a tablespoon of cheese and beans, then pinch fully closed." },
      { b:"Flatten", t:"Gently pat the sealed ball into a 1/2-inch disc with wet hands." },
      { b:"Griddle", t:"Cook on a dry griddle over medium heat until spotted brown and puffed, about 4 minutes per side." }
    ],
    tools:["Cast iron griddle|cast iron comal griddle","Mixing bowl|large mixing bowl","Spatula|metal spatula","Mandoline|mandoline slicer","Jar for curtido|wide mouth mason jar"]
  },
  {
    slug:"tinga",
    title:"Chicken Tinga, and where to source it",
    cuisine:"Mexican",
    category:"Main",
    kw:"chicken tinga, tinga de pollo, chipotle chicken, shredded chicken, tostada",
    iso:["PT15M","PT30M","PT45M"],
    prep:"15 min", cook:"30 min", makes:"4 servings",
    desc:"Shredded chicken simmered in a smoky chipotle-tomato sauce with onions.",
    dek:"Tinga comes together in two parts: poached, shredded chicken and a smoky sauce of tomato, onion, and chipotle in adobo. Take your time caramelizing the onions before the sauce goes in. Their sweetness is what balances the heat of the chipotle and keeps the whole thing from tasting like sharp, raw tomato.",
    card:"Shredded chicken in a smoky chipotle-tomato sauce over tostadas.",
    ing:[
      { n:"Chicken thighs", q:"Poach and shred; thighs stay juicy in the sauce.", amt:"1 1/2 lbs", shelf:"regenerative-meat" },
      { n:"Chipotle in adobo", q:"The smoky, spicy backbone; use the sauce too.", amt:"3 chiles", shelf:"dried-chiles" },
      { n:"Canned tomatoes", q:"Blended with the chipotle for the sauce base.", amt:"1 can (14 oz)", shelf:"canned-tomatoes" },
      { n:"White onion", q:"Sliced and caramelized to balance the chipotle heat.", amt:"1 large", local:true },
      { n:"Garlic", q:"Sauteed with the onion for depth.", amt:"3 cloves", local:true }
    ],
    steps:[
      { b:"Poach", t:"Simmer the chicken in salted water 20 minutes, then shred and reserve the broth." },
      { b:"Caramelize", t:"Cook the sliced onion in oil over medium heat until deep golden, about 12 minutes." },
      { b:"Sauce", t:"Blend the tomatoes with chipotle and garlic, add to the onions, and simmer 5 minutes." },
      { b:"Combine", t:"Fold in the chicken with a splash of broth and simmer until it coats, about 10 minutes." }
    ],
    tools:["Dutch oven|enameled dutch oven 5 quart","Blender|countertop blender","Two forks|dinner forks","Wooden spoon|wooden spoon","Ladle|kitchen ladle"]
  },
  {
    slug:"barbacoa",
    title:"Barbacoa, and where to source it",
    cuisine:"Mexican",
    category:"Main",
    kw:"barbacoa, beef barbacoa, shredded beef, chuck roast, taco meat",
    iso:["PT20M","PT240M","PT260M"],
    prep:"20 min", cook:"4 hours", makes:"8 servings",
    desc:"Beef chuck braised low and slow with chiles and spices until it shreds, wrapped in tortillas.",
    dek:"Barbacoa is chuck cooked past the point of resistance until the collagen turns to silk. The two things that matter: sear the meat hard for a browned base, and build the braise on rehydrated dried chiles blended smooth so the beef takes on that deep, earthy color and flavor over the long cook.",
    card:"Chile-braised beef chuck, shredded and wrapped in warm tortillas.",
    ing:[
      { n:"Beef chuck roast", q:"Well-marbled chuck breaks down into silky shreds over a long braise.", amt:"3 lbs", shelf:"regenerative-meat" },
      { n:"Guajillo chiles", q:"Rehydrated and blended for a deep, mild-fruity braising base.", amt:"4", shelf:"dried-chiles" },
      { n:"Ancho chiles", q:"Add raisiny sweetness and body to the chile blend.", amt:"2", shelf:"dried-chiles" },
      { n:"Cumin and cloves", q:"Whole spices toasted and ground for the warm backbone.", amt:"1 tbsp", shelf:"spices" },
      { n:"White onion", q:"Blended into the sauce and roasted alongside the meat.", amt:"1 large", local:true },
      { n:"Bay leaves", q:"A couple in the braise for aroma.", amt:"3", local:true }
    ],
    steps:[
      { b:"Sear", t:"Brown the salted chuck on all sides in a hot Dutch oven, about 8 minutes total." },
      { b:"Chile paste", t:"Toast the chiles, soak in hot water 15 minutes, then blend with onion, garlic, and spices." },
      { b:"Braise", t:"Return the beef, add the chile paste and a cup of water, cover, and braise at 300F for 3.5 to 4 hours." },
      { b:"Shred", t:"Pull the meat apart with forks and moisten with the braising liquid." }
    ],
    tools:["Dutch oven|enameled dutch oven 6 quart","Blender|high speed blender","Tongs|kitchen tongs","Fine strainer|fine mesh strainer","Two forks|dinner forks"]
  },
  {
    slug:"cochinita-pibil",
    title:"Cochinita Pibil, and where to source it",
    cuisine:"Mexican",
    category:"Main",
    kw:"cochinita pibil, achiote pork, yucatan, banana leaf, pulled pork",
    iso:["PT30M","PT210M","PT240M"],
    prep:"30 min", cook:"3.5 hours", makes:"8 servings",
    desc:"Yucatecan pork marinated in achiote and sour orange, wrapped in banana leaf and slow-roasted.",
    dek:"This is a marinade dish: achiote paste loosened with sour orange juice stains the pork red and drives the flavor, so give it an overnight soak. Wrapping in banana leaf is not decoration — it steams the pork in its own juices so it stays moist through a long, low roast.",
    card:"Achiote-and-citrus marinated pork, banana-leaf wrapped and slow-roasted.",
    ing:[
      { n:"Pork shoulder", q:"Fatty shoulder stays moist over the long roast and shreds clean.", amt:"3 lbs", shelf:"regenerative-meat" },
      { n:"Achiote paste", q:"The red annatto paste that colors and defines the dish.", amt:"3 oz", local:true },
      { n:"Sour oranges", q:"The acidic juice that loosens the achiote and tenderizes; use half orange, half lime if unavailable.", amt:"1 cup juice", shelf:"citrus" },
      { n:"Banana leaves", q:"Wrap the pork to steam it in its own juices; toast to make them pliable.", amt:"2 large", local:true },
      { n:"Cumin and oregano", q:"Ground into the marinade for the warm Yucatecan profile.", amt:"1 tbsp", shelf:"spices" }
    ],
    steps:[
      { b:"Marinate", t:"Blend achiote with the citrus juice and spices, coat the pork, and refrigerate overnight." },
      { b:"Wrap", t:"Line a pan with toasted banana leaves, add the pork and marinade, and fold the leaves over to seal." },
      { b:"Roast", t:"Cover tightly and roast at 300F until fork-tender, about 3.5 hours." },
      { b:"Shred", t:"Pull the pork apart in its juices and serve with pickled red onion." }
    ],
    tools:["Roasting pan|roasting pan with rack","Blender|countertop blender","Aluminum foil|heavy duty aluminum foil","Citrus juicer|citrus juicer","Two forks|dinner forks"]
  },
  {
    slug:"horchata",
    title:"Horchata, and where to source it",
    cuisine:"Mexican",
    category:"Drink",
    kw:"horchata, rice drink, cinnamon rice milk, agua fresca, mexican drink",
    iso:["PT10M","PT0M","PT250M"],
    prep:"10 min", cook:"0 min", makes:"6 servings",
    desc:"Sweet cinnamon rice milk blended from soaked rice, strained and served over ice.",
    dek:"Horchata is soaked rice blended with cinnamon, then strained — no cooking. The trick is the soak and the strain: give the rice and cinnamon at least four hours in water so they blend smooth, then strain twice through cheesecloth so the drink is silky, not gritty.",
    card:"Cinnamon rice milk blended from soaked rice, strained silky and iced.",
    ing:[
      { n:"Long-grain white rice", q:"Soaked and blended; it is the body of the drink.", amt:"1 cup", shelf:"rice" },
      { n:"Cinnamon sticks", q:"Soaked with the rice for the signature warm spice.", amt:"2", shelf:"spices" },
      { n:"Unrefined cane sugar", q:"Dissolved in to sweeten; adjust to taste.", amt:"1/2 cup", shelf:"unrefined-sugar" },
      { n:"Whole milk", q:"Adds creaminess; use more water for a dairy-free version.", amt:"1 cup", shelf:"milk" },
      { n:"Water", q:"The soaking and blending liquid.", amt:"4 cups", local:true }
    ],
    steps:[
      { b:"Soak", t:"Combine the rice, cinnamon, and 2 cups water and soak at least 4 hours or overnight." },
      { b:"Blend", t:"Blend the soaked mixture on high until smooth, about 2 minutes." },
      { b:"Strain", t:"Strain twice through cheesecloth to remove all grit." },
      { b:"Sweeten", t:"Stir in the remaining water, milk, sugar, and vanilla, then chill and serve over ice." }
    ],
    tools:["High speed blender|high speed blender","Cheesecloth|cheesecloth fine","Fine mesh strainer|fine mesh strainer","Pitcher|glass pitcher 2 quart","Ladle|kitchen ladle"]
  },
  {
    slug:"sopa-de-fideo",
    title:"Sopa de Fideo, and where to source it",
    cuisine:"Mexican",
    category:"Soup",
    kw:"sopa de fideo, fideo, mexican noodle soup, tomato noodle soup, comfort food",
    iso:["PT10M","PT20M","PT30M"],
    prep:"10 min", cook:"20 min", makes:"4 servings",
    desc:"Thin noodles toasted golden then simmered in a light tomato broth.",
    dek:"This weeknight soup hinges on one step: toast the dry fideo noodles in oil until they turn deep golden brown before any liquid goes in. That toast gives the whole broth its nutty depth; skip it and you have bland noodles in tomato water.",
    card:"Toasted thin noodles simmered in a light tomato-garlic broth.",
    ing:[
      { n:"Fideo noodles", q:"Thin coiled pasta; toast them dark for the soup's backbone flavor.", amt:"7 oz", shelf:"pasta" },
      { n:"Canned tomatoes", q:"Blended into the broth for color and body.", amt:"1 cup", shelf:"canned-tomatoes" },
      { n:"White onion", q:"Blended with the tomato as the aromatic base.", amt:"1/4", local:true },
      { n:"Garlic", q:"One clove blended in for depth.", amt:"1 clove", local:true },
      { n:"Chicken broth", q:"The simmering liquid; homemade is best.", amt:"4 cups", local:true },
      { n:"Olive oil", q:"The fat you toast the noodles in; carries the nutty color.", amt:"2 tbsp", shelf:"olive-oil" }
    ],
    steps:[
      { b:"Toast", t:"Fry the dry fideo in oil over medium heat, stirring constantly, until deep golden, about 4 minutes." },
      { b:"Blend", t:"Puree the tomato, onion, and garlic until smooth." },
      { b:"Fry sauce", t:"Pour the puree over the noodles and cook 2 minutes until it darkens." },
      { b:"Simmer", t:"Add the broth, bring to a boil, then simmer until the noodles are tender, about 8 minutes." }
    ],
    tools:["Heavy saucepan|heavy saucepan 3 quart","Blender|countertop blender","Wooden spoon|wooden spoon","Ladle|kitchen ladle","Fine strainer|fine mesh strainer"]
  },
  {
    slug:"camarones-a-la-diabla",
    title:"Camarones a la Diabla, and where to source it",
    cuisine:"Mexican",
    category:"Main",
    kw:"camarones a la diabla, deviled shrimp, spicy shrimp, chile de arbol, mexican shrimp",
    iso:["PT20M","PT15M","PT35M"],
    prep:"20 min", cook:"15 min", makes:"4 servings",
    desc:"Shrimp in a fiery blended sauce of dried chiles, tomato, and garlic.",
    dek:"The devil is all in the sauce, chiles de arbol and guajillo blended with tomato into a smooth, brick-red paste that gets fried down before anything else. From there it comes down to the shrimp, which cook in almost no time. Add them at the very end and pull them the second they curl and turn opaque, around 3 minutes, before they seize up tough.",
    card:"Shrimp in a fiery blended sauce of dried chiles, tomato, and garlic.",
    ing:[
      { n:"Fresh shrimp", q:"Large shrimp cook in minutes; buy them fresh and peel just before cooking.", amt:"1 1/2 lbs", local:true },
      { n:"Chiles de arbol", q:"The heat engine; toast and blend into the sauce.", amt:"6", shelf:"dried-chiles" },
      { n:"Guajillo chiles", q:"Add color and mild fruit to balance the arbol fire.", amt:"3", shelf:"dried-chiles" },
      { n:"Canned tomatoes", q:"Blended in to give the sauce body and a little sweetness.", amt:"1 cup", shelf:"canned-tomatoes" },
      { n:"Garlic", q:"Blended into the sauce for pungency.", amt:"4 cloves", local:true }
    ],
    steps:[
      { b:"Soak chiles", t:"Toast the dried chiles, then soak in hot water 15 minutes until soft." },
      { b:"Blend", t:"Blend the chiles with tomato, garlic, and a little soaking water until smooth." },
      { b:"Fry sauce", t:"Fry the strained sauce in hot oil over medium heat until it thickens and darkens, about 6 minutes." },
      { b:"Add shrimp", t:"Stir in the shrimp and cook just until they curl and turn opaque, about 3 minutes." }
    ],
    tools:["Skillet|stainless skillet 12 inch","Blender|high speed blender","Fine strainer|fine mesh strainer","Tongs|kitchen tongs","Wooden spoon|wooden spoon"]
  },
  {
    slug:"menudo",
    title:"Menudo, and where to source it",
    cuisine:"Mexican",
    category:"Soup",
    kw:"menudo, tripe soup, hominy, red chile soup, mexican hangover cure",
    iso:["PT30M","PT300M","PT330M"],
    prep:"30 min", cook:"5 hours", makes:"8 servings",
    desc:"Beef tripe simmered for hours with hominy in a red chile broth.",
    dek:"Menudo takes time and cannot be rushed: the tripe needs hours of gentle simmering to go from rubbery to tender, so plan for a long cook. Clean the tripe well and build the broth on rehydrated guajillo and ancho chiles for that deep red color and warmth.",
    card:"Beef tripe and hominy simmered for hours in a deep red chile broth.",
    ing:[
      { n:"Beef tripe", q:"Clean it well and simmer low for hours until tender; it is the whole dish.", amt:"3 lbs", local:true },
      { n:"Hominy", q:"Dried and reconstituted, or canned; the chewy corn that defines menudo.", amt:"2 cups", local:true },
      { n:"Guajillo chiles", q:"Rehydrated and blended for the red broth's color and base.", amt:"5", shelf:"dried-chiles" },
      { n:"Ancho chiles", q:"Add a raisiny depth to the chile broth.", amt:"2", shelf:"dried-chiles" },
      { n:"Oregano and cumin", q:"Warm spices stirred into the broth and offered at the table.", amt:"1 tbsp", shelf:"spices" },
      { n:"White onion", q:"Simmered whole for the broth and diced for garnish.", amt:"2", local:true }
    ],
    steps:[
      { b:"Clean and boil", t:"Scrub the tripe, cut into 1-inch pieces, and simmer in fresh water with onion for 3 hours." },
      { b:"Chile broth", t:"Toast and soak the chiles, blend smooth, and strain into the pot." },
      { b:"Simmer", t:"Add the hominy and spices and simmer another 1.5 to 2 hours until the tripe is fully tender." },
      { b:"Garnish", t:"Serve with diced onion, oregano, lime, and warm tortillas." }
    ],
    tools:["Large stockpot|stockpot 12 quart","Blender|high speed blender","Fine strainer|fine mesh strainer","Ladle|kitchen ladle","Skimmer|skimmer spoon"]
  }
];

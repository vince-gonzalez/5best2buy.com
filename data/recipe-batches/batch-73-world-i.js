// batch-73-world-i.js — world dishes round 2 grp5 (agent-drafted, culled). Latin/Caribbean/African/American diner. local:true.
module.exports = [
  {
    slug:"picadillo", title:"Cuban Picadillo, and where to source it", cuisine:"Cuban", category:"Main",
    kw:"picadillo, cuban picadillo, ground beef picadillo, sofrito ground beef, cuban comfort food",
    iso:["PT15M","PT30M","PT45M"], prep:"15 min", cook:"30 min", makes:"serves 4",
    desc:"The real Cuban picadillo — sofrito, ground beef, olives, raisins over white rice — and where to source every part.",
    dek:"The sweet-salty tension is the whole dish: briny green olives and their brine against plump raisins. Skimp on either and it flattens into taco meat. Cook the sofrito down until the onions go translucent before the beef ever hits the pan.",
    card:"Ground beef braised in sofrito with olives, raisins, and cumin.",
    ing:[
      {n:"Ground beef", q:"An 80/20 chuck gives the fat that carries the spice. Drain excess after browning.", amt:"1.5 lb", local:true},
      {n:"Yellow onion", q:"The base of the sofrito. Dice fine so it melts into the sauce.", amt:"1 large", local:true},
      {n:"Green bell pepper", q:"The Cuban cachucha stand-in. Dice and soften with the onion.", amt:"1 medium", local:true},
      {n:"Garlic", q:"Four cloves, minced. Non-negotiable in a sofrito.", amt:"4 cloves", local:true},
      {n:"Manzanilla olives", q:"Pimiento-stuffed green olives plus a splash of their brine for the salt-tang.", amt:"1/2 cup", local:true},
      {n:"Raisins", q:"They plump in the sauce and balance the brine. Golden or dark both work.", amt:"1/3 cup", local:true},
      {n:"Tomato sauce", q:"Plain canned sauce binds it; a spoon of paste deepens it.", amt:"8 oz", local:true},
      {n:"Ground cumin", q:"The backbone spice. Toast it a few seconds in the sofrito oil.", amt:"1 tsp", local:true},
      {n:"White rice", q:"Long-grain, cooked separately. Picadillo is always served over rice.", amt:"2 cups dry", local:true}
    ],
    steps:[
      {b:"Build the sofrito", t:"Soften onion and pepper in oil until translucent, then add garlic and cumin for a minute."},
      {b:"Brown the beef", t:"Add ground beef, breaking it up, and cook until no pink remains; drain excess fat."},
      {b:"Add the tomato", t:"Stir in tomato sauce and a splash of olive brine; simmer to marry."},
      {b:"Fold in the sweet and salty", t:"Add olives and raisins and simmer 15 minutes until thick and glossy."},
      {b:"Serve", t:"Spoon over white rice, with fried sweet plantains alongside if you have them."}
    ],
    tools:["Deep skillet|deep stainless skillet","Wooden spoon|wooden cooking spoon","Rice pot|covered rice pot"]
  },
  {
    slug:"chicharron", title:"Chicharron, and where to source it", cuisine:"Latin American", category:"Appetizer",
    kw:"chicharron, pork belly chicharron, fried pork skin, crispy pork, chicharrones",
    iso:["PT20M","PT1H30M","PT1H50M"], prep:"20 min", cook:"1 hr 30 min", makes:"serves 6",
    desc:"Real chicharron — pork belly slabs simmered then fried until the skin shatters — and where to source the cut.",
    dek:"Two-stage frying is the trick: a low first fry renders the fat and cooks the meat, then a rip-roaring second fry blisters the skin. Skip the resting-and-reheat and the skin stays leathery instead of exploding into glass.",
    card:"Pork belly slabs, simmered then twice-fried until the skin blisters.",
    ing:[
      {n:"Pork belly with skin", q:"Skin-on is essential — that is the whole point. Cut into thick two-inch strips.", amt:"3 lb", local:true},
      {n:"Kosher salt", q:"Salt the meat well and, crucially, the dry skin for blistering.", amt:"2 tbsp", local:true},
      {n:"Bay leaves", q:"For the initial simmer that tenderizes the meat.", amt:"2 leaves", local:true},
      {n:"Garlic", q:"Smash a head into the simmering water for background flavor.", amt:"1 head", local:true},
      {n:"Neutral oil or lard", q:"Lard is traditional and gives the truest flavor; enough to submerge the strips.", amt:"4 cups", local:true},
      {n:"Lime", q:"A hard squeeze at the table cuts the richness.", amt:"2 limes", local:true}
    ],
    steps:[
      {b:"Simmer to tender", t:"Simmer belly strips with garlic, bay, and salt in water for an hour until fork-tender."},
      {b:"Dry thoroughly", t:"Drain and pat bone-dry; let them air-dry — wet skin will not blister."},
      {b:"First fry, low", t:"Fry at 300F until the fat renders and the meat cooks through, about 15 minutes."},
      {b:"Rest, then second fry", t:"Rest 10 minutes, then fry at 375F until the skin puffs and shatters."},
      {b:"Salt and serve", t:"Salt immediately and serve hot with lime and hot sauce."}
    ],
    tools:["Heavy pot|heavy dutch oven","Spider strainer|wire spider strainer","Thermometer|deep fry thermometer"]
  },
  {
    slug:"platanos-maduros", title:"Platanos Maduros, and where to source it", cuisine:"Latin American", category:"Side",
    kw:"platanos maduros, fried sweet plantains, maduros, ripe plantains, sweet plantains",
    iso:["PT10M","PT12M","PT22M"], prep:"10 min", cook:"12 min", makes:"serves 4",
    desc:"Fried sweet plantains — how to pick a black-ripe plantain and fry it to caramelized edges.",
    dek:"Ripeness is everything: the skin must be black, not yellow. A yellow plantain fries starchy and bland; a fully black one caramelizes its own sugars into jammy, molten centers with crisp edges. Buy them days ahead and let them go ugly.",
    card:"Black-ripe plantains fried until the edges caramelize.",
    ing:[
      {n:"Ripe plantains", q:"Skins must be mostly black and give to a squeeze. Yellow ones are not ready.", amt:"4 plantains", local:true},
      {n:"Neutral oil", q:"Enough to shallow-fry a half-inch deep. Canola or vegetable is fine.", amt:"1/2 cup", local:true},
      {n:"Salt", q:"A pinch at the end sharpens the sweetness.", amt:"to taste", local:true}
    ],
    steps:[
      {b:"Peel and slice", t:"Cut off the ends, score the skin lengthwise, and peel; slice diagonally about 3/4-inch thick."},
      {b:"Heat the oil", t:"Warm oil over medium until a plantain edge sizzles gently — too hot and they burn before caramelizing."},
      {b:"Fry the first side", t:"Fry in a single layer until deep golden, about 3 minutes, then flip."},
      {b:"Finish and drain", t:"Fry the second side to caramelized, drain on paper towels, and salt lightly."}
    ],
    tools:["Skillet|nonstick skillet","Slotted spatula|slotted turner spatula","Paper towels|paper towel roll"]
  },
  {
    slug:"jamaican-rice-and-peas", title:"Jamaican Rice and Peas, and where to source it", cuisine:"Jamaican", category:"Side",
    kw:"rice and peas, jamaican rice and peas, coconut rice, kidney bean rice, caribbean rice",
    iso:["PT15M","PT1H","PT1H15M"], prep:"15 min", cook:"1 hr", makes:"serves 6",
    desc:"Jamaican rice and peas — kidney beans and rice cooked in coconut milk with a whole Scotch bonnet — and where to source it.",
    dek:"The Scotch bonnet goes in whole and stays whole — it perfumes the pot without heat, and one nick with a spoon releases blistering fire. The coconut milk isn't a garnish; the rice cooks entirely in it, which is why it's called the Sunday rice.",
    card:"Kidney beans and rice simmered in coconut milk with thyme and Scotch bonnet.",
    ing:[
      {n:"Dried red kidney beans", q:"Traditional over canned; soak overnight and simmer until nearly tender before the rice.", amt:"1 cup", local:true},
      {n:"Coconut milk", q:"Full-fat canned. The rice cooks in it, so don't dilute too much.", amt:"1 can (14 oz)", local:true},
      {n:"Long-grain rice", q:"A firm long-grain holds its grain in the rich liquid.", amt:"2 cups", local:true},
      {n:"Scotch bonnet pepper", q:"Added whole for aroma, not heat. Keep it intact and fish it out at the end.", amt:"1 whole", local:true},
      {n:"Fresh thyme", q:"Whole sprigs; the woody stems steep and are pulled before serving.", amt:"4 sprigs", local:true},
      {n:"Scallions", q:"Crushed with the flat of a knife to release flavor into the pot.", amt:"3 stalks", local:true},
      {n:"Garlic", q:"A few cloves, smashed. Background depth.", amt:"3 cloves", local:true},
      {n:"Pimento (allspice) berries", q:"Whole allspice is the signature Jamaican note. A few berries is plenty.", amt:"5 berries", local:true}
    ],
    steps:[
      {b:"Cook the beans", t:"Simmer soaked kidney beans until nearly tender, keeping the cooking liquid."},
      {b:"Build the pot", t:"Add coconut milk, scallions, thyme, garlic, allspice, and the whole Scotch bonnet; season with salt."},
      {b:"Add the rice", t:"Stir in rinsed rice; liquid should sit about an inch above the rice."},
      {b:"Steam low", t:"Cover and cook on low undisturbed until liquid is absorbed, about 25 minutes."},
      {b:"Rest and fluff", t:"Rest off heat 10 minutes, remove the pepper and thyme stems, and fluff with a fork."}
    ],
    tools:["Dutch oven|heavy dutch oven","Fine strainer|fine mesh strainer","Fork|dinner fork"]
  },
  {
    slug:"roti", title:"Trinidadian Roti, and where to source it", cuisine:"Caribbean", category:"Side",
    kw:"roti, trinidad roti, buss up shut, paratha roti, caribbean flatbread",
    iso:["PT40M","PT20M","PT1H"], prep:"40 min", cook:"20 min", makes:"makes 6",
    desc:"Trinidadian buss-up-shut paratha roti — layered, oiled, and beaten flaky on the tawa — and where to source it.",
    dek:"The flakiness comes from oiling and coiling the dough into a spiral before the second roll, then beating it apart on the hot tawa the second it comes off. That clapping and tearing is what turns a flatbread into shredded buss up shut.",
    card:"Layered paratha roti, oiled, coiled, and beaten flaky on the griddle.",
    ing:[
      {n:"All-purpose flour", q:"A soft plain flour. Keep some back for dusting during the rolls.", amt:"4 cups", local:true},
      {n:"Baking powder", q:"Gives lift and tenderness to the layers.", amt:"2 tsp", local:true},
      {n:"Neutral oil", q:"Brushed between the coiled layers — this creates the flake. Plus more for the tawa.", amt:"1/2 cup", local:true},
      {n:"Salt", q:"Season the dough itself so the bread isn't flat.", amt:"1 tsp", local:true},
      {n:"Warm water", q:"Added gradually to a soft, slightly sticky dough. Let it rest before rolling.", amt:"1.5 cups", local:true}
    ],
    steps:[
      {b:"Make a soft dough", t:"Mix flour, baking powder, and salt, then work in warm water to a soft dough; rest 30 minutes."},
      {b:"Roll and oil", t:"Divide, roll each ball into a round, brush with oil, and dust with flour."},
      {b:"Coil the layers", t:"Cut a slit to the center, roll into a cone, then coil into a tight spiral; rest again."},
      {b:"Roll out again", t:"Flatten each coil and roll into a thin round without pressing out all the layers."},
      {b:"Cook and beat", t:"Cook on an oiled hot tawa, flipping and brushing oil, then clap and beat the hot roti until it shreds."}
    ],
    tools:["Flat griddle|flat cast iron tawa","Rolling pin|wooden rolling pin","Pastry brush|silicone pastry brush"]
  },
  {
    slug:"chicken-yassa", title:"Senegalese Chicken Yassa, and where to source it", cuisine:"Senegalese", category:"Main",
    kw:"chicken yassa, yassa poulet, senegalese chicken, caramelized onion chicken, west african chicken",
    iso:["PT30M","PT45M","PT1H15M"], prep:"30 min", cook:"45 min", makes:"serves 4",
    desc:"Senegalese chicken yassa — chicken marinated in lemon and onion, then smothered in caramelized onions — and where to source it.",
    dek:"You need far more onion than looks reasonable — pounds of it, cooked down slow until jammy and sweet, because the onions ARE the sauce. The lemon-and-mustard marinade has to sit for hours; a quick soak leaves the chicken tasting of neither.",
    card:"Lemon-marinated chicken smothered in a mountain of caramelized onions.",
    ing:[
      {n:"Chicken thighs", q:"Bone-in, skin-on thighs stand up to the long marinade and braise. Sear for color.", amt:"3 lb", local:true},
      {n:"Yellow onions", q:"The real star — you want more than seems sane. Slice thin; they cook down to a fraction.", amt:"5 large", local:true},
      {n:"Lemons", q:"Fresh juice for the marinade; the acid is the defining flavor.", amt:"4 lemons", local:true},
      {n:"Dijon mustard", q:"Emulsifies the marinade and gives the yassa its tang.", amt:"3 tbsp", local:true},
      {n:"Scotch bonnet or habanero", q:"Added whole or minced to taste for the West African heat.", amt:"1 pepper", local:true},
      {n:"Garlic", q:"Minced into the marinade. Generous.", amt:"5 cloves", local:true},
      {n:"Bay leaf", q:"A couple leaves deepen the braise.", amt:"2 leaves", local:true},
      {n:"White rice", q:"Steamed plain to soak up the onion sauce.", amt:"2 cups dry", local:true}
    ],
    steps:[
      {b:"Marinate long", t:"Marinate chicken and half the onions in lemon, mustard, garlic, and pepper for at least 3 hours."},
      {b:"Sear the chicken", t:"Wipe off onions and sear chicken until browned; set aside."},
      {b:"Melt the onions", t:"Cook all the onions low and slow in the same pan until deeply soft and jammy."},
      {b:"Braise together", t:"Add the marinade, bay, and chicken; simmer covered until the chicken is tender, about 30 minutes."},
      {b:"Serve over rice", t:"Reduce the onions to a thick smother and serve over steamed white rice."}
    ],
    tools:["Dutch oven|enameled dutch oven","Tongs|kitchen tongs","Chef knife|8 inch chef knife"]
  },
  {
    slug:"peri-peri-chicken", title:"Peri-Peri Chicken, and where to source it", cuisine:"African", category:"Main",
    kw:"peri peri chicken, piri piri chicken, portuguese african chicken, grilled chili chicken, spatchcock chicken",
    iso:["PT30M","PT40M","PT1H10M"], prep:"30 min", cook:"40 min", makes:"serves 4",
    desc:"Peri-peri chicken — spatchcocked and grilled under a fiery bird's-eye chili and garlic sauce — and where to source it.",
    dek:"Spatchcock the bird so it lies flat and cooks evenly, and reserve half the peri-peri sauce raw for the table — cooking all of it dulls the bright, vinegary chili bite. The African bird's-eye (peri-peri) chili is the whole identity; a generic red chili isn't the same.",
    card:"Flattened chicken grilled and basted in bird's-eye chili, garlic, and lemon.",
    ing:[
      {n:"Whole chicken", q:"Spatchcocked flat for even cooking and maximum charred surface.", amt:"1 (4 lb)", local:true},
      {n:"Bird's-eye (peri-peri) chilies", q:"The defining chili — small, fierce, fruity. Fresh or dried both work.", amt:"6 chilies", local:true},
      {n:"Garlic", q:"A whole head goes into the sauce; it mellows against the chili.", amt:"6 cloves", local:true},
      {n:"Lemon", q:"Juice and zest for the acid that carries the heat.", amt:"2 lemons", local:true},
      {n:"Red wine vinegar", q:"The tang that keeps the sauce lively; do not skip.", amt:"1/4 cup", local:true},
      {n:"Smoked paprika", q:"Adds color and a smoky base under the fresh chili.", amt:"1 tbsp", local:true},
      {n:"Olive oil", q:"Blended into the sauce to emulsify and help it cling.", amt:"1/3 cup", local:true}
    ],
    steps:[
      {b:"Make the peri-peri", t:"Blend chilies, garlic, lemon, vinegar, paprika, and oil into a loose sauce; reserve half raw."},
      {b:"Marinate", t:"Coat the spatchcocked chicken in half the sauce and marinate at least 2 hours."},
      {b:"Grill skin-down", t:"Grill or broil skin-side first over medium heat until charred, then flip."},
      {b:"Baste as it cooks", t:"Baste with marinade until the thigh reads 165F, about 35-40 minutes total."},
      {b:"Rest and sauce", t:"Rest 10 minutes, then serve with the reserved raw peri-peri on the side."}
    ],
    tools:["Kitchen shears|poultry kitchen shears","Blender|countertop blender","Grill|charcoal grill"]
  },
  {
    slug:"country-fried-chicken", title:"Country Fried Chicken, and where to source it", cuisine:"American", category:"Main",
    kw:"country fried chicken, southern fried chicken, buttermilk fried chicken, cast iron fried chicken, crispy fried chicken",
    iso:["PT30M","PT25M","PT55M"], prep:"30 min", cook:"25 min", makes:"serves 4",
    desc:"Southern country fried chicken — buttermilk-brined, double-dredged, cast-iron fried — and where to source it.",
    dek:"Keep the oil at a steady 325F and never crowd the pan — a cold crash of too many pieces steams the crust soft. A splash of the buttermilk brine flicked into the flour dredge makes the shaggy craggy bits that fry up into shatter-crisp lace.",
    card:"Buttermilk-brined chicken, seasoned-flour dredged, fried in cast iron.",
    ing:[
      {n:"Chicken pieces", q:"A cut-up whole bird, mixed white and dark. Bone-in fries juicier.", amt:"3.5 lb", local:true},
      {n:"Buttermilk", q:"The brine tenderizes and helps the crust cling. Overnight is best.", amt:"2 cups", local:true},
      {n:"All-purpose flour", q:"The dredge base; season it hard so the crust has flavor.", amt:"2 cups", local:true},
      {n:"Hot sauce", q:"Whisked into the buttermilk for a background tang and warmth.", amt:"2 tbsp", local:true},
      {n:"Paprika", q:"Color and mild sweetness in the dredge, alongside salt and black pepper.", amt:"1 tbsp", local:true},
      {n:"Garlic powder", q:"Even seasoning through the crust; pairs with onion powder.", amt:"1 tsp", local:true},
      {n:"Neutral frying oil", q:"Peanut or vegetable, enough for a full inch in the skillet.", amt:"4 cups", local:true}
    ],
    steps:[
      {b:"Brine overnight", t:"Submerge chicken in buttermilk and hot sauce; refrigerate at least 4 hours or overnight."},
      {b:"Season the dredge", t:"Mix flour with paprika, garlic and onion powder, salt, and plenty of black pepper."},
      {b:"Dredge shaggy", t:"Lift chicken from the brine, dredge, and flick in a little brine for craggy crust; press to coat."},
      {b:"Fry at 325F", t:"Fry in batches, never crowding, turning until deep golden and 165F inside, about 12-15 minutes."},
      {b:"Drain on a rack", t:"Rest on a wire rack, not paper, so the crust stays crisp underneath."}
    ],
    tools:["Cast iron skillet|cast iron skillet","Wire rack|wire cooling rack","Thermometer|instant read thermometer"]
  },
  {
    slug:"corn-dog", title:"Corn Dog, and where to source it", cuisine:"American", category:"Appetizer",
    kw:"corn dog, corndog, cornmeal battered hot dog, fair food, deep fried hot dog",
    iso:["PT20M","PT10M","PT30M"], prep:"20 min", cook:"10 min", makes:"makes 8",
    desc:"The classic fairground corn dog — cornmeal batter clinging to a skewered dog, deep-fried gold — and where to source it.",
    dek:"The batter must be thick enough to coat the back of a spoon, and the dogs must be bone-dry and dredged in flour first or the batter slides right off in the oil. Pour the batter into a tall glass and dip — you can't ladle a clean coat.",
    card:"Skewered hot dogs dipped in cornmeal batter and deep-fried golden.",
    ing:[
      {n:"Hot dogs", q:"A natural-casing all-beef dog has snap. Pat completely dry before battering.", amt:"8 dogs", local:true},
      {n:"Cornmeal", q:"Fine or medium yellow cornmeal gives the classic crumb and color.", amt:"1 cup", local:true},
      {n:"All-purpose flour", q:"Half the batter for structure, plus extra for dredging the dogs.", amt:"1 cup", local:true},
      {n:"Sugar", q:"A couple spoons — fair corn dogs are faintly sweet.", amt:"2 tbsp", local:true},
      {n:"Baking powder", q:"Puffs the batter into a light, crunchy shell.", amt:"1 tsp", local:true},
      {n:"Buttermilk", q:"Thickens the batter to a clingy, dip-able consistency.", amt:"1 cup", local:true},
      {n:"Egg", q:"Binds the batter so it sets fast in the oil.", amt:"1 egg", local:true},
      {n:"Neutral oil", q:"Enough to submerge the dogs standing up, heated to 350F.", amt:"6 cups", local:true}
    ],
    steps:[
      {b:"Mix the batter", t:"Whisk cornmeal, flour, sugar, baking powder, salt with buttermilk and egg to a thick batter; pour into a tall glass."},
      {b:"Prep the dogs", t:"Skewer each dry hot dog, then roll in flour so the batter grips."},
      {b:"Heat the oil", t:"Bring oil to 350F in a deep, narrow pot."},
      {b:"Dip and fry", t:"Dip each dog into the glass of batter, then lower into the oil, rolling to fry evenly golden, about 3 minutes."},
      {b:"Drain and serve", t:"Drain on a rack and serve with mustard."}
    ],
    tools:["Deep pot|tall narrow fry pot","Wooden skewers|wooden corn dog skewers","Thermometer|deep fry thermometer"]
  },
  {
    slug:"club-sandwich", title:"Club Sandwich, and where to source it", cuisine:"American", category:"Main",
    kw:"club sandwich, triple decker club, turkey club, clubhouse sandwich, diner club",
    iso:["PT15M","PT10M","PT25M"], prep:"15 min", cook:"10 min", makes:"makes 2",
    desc:"The proper triple-decker club — toasted bread, turkey, bacon, lettuce, tomato — and where to source it.",
    dek:"It's a triple-decker with a middle slice of toast, and that middle layer is what keeps it from collapsing — it's structure, not excess. Toast the bread firm, and quarter it with frilled picks through each triangle or the whole tower slides apart.",
    card:"Triple-decker of toast, turkey, bacon, lettuce, and tomato, quartered on picks.",
    ing:[
      {n:"White sandwich bread", q:"A sturdy sandwich loaf. You need three slices per sandwich, toasted firm.", amt:"6 slices", local:true},
      {n:"Roast turkey", q:"Sliced deli or leftover roast turkey; pile it generously.", amt:"1/2 lb", local:true},
      {n:"Bacon", q:"Cooked crisp and flat so it doesn't tear the sandwich apart.", amt:"6 strips", local:true},
      {n:"Tomato", q:"Ripe and sliced thin; salt the slices to season.", amt:"1 large", local:true},
      {n:"Iceberg lettuce", q:"Crisp leaves for the cool crunch — the diner classic.", amt:"4 leaves", local:true},
      {n:"Mayonnaise", q:"Spread on every toasted face so nothing is dry.", amt:"1/4 cup", local:true}
    ],
    steps:[
      {b:"Toast and cook", t:"Toast all bread firm and fry the bacon crisp; drain it."},
      {b:"Spread the mayo", t:"Spread mayonnaise on one face of every toast slice."},
      {b:"First layer", t:"On the bottom slice, stack turkey, lettuce, and tomato."},
      {b:"Middle deck", t:"Add the second toast slice, then bacon, more lettuce and tomato."},
      {b:"Cap and pin", t:"Top with the last slice, pin four frilled picks, and cut corner-to-corner into quarters."}
    ],
    tools:["Toaster|4 slice toaster","Serrated knife|serrated bread knife","Sandwich picks|frilled sandwich picks"]
  },
  {
    slug:"chicken-parmesan-sub", title:"Chicken Parmesan Sub, and where to source it", cuisine:"American", category:"Main",
    kw:"chicken parm sub, chicken parmesan sandwich, chicken parm hero, breaded chicken sub, italian american sandwich",
    iso:["PT25M","PT25M","PT50M"], prep:"25 min", cook:"25 min", makes:"makes 4",
    desc:"The deli chicken parm sub — fried cutlet, marinara, melted mozzarella on a toasted roll — and where to source it.",
    dek:"Toast the cut roll before it's built — an untoasted roll turns to paste under the sauce. Sauce the cutlet, not the bread, and only right before it goes under the broiler, so the crust you fried stays crisp instead of dissolving.",
    card:"Fried chicken cutlet, marinara, and mozzarella melted on a toasted hero roll.",
    ing:[
      {n:"Chicken breasts", q:"Pounded thin and even so they fry fast and fit the roll.", amt:"4 cutlets", local:true},
      {n:"Italian breadcrumbs", q:"Seasoned crumbs for the crust; add grated parmesan to the mix.", amt:"1.5 cups", local:true},
      {n:"Eggs", q:"The dredge glue between flour and crumb.", amt:"2 eggs", local:true},
      {n:"Marinara sauce", q:"A good jarred or homemade marinara. Warm it before building.", amt:"2 cups", local:true},
      {n:"Fresh mozzarella", q:"Sliced; it melts into the classic pull. Low-moisture melts more evenly.", amt:"8 oz", local:true},
      {n:"Hero rolls", q:"Sturdy sub rolls with a crust that holds up; toast the cut faces.", amt:"4 rolls", local:true},
      {n:"Parmesan", q:"Grated into the crumbs and over the top before broiling.", amt:"1/2 cup", local:true}
    ],
    steps:[
      {b:"Bread the cutlets", t:"Dredge pounded cutlets in flour, egg, then parmesan breadcrumbs."},
      {b:"Fry crisp", t:"Shallow-fry until golden and cooked through; drain on a rack."},
      {b:"Toast the rolls", t:"Toast the cut faces of the rolls until firm and lightly golden."},
      {b:"Build and top", t:"Set a cutlet in each roll, spoon on warm marinara, and blanket with mozzarella and parmesan."},
      {b:"Melt and close", t:"Broil open-faced until the cheese bubbles, then close and serve hot."}
    ],
    tools:["Skillet|large frying skillet","Sheet pan|rimmed sheet pan","Meat mallet|meat pounder mallet"]
  },
  {
    slug:"monte-cristo", title:"Monte Cristo, and where to source it", cuisine:"American", category:"Breakfast",
    kw:"monte cristo, monte cristo sandwich, fried ham and cheese, battered sandwich, brunch sandwich",
    iso:["PT15M","PT12M","PT27M"], prep:"15 min", cook:"12 min", makes:"makes 2",
    desc:"The Monte Cristo — a ham-and-cheese sandwich battered, fried, dusted with sugar and served with jam — and where to source it.",
    dek:"Assemble the whole sandwich and press it firm before it ever touches the batter, so it fries as one sealed unit instead of leaking cheese. Fry in a shallow pool of butter-oil and turn once — flipping too early tears the eggy shell open.",
    card:"Ham-and-cheese sandwich battered, fried golden, dusted with powdered sugar.",
    ing:[
      {n:"White bread", q:"A firm sandwich loaf holds up to the battering and frying.", amt:"4 slices", local:true},
      {n:"Sliced ham", q:"Good deli ham, folded to fill the sandwich evenly.", amt:"1/4 lb", local:true},
      {n:"Gruyere or Swiss", q:"A melting cheese that binds the layers; Swiss is the diner default.", amt:"4 slices", local:true},
      {n:"Eggs", q:"The batter base, whisked with a splash of milk.", amt:"2 eggs", local:true},
      {n:"Milk", q:"Loosens the egg into a batter that coats the bread.", amt:"1/4 cup", local:true},
      {n:"Butter", q:"For frying, cut with a little oil so it browns without burning.", amt:"2 tbsp", local:true},
      {n:"Powdered sugar", q:"Dusted over the top — the sweet-savory signature.", amt:"for dusting", local:true}
    ],
    steps:[
      {b:"Build the sandwich", t:"Layer ham and cheese between the bread and press firmly so it holds together."},
      {b:"Make the batter", t:"Whisk eggs with milk and a pinch of salt in a shallow dish."},
      {b:"Soak both sides", t:"Dip the whole sandwich into the batter, coating every face."},
      {b:"Fry in butter", t:"Fry in butter and oil over medium, turning once, until golden and the cheese melts."},
      {b:"Dust and serve", t:"Dust with powdered sugar and serve with raspberry jam for dipping."}
    ],
    tools:["Skillet|nonstick skillet","Shallow dish|shallow batter dish","Fine sieve|fine mesh sifter"]
  },
  {
    slug:"denver-omelette", title:"Denver Omelette, and where to source it", cuisine:"American", category:"Breakfast",
    kw:"denver omelette, western omelette, ham and pepper omelette, diner omelette, three egg omelette",
    iso:["PT10M","PT10M","PT20M"], prep:"10 min", cook:"10 min", makes:"makes 1",
    desc:"The Denver omelette — ham, onion, and green pepper folded into soft eggs — and where to source it.",
    dek:"Saute the ham, onion, and pepper first and get them fully cooked before the eggs, because eggs move fast and raw pepper stays crunchy. Pull the pan off the heat while the top is still glossy and barely set — carryover finishes it soft, not rubbery.",
    card:"Soft-set eggs folded around sauteed ham, onion, and green pepper.",
    ing:[
      {n:"Eggs", q:"Three, beaten just until blended — over-whisking makes them tough.", amt:"3 eggs", local:true},
      {n:"Cooked ham", q:"Diced; a good smoky ham steak is the classic. Brown it for flavor.", amt:"1/3 cup", local:true},
      {n:"Green bell pepper", q:"Diced small and softened first so it isn't raw in the fold.", amt:"1/4 cup", local:true},
      {n:"Yellow onion", q:"Diced fine and sweated with the pepper.", amt:"1/4 cup", local:true},
      {n:"Cheddar cheese", q:"Optional but common — shredded, melted into the fold.", amt:"1/4 cup", local:true},
      {n:"Butter", q:"For the pan; enough to coat so the eggs slide and stay tender.", amt:"1 tbsp", local:true}
    ],
    steps:[
      {b:"Saute the filling", t:"Cook ham, onion, and pepper in a little butter until softened and lightly browned; set aside."},
      {b:"Beat the eggs", t:"Whisk eggs with a pinch of salt just until uniform."},
      {b:"Pour and swirl", t:"Melt butter in a nonstick pan, add eggs, and swirl, pushing set edges in to let raw egg flow under."},
      {b:"Fill while glossy", t:"When the top is still slightly wet, spoon the filling and cheese over one half."},
      {b:"Fold and serve", t:"Fold the empty half over, slide onto a plate, and serve immediately."}
    ],
    tools:["Nonstick pan|8 inch nonstick skillet","Silicone spatula|silicone spatula","Whisk|balloon whisk"]
  }
];

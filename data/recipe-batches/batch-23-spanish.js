module.exports = [
  {
    slug:"paella",
    title:"Paella, and where to source it",
    cuisine:"Spanish",
    category:"Main",
    kw:"paella, spanish rice, seafood paella, valencian rice, bomba rice",
    iso:["PT25M","PT35M","PT1H"],
    prep:"25 min", cook:"35 min", makes:"6 servings",
    desc:"Spanish rice cooked flat in a wide pan with saffron, sofrito, and a crisp bottom crust.",
    dek:"Paella rewards the right grain and a restrained hand; bomba can soak up three times its volume in stock without collapsing into mush. What you're really after is the socarrat, the toasted crust along the bottom, and it forms only if you stop stirring the moment the rice hits the pan. Spread the rice thin, about one grain deep, and let the heat do the rest.",
    card:"Saffron-stained bomba rice cooked flat and undisturbed until the bottom toasts into socarrat.",
    ing:[
      { n:"Bomba rice", q:"The classic paella grain; it absorbs stock without going creamy or collapsing like risotto rice.", amt:"2 cups", shelf:"rice" },
      { n:"Spanish chorizo", q:"Cured smoked sausage that renders paprika-red fat into the base; slice it thin so it crisps.", amt:"8 oz", shelf:"sausage" },
      { n:"Saffron threads", q:"The color and perfume of real paella; bloom the threads in warm stock so they bleed fully.", amt:"1 pinch", local:true },
      { n:"Smoked paprika", q:"Pimenton builds the deep red base of the sofrito; smoked Spanish paprika is non-negotiable here.", amt:"1 tbsp", shelf:"spices" },
      { n:"Olive oil", q:"The cooking fat for the whole pan; a good Spanish oil carries the sofrito flavor.", amt:"1/4 cup", shelf:"olive-oil" },
      { n:"Canned tomatoes", q:"Grated or crushed into the sofrito for body and acidity; low-acid canned tomato cooks down sweet.", amt:"1 cup", shelf:"canned-tomatoes" },
      { n:"Fresh shrimp", q:"Laid on top for the last minutes; buy shell-on shrimp and cook just until pink.", amt:"12 large", local:true },
      { n:"Yellow onion", q:"The base of the sofrito, cooked slow until soft.", amt:"1", local:true },
      { n:"Red bell pepper", q:"Cooked into the sofrito for sweetness and color.", amt:"1", local:true }
    ],
    steps:[
      { b:"Build the sofrito", t:"Brown the chorizo in olive oil, then cook onion, pepper, tomato, and paprika down to a dark jammy paste, about 15 minutes." },
      { b:"Bloom the saffron", t:"Crush the saffron threads and steep them in 4 cups of warm stock so the color pulls fully." },
      { b:"Add the rice", t:"Stir the rice into the sofrito for 1 minute, then pour in the saffron stock and spread the rice flat and even." },
      { b:"Do not stir", t:"Simmer 18 minutes without stirring so the bottom can toast; lay the shrimp on top for the last 6 minutes." },
      { b:"Make the socarrat", t:"When the liquid is gone, raise the heat 2 minutes until you hear crackling and smell toasted rice; rest 5 minutes off heat before serving." }
    ],
    tools:["Paella pan|15 inch carbon steel paella pan","Box grater|stainless box grater","Wooden spoon|wooden cooking spoons","Ladle|stainless soup ladle","Mortar and pestle|granite mortar and pestle"]
  },
  {
    slug:"tortilla-espanola",
    title:"Tortilla Española, and where to source it",
    cuisine:"Spanish",
    category:"Main",
    kw:"tortilla espanola, spanish omelette, potato omelette, spanish tortilla, tortilla de patatas",
    iso:["PT15M","PT30M","PT45M"],
    prep:"15 min", cook:"30 min", makes:"6 servings",
    desc:"Thick Spanish omelette of eggs and potatoes cooked slow in olive oil and flipped.",
    dek:"A tortilla is three ingredients, so each one has to be right: real eggs, waxy potatoes, and enough olive oil to poach them soft. The technique that matters is the flip, sliding the set omelette onto a plate and back into the pan to cook the second side. Cook it slow and pull it while the center still trembles.",
    card:"Eggs and olive-oil-poached potatoes cooked into a thick omelette and flipped to set both sides.",
    ing:[
      { n:"Eggs", q:"The binder and the body of the tortilla; fresh eggs with deep yolks set a custardy center.", amt:"6 large", shelf:"eggs" },
      { n:"Potatoes", q:"The bulk of the tortilla; a waxy yellow potato holds its shape after poaching in oil.", amt:"1.5 lb", shelf:"potatoes" },
      { n:"Olive oil", q:"Used to poach the potatoes soft, not to fry them crisp; you strain most of it back out.", amt:"1.5 cups", shelf:"olive-oil" },
      { n:"Yellow onion", q:"Poached with the potatoes for sweetness; some cooks skip it, but it earns its place.", amt:"1", local:true }
    ],
    steps:[
      { b:"Slice thin", t:"Peel and slice potatoes into 1/8-inch rounds and slice the onion thin so both cook evenly." },
      { b:"Poach in oil", t:"Cook potatoes and onion in the olive oil over medium-low for 20 minutes until soft but not browned; drain, saving the oil." },
      { b:"Fold into eggs", t:"Beat the eggs with salt, fold in the warm potatoes, and rest 10 minutes so the potato soaks up egg." },
      { b:"Set the first side", t:"Cook in 2 tbsp of the reserved oil over medium for 4 minutes until the edges set but the center is still loose." },
      { b:"Flip", t:"Slide onto a plate, invert the pan over it, flip together, and cook 3 more minutes; the center should stay just soft." }
    ],
    tools:["Nonstick skillet|10 inch nonstick skillet","Flat plate|large flat serving plate","Mandoline|handheld mandoline slicer","Mixing bowl|stainless mixing bowls","Spatula|silicone spatula"]
  },
  {
    slug:"gazpacho",
    title:"Gazpacho, and where to source it",
    cuisine:"Spanish",
    category:"Soup",
    kw:"gazpacho, cold tomato soup, spanish cold soup, andalusian gazpacho",
    iso:["PT20M","PT0M","PT20M"],
    prep:"20 min", cook:"0 min", makes:"4 servings",
    desc:"Chilled Andalusian soup of raw tomatoes, cucumber, pepper, and olive oil blended smooth.",
    dek:"Nothing here gets cooked, so gazpacho depends entirely on August tomatoes and a good olive oil; out of season it just tastes thin. Drizzle the oil in slowly at the end with the blender running so it emulsifies, which is what turns the soup silky and pale orange rather than watery. Chill it hard before you serve it.",
    card:"Raw summer tomatoes, cucumber, and pepper blended with olive oil into a silky chilled soup.",
    ing:[
      { n:"Olive oil", q:"Drizzled in at the end to emulsify; a peppery Spanish oil makes the soup creamy and rounds the acid.", amt:"1/2 cup", shelf:"olive-oil" },
      { n:"Sherry vinegar", q:"The acid that wakes the whole bowl; Spanish sherry vinegar is sharper and nuttier than wine vinegar.", amt:"3 tbsp", shelf:"vinegar" },
      { n:"Rustic bread", q:"A handful soaked and blended in to thicken and give body; day-old country bread works best.", amt:"2 slices", shelf:"bread" },
      { n:"Ripe tomatoes", q:"The whole point of the soup; use dead-ripe summer tomatoes or make something else.", amt:"2 lb", local:true },
      { n:"Cucumber", q:"Peeled and blended for cool freshness; a firm cucumber keeps it from going bitter.", amt:"1", local:true },
      { n:"Green bell pepper", q:"A small amount blended in for the grassy Andalusian bite.", amt:"1/2", local:true },
      { n:"Garlic", q:"One small clove raw for backbone; too much overpowers the tomato.", amt:"1 clove", local:true }
    ],
    steps:[
      { b:"Soak the bread", t:"Tear the bread and soak it in a splash of water so it blends smooth." },
      { b:"Blend the base", t:"Blend tomatoes, cucumber, pepper, garlic, soaked bread, and vinegar until fully smooth, about 2 minutes." },
      { b:"Emulsify", t:"With the blender running, pour in the olive oil in a thin stream until the soup turns pale orange and creamy." },
      { b:"Strain", t:"Pass through a sieve for a silky texture, pressing the solids to get all the liquid." },
      { b:"Chill", t:"Refrigerate at least 2 hours until cold; taste and adjust salt and vinegar before serving." }
    ],
    tools:["Blender|high speed blender","Fine sieve|fine mesh strainer","Mixing bowl|stainless mixing bowls","Ladle|stainless soup ladle","Chef knife|8 inch chef knife"]
  },
  {
    slug:"patatas-bravas",
    title:"Patatas Bravas, and where to source it",
    cuisine:"Spanish",
    category:"Appetizer",
    kw:"patatas bravas, spanish fried potatoes, brava sauce, tapas potatoes",
    iso:["PT15M","PT30M","PT45M"],
    prep:"15 min", cook:"30 min", makes:"4 servings",
    desc:"Crisp fried potato cubes under a smoky-spicy brava sauce, a classic Spanish tapa.",
    dek:"Bravas are about contrast: the potato has to be crisp outside and fluffy inside, which means par-cooking then frying hot. The sauce is the other half, a smoky paprika brava that should sting a little. Fry in two stages and don't crowd the pan.",
    card:"Twice-fried potato cubes topped with a smoky, spicy paprika brava sauce.",
    ing:[
      { n:"Potatoes", q:"The whole tapa; a starchy potato fries up crisp outside and fluffy in the middle.", amt:"2 lb", shelf:"potatoes" },
      { n:"Olive oil", q:"For frying and for the sauce; Spanish olive oil is the traditional frying fat here.", amt:"2 cups", shelf:"olive-oil" },
      { n:"Smoked paprika", q:"The soul of the brava sauce; use both sweet and hot pimenton for smoke and heat.", amt:"1 tbsp", shelf:"spices" },
      { n:"Canned tomatoes", q:"The base of the brava sauce, cooked down thick; low-acid canned tomato balances the paprika.", amt:"1 cup", shelf:"canned-tomatoes" },
      { n:"Sherry vinegar", q:"A splash in the sauce to cut the richness; sherry vinegar is the Spanish default.", amt:"1 tbsp", shelf:"vinegar" },
      { n:"Garlic", q:"Fried into the sauce for sharpness and into the oil for aroma.", amt:"3 cloves", local:true }
    ],
    steps:[
      { b:"Cut and par-cook", t:"Cut potatoes into 1-inch cubes and simmer 8 minutes until just tender; drain and dry well." },
      { b:"Make the brava", t:"Cook garlic and both paprikas in oil 30 seconds, add tomato and vinegar, and simmer 10 minutes; blend smooth." },
      { b:"First fry", t:"Fry the dried potatoes at 300F for 6 minutes until soft; lift out and let them rest." },
      { b:"Second fry", t:"Raise the oil to 375F and fry again 4 minutes until deep golden and crisp; drain and salt." },
      { b:"Sauce and serve", t:"Pile the potatoes on a plate and spoon the warm brava over the top so they stay crisp underneath." }
    ],
    tools:["Heavy pot|4 quart dutch oven","Spider skimmer|wire spider strainer","Blender|immersion blender","Thermometer|deep fry thermometer","Slotted spoon|stainless slotted spoon"]
  },
  {
    slug:"croquetas",
    title:"Croquetas, and where to source it",
    cuisine:"Spanish",
    category:"Appetizer",
    kw:"croquetas, spanish croquettes, ham croquettes, croquetas de jamon",
    iso:["PT30M","PT20M","PT50M"],
    prep:"30 min", cook:"20 min", makes:"20 croquetas",
    desc:"Creamy bechamel croquettes studded with jamon, breaded and fried until crisp.",
    dek:"A good croqueta runs molten inside a shell that shatters, and that contrast comes from a thick bechamel chilled until solid before you shape it. Cook the roux long enough that the flour sheds its raw, pasty taste. Then let the paste set overnight so it holds together in the hot oil instead of bursting.",
    card:"Thick jamon bechamel chilled firm, breaded, and fried into crisp molten croquettes.",
    ing:[
      { n:"Whole milk", q:"The body of the bechamel; whole milk sets a custardy paste that fries molten.", amt:"3 cups", shelf:"milk" },
      { n:"Butter", q:"Makes the roux with the flour; real butter gives the bechamel richness.", amt:"5 tbsp", shelf:"butter" },
      { n:"Baking flour", q:"Thickens the bechamel into a paste stiff enough to shape; cook it out fully.", amt:"3/4 cup", shelf:"baking-flour" },
      { n:"Cured jamon", q:"The classic filling; salty Spanish ham diced fine flavors the whole paste.", amt:"6 oz", shelf:"bacon" },
      { n:"Eggs", q:"Beaten for the breading so the crumbs stick; fresh eggs make a clean coat.", amt:"2", shelf:"eggs" },
      { n:"Breadcrumbs", q:"The crisp shell; fine dry breadcrumbs fry up even and golden, then deep-fried in plenty of olive oil.", amt:"2 cups", shelf:"bread" },
      { n:"Yellow onion", q:"Minced fine and softened in the butter before the flour goes in; it sweetens the bechamel.", amt:"1/2", local:true }
    ],
    steps:[
      { b:"Cook the roux", t:"Soften the minced onion in the butter, whisk in the flour, and cook 3 minutes until it smells nutty and loses the raw flour taste." },
      { b:"Build the bechamel", t:"Add warm milk slowly, whisking, and cook until very thick, then fold in the diced jamon." },
      { b:"Chill firm", t:"Spread the paste on a tray, press plastic to the surface, and chill at least 4 hours or overnight until solid." },
      { b:"Shape and bread", t:"Roll the cold paste into logs, dip in beaten egg, then coat in breadcrumbs; a double coat holds best." },
      { b:"Fry", t:"Fry at 350F for 2 minutes until deep golden; drain on a rack so they stay crisp." }
    ],
    tools:["Heavy saucepan|3 quart saucepan","Whisk|balloon whisk","Sheet pan|half sheet pan","Spider skimmer|wire spider strainer","Thermometer|deep fry thermometer"]
  },
  {
    slug:"gambas-al-ajillo",
    title:"Gambas al Ajillo, and where to source it",
    cuisine:"Spanish",
    category:"Appetizer",
    kw:"gambas al ajillo, garlic shrimp, spanish shrimp, sizzling garlic prawns",
    iso:["PT10M","PT10M","PT20M"],
    prep:"10 min", cook:"10 min", makes:"4 servings",
    desc:"Shrimp sizzled in olive oil with sliced garlic and dried chile, a five-minute tapa.",
    dek:"This dish is almost nothing but garlic, oil, and shrimp, so all three have to be good and the oil has to be generous. The technique that matters is infusing the oil with garlic and chile slowly before the shrimp ever go in, so it never scorches. Cook the shrimp for two minutes and no more.",
    card:"Fresh shrimp sizzled in garlic-and-chile-infused olive oil, served bubbling in the pan.",
    ing:[
      { n:"Olive oil", q:"Not a coating but a sauce; you want enough good Spanish oil to pool and bubble.", amt:"1/2 cup", shelf:"olive-oil" },
      { n:"Dried chile", q:"A single dried guindilla or arbol chile for gentle heat infused into the oil.", amt:"1", shelf:"dried-chiles" },
      { n:"Smoked paprika", q:"A pinch stirred in at the end for color and smoke; add it off heat so it never burns.", amt:"1/2 tsp", shelf:"spices" },
      { n:"Crusty bread", q:"For mopping the garlic oil; a rustic loaf is half the reason to make this.", amt:"1 loaf", shelf:"bread" },
      { n:"Fresh shrimp", q:"The star; buy shell-off fresh shrimp and cook them just to opaque.", amt:"1 lb", local:true },
      { n:"Garlic", q:"Sliced thin and fried gold in the oil; this is the defining flavor.", amt:"6 cloves", local:true }
    ],
    steps:[
      { b:"Infuse the oil", t:"Warm the olive oil with sliced garlic and the dried chile over medium-low until the garlic turns pale gold, about 3 minutes." },
      { b:"Add the shrimp", t:"Turn the heat to medium-high and add the shrimp in one layer; do not crowd them." },
      { b:"Sizzle", t:"Cook 2 minutes, turning once, until the shrimp are just opaque and curled." },
      { b:"Finish", t:"Off heat, stir in the smoked paprika and a pinch of salt so the paprika blooms without scorching." },
      { b:"Serve", t:"Bring the pan to the table still sizzling with plenty of bread to soak up the oil." }
    ],
    tools:["Cast iron skillet|10 inch cast iron skillet","Chef knife|8 inch chef knife","Tongs|kitchen tongs","Wooden spoon|wooden cooking spoons","Bread basket|serving bread basket"]
  },
  {
    slug:"caldo-verde",
    title:"Caldo Verde, and where to source it",
    cuisine:"Portuguese",
    category:"Soup",
    kw:"caldo verde, portuguese kale soup, green soup, potato kale soup",
    iso:["PT15M","PT30M","PT45M"],
    prep:"15 min", cook:"30 min", makes:"6 servings",
    desc:"Portuguese soup of pureed potato broth, sliced chorizo, and ribbons of kale.",
    dek:"Caldo verde is a peasant soup that depends on the quality of its three parts: a smoky sausage, a good olive oil, and kale cut into fine ribbons. The technique that matters is slicing the greens as thin as possible so they cook in a minute and stay bright. Puree the potato base smooth and add the kale only at the very end.",
    card:"Silky potato broth with smoky chorizo coins and finely shredded kale stirred in at the end.",
    ing:[
      { n:"Potatoes", q:"Pureed to thicken the broth into a silky base; a starchy potato blends smoothest.", amt:"1.5 lb", shelf:"potatoes" },
      { n:"Portuguese chorizo", q:"Smoky cured sausage sliced into coins; it flavors the whole pot and garnishes each bowl.", amt:"8 oz", shelf:"sausage" },
      { n:"Olive oil", q:"Stirred into the base and drizzled on top; a fruity oil is the finishing flavor.", amt:"1/4 cup", shelf:"olive-oil" },
      { n:"Kale", q:"Sliced into fine ribbons and wilted at the end; collard or Tuscan kale both work.", amt:"1 bunch", local:true },
      { n:"Yellow onion", q:"Softened in oil as the base of the broth.", amt:"1", local:true },
      { n:"Garlic", q:"Cooked with the onion for depth.", amt:"3 cloves", local:true }
    ],
    steps:[
      { b:"Build the base", t:"Soften onion and garlic in olive oil, add the diced potatoes and water to cover, and simmer 20 minutes until soft." },
      { b:"Brown the sausage", t:"Meanwhile sear the chorizo coins in a dry pan until the edges crisp and the fat renders." },
      { b:"Puree", t:"Blend the potato base smooth with an immersion blender until it is thick and silky." },
      { b:"Ribbon the kale", t:"Stack the leaves, roll them tight, and slice into the thinnest possible ribbons." },
      { b:"Finish", t:"Stir the kale and most of the chorizo into the hot base and cook 3 minutes until just tender; top each bowl with sausage and a swirl of olive oil." }
    ],
    tools:["Soup pot|6 quart stock pot","Immersion blender|hand immersion blender","Chef knife|8 inch chef knife","Ladle|stainless soup ladle","Skillet|10 inch skillet"]
  },
  {
    slug:"piri-piri-chicken",
    title:"Piri Piri Chicken, and where to source it",
    cuisine:"Portuguese",
    category:"Main",
    kw:"piri piri chicken, peri peri chicken, portuguese grilled chicken, spicy chicken",
    iso:["PT20M","PT40M","PT1H"],
    prep:"20 min", cook:"40 min", makes:"4 servings",
    desc:"Spatchcocked chicken marinated in a fiery piri piri chile sauce and grilled.",
    dek:"Piri piri is all about the sauce, a bright, garlicky chile paste that has to soak into the bird, so spatchcock it and marinate overnight. The technique that matters is grilling skin-side up first, then flipping to crisp the skin at the end so it chars without burning the sauce. Baste with reserved sauce, never the marinade.",
    card:"Spatchcocked chicken soaked in a garlicky chile-and-vinegar piri piri sauce and grilled crisp.",
    ing:[
      { n:"Whole chicken", q:"Spatchcocked so it cooks flat and even; a good pasture-raised bird has the flavor to stand up to the heat.", amt:"1 (4 lb)", shelf:"regenerative-meat" },
      { n:"Dried piri piri chiles", q:"The heart of the sauce; these small fiery chiles give the sauce its name and its burn.", amt:"6", shelf:"dried-chiles" },
      { n:"Red wine vinegar", q:"Acid to balance the heat and carry the marinade into the meat.", amt:"1/4 cup", shelf:"vinegar" },
      { n:"Olive oil", q:"Blended into the sauce to loosen it and help it cling.", amt:"1/3 cup", shelf:"olive-oil" },
      { n:"Smoked paprika", q:"Adds color and smoke to round out the raw chile heat.", amt:"1 tbsp", shelf:"spices" },
      { n:"Garlic", q:"A whole head blended into the sauce; this is a garlic-forward dish.", amt:"6 cloves", local:true },
      { n:"Lemon", q:"Juiced into the sauce for brightness.", amt:"1", local:true }
    ],
    steps:[
      { b:"Make the sauce", t:"Soak the chiles in hot water 15 minutes, then blend with garlic, vinegar, oil, paprika, and lemon into a loose paste." },
      { b:"Marinate", t:"Spatchcock the chicken, rub half the sauce under and over the skin, and chill at least 4 hours or overnight." },
      { b:"Grill skin-up", t:"Grill skin-side up over medium indirect heat 25 minutes so the meat cooks through gently." },
      { b:"Crisp the skin", t:"Flip skin-side down over direct heat 10 minutes, basting with reserved sauce, until charred and 165F in the thigh." },
      { b:"Rest", t:"Rest 10 minutes, then cut into pieces and serve with the remaining fresh sauce." }
    ],
    tools:["Grill|charcoal grill","Kitchen shears|poultry shears","Blender|high speed blender","Basting brush|silicone basting brush","Instant thermometer|instant read thermometer"]
  },
  {
    slug:"albondigas",
    title:"Albóndigas, and where to source it",
    cuisine:"Spanish",
    category:"Soup",
    kw:"albondigas, spanish meatball soup, meatball soup, sopa de albondigas",
    iso:["PT25M","PT35M","PT1H"],
    prep:"25 min", cook:"35 min", makes:"6 servings",
    desc:"Spanish meatball soup with tender pork-and-beef balls simmered in a tomato broth.",
    dek:"Albondigas is a meatball soup, so the meatballs have to be tender, which means soaking bread in milk to keep them soft instead of packing them tight. The technique that matters is simmering the raw meatballs directly in the broth so they release flavor into it. Keep the simmer gentle or the balls fall apart.",
    card:"Soft pork-and-beef meatballs simmered right in a paprika tomato broth until tender.",
    ing:[
      { n:"Ground pork and beef", q:"The meatballs; a half-and-half blend of good pasture-raised meat stays juicy in the broth.", amt:"1.5 lb", shelf:"regenerative-meat" },
      { n:"Canned tomatoes", q:"The base of the broth, cooked down with paprika; low-acid canned tomato makes a mellow soup.", amt:"1 can (28 oz)", shelf:"canned-tomatoes" },
      { n:"Bread", q:"Soaked in milk and mixed into the meat to keep the meatballs tender; day-old bread is ideal.", amt:"2 slices", shelf:"bread" },
      { n:"Eggs", q:"Bind the meatball mix so it holds without being dense.", amt:"1", shelf:"eggs" },
      { n:"Smoked paprika", q:"Colors and deepens the broth; smoked pimenton is the Spanish signature.", amt:"1 tbsp", shelf:"spices" },
      { n:"Olive oil", q:"For browning aromatics and building the broth base.", amt:"3 tbsp", shelf:"olive-oil" },
      { n:"Yellow onion", q:"The base of the broth, half also grated into the meatballs.", amt:"1", local:true },
      { n:"Garlic", q:"Both in the meatballs and the broth.", amt:"4 cloves", local:true }
    ],
    steps:[
      { b:"Soak the bread", t:"Tear the bread and soak it in a splash of milk until soft, then squeeze out the excess." },
      { b:"Mix the meatballs", t:"Combine meat, soaked bread, egg, grated onion, garlic, and salt; roll into balls the size of a walnut." },
      { b:"Build the broth", t:"Soften onion and garlic in oil, add paprika and tomato, then 6 cups of water and simmer 10 minutes." },
      { b:"Simmer the meatballs", t:"Slip the raw meatballs into the gently simmering broth and cook 20 minutes without a hard boil." },
      { b:"Finish", t:"Taste and adjust salt; serve with rice or bread and a drizzle of olive oil." }
    ],
    tools:["Soup pot|6 quart stock pot","Mixing bowl|stainless mixing bowls","Box grater|stainless box grater","Ladle|stainless soup ladle","Slotted spoon|stainless slotted spoon"]
  },
  {
    slug:"pan-con-tomate",
    title:"Pan con Tomate, and where to source it",
    cuisine:"Spanish",
    category:"Appetizer",
    kw:"pan con tomate, catalan tomato bread, pa amb tomaquet, spanish tomato bread",
    iso:["PT10M","PT5M","PT15M"],
    prep:"10 min", cook:"5 min", makes:"4 servings",
    desc:"Toasted bread rubbed with garlic and ripe tomato and finished with olive oil and salt.",
    dek:"With four ingredients, each one is on display: crusty grilled bread, a dead-ripe tomato, good oil, flaky salt. Grate the tomato against a box grater so the skin stays behind and you get pure pulp to spoon onto the hot toast. Assemble it just before serving, because the bread turns soggy fast.",
    card:"Grilled bread rubbed with garlic, spooned with grated ripe tomato, and finished with olive oil.",
    ing:[
      { n:"Rustic bread", q:"The base of the whole dish; a crusty country loaf grills up sturdy enough to hold the tomato.", amt:"1 loaf", shelf:"bread" },
      { n:"Olive oil", q:"Poured over generously at the end; this is the moment to use your best Spanish oil.", amt:"1/4 cup", shelf:"olive-oil" },
      { n:"Finishing salt", q:"Flaky salt scattered on top for crunch and seasoning; it makes the tomato taste like more.", amt:"to taste", shelf:"finishing-salt" },
      { n:"Ripe tomatoes", q:"Grated into pulp; only a dead-ripe summer tomato has enough juice and flavor.", amt:"3", local:true },
      { n:"Garlic", q:"A raw clove rubbed onto the hot toast for a sharp backbone.", amt:"2 cloves", local:true }
    ],
    steps:[
      { b:"Grill the bread", t:"Slice the bread thick and grill or broil until the surface is crisp and charred at the edges." },
      { b:"Rub with garlic", t:"While hot, rub a halved raw garlic clove across the rough surface of each slice." },
      { b:"Grate the tomato", t:"Halve the tomatoes and grate the cut side on a box grater, leaving the skin behind, into a bowl of pulp." },
      { b:"Spoon and dress", t:"Spoon the tomato pulp onto the toast, drench with olive oil, and finish with flaky salt." },
      { b:"Serve now", t:"Eat immediately while the bread is still crisp underneath the tomato." }
    ],
    tools:["Box grater|stainless box grater","Grill pan|cast iron grill pan","Serrated knife|bread knife","Mixing bowl|stainless mixing bowls","Pastry brush|silicone basting brush"]
  },
  {
    slug:"chorizo-and-potatoes",
    title:"Chorizo and Potatoes, and where to source it",
    cuisine:"Spanish",
    category:"Main",
    kw:"chorizo and potatoes, spanish chorizo potatoes, patatas con chorizo, chorizo skillet",
    iso:["PT15M","PT30M","PT45M"],
    prep:"15 min", cook:"30 min", makes:"4 servings",
    desc:"Skillet of crisp potatoes cooked in rendered chorizo fat with paprika and onion.",
    dek:"This one-pan dish is built on the fat the chorizo gives up, so use a real cured Spanish chorizo that renders red and smoky. The technique that matters is browning the potatoes hard in that fat, undisturbed, so they crisp instead of steam. A splash of vinegar at the end cuts the richness.",
    card:"Potatoes browned crisp in rendered chorizo fat with paprika, onion, and a hit of vinegar.",
    ing:[
      { n:"Spanish chorizo", q:"The fat and flavor engine of the pan; a cured smoked chorizo renders paprika-red oil.", amt:"12 oz", shelf:"sausage" },
      { n:"Potatoes", q:"The bulk of the dish; a waxy potato browns crisp and holds its shape.", amt:"2 lb", shelf:"potatoes" },
      { n:"Smoked paprika", q:"Reinforces the chorizo's own paprika and deepens the color.", amt:"1 tsp", shelf:"spices" },
      { n:"Olive oil", q:"A little to start the potatoes before the chorizo fat takes over.", amt:"2 tbsp", shelf:"olive-oil" },
      { n:"Sherry vinegar", q:"A splash at the end to cut the fat and brighten the plate.", amt:"1 tbsp", shelf:"vinegar" },
      { n:"Yellow onion", q:"Cooked down with the potatoes for sweetness.", amt:"1", local:true },
      { n:"Garlic", q:"Added near the end so it does not burn.", amt:"3 cloves", local:true }
    ],
    steps:[
      { b:"Cut", t:"Cut potatoes into 3/4-inch chunks and slice the chorizo into coins." },
      { b:"Render the chorizo", t:"Cook the chorizo in a little oil over medium until it renders its red fat and crisps, then set aside." },
      { b:"Brown the potatoes", t:"Cook the potatoes in the chorizo fat over medium-high, undisturbed, until a deep crust forms, about 12 minutes." },
      { b:"Add aromatics", t:"Stir in onion, garlic, and paprika and cook 8 minutes more until the potatoes are tender through." },
      { b:"Finish", t:"Return the chorizo, add the vinegar, and toss; taste for salt and serve hot." }
    ],
    tools:["Cast iron skillet|12 inch cast iron skillet","Chef knife|8 inch chef knife","Wooden spoon|wooden cooking spoons","Spatula|metal fish spatula","Cutting board|wood cutting board"]
  },
  {
    slug:"fabada",
    title:"Fabada Asturiana, and where to source it",
    cuisine:"Spanish",
    category:"Soup",
    kw:"fabada, fabada asturiana, spanish bean stew, asturian bean stew, chorizo bean soup",
    iso:["PT20M","PT2H","PT2H20M"],
    prep:"20 min", cook:"2 hr", makes:"6 servings",
    desc:"Rich Asturian bean stew of fat white beans, chorizo, and morcilla simmered slow.",
    dek:"Fabada is a bean stew, so the beans are everything: big creamy white fabes cooked slow until they turn silky but stay whole. The technique that matters is a gentle simmer and periodic scares of cold water, which keep the beans from bursting. Never stir hard; swirl the pot instead.",
    card:"Fat white beans simmered slow with smoky chorizo and morcilla into a silky Asturian stew.",
    ing:[
      { n:"Large white beans", q:"The heart of fabada; big creamy fabes or large white beans cook up silky and hold their shape.", amt:"1 lb", shelf:"heirloom-beans" },
      { n:"Spanish chorizo", q:"Smoky cured sausage that colors and flavors the whole pot; add it whole and slice later.", amt:"8 oz", shelf:"sausage" },
      { n:"Smoked paprika", q:"A spoonful deepens the smoke and reddens the broth; smoked pimenton is essential.", amt:"1 tbsp", shelf:"spices" },
      { n:"Cured bacon", q:"A piece of pancetta or salt pork adds fat and depth to the pot; it melts into the broth.", amt:"4 oz", shelf:"bacon" },
      { n:"Saffron threads", q:"A pinch bloomed into the broth for color and the faint floral note fabada is known for.", amt:"1 pinch", local:true },
      { n:"Yellow onion", q:"Left whole in the pot to flavor the broth, then discarded.", amt:"1", local:true },
      { n:"Garlic", q:"A few cloves left whole to perfume the beans.", amt:"3 cloves", local:true }
    ],
    steps:[
      { b:"Soak the beans", t:"Soak the white beans in cold water overnight so they cook evenly and stay whole." },
      { b:"Start the pot", t:"Cover the drained beans with cold water, add the whole onion, garlic, chorizo, and bacon, and bring to a bare simmer." },
      { b:"Simmer low", t:"Cook at the gentlest simmer for 2 hours, skimming the foam and adding a splash of cold water twice to keep the beans intact." },
      { b:"Season", t:"Stir in the paprika and bloomed saffron in the last 30 minutes; keep the heat low so nothing scorches." },
      { b:"Rest and serve", t:"Discard the onion, slice the meats back in, and let the stew rest 20 minutes so the broth thickens." }
    ],
    tools:["Heavy pot|6 quart dutch oven","Ladle|stainless soup ladle","Skimmer|fine mesh skimmer","Wooden spoon|wooden cooking spoons","Chef knife|8 inch chef knife"]
  }
];

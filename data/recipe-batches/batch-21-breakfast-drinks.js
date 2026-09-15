module.exports = [
  {
    slug:"oatmeal",
    title:"Oatmeal, and where to source it",
    cuisine:"American",
    category:"Breakfast",
    kw:"oatmeal, porridge, rolled oats, breakfast, steel cut oats",
    iso:["PT2M","PT10M","PT12M"],
    prep:"2 min", cook:"10 min", makes:"2 servings",
    desc:"Stovetop oatmeal built on a real liquid ratio and finished with maple, nut butter, and fruit.",
    dek:"Oatmeal is a ratio game: the liquid you cook it in decides whether it tastes flat or full. Cook rolled oats in a 2:1 liquid-to-oats ratio, use at least half milk, and salt the pot before the oats go in.",
    card:"Stovetop oats done right, plus the toppings worth sourcing.",
    ing:[
      { n:"Rolled oats", q:"Old-fashioned rolled oats give body without turning to paste; steel-cut need 25 min instead of 10.", amt:"1 cup", local:true },
      { n:"Whole milk", q:"Cooking oats in milk instead of water is the single biggest upgrade for creaminess.", amt:"1 cup", shelf:"milk" },
      { n:"Maple syrup", q:"Real Grade A dark syrup sweetens and browns better than any pancake syrup.", amt:"2 tbsp", shelf:"maple-syrup" },
      { n:"Nut butter", q:"A spoonful stirred in off-heat adds fat and protein so the bowl actually holds you.", amt:"1 tbsp", shelf:"nut-butter" },
      { n:"Dried fruit", q:"Raisins or chopped dates added early plump up and sweeten the pot as it cooks.", amt:"1/4 cup", shelf:"dried-fruit" },
      { n:"Banana or berries", q:"Fresh fruit on top adds acidity and cuts the richness.", amt:"1/2 cup", local:true }
    ],
    steps:[
      { b:"Boil the liquid", t:"Bring 1 cup milk plus 1 cup water and a pinch of salt to a simmer; salt now, not at the end." },
      { b:"Add oats", t:"Stir in the oats and dried fruit, drop to low, and cook 8-10 min until thick and the oats have lost their raw bite." },
      { b:"Finish off heat", t:"Kill the heat, stir in the nut butter and maple, and let it sit 2 min to set up before topping with fresh fruit." }
    ],
    tools:["Heavy saucepan|small heavy bottomed saucepan","Wooden spoon|wooden mixing spoon","Measuring cups|dry liquid measuring cup set","Cereal bowls|deep cereal bowls"]
  },
  {
    slug:"smoothie",
    title:"Fruit Smoothie, and where to source it",
    cuisine:"American",
    category:"Breakfast",
    kw:"smoothie, fruit smoothie, breakfast, blender, yogurt smoothie",
    iso:["PT5M","PT0M","PT5M"],
    prep:"5 min", cook:"0 min", makes:"2 servings",
    desc:"A blender fruit smoothie built on the right liquid-to-fruit ratio with frozen fruit for body.",
    dek:"A good smoothie is about texture, not luck: frozen fruit is what makes it thick instead of watery, so skip the ice. Load the blender liquid-first, then soft ingredients, then frozen fruit on top so the blades catch.",
    card:"The blender ratio and the two shelves that make it creamy.",
    ing:[
      { n:"Frozen banana", q:"A frozen banana is the backbone; it thickens and sweetens so you need no added sugar.", amt:"1 large", local:true },
      { n:"Frozen berries", q:"Frozen fruit chills and thickens without diluting the way ice does.", amt:"1 cup", local:true },
      { n:"Whole milk yogurt", q:"Plain whole-milk yogurt adds protein and tang; the fat keeps it from tasting thin.", amt:"1/2 cup", shelf:"milk" },
      { n:"Milk", q:"Start with 3/4 cup and add more only if the blender stalls.", amt:"3/4 cup", shelf:"milk" },
      { n:"Nut butter", q:"A spoonful adds fat and staying power so it works as a real breakfast.", amt:"1 tbsp", shelf:"nut-butter" },
      { n:"Raw honey", q:"Drizzle in only if the fruit is underripe; taste first.", amt:"1 tsp", shelf:"raw-honey" }
    ],
    steps:[
      { b:"Layer the blender", t:"Add milk and yogurt first, then nut butter, then the frozen banana and berries on top so the liquid reaches the blades." },
      { b:"Blend", t:"Run 45-60 sec until fully smooth; if it stalls into a vortex, stop and add milk 2 tbsp at a time." },
      { b:"Taste and adjust", t:"Sweeten with honey only if it needs it, then blend 5 sec more." }
    ],
    tools:["Blender|countertop blender","Tamper|blender tamper stick","Measuring cups|liquid measuring cup","Tall glasses|tall smoothie glasses"]
  },
  {
    slug:"avocado-toast",
    title:"Avocado Toast, and where to source it",
    cuisine:"American",
    category:"Breakfast",
    kw:"avocado toast, breakfast, sourdough toast, smashed avocado, brunch",
    iso:["PT5M","PT5M","PT10M"],
    prep:"5 min", cook:"5 min", makes:"2 servings",
    desc:"Avocado toast built on properly toasted bread, a ripe avocado, and acid to wake it up.",
    dek:"This lives or dies on two things: bread with real structure that stays crisp under the avocado, and enough acid and salt to keep it from tasting like green paste. Toast the bread dark, and dress the avocado with lemon and flaky salt right on the toast.",
    card:"The bread, the fat, and the acid that make it worth eating.",
    ing:[
      { n:"Ripe avocado", q:"It should yield to gentle pressure; rock-hard is flavorless and stringy under a fork.", amt:"1 large", local:true },
      { n:"Sourdough bread", q:"A sturdy open crumb crisps up and holds the weight without going soggy.", amt:"2 thick slices", shelf:"bread" },
      { n:"Lemon", q:"Acid is non-negotiable; it stops browning and cuts the fat.", amt:"1/2, juiced", shelf:"citrus" },
      { n:"Olive oil", q:"A finishing drizzle of good oil ties it together.", amt:"1 tbsp", shelf:"olive-oil" },
      { n:"Finishing salt", q:"Flaky salt on top gives crunch and pops of seasoning in every bite.", amt:"to taste", shelf:"finishing-salt" },
      { n:"Eggs", q:"A fried or jammy egg on top turns it into a full breakfast; optional.", amt:"2", local:true }
    ],
    steps:[
      { b:"Toast hard", t:"Toast the sourdough until deeply golden and firm; a pale slice will collapse under the avocado." },
      { b:"Smash on the toast", t:"Scoop the avocado onto the hot toast, add lemon juice and salt, and mash with a fork so it grips the bread." },
      { b:"Finish", t:"Drizzle with olive oil, add more flaky salt, and top with an egg if using." }
    ],
    tools:["Toaster or skillet|cast iron skillet","Fork|dinner fork","Citrus juicer|handheld citrus press","Nonstick pan|nonstick egg pan"]
  },
  {
    slug:"breakfast-tacos",
    title:"Breakfast Tacos, and where to source it",
    cuisine:"Mexican",
    category:"Breakfast",
    kw:"breakfast tacos, eggs, tortillas, chorizo, tex mex breakfast",
    iso:["PT10M","PT15M","PT25M"],
    prep:"10 min", cook:"15 min", makes:"4 tacos",
    desc:"Breakfast tacos with soft-scrambled eggs, warm corn tortillas, and salsa.",
    dek:"The whole thing hinges on soft, low-and-slow scrambled eggs and warm tortillas charred over a live flame. Cook the eggs over low heat and pull them while still glossy, because they keep cooking off the pan.",
    card:"The eggs, the tortillas, and the shelves for the fillings.",
    ing:[
      { n:"Eggs", q:"Fresh eggs scrambled low and slow stay custardy instead of rubbery.", amt:"6", local:true },
      { n:"Corn tortillas", q:"Real masa tortillas warmed over a flame beat anything from a plastic bag.", amt:"4", shelf:"masa" },
      { n:"Chorizo", q:"Fresh Mexican chorizo rendered first gives fat to scramble the eggs in.", amt:"1/4 lb", shelf:"sausage" },
      { n:"Queso fresco", q:"Crumbled cotija or queso fresco adds salt and a milky crumble.", amt:"1/2 cup", shelf:"mexican-cheese" },
      { n:"Salsa", q:"A good roasted salsa is the sauce; make or buy one with real char.", amt:"1/2 cup", shelf:"salsa" },
      { n:"Cilantro and onion", q:"Chopped raw for the fresh, sharp top note.", amt:"1/4 cup each", local:true }
    ],
    steps:[
      { b:"Render the chorizo", t:"Cook chorizo in a dry skillet over medium 5-6 min until browned and the fat renders out." },
      { b:"Scramble low", t:"Beat the eggs, pour into the chorizo fat over low heat, and fold slowly; pull them off while still glossy and slightly wet." },
      { b:"Char the tortillas", t:"Warm tortillas directly over a gas flame or in a dry pan 20-30 sec per side until pliable and spotted." },
      { b:"Build", t:"Fill each tortilla with eggs, top with cheese, salsa, cilantro and onion, and fold." }
    ],
    tools:["Cast iron skillet|cast iron skillet","Rubber spatula|silicone spatula","Tongs|kitchen tongs","Comal or griddle|flat comal griddle"]
  },
  {
    slug:"chia-pudding",
    title:"Chia Pudding, and where to source it",
    cuisine:"American",
    category:"Breakfast",
    kw:"chia pudding, overnight chia, breakfast, meal prep, chia seeds",
    iso:["PT5M","PT0M","PT5M"],
    prep:"5 min", cook:"0 min", makes:"2 servings",
    desc:"Overnight chia pudding built on the correct seed-to-liquid ratio so it sets instead of clumping.",
    dek:"The only thing that matters here is the ratio and the stir: too little liquid and it clumps, no second stir and the seeds sink into a lump. Use roughly 1 part chia to 4 parts liquid, and stir again 10 minutes in before it sets overnight.",
    card:"The exact ratio and the shelves that make it good.",
    ing:[
      { n:"Chia seeds", q:"They swell to a tapioca-like gel; freshness matters, stale seeds set poorly.", amt:"1/4 cup", shelf:"seeds" },
      { n:"Milk", q:"Whole milk or a full-fat plant milk gives the pudding body; skim tastes watery.", amt:"1 cup", shelf:"milk" },
      { n:"Maple syrup", q:"Sweeten the liquid before it sets so it distributes evenly.", amt:"1 tbsp", shelf:"maple-syrup" },
      { n:"Nut butter", q:"Whisked into the milk it adds fat and richness.", amt:"1 tbsp", shelf:"nut-butter" },
      { n:"Berries", q:"Fresh fruit layered on at serving keeps its texture.", amt:"1/2 cup", local:true }
    ],
    steps:[
      { b:"Whisk the base", t:"Whisk milk, maple, and nut butter until smooth, then whisk in the chia seeds." },
      { b:"Stir twice", t:"Let it sit 10 min, whisk again to break up clumps, then cover and refrigerate at least 4 hours or overnight." },
      { b:"Top and serve", t:"Stir, loosen with a splash of milk if too stiff, and top with fresh berries." }
    ],
    tools:["Mason jars|glass mason jars with lids","Whisk|small balloon whisk","Measuring cups|measuring cup set","Mixing bowl|small mixing bowl"]
  },
  {
    slug:"yogurt-parfait",
    title:"Yogurt Parfait, and where to source it",
    cuisine:"American",
    category:"Breakfast",
    kw:"yogurt parfait, granola, breakfast, greek yogurt, honey",
    iso:["PT5M","PT0M","PT5M"],
    prep:"5 min", cook:"0 min", makes:"2 servings",
    desc:"A yogurt parfait layered with granola and fruit, built to keep the granola crunchy.",
    dek:"A parfait is only as good as its yogurt and its granola, and the one mistake is soggy granola. Use thick strained yogurt and layer the granola last, right before eating, so it stays crisp.",
    card:"The three shelves that separate a real parfait from mush.",
    ing:[
      { n:"Greek yogurt", q:"Thick strained whole-milk yogurt holds the layers and brings the tang; thin yogurt slides.", amt:"1 1/2 cups", shelf:"milk" },
      { n:"Granola", q:"A well-toasted, clustery granola is the crunch; the whole dish rests on its quality.", amt:"1 cup", shelf:"granola" },
      { n:"Raw honey", q:"A drizzle between layers sweetens without dissolving the way sugar would.", amt:"2 tbsp", shelf:"raw-honey" },
      { n:"Dried fruit", q:"Chopped dates or dried cherries add chew and concentrated sweetness.", amt:"1/4 cup", shelf:"dried-fruit" },
      { n:"Fresh berries", q:"Fresh fruit brings the acidity that keeps it from being one-note.", amt:"1 cup", local:true }
    ],
    steps:[
      { b:"Layer yogurt and fruit", t:"Spoon yogurt into a glass, add berries and dried fruit, drizzle honey, and repeat once." },
      { b:"Top with granola last", t:"Add the granola only on top just before serving so it stays crunchy." }
    ],
    tools:["Parfait glasses|tall parfait glasses","Spoons|long parfait spoons","Measuring cups|measuring cup set","Small ladle|small serving spoon"]
  },
  {
    slug:"matcha-latte",
    title:"Matcha Latte, and where to source it",
    cuisine:"Japanese",
    category:"Drink",
    kw:"matcha latte, green tea latte, matcha, iced matcha, whisk",
    iso:["PT5M","PT2M","PT7M"],
    prep:"5 min", cook:"2 min", makes:"1 serving",
    desc:"A matcha latte whisked smooth with water below a boil so the matcha never turns bitter.",
    dek:"Matcha scorches and turns bitter above about 175F, so the water temperature is the whole trick. Sift the powder to kill clumps, then whisk it with 175F water into a paste before the milk goes in.",
    card:"The right temp and whisk for a matcha that isn't bitter.",
    ing:[
      { n:"Matcha powder", q:"Use culinary or ceremonial grade; the quality here is the drink, cheap matcha tastes like hay.", amt:"1 tsp", shelf:"matcha" },
      { n:"Milk", q:"Steamed or warmed whole milk gives body; barista oat milk foams well too.", amt:"3/4 cup", shelf:"milk" },
      { n:"Raw honey", q:"A little honey balances matcha's grassy edge; stir it into the paste while warm.", amt:"1 tsp", shelf:"raw-honey" },
      { n:"Hot water", q:"Water heated to about 175F, well below boiling, so the matcha stays sweet not bitter.", amt:"2 tbsp", local:true }
    ],
    steps:[
      { b:"Sift and paste", t:"Sift the matcha into a bowl, add the 175F water, and whisk in a zigzag 15-20 sec until it is a smooth lump-free paste." },
      { b:"Add milk", t:"Warm the milk and honey, pour over the paste, and whisk or froth to combine; serve hot or over ice." }
    ],
    tools:["Bamboo whisk|matcha bamboo whisk chasen","Fine sieve|fine mesh sifter","Milk frother|handheld milk frother","Matcha bowl|ceramic matcha bowl"]
  },
  {
    slug:"chai-latte",
    title:"Chai Latte, and where to source it",
    cuisine:"Indian",
    category:"Drink",
    kw:"chai latte, masala chai, spiced tea, chai, black tea latte",
    iso:["PT5M","PT15M","PT20M"],
    prep:"5 min", cook:"15 min", makes:"2 servings",
    desc:"Masala chai simmered from whole spices and black tea, then finished with milk.",
    dek:"Real masala chai comes from simmering whole spices and black tea in water first, then adding milk, not from a syrup. Crush the whole spices and simmer them hard so they actually give up their oils before the tea steeps.",
    card:"Whole spices and loose tea, plus the technique that pulls the flavor.",
    ing:[
      { n:"Black tea", q:"A strong loose Assam or CTC stands up to milk and spice; bags go bitter if oversteeped.", amt:"2 tsp", shelf:"tea" },
      { n:"Whole spices", q:"Cardamom, cinnamon, clove, and peppercorn crushed fresh are the soul of chai; pre-ground goes flat.", amt:"2 tbsp mixed", shelf:"spices" },
      { n:"Whole milk", q:"Full-fat milk simmered in gives the creamy body; low-fat tastes thin.", amt:"1 1/2 cups", shelf:"milk" },
      { n:"Raw honey", q:"Sweeten off heat to taste; chai should be assertive, not candy-sweet.", amt:"2 tbsp", shelf:"raw-honey" },
      { n:"Fresh ginger", q:"A smashed knob of ginger adds the heat that ground can't.", amt:"1 inch", local:true }
    ],
    steps:[
      { b:"Bloom the spices", t:"Crush the whole spices and ginger, add to 1 1/2 cups water, and boil hard 5 min to pull out the oils." },
      { b:"Steep the tea", t:"Add the black tea and simmer 3-4 min; longer makes it bitter, shorter makes it weak." },
      { b:"Add milk", t:"Pour in the milk and bring back to a simmer for 3-4 min, then strain and sweeten with honey." }
    ],
    tools:["Small saucepan|small saucepan","Fine strainer|fine mesh strainer","Mortar and pestle|mortar and pestle","Wooden spoon|wooden spoon"]
  },
  {
    slug:"cold-brew",
    title:"Cold Brew Coffee, and where to source it",
    cuisine:"American",
    category:"Drink",
    kw:"cold brew, cold brew coffee, iced coffee, coarse grind, concentrate",
    iso:["PT5M","PT0M","PT5M"],
    prep:"5 min", cook:"0 min", makes:"4 servings",
    desc:"Cold brew concentrate steeped 16 hours from a coarse grind, then diluted to taste.",
    dek:"Cold brew is low-effort but grind and time are everything: too fine turns it muddy and bitter, too short and it's sour water. Use a coarse grind at a 1:4 coffee-to-water ratio for concentrate and steep 12-18 hours at room temp.",
    card:"The grind, the ratio, and the steep that make smooth concentrate.",
    ing:[
      { n:"Coffee beans", q:"A medium-dark roast ground coarse gives smooth, low-acid brew; fine grind clogs and turns bitter.", amt:"1 cup coarse", shelf:"coffee" },
      { n:"Milk", q:"Whole milk or cream to cut the concentrate; cold brew is strong enough to hold it.", amt:"to taste", shelf:"milk" },
      { n:"Maple syrup", q:"Dissolves in cold liquid better than granulated sugar for sweetening.", amt:"to taste", shelf:"maple-syrup" },
      { n:"Filtered water", q:"Cold filtered water for the steep; clean water tastes cleaner in the cup.", amt:"4 cups", local:true }
    ],
    steps:[
      { b:"Combine and steep", t:"Stir the coarse grounds into 4 cups cold water, cover, and leave at room temp 12-18 hours." },
      { b:"Double strain", t:"Strain through a fine sieve, then again through a coffee filter to catch the fines." },
      { b:"Dilute and serve", t:"Cut the concentrate 1:1 with water or milk over ice and sweeten with maple to taste." }
    ],
    tools:["Large jar|half gallon glass jar","Fine strainer|fine mesh strainer","Coffee filters|paper coffee filters","Burr grinder|burr coffee grinder"]
  },
  {
    slug:"iced-tea",
    title:"Iced Tea, and where to source it",
    cuisine:"American",
    category:"Drink",
    kw:"iced tea, sweet tea, black tea, brewed tea, southern iced tea",
    iso:["PT5M","PT5M","PT10M"],
    prep:"5 min", cook:"5 min", makes:"8 servings",
    desc:"Brewed iced tea steeped at the right temperature and time so it never turns bitter.",
    dek:"Bitter iced tea comes from oversteeping or water that's too hot, not from the tea itself. Steep black tea at just under a boil for no more than 5 minutes, then pull the leaves the moment it's done.",
    card:"The steep time and temp that keep it smooth, not tannic.",
    ing:[
      { n:"Black tea", q:"Loose black tea or good bags; the leaf quality is what you'll taste all pitcher long.", amt:"6 bags or 2 tbsp", shelf:"tea" },
      { n:"Raw honey", q:"Dissolve it in the hot tea before chilling so it doesn't sink to the bottom.", amt:"1/4 cup", shelf:"raw-honey" },
      { n:"Lemon", q:"Fresh lemon brightens the whole pitcher; bottled tastes dull.", amt:"1, sliced", shelf:"citrus" },
      { n:"Fresh mint", q:"A few sprigs steeped with the tea add a cooling top note.", amt:"handful", local:true },
      { n:"Filtered water", q:"Clean water keeps the tea clear and clean-tasting.", amt:"8 cups", local:true }
    ],
    steps:[
      { b:"Heat the water", t:"Bring 4 cups water to just under a boil, around 200F, then take it off the heat." },
      { b:"Steep 5 minutes", t:"Add the tea and mint, steep exactly 5 min, then remove the leaves; longer turns it tannic." },
      { b:"Sweeten and chill", t:"Stir in honey while hot, add 4 cups cold water and lemon, and refrigerate until cold." }
    ],
    tools:["Large pitcher|2 quart glass pitcher","Kettle|stovetop kettle","Fine strainer|fine mesh strainer","Wooden spoon|long stirring spoon"]
  },
  {
    slug:"lemonade",
    title:"Lemonade, and where to source it",
    cuisine:"American",
    category:"Drink",
    kw:"lemonade, fresh lemonade, simple syrup, lemon, summer drink",
    iso:["PT10M","PT5M","PT15M"],
    prep:"10 min", cook:"5 min", makes:"6 servings",
    desc:"Fresh lemonade built on a simple syrup so the sugar actually dissolves.",
    dek:"The mistake most people make is stirring sugar into cold water where it never dissolves, leaving it gritty and flat. Make a quick simple syrup first, then balance it against fresh juice at roughly 1 part juice to 1 part syrup to 4 parts water.",
    card:"The syrup trick and the ratio for balanced lemonade.",
    ing:[
      { n:"Lemons", q:"Fresh-squeezed is the entire point; bottled juice tastes cooked and bitter.", amt:"6-8 lemons", shelf:"citrus" },
      { n:"Cane sugar", q:"Unrefined cane sugar dissolves into a clean syrup; it's the sweetness that balances the acid.", amt:"1 cup", shelf:"unrefined-sugar" },
      { n:"Raw honey", q:"Swap in honey for part of the sugar to round out the tartness; dissolve it into the hot syrup.", amt:"2 tbsp", shelf:"raw-honey" },
      { n:"Fresh mint", q:"Muddled or steeped in the syrup for a cooling herbal note; optional.", amt:"handful", local:true },
      { n:"Filtered water", q:"Cold clean water to dilute; the base is only as good as the water.", amt:"4 cups", local:true }
    ],
    steps:[
      { b:"Make simple syrup", t:"Heat 1 cup sugar with 1 cup water until the sugar fully dissolves, about 3 min, then cool." },
      { b:"Juice the lemons", t:"Roll and juice the lemons to get about 1 cup fresh juice; strain out the seeds." },
      { b:"Combine and balance", t:"Mix the syrup, juice, and 4 cups cold water, then taste and adjust water or syrup before serving over ice." }
    ],
    tools:["Citrus juicer|handheld citrus press","Small saucepan|small saucepan","Large pitcher|glass pitcher","Fine strainer|fine mesh strainer"]
  },
  {
    slug:"hot-toddy",
    title:"Hot Toddy, and where to source it",
    cuisine:"American",
    category:"Drink",
    kw:"hot toddy, whiskey toddy, hot cocktail, honey lemon whiskey, winter drink",
    iso:["PT5M","PT5M","PT10M"],
    prep:"5 min", cook:"5 min", makes:"1 serving",
    desc:"A hot toddy balanced with honey, lemon, and whiskey in hot but not boiling water.",
    dek:"A toddy is a balancing act of hot water, honey, lemon, and whiskey, and the trap is boiling water that scalds off the aromatics. Heat the water hot but not boiling, dissolve the honey first, and add the whiskey last so the alcohol doesn't cook off.",
    card:"The pour order and honey-lemon balance that make it work.",
    ing:[
      { n:"Whiskey", q:"A decent bourbon or rye; the spirit is the backbone, so use one you'd sip.", amt:"2 oz", local:true },
      { n:"Raw honey", q:"Honey both sweetens and soothes; dissolve it in the hot water before anything else.", amt:"1 tbsp", shelf:"raw-honey" },
      { n:"Lemon", q:"Fresh lemon juice is the acid that keeps it from being cloying.", amt:"1/2, juiced", shelf:"citrus" },
      { n:"Whole spices", q:"A cinnamon stick and a couple cloves steeped in add warmth.", amt:"1 stick, 2 cloves", shelf:"spices" },
      { n:"Fresh ginger", q:"A slice of ginger steeped in the water adds a warming bite.", amt:"2 slices", local:true }
    ],
    steps:[
      { b:"Steep the water", t:"Heat water hot but not boiling, around 190F, and steep the cinnamon, cloves, and ginger 3-4 min." },
      { b:"Dissolve the honey", t:"Stir the honey into the hot spiced water until fully dissolved, then add the lemon juice." },
      { b:"Add whiskey last", t:"Pour in the whiskey off the heat so the alcohol and aroma stay, and serve hot." }
    ],
    tools:["Small saucepan|small saucepan","Heatproof mug|glass toddy mug","Citrus juicer|handheld citrus press","Bar jigger|cocktail jigger"]
  }
];

// batch-62-sauces.js — THE SAUCE VERTICAL, round 1.
// Generic, SEO-safe names (never a brand). We publish OUR recommended starting ratio and mark the
// seasonings "to taste" — we offer *a* version, never claim to BE the proprietary one. Every ingredient
// sources to a real shelf. Category "Sauce" so they collect in the browse + (next) the /sauces/ hub.
module.exports = [
  {
    slug:"fast-food-chicken-finger-sauce",
    title:"Fast Food Chicken Finger Dipping Sauce, and where to source it",
    cuisine:"American", category:"Sauce",
    kw:"cane's style sauce, chicken finger sauce, fry dipping sauce, copycat chicken tender sauce",
    iso:["PT5M","PT0M","PT5M"], prep:"5 min", cook:"none — just chill", makes:"about 3/4 cup",
    desc:"The craveable pink dipping sauce for chicken fingers and fries — our recommended starting ratio, then dialed to taste. No ads, and exactly where to buy the best of every ingredient.",
    dek:"Make it a day ahead. Mixed fresh it tastes sharp and raw; after a night in the fridge the garlic and pepper mellow and marry into the mayo, and that resting is the entire difference between 'mayo and ketchup' and the drive-thru version.",
    card:"A rested mayo-ketchup dip with Worcestershire, garlic, and a heavy hand of coarse black pepper.",
    ing:[
      {n:"Mayonnaise", q:"The base — half the flavor is the mayo, so use a real one. A full-fat, cage-free jar is worth it here.", amt:"1/2 cup", shelf:"mayonnaise"},
      {n:"Ketchup", q:"For color and a touch of sweet tang. A ketchup without corn syrup tastes cleaner.", amt:"2 tbsp", shelf:"ketchup"},
      {n:"Worcestershire sauce", q:"The savory backbone most copycats leave out — this is the 'what IS that' note.", amt:"1 tsp", shelf:"worcestershire"},
      {n:"Garlic powder", q:"Recommended to start; add more to taste. Powder, not fresh — fresh garlic turns it harsh overnight.", amt:"1/2 tsp", local:true},
      {n:"Coarse black pepper", q:"Be generous — visible flecks of coarse pepper are the signature. Freshly cracked, to taste.", amt:"3/4 tsp", shelf:"spices"},
      {n:"Paprika", q:"A pinch for warmth and color. Optional, to taste.", amt:"1/4 tsp", shelf:"spices"}
    ],
    steps:[
      {b:"Whisk", t:"Whisk everything together in a small bowl until fully smooth and one even color."},
      {b:"Rest", t:"Cover and refrigerate at least 4 hours, ideally overnight — this is not optional; the flavor is not finished until it has rested."},
      {b:"Adjust", t:"Taste cold and dial it in: more pepper for bite, more ketchup for sweet, a splash of water to thin."}
    ],
    tools:["Squeeze bottle|clear condiment squeeze bottle","Balloon whisk|small balloon whisk"]
  },
  {
    slug:"diner-burger-and-fry-sauce",
    title:"Diner Burger & Fry Sauce, and where to source it",
    cuisine:"American", category:"Sauce",
    kw:"burger sauce, special sauce, fry sauce, secret sauce, animal style sauce copycat",
    iso:["PT5M","PT0M","PT5M"], prep:"5 min", cook:"none", makes:"about 1 cup",
    desc:"The tangy pink 'special sauce' for burgers and fries — our recommended ratio, seasoned to taste. Ad-free, with every ingredient sourced.",
    dek:"A spoon of the pickle brine — not just the relish — is what tips this from 'mayo and ketchup' into fast-food territory. The acid and sugar in the brine are the flavor you can't place.",
    card:"Mayo, ketchup, mustard, and sweet relish with a pinch of sugar and a splash of pickle brine.",
    ing:[
      {n:"Mayonnaise", q:"The body of the sauce. A real, full-fat mayo carries the rest.", amt:"1/2 cup", shelf:"mayonnaise"},
      {n:"Ketchup", q:"Sweet, tang, and the pink color. A cleaner ketchup without corn syrup is better.", amt:"2 tbsp", shelf:"ketchup"},
      {n:"Yellow mustard", q:"For sharpness that cuts the mayo. A stone-ground or classic yellow both work.", amt:"1 tbsp", shelf:"mustard"},
      {n:"Sweet pickle relish", q:"Or finely chopped pickles — and save a spoon of the brine. Crunch and sweet acid.", amt:"2 tbsp", shelf:"pickles"},
      {n:"White vinegar", q:"A little more acid to brighten. Or use the pickle brine, to taste.", amt:"1 tsp", shelf:"vinegar"},
      {n:"Sugar", q:"Recommended to start — a pinch rounds the whole thing out. Adjust to taste.", amt:"1/2 tsp", local:true}
    ],
    steps:[
      {b:"Stir", t:"Stir everything together until even, breaking up any large bits of relish."},
      {b:"Rest", t:"Give it 30 minutes in the fridge so the vinegar and sugar dissolve and settle in."},
      {b:"Taste", t:"Dial it: more relish brine for tang, a pinch more sugar for the classic sweet-tart balance."}
    ],
    tools:["Squeeze bottle|clear condiment squeeze bottle","Mixing bowl|small glass mixing bowl"]
  },
  {
    slug:"hibachi-yum-yum-sauce",
    title:"Hibachi Steakhouse Yum Yum Sauce, and where to source it",
    cuisine:"Japanese-American", category:"Sauce",
    kw:"yum yum sauce, hibachi sauce, shrimp sauce, white sauce for steak and rice",
    iso:["PT5M","PT0M","PT5M"], prep:"5 min", cook:"none — thin and chill", makes:"about 1 cup",
    desc:"The silky pale-orange sauce from the hibachi grill, for shrimp, steak, and fried rice — recommended ratio, dialed to taste. No ads, fully sourced.",
    dek:"Thin it with water AND a spoon of melted butter, then rest it overnight. Straight mayo is too thick and just sits; the water loosens it to a drizzle and the butter is what makes it taste like the grill instead of the jar.",
    card:"Mayo loosened with water and melted butter, tinted with ketchup and paprika, sweetened lightly.",
    ing:[
      {n:"Mayonnaise", q:"The whole base. A real full-fat mayo is non-negotiable here.", amt:"1 cup", shelf:"mayonnaise"},
      {n:"Melted butter", q:"The secret to the grill flavor — melt and cool slightly before whisking in. A good cultured butter shines.", amt:"1 tbsp", shelf:"butter"},
      {n:"Ketchup", q:"Just enough for the pale-orange tint and faint sweetness.", amt:"1 tbsp", shelf:"ketchup"},
      {n:"Paprika", q:"For color and warmth. Smoked or sweet, to taste.", amt:"1 tsp", shelf:"spices"},
      {n:"Sugar", q:"Recommended to start; the hibachi version is gently sweet. Adjust to taste.", amt:"1 tsp", local:true},
      {n:"Water", q:"Add a splash at a time to thin to a pourable drizzle — texture is to taste.", amt:"1–2 tbsp", local:true}
    ],
    steps:[
      {b:"Whisk", t:"Whisk the mayo with the cooled melted butter, ketchup, paprika, and sugar."},
      {b:"Loosen", t:"Whisk in water a splash at a time until it drizzles off the whisk in a thin ribbon."},
      {b:"Rest", t:"Refrigerate overnight — like most of these, it tastes flat the day you make it and right the next."}
    ],
    tools:["Squeeze bottle|clear condiment squeeze bottle","Balloon whisk|small balloon whisk"]
  },
  {
    slug:"fast-food-chicken-sandwich-sauce",
    title:"Fast Food Chicken Sandwich Sauce, and where to source it",
    cuisine:"American", category:"Sauce",
    kw:"chicken sandwich sauce, copycat chicken sauce, honey mustard bbq sauce, nugget sauce",
    iso:["PT5M","PT0M","PT5M"], prep:"5 min", cook:"none", makes:"about 3/4 cup",
    desc:"The sweet-tangy sauce for the fried chicken sandwich and nuggets — recommended ratio, to taste. Ad-free, every ingredient sourced.",
    dek:"The barbecue sauce is the note everyone misses. People taste honey-mustard and stop there — it's the spoon of smoky barbecue underneath that makes it taste like the sandwich instead of just a dip.",
    card:"Honey mustard rounded out with a hit of barbecue sauce and a squeeze of lemon.",
    ing:[
      {n:"Mayonnaise", q:"The creamy base that ties it together. Real, full-fat.", amt:"1/4 cup", shelf:"mayonnaise"},
      {n:"Yellow mustard", q:"The tang. A classic yellow keeps the color right.", amt:"2 tbsp", shelf:"mustard"},
      {n:"Honey", q:"The sweet. A raw local honey has more character than the squeeze bear.", amt:"2 tbsp", shelf:"raw-honey"},
      {n:"Barbecue sauce", q:"The missing note — smoke and depth. A small-batch sauce without liquid smoke overload.", amt:"1 tbsp", shelf:"bbq-sauce"},
      {n:"Lemon juice", q:"A squeeze to brighten and cut the sweetness. To taste.", amt:"1 tsp", local:true}
    ],
    steps:[
      {b:"Whisk", t:"Whisk everything smooth until the color is one even golden-tan."},
      {b:"Balance", t:"Taste: more honey to sweeten, more mustard or lemon to sharpen. This one is ready fast but rests well too."}
    ],
    tools:["Squeeze bottle|clear condiment squeeze bottle","Mixing bowl|small glass mixing bowl"]
  },
  {
    slug:"wing-shop-ranch",
    title:"Extra-Thick Wing Shop Ranch, and where to source it",
    cuisine:"American", category:"Sauce",
    kw:"thick ranch dip, wing ranch, homemade ranch for wings and fries, restaurant ranch copycat",
    iso:["PT10M","PT0M","PT10M"], prep:"10 min", cook:"none — chill 1 hour", makes:"about 1 1/2 cups",
    desc:"The thick, clingy ranch from the wing shop — the kind that coats a fry instead of running off. Recommended ratio, seasoned to taste. No ads, fully sourced.",
    dek:"Build it on mayo and sour cream with only a splash of buttermilk. Bottled ranch is thin because it's mostly buttermilk; keep the dairy thick and it clings to a wing instead of dripping off it.",
    card:"A thick mayo-and-sour-cream ranch with fresh dill, garlic, and just enough buttermilk to loosen.",
    ing:[
      {n:"Mayonnaise", q:"Half the base and the reason it's thick. Real, full-fat.", amt:"1/2 cup", shelf:"mayonnaise"},
      {n:"Sour cream", q:"The other half — tang and body. A cultured, full-fat sour cream is best.", amt:"1/2 cup", shelf:"sour-cream"},
      {n:"Buttermilk", q:"Just a splash to loosen, not to thin it out. Add to the texture you want, to taste.", amt:"2–3 tbsp", local:true},
      {n:"Fresh dill", q:"Fresh, chopped fine — dried tastes like the bottle. A garden bunch is best.", amt:"1 tbsp", local:true},
      {n:"Garlic and onion powder", q:"Recommended to start; the classic ranch backbone. Adjust both to taste.", amt:"1/2 tsp each", local:true}
    ],
    steps:[
      {b:"Whisk the base", t:"Whisk the mayo and sour cream smooth, then whisk in buttermilk a splash at a time to your texture."},
      {b:"Season", t:"Stir in the dill, garlic and onion powder, a pinch of salt, and plenty of black pepper."},
      {b:"Chill", t:"Rest at least an hour so the dried aromatics bloom and the dill flavor spreads."}
    ],
    tools:["Mixing bowl|glass mixing bowl set","Balloon whisk|small balloon whisk"]
  },
  {
    slug:"sushi-bar-spicy-mayo",
    title:"Sushi-Bar Spicy Mayo, and where to source it",
    cuisine:"Japanese", category:"Sauce",
    kw:"spicy mayo, sriracha mayo, sushi sauce, spicy mayo for rice bowls and salmon",
    iso:["PT3M","PT0M","PT3M"], prep:"3 min", cook:"none", makes:"about 1/2 cup",
    desc:"The creamy-hot drizzle from the sushi bar, for rolls, rice bowls, and salmon — recommended ratio, heat to taste. Ad-free, every ingredient sourced.",
    dek:"A few drops of toasted sesame oil is the whole trick. Without it you have mayo plus hot sauce; with it you have the sushi-bar drizzle — that toasted note is what your tongue is actually chasing.",
    card:"Mayo and sriracha lifted with toasted sesame oil, lime, and a touch of honey.",
    ing:[
      {n:"Mayonnaise", q:"A Japanese-style (Kewpie) mayo is richer and eggier if you can find it; any real mayo works.", amt:"1/3 cup", shelf:"mayonnaise"},
      {n:"Hot sauce", q:"Sriracha is classic — for the heat and the red color. Add to taste; this is your heat knob.", amt:"1–2 tbsp", shelf:"hot-sauce"},
      {n:"Toasted sesame oil", q:"The secret. A few drops only — toasted, not plain. Fragrant, small-batch is best.", amt:"1/4 tsp", local:true},
      {n:"Lime juice", q:"A squeeze to brighten. To taste.", amt:"1 tsp", local:true},
      {n:"Honey", q:"Recommended: a tiny bit to round the heat. Optional, to taste.", amt:"1/2 tsp", shelf:"raw-honey"}
    ],
    steps:[
      {b:"Whisk", t:"Whisk everything smooth. Start with less sriracha — you can always add heat."},
      {b:"Taste", t:"Dial the heat and lime. Use straight away, or bottle it and keep it a week."}
    ],
    tools:["Squeeze bottle|fine-tip condiment squeeze bottle","Small whisk|mini sauce whisk"]
  },
  {
    slug:"steakhouse-blooming-onion-dip",
    title:"Steakhouse Blooming Onion Dip, and where to source it",
    cuisine:"American", category:"Sauce",
    kw:"blooming onion sauce, steakhouse dip, horseradish dip, copycat outback sauce",
    iso:["PT5M","PT0M","PT5M"], prep:"5 min", cook:"none — chill", makes:"about 1 cup",
    desc:"The tangy, horseradish-bitten dip for a blooming onion and fries — recommended ratio, heat to taste. No ads, fully sourced.",
    dek:"Horseradish is the ingredient nobody can name. It's what makes the dip bite back instead of tasting like seasoned mayo — start light, because it builds as it rests.",
    card:"A creamy mayo-sour cream dip with ketchup, horseradish, paprika, and a cayenne kick.",
    ing:[
      {n:"Mayonnaise", q:"The creamy base. Real, full-fat.", amt:"1/2 cup", shelf:"mayonnaise"},
      {n:"Sour cream", q:"For tang and body. A cultured full-fat sour cream is best.", amt:"2 tbsp", shelf:"sour-cream"},
      {n:"Ketchup", q:"For color and a little sweetness against the heat.", amt:"2 tbsp", shelf:"ketchup"},
      {n:"Prepared horseradish", q:"The signature bite — start with less, it strengthens overnight. To taste.", amt:"1–2 tsp", local:true},
      {n:"Paprika and cayenne", q:"Recommended to start; paprika for color, cayenne for heat. Both to taste.", amt:"1/2 tsp + a pinch", shelf:"spices"},
      {n:"Dried oregano", q:"A pinch for the steakhouse-seasoning note. Optional.", amt:"1/4 tsp", local:true}
    ],
    steps:[
      {b:"Stir", t:"Stir everything together until smooth and evenly colored."},
      {b:"Rest", t:"Chill at least an hour — the horseradish and cayenne both bloom and even out as it sits."},
      {b:"Adjust", t:"Taste cold and add horseradish or cayenne for more bite."}
    ],
    tools:["Mixing bowl|small glass mixing bowl","Spatula|small silicone spatula"]
  },
  {
    slug:"sweet-chili-bang-bang-sauce",
    title:"Sweet Chili Bang Bang Sauce, and where to source it",
    cuisine:"Asian-American", category:"Sauce",
    kw:"bang bang sauce, sweet chili mayo, bang bang shrimp sauce, spicy sweet dipping sauce",
    iso:["PT3M","PT0M","PT3M"], prep:"3 min", cook:"none", makes:"about 2/3 cup",
    desc:"The creamy sweet-then-hot sauce for shrimp, chicken, and cauliflower — recommended ratio, heat to taste. Ad-free, sourced.",
    dek:"Build the sweet first, then dial the heat in last. It should read sweet on the front of your tongue and land the chili a second later — get the order backwards and it just tastes hot.",
    card:"Mayo, Thai sweet chili sauce, and honey, with sriracha added to taste.",
    ing:[
      {n:"Mayonnaise", q:"The creamy base. Real, full-fat.", amt:"1/2 cup", shelf:"mayonnaise"},
      {n:"Thai sweet chili sauce", q:"The sweet-and-mild-heat foundation. A good bottled one is the shortcut here.", amt:"1/4 cup", local:true},
      {n:"Honey", q:"Rounds and deepens the sweet. A raw honey is best. To taste.", amt:"1 tbsp", shelf:"raw-honey"},
      {n:"Sriracha or hot sauce", q:"The kick — add last, a little at a time. This is your heat knob, to taste.", amt:"1–2 tsp", shelf:"hot-sauce"}
    ],
    steps:[
      {b:"Build sweet", t:"Whisk the mayo, sweet chili sauce, and honey until smooth."},
      {b:"Add heat", t:"Whisk in the sriracha a little at a time, tasting, until the heat lands just behind the sweet."}
    ],
    tools:["Squeeze bottle|clear condiment squeeze bottle","Small whisk|mini sauce whisk"]
  },
  {
    slug:"southern-comeback-sauce",
    title:"Southern Comeback Sauce, and where to source it",
    cuisine:"American", category:"Sauce",
    kw:"comeback sauce, mississippi comeback sauce, remoulade style dip, fried food sauce",
    iso:["PT10M","PT0M","PT10M"], prep:"10 min", cook:"none — chill", makes:"about 1 1/2 cups",
    desc:"Mississippi's all-purpose fry-and-fried-everything sauce — recommended ratio, seasoned to taste. No ads, every ingredient sourced.",
    dek:"Grate the onion in raw on the small holes of a box grater. You want its sharp juice carried all through the sauce, not minced pieces sitting in lumps — the grated pulp disappears and leaves only the bite.",
    card:"A tangy, mildly spicy mayo-ketchup sauce with mustard, Worcestershire, hot sauce, and grated onion.",
    ing:[
      {n:"Mayonnaise", q:"The base. Real, full-fat.", amt:"3/4 cup", shelf:"mayonnaise"},
      {n:"Ketchup", q:"Sweet-tang and color. A cleaner ketchup tastes better.", amt:"1/4 cup", shelf:"ketchup"},
      {n:"Yellow mustard", q:"Sharpness that cuts the richness.", amt:"1 tbsp", shelf:"mustard"},
      {n:"Worcestershire sauce", q:"Savory depth — the umami floor of the sauce.", amt:"1 tsp", shelf:"worcestershire"},
      {n:"Hot sauce", q:"For a low background heat, not a burn. To taste.", amt:"1 tsp", shelf:"hot-sauce"},
      {n:"Garlic", q:"One clove, grated fine. A single fresh clove — this one earns fresh garlic.", amt:"1 clove", shelf:"garlic"},
      {n:"Grated onion", q:"Recommended to start; grate raw for its juice. Adjust to taste.", amt:"1 tbsp", local:true}
    ],
    steps:[
      {b:"Grate", t:"Grate the garlic and onion fine so they melt into the sauce as pulp and juice, not pieces."},
      {b:"Whisk", t:"Whisk everything together until smooth and one even color."},
      {b:"Rest", t:"Chill at least an hour — the raw onion and garlic soften and spread through the whole bowl."}
    ],
    tools:["Box grater|stainless box grater","Mixing bowl|glass mixing bowl set"]
  },
  {
    slug:"taco-shop-chipotle-crema",
    title:"Taco Shop Chipotle Crema, and where to source it",
    cuisine:"Mexican-American", category:"Sauce",
    kw:"chipotle crema, taco sauce, chipotle mayo, smoky crema for tacos and bowls",
    iso:["PT5M","PT0M","PT5M"], prep:"5 min", cook:"none", makes:"about 1 cup",
    desc:"The smoky, pourable crema drizzled over tacos, burritos, and bowls — recommended ratio, heat to taste. Ad-free, sourced.",
    dek:"Blend one whole chipotle plus a spoon of its adobo — the smoke lives in the sauce it's packed in, not just the pepper. Chopping the pepper alone gives you heat with none of that deep, smoky background.",
    card:"Sour cream and mayo blended smooth with chipotle in adobo, lime, and garlic.",
    ing:[
      {n:"Sour cream", q:"The tangy base of a real crema. Full-fat, cultured.", amt:"1/2 cup", shelf:"sour-cream"},
      {n:"Mayonnaise", q:"For body and to keep it pourable. Real, full-fat.", amt:"1/4 cup", shelf:"mayonnaise"},
      {n:"Chipotle in adobo", q:"One pepper plus a spoon of the adobo sauce — the whole smoky heart. Add more pepper to taste.", amt:"1 pepper + 1 tsp adobo", local:true},
      {n:"Lime juice", q:"To brighten and thin slightly. Fresh, to taste.", amt:"1 tbsp", local:true},
      {n:"Garlic", q:"One small clove, grated. A single fresh clove.", amt:"1 clove", shelf:"garlic"}
    ],
    steps:[
      {b:"Blend", t:"Blend everything smooth — a blender or immersion blender gives the cleanest pourable crema."},
      {b:"Adjust", t:"Taste and add another chipotle for more smoke and heat, or more lime to loosen and brighten."}
    ],
    tools:["Immersion blender|hand immersion blender","Squeeze bottle|clear condiment squeeze bottle"]
  },
  {
    slug:"waffle-fry-honey-mustard",
    title:"Waffle-Fry Honey Mustard, and where to source it",
    cuisine:"American", category:"Sauce",
    kw:"honey mustard, dipping honey mustard, chicken nugget honey mustard, copycat honey mustard",
    iso:["PT5M","PT0M","PT5M"], prep:"5 min", cook:"none", makes:"about 3/4 cup",
    desc:"The thick, glossy honey mustard for nuggets, fries, and pretzels — recommended ratio, to taste. No ads, every ingredient sourced.",
    dek:"Use two mustards. Yellow for color and up-front tang, Dijon for the sharp, grown-up heat that hums under the honey — one mustard alone tastes either flat or too sweet.",
    card:"Two mustards, honey, and a little mayo, balanced with a splash of cider vinegar.",
    ing:[
      {n:"Yellow mustard", q:"For the classic color and bright tang.", amt:"3 tbsp", shelf:"mustard"},
      {n:"Dijon mustard", q:"For the deeper, sharper heat under the sweet. A stone-ground Dijon is best.", amt:"1 tbsp", local:true},
      {n:"Honey", q:"The sweet — a raw local honey has real floral character.", amt:"1/4 cup", shelf:"raw-honey"},
      {n:"Mayonnaise", q:"A spoon for gloss and body, so it clings. Optional.", amt:"1 tbsp", shelf:"mayonnaise"},
      {n:"Apple cider vinegar", q:"Recommended: a splash to keep it from being cloying. Adjust to taste.", amt:"1 tsp", shelf:"vinegar"}
    ],
    steps:[
      {b:"Whisk", t:"Whisk everything smooth and glossy."},
      {b:"Balance", t:"Taste: more honey to sweeten, more Dijon or vinegar to sharpen. It should be sweet with a clean bite."}
    ],
    tools:["Squeeze bottle|clear condiment squeeze bottle","Small whisk|mini sauce whisk"]
  },
  {
    slug:"real-garlic-aioli",
    title:"Real Garlic Aioli, and where to source it",
    cuisine:"Mediterranean", category:"Sauce",
    kw:"garlic aioli, homemade aioli, aioli for fries and sandwiches, from scratch aioli",
    iso:["PT15M","PT0M","PT15M"], prep:"15 min", cook:"none", makes:"about 3/4 cup",
    desc:"A true from-scratch garlic aioli — an emulsion, not flavored mayo — plus a fast shortcut. Recommended ratio, seasoned to taste. Ad-free, sourced.",
    dek:"Drip the oil in a thin thread while whisking without stopping. Pour it in fast and the emulsion breaks into a greasy slick that won't come back together — slow and steady is the entire skill, and once it grabs you can go a little quicker.",
    card:"Egg yolk, garlic, and lemon whisked into a slow thread of oil until thick. Shortcut version below.",
    ing:[
      {n:"Egg yolk", q:"The emulsifier that makes real aioli thick and glossy. A fresh pasture-raised yolk is best. (Raw egg — see the swap note for a no-raw-egg shortcut.)", amt:"1 yolk", local:true},
      {n:"Garlic", q:"Grated or mashed to a paste with a little salt — fresh is the whole point here.", amt:"1–2 cloves", shelf:"garlic"},
      {n:"Lemon juice", q:"For acid and to loosen. Fresh, to taste.", amt:"1 tsp", local:true},
      {n:"Neutral or olive oil", q:"A neutral oil for a mild aioli, or part good olive oil for a peppery one. To taste.", amt:"3/4 cup", local:true},
      {n:"Salt", q:"Recommended to start; season the finished aioli to taste.", amt:"1/4 tsp", local:true}
    ],
    steps:[
      {b:"Start the base", t:"Whisk the yolk, garlic paste, lemon, and salt together in a bowl until smooth and slightly pale."},
      {b:"Stream the oil", t:"Whisking constantly, add the oil a few drops at a time until it starts to thicken, then in a slow thin thread until thick and glossy."},
      {b:"Finish", t:"Loosen with a few drops of water or lemon if too stiff, and season to taste."},
      {b:"Shortcut", t:"No raw egg: fold the garlic paste, lemon, and a spoon of good olive oil into 3/4 cup quality mayonnaise. Not a true aioli, but very good and ready in two minutes."}
    ],
    tools:["Balloon whisk|balloon whisk","Mixing bowl|deep glass mixing bowl"]
  }
];

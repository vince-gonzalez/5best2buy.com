// batch-72-world-h.js — world dishes round 2 grp4 (agent-drafted, culled). South Indian, Middle Eastern, Greek, Yucatan. local:true.
module.exports = [
  {
    slug:"coconut-chutney", title:"South Indian Coconut Chutney, and where to source it", cuisine:"South Indian", category:"Side",
    kw:"coconut chutney, thengai chutney, idli chutney, dosa chutney, south indian chutney",
    iso:["PT15M","PT5M","PT20M"], prep:"15 min", cook:"5 min", makes:"serves 4",
    desc:"The South Indian coconut chutney for idli and dosa — fresh coconut, roasted gram, and a mustard-curry leaf tempering.",
    dek:"The tempering (tadka) is not optional garnish — mustard seeds must actually pop and curry leaves crackle in hot oil, then get poured over the ground chutney so the aroma blooms into it. Skip it and you have sweet coconut paste, not chutney.",
    card:"Fresh coconut ground with roasted gram, finished with a mustard-seed tadka.",
    ing:[
      {n:"Fresh coconut", q:"Grated from a mature brown coconut, or unsweetened frozen grated coconut thawed. Not dry desiccated.", amt:"1 cup", local:true},
      {n:"Roasted chana dal", q:"Also sold as putnalu or dalia — this is what thickens and stabilizes the chutney.", amt:"3 tbsp", local:true},
      {n:"Green chiles", q:"Adjust to heat; two is a mild-medium chutney.", amt:"2", local:true},
      {n:"Ginger", q:"A small knob keeps it from tasting flat.", amt:"1 inch", local:true},
      {n:"Mustard seeds", q:"Black or brown; they must pop in the tadka.", amt:"1 tsp", local:true},
      {n:"Curry leaves", q:"Fresh, not dried — dried leaves have almost no aroma.", amt:"10 leaves", local:true},
      {n:"Urad dal", q:"For the tempering — a small spoonful adds nutty crunch.", amt:"1 tsp", local:true},
      {n:"Coconut or neutral oil", q:"For the tadka; coconut oil deepens the flavor.", amt:"1 tbsp", local:true}
    ],
    steps:[
      {b:"Grind the base", t:"Blend coconut, roasted chana dal, green chiles, ginger and salt with a little water into a thick, slightly coarse paste."},
      {b:"Adjust texture", t:"Add water a spoonful at a time to a spoonable, not runny, consistency and scrape into a bowl."},
      {b:"Heat the tadka", t:"Warm oil until shimmering, add mustard seeds and let them pop, then urad dal until golden."},
      {b:"Finish the tempering", t:"Toss in curry leaves and stand back as they crackle, then kill the heat."},
      {b:"Combine", t:"Pour the sizzling tempering over the chutney and stir once. Serve with idli or dosa."}
    ],
    tools:["Blender|small blender jar","Small skillet|tadka pan","Mixing bowl|stainless mixing bowl"]
  },
  {
    slug:"falafel-wrap", title:"Falafel Wrap, and where to source it", cuisine:"Middle Eastern", category:"Main",
    kw:"falafel, falafel wrap, chickpea falafel, dried chickpeas, pita wrap",
    iso:["PT20M","PT15M","PT35M"], prep:"20 min", cook:"15 min", makes:"serves 4",
    desc:"Crisp falafel from soaked dried chickpeas wrapped in pita with tahini — and where to source every part.",
    dek:"Use dried chickpeas soaked overnight, never canned. Canned chickpeas are already cooked and hold too much water — the batter turns to mush and the falafel disintegrate in the oil. Raw soaked chickpeas are what makes the interior fluffy and the shell shatter-crisp.",
    card:"Soaked dried chickpeas, fresh herbs, fried crisp and wrapped with tahini.",
    ing:[
      {n:"Dried chickpeas", q:"Soaked 12-24 hours, never cooked and never canned. This is the whole game.", amt:"1 cup dried", local:true},
      {n:"Fresh parsley and cilantro", q:"A generous handful of each turns the interior green and fresh.", amt:"1 cup packed", local:true},
      {n:"Garlic", q:"Raw, ground into the batter.", amt:"3 cloves", local:true},
      {n:"Cumin and coriander", q:"Ground; the backbone spices. Toast whole and grind if you can.", amt:"1 tsp each", local:true},
      {n:"Baking soda", q:"A pinch lightens the interior. Add just before frying.", amt:"1/2 tsp", local:true},
      {n:"Tahini", q:"For the sauce — thin with lemon and water until pourable.", amt:"1/3 cup", local:true},
      {n:"Pita or flatbread", q:"Warmed so it folds without cracking.", amt:"4 rounds", local:true},
      {n:"Neutral frying oil", q:"Enough for a shallow-to-deep fry at 350F.", amt:"3 cups", local:true}
    ],
    steps:[
      {b:"Soak", t:"Cover dried chickpeas with plenty of water and soak 12-24 hours, then drain very well."},
      {b:"Grind", t:"Pulse chickpeas with herbs, garlic, spices and salt to a coarse, sandy paste that holds together when pressed."},
      {b:"Rest and lighten", t:"Chill 30 minutes, then fold in baking soda just before frying."},
      {b:"Fry", t:"Shape into balls or patties and fry at 350F until deep brown and crisp, about 3-4 minutes."},
      {b:"Wrap", t:"Whisk tahini with lemon and water into a sauce, then fill warm pita with falafel, salad and tahini."}
    ],
    tools:["Food processor|food processor","Dutch oven|cast iron dutch oven","Slotted spoon|frying spider skimmer"]
  },
  {
    slug:"chicken-mandi", title:"Chicken Mandi, and where to source it", cuisine:"Middle Eastern", category:"Main",
    kw:"chicken mandi, yemeni mandi, mandi rice, smoked rice, basmati chicken",
    iso:["PT30M","PT1H","PT1H30M"], prep:"30 min", cook:"1 hr", makes:"serves 6",
    desc:"Yemeni chicken mandi — spiced basmati and tender chicken finished with a live charcoal smoke, and where to source it.",
    dek:"The dukhan smoke finish is what makes it mandi and not just spiced rice. A single ember of hardwood charcoal in a small cup, doused with a spoon of oil and trapped under the lid for a few minutes, drives real smoke through the rice. No liquid smoke stand-in gets close.",
    card:"Spiced basmati and chicken, finished under a live charcoal smoke.",
    ing:[
      {n:"Basmati rice", q:"Aged long-grain; rinse until the water runs clear and soak 30 minutes.", amt:"2 cups", local:true},
      {n:"Chicken", q:"Bone-in pieces or a spatchcocked bird — bone keeps it moist.", amt:"3 lb", local:true},
      {n:"Whole spices", q:"Cardamom, cloves, cinnamon, bay — the aromatic base of the broth.", amt:"1 tbsp mixed", local:true},
      {n:"Hawaij spice blend", q:"The Yemeni cumin-coriander-turmeric-pepper blend; the defining flavor.", amt:"2 tbsp", local:true},
      {n:"Onion and tomato", q:"Build the broth the rice will cook in.", amt:"2 onions, 2 tomatoes", local:true},
      {n:"Dried lime (loomi)", q:"Pierced and dropped in the broth for a sour backbone.", amt:"2", local:true},
      {n:"Hardwood charcoal", q:"One lump lit red-hot for the smoke finish. Non-negotiable for mandi.", amt:"1 piece", local:true},
      {n:"Saffron", q:"Bloomed in warm water and drizzled over the rice for color.", amt:"1 pinch", local:true}
    ],
    steps:[
      {b:"Build the broth", t:"Brown chicken, then simmer with onion, tomato, whole spices, hawaij and dried lime until the chicken is nearly done. Strain and reserve the broth."},
      {b:"Cook the rice", t:"Cook soaked basmati in the measured spiced broth until just tender and the liquid is absorbed."},
      {b:"Char the chicken", t:"Roast or broil the chicken pieces until the skin is deep and crisp."},
      {b:"Smoke", t:"Nest a small heatproof cup on the rice, drop in the red-hot charcoal, spoon oil over it, and clap the lid on to trap the smoke for 5 minutes."},
      {b:"Serve", t:"Fluff the rice, drizzle saffron water, and pile the chicken on top."}
    ],
    tools:["Heavy pot|large lidded stockpot","Small metal cup|smoking cup for dukhan","Fine strainer|fine mesh strainer"]
  },
  {
    slug:"batata-harra", title:"Batata Harra, and where to source it", cuisine:"Middle Eastern", category:"Side",
    kw:"batata harra, spicy potatoes, lebanese potatoes, cilantro garlic potatoes",
    iso:["PT15M","PT30M","PT45M"], prep:"15 min", cook:"30 min", makes:"serves 4",
    desc:"Lebanese batata harra — crispy potatoes tossed with a raw garlic, cilantro, and chile pound, and where to source it.",
    dek:"Get the potatoes genuinely crisp first, then toss them with the garlic-cilantro-chile mix off the heat so the garlic stays sharp and the cilantro raw and green. Cooking the garlic down into the potatoes turns it flat and the whole dish goes muddy.",
    card:"Crisp fried potatoes tossed with raw garlic, cilantro and chile.",
    ing:[
      {n:"Potatoes", q:"Waxy or all-purpose, cut in even cubes so they crisp evenly.", amt:"2 lb", local:true},
      {n:"Fresh cilantro", q:"A big bunch, chopped; goes in at the end to stay bright.", amt:"1 cup packed", local:true},
      {n:"Garlic", q:"Lots of it, minced or pounded — the defining flavor.", amt:"6 cloves", local:true},
      {n:"Red chile", q:"Fresh or dried flakes; harra means spicy.", amt:"1-2", local:true},
      {n:"Olive oil", q:"For frying and finishing.", amt:"1/4 cup", local:true},
      {n:"Lemon", q:"A squeeze at the end lifts everything.", amt:"1/2 lemon", local:true},
      {n:"Coriander", q:"A little ground coriander deepens the garlic-cilantro note.", amt:"1 tsp", local:true}
    ],
    steps:[
      {b:"Par-cook", t:"Boil the cubed potatoes 5 minutes until just set at the edges, then drain and dry thoroughly."},
      {b:"Crisp", t:"Fry or roast in hot oil until deep golden and crisp on all sides."},
      {b:"Pound the mix", t:"Mash garlic, chile and coriander with salt into a rough paste."},
      {b:"Toss off heat", t:"Kill the heat, add the garlic paste and cilantro, and toss until fragrant in the residual warmth."},
      {b:"Finish", t:"Squeeze lemon over, adjust salt, and serve hot."}
    ],
    tools:["Cast iron skillet|cast iron skillet","Mortar and pestle|mortar and pestle","Mixing bowl|stainless mixing bowl"]
  },
  {
    slug:"shish-tawook", title:"Shish Tawook, and where to source it", cuisine:"Middle Eastern", category:"Main",
    kw:"shish tawook, chicken skewers, lebanese chicken, garlic yogurt marinade, grilled chicken",
    iso:["PT20M","PT15M","PT35M"], prep:"20 min", cook:"15 min", makes:"serves 4",
    desc:"Lebanese shish tawook — chicken in a garlicky yogurt-lemon marinade, charred on skewers, and where to source it.",
    dek:"The marinade needs both yogurt and acid working overnight. Yogurt's mild enzymes and lactic acid tenderize the breast so it stays juicy over high heat, while lemon and garlic drive the flavor in. A one-hour marinade tastes like plain grilled chicken; give it 8-24 hours.",
    card:"Yogurt-and-garlic marinated chicken skewers, charred over high heat.",
    ing:[
      {n:"Chicken breast or thigh", q:"Cut in even 1.5-inch cubes so they cook at the same rate.", amt:"2 lb", local:true},
      {n:"Plain yogurt", q:"Whole-milk; the tenderizing base of the marinade.", amt:"1/2 cup", local:true},
      {n:"Garlic", q:"Crushed to a paste — the dominant flavor.", amt:"5 cloves", local:true},
      {n:"Lemon juice", q:"Fresh; balances the garlic and helps tenderize.", amt:"1/4 cup", local:true},
      {n:"Tomato paste", q:"A spoonful for color and a subtle depth.", amt:"1 tbsp", local:true},
      {n:"Paprika and allspice", q:"Warm spices that mark it as Levantine.", amt:"1 tsp each", local:true},
      {n:"Olive oil", q:"Helps the marinade cling and keeps the meat from drying.", amt:"3 tbsp", local:true}
    ],
    steps:[
      {b:"Make the marinade", t:"Whisk yogurt, garlic, lemon, tomato paste, spices, oil and salt into a smooth coat."},
      {b:"Marinate", t:"Fold in the chicken and refrigerate 8-24 hours."},
      {b:"Skewer", t:"Thread onto skewers, leaving a little space between cubes for the char."},
      {b:"Grill", t:"Cook over high direct heat, turning, until charred outside and just cooked through."},
      {b:"Rest and serve", t:"Rest a few minutes, then serve with garlic sauce, pickles and flatbread."}
    ],
    tools:["Skewers|flat metal grill skewers","Grill|charcoal grill","Mixing bowl|glass marinating bowl"]
  },
  {
    slug:"briam", title:"Briam, and where to source it", cuisine:"Greek", category:"Side",
    kw:"briam, greek roasted vegetables, ladera, zucchini potato bake, tourlou",
    iso:["PT25M","PT1H15M","PT1H40M"], prep:"25 min", cook:"1 hr 15 min", makes:"serves 6",
    desc:"Greek briam — slow-roasted zucchini, potato, and tomato bound with olive oil, and where to source it.",
    dek:"This is a ladero dish — it lives on olive oil, so don't skimp. A generous quarter-cup or more, plus a long low roast, is what melts the vegetables together and concentrates the tomato into something jammy. Underoil it and you get dry roasted vegetables, not briam.",
    card:"Zucchini, potato and tomato slow-roasted in generous olive oil.",
    ing:[
      {n:"Zucchini", q:"Sliced in rounds; releases moisture that flavors the whole pan.", amt:"1.5 lb", local:true},
      {n:"Potatoes", q:"Waxy, sliced thin so they cook through in the long roast.", amt:"1 lb", local:true},
      {n:"Ripe tomatoes", q:"Grated fresh plus a few sliced; the sauce comes from them.", amt:"1.5 lb", local:true},
      {n:"Onion", q:"Sliced; melts into sweetness over the long bake.", amt:"1 large", local:true},
      {n:"Extra-virgin olive oil", q:"Generous — this is a ladero dish and the oil is the point.", amt:"1/2 cup", local:true},
      {n:"Garlic", q:"Sliced, scattered through the layers.", amt:"4 cloves", local:true},
      {n:"Fresh parsley", q:"Chopped through and over at the end.", amt:"1/2 cup", local:true},
      {n:"Dried oregano", q:"Greek oregano; the signature herb.", amt:"1 tbsp", local:true}
    ],
    steps:[
      {b:"Prep the vegetables", t:"Slice zucchini, potato, onion and some tomato; grate the rest of the tomato for sauce."},
      {b:"Combine", t:"Toss everything in a wide baking dish with olive oil, garlic, oregano, parsley, salt and pepper."},
      {b:"Arrange", t:"Spread into an even layer so the vegetables roast rather than steam."},
      {b:"Roast low and slow", t:"Bake at 375F for 60-75 minutes, stirring once, until the edges caramelize and the potatoes are soft."},
      {b:"Rest", t:"Let it settle 15 minutes; briam is best warm or at room temperature with bread and feta."}
    ],
    tools:["Ceramic baking dish|large ceramic baking dish","Box grater|box grater","Chef knife|chef knife"]
  },
  {
    slug:"horiatiki-salad", title:"Horiatiki Greek Salad, and where to source it", cuisine:"Greek", category:"Salad",
    kw:"horiatiki, greek salad, village salad, feta salad, tomato cucumber salad",
    iso:["PT15M","PT0M","PT15M"], prep:"15 min", cook:"0 min", makes:"serves 4",
    desc:"The real horiatiki — ripe tomatoes, cucumber, and a whole slab of feta, no lettuce, and where to source it.",
    dek:"There is no lettuce and no vinaigrette. It hinges on genuinely ripe summer tomatoes and a slab of real barrel-aged feta laid whole on top, not crumbled. Good olive oil and a little dried oregano is the entire dressing — the tomato juice does the rest.",
    card:"Ripe tomatoes, cucumber, onion and a slab of feta, no lettuce.",
    ing:[
      {n:"Ripe tomatoes", q:"Peak-season and juicy — the dish is only as good as these.", amt:"1 lb", local:true},
      {n:"Cucumber", q:"Thick half-moons; a firm field cucumber holds up best.", amt:"1", local:true},
      {n:"Feta", q:"A whole slab of real barrel-aged sheep's-milk feta, laid on top, never crumbled.", amt:"6 oz block", local:true},
      {n:"Red onion", q:"Thinly sliced; a little goes a long way.", amt:"1/2", local:true},
      {n:"Green pepper", q:"Sliced in rings — the traditional crunch.", amt:"1", local:true},
      {n:"Kalamata olives", q:"With pits for the best flavor.", amt:"1/2 cup", local:true},
      {n:"Extra-virgin olive oil", q:"Fruity Greek oil, poured generously; half the dressing.", amt:"1/4 cup", local:true},
      {n:"Dried oregano", q:"Crumbled over the feta at the end.", amt:"1 tsp", local:true}
    ],
    steps:[
      {b:"Cut the vegetables", t:"Chop tomatoes into wedges, cucumber into thick half-moons, and slice onion and pepper."},
      {b:"Combine", t:"Toss the vegetables and olives in a bowl with salt, no vinegar needed."},
      {b:"Top with feta", t:"Lay the whole slab of feta on top rather than crumbling it in."},
      {b:"Dress", t:"Pour olive oil generously over everything and crumble oregano over the feta."},
      {b:"Serve", t:"Serve at once with bread to mop the tomato-oil at the bottom."}
    ],
    tools:["Salad bowl|wooden salad bowl","Chef knife|chef knife","Cutting board|wood cutting board"]
  },
  {
    slug:"keftedes", title:"Keftedes, and where to source it", cuisine:"Greek", category:"Appetizer",
    kw:"keftedes, greek meatballs, keftedakia, fried meatballs, mint meatballs",
    iso:["PT25M","PT15M","PT40M"], prep:"25 min", cook:"15 min", makes:"serves 6",
    desc:"Greek keftedes — herb-and-mint fried meatballs lightened with soaked bread, and where to source it.",
    dek:"Stale bread soaked in water or wine and squeezed dry, not breadcrumbs, is the binder that keeps keftedes tender. It holds moisture the way dry crumbs can't, so the meatballs stay soft inside instead of turning dense. Fresh mint is the other non-negotiable.",
    card:"Herb-and-mint meatballs bound with soaked bread and fried crisp.",
    ing:[
      {n:"Ground beef or lamb", q:"Or a mix; lamb leans more traditional and richer.", amt:"1 lb", local:true},
      {n:"Stale bread", q:"Crustless, soaked and squeezed dry — the real binder, not dry crumbs.", amt:"2 thick slices", local:true},
      {n:"Fresh mint", q:"Chopped; the herb that defines keftedes.", amt:"1/4 cup", local:true},
      {n:"Onion", q:"Grated so it disappears into the mix and adds moisture.", amt:"1", local:true},
      {n:"Garlic", q:"Minced fine.", amt:"2 cloves", local:true},
      {n:"Egg", q:"One, to help the mix hold.", amt:"1", local:true},
      {n:"Dried oregano", q:"Greek oregano, with the mint.", amt:"1 tsp", local:true},
      {n:"Flour", q:"For a light dredge before frying.", amt:"1/2 cup", local:true}
    ],
    steps:[
      {b:"Soak the bread", t:"Soak stale bread in water, then squeeze out all the liquid."},
      {b:"Mix", t:"Combine meat, squeezed bread, grated onion, garlic, mint, oregano, egg, salt and pepper by hand."},
      {b:"Rest", t:"Chill the mix at least 30 minutes so the flavors set and it firms up."},
      {b:"Shape and dredge", t:"Roll into small balls and dredge lightly in flour."},
      {b:"Fry", t:"Fry in hot oil, turning, until deep brown and cooked through. Serve with lemon."}
    ],
    tools:["Frying pan|deep frying pan","Mixing bowl|large mixing bowl","Box grater|box grater"]
  },
  {
    slug:"greek-lemon-potatoes", title:"Greek Lemon Potatoes, and where to source it", cuisine:"Greek", category:"Side",
    kw:"greek lemon potatoes, patates lemonates, roasted lemon potatoes, oregano potatoes",
    iso:["PT15M","PT1H15M","PT1H30M"], prep:"15 min", cook:"1 hr 15 min", makes:"serves 6",
    desc:"Greek lemon potatoes — roasted in lemon, olive oil, and broth until the edges caramelize, and where to source it.",
    dek:"Roast them submerged in the lemon-broth-oil liquid, not dry. The potatoes braise as the liquid cooks off, absorbing the lemon, then the last stretch in the empty pan crisps and caramelizes the edges. Roast them dry from the start and you lose the tang that defines the dish.",
    card:"Potatoes braise-roasted in lemon, oil and broth until edges caramelize.",
    ing:[
      {n:"Potatoes", q:"Starchy like Yukon Gold, cut in thick wedges that hold their shape.", amt:"2.5 lb", local:true},
      {n:"Lemon juice", q:"Fresh and plenty — the defining flavor, don't hold back.", amt:"1/2 cup", local:true},
      {n:"Olive oil", q:"Good Greek oil, generous.", amt:"1/3 cup", local:true},
      {n:"Chicken or vegetable broth", q:"The braising liquid the potatoes drink up.", amt:"1 cup", local:true},
      {n:"Garlic", q:"Whole or smashed cloves scattered through the pan.", amt:"5 cloves", local:true},
      {n:"Dried oregano", q:"Greek oregano, a heavy hand.", amt:"1 tbsp", local:true},
      {n:"Dijon or mustard", q:"A small spoon rounds out the lemon; traditional in many versions.", amt:"1 tsp", local:true}
    ],
    steps:[
      {b:"Prep", t:"Cut potatoes into thick wedges and arrange in a single layer in a roasting pan."},
      {b:"Add the liquid", t:"Whisk lemon, oil, broth, garlic, oregano, mustard, salt and pepper, and pour over to nearly submerge."},
      {b:"Braise-roast", t:"Roast at 400F for about 50 minutes, turning once, until the liquid is mostly absorbed."},
      {b:"Caramelize", t:"Continue roasting in the near-dry pan until the edges brown and crisp."},
      {b:"Serve", t:"Spoon any pan juices over and finish with a little more fresh lemon."}
    ],
    tools:["Roasting pan|metal roasting pan","Citrus juicer|handheld citrus juicer","Chef knife|chef knife"]
  },
  {
    slug:"fasolada", title:"Fasolada, and where to source it", cuisine:"Greek", category:"Soup",
    kw:"fasolada, greek bean soup, white bean soup, cannellini soup, olive oil bean soup",
    iso:["PT20M","PT1H30M","PT1H50M"], prep:"20 min", cook:"1 hr 30 min", makes:"serves 6",
    desc:"Fasolada, the Greek white bean soup — dried beans, vegetables, and a heavy pour of olive oil, and where to source it.",
    dek:"Finish with a generous raw pour of extra-virgin olive oil off the heat, and be patient with dried beans over canned. The raw oil emulsifies into the broth and gives fasolada its body and richness — this soup is famously carried by olive oil, not meat.",
    card:"Dried white beans simmered with vegetables, finished with raw olive oil.",
    ing:[
      {n:"Dried white beans", q:"Cannellini or medium white beans, soaked overnight for even cooking.", amt:"1 lb", local:true},
      {n:"Carrots and celery", q:"Diced; the aromatic base of the pot.", amt:"2 each", local:true},
      {n:"Onion", q:"Chopped, softened at the start.", amt:"1 large", local:true},
      {n:"Tomato", q:"Grated fresh or a spoon of paste for color and depth.", amt:"2 tomatoes", local:true},
      {n:"Extra-virgin olive oil", q:"Split — some to cook, a big raw pour to finish. The soul of the dish.", amt:"1/2 cup", local:true},
      {n:"Bay leaf", q:"One or two, simmered in.", amt:"2", local:true},
      {n:"Celery leaves and parsley", q:"For a fresh finish.", amt:"1/2 cup", local:true}
    ],
    steps:[
      {b:"Soak", t:"Soak the beans overnight, then drain."},
      {b:"Start the pot", t:"Soften onion, carrot and celery in olive oil until fragrant."},
      {b:"Simmer", t:"Add beans, tomato, bay leaf and water to cover generously; simmer gently until the beans are creamy soft, 60-90 minutes."},
      {b:"Season", t:"Salt only once the beans are tender, and adjust to taste."},
      {b:"Finish with oil", t:"Off the heat, pour in a generous stream of raw olive oil and scatter parsley. Serve with bread and olives."}
    ],
    tools:["Soup pot|heavy soup pot","Box grater|box grater","Ladle|stainless ladle"]
  },
  {
    slug:"gigantes-plaki", title:"Gigantes Plaki, and where to source it", cuisine:"Greek", category:"Main",
    kw:"gigantes plaki, greek giant beans, baked butter beans, tomato baked beans, gigandes",
    iso:["PT30M","PT1H30M","PT2H"], prep:"30 min", cook:"1 hr 30 min", makes:"serves 6",
    desc:"Gigantes plaki — giant beans baked in a sweet tomato-and-herb sauce until creamy, and where to source it.",
    dek:"Undercook the beans slightly before they go in the oven, because they finish cooking in the tomato sauce and will fall apart if boiled fully first. The long, gentle bake is what turns the giant beans creamy inside while the sauce reduces around them.",
    card:"Giant beans baked in a sweet tomato-and-herb sauce until creamy.",
    ing:[
      {n:"Gigantes or large lima beans", q:"Dried giant beans, soaked overnight; butter beans substitute well.", amt:"1 lb", local:true},
      {n:"Ripe tomatoes", q:"Grated fresh, or good canned, for the plaki sauce.", amt:"2 lb", local:true},
      {n:"Onion", q:"Chopped, cooked down as the sauce base.", amt:"2", local:true},
      {n:"Garlic", q:"Several cloves for the sauce.", amt:"4 cloves", local:true},
      {n:"Extra-virgin olive oil", q:"Generous, as in all Greek ladera.", amt:"1/2 cup", local:true},
      {n:"Fresh parsley and dill", q:"Both, stirred in and over the top.", amt:"1/2 cup", local:true},
      {n:"Carrot", q:"Diced small for a touch of sweetness in the sauce.", amt:"1", local:true},
      {n:"Sugar", q:"A pinch to balance the tomato acidity; traditional.", amt:"1 tsp", local:true}
    ],
    steps:[
      {b:"Par-boil the beans", t:"Simmer soaked beans until barely tender but still firm — they finish in the oven."},
      {b:"Make the sauce", t:"Cook onion, carrot and garlic in olive oil, then add tomato, herbs, sugar, salt and pepper and simmer."},
      {b:"Combine", t:"Fold the drained beans into the sauce with a splash of their cooking water."},
      {b:"Bake", t:"Transfer to a baking dish and bake at 350F for 60-90 minutes until the top browns and the sauce thickens."},
      {b:"Rest", t:"Cool at least 20 minutes; gigantes are best warm or at room temperature with feta and bread."}
    ],
    tools:["Ceramic baking dish|large ceramic baking dish","Saucepan|heavy saucepan","Box grater|box grater"]
  },
  {
    slug:"spanakorizo", title:"Spanakorizo, and where to source it", cuisine:"Greek", category:"Main",
    kw:"spanakorizo, greek spinach rice, spinach rice, lemon dill rice, ladera",
    iso:["PT15M","PT30M","PT45M"], prep:"15 min", cook:"30 min", makes:"serves 4",
    desc:"Spanakorizo — Greek spinach and rice cooked soft in olive oil with dill and lemon, and where to source it.",
    dek:"Cook the spinach down fully in olive oil before the rice goes in, and finish with lemon only off the heat. Wilting the spinach first releases its water to cook the rice, while adding lemon at the end keeps it bright — stirred in early, the acid dulls and can keep the rice from softening.",
    card:"Spinach cooked down in olive oil with rice, dill and lemon.",
    ing:[
      {n:"Fresh spinach", q:"A big pile; it cooks down to a fraction. Chopped.", amt:"1.5 lb", local:true},
      {n:"Medium-grain rice", q:"A softer rice that goes creamy, not fluffy and separate.", amt:"1 cup", local:true},
      {n:"Fresh dill", q:"Generous; the herb that makes it spanakorizo.", amt:"1/2 cup", local:true},
      {n:"Spring onions or onion", q:"Softened in oil as the base.", amt:"4 spring onions", local:true},
      {n:"Extra-virgin olive oil", q:"Generous — a ladero dish.", amt:"1/3 cup", local:true},
      {n:"Lemon", q:"Juiced in at the very end to keep it bright.", amt:"1 lemon", local:true},
      {n:"Vegetable broth or water", q:"The rice cooks in this plus the spinach's own liquid.", amt:"2 cups", local:true}
    ],
    steps:[
      {b:"Soften the base", t:"Cook spring onions in olive oil until soft."},
      {b:"Wilt the spinach", t:"Add the chopped spinach and cook down fully until collapsed and its liquid releases."},
      {b:"Add rice", t:"Stir in the rice, dill, broth, salt and pepper."},
      {b:"Simmer", t:"Cover and cook gently until the rice is soft and creamy and the liquid is absorbed."},
      {b:"Finish with lemon", t:"Off the heat, stir in fresh lemon juice and rest a few minutes. Serve with feta."}
    ],
    tools:["Wide pot|wide lidded saute pot","Wooden spoon|wooden spoon","Citrus juicer|handheld citrus juicer"]
  },
  {
    slug:"sopa-de-lima", title:"Sopa de Lima, and where to source it", cuisine:"Mexican", category:"Soup",
    kw:"sopa de lima, yucatan lime soup, mexican lime soup, chicken lime soup, tortilla lime soup",
    iso:["PT20M","PT40M","PT1H"], prep:"20 min", cook:"40 min", makes:"serves 6",
    desc:"Yucatecan sopa de lima — a clear chicken-lime broth over tortilla strips, and where to source it.",
    dek:"The lima agria (Yucatecan bitter lime) is the whole soul of the dish — its floral bitterness is not the same as a regular lime. If you can only find Persian limes, add a strip of the peel to the broth to mimic that faint bitterness, and add the juice only at the end so it doesn't turn harsh.",
    card:"Clear chicken-lime broth poured over crisp tortilla strips.",
    ing:[
      {n:"Chicken", q:"Bone-in for a richer broth; poach and shred the meat.", amt:"2 lb", local:true},
      {n:"Lima agria or limes", q:"Yucatecan bitter lime if you can find it; otherwise limes plus a strip of peel. The heart of the soup.", amt:"4", local:true},
      {n:"Corn tortillas", q:"Cut in strips and fried crisp for the base.", amt:"6", local:true},
      {n:"Tomato", q:"Diced, added to the broth.", amt:"2", local:true},
      {n:"White onion", q:"Some for the broth, some raw to finish.", amt:"1", local:true},
      {n:"Habanero", q:"Whole in the broth for aroma, or diced for heat — Yucatecan signature.", amt:"1", local:true},
      {n:"Mexican oregano", q:"More citrusy than Mediterranean oregano; the right note here.", amt:"1 tsp", local:true},
      {n:"Cilantro", q:"For garnish.", amt:"1/4 cup", local:true}
    ],
    steps:[
      {b:"Make the broth", t:"Poach chicken with onion, garlic and salt until tender, then shred the meat and reserve the broth."},
      {b:"Build the soup", t:"Simmer the broth with tomato, onion, Mexican oregano and a whole habanero for aroma."},
      {b:"Fry the tortillas", t:"Cut tortillas into strips and fry until crisp; drain."},
      {b:"Add lime", t:"Return the shredded chicken, then off the heat stir in fresh lime juice (and a strip of peel if using Persian limes)."},
      {b:"Serve", t:"Pile tortilla strips in bowls, ladle the hot broth over, and garnish with cilantro, onion and a lime wedge."}
    ],
    tools:["Stockpot|large stockpot","Frying pan|frying pan for tortillas","Ladle|stainless ladle"]
  }
];

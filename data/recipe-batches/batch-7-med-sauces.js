// batch-7-med-sauces.js — de-slopped 2026-07-13: lowercase titles, rewritten deks (killed the
// "[Dish] is X, so buy Y. The one technique: Z" template + comma splices), 3 tools each. Content kept.
module.exports = [
  {
    slug:"hummus",
    title:"Hummus, and where to source it",
    cuisine:"Middle Eastern",
    category:"Appetizer",
    kw:"hummus, chickpea dip, tahini, mezze",
    iso:["PT20M","PT0M","PT20M"],
    prep:"20 min",
    cook:"0 min",
    makes:"6 servings",
    desc:"Whipped chickpeas and tahini smoothed with lemon and good olive oil.",
    dek:"Peel the chickpeas, or at least simmer them soft with a pinch of baking soda before you blend. Slipping the skins off is what turns grainy into silk, because with only tahini, lemon, and oil in the bowl, texture is the whole dish.",
    card:"Peel the chickpeas and buy real tahini and the dip turns to silk.",
    ing:[
      {n:"Dried chickpeas", q:"Cook them from dry for a fuller, nuttier bean than canned.", amt:"1 cup dried (or 2 cans)", shelf:"heirloom-beans"},
      {n:"Tahini", q:"A fresh, pourable sesame paste; bitter or seized tahini ruins the batch.", amt:"1/2 cup", shelf:"seeds"},
      {n:"Olive oil", q:"A grassy, peppery oil for both the blend and the pour on top.", amt:"1/4 cup", shelf:"olive-oil"},
      {n:"Lemon", q:"Fresh juice for brightness; bottled tastes flat here.", amt:"1 large", shelf:"citrus"},
      {n:"Garlic and cumin", q:"One small clove and a pinch of ground cumin, grated fine.", amt:"1 clove", local:true}
    ],
    steps:[
      {b:"Soften the beans", t:"Simmer soaked chickpeas with a big pinch of baking soda until they mash between two fingers, about 45 minutes. The soda breaks down the skins so the blend goes creamy."},
      {b:"Whip the tahini first", t:"Blend tahini with lemon juice and a few tablespoons of ice water alone until it seizes then loosens to a pale, fluffy paste. This aeration is what makes it light."},
      {b:"Add the chickpeas", t:"Drop in the warm chickpeas, garlic, cumin, and salt and run the processor a full three to four minutes, scraping down, until it is completely smooth."},
      {b:"Finish the bowl", t:"Spread on a plate, swipe a well with the back of a spoon, and flood it with olive oil. Serve warm or at room temperature, never fridge-cold."}
    ],
    tools:["Food processor|food processor","Fine microplane|microplane grater","Citrus juicer|handheld citrus juicer"]
  },
  {
    slug:"falafel",
    title:"Falafel, and where to source it",
    cuisine:"Middle Eastern",
    category:"Main",
    kw:"falafel, chickpea fritter, street food",
    iso:["PT30M","PT15M","PT45M"],
    prep:"30 min",
    cook:"15 min",
    makes:"4 servings",
    desc:"Crisp herb-green chickpea fritters fried from a raw, soaked bean.",
    dek:"Use dry chickpeas soaked overnight and left raw, never canned and never cooked. Canned beans are full of water and disintegrate in the oil; raw soaked ones grind into a dry, coarse batter that fries up shatter-crisp with a green, fluffy middle.",
    card:"Soak dry chickpeas, never cook them, and the fritters fry up shatter-crisp.",
    ing:[
      {n:"Dried chickpeas", q:"Soaked overnight and left raw; this is non-negotiable for texture.", amt:"1 cup dried", shelf:"heirloom-beans"},
      {n:"Cumin and coriander", q:"Toasted and ground fresh so the fritters taste warm, not dusty.", amt:"2 tsp each", shelf:"spices"},
      {n:"Herbs, onion, garlic", q:"A big handful of parsley and cilantro plus onion and garlic for the green interior.", amt:"2 cups herbs", local:true},
      {n:"Frying oil", q:"A neutral oil deep enough to float the fritters at 350F.", amt:"for frying", local:true}
    ],
    steps:[
      {b:"Grind coarse", t:"Pulse the raw soaked chickpeas with herbs, onion, garlic, and spices to a coarse, couscous-like grind. A puree will not hold, so stop while it is still gritty."},
      {b:"Rest the mix", t:"Chill the mixture at least 30 minutes so it firms and the flavors marry. Stir in a pinch of baking soda right before shaping for lift."},
      {b:"Shape tight", t:"Pack into firm little pucks with a scoop or wet hands. If they crumble, pulse the batter again to bind it tighter."},
      {b:"Fry hot", t:"Fry at 350F for three to four minutes until deep brown and crackly. Drain on a rack, not paper, so the bottoms stay crisp."}
    ],
    tools:["Food processor|food processor","Frying thermometer|deep fry thermometer","Spider strainer|spider skimmer"]
  },
  {
    slug:"tabbouleh",
    title:"Tabbouleh, and where to source it",
    cuisine:"Middle Eastern",
    category:"Side",
    kw:"tabbouleh, parsley salad, bulgur, mezze",
    iso:["PT25M","PT0M","PT25M"],
    prep:"25 min",
    cook:"0 min",
    makes:"4 servings",
    desc:"A parsley-forward salad with fine bulgur, lemon, and good olive oil.",
    dek:"This is a parsley salad, not a grain one: herbs by the bunch, bulgur by the spoonful. Soak the fine bulgur in the lemon juice instead of water so it drinks up the acid, and chop the parsley bone-dry so it never weeps into slush.",
    card:"Soak the bulgur in lemon and chop the parsley dry for a salad that keeps its snap.",
    ing:[
      {n:"Olive oil", q:"A clean, fruity oil that carries the lemon; this is half the dressing.", amt:"1/3 cup", shelf:"olive-oil"},
      {n:"Lemon", q:"Fresh juice to hydrate the bulgur and dress the salad.", amt:"2 lemons", shelf:"citrus"},
      {n:"Parsley, mint, tomato", q:"Flat-leaf parsley by the bunch, a little mint, and firm diced tomato.", amt:"3 bunches parsley", local:true},
      {n:"Fine bulgur", q:"The fine grade so it softens with no cooking.", amt:"1/2 cup", local:true}
    ],
    steps:[
      {b:"Hydrate in lemon", t:"Soak the fine bulgur in the fresh lemon juice for 15 minutes until tender. The acid seasons the grain from the inside."},
      {b:"Chop dry", t:"Wash and thoroughly dry the parsley, then chop it fine with a sharp knife. Wet or bruised herbs weep and the salad turns to slush."},
      {b:"Drain the tomatoes", t:"Dice the tomatoes and let them shed in a strainer for a few minutes so their water does not flood the bowl."},
      {b:"Toss and rest", t:"Fold everything with olive oil and salt, then let it sit 10 minutes so the bulgur finishes and the flavors settle."}
    ],
    tools:["Sharp chef knife|chef knife","Salad spinner|salad spinner","Citrus juicer|handheld citrus juicer"]
  },
  {
    slug:"baba-ganoush",
    title:"Baba Ganoush, and where to source it",
    cuisine:"Middle Eastern",
    category:"Appetizer",
    kw:"baba ganoush, eggplant dip, smoked eggplant, mezze",
    iso:["PT15M","PT40M","PT55M"],
    prep:"15 min",
    cook:"40 min",
    makes:"6 servings",
    desc:"Smoky charred eggplant whipped with tahini and lemon.",
    dek:"Blister the eggplant black over a live flame until it collapses; roasting it in the oven only steams it and you lose the smoke that is the entire point. Then drain the flesh hard in a strainer before the tahini goes in, or the dip turns watery.",
    card:"Char the eggplant black over live flame and drain it hard for real smoke.",
    ing:[
      {n:"Tahini", q:"A smooth sesame paste to round out the smoke; keep it modest so the eggplant leads.", amt:"1/3 cup", shelf:"seeds"},
      {n:"Olive oil", q:"A peppery oil to finish and to flood the top of the bowl.", amt:"3 tbsp", shelf:"olive-oil"},
      {n:"Lemon", q:"Fresh juice to cut the richness.", amt:"1 lemon", shelf:"citrus"},
      {n:"Eggplant and garlic", q:"Large globe eggplants and one small raw clove.", amt:"2 large eggplants", local:true}
    ],
    steps:[
      {b:"Char over flame", t:"Blister the whole eggplants directly over a gas burner or grill, turning, until the skin is fully black and the flesh sags. This is where the smoke comes from."},
      {b:"Steam and peel", t:"Rest them in a covered bowl 10 minutes, then peel off the burnt skin and pull out any big seed pockets."},
      {b:"Drain hard", t:"Set the flesh in a strainer and let the bitter liquid drip out for 15 minutes. Skipping this is why most baba ganoush is soupy."},
      {b:"Fold, do not blend", t:"Mash the eggplant with a fork and fold in tahini, lemon, garlic, and salt. A processor makes it gluey, so keep it a little rustic."}
    ],
    tools:["Tongs|kitchen tongs","Fine mesh strainer|fine mesh strainer","Mixing bowl|mixing bowl"]
  },
  {
    slug:"ratatouille",
    title:"Ratatouille, and where to source it",
    cuisine:"French",
    category:"Side",
    kw:"ratatouille, provencal vegetables, summer stew",
    iso:["PT30M","PT45M","PT75M"],
    prep:"30 min",
    cook:"45 min",
    makes:"6 servings",
    desc:"A Provencal stew of eggplant, zucchini, and pepper in good olive oil.",
    dek:"Cook each vegetable on its own before they meet. Crowd the eggplant, zucchini, and peppers into one pot and they steam into gray mush; sear them separately and they hold their shape in the sauce the tomatoes make.",
    card:"Cook each vegetable on its own before combining and it stays a stew, not a mush.",
    ing:[
      {n:"Canned tomatoes", q:"Whole peeled tomatoes crushed by hand for the base.", amt:"1 28-oz can", shelf:"canned-tomatoes"},
      {n:"Olive oil", q:"A generous, fruity oil is the cooking medium and the flavor.", amt:"1/2 cup", shelf:"olive-oil"},
      {n:"Eggplant, zucchini, pepper", q:"Firm summer vegetables cut in even chunks.", amt:"2 lbs total", local:true},
      {n:"Onion, garlic, herbs", q:"Onion, garlic, and a bundle of thyme and basil.", amt:"1 onion", local:true}
    ],
    steps:[
      {b:"Sear separately", t:"Brown the eggplant, then the zucchini, then the peppers in batches in olive oil. Crowding steams them, so give each vegetable room and pull it when it colors."},
      {b:"Build the base", t:"Soften onion and garlic, add the hand-crushed tomatoes and thyme, and simmer into a loose sauce."},
      {b:"Marry low and slow", t:"Return all the seared vegetables to the pot and cook gently 20 minutes so they soften together without falling apart."},
      {b:"Rest and finish", t:"Take it off the heat, tear in fresh basil, and let it sit. Ratatouille tastes better warm than hot, and better still the next day."}
    ],
    tools:["Wide saute pan|saute pan","Dutch oven|enameled dutch oven","Chef knife|chef knife"]
  },
  {
    slug:"croque-monsieur",
    title:"Croque Monsieur, and where to source it",
    cuisine:"French",
    category:"Main",
    kw:"croque monsieur, ham cheese toast, bechamel, cafe",
    iso:["PT20M","PT15M","PT35M"],
    prep:"20 min",
    cook:"15 min",
    makes:"2 servings",
    desc:"A griddled ham sandwich cloaked in bechamel and broiled Gruyere.",
    dek:"It rides on the bechamel. Cook the flour and butter into a blond roux for a couple of minutes before the milk goes in, or the sauce tastes raw and pasty under the broiled Gruyere. A real country loaf and a nutty melting cheese carry the rest.",
    card:"Make a proper bechamel and use a real melting cheese for the cafe classic.",
    ing:[
      {n:"Country bread", q:"A sturdy loaf that holds up under sauce; sliced thick.", amt:"4 slices", shelf:"bread"},
      {n:"Gruyere", q:"A nutty melting cheese for the inside and the broiled top.", amt:"6 oz", shelf:"cheese"},
      {n:"Butter", q:"Good butter for the roux and to griddle the bread.", amt:"4 tbsp", shelf:"butter"},
      {n:"Milk", q:"Whole milk warmed for a rich bechamel.", amt:"1 1/2 cups", shelf:"milk"},
      {n:"Flour", q:"All-purpose flour to build the roux.", amt:"3 tbsp", shelf:"baking-flour"},
      {n:"Good ham", q:"Thick-cut cured ham from a real butcher.", amt:"6 oz", shelf:"regenerative-meat"}
    ],
    steps:[
      {b:"Cook the roux", t:"Melt butter, whisk in the flour, and cook two minutes to a blond paste. Cooking out the flour now is what keeps the sauce from tasting chalky."},
      {b:"Build the bechamel", t:"Stream in warm milk whisking constantly until it thickens to a coating sauce, then melt in a handful of Gruyere and a scrape of nutmeg."},
      {b:"Assemble", t:"Layer ham and cheese between the bread, griddle both sides in butter until golden, then top the sandwich with a thick blanket of bechamel and more cheese."},
      {b:"Broil the top", t:"Run it under a hot broiler until the top bubbles and browns in spots. Watch it, it goes from gold to burnt fast."}
    ],
    tools:["Whisk|kitchen whisk","Cast iron skillet|cast iron skillet","Box grater|box grater"]
  },
  {
    slug:"crepes",
    title:"Crepes, and where to source it",
    cuisine:"French",
    category:"Breakfast",
    kw:"crepes, thin pancakes, batter, breakfast",
    iso:["PT10M","PT20M","PT30M"],
    prep:"10 min",
    cook:"20 min",
    makes:"12 crepes",
    desc:"Thin, lacy pancakes from a simple flour, egg, and milk batter.",
    dek:"Rest the batter at least 30 minutes before you cook. That pause lets the flour hydrate and the gluten relax, which is the whole difference between a tender, lacy crepe and a rubbery one, and it costs nothing but time.",
    card:"Rest the batter and swirl the pan thin for lacy, tender crepes.",
    ing:[
      {n:"Flour", q:"All-purpose flour, sifted, for a lump-free batter.", amt:"1 cup", shelf:"baking-flour"},
      {n:"Eggs", q:"Fresh eggs bind the thin batter and give it color.", amt:"3 large", shelf:"eggs"},
      {n:"Milk", q:"Whole milk thinned with a little water for lacy edges.", amt:"1 1/2 cups", shelf:"milk"},
      {n:"Butter", q:"Melted into the batter and for the pan.", amt:"3 tbsp", shelf:"butter"},
      {n:"Salt", q:"A pinch to season; sugar too if going sweet.", amt:"1 pinch", local:true}
    ],
    steps:[
      {b:"Blend smooth", t:"Whisk or blend flour, eggs, milk, melted butter, and salt until pourable and completely smooth, the consistency of heavy cream."},
      {b:"Rest the batter", t:"Cover and rest at least 30 minutes so the flour hydrates and the gluten relaxes. This is the tender-versus-rubbery step."},
      {b:"Swirl thin", t:"Pour a small ladle into a hot buttered pan and immediately swirl to coat in a thin sheet. Too much batter makes a pancake, not a crepe."},
      {b:"Flip once", t:"Cook a minute until the edges lift and the underside is lacy brown, flip, and give it 20 seconds more."}
    ],
    tools:["Nonstick crepe pan|crepe pan","Thin offset spatula|crepe spatula","Ladle|kitchen ladle"]
  },
  {
    slug:"vinaigrette",
    title:"House Vinaigrette, and where to source it",
    cuisine:"French",
    category:"Sauce",
    kw:"vinaigrette, salad dressing, emulsion",
    iso:["PT5M","PT0M","PT5M"],
    prep:"5 min",
    cook:"0 min",
    makes:"1 cup",
    desc:"A mustard-bound emulsion of olive oil and vinegar.",
    dek:"Whisk the mustard into the vinegar first, then add the oil in a slow stream. The mustard is the emulsifier; get it dispersed before the oil goes in and the dressing turns creamy and holds together instead of splitting into a slick.",
    card:"Whisk mustard and vinegar first, then stream the oil to emulsify.",
    ing:[
      {n:"Olive oil", q:"A good extra-virgin; it is three parts of the dressing.", amt:"3/4 cup", shelf:"olive-oil"},
      {n:"Vinegar", q:"A sharp wine or sherry vinegar for backbone.", amt:"1/4 cup", shelf:"vinegar"},
      {n:"Dijon mustard", q:"Real Dijon both seasons and holds the emulsion together.", amt:"1 tbsp", shelf:"mustard"},
      {n:"Shallot", q:"A minced shallot for a gentle bite.", amt:"1 small", local:true}
    ],
    steps:[
      {b:"Macerate the shallot", t:"Stir minced shallot into the vinegar with a pinch of salt and let it sit five minutes. This softens its rawness and seasons the acid."},
      {b:"Whisk the base", t:"Add the mustard to the vinegar and whisk until slurried. The mustard is your emulsifier, so get it fully dispersed first."},
      {b:"Stream the oil", t:"Whisking hard, drizzle the olive oil in a thin stream so it emulsifies into a creamy, unified dressing rather than a slick that separates."},
      {b:"Taste and hold", t:"Adjust salt and acid until it makes you want another bite. It keeps a week in the fridge; shake before each use."}
    ],
    tools:["Whisk|small whisk","Lidded jar|mason jar","Cutting board|wood cutting board"]
  },
  {
    slug:"chimichurri",
    title:"Chimichurri, and where to source it",
    cuisine:"Argentine",
    category:"Sauce",
    kw:"chimichurri, parsley sauce, grill sauce, asado",
    iso:["PT15M","PT0M","PT15M"],
    prep:"15 min",
    cook:"0 min",
    makes:"1 cup",
    desc:"A raw parsley, garlic, and chile sauce for grilled meat.",
    dek:"Chop it by hand and keep it away from the blender. A processor bruises the parsley bitter and whips it to green slurry; a knife keeps it a loose, spoonable relish. Then let it sit an hour so the raw garlic mellows into the oil.",
    card:"Hand-chop it, never blend it, and let it sit an hour before serving.",
    ing:[
      {n:"Olive oil", q:"A robust oil is the body of the sauce.", amt:"3/4 cup", shelf:"olive-oil"},
      {n:"Red wine vinegar", q:"Sharp acid to balance the oil and lift the herbs.", amt:"1/4 cup", shelf:"vinegar"},
      {n:"Dried red chile", q:"Crushed red pepper flakes for a low, steady heat.", amt:"1 tsp", shelf:"dried-chiles"},
      {n:"Parsley, garlic, oregano", q:"Flat-leaf parsley, plenty of raw garlic, and a little dried oregano.", amt:"1 large bunch parsley", local:true}
    ],
    steps:[
      {b:"Chop by hand", t:"Mince the parsley, garlic, and oregano fine with a knife. A processor turns it bitter and pasty, so keep the knife work."},
      {b:"Bloom the chile", t:"Stir the chile flakes into the vinegar with salt and let them soften a minute so the heat spreads evenly."},
      {b:"Combine loose", t:"Fold the herbs and garlic into the vinegar, then pour in the olive oil until it is a loose, spoonable sauce."},
      {b:"Let it sit", t:"Rest at least an hour at room temperature so the raw garlic mellows and the flavors bind. It is even better the next day."}
    ],
    tools:["Sharp chef knife|chef knife","Lidded jar|mason jar","Cutting board|wood cutting board"]
  },
  {
    slug:"aioli",
    title:"Aioli, and where to source it",
    cuisine:"Mediterranean",
    category:"Sauce",
    kw:"aioli, garlic mayonnaise, emulsion, dip",
    iso:["PT15M","PT0M","PT15M"],
    prep:"15 min",
    cook:"0 min",
    makes:"1 cup",
    desc:"A garlic emulsion of egg yolk and olive oil, built by hand.",
    dek:"Add the oil drop by drop at the start. The yolk can only take in so much oil at a time, so those first slow drops are what build the emulsion; rush them and it breaks into a greasy puddle. A fresh yolk and a not-too-bitter oil do the rest.",
    card:"Add the oil drop by drop into the yolk so the emulsion never breaks.",
    ing:[
      {n:"Egg yolks", q:"Fresh yolks at room temperature are the base of the emulsion.", amt:"2 yolks", shelf:"eggs"},
      {n:"Olive oil", q:"A milder oil so the finished sauce is not aggressively bitter; blend in some strong oil at the end for flavor.", amt:"1 cup", shelf:"olive-oil"},
      {n:"Lemon", q:"Fresh juice to season and loosen the emulsion.", amt:"1/2 lemon", shelf:"citrus"},
      {n:"Garlic", q:"Raw garlic pounded to a smooth paste with salt.", amt:"2 cloves", local:true}
    ],
    steps:[
      {b:"Pound the garlic", t:"Mash the garlic with a pinch of salt in a mortar into a smooth paste. The salt acts as an abrasive and there should be no chunks."},
      {b:"Start the yolks", t:"Whisk the yolks with a few drops of lemon until loose and sticky. This is the base that will accept the oil."},
      {b:"Drip the oil", t:"Whisking constantly, add the olive oil literally drop by drop at first until it thickens and grips, then move to a slow thin stream."},
      {b:"Season and thin", t:"Once thick and glossy, beat in the garlic paste and lemon, and loosen with a little water if it is too stiff. If it breaks, start a new yolk and drizzle the broken sauce back in."}
    ],
    tools:["Mortar and pestle|mortar and pestle","Balloon whisk|balloon whisk","Mixing bowl|stainless mixing bowl"]
  },
  {
    slug:"romesco",
    title:"Romesco, and where to source it",
    cuisine:"Spanish",
    category:"Sauce",
    kw:"romesco, catalan sauce, roasted pepper, almond",
    iso:["PT20M","PT10M","PT30M"],
    prep:"20 min",
    cook:"10 min",
    makes:"2 cups",
    desc:"A Catalan sauce of dried peppers, almonds, and fried bread.",
    dek:"Toast the almonds to deep gold and fry a slice of bread in olive oil before anything goes in the blender. The fried bread is the traditional thickener that gives romesco its body, and pale almonds leave the sauce flat, so take both to real color.",
    card:"Toast the almonds and fry the bread for the traditional thickener.",
    ing:[
      {n:"Dried peppers", q:"Nora or ancho chiles, seeded and rehydrated for the base.", amt:"3 dried peppers", shelf:"dried-chiles"},
      {n:"Almonds", q:"Raw almonds toasted deep gold for the nutty backbone.", amt:"3/4 cup", shelf:"almonds"},
      {n:"Olive oil", q:"A good oil to fry the bread and emulsify the sauce.", amt:"1/2 cup", shelf:"olive-oil"},
      {n:"Canned tomatoes", q:"A little tomato roasted down for sweetness and body.", amt:"1 cup", shelf:"canned-tomatoes"},
      {n:"Country bread", q:"A slice fried crisp in olive oil to thicken.", amt:"1 thick slice", shelf:"bread"},
      {n:"Garlic and vinegar", q:"A few cloves and a splash of sherry vinegar to sharpen.", amt:"3 cloves", local:true}
    ],
    steps:[
      {b:"Toast the almonds", t:"Toast the almonds in a dry pan until deep gold and fragrant. Pale almonds give a flat sauce, so take them to real color."},
      {b:"Fry the bread and garlic", t:"Fry the bread slice and garlic in olive oil until crisp, then rehydrate the dried peppers in hot water and scrape out the flesh."},
      {b:"Blend to a paste", t:"Grind the almonds first, then add pepper flesh, fried bread, garlic, roasted tomato, and vinegar and blend to a coarse paste."},
      {b:"Emulsify the oil", t:"With the motor running, stream in the olive oil until the sauce is thick and slightly grainy. It should hold on a spoon, not pour."}
    ],
    tools:["Food processor|food processor","Dry skillet|cast iron skillet","Rubber spatula|silicone spatula"]
  },
  {
    slug:"salsa-verde",
    title:"Italian Salsa Verde, and where to source it",
    cuisine:"Italian",
    category:"Sauce",
    kw:"salsa verde, green sauce, herb sauce, anchovy",
    iso:["PT15M","PT0M","PT15M"],
    prep:"15 min",
    cook:"0 min",
    makes:"1 cup",
    desc:"A punchy raw sauce of parsley, anchovy, capers, and olive oil.",
    dek:"Chop it by hand and let the anchovies dissolve. Minced to a near-paste on the board, they melt into a savory depth people cannot quite place; pureed smooth, the sauce loses the texture that makes it a relish instead of a dip.",
    card:"Use real anchovies and hand-chop it so it stays a textured relish.",
    ing:[
      {n:"Olive oil", q:"A grassy oil is the body that carries everything.", amt:"3/4 cup", shelf:"olive-oil"},
      {n:"Anchovies", q:"Oil-packed anchovies that dissolve into savory depth.", amt:"4 fillets", shelf:"anchovies"},
      {n:"Red wine vinegar", q:"A splash of sharp acid to brighten the herbs.", amt:"1 tbsp", shelf:"vinegar"},
      {n:"Parsley and capers", q:"A big bunch of flat-leaf parsley, capers, and a little garlic.", amt:"1 large bunch", local:true}
    ],
    steps:[
      {b:"Mince the anchovy", t:"Chop the anchovies and garlic to a near-paste on the board so they melt in rather than showing up as fish chunks."},
      {b:"Chop the herbs", t:"Mince the parsley and capers fine by hand. Keep the knife work so the sauce stays a relish, not a smooth puree."},
      {b:"Loosen with oil", t:"Combine everything in a bowl and pour in the olive oil until it is loose and spoonable, then sharpen with the vinegar."},
      {b:"Rest briefly", t:"Let it sit 15 minutes so the anchovy and garlic settle into the oil. Spoon it over grilled meat, fish, or boiled potatoes."}
    ],
    tools:["Sharp chef knife|chef knife","Mixing bowl|mixing bowl","Cutting board|wood cutting board"]
  },
  {
    slug:"spaghetti-and-meatballs",
    title:"Spaghetti and Meatballs, and where to source it",
    cuisine:"Italian",
    category:"Main",
    kw:"spaghetti, meatballs, tomato sauce, sunday gravy",
    iso:["PT30M","PT45M","PT75M"],
    prep:"30 min",
    cook:"45 min",
    makes:"6 servings",
    desc:"Tender meatballs simmered in tomato sauce over spaghetti.",
    dek:"Bind the meatballs with a panade, torn bread soaked in milk, not dry breadcrumbs. The milk-soaked bread keeps them tender through a long simmer; dry crumbs soak up moisture and turn them into rubber.",
    card:"Bind the meatballs with a milk-soaked bread panade so they stay tender.",
    ing:[
      {n:"Spaghetti", q:"A bronze-die dried pasta that grips the sauce.", amt:"1 lb", shelf:"pasta"},
      {n:"Ground meat", q:"A mix of beef and pork from a real butcher for flavor and fat.", amt:"1 1/2 lbs", shelf:"regenerative-meat"},
      {n:"Canned tomatoes", q:"Whole peeled tomatoes crushed by hand for the sauce.", amt:"2 28-oz cans", shelf:"canned-tomatoes"},
      {n:"Parmesan", q:"Real aged Parmesan grated into the meatballs and over the plate.", amt:"1 cup grated", shelf:"parmesan"},
      {n:"Bread", q:"Torn bread soaked in milk to make the panade that keeps them soft.", amt:"2 thick slices", shelf:"bread"},
      {n:"Eggs", q:"An egg to bind the meatball mix.", amt:"1 large", shelf:"eggs"}
    ],
    steps:[
      {b:"Make a panade", t:"Soak torn bread in a little milk to a paste and mix it into the meat with egg, Parmesan, garlic, and parsley. The panade is what makes them tender, not dry crumbs."},
      {b:"Brown the meatballs", t:"Roll gently, do not compact, and sear on all sides in olive oil until browned. They finish cooking in the sauce, so just build the crust now."},
      {b:"Build the sauce", t:"In the same pot soften garlic, add the hand-crushed tomatoes, and simmer. The fond from the meatballs is your flavor base."},
      {b:"Simmer and marry", t:"Nestle the meatballs into the sauce and simmer gently 30 minutes. Toss the cooked spaghetti with sauce, then plate with the meatballs and more Parmesan."}
    ],
    tools:["Heavy pot|dutch oven","Box grater|box grater","Large pasta pot|stock pot"]
  }
];

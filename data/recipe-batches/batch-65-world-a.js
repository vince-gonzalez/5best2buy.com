// batch-65-world-a.js — real world dishes (agent-drafted, culled). Chicken/protein mains across
// Chinese, Middle Eastern, Tex-Mex, French, Korean, Mexican, German, Japanese. All ingredients local:true.
module.exports = [
  {
    slug:"general-tsos-chicken",
    title:"General Tso's Chicken, and where to source it",
    cuisine:"Chinese", category:"Main",
    kw:"general tso chicken, general tso's, crispy chinese chicken, sweet spicy chicken",
    iso:["PT25M","PT20M","PT45M"], prep:"25 min", cook:"20 min", makes:"serves 4",
    desc:"Crispy dark-meat chicken in a tangy-sweet chili sauce — the American-Chinese classic — and where to source every part.",
    dek:"Double-fry the chicken and keep the sauce separate until the last second. A single fry stays greasy, and sauce added early on the heat turns the crust to mush; you want to toss it off-flame just long enough to coat.",
    card:"Dark meat, twice-fried, tossed in a glossy sweet-heat sauce with dried chilies.",
    ing:[
      {n:"Chicken thighs", q:"Boneless thighs, not breast — they stay juicy through a double fry. Cut into 1-inch chunks.", amt:"1.5 lb", local:true},
      {n:"Cornstarch", q:"The coating and the sauce thickener. It fries lighter and crisper than flour.", amt:"3/4 cup", local:true},
      {n:"Dried red chilies", q:"Whole arbol or Tianjin chilies, toasted in the oil for aroma, not searing heat.", amt:"6 to 8", local:true},
      {n:"Soy sauce", q:"Regular soy for saltiness and color. Balance it against the sugar and vinegar.", amt:"3 tbsp", local:true},
      {n:"Rice vinegar", q:"The tang that keeps the sauce from being cloying. Not the seasoned kind.", amt:"2 tbsp", local:true},
      {n:"Sugar", q:"Plain white sugar for the sweet-sticky glaze. Adjust to taste against the vinegar.", amt:"3 tbsp", local:true},
      {n:"Garlic and ginger", q:"Minced fine and fried briefly before the sauce goes in — the backbone of the flavor.", amt:"3 cloves + 1 tbsp", local:true},
      {n:"Neutral frying oil", q:"Peanut or canola with a high smoke point. Enough to shallow-fry in batches.", amt:"3 cups", local:true}
    ],
    steps:[
      {b:"Batter and rest", t:"Toss the chicken chunks in beaten egg, then coat heavily in cornstarch and let sit five minutes."},
      {b:"First fry", t:"Fry at 340F until pale and cooked through, about four minutes, then drain."},
      {b:"Second fry", t:"Raise the oil to 375F and fry again for a minute or two until deep gold and crisp."},
      {b:"Build the sauce", t:"In a clean wok, toast the chilies, add garlic and ginger, then the soy, vinegar, sugar and a splash of stock; thicken with a cornstarch slurry."},
      {b:"Toss and serve", t:"Kill the heat, add the chicken, and toss just until every piece is glossed. Serve over rice at once."}
    ],
    tools:["Wok|carbon steel wok","Spider strainer|wire spider skimmer","Thermometer|deep fry thermometer"]
  },
  {
    slug:"chicken-shawarma",
    title:"Chicken Shawarma, and where to source it",
    cuisine:"Middle Eastern", category:"Main",
    kw:"chicken shawarma, shawarma marinade, middle eastern chicken, shawarma spice",
    iso:["PT20M","PT25M","PT45M"], prep:"20 min", cook:"25 min", makes:"serves 4",
    desc:"Spiced yogurt-marinated chicken thighs roasted crisp — home shawarma without the spit — and where to source it.",
    dek:"Marinate thighs, not breast, and give it hours not minutes. The acid and yogurt tenderize while the spices bloom; then roast hot and high so the edges char like they came off the vertical rotisserie.",
    card:"Yogurt-and-spice marinated thighs, roasted with charred edges, sliced for wraps.",
    ing:[
      {n:"Chicken thighs", q:"Boneless, skinless thighs — fatty enough to survive high heat without drying.", amt:"2 lb", local:true},
      {n:"Plain yogurt", q:"Full-fat and thick. The lactic acid tenderizes and helps the char.", amt:"1/2 cup", local:true},
      {n:"Cumin", q:"Ground, and the dominant note. Toast whole seeds and grind fresh if you can.", amt:"2 tsp", local:true},
      {n:"Paprika and turmeric", q:"Paprika for color and warmth, turmeric for that yellow shawarma glow.", amt:"2 tsp + 1 tsp", local:true},
      {n:"Lemon", q:"Juice in the marinade, more squeezed over at serving. The brightness cuts the fat.", amt:"1 lemon", local:true},
      {n:"Garlic", q:"Crushed into the marinade. Generous — this is a garlic-forward dish.", amt:"4 cloves", local:true},
      {n:"Cardamom and cinnamon", q:"A pinch of each — the warm background notes that separate real shawarma from taco chicken.", amt:"1/4 tsp each", local:true},
      {n:"Olive oil", q:"Carries the fat-soluble spices and helps the exterior crisp.", amt:"3 tbsp", local:true}
    ],
    steps:[
      {b:"Mix the marinade", t:"Whisk yogurt, oil, lemon, garlic and all the spices into a thick paste."},
      {b:"Marinate long", t:"Coat the thighs and refrigerate at least two hours, ideally overnight."},
      {b:"Roast hot", t:"Lay the thighs on a rack over a sheet pan and roast at 450F until charred at the edges, about 25 minutes."},
      {b:"Rest and slice", t:"Let the meat rest five minutes, then slice thin against the grain."},
      {b:"Serve", t:"Pile into warm flatbread with garlic sauce, pickles and a squeeze of lemon."}
    ],
    tools:["Sheet pan|rimmed baking sheet","Wire rack|oven safe cooling rack","Mixing bowl|stainless mixing bowl"]
  },
  {
    slug:"chicken-fajitas",
    title:"Chicken Fajitas, and where to source it",
    cuisine:"Tex-Mex", category:"Main",
    kw:"chicken fajitas, fajita marinade, sizzling fajitas, tex mex chicken",
    iso:["PT20M","PT15M","PT35M"], prep:"20 min", cook:"15 min", makes:"serves 4",
    desc:"Marinated chicken with blistered peppers and onions, cooked screaming hot — real Tex-Mex fajitas — and where to source it.",
    dek:"Cook the chicken and the vegetables separately over the highest heat you have. Crowd them together and everything steams gray; you want a hard sear and a little char, which only happens in a bone-dry, ripping-hot pan.",
    card:"Lime-marinated chicken seared with charred peppers and onions, wrapped in warm tortillas.",
    ing:[
      {n:"Chicken thighs", q:"Thighs take high heat better than breast and stay tender. Slice into strips.", amt:"1.5 lb", local:true},
      {n:"Bell peppers", q:"A mix of colors for sweetness and looks. Cut into wide strips so they char, not collapse.", amt:"3 peppers", local:true},
      {n:"Yellow onion", q:"Sliced thick so it holds up to the sear. It should soften but keep some bite.", amt:"1 large", local:true},
      {n:"Lime", q:"Juice in the marinade and more at the table. The acid defines fajita flavor.", amt:"2 limes", local:true},
      {n:"Cumin and chili powder", q:"The Tex-Mex backbone. Bloom them in the marinade oil.", amt:"1 tsp each", local:true},
      {n:"Garlic", q:"Minced into the marinade for depth.", amt:"3 cloves", local:true},
      {n:"Flour tortillas", q:"Warmed directly over the flame until pliable and spotted.", amt:"8 tortillas", local:true},
      {n:"Neutral oil", q:"A high-smoke-point oil so the pan can get truly hot without burning.", amt:"2 tbsp", local:true}
    ],
    steps:[
      {b:"Marinate", t:"Toss the chicken strips with lime, oil, garlic and spices for 20 minutes."},
      {b:"Sear the chicken", t:"In a ripping-hot cast iron pan, sear the chicken in one layer until charred, then remove."},
      {b:"Char the vegetables", t:"Add the peppers and onions to the same pan and cook hard until blistered but still crisp."},
      {b:"Combine", t:"Return the chicken, toss for a minute, and squeeze lime over everything."},
      {b:"Serve", t:"Bring the sizzling pan to the table with warm tortillas and let people build their own."}
    ],
    tools:["Cast iron skillet|cast iron fajita pan","Tongs|kitchen tongs","Citrus juicer|hand citrus juicer"]
  },
  {
    slug:"chicken-cordon-bleu",
    title:"Chicken Cordon Bleu, and where to source it",
    cuisine:"French", category:"Main",
    kw:"chicken cordon bleu, ham and cheese chicken, breaded stuffed chicken",
    iso:["PT25M","PT30M","PT55M"], prep:"25 min", cook:"30 min", makes:"serves 4",
    desc:"Pounded chicken rolled around ham and Swiss, breaded and baked — the classic cordon bleu — and where to source it.",
    dek:"Pound the breast thin and roll it tight, sealing the seam underneath. The whole dish lives or dies on the cheese staying inside; a loose roll or a seam facing up lets it all leak out and burn onto the pan.",
    card:"Chicken breast wrapped around ham and Swiss, breaded and baked until the cheese oozes.",
    ing:[
      {n:"Chicken breasts", q:"Large breasts, pounded to a quarter-inch so they roll without splitting.", amt:"4 breasts", local:true},
      {n:"Sliced ham", q:"Thin deli ham — enough to line the chicken without adding bulk.", amt:"8 slices", local:true},
      {n:"Swiss cheese", q:"Real Swiss or Gruyere; it melts smooth and adds a nutty tang.", amt:"4 slices", local:true},
      {n:"Breadcrumbs", q:"Panko for a crackly coat. Toast them first for deeper color if baking.", amt:"1.5 cups", local:true},
      {n:"Flour", q:"The first coat that helps the egg grip. Season it well.", amt:"1/2 cup", local:true},
      {n:"Eggs", q:"Beaten, the glue between flour and crumb.", amt:"2 eggs", local:true},
      {n:"Dijon mustard", q:"A thin smear inside adds the tang that cuts the richness.", amt:"2 tbsp", local:true},
      {n:"Butter", q:"Melted over the crumbs for browning, or for a quick pan sauce.", amt:"3 tbsp", local:true}
    ],
    steps:[
      {b:"Pound and fill", t:"Pound each breast thin, smear with Dijon, and layer on ham and cheese."},
      {b:"Roll tight", t:"Roll firmly from one end, tucking the sides, and set seam-side down; chill to hold shape."},
      {b:"Bread it", t:"Dredge each roll in seasoned flour, then egg, then panko, pressing to coat."},
      {b:"Bake", t:"Set seam-down on a rack and bake at 400F until golden and 165F inside, about 30 minutes."},
      {b:"Rest and slice", t:"Rest five minutes before slicing so the cheese sets enough to hold. Serve in pinwheels."}
    ],
    tools:["Meat mallet|meat tenderizer mallet","Sheet pan|rimmed baking sheet","Wire rack|oven safe cooling rack"]
  },
  {
    slug:"chicken-alfredo",
    title:"Chicken Alfredo, and where to source it",
    cuisine:"Italian-American", category:"Main",
    kw:"chicken alfredo, fettuccine alfredo, creamy chicken pasta, alfredo sauce",
    iso:["PT15M","PT20M","PT35M"], prep:"15 min", cook:"20 min", makes:"serves 4",
    desc:"Fettuccine in a real Parmesan cream with seared chicken — American Alfredo done right — and where to source it.",
    dek:"Finish the pasta in the sauce with a ladle of starchy pasta water, and grate the Parmesan fresh. Pre-grated cheese has anti-caking powder that refuses to melt and leaves the sauce grainy instead of glossy.",
    card:"Seared chicken over fettuccine bound in a silky Parmesan-cream sauce.",
    ing:[
      {n:"Fettuccine", q:"The wide ribbon carries a cream sauce better than thin strands.", amt:"1 lb", local:true},
      {n:"Chicken breasts", q:"Seared and sliced. Pat dry first so they brown instead of steam.", amt:"1 lb", local:true},
      {n:"Heavy cream", q:"The body of the American version. Real cream, not half-and-half, so it reduces smooth.", amt:"1.5 cups", local:true},
      {n:"Parmesan", q:"Grated fresh off the block — pre-shredded won't melt clean. Parmigiano-Reggiano is worth it.", amt:"1.5 cups", local:true},
      {n:"Butter", q:"Starts the sauce and adds richness. Unsalted so you control the seasoning.", amt:"4 tbsp", local:true},
      {n:"Garlic", q:"Minced and softened in the butter — gentle, not browned.", amt:"3 cloves", local:true},
      {n:"Black pepper", q:"Fresh-cracked, generous. It's most of the seasoning here.", amt:"to taste", local:true}
    ],
    steps:[
      {b:"Cook the pasta", t:"Boil the fettuccine in well-salted water a minute shy of done; save a mug of the water."},
      {b:"Sear the chicken", t:"Season and sear the breasts until golden and cooked through, then rest and slice."},
      {b:"Build the sauce", t:"Melt butter, soften the garlic, add cream and simmer gently to thicken slightly."},
      {b:"Melt the cheese", t:"Off the heat, whisk in the Parmesan until smooth, loosening with pasta water."},
      {b:"Combine and serve", t:"Toss the pasta in the sauce until it clings, top with the chicken and lots of pepper."}
    ],
    tools:["Large pot|8 quart pasta pot","Skillet|stainless steel skillet","Box grater|stainless box grater"]
  },
  {
    slug:"beef-bulgogi",
    title:"Beef Bulgogi, and where to source it",
    cuisine:"Korean", category:"Main",
    kw:"beef bulgogi, korean bbq beef, bulgogi marinade, thin sliced beef",
    iso:["PT30M","PT10M","PT40M"], prep:"30 min", cook:"10 min", makes:"serves 4",
    desc:"Thin ribeye in a sweet-savory soy-and-pear marinade, seared fast and hot — real bulgogi — and where to source it.",
    dek:"Grate an Asian pear into the marinade and slice the beef paper-thin against the grain. The pear's enzymes tenderize the meat, and thin slices sear in seconds — cook it fast and hot so the sugars caramelize instead of stewing.",
    card:"Thin ribeye marinated in soy, pear and sesame, then seared until the edges caramelize.",
    ing:[
      {n:"Ribeye", q:"Well-marbled ribeye, sliced paper-thin against the grain; freezing 30 minutes makes it easier.", amt:"1.5 lb", local:true},
      {n:"Asian pear", q:"Grated into the marinade — its enzymes tenderize and add fruity sweetness. Kiwi works in a pinch.", amt:"1/2 pear", local:true},
      {n:"Soy sauce", q:"The salty-savory base. Regular soy, balanced against the sugar.", amt:"1/3 cup", local:true},
      {n:"Sesame oil", q:"Toasted, added for aroma near the end so it doesn't burn off.", amt:"2 tbsp", local:true},
      {n:"Brown sugar", q:"For the caramelized char. Balance it so the marinade is savory, not candy.", amt:"3 tbsp", local:true},
      {n:"Garlic and ginger", q:"Both minced fine — the aromatic core of the marinade.", amt:"4 cloves + 1 tbsp", local:true},
      {n:"Green onions", q:"Sliced, half in the marinade and half fresh on top.", amt:"4 stalks", local:true},
      {n:"Sesame seeds", q:"Toasted, scattered over at the end for nuttiness and crunch.", amt:"1 tbsp", local:true}
    ],
    steps:[
      {b:"Slice thin", t:"Partially freeze the ribeye, then slice as thin as you can against the grain."},
      {b:"Marinate", t:"Mix pear, soy, sesame oil, sugar, garlic, ginger and onions; coat the beef for 30 minutes."},
      {b:"Get the pan hot", t:"Heat a wide pan or grill pan until nearly smoking."},
      {b:"Sear fast", t:"Cook the beef in a single layer, in batches, just until the edges caramelize."},
      {b:"Finish", t:"Top with sesame seeds and fresh green onion; serve with rice and lettuce for wrapping."}
    ],
    tools:["Cast iron skillet|cast iron grill pan","Sharp knife|chefs knife","Mixing bowl|stainless mixing bowl"]
  },
  {
    slug:"korean-beef-bowl",
    title:"Korean Beef Bowl, and where to source it",
    cuisine:"Korean-American", category:"Main",
    kw:"korean beef bowl, ground beef bowl, easy korean beef, beef rice bowl",
    iso:["PT10M","PT15M","PT25M"], prep:"10 min", cook:"15 min", makes:"serves 4",
    desc:"Ground beef in a quick sweet-soy sauce over rice — the 20-minute weeknight bowl — and where to source it.",
    dek:"Brown the beef hard and drain most of the fat before the sauce goes in. Sauce added to a wet, greasy pan just simmers and dilutes; a proper fond and a drained pan let the glaze cling and gloss the meat.",
    card:"Ground beef in a sweet-savory soy-sesame glaze over rice with green onion.",
    ing:[
      {n:"Ground beef", q:"An 80/20 blend browns with flavor. Drain most of the rendered fat after.", amt:"1 lb", local:true},
      {n:"Soy sauce", q:"The savory base of the glaze. Regular soy.", amt:"1/4 cup", local:true},
      {n:"Brown sugar", q:"For the sweet-sticky glaze. Adjust to taste against the soy.", amt:"3 tbsp", local:true},
      {n:"Garlic and ginger", q:"Fresh, minced, bloomed in the pan before the sauce.", amt:"3 cloves + 1 tsp", local:true},
      {n:"Sesame oil", q:"Toasted, stirred in at the end for aroma.", amt:"1 tbsp", local:true},
      {n:"Green onions", q:"Sliced, most on top for freshness and color.", amt:"3 stalks", local:true},
      {n:"Cooked rice", q:"Short or medium grain, hot, as the base of the bowl.", amt:"4 cups", local:true},
      {n:"Sesame seeds", q:"Toasted, scattered on top for crunch.", amt:"1 tbsp", local:true}
    ],
    steps:[
      {b:"Brown the beef", t:"Cook the ground beef in a hot pan until deeply browned, breaking it up; drain the fat."},
      {b:"Add aromatics", t:"Stir in the garlic and ginger and cook until fragrant, about a minute."},
      {b:"Glaze", t:"Pour in the soy and sugar and simmer until the sauce thickens and coats the meat."},
      {b:"Finish", t:"Off the heat, add sesame oil and half the green onions."},
      {b:"Assemble", t:"Spoon over hot rice and top with the rest of the onions and sesame seeds."}
    ],
    tools:["Skillet|nonstick skillet","Wooden spoon|wooden cooking spoon","Rice cooker|electric rice cooker"]
  },
  {
    slug:"al-pastor",
    title:"Tacos al Pastor, and where to source it",
    cuisine:"Mexican", category:"Main",
    kw:"al pastor, tacos al pastor, pork al pastor, adobo pork tacos",
    iso:["PT30M","PT30M","PT60M"], prep:"30 min", cook:"30 min", makes:"serves 4",
    desc:"Chile-and-pineapple marinated pork seared crisp for tacos — home al pastor — and where to source it.",
    dek:"The marinade must be built on rehydrated dried chiles, not chili powder, with real achiote for color. Then roast or sear the pork hard at the end to get the caramelized edges that stand in for the trompo's char.",
    card:"Adobo-marinated pork with charred edges, topped with pineapple, onion and cilantro.",
    ing:[
      {n:"Pork shoulder", q:"Sliced thin, or thighs — fatty enough to stay juicy under high heat.", amt:"2 lb", local:true},
      {n:"Guajillo chiles", q:"Dried, stemmed and seeded, then rehydrated — the base of a real adobo, not powder.", amt:"4 chiles", local:true},
      {n:"Achiote paste", q:"Annatto paste gives the signature brick-red color and earthy flavor.", amt:"2 tbsp", local:true},
      {n:"Pineapple", q:"Fresh; its enzymes tenderize the pork and it chars sweet as a garnish.", amt:"1/2 pineapple", local:true},
      {n:"White vinegar", q:"The acid that balances the marinade and helps it penetrate.", amt:"1/4 cup", local:true},
      {n:"Garlic and cumin", q:"Garlic for depth, cumin for warmth — both go in the marinade.", amt:"4 cloves + 1 tsp", local:true},
      {n:"White onion", q:"Diced raw for the taco topping; its bite balances the rich pork.", amt:"1 onion", local:true},
      {n:"Corn tortillas", q:"Small street-taco size, warmed on a dry comal until spotted.", amt:"12 tortillas", local:true}
    ],
    steps:[
      {b:"Make the adobo", t:"Toast and soak the guajillos, then blend with achiote, vinegar, garlic, cumin and a little pineapple."},
      {b:"Marinate", t:"Coat the thin pork in the adobo and refrigerate at least an hour."},
      {b:"Sear hard", t:"Cook the pork on a screaming-hot griddle or under the broiler until the edges char."},
      {b:"Char the pineapple", t:"Grill pineapple chunks alongside until caramelized, then dice."},
      {b:"Build tacos", t:"Chop the pork, pile onto warm tortillas, and top with pineapple, onion and cilantro."}
    ],
    tools:["Comal|cast iron comal griddle","Blender|countertop blender","Tongs|kitchen tongs"]
  },
  {
    slug:"pork-schnitzel",
    title:"Pork Schnitzel, and where to source it",
    cuisine:"German", category:"Main",
    kw:"pork schnitzel, schnitzel, breaded pork cutlet, german schnitzel",
    iso:["PT20M","PT15M","PT35M"], prep:"20 min", cook:"15 min", makes:"serves 4",
    desc:"Thin pounded pork cutlets fried light and crisp — real schnitzel — and where to source it.",
    dek:"Pound the cutlets to a scant quarter-inch and swirl the pan so the oil washes over the top as it fries. That rolling wave of hot fat puffs the breading away from the meat into the crinkled, blistered crust that defines a true schnitzel.",
    card:"Pounded pork cutlets in a puffed, golden breadcrumb crust with lemon.",
    ing:[
      {n:"Pork loin cutlets", q:"Boneless loin, pounded thin. Even thickness means even, fast cooking.", amt:"4 cutlets", local:true},
      {n:"Breadcrumbs", q:"Fine, dry crumbs — traditional, not panko — for the classic fine crust.", amt:"1.5 cups", local:true},
      {n:"Flour", q:"The first dry coat that helps the egg cling. Season it.", amt:"3/4 cup", local:true},
      {n:"Eggs", q:"Beaten with a splash of water so they coat evenly.", amt:"2 eggs", local:true},
      {n:"Lemon", q:"Wedges to squeeze over at the table — non-negotiable with schnitzel.", amt:"1 lemon", local:true},
      {n:"Neutral oil", q:"Enough to shallow-fry so the cutlet almost floats; that's how the crust puffs.", amt:"1.5 cups", local:true},
      {n:"Butter", q:"A knob added to the oil at the end for browning and flavor.", amt:"2 tbsp", local:true}
    ],
    steps:[
      {b:"Pound thin", t:"Pound the cutlets between plastic to about a quarter-inch, even all over."},
      {b:"Set up the breading", t:"Season the pork, then dredge in flour, egg, and fine breadcrumbs, pressing lightly."},
      {b:"Fry in deep oil", t:"Fry one cutlet at a time in plenty of hot oil, swirling the pan so oil washes over the top."},
      {b:"Drain", t:"Cook until deep gold and puffed, about two minutes a side, then drain on paper."},
      {b:"Serve", t:"Serve at once with lemon wedges and a side of potatoes or cucumber salad."}
    ],
    tools:["Meat mallet|meat tenderizer mallet","Wide skillet|large frying pan","Shallow dishes|breading dish set"]
  },
  {
    slug:"pork-tenderloin",
    title:"Roast Pork Tenderloin, and where to source it",
    cuisine:"American", category:"Main",
    kw:"pork tenderloin, roast pork tenderloin, seared pork, pork loin recipe",
    iso:["PT10M","PT25M","PT35M"], prep:"10 min", cook:"25 min", makes:"serves 4",
    desc:"Pork tenderloin seared then roasted to a juicy medium — sear-and-roast done right — and where to source it.",
    dek:"Pull it at 140F and let it rest — pork tenderloin is lean and unforgiving. Cooked to the old 160F it's dry and gray; a hard sear then a short roast to 140, rested to 145, keeps it rosy and juicy.",
    card:"A seared, roasted tenderloin sliced juicy and pink, rested before cutting.",
    ing:[
      {n:"Pork tenderloin", q:"The narrow, lean cut — not loin roast. Trim the silverskin so it doesn't curl.", amt:"1.5 lb", local:true},
      {n:"Kosher salt", q:"Salt well ahead if you can; even a dry brine improves juiciness.", amt:"2 tsp", local:true},
      {n:"Black pepper", q:"Coarse-cracked, part of the crust.", amt:"1 tsp", local:true},
      {n:"Garlic", q:"Smashed cloves in the roasting pan perfume the meat.", amt:"4 cloves", local:true},
      {n:"Fresh thyme or rosemary", q:"A few sprigs roasted alongside for aroma.", amt:"4 sprigs", local:true},
      {n:"Dijon mustard", q:"A thin coat before searing adds tang and helps a crust form.", amt:"1 tbsp", local:true},
      {n:"Olive oil", q:"High enough smoke point for a hard sear; a bit of butter can finish it.", amt:"2 tbsp", local:true}
    ],
    steps:[
      {b:"Season and dry", t:"Trim the silverskin, pat dry, and season all over with salt and pepper."},
      {b:"Sear hard", t:"Sear in a hot oven-safe skillet on all sides until deeply browned."},
      {b:"Add aromatics", t:"Add garlic and herbs to the pan and brush the pork with Dijon."},
      {b:"Roast to temp", t:"Transfer to a 425F oven and roast until the center hits 140F, about 12 minutes."},
      {b:"Rest and slice", t:"Rest ten minutes so it climbs to 145F and holds its juices, then slice thick."}
    ],
    tools:["Oven-safe skillet|cast iron skillet","Instant thermometer|instant read thermometer","Tongs|kitchen tongs"]
  },
  {
    slug:"fish-tacos",
    title:"Baja Fish Tacos, and where to source it",
    cuisine:"Mexican", category:"Main",
    kw:"fish tacos, baja fish tacos, fried fish tacos, crispy fish tacos",
    iso:["PT20M","PT15M","PT35M"], prep:"20 min", cook:"15 min", makes:"serves 4",
    desc:"Beer-battered white fish with crema and cabbage on corn tortillas — Baja fish tacos — and where to source it.",
    dek:"Use ice-cold beer batter and fry at a steady 375F. A warm batter or a cool oil soaks up grease and goes limp; cold batter hitting hot oil flashes into a shatter-crisp shell that holds up under the crema.",
    card:"Beer-battered white fish, fried crisp, with lime crema and shredded cabbage.",
    ing:[
      {n:"White fish", q:"Cod, mahi or pollock — firm, mild fillets that flake but hold together in the fryer.", amt:"1.5 lb", local:true},
      {n:"Flour", q:"The batter base; a little cornstarch mixed in makes it crisper.", amt:"1 cup", local:true},
      {n:"Cold beer", q:"A light lager, ice-cold — the carbonation and chill make the batter light.", amt:"1 cup", local:true},
      {n:"Cabbage", q:"Shredded thin for crunch and freshness under the hot fish.", amt:"2 cups", local:true},
      {n:"Mexican crema", q:"Thinned with lime for a tangy drizzle; sour cream works if thinned.", amt:"1/2 cup", local:true},
      {n:"Lime", q:"For the crema and to squeeze over — the acid ties it all together.", amt:"2 limes", local:true},
      {n:"Corn tortillas", q:"Warmed on a dry comal until pliable; doubled up so they don't tear.", amt:"12 tortillas", local:true},
      {n:"Neutral oil", q:"High-smoke-point oil deep enough to float the fish at 375F.", amt:"4 cups", local:true}
    ],
    steps:[
      {b:"Make the crema", t:"Stir lime juice and zest into the crema and season; chill."},
      {b:"Mix cold batter", t:"Whisk flour with cold beer just until combined, leaving it lumpy and cold."},
      {b:"Heat the oil", t:"Bring the oil to a steady 375F."},
      {b:"Fry crisp", t:"Dip fish strips in batter and fry until golden and shatter-crisp, then drain."},
      {b:"Build tacos", t:"Layer fish on warm doubled tortillas with cabbage, crema and lime."}
    ],
    tools:["Dutch oven|enameled dutch oven","Thermometer|deep fry thermometer","Spider strainer|wire spider skimmer"]
  },
  {
    slug:"shrimp-fried-rice",
    title:"Shrimp Fried Rice, and where to source it",
    cuisine:"Chinese", category:"Main",
    kw:"shrimp fried rice, fried rice, day old rice, wok fried rice",
    iso:["PT15M","PT10M","PT25M"], prep:"15 min", cook:"10 min", makes:"serves 4",
    desc:"Wok-fried day-old rice with shrimp, egg and scallion — proper fried rice — and where to source it.",
    dek:"Use cold day-old rice and a wok you've let get truly ripping hot. Fresh rice is too wet and clumps to mush; chilled grains have dried out and fry into separate, toasty kernels with that smoky wok breath.",
    card:"Cold day-old rice fried hard with shrimp, egg, peas and scallion.",
    ing:[
      {n:"Day-old rice", q:"Cold, refrigerated overnight so the grains dry and separate. Fresh rice steams and clumps.", amt:"4 cups", local:true},
      {n:"Shrimp", q:"Peeled and deveined, patted dry so they sear rather than steam. Medium size.", amt:"3/4 lb", local:true},
      {n:"Eggs", q:"Scrambled soft and set aside, or pushed to the side of the wok.", amt:"3 eggs", local:true},
      {n:"Green onions", q:"Whites for the base, greens tossed in at the end.", amt:"4 stalks", local:true},
      {n:"Frozen peas and carrots", q:"A classic mix, added straight from frozen near the end.", amt:"1 cup", local:true},
      {n:"Soy sauce", q:"Light soy for seasoning; add along the hot wok edge so it sizzles.", amt:"2 tbsp", local:true},
      {n:"Sesame oil", q:"Toasted, a small finishing drizzle for aroma.", amt:"1 tsp", local:true},
      {n:"Neutral oil", q:"A high-smoke-point oil so the wok can run screaming hot.", amt:"3 tbsp", local:true}
    ],
    steps:[
      {b:"Prep everything", t:"Have rice broken up, shrimp dry, eggs beaten and aromatics chopped before you start."},
      {b:"Cook the shrimp", t:"Sear the shrimp in a hot wok just until pink, then remove."},
      {b:"Scramble the egg", t:"Add oil, scramble the eggs softly, and push them aside."},
      {b:"Fry the rice", t:"Add the rice and press it against the hot wok so the grains toast and separate."},
      {b:"Combine", t:"Return shrimp, add peas and soy along the edge, toss, finish with green onion and sesame oil."}
    ],
    tools:["Wok|carbon steel wok","Wok spatula|metal wok spatula","Rice cooker|electric rice cooker"]
  },
  {
    slug:"garlic-butter-shrimp",
    title:"Garlic Butter Shrimp, and where to source it",
    cuisine:"American", category:"Main",
    kw:"garlic butter shrimp, shrimp scampi, buttery garlic shrimp, quick shrimp",
    iso:["PT10M","PT8M","PT18M"], prep:"10 min", cook:"8 min", makes:"serves 4",
    desc:"Shrimp seared in garlic butter with lemon and wine — a fast scampi-style pan — and where to source it.",
    dek:"Shrimp cook in about ninety seconds a side — get them out the instant they curl into a C, not an O. Overcooked they turn to rubber, and the garlic should go in late so it perfumes the butter without scorching bitter.",
    card:"Shrimp seared fast in garlic-lemon butter with a splash of wine.",
    ing:[
      {n:"Shrimp", q:"Large, peeled and deveined, patted very dry so they sear instead of poach.", amt:"1.5 lb", local:true},
      {n:"Butter", q:"Unsalted, the body of the sauce. Finish with a cold knob for gloss.", amt:"5 tbsp", local:true},
      {n:"Garlic", q:"Lots of it, sliced or minced, added late so it softens without burning.", amt:"6 cloves", local:true},
      {n:"Lemon", q:"Juice to brighten the butter; zest for extra lift.", amt:"1 lemon", local:true},
      {n:"White wine", q:"A dry splash to deglaze and add acidity; stock works too.", amt:"1/3 cup", local:true},
      {n:"Red pepper flakes", q:"A pinch for gentle heat that plays off the garlic.", amt:"1/2 tsp", local:true},
      {n:"Parsley", q:"Fresh, chopped, stirred in at the end for color and freshness.", amt:"2 tbsp", local:true}
    ],
    steps:[
      {b:"Dry and season", t:"Pat the shrimp bone-dry and season with salt and pepper."},
      {b:"Sear fast", t:"Sear in butter over high heat, about a minute a side, until just curled; remove."},
      {b:"Bloom the garlic", t:"Lower the heat, add garlic and pepper flakes, and cook 30 seconds until fragrant."},
      {b:"Make the sauce", t:"Deglaze with wine and lemon, simmer briefly, then swirl in cold butter."},
      {b:"Finish", t:"Return the shrimp, toss to coat, stir in parsley, and serve over pasta or bread."}
    ],
    tools:["Skillet|stainless steel skillet","Tongs|kitchen tongs","Citrus juicer|hand citrus juicer"]
  },
  {
    slug:"salmon-teriyaki",
    title:"Salmon Teriyaki, and where to source it",
    cuisine:"Japanese", category:"Main",
    kw:"salmon teriyaki, teriyaki salmon, glazed salmon, teriyaki sauce",
    iso:["PT10M","PT15M","PT25M"], prep:"10 min", cook:"15 min", makes:"serves 4",
    desc:"Seared salmon glazed in a real soy-mirin-sake teriyaki — not bottled — and where to source it.",
    dek:"Make the teriyaki from soy, mirin, sake and sugar and reduce it to a syrup before glazing. Bottled sauce is corn syrup and thickener; a real reduction lacquers the fish and lets the alcohol cook off into a glossy, savory-sweet coat.",
    card:"Crisp-skinned salmon lacquered in a reduced soy-mirin teriyaki glaze.",
    ing:[
      {n:"Salmon fillets", q:"Skin-on, even-thickness fillets so they cook evenly and the skin crisps.", amt:"4 fillets", local:true},
      {n:"Soy sauce", q:"The savory base of a real teriyaki. Regular soy.", amt:"1/4 cup", local:true},
      {n:"Mirin", q:"Sweet rice wine — the signature teriyaki gloss and sweetness.", amt:"1/4 cup", local:true},
      {n:"Sake", q:"Adds depth and cooks off; dry sherry is a passable stand-in.", amt:"2 tbsp", local:true},
      {n:"Sugar", q:"Just enough to help the glaze reduce to a syrup and lacquer.", amt:"2 tbsp", local:true},
      {n:"Ginger", q:"A little grated into the sauce for warmth and lift.", amt:"1 tsp", local:true},
      {n:"Green onion and sesame", q:"Sliced onion and toasted seeds to finish.", amt:"2 stalks + 1 tsp", local:true},
      {n:"Neutral oil", q:"A high-smoke oil for a hard sear on the skin.", amt:"1 tbsp", local:true}
    ],
    steps:[
      {b:"Reduce the glaze", t:"Simmer soy, mirin, sake, sugar and ginger until syrupy, then set aside."},
      {b:"Sear skin-down", t:"Pat the salmon dry and sear skin-side down in a hot pan until the skin is crisp."},
      {b:"Flip and cook", t:"Turn and cook briefly until nearly done, keeping the center just translucent."},
      {b:"Glaze", t:"Spoon the reduced teriyaki over the fish and let it bubble and lacquer the top."},
      {b:"Serve", t:"Plate with the extra glaze, green onion and sesame, over rice."}
    ],
    tools:["Nonstick skillet|nonstick fry pan","Fish spatula|slotted fish spatula","Small saucepan|stainless saucepan"]
  },
  {
    slug:"shrimp-alfredo",
    title:"Shrimp Alfredo, and where to source it",
    cuisine:"Italian-American", category:"Main",
    kw:"shrimp alfredo, creamy shrimp pasta, fettuccine shrimp alfredo, alfredo sauce",
    iso:["PT15M","PT18M","PT33M"], prep:"15 min", cook:"18 min", makes:"serves 4",
    desc:"Fettuccine in Parmesan cream with garlic-seared shrimp — shrimp Alfredo done right — and where to source it.",
    dek:"Sear the shrimp separately and add them back at the very end. They cook in under two minutes, and simmering them in the sauce while it thickens turns them to rubber — pull them the moment they curl and reunite off the heat.",
    card:"Garlic-seared shrimp folded into fettuccine with a silky Parmesan cream.",
    ing:[
      {n:"Fettuccine", q:"The wide ribbon holds the cream sauce best.", amt:"1 lb", local:true},
      {n:"Shrimp", q:"Large, peeled and deveined, patted dry so they sear; add them back last.", amt:"1 lb", local:true},
      {n:"Heavy cream", q:"Real cream so the sauce reduces smooth, not half-and-half.", amt:"1.5 cups", local:true},
      {n:"Parmesan", q:"Grated fresh off the block; pre-shredded won't melt clean.", amt:"1.5 cups", local:true},
      {n:"Butter", q:"Starts the sauce and sears the shrimp. Unsalted.", amt:"4 tbsp", local:true},
      {n:"Garlic", q:"Minced, softened in the butter for both shrimp and sauce.", amt:"4 cloves", local:true},
      {n:"Black pepper", q:"Fresh-cracked and generous — most of the seasoning.", amt:"to taste", local:true}
    ],
    steps:[
      {b:"Cook the pasta", t:"Boil the fettuccine in salted water a minute shy of done; save a mug of the water."},
      {b:"Sear the shrimp", t:"Sear the shrimp in garlic butter about a minute a side until just curled, then remove."},
      {b:"Build the sauce", t:"In the same pan, add cream and simmer gently to thicken slightly."},
      {b:"Melt the cheese", t:"Off the heat, whisk in the Parmesan until smooth, loosening with pasta water."},
      {b:"Combine and serve", t:"Toss in the pasta, fold the shrimp back in off the heat, and finish with pepper."}
    ],
    tools:["Large pot|8 quart pasta pot","Skillet|stainless steel skillet","Box grater|stainless box grater"]
  }
];

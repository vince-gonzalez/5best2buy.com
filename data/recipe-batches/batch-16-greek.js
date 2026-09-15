module.exports = [
  {
    slug:"moussaka",
    title:"Moussaka, and where to source it",
    cuisine:"Greek",
    category:"Main",
    kw:"moussaka, greek eggplant casserole, lamb bechamel bake, greek casserole",
    iso:["PT45M","PT1H","PT1H45M"],
    prep:"45 min", cook:"1 hr", makes:"8 servings",
    desc:"Layered Greek casserole of roasted eggplant, spiced lamb, and a thick bechamel top.",
    dek:"Moussaka is only as good as its meat sauce and its bechamel, so both need real seasoning and a real reduction. Salt and roast the eggplant until it collapses, and it will never weep water into the bake. Let the sauce cook down until it holds a spoon before you start layering.",
    card:"Roasted eggplant, cinnamon-spiced lamb, and a set bechamel top, layered and baked.",
    ing:[
      { n:"Ground lamb", q:"The core of the meat layer; grass-fed lamb has the fat and flavor to carry the cinnamon and tomato.", amt:"2 lb", shelf:"regenerative-meat" },
      { n:"Canned crushed tomatoes", q:"Builds the body of the meat sauce; low-acid canned tomatoes reduce to a sweet base.", amt:"1 can (28 oz)", shelf:"canned-tomatoes" },
      { n:"Whole milk", q:"The base of the bechamel; whole milk makes a sauce that sets firm instead of runny.", amt:"4 cups", shelf:"milk" },
      { n:"Butter", q:"Makes the roux for the bechamel; real butter gives it body and browns the top.", amt:"6 tbsp", shelf:"butter" },
      { n:"Parmesan", q:"Grated into the bechamel and dusted on top; aged cheese sets a golden crust.", amt:"1 cup grated", shelf:"parmesan" },
      { n:"Ground cinnamon and allspice", q:"The signature warm spices of the meat layer; buy whole and grind for the cleanest flavor.", amt:"1 tsp each", shelf:"spices" },
      { n:"Eggplant", q:"The backbone layers; firm, glossy eggplant salts and roasts without turning bitter, brushed with olive oil.", amt:"3 large", local:true },
      { n:"Yellow onion", q:"Sweated into the meat sauce for its base.", amt:"1 large", local:true }
    ],
    steps:[
      { b:"Salt the eggplant", t:"Slice eggplant into 1/2-inch rounds, salt both sides, and rest 30 minutes; pat dry to pull out water and bitterness." },
      { b:"Roast", t:"Brush eggplant with olive oil and roast at 425F for 25 minutes until soft and browned." },
      { b:"Build the meat sauce", t:"Brown the lamb, add onion, cinnamon, and allspice, then the tomatoes; simmer 30 minutes until thick enough to hold a line on the pan." },
      { b:"Make the bechamel", t:"Cook butter and flour 2 minutes, whisk in warm milk, and cook until it coats a spoon; off heat stir in half the parmesan and 2 beaten eggs." },
      { b:"Layer and bake", t:"Layer eggplant, meat sauce, more eggplant, then bechamel; top with parmesan and bake at 350F for 45 minutes until set and golden. Rest 30 minutes before cutting." }
    ],
    tools:["Deep baking dish|9x13 ceramic baking dish","Box grater|stainless box grater","Whisk|balloon whisk","Sheet pans|half sheet pan set","Wooden spoon|wooden cooking spoons"]
  },
  {
    slug:"souvlaki",
    title:"Souvlaki, and where to source it",
    cuisine:"Greek",
    category:"Main",
    kw:"souvlaki, greek pork skewers, grilled pork souvlaki, greek kebabs",
    iso:["PT20M","PT12M","PT32M"],
    prep:"20 min", cook:"12 min", makes:"4 servings",
    desc:"Grilled Greek skewers of marinated pork with lemon, oregano, and olive oil.",
    dek:"Souvlaki lives on its marinade and its char, so start with real pork shoulder and a high fire. Pat the meat dry before it hits the grill so it sears instead of steaming. Marinate at least an hour, but pull it before the lemon has time to turn the meat mealy.",
    card:"Cubes of pork shoulder marinated in lemon and oregano, grilled hard on skewers.",
    ing:[
      { n:"Pork shoulder", q:"The right cut for skewers; its fat keeps the cubes juicy over a hot fire.", amt:"2 lb", shelf:"regenerative-meat" },
      { n:"Olive oil", q:"Carries the marinade and helps the char; a fruity oil is worth it here.", amt:"1/3 cup", shelf:"olive-oil" },
      { n:"Lemon", q:"Acid to brighten and tenderize; fresh juice only, bottled tastes flat.", amt:"2, juiced", shelf:"citrus" },
      { n:"Dried oregano", q:"The defining herb of souvlaki; Greek oregano on the branch is the most aromatic.", amt:"2 tbsp", shelf:"spices" },
      { n:"Pita bread", q:"For wrapping the skewers; warm it on the grill for the last minute.", amt:"4 rounds", shelf:"bread" },
      { n:"Garlic", q:"Grated into the marinade for sharpness.", amt:"4 cloves", local:true },
      { n:"Red onion", q:"Grilled alongside or served raw in the wrap.", amt:"1", local:true }
    ],
    steps:[
      { b:"Cut", t:"Cut pork into 1-inch cubes so they cook through before the outside burns." },
      { b:"Marinate", t:"Toss with olive oil, lemon, garlic, oregano, salt, and pepper; rest 1 to 4 hours in the fridge." },
      { b:"Skewer and dry", t:"Thread onto skewers and pat the surface dry so the meat sears rather than steams." },
      { b:"Grill", t:"Grill over high heat 10 to 12 minutes, turning every few minutes, until charred and 145F inside." },
      { b:"Rest and wrap", t:"Rest 5 minutes, warm the pita on the grill, and wrap with onion and tzatziki." }
    ],
    tools:["Metal skewers|flat metal grill skewers","Grill|charcoal grill","Instant thermometer|instant read thermometer","Tongs|long grill tongs","Mixing bowl|stainless mixing bowls"]
  },
  {
    slug:"spanakopita",
    title:"Spanakopita, and where to source it",
    cuisine:"Greek",
    category:"Main",
    kw:"spanakopita, greek spinach pie, phyllo spinach feta pie, greek pie",
    iso:["PT40M","PT45M","PT1H25M"],
    prep:"40 min", cook:"45 min", makes:"8 servings",
    desc:"Greek spinach and feta pie baked between crisp layers of buttered phyllo.",
    dek:"Spanakopita rewards good feta and a filling that is not wet; too much moisture and the bottom phyllo turns soggy. Wring the cooked spinach bone-dry in a towel before it meets the cheese. Brush every phyllo sheet with butter and you get the shatter you are after.",
    card:"Dry-squeezed spinach and feta baked between crisp buttered phyllo sheets.",
    ing:[
      { n:"Feta", q:"The salt and tang of the filling; buy a real brined block, not the pre-crumbled dust.", amt:"12 oz", shelf:"cheese" },
      { n:"Butter", q:"Brushed between phyllo layers for crispness; melted butter is what makes it shatter.", amt:"1 cup", shelf:"butter" },
      { n:"Olive oil", q:"Sweats the aromatics and enriches the filling.", amt:"1/4 cup", shelf:"olive-oil" },
      { n:"Eggs", q:"Bind the filling so it slices clean instead of crumbling.", amt:"3", shelf:"eggs" },
      { n:"Spinach", q:"The bulk of the filling; fresh spinach cooked and wrung dry, or thawed and squeezed frozen.", amt:"2 lb", local:true },
      { n:"Phyllo dough", q:"The crisp shell; keep it covered with a damp towel so it does not dry and crack.", amt:"1 lb", local:true },
      { n:"Fresh dill", q:"The herb that makes it taste Greek; chop it fresh right before mixing.", amt:"1/2 cup", local:true },
      { n:"Scallions", q:"Milder than onion, sweated into the filling.", amt:"1 bunch", local:true }
    ],
    steps:[
      { b:"Cook the spinach", t:"Wilt the spinach, cool it, then wring it dry in a clean towel until no water drips." },
      { b:"Mix the filling", t:"Combine dry spinach, crumbled feta, dill, scallions, and beaten eggs; taste before salting since feta is salty." },
      { b:"Layer the base", t:"Brush a phyllo sheet with butter, lay it in the pan, and repeat for half the stack, letting edges overhang." },
      { b:"Fill and top", t:"Spread the filling, fold the overhang, then layer the rest of the buttered phyllo on top and tuck the edges." },
      { b:"Score and bake", t:"Score the top into pieces and bake at 375F for 45 minutes until deep golden and crisp. Rest 15 minutes before cutting." }
    ],
    tools:["Baking dish|9x13 metal baking pan","Pastry brush|silicone pastry brush","Clean towel|flour sack towels","Box grater|stainless box grater","Sharp knife|chef knife"]
  },
  {
    slug:"gyros",
    title:"Gyros, and where to source it",
    cuisine:"Greek",
    category:"Main",
    kw:"gyros, greek gyro, pork gyro wrap, homemade gyro meat",
    iso:["PT25M","PT35M","PT1H"],
    prep:"25 min", cook:"35 min", makes:"6 servings",
    desc:"Greek wrap of seasoned roast pork or lamb, tomato, onion, and tzatziki in warm pita.",
    dek:"Homemade gyros rest on a well-spiced meat loaf that you roast and then crisp, so the grind matters and so does the second sear. Slice the roasted meat thin and crisp the slices in a hot pan to build the edges. Warm the pita too, or the whole wrap falls apart cold.",
    card:"Spiced ground lamb roasted into a loaf, sliced thin, crisped, and wrapped in warm pita.",
    ing:[
      { n:"Ground lamb", q:"The base of the gyro loaf; a lamb and beef blend gives the classic flavor and bind.", amt:"2 lb", shelf:"regenerative-meat" },
      { n:"Pita bread", q:"The wrap; thick Greek-style pita holds the fillings without tearing.", amt:"6 rounds", shelf:"bread" },
      { n:"Whole milk yogurt", q:"The base of the tzatziki that goes on top; strained whole yogurt is thick and tangy.", amt:"2 cups", shelf:"milk" },
      { n:"Ground cumin and coriander", q:"The warm spice backbone of the meat; toast and grind whole seeds for depth.", amt:"1 tbsp each", shelf:"spices" },
      { n:"Olive oil", q:"For crisping the sliced meat and dressing the wrap.", amt:"3 tbsp", shelf:"olive-oil" },
      { n:"Yellow onion", q:"Pureed into the meat for moisture, plus sliced raw in the wrap.", amt:"1 large", local:true },
      { n:"Garlic", q:"Grated into both the meat and the tzatziki.", amt:"6 cloves", local:true },
      { n:"Tomato", q:"Sliced fresh into the wrap for acidity.", amt:"2", local:true },
      { n:"Cucumber", q:"Grated and squeezed into the tzatziki.", amt:"1", local:true }
    ],
    steps:[
      { b:"Make the meat paste", t:"Process the lamb with pureed onion, garlic, and spices until tacky so it holds together like a loaf." },
      { b:"Roast", t:"Press into a loaf pan and bake at 325F for 35 minutes to 165F, then cool 10 minutes so it slices clean." },
      { b:"Slice and crisp", t:"Slice thin and crisp the slices in a hot pan with olive oil until the edges brown." },
      { b:"Make tzatziki", t:"Mix yogurt with grated squeezed cucumber, garlic, lemon, and dill; salt to taste." },
      { b:"Assemble", t:"Warm the pita, then pile meat, tomato, onion, and tzatziki and roll tight." }
    ],
    tools:["Food processor|food processor","Loaf pan|metal loaf pan","Cast iron skillet|cast iron skillet","Instant thermometer|instant read thermometer","Box grater|stainless box grater"]
  },
  {
    slug:"avgolemono",
    title:"Avgolemono Soup, and where to source it",
    cuisine:"Greek",
    category:"Soup",
    kw:"avgolemono, greek egg lemon soup, greek chicken lemon rice soup, avgolemono soup",
    iso:["PT15M","PT30M","PT45M"],
    prep:"15 min", cook:"30 min", makes:"6 servings",
    desc:"Greek chicken soup thickened and brightened with a whisked egg and lemon liaison.",
    dek:"Avgolemono is broth, rice, and a raw egg-lemon liaison, so the broth has to taste like real chicken and the tempering must not scramble. Temper the eggs slowly with hot broth off the boil, then keep the soup from boiling again. Use fresh lemon juice; bottled misses the whole point.",
    card:"Chicken broth and rice thickened with a whisked egg-and-lemon liaison, silky and bright.",
    ing:[
      { n:"Bone-in chicken", q:"Simmered to build the broth and shredded back in; bone-in gives body a boneless breast never will.", amt:"2 lb", shelf:"regenerative-meat" },
      { n:"White rice", q:"Cooked into the broth for body; medium-grain releases starch that helps the texture.", amt:"3/4 cup", shelf:"rice" },
      { n:"Lemon", q:"The soul of the soup; fresh juice for the liaison, plus more to finish.", amt:"3, juiced", shelf:"citrus" },
      { n:"Eggs", q:"Whisked with lemon to thicken the soup into silk; fresh eggs make a stable liaison.", amt:"3", shelf:"eggs" },
      { n:"Olive oil", q:"A finishing drizzle for richness.", amt:"2 tbsp", shelf:"olive-oil" },
      { n:"Yellow onion", q:"Simmered whole in the broth for sweetness, then discarded.", amt:"1", local:true },
      { n:"Fresh dill", q:"Stirred in at the end for a green herbal lift.", amt:"1/4 cup", local:true },
      { n:"Carrot", q:"Adds sweetness to the broth as it simmers.", amt:"2", local:true }
    ],
    steps:[
      { b:"Build the broth", t:"Simmer chicken with onion and carrot in water 30 minutes until cooked; strain and shred the meat." },
      { b:"Cook the rice", t:"Return the broth to a simmer and cook the rice in it until tender, about 15 minutes." },
      { b:"Whisk the liaison", t:"Whisk eggs and lemon juice together until frothy and pale." },
      { b:"Temper", t:"Off the boil, ladle hot broth slowly into the eggs while whisking, then pour it all back into the pot." },
      { b:"Finish gently", t:"Warm on low without boiling until it thickens, then stir in chicken and dill; boiling now curdles it." }
    ],
    tools:["Soup pot|stainless stockpot","Fine strainer|fine mesh strainer","Whisk|balloon whisk","Ladle|stainless soup ladle","Citrus juicer|handheld citrus juicer"]
  },
  {
    slug:"pastitsio",
    title:"Pastitsio, and where to source it",
    cuisine:"Greek",
    category:"Main",
    kw:"pastitsio, greek baked pasta, greek lasagna, pasta bechamel bake",
    iso:["PT40M","PT1H","PT1H40M"],
    prep:"40 min", cook:"1 hr", makes:"8 servings",
    desc:"Greek baked pasta with cinnamon-spiced meat sauce and a thick set bechamel.",
    dek:"Pastitsio is three layers that each have to stand on their own: firm tubes, a spiced meat sauce reduced thick, and a bechamel stiff enough to slice. Bind the bottom pasta with egg and cheese so it holds a clean square. Reach for long thick tubes rather than elbows so the layers stay distinct.",
    card:"Long pasta tubes, cinnamon-spiced meat sauce, and a firm bechamel top, baked and sliced.",
    ing:[
      { n:"Ground beef", q:"The meat sauce base; grass-fed beef has the flavor to carry the cinnamon and tomato.", amt:"2 lb", shelf:"regenerative-meat" },
      { n:"Bucatini or ziti", q:"The structural pasta layers; long thick tubes keep the bottom firm.", amt:"1 lb", shelf:"pasta" },
      { n:"Canned crushed tomatoes", q:"Builds the meat sauce; reduce it down until it holds a line.", amt:"1 can (28 oz)", shelf:"canned-tomatoes" },
      { n:"Whole milk", q:"The base of the bechamel; whole milk sets firm for clean slices.", amt:"4 cups", shelf:"milk" },
      { n:"Parmesan", q:"Grated into the bechamel, the pasta, and the top for structure and crust.", amt:"1.5 cups grated", shelf:"parmesan" },
      { n:"Ground cinnamon and nutmeg", q:"Cinnamon in the meat, nutmeg in the bechamel; the pair defines pastitsio.", amt:"1 tsp each", shelf:"spices" },
      { n:"Yellow onion", q:"Sweated into the meat sauce base.", amt:"1 large", local:true }
    ],
    steps:[
      { b:"Cook the pasta", t:"Boil the tubes 2 minutes short of done, drain, and toss with a little butter, parmesan, and 1 beaten egg." },
      { b:"Make the meat sauce", t:"Brown beef with onion and cinnamon, add tomatoes, and simmer 30 minutes until thick." },
      { b:"Make the bechamel", t:"Cook 6 tbsp butter with flour, whisk in warm milk to a thick sauce, then off heat stir in nutmeg, parmesan, and 3 eggs." },
      { b:"Layer", t:"Spread half the pasta, all the meat sauce, the rest of the pasta, then the bechamel on top." },
      { b:"Bake", t:"Bake at 350F for 50 to 60 minutes until the top is golden and set; rest 30 minutes so it slices into squares." }
    ],
    tools:["Deep baking dish|9x13 ceramic baking dish","Large pot|stainless pasta pot","Whisk|balloon whisk","Box grater|stainless box grater","Wooden spoon|wooden cooking spoons"]
  },
  {
    slug:"dolmades",
    title:"Dolmades, and where to source it",
    cuisine:"Greek",
    category:"Appetizer",
    kw:"dolmades, stuffed grape leaves, greek dolmades, rice stuffed vine leaves",
    iso:["PT50M","PT45M","PT1H35M"],
    prep:"50 min", cook:"45 min", makes:"40 pieces",
    desc:"Grape leaves rolled around a lemony herbed rice filling and simmered until tender.",
    dek:"Dolmades come down to a bright rice filling and leaves rolled tight enough not to burst. Par-cook the rice only halfway so it swells to fill the leaf without splitting it. Line the pot with torn leaves and weight the rolls so they hold their shape as they simmer.",
    card:"Grape leaves rolled tight around lemony herbed rice and simmered until tender.",
    ing:[
      { n:"White rice", q:"The heart of the filling; medium-grain swells and stays distinct.", amt:"1.5 cups", shelf:"rice" },
      { n:"Olive oil", q:"Carries the filling and the braising liquid; use a generous fruity oil.", amt:"3/4 cup", shelf:"olive-oil" },
      { n:"Lemon", q:"The acid that defines dolmades; juice in the filling and over the pot.", amt:"3, juiced", shelf:"citrus" },
      { n:"Pine nuts or almonds", q:"Toasted into the filling for crunch and richness.", amt:"1/3 cup", shelf:"almonds" },
      { n:"Grape leaves", q:"The wrapper; brined jarred leaves need a rinse to cut the salt before rolling.", amt:"1 jar (16 oz)", local:true },
      { n:"Fresh dill and mint", q:"The herbs that make the filling taste alive; chop just before mixing.", amt:"1/2 cup each", local:true },
      { n:"Yellow onion", q:"Finely diced and sweated into the rice.", amt:"1 large", local:true },
      { n:"Scallions", q:"Softened with the onion for a gentle bite.", amt:"1 bunch", local:true }
    ],
    steps:[
      { b:"Start the filling", t:"Sweat onion and scallion in olive oil, add rice, and toast 2 minutes, then stir in herbs, lemon, and pine nuts." },
      { b:"Par-cook", t:"Add 1 cup water and cook until the rice is half done and the water is gone; it will finish inside the leaves." },
      { b:"Roll", t:"Lay a leaf vein-side up, add a spoon of filling, fold the sides, and roll into a tight cigar." },
      { b:"Pack the pot", t:"Line the pot with torn leaves, pack the rolls seam-down in tight layers, and set a plate on top to weight them." },
      { b:"Simmer", t:"Add water, lemon, and olive oil to just cover, cover, and simmer 45 minutes until the rice is tender; cool before serving." }
    ],
    tools:["Wide pot|wide braising pot","Small plate|ceramic weight plate","Mixing bowl|stainless mixing bowls","Citrus juicer|handheld citrus juicer","Sharp knife|chef knife"]
  },
  {
    slug:"tzatziki",
    title:"Tzatziki, and where to source it",
    cuisine:"Greek",
    category:"Sauce",
    kw:"tzatziki, greek yogurt cucumber sauce, tzatziki dip, greek cucumber dip",
    iso:["PT15M","PT0M","PT15M"],
    prep:"15 min", cook:"0 min", makes:"2 cups",
    desc:"Greek strained-yogurt sauce with grated cucumber, garlic, dill, and olive oil.",
    dek:"Tzatziki is four honest ingredients, so quality and water control decide it. Salt and wring the grated cucumber dry, or it thins the yogurt to soup within an hour. Start with thick strained yogurt and let the sauce rest so the raw garlic mellows.",
    card:"Thick strained yogurt with wrung-dry cucumber, garlic, and dill.",
    ing:[
      { n:"Whole milk yogurt", q:"The base; thick strained Greek yogurt gives the body a thin yogurt never will.", amt:"2 cups", shelf:"milk" },
      { n:"Olive oil", q:"Stirred in and drizzled on top for richness; a grassy oil shows here.", amt:"3 tbsp", shelf:"olive-oil" },
      { n:"Lemon", q:"A squeeze of acid to lift the yogurt; fresh juice only.", amt:"1, juiced", shelf:"citrus" },
      { n:"Cucumber", q:"The fresh backbone; grate and wring it dry so it does not water down the sauce.", amt:"1 large", local:true },
      { n:"Garlic", q:"Grated fine and raw for bite; let it rest so it mellows.", amt:"3 cloves", local:true },
      { n:"Fresh dill", q:"The classic herb; chop fresh right before mixing.", amt:"3 tbsp", local:true }
    ],
    steps:[
      { b:"Prep the cucumber", t:"Grate the cucumber, salt it, and let it sit 10 minutes, then wring it dry in a towel." },
      { b:"Mix", t:"Stir the yogurt with garlic, lemon, olive oil, and dill until smooth." },
      { b:"Fold in cucumber", t:"Fold in the wrung-dry cucumber and taste for salt and lemon." },
      { b:"Rest", t:"Chill at least 30 minutes so the garlic mellows and the flavors marry before serving." }
    ],
    tools:["Box grater|stainless box grater","Clean towel|flour sack towels","Mixing bowl|stainless mixing bowls","Citrus juicer|handheld citrus juicer","Rubber spatula|silicone spatula"]
  },
  {
    slug:"shawarma",
    title:"Chicken Shawarma, and where to source it",
    cuisine:"Middle Eastern",
    category:"Main",
    kw:"chicken shawarma, middle eastern chicken, shawarma spice, roasted shawarma",
    iso:["PT20M","PT35M","PT55M"],
    prep:"20 min", cook:"35 min", makes:"6 servings",
    desc:"Middle Eastern spiced chicken thighs marinated in yogurt and roasted, then crisped.",
    dek:"Shawarma is a spice-and-acid marinade on dark meat, roasted and then broiled for the edges. Use thighs rather than breast, and broil the roasted meat at the end so the top chars like a spit. The yogurt marinade keeps it juicy and helps the spices cling.",
    card:"Yogurt-and-spice marinated chicken thighs roasted, then broiled for charred edges.",
    ing:[
      { n:"Boneless chicken thighs", q:"The right cut; thighs stay juicy through a hard roast where breast dries out.", amt:"2.5 lb", shelf:"regenerative-meat" },
      { n:"Whole milk yogurt", q:"The marinade base; it tenderizes the meat and glues the spices on.", amt:"1 cup", shelf:"milk" },
      { n:"Cumin, coriander, and paprika", q:"The core shawarma spices; toast and grind whole seeds for the deepest flavor.", amt:"1 tbsp each", shelf:"spices" },
      { n:"Lemon", q:"Acid in the marinade and squeezed over at the end.", amt:"2, juiced", shelf:"citrus" },
      { n:"Olive oil", q:"Carries the marinade and helps the char.", amt:"1/4 cup", shelf:"olive-oil" },
      { n:"Pita bread", q:"For wrapping; warm it just before serving.", amt:"6 rounds", shelf:"bread" },
      { n:"Garlic", q:"Grated into the marinade for punch.", amt:"6 cloves", local:true },
      { n:"Red onion", q:"Roasted alongside the chicken and served raw in the wrap.", amt:"2", local:true }
    ],
    steps:[
      { b:"Marinate", t:"Toss thighs with yogurt, spices, garlic, lemon, and olive oil; rest at least 2 hours or overnight." },
      { b:"Roast", t:"Spread on a sheet pan with sliced onion and roast at 425F for 25 minutes." },
      { b:"Broil", t:"Broil 5 to 8 minutes until the edges char and the meat hits 175F." },
      { b:"Rest and slice", t:"Rest 5 minutes, then slice thin against the grain." },
      { b:"Wrap", t:"Warm the pita, pile chicken and onion, add tahini or garlic sauce, and roll." }
    ],
    tools:["Sheet pan|half sheet pan","Mixing bowl|stainless mixing bowls","Sharp knife|chef knife","Instant thermometer|instant read thermometer","Tongs|kitchen tongs"]
  },
  {
    slug:"kofta-kebab",
    title:"Kofta Kebabs, and where to source it",
    cuisine:"Middle Eastern",
    category:"Main",
    kw:"kofta kebab, middle eastern ground meat skewers, kefta, grilled kofta",
    iso:["PT25M","PT12M","PT37M"],
    prep:"25 min", cook:"12 min", makes:"4 servings",
    desc:"Middle Eastern skewers of spiced ground lamb and beef grilled over a hot fire.",
    dek:"Kofta is seasoned ground meat that has to bind and hold to the skewer over fire. Knead the meat until it turns tacky and paste-like, then chill it so it grips the skewer instead of dropping off. Grate the onion and drain it first so its moisture does not loosen the mix.",
    card:"Spiced ground lamb and beef kneaded tacky, molded on skewers, and grilled hard.",
    ing:[
      { n:"Ground lamb and beef", q:"The base; a fatty lamb-beef blend holds together and stays juicy on the grill.", amt:"2 lb", shelf:"regenerative-meat" },
      { n:"Cumin, coriander, and cinnamon", q:"The warm spice mix of kofta; toast and grind whole for the best aroma.", amt:"1 tbsp total", shelf:"spices" },
      { n:"Olive oil", q:"For oiling the skewers and brushing the meat so it does not stick.", amt:"2 tbsp", shelf:"olive-oil" },
      { n:"Pita bread", q:"For serving; warm on the grill and wrap the kofta.", amt:"4 rounds", shelf:"bread" },
      { n:"Yellow onion", q:"Grated and drained into the meat for moisture and sweetness.", amt:"1", local:true },
      { n:"Fresh parsley", q:"Finely chopped through the meat for freshness.", amt:"1/2 cup", local:true },
      { n:"Garlic", q:"Grated into the mix for depth.", amt:"4 cloves", local:true }
    ],
    steps:[
      { b:"Season", t:"Mix the meat with grated drained onion, garlic, parsley, spices, and salt." },
      { b:"Knead", t:"Knead 3 to 4 minutes until the mixture turns tacky and paste-like so it binds to the skewer." },
      { b:"Chill", t:"Chill 30 minutes so the fat firms and the meat grips the skewer." },
      { b:"Shape", t:"Press the meat around oiled skewers into long ovals, pinching the ends closed." },
      { b:"Grill", t:"Grill over high heat 10 to 12 minutes, turning to char all sides, until 160F inside." }
    ],
    tools:["Flat skewers|wide flat metal skewers","Grill|charcoal grill","Box grater|stainless box grater","Mixing bowl|stainless mixing bowls","Instant thermometer|instant read thermometer"]
  },
  {
    slug:"greek-lemon-chicken",
    title:"Greek Lemon Chicken, and where to source it",
    cuisine:"Greek",
    category:"Main",
    kw:"greek lemon chicken, kotopoulo lemonato, roast lemon chicken potatoes, greek chicken",
    iso:["PT20M","PT1H10M","PT1H30M"],
    prep:"20 min", cook:"1 hr 10 min", makes:"6 servings",
    desc:"Greek roast chicken and potatoes in a lemon, garlic, and oregano pan sauce.",
    dek:"This is one pan of chicken and potatoes soaked in lemon, oregano, and olive oil until the edges crisp and the potatoes drink up the juices. Roast it uncovered so the liquid reduces to a glaze and the skin browns. Be generous with fresh lemon; it carries the whole dish.",
    card:"Chicken and potatoes roasted in a lemon-garlic-oregano pan sauce until crisp.",
    ing:[
      { n:"Bone-in chicken", q:"Bone-in, skin-on pieces stay juicy and crisp where boneless would dry out.", amt:"4 lb", shelf:"regenerative-meat" },
      { n:"Lemon", q:"The defining flavor; juice for the sauce and wedges roasted in the pan.", amt:"3", shelf:"citrus" },
      { n:"Olive oil", q:"Coats the chicken and potatoes for browning; a good oil carries the whole dish.", amt:"1/2 cup", shelf:"olive-oil" },
      { n:"Dried oregano", q:"The signature Greek herb; Greek oregano on the branch is most fragrant.", amt:"2 tbsp", shelf:"spices" },
      { n:"Potatoes", q:"Cut into wedges to soak up the lemon pan juices; a starchy potato crisps at the edges.", amt:"2 lb", local:true },
      { n:"Garlic", q:"Whole and smashed cloves that sweeten as they roast.", amt:"8 cloves", local:true }
    ],
    steps:[
      { b:"Toss", t:"Toss chicken and potato wedges with olive oil, lemon juice, oregano, garlic, salt, and pepper." },
      { b:"Arrange", t:"Spread skin-side up in a single layer in a roasting pan with lemon wedges tucked around." },
      { b:"Roast", t:"Roast uncovered at 400F for 55 to 70 minutes, basting once, until the chicken is 175F and the skin is browned." },
      { b:"Crisp the potatoes", t:"If the potatoes need more color, pull the chicken and roast them another 10 minutes in the juices." },
      { b:"Rest", t:"Rest 10 minutes and spoon the reduced pan juices over everything." }
    ],
    tools:["Roasting pan|metal roasting pan","Instant thermometer|instant read thermometer","Citrus juicer|handheld citrus juicer","Basting spoon|stainless basting spoon","Chef knife|chef knife"]
  },
  {
    slug:"fattoush",
    title:"Fattoush, and where to source it",
    cuisine:"Middle Eastern",
    category:"Side",
    kw:"fattoush, middle eastern bread salad, sumac salad, lebanese fattoush",
    iso:["PT25M","PT10M","PT35M"],
    prep:"25 min", cook:"10 min", makes:"6 servings",
    desc:"Middle Eastern chopped salad with crisped pita, sumac, and a lemon dressing.",
    dek:"Fattoush is a bright chopped salad, and its signature is crisp fried pita and tart sumac. Toast the pita until fully crisp and fold it in at the last second so it stays crunchy rather than going soggy. Sumac and lemon carry the dressing, so give both a heavy hand.",
    card:"Chopped vegetables and crisp pita tossed in a sumac-and-lemon dressing.",
    ing:[
      { n:"Pita bread", q:"Torn and toasted crisp for the crunch that defines fattoush; day-old pita crisps best.", amt:"2 rounds", shelf:"bread" },
      { n:"Olive oil", q:"Crisps the pita and builds the dressing; a good oil is the base of both.", amt:"1/3 cup", shelf:"olive-oil" },
      { n:"Lemon", q:"The acid of the dressing; fresh juice only, and plenty of it.", amt:"2, juiced", shelf:"citrus" },
      { n:"Sumac", q:"The tart, dark-red spice that makes fattoush taste like fattoush; sprinkle in the dressing and on top.", amt:"2 tbsp", shelf:"spices" },
      { n:"Romaine and cucumber", q:"The crisp base of the salad; chop everything the same size.", amt:"1 head, 2 cucumbers", local:true },
      { n:"Tomato", q:"Ripe tomatoes for juice and sweetness; seed them so the salad stays crisp.", amt:"3", local:true },
      { n:"Fresh mint and parsley", q:"The herbs that lift the whole bowl; tear them in whole.", amt:"1/2 cup each", local:true },
      { n:"Radish", q:"Sliced thin for peppery crunch and color.", amt:"6", local:true }
    ],
    steps:[
      { b:"Crisp the pita", t:"Tear the pita, toss with olive oil, and toast at 375F for 8 to 10 minutes until fully crisp; cool." },
      { b:"Make the dressing", t:"Whisk lemon juice, olive oil, sumac, garlic, and salt into a tart dressing." },
      { b:"Chop", t:"Chop the romaine, cucumber, tomato, and radish the same size and pile in a wide bowl with the herbs." },
      { b:"Dress", t:"Toss the vegetables with the dressing just before serving so they stay crisp." },
      { b:"Add pita last", t:"Fold in the crisp pita at the last second and dust with more sumac so it does not go soggy." }
    ],
    tools:["Large salad bowl|wide wooden salad bowl","Sheet pan|half sheet pan","Whisk|small whisk","Chef knife|chef knife","Salad tongs|wooden salad servers"]
  }
];

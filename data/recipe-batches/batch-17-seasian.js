module.exports = [
  {
    slug:"tom-yum",
    title:"Tom Yum Soup, and where to source it",
    cuisine:"Thai",
    category:"Soup",
    kw:"tom yum, tom yum goong, thai hot and sour soup, lemongrass shrimp soup",
    iso:["PT15M","PT20M","PT35M"],
    prep:"15 min", cook:"20 min", makes:"4 servings",
    desc:"A hot-and-sour Thai shrimp soup built on lemongrass, galangal, and lime.",
    dek:"Tom yum lives or dies on the broth, so the aromatics have to be bruised and simmered, not boiled to death. Add the lime juice and fish sauce off the heat at the very end — boiling lime juice turns it flat and bitter.",
    card:"Hot-sour Thai shrimp soup that runs on fresh lemongrass, galangal, and last-second lime.",
    ing:[
      { n:"Shrimp", q:"Head-on shrimp give the broth its depth; save the shells to simmer for stock.", amt:"1 lb", shelf:"regenerative-meat" },
      { n:"Fish sauce", q:"The salt backbone of the whole bowl; a clean funky one beats supermarket brands.", amt:"3 tbsp", shelf:"fish-sauce" },
      { n:"Thai chili paste (nam prik pao)", q:"Roasted chili paste adds color, smoke, and low sweetness.", amt:"2 tbsp", shelf:"chili-crisp" },
      { n:"Lemongrass", q:"Bruise and cut on the bias so the oils release into the broth.", amt:"3 stalks", local:true },
      { n:"Galangal", q:"Sharper and more piney than ginger; do not substitute regular ginger.", amt:"6 slices", local:true },
      { n:"Lime", q:"Juice goes in off the heat to keep the sourness bright.", amt:"3 tbsp juice", shelf:"citrus" },
      { n:"Fresh mushrooms", q:"Straw or oyster mushrooms soak up the broth without going mushy.", amt:"2 cups", local:true }
    ],
    steps:[
      { b:"Build the broth", t:"Simmer 6 cups water or shrimp stock with lemongrass, galangal, and torn kaffir lime leaves for 10 minutes until fragrant." },
      { b:"Season", t:"Stir in fish sauce and chili paste, then add mushrooms and simmer 3 minutes." },
      { b:"Cook the shrimp", t:"Add shrimp and cook just until pink, about 2 minutes; do not overcook or they turn rubbery." },
      { b:"Finish sour", t:"Kill the heat, then stir in lime juice and taste; it should hit sour, salty, then hot in that order." }
    ],
    tools:["Soup pot|3 quart soup pot","Fine strainer|fine mesh strainer","Ladle|kitchen ladle","Citrus juicer|handheld citrus juicer","Chef knife|8 inch chef knife"]
  },
  {
    slug:"massaman-curry",
    title:"Massaman Curry, and where to source it",
    cuisine:"Thai",
    category:"Main",
    kw:"massaman curry, thai beef curry, gaeng massaman, peanut potato curry",
    iso:["PT20M","PT90M","PT110M"],
    prep:"20 min", cook:"1 hr 30 min", makes:"4 servings",
    desc:"A slow-braised Thai beef curry with coconut, potatoes, peanuts, and warm spices.",
    dek:"Massaman is the mild, spice-forward Thai curry, so the meat needs a real braise — an hour and a half minimum until it pulls apart. Fry the curry paste in the thick coconut cream until the oil splits and the surface goes glossy before any liquid goes in.",
    card:"Slow-braised Thai beef curry sweet with coconut, potatoes, and roasted peanuts.",
    ing:[
      { n:"Beef chuck", q:"A collagen-rich cut that turns silky over a long braise; stew meat works too.", amt:"2 lb", shelf:"regenerative-meat" },
      { n:"Massaman curry paste", q:"Carries cardamom, cinnamon, and clove; a good jarred paste saves an hour of pounding.", amt:"4 tbsp", local:true },
      { n:"Fish sauce", q:"Balances the sweetness so the curry does not read as dessert.", amt:"2 tbsp", shelf:"fish-sauce" },
      { n:"Roasted peanuts", q:"Whole peanuts go in whole for texture and a toasty finish.", amt:"1/2 cup", shelf:"nut-butter" },
      { n:"Tamarind", q:"The sour note that keeps the coconut and sugar in balance.", amt:"2 tbsp", local:true },
      { n:"Coconut milk", q:"Use full-fat and do not shake the can so the cream separates for frying.", amt:"2 cans", local:true },
      { n:"Potatoes", q:"Waxy potatoes hold their shape through the long simmer.", amt:"1 lb", shelf:"potatoes" }
    ],
    steps:[
      { b:"Crack the cream", t:"Simmer the thick coconut cream in a wide pot over medium until the oil separates, about 5 minutes." },
      { b:"Fry the paste", t:"Add curry paste and fry 3 to 4 minutes until it darkens and smells toasted, not raw." },
      { b:"Braise", t:"Add beef, remaining coconut milk, fish sauce, palm sugar, and tamarind; simmer covered 75 to 90 minutes until fork-tender." },
      { b:"Finish", t:"Add potatoes and peanuts in the last 25 minutes so the potatoes cook through but hold." }
    ],
    tools:["Dutch oven|enameled dutch oven","Wooden spoon|wooden cooking spoon","Chef knife|8 inch chef knife","Ladle|kitchen ladle","Fine strainer|fine mesh strainer"]
  },
  {
    slug:"thai-red-curry",
    title:"Thai Red Curry, and where to source it",
    cuisine:"Thai",
    category:"Main",
    kw:"thai red curry, gaeng phed, coconut chicken curry, red curry paste",
    iso:["PT15M","PT25M","PT40M"],
    prep:"15 min", cook:"25 min", makes:"4 servings",
    desc:"A fast coconut curry with red curry paste, chicken, and Thai basil.",
    dek:"A weeknight red curry is really a paste-frying exercise: get the paste sizzling in split coconut cream and everything after is easy. Do not dump all the coconut milk in at once — the frying step is where the flavor is made.",
    card:"Fast coconut chicken curry that hinges on frying the red paste until it splits.",
    ing:[
      { n:"Chicken thighs", q:"Thighs stay juicy in the simmer where breast goes dry.", amt:"1.5 lb", shelf:"regenerative-meat" },
      { n:"Red curry paste", q:"Dried red chiles and lemongrass in one jar; heat level varies, so start with less.", amt:"3 tbsp", local:true },
      { n:"Fish sauce", q:"The salt that makes a coconut curry taste finished.", amt:"2 tbsp", shelf:"fish-sauce" },
      { n:"Coconut milk", q:"Full-fat; scoop the thick top layer out first for frying the paste.", amt:"2 cans", local:true },
      { n:"Thai basil", q:"Stir in at the end; it wilts fast and brings an anise note regular basil lacks.", amt:"1 cup", local:true },
      { n:"Lime", q:"A squeeze at the end lifts the whole pot.", amt:"1", shelf:"citrus" }
    ],
    steps:[
      { b:"Split the cream", t:"Simmer the thick coconut cream over medium-high until the fat separates, 3 to 4 minutes." },
      { b:"Fry the paste", t:"Add red curry paste and fry 2 minutes until glossy and fragrant." },
      { b:"Simmer", t:"Add chicken, the rest of the coconut milk, and fish sauce; simmer 12 to 15 minutes until chicken is cooked through." },
      { b:"Finish", t:"Off the heat, stir in Thai basil and a squeeze of lime; taste for salt." }
    ],
    tools:["Wok|carbon steel wok","Wooden spoon|wooden cooking spoon","Chef knife|8 inch chef knife","Ladle|kitchen ladle","Citrus juicer|handheld citrus juicer"]
  },
  {
    slug:"drunken-noodles",
    title:"Drunken Noodles, and where to source it",
    cuisine:"Thai",
    category:"Main",
    kw:"drunken noodles, pad kee mao, thai wide noodle stir fry, spicy basil noodles",
    iso:["PT15M","PT10M","PT25M"],
    prep:"15 min", cook:"10 min", makes:"2 servings",
    desc:"A fiery Thai stir-fry of wide rice noodles, holy basil, chiles, and garlic.",
    dek:"Pad kee mao is a high-heat, fast-moving stir-fry, so everything is prepped before the wok gets hot. The wok has to be smoking to get the char (wok hei) that separates this from soggy noodles.",
    card:"Fiery wide-noodle stir-fry that needs a screaming-hot wok and everything prepped first.",
    ing:[
      { n:"Wide rice noodles", q:"Fresh sen yai if you can find them; soak dried ones just until pliable, not soft.", amt:"8 oz", shelf:"rice-noodles" },
      { n:"Chicken or beef", q:"Thin slices cook in seconds against the hot wok.", amt:"1/2 lb", shelf:"regenerative-meat" },
      { n:"Soy sauce", q:"A mix of light and dark soy gives color and salt.", amt:"2 tbsp", shelf:"soy-sauce" },
      { n:"Fish sauce", q:"The savory anchor behind the soy.", amt:"1 tbsp", shelf:"fish-sauce" },
      { n:"Thai chiles", q:"Fresh bird's-eye chiles bring the heat this dish is named for.", amt:"4", local:true },
      { n:"Holy basil", q:"Holy basil (or Thai basil) added last for its peppery finish.", amt:"1 cup", local:true }
    ],
    steps:[
      { b:"Prep everything", t:"Slice meat, chop garlic and chiles, and soak noodles; have all sauces measured before you start." },
      { b:"Heat the wok", t:"Get the wok ripping hot until it smokes, then add oil and swirl." },
      { b:"Sear", t:"Stir-fry garlic, chiles, and meat 1 to 2 minutes until the meat is just cooked." },
      { b:"Toss noodles", t:"Add noodles and sauces, toss hard for 2 minutes to get char, then fold in basil off the heat." }
    ],
    tools:["Wok|carbon steel wok","Wok spatula|metal wok spatula","Chef knife|8 inch chef knife","Colander|kitchen colander","Small bowls|prep bowls set"]
  },
  {
    slug:"larb",
    title:"Larb, and where to source it",
    cuisine:"Thai",
    category:"Appetizer",
    kw:"larb, laab, thai minced meat salad, isan larb gai",
    iso:["PT15M","PT10M","PT25M"],
    prep:"15 min", cook:"10 min", makes:"4 servings",
    desc:"A bright, herby Thai minced-meat salad seasoned with lime, fish sauce, and toasted rice.",
    dek:"Larb is a salad in the Thai sense — the dressing is lime and fish sauce, no oil. The one non-negotiable is toasted rice powder (khao khua): raw rice dry-toasted and ground, which gives the whole dish its nutty crunch.",
    card:"Herby Thai minced-meat salad dressed with lime, fish sauce, and toasted rice powder.",
    ing:[
      { n:"Ground chicken or pork", q:"Cook it in its own liquid, not oil, so the meat stays loose and moist.", amt:"1 lb", shelf:"regenerative-meat" },
      { n:"Fish sauce", q:"The salt and funk that carries the dressing.", amt:"3 tbsp", shelf:"fish-sauce" },
      { n:"Toasted rice", q:"Dry-toast raw sticky rice until deep gold, then grind coarse; this is the signature.", amt:"2 tbsp ground", shelf:"rice" },
      { n:"Dried chile flakes", q:"Thai roasted chile flakes (prik pon) bring the heat and color.", amt:"1 tbsp", shelf:"dried-chiles" },
      { n:"Lime", q:"Fresh juice is the acid; bottled tastes flat here.", amt:"3 tbsp juice", shelf:"citrus" },
      { n:"Fresh herbs", q:"Mint, cilantro, and sliced shallot make up the bulk of the dish.", amt:"1 cup", local:true }
    ],
    steps:[
      { b:"Toast the rice", t:"Dry-toast raw sticky rice in a pan over medium until deep gold and fragrant, then grind to a coarse powder." },
      { b:"Cook the meat", t:"Cook the ground meat with a splash of water over medium heat, breaking it fine, until just done." },
      { b:"Dress", t:"Off the heat, add fish sauce, lime juice, chile flakes, and toasted rice powder." },
      { b:"Fold herbs", t:"Stir in mint, cilantro, and shallot right before serving so they stay fresh." }
    ],
    tools:["Skillet|nonstick skillet","Spice grinder|electric spice grinder","Citrus juicer|handheld citrus juicer","Chef knife|8 inch chef knife","Mixing bowl|stainless mixing bowl"]
  },
  {
    slug:"banh-mi",
    title:"Banh Mi, and where to source it",
    cuisine:"Vietnamese",
    category:"Main",
    kw:"banh mi, vietnamese sandwich, pork banh mi, pickled daikon carrot",
    iso:["PT30M","PT10M","PT40M"],
    prep:"30 min", cook:"10 min", makes:"4 sandwiches",
    desc:"A Vietnamese baguette sandwich layered with pork, pickled vegetables, and herbs.",
    dek:"A banh mi is an assembly job where the bread matters as much as the filling — you want a thin, shatteringly crisp baguette, not a chewy deli roll. The pickled daikon and carrot need at least 30 minutes in the brine to go from raw to tangy.",
    card:"Vietnamese baguette sandwich balancing rich pork against sharp quick pickles and herbs.",
    ing:[
      { n:"Pork", q:"Grilled pork shoulder or pate; the fat carries the sandwich.", amt:"1 lb", shelf:"regenerative-meat" },
      { n:"Baguette", q:"A light, thin-crusted baguette that crackles; a dense loaf ruins the balance.", amt:"4 rolls", shelf:"bread" },
      { n:"Pickled daikon and carrot", q:"Quick pickles cut the richness; brine them at least 30 minutes ahead.", amt:"1 cup", shelf:"pickles" },
      { n:"Fish sauce", q:"Goes in the pork marinade for savory depth.", amt:"2 tbsp", shelf:"fish-sauce" },
      { n:"Mayonnaise", q:"A thin swipe on both cut sides; some cooks whisk in a little egg yolk.", amt:"4 tbsp", local:true },
      { n:"Cilantro and cucumber", q:"Fresh cilantro, cucumber spears, and sliced chile finish it.", amt:"1 bunch", local:true }
    ],
    steps:[
      { b:"Quick-pickle", t:"Toss shredded daikon and carrot with vinegar, sugar, and salt; rest at least 30 minutes." },
      { b:"Cook the pork", t:"Marinate pork in fish sauce, garlic, and sugar, then grill or sear until caramelized." },
      { b:"Crisp the bread", t:"Warm the baguette in a hot oven 3 to 4 minutes until the crust snaps." },
      { b:"Build", t:"Spread mayo, layer pork, pickles, cucumber, chile, and cilantro; press and cut on the bias." }
    ],
    tools:["Grill pan|cast iron grill pan","Bread knife|serrated bread knife","Mixing bowl|stainless mixing bowl","Tongs|kitchen tongs","Chef knife|8 inch chef knife"]
  },
  {
    slug:"bun-cha",
    title:"Bun Cha, and where to source it",
    cuisine:"Vietnamese",
    category:"Main",
    kw:"bun cha, hanoi grilled pork, vietnamese pork noodles, nuoc cham",
    iso:["PT30M","PT15M","PT45M"],
    prep:"30 min", cook:"15 min", makes:"4 servings",
    desc:"Hanoi-style grilled pork patties served with rice noodles, herbs, and a dipping broth.",
    dek:"Bun cha is a deconstructed bowl — grilled pork sits in a warm sweet-sour dipping sauce (nuoc cham) that you dunk noodles and herbs into. The pork should be charred hard over high heat; the smoke is half the flavor.",
    card:"Hanoi grilled pork with rice noodles and a warm sweet-sour dipping broth to dunk.",
    ing:[
      { n:"Ground and sliced pork", q:"A mix of patties and sliced belly gives two textures; fat is essential for the char.", amt:"1.5 lb", shelf:"regenerative-meat" },
      { n:"Rice vermicelli", q:"Thin round rice noodles; rinse under cold water after cooking so they do not clump.", amt:"12 oz", shelf:"rice-noodles" },
      { n:"Fish sauce", q:"The base of the nuoc cham dipping sauce.", amt:"4 tbsp", shelf:"fish-sauce" },
      { n:"Lime", q:"Fresh lime is the acid in the dipping sauce.", amt:"2", shelf:"citrus" },
      { n:"Herbs and lettuce", q:"A big pile of mint, cilantro, perilla, and lettuce goes alongside.", amt:"2 cups", local:true },
      { n:"Garlic and chile", q:"Minced fine into the dipping sauce for heat and bite.", amt:"3 cloves", local:true }
    ],
    steps:[
      { b:"Marinate pork", t:"Mix pork with fish sauce, sugar, shallot, and pepper; rest 20 minutes." },
      { b:"Make nuoc cham", t:"Whisk warm water, sugar, fish sauce, lime juice, garlic, and chile until the sugar dissolves." },
      { b:"Grill", t:"Char the patties and sliced pork over high heat until edges blacken, about 3 minutes per side." },
      { b:"Serve", t:"Drop the hot pork into the dipping sauce; serve with noodles and herbs to assemble by hand." }
    ],
    tools:["Grill|charcoal grill","Grill basket|hinged grill basket","Colander|kitchen colander","Whisk|balloon whisk","Chef knife|8 inch chef knife"]
  },
  {
    slug:"nasi-goreng",
    title:"Nasi Goreng, and where to source it",
    cuisine:"Indonesian",
    category:"Main",
    kw:"nasi goreng, indonesian fried rice, kecap manis fried rice, sambal fried rice",
    iso:["PT15M","PT10M","PT25M"],
    prep:"15 min", cook:"10 min", makes:"2 servings",
    desc:"Indonesian fried rice deeply seasoned with sweet soy and chili paste, topped with a fried egg.",
    dek:"Nasi goreng needs day-old rice — fresh rice steams and clumps in the wok instead of frying up separate. Kecap manis, the thick sweet soy, is what turns it mahogany and sets it apart from every other fried rice.",
    card:"Indonesian fried rice gone mahogany with sweet soy and sambal, crowned by a fried egg.",
    ing:[
      { n:"Day-old rice", q:"Cold, dry rice fries into separate grains; fresh rice turns to mush.", amt:"4 cups", shelf:"rice" },
      { n:"Kecap manis", q:"Thick sweet Indonesian soy; it is the defining flavor, not regular soy.", amt:"3 tbsp", shelf:"soy-sauce" },
      { n:"Sambal", q:"Indonesian chili paste for heat and depth; sambal oelek works.", amt:"2 tbsp", shelf:"chili-crisp" },
      { n:"Chicken or shrimp", q:"Diced small so it cooks fast in the wok.", amt:"1/2 lb", shelf:"regenerative-meat" },
      { n:"Eggs", q:"One fried egg per plate, yolk runny, to fold through the rice.", amt:"2", shelf:"eggs" },
      { n:"Shallot and garlic", q:"Ground into a paste with the sambal for the aromatic base.", amt:"3 shallots", local:true }
    ],
    steps:[
      { b:"Build the base", t:"Stir-fry the shallot-garlic-sambal paste in oil over high heat until fragrant, about 1 minute." },
      { b:"Add protein", t:"Add chicken or shrimp and cook until nearly done." },
      { b:"Fry the rice", t:"Add cold rice and kecap manis; toss hard for 3 to 4 minutes until each grain is coated and slightly crisp." },
      { b:"Top", t:"Serve with a runny fried egg on top and cucumber slices on the side." }
    ],
    tools:["Wok|carbon steel wok","Wok spatula|metal wok spatula","Mortar and pestle|granite mortar and pestle","Nonstick pan|small nonstick pan","Chef knife|8 inch chef knife"]
  },
  {
    slug:"chicken-satay",
    title:"Chicken Satay, and where to source it",
    cuisine:"Indonesian",
    category:"Appetizer",
    kw:"chicken satay, sate ayam, grilled chicken skewers, peanut sauce",
    iso:["PT30M","PT15M","PT45M"],
    prep:"30 min", cook:"15 min", makes:"4 servings",
    desc:"Turmeric-marinated grilled chicken skewers served with a rich peanut sauce.",
    dek:"Satay is about the marinade soaking in and the char on the grill, so give the chicken at least an hour in the turmeric and lemongrass. The peanut sauce should be thick enough to coat a spoon — thin it with coconut milk, not water.",
    card:"Turmeric-marinated grilled chicken skewers with a thick, coconut-loosened peanut sauce.",
    ing:[
      { n:"Chicken thighs", q:"Thigh meat stays juicy over the grill's high heat.", amt:"1.5 lb", shelf:"regenerative-meat" },
      { n:"Peanut butter", q:"The base of the sauce; natural, unsweetened peanut butter gives the truest flavor.", amt:"1/2 cup", shelf:"nut-butter" },
      { n:"Kecap manis", q:"Sweet soy in both the marinade and the sauce for depth and color.", amt:"3 tbsp", shelf:"soy-sauce" },
      { n:"Sambal", q:"A spoonful in the peanut sauce brings the heat.", amt:"1 tbsp", shelf:"chili-crisp" },
      { n:"Lemongrass and turmeric", q:"Fresh lemongrass and turmeric are the marinade's backbone.", amt:"2 stalks", local:true },
      { n:"Coconut milk", q:"Loosens the peanut sauce to a pourable consistency.", amt:"1/2 cup", local:true }
    ],
    steps:[
      { b:"Marinate", t:"Blend lemongrass, turmeric, garlic, and kecap manis; coat the chicken and chill at least 1 hour." },
      { b:"Skewer", t:"Thread onto soaked bamboo skewers, packing the meat tight." },
      { b:"Grill", t:"Grill over high heat 3 to 4 minutes per side until charred at the edges and cooked through." },
      { b:"Make the sauce", t:"Simmer peanut butter, kecap manis, sambal, and coconut milk until it coats a spoon." }
    ],
    tools:["Grill|charcoal grill","Bamboo skewers|bamboo grill skewers","Blender|countertop blender","Small saucepan|2 quart saucepan","Tongs|kitchen tongs"]
  },
  {
    slug:"beef-rendang",
    title:"Beef Rendang, and where to source it",
    cuisine:"Indonesian",
    category:"Main",
    kw:"beef rendang, rendang daging, dry indonesian curry, coconut beef",
    iso:["PT30M","PT180M","PT210M"],
    prep:"30 min", cook:"3 hr", makes:"6 servings",
    desc:"A slow-cooked dry Indonesian curry where beef braises in coconut and spice until nearly caramelized.",
    dek:"Rendang is not a saucy curry — you cook it for hours until the coconut milk reduces, breaks, and fries the meat in its own oil until dark and dry. The last hour needs near-constant stirring so the toasted coconut and spice paste coat the beef without burning.",
    card:"Slow-cooked dry Indonesian curry braised for hours until the beef fries in its own spiced oil.",
    ing:[
      { n:"Beef chuck", q:"A tough, collagen-rich cut is the point; it survives three hours and turns tender.", amt:"2.5 lb", shelf:"regenerative-meat" },
      { n:"Dried red chiles", q:"Soaked and blended into the spice paste for deep color and slow heat.", amt:"8", shelf:"dried-chiles" },
      { n:"Toasted coconut (kerisik)", q:"Dry-toasted grated coconut ground to a paste; it thickens and adds nutty depth.", amt:"1/2 cup", shelf:"nut-butter" },
      { n:"Coconut milk", q:"Full-fat; it slowly reduces and breaks to fry the meat.", amt:"3 cans", local:true },
      { n:"Lemongrass and galangal", q:"Bruised and blended into the rempah spice paste.", amt:"3 stalks", local:true },
      { n:"Kaffir lime leaves", q:"Torn leaves perfume the braise; add whole and remove before serving.", amt:"5 leaves", local:true }
    ],
    steps:[
      { b:"Make the rempah", t:"Blend soaked chiles, lemongrass, galangal, garlic, and shallot into a smooth paste." },
      { b:"Fry the paste", t:"Fry the paste in oil over medium until it darkens and smells cooked, about 8 minutes." },
      { b:"Braise", t:"Add beef, coconut milk, and lime leaves; simmer uncovered on low, stirring often." },
      { b:"Reduce dry", t:"After 2 to 3 hours the liquid reduces and the oil separates; stir constantly as it darkens to a dry, glossy coat." }
    ],
    tools:["Dutch oven|enameled dutch oven","Blender|countertop blender","Wooden spoon|wooden cooking spoon","Chef knife|8 inch chef knife","Box grater|stainless box grater"]
  },
  {
    slug:"laksa",
    title:"Laksa, and where to source it",
    cuisine:"Malaysian",
    category:"Soup",
    kw:"laksa, curry laksa, malaysian noodle soup, coconut laksa",
    iso:["PT25M","PT25M","PT50M"],
    prep:"25 min", cook:"25 min", makes:"4 servings",
    desc:"A rich Malaysian coconut noodle soup built on a fried spice paste and topped generously.",
    dek:"Curry laksa runs on the rempah — a spice paste of chiles, lemongrass, and dried shrimp that has to be fried until the oil splits and goes red. Rush that fry and the broth tastes raw and flat no matter how long you simmer it.",
    card:"Rich Malaysian coconut noodle soup whose whole flavor comes from frying the spice paste hard.",
    ing:[
      { n:"Rice noodles", q:"Thick rice vermicelli or a mix with yellow noodles; blanch just before serving.", amt:"12 oz", shelf:"rice-noodles" },
      { n:"Laksa paste", q:"Chiles, lemongrass, galangal, and dried shrimp; a good jarred paste is a real shortcut.", amt:"4 tbsp", local:true },
      { n:"Shrimp", q:"Poached in the broth at the end; save the shells for stock.", amt:"1 lb", shelf:"regenerative-meat" },
      { n:"Fish sauce", q:"Rounds out the salt against the coconut.", amt:"2 tbsp", shelf:"fish-sauce" },
      { n:"Tofu puffs", q:"Fried tofu puffs soak up the broth like sponges.", amt:"8", shelf:"tofu-tempeh" },
      { n:"Coconut milk", q:"Stirred in near the end so it does not split over high heat.", amt:"2 cans", local:true }
    ],
    steps:[
      { b:"Fry the paste", t:"Fry laksa paste in oil over medium-high until the oil turns red and it smells toasted, about 5 minutes." },
      { b:"Build the broth", t:"Add shrimp stock or water and simmer 15 minutes to develop flavor." },
      { b:"Finish rich", t:"Stir in coconut milk and fish sauce; keep at a bare simmer so it does not break." },
      { b:"Assemble", t:"Poach shrimp and tofu puffs 3 minutes, then ladle over noodles in bowls." }
    ],
    tools:["Soup pot|3 quart soup pot","Wok|carbon steel wok","Ladle|kitchen ladle","Fine strainer|fine mesh strainer","Noodle basket|noodle blanching basket"]
  },
  {
    slug:"mango-sticky-rice",
    title:"Mango Sticky Rice, and where to source it",
    cuisine:"Thai",
    category:"Dessert",
    kw:"mango sticky rice, khao niao mamuang, thai sticky rice dessert, coconut sticky rice",
    iso:["PT30M","PT25M","PT55M"],
    prep:"30 min", cook:"25 min", makes:"4 servings",
    desc:"Steamed glutinous rice soaked in sweet coconut cream, served with ripe mango.",
    dek:"The rice has to be true glutinous (sticky) rice, soaked at least 30 minutes and steamed, not boiled — regular rice will never get that chewy pull. The warm rice is dressed in a salted coconut cream so the dish reads sweet-salty, not just sweet.",
    card:"Steamed glutinous rice bathed in salted coconut cream, served with ripe mango.",
    ing:[
      { n:"Glutinous rice", q:"Thai sticky rice only; it must be soaked, then steamed to get the right chew.", amt:"1.5 cups", shelf:"rice" },
      { n:"Sugar", q:"Dissolved into the warm coconut cream; palm sugar is traditional.", amt:"1/2 cup", shelf:"unrefined-sugar" },
      { n:"Toasted sesame seeds", q:"A pinch on top for crunch and nutty contrast.", amt:"1 tbsp", shelf:"seeds" },
      { n:"Coconut milk", q:"Full-fat coconut milk makes both the soaking cream and the topping.", amt:"1 can", local:true },
      { n:"Ripe mango", q:"A ripe, fragrant mango (Ataulfo or Nam Dok Mai) is half the dish.", amt:"2", local:true }
    ],
    steps:[
      { b:"Soak the rice", t:"Soak glutinous rice at least 30 minutes, ideally a few hours." },
      { b:"Steam", t:"Steam the drained rice over simmering water 20 to 25 minutes until translucent and tender." },
      { b:"Make the cream", t:"Warm coconut milk with sugar and a pinch of salt until dissolved; do not boil." },
      { b:"Dress and serve", t:"Fold most of the cream into the hot rice and rest 15 minutes; serve with sliced mango, extra cream, and sesame." }
    ],
    tools:["Bamboo steamer|bamboo steamer basket","Saucepan|2 quart saucepan","Mixing bowl|stainless mixing bowl","Paring knife|paring knife","Fine strainer|fine mesh strainer"]
  }
];

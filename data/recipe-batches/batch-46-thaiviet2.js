module.exports = [
  {
    slug:"khao-soi",
    title:"Khao Soi, and where to source it",
    cuisine:"Thai",
    category:"Soup",
    kw:"khao soi, northern thai curry noodle soup, chiang mai khao soi, curry noodles",
    iso:["PT20M","PT30M","PT50M"],
    prep:"20 min", cook:"30 min", makes:"4 servings",
    desc:"A northern Thai coconut curry noodle soup topped with the same noodles fried crisp.",
    dek:"Khao soi is a curry broth built by frying the paste in split coconut cream until the oil runs red, then loosening it with more coconut milk. The signature is the double noodle — soft egg noodles in the bowl, a fried nest on top for crunch.",
    card:"Northern Thai coconut curry noodles topped with a crisp fried noodle nest.",
    ing:[
      { n:"Chicken legs", q:"Bone-in legs simmer in the curry and stay tender; the bones add body.", amt:"4", shelf:"regenerative-meat" },
      { n:"Khao soi curry paste", q:"Turmeric, dried chile, and coriander seed; a good jarred paste saves a long pound.", amt:"4 tbsp", local:true },
      { n:"Egg noodles", q:"Fresh wheat egg noodles; cook most soft and fry a handful crisp for the top.", amt:"12 oz", shelf:"rice-noodles" },
      { n:"Fish sauce", q:"The salt backbone that keeps the coconut from reading flat.", amt:"2 tbsp", shelf:"fish-sauce" },
      { n:"Coconut milk", q:"Full-fat; scoop the thick cream off the top to fry the paste first.", amt:"2 cans", local:true },
      { n:"Lime and shallot", q:"Lime wedges, sliced shallot, and pickled mustard greens go on the side.", amt:"2 limes", local:true }
    ],
    steps:[
      { b:"Split the cream", t:"Simmer the thick coconut cream over medium until the oil separates, about 4 minutes." },
      { b:"Fry the paste", t:"Add curry paste and fry 3 minutes until it darkens and smells toasted." },
      { b:"Simmer", t:"Add chicken, the rest of the coconut milk, and fish sauce; simmer 20 to 25 minutes until the meat pulls from the bone." },
      { b:"Fry the noodles", t:"Fry a handful of raw noodles in hot oil until crisp and gold, then drain on paper." }
    ],
    tools:["Dutch oven|enameled dutch oven","Frying pan|deep frying pan","Spider strainer|spider skimmer","Ladle|kitchen ladle","Chef knife|8 inch chef knife"]
  },
  {
    slug:"pad-see-ew",
    title:"Pad See Ew, and where to source it",
    cuisine:"Thai",
    category:"Main",
    kw:"pad see ew, thai soy sauce noodles, wide rice noodle stir fry, sen yai",
    iso:["PT15M","PT10M","PT25M"],
    prep:"15 min", cook:"10 min", makes:"2 servings",
    desc:"A Thai stir-fry of wide rice noodles charred in dark soy with egg and Chinese broccoli.",
    dek:"Pad see ew is all about the char — the wok has to be smoking so the noodles blister and pick up wok hei instead of steaming. Fry in small batches; crowd the pan and you get a pale, soggy tangle instead of caramelized edges.",
    card:"Wide rice noodles charred hard in dark soy with egg and Chinese broccoli.",
    ing:[
      { n:"Wide rice noodles", q:"Fresh sen yai if you can find them; soak dried ones just until pliable, not soft.", amt:"8 oz", shelf:"rice-noodles" },
      { n:"Chicken or pork", q:"Thin slices cook in seconds against the hot wok.", amt:"1/2 lb", shelf:"regenerative-meat" },
      { n:"Dark soy sauce", q:"Dark soy gives the color and the malty depth; a splash of light soy adds salt.", amt:"2 tbsp", shelf:"soy-sauce" },
      { n:"Eggs", q:"Scrambled into the noodles for richness; push the noodles aside and cook them fast.", amt:"2", shelf:"eggs" },
      { n:"Chinese broccoli", q:"Gai lan; the stems go in first, the leaves last so they just wilt.", amt:"1 bunch", local:true },
      { n:"Garlic", q:"A base of fried garlic starts the whole stir-fry.", amt:"4 cloves", local:true }
    ],
    steps:[
      { b:"Prep everything", t:"Slice meat, separate broccoli stems from leaves, and mix the soy sauces before the wok gets hot." },
      { b:"Heat the wok", t:"Get the wok ripping hot until it smokes, then add oil and the garlic." },
      { b:"Sear and scramble", t:"Cook the meat, push it aside, scramble the eggs, then add the broccoli stems." },
      { b:"Char the noodles", t:"Add noodles and dark soy, then leave them still for 20 seconds at a time to blister before tossing." }
    ],
    tools:["Wok|carbon steel wok","Wok spatula|metal wok spatula","Chef knife|8 inch chef knife","Small bowls|prep bowls set","Colander|kitchen colander"]
  },
  {
    slug:"tom-kha",
    title:"Tom Kha Gai, and where to source it",
    cuisine:"Thai",
    category:"Soup",
    kw:"tom kha gai, thai coconut chicken soup, galangal coconut soup, tom kha",
    iso:["PT15M","PT20M","PT35M"],
    prep:"15 min", cook:"20 min", makes:"4 servings",
    desc:"A creamy Thai coconut soup with chicken, galangal, and a bright lime finish.",
    dek:"Tom kha is tom yum's mellow cousin — coconut milk rounds off the sour and heat into something silky. Keep it at a bare simmer once the coconut milk goes in; a hard boil splits the cream and turns the soup grainy.",
    card:"Creamy Thai coconut chicken soup carried by galangal and a last-second squeeze of lime.",
    ing:[
      { n:"Chicken thighs", q:"Sliced thin so they poach fast and stay tender in the broth.", amt:"1 lb", shelf:"regenerative-meat" },
      { n:"Fish sauce", q:"The salt that makes the coconut taste savory, not sweet.", amt:"3 tbsp", shelf:"fish-sauce" },
      { n:"Galangal", q:"Piney and sharp; do not swap in ginger or the soup loses its signature note.", amt:"8 slices", local:true },
      { n:"Lemongrass", q:"Bruise and cut on the bias so the oils release into the broth.", amt:"2 stalks", local:true },
      { n:"Coconut milk", q:"Full-fat; add it after the aromatics steep so it stays smooth.", amt:"2 cans", local:true },
      { n:"Lime", q:"Juice goes in off the heat so the sourness stays bright.", amt:"3 tbsp juice", shelf:"citrus" }
    ],
    steps:[
      { b:"Steep the aromatics", t:"Simmer 3 cups stock with galangal, lemongrass, and torn kaffir lime leaves for 10 minutes." },
      { b:"Add coconut", t:"Pour in the coconut milk and fish sauce; hold it at a bare simmer, never a boil." },
      { b:"Poach the chicken", t:"Add sliced chicken and mushrooms; simmer 5 to 6 minutes until the chicken is just cooked." },
      { b:"Finish sour", t:"Kill the heat and stir in lime juice; taste for a balance of salty, sour, then mild heat." }
    ],
    tools:["Soup pot|3 quart soup pot","Ladle|kitchen ladle","Citrus juicer|handheld citrus juicer","Chef knife|8 inch chef knife","Fine strainer|fine mesh strainer"]
  },
  {
    slug:"panang-curry",
    title:"Panang Curry, and where to source it",
    cuisine:"Thai",
    category:"Main",
    kw:"panang curry, phanaeng curry, thai peanut curry, thick coconut curry",
    iso:["PT15M","PT25M","PT40M"],
    prep:"15 min", cook:"25 min", makes:"4 servings",
    desc:"A thick, rich Thai curry loosened with peanut and finished with kaffir lime.",
    dek:"Panang is the thickest of the Thai curries — you barely add liquid, so the sauce clings to the meat instead of pooling. Frying the paste in split coconut cream until the oil runs red is the whole game; skip it and the curry tastes raw.",
    card:"Thick, peanut-rich Thai curry that clings to the meat instead of running thin.",
    ing:[
      { n:"Beef or chicken", q:"Thin-sliced sirloin or thigh; panang is drier so tender cuts shine here.", amt:"1.5 lb", shelf:"regenerative-meat" },
      { n:"Panang curry paste", q:"Redder and nuttier than red curry paste; heat varies, so start with less.", amt:"4 tbsp", local:true },
      { n:"Peanut butter", q:"A spoonful thickens the sauce and gives panang its nutty backbone.", amt:"2 tbsp", shelf:"nut-butter" },
      { n:"Fish sauce", q:"Balances the sweetness so the curry does not read as dessert.", amt:"2 tbsp", shelf:"fish-sauce" },
      { n:"Coconut milk", q:"Full-fat; scoop the thick cream off the top to fry the paste.", amt:"1 can", local:true },
      { n:"Kaffir lime leaves", q:"Sliced into fine ribbons and stirred in at the end for perfume.", amt:"4 leaves", local:true }
    ],
    steps:[
      { b:"Split the cream", t:"Simmer the thick coconut cream over medium until the oil separates, about 4 minutes." },
      { b:"Fry the paste", t:"Add curry paste and peanut butter; fry 3 minutes until glossy and fragrant." },
      { b:"Simmer thick", t:"Add the meat and just enough coconut milk to loosen; simmer 12 to 15 minutes until the sauce clings." },
      { b:"Finish", t:"Stir in fish sauce and shredded kaffir lime leaves off the heat; taste for salt." }
    ],
    tools:["Wok|carbon steel wok","Wooden spoon|wooden cooking spoon","Chef knife|8 inch chef knife","Ladle|kitchen ladle","Small bowls|prep bowls set"]
  },
  {
    slug:"thai-basil-chicken",
    title:"Thai Basil Chicken, and where to source it",
    cuisine:"Thai",
    category:"Main",
    kw:"thai basil chicken, pad krapow gai, holy basil stir fry, krapow",
    iso:["PT10M","PT10M","PT20M"],
    prep:"10 min", cook:"10 min", makes:"2 servings",
    desc:"A fast Thai stir-fry of minced chicken, chiles, and holy basil over rice with a fried egg.",
    dek:"Pad krapow is a five-minute dish once the wok is hot, so mince the garlic and chiles first and have the sauce measured. Holy basil is the whole point — its peppery, clove-like edge is different from sweet Thai basil, and it goes in at the very end.",
    card:"Minced chicken stir-fried hard with chiles and holy basil, crowned with a crispy fried egg.",
    ing:[
      { n:"Ground chicken", q:"Ground thigh stays moist; leave some texture rather than mincing it to paste.", amt:"1 lb", shelf:"regenerative-meat" },
      { n:"Fish sauce", q:"Plus a splash of oyster sauce; this is the salt and depth of the dish.", amt:"2 tbsp", shelf:"fish-sauce" },
      { n:"Soy sauce", q:"A little dark soy for color alongside the fish sauce.", amt:"1 tbsp", shelf:"soy-sauce" },
      { n:"Eggs", q:"Fried crisp-edged in hot oil, one per plate, to set on top.", amt:"2", shelf:"eggs" },
      { n:"Thai chiles and garlic", q:"Pounded together into a rough paste for the aromatic base.", amt:"5 chiles", local:true },
      { n:"Holy basil", q:"Holy basil (or Thai basil) folded in off the heat so it just wilts.", amt:"1 cup", local:true }
    ],
    steps:[
      { b:"Pound the base", t:"Crush garlic and Thai chiles into a rough paste with a mortar and pestle." },
      { b:"Fry the egg", t:"Fry an egg in hot oil until the edges blister and crisp; set aside." },
      { b:"Stir-fry", t:"Fry the chile-garlic paste 30 seconds, add chicken, and cook hard until browned and slightly crisp." },
      { b:"Sauce and finish", t:"Add fish sauce, soy, and a splash of water; toss, then fold in the basil off the heat." }
    ],
    tools:["Wok|carbon steel wok","Mortar and pestle|granite mortar and pestle","Wok spatula|metal wok spatula","Nonstick pan|small nonstick pan","Chef knife|8 inch chef knife"]
  },
  {
    slug:"papaya-salad",
    title:"Papaya Salad, and where to source it",
    cuisine:"Thai",
    category:"Side",
    kw:"papaya salad, som tum, green papaya salad, thai som tam",
    iso:["PT20M","PT0M","PT20M"],
    prep:"20 min", cook:"0 min", makes:"4 servings",
    desc:"A pounded green papaya salad balancing lime, fish sauce, chile, and palm sugar.",
    dek:"Som tum is built in a mortar, not a bowl — you bruise the chiles and garlic, then pound the papaya just enough to soften it and drink in the dressing. The balance is everything: sour, salty, sweet, and hot should all land at once, so taste and adjust before serving.",
    card:"Pounded green papaya salad that hits sour, salty, sweet, and hot in one bite.",
    ing:[
      { n:"Fish sauce", q:"The salt and funk that carries the dressing; a clean one makes a difference.", amt:"3 tbsp", shelf:"fish-sauce" },
      { n:"Palm sugar", q:"Dissolved into the dressing for the sweet corner of the balance.", amt:"2 tbsp", shelf:"unrefined-sugar" },
      { n:"Roasted peanuts", q:"Pounded in coarse at the end for crunch and toasty depth.", amt:"1/4 cup", shelf:"nut-butter" },
      { n:"Lime", q:"Fresh juice is the acid; bottled tastes flat here.", amt:"3 tbsp juice", shelf:"citrus" },
      { n:"Green papaya", q:"Shred firm, unripe papaya into long strands; it should be crisp, not soft.", amt:"4 cups", local:true },
      { n:"Thai chiles and garlic", q:"Pounded first to release their heat into the dressing.", amt:"4 chiles", local:true }
    ],
    steps:[
      { b:"Pound the base", t:"Bruise garlic and Thai chiles in a large mortar until broken but not paste." },
      { b:"Build the dressing", t:"Add palm sugar, fish sauce, and lime juice; pound until the sugar dissolves." },
      { b:"Add papaya", t:"Add the shredded papaya and pound gently while turning with a spoon so it softens and soaks up dressing." },
      { b:"Finish", t:"Fold in halved tomatoes, long beans, and peanuts; taste and adjust sour, salty, sweet, and hot." }
    ],
    tools:["Mortar and pestle|large clay mortar and pestle","Papaya peeler|julienne peeler","Citrus juicer|handheld citrus juicer","Mixing bowl|stainless mixing bowl","Chef knife|8 inch chef knife"]
  },
  {
    slug:"thai-fried-rice",
    title:"Thai Fried Rice, and where to source it",
    cuisine:"Thai",
    category:"Main",
    kw:"thai fried rice, khao pad, jasmine fried rice, thai fried rice with egg",
    iso:["PT10M","PT10M","PT20M"],
    prep:"10 min", cook:"10 min", makes:"2 servings",
    desc:"A clean, savory Thai fried rice with egg, jasmine rice, and a squeeze of lime.",
    dek:"Khao pad is lighter than other fried rices — the seasoning is fish sauce and a little soy, not a heavy sauce, so the jasmine rice stays the star. Use cold day-old rice; fresh rice steams and clumps instead of frying into separate grains.",
    card:"Clean Thai fried rice on cold jasmine rice, seasoned with fish sauce and finished with lime.",
    ing:[
      { n:"Day-old jasmine rice", q:"Cold, dry rice fries into separate grains; fresh rice turns to mush.", amt:"4 cups", shelf:"rice" },
      { n:"Chicken or shrimp", q:"Diced small so it cooks fast against the hot wok.", amt:"1/2 lb", shelf:"regenerative-meat" },
      { n:"Fish sauce", q:"The primary seasoning; khao pad leans on it more than soy.", amt:"2 tbsp", shelf:"fish-sauce" },
      { n:"Eggs", q:"Scrambled into the rice; push the rice aside and cook them fast in the hot spot.", amt:"2", shelf:"eggs" },
      { n:"Lime", q:"Wedges served on the side; the squeeze at the table lifts everything.", amt:"1", shelf:"citrus" },
      { n:"Garlic and scallion", q:"Fried garlic starts it; scallion and tomato go in near the end.", amt:"3 cloves", local:true }
    ],
    steps:[
      { b:"Heat the wok", t:"Get the wok hot, add oil, and fry the garlic until just golden." },
      { b:"Cook and scramble", t:"Add the protein, push it aside, and scramble the eggs in the cleared spot." },
      { b:"Fry the rice", t:"Add the cold rice and fish sauce; toss hard for 3 to 4 minutes until each grain is coated and hot." },
      { b:"Finish", t:"Fold in scallion and tomato off the heat; serve with lime wedges and cucumber." }
    ],
    tools:["Wok|carbon steel wok","Wok spatula|metal wok spatula","Chef knife|8 inch chef knife","Small bowls|prep bowls set","Citrus juicer|handheld citrus juicer"]
  },
  {
    slug:"com-tam",
    title:"Com Tam, and where to source it",
    cuisine:"Vietnamese",
    category:"Main",
    kw:"com tam, broken rice, vietnamese grilled pork chop rice, suon nuong",
    iso:["PT30M","PT15M","PT45M"],
    prep:"30 min", cook:"15 min", makes:"4 servings",
    desc:"Vietnamese broken rice with a grilled lemongrass pork chop and nuoc cham to pour over.",
    dek:"Com tam is built on broken rice — fractured jasmine grains that cook up softer and stickier than whole rice. The pork chop needs a marinade with a little sugar to caramelize hard over high heat, and the whole plate is finished with nuoc cham poured on at the table.",
    card:"Vietnamese broken rice under a caramelized lemongrass pork chop, dressed with nuoc cham.",
    ing:[
      { n:"Pork chops", q:"Thin-cut bone-in chops; the fat and sugar in the marinade give the char.", amt:"4", shelf:"regenerative-meat" },
      { n:"Broken rice", q:"Fractured jasmine rice; softer and stickier than whole grain, look for com tam or broken rice.", amt:"2 cups", shelf:"rice" },
      { n:"Fish sauce", q:"Base of both the marinade and the nuoc cham you pour over.", amt:"4 tbsp", shelf:"fish-sauce" },
      { n:"Lime", q:"Fresh lime is the acid in the nuoc cham.", amt:"2", shelf:"citrus" },
      { n:"Lemongrass and garlic", q:"Minced fine into the pork marinade for its signature perfume.", amt:"2 stalks", local:true },
      { n:"Cucumber and scallion", q:"Sliced cucumber and a scallion oil finish the plate.", amt:"1 cucumber", local:true }
    ],
    steps:[
      { b:"Marinate the pork", t:"Mix pork with lemongrass, garlic, fish sauce, and sugar; rest at least 20 minutes." },
      { b:"Cook the rice", t:"Rinse and steam the broken rice; it cooks faster and softer than regular jasmine." },
      { b:"Make nuoc cham", t:"Whisk warm water, sugar, fish sauce, lime juice, garlic, and chile until the sugar dissolves." },
      { b:"Grill and plate", t:"Grill the chops over high heat 3 to 4 minutes per side until caramelized; serve over rice with nuoc cham." }
    ],
    tools:["Grill pan|cast iron grill pan","Rice cooker|electric rice cooker","Whisk|balloon whisk","Chef knife|8 inch chef knife","Tongs|kitchen tongs"]
  },
  {
    slug:"banh-xeo",
    title:"Banh Xeo, and where to source it",
    cuisine:"Vietnamese",
    category:"Main",
    kw:"banh xeo, vietnamese sizzling crepe, turmeric rice crepe, shrimp pork crepe",
    iso:["PT25M","PT20M","PT45M"],
    prep:"25 min", cook:"20 min", makes:"4 crepes",
    desc:"A crispy turmeric rice-flour crepe folded over shrimp, pork, and bean sprouts.",
    dek:"Banh xeo means sizzling cake, named for the sound the batter makes hitting the hot pan — that sizzle is how you know the pan is right for a lacy, crisp edge. The batter is thin rice flour and coconut milk with turmeric; swirl it fast and thin, because a thick pour steams instead of crisping.",
    card:"Crispy turmeric rice crepe folded over shrimp, pork, and sprouts, eaten wrapped in lettuce.",
    ing:[
      { n:"Shrimp and pork", q:"Sliced pork belly and small shrimp cook right in the crepe as it sets.", amt:"1/2 lb each", local:true },
      { n:"Rice flour", q:"The base of the batter; it fries far crisper than wheat flour.", amt:"2 cups", shelf:"rice-noodles" },
      { n:"Fish sauce", q:"Base of the nuoc cham you dip every bite into.", amt:"3 tbsp", shelf:"fish-sauce" },
      { n:"Coconut milk", q:"Thinned into the batter for richness and a tender-crisp edge.", amt:"1 cup", local:true },
      { n:"Bean sprouts and herbs", q:"A handful of sprouts folded in, plus lettuce and herbs to wrap.", amt:"2 cups", local:true },
      { n:"Turmeric", q:"Ground turmeric turns the batter its signature yellow.", amt:"1 tsp", shelf:"spices" }
    ],
    steps:[
      { b:"Mix the batter", t:"Whisk rice flour, coconut milk, water, turmeric, and salt into a thin batter; rest 20 minutes." },
      { b:"Cook the filling", t:"Fry pork and shrimp in a hot oiled skillet until nearly done." },
      { b:"Pour and swirl", t:"Pour a thin ladle of batter and swirl fast to coat; it should sizzle loudly." },
      { b:"Crisp and fold", t:"Add sprouts, cover 2 minutes, then fry uncovered until the edges are lacy and crisp; fold in half." }
    ],
    tools:["Nonstick pan|large nonstick skillet","Ladle|kitchen ladle","Whisk|balloon whisk","Chef knife|8 inch chef knife","Mixing bowl|stainless mixing bowl"]
  },
  {
    slug:"bun-bo-hue",
    title:"Bun Bo Hue, and where to source it",
    cuisine:"Vietnamese",
    category:"Soup",
    kw:"bun bo hue, spicy vietnamese beef noodle soup, hue beef noodle, lemongrass beef soup",
    iso:["PT30M","PT180M","PT210M"],
    prep:"30 min", cook:"3 hr", makes:"6 servings",
    desc:"A spicy, lemongrass-heavy Vietnamese beef noodle soup from the city of Hue.",
    dek:"Bun bo hue is pho's bolder cousin — the broth is built on beef bones and pork knuckle simmered for hours, then charged with lemongrass and a chile-annatto oil that turns it red. The thick round rice noodles are the point; do not swap in flat pho noodles.",
    card:"Spicy Hue-style beef noodle soup, lemongrass-forward and reddened with chile-annatto oil.",
    ing:[
      { n:"Beef shank and pork knuckle", q:"Bones and collagen-rich cuts build a broth with real body over a long simmer.", amt:"3 lb", shelf:"regenerative-meat" },
      { n:"Thick rice noodles", q:"Round bun bo hue noodles are thicker than pho; cook and rinse just before serving.", amt:"1 lb", shelf:"rice-noodles" },
      { n:"Fish sauce", q:"The salt backbone; season the broth near the end and taste.", amt:"4 tbsp", shelf:"fish-sauce" },
      { n:"Chili paste", q:"Fried with annatto into the red oil that gives the soup its color and heat.", amt:"3 tbsp", shelf:"chili-crisp" },
      { n:"Lemongrass", q:"A big bundle bruised and simmered whole; it defines the broth's aroma.", amt:"6 stalks", local:true },
      { n:"Herbs and lime", q:"Bean sprouts, mint, sliced onion, and lime wedges go on top.", amt:"2 cups", local:true }
    ],
    steps:[
      { b:"Blanch the bones", t:"Boil the bones 5 minutes, then dump the water and rinse to get a clean broth." },
      { b:"Simmer long", t:"Simmer the bones with bruised lemongrass and onion for 2 to 3 hours, skimming the scum." },
      { b:"Make the chile oil", t:"Fry chili paste and annatto in oil until deep red, then stir into the broth." },
      { b:"Season and serve", t:"Add fish sauce and shrimp paste to taste; ladle over noodles with sliced beef and herbs." }
    ],
    tools:["Stockpot|8 quart stockpot","Spider strainer|spider skimmer","Ladle|kitchen ladle","Fine strainer|fine mesh strainer","Chef knife|8 inch chef knife"]
  },
  {
    slug:"vietnamese-coffee",
    title:"Vietnamese Coffee, and where to source it",
    cuisine:"Vietnamese",
    category:"Drink",
    kw:"vietnamese coffee, ca phe sua da, phin coffee, condensed milk coffee",
    iso:["PT5M","PT5M","PT10M"],
    prep:"5 min", cook:"5 min", makes:"1 serving",
    desc:"Strong dark-roast coffee dripped over sweetened condensed milk, served hot or iced.",
    dek:"Ca phe sua is made in a phin filter that drips slowly onto a layer of condensed milk waiting in the glass. The coffee has to be a dark, coarse-ground robusta blend and the drip should take four to five minutes; rush it and the coffee comes out weak and sour.",
    card:"Strong dark-roast coffee dripped slowly over condensed milk, poured over ice.",
    ing:[
      { n:"Dark-roast coffee", q:"Coarse-ground robusta or a dark blend; it needs to stand up to the sweet milk.", amt:"3 tbsp", shelf:"coffee" },
      { n:"Sweetened condensed milk", q:"Two tablespoons in the bottom of the glass; it is the sweetener and the cream at once.", amt:"2 tbsp", shelf:"milk" },
      { n:"Ice", q:"A tall glass of ice for the iced version; add after the coffee finishes dripping.", amt:"1 cup", local:true }
    ],
    steps:[
      { b:"Layer the milk", t:"Spoon condensed milk into the bottom of the glass." },
      { b:"Load the phin", t:"Add coffee to the phin filter, level it, and set the press plate on top." },
      { b:"Bloom and drip", t:"Pour a little hot water to bloom for 30 seconds, then fill; it should drip slowly for 4 to 5 minutes." },
      { b:"Stir and serve", t:"Stir the coffee into the milk, then pour over a glass of ice for ca phe sua da." }
    ],
    tools:["Phin filter|vietnamese phin coffee filter","Kettle|gooseneck kettle","Tall glass|tall drinking glass","Long spoon|long bar spoon","Coffee grinder|burr coffee grinder"]
  },
  {
    slug:"thai-iced-tea",
    title:"Thai Iced Tea, and where to source it",
    cuisine:"Thai",
    category:"Drink",
    kw:"thai iced tea, cha yen, thai tea, orange thai tea",
    iso:["PT5M","PT10M","PT15M"],
    prep:"5 min", cook:"10 min", makes:"2 servings",
    desc:"Strong steeped black tea sweetened and poured over ice with a float of condensed milk.",
    dek:"Thai tea is a strong black tea steeped hard, sweetened while hot, then chilled and poured over ice with condensed milk floated on top. Steep it long and strong — four to five minutes minimum — because the ice and milk will dilute it, and a weak brew disappears.",
    card:"Strong sweet black tea over ice with a float of condensed milk on top.",
    ing:[
      { n:"Black tea", q:"Thai tea mix or a strong Ceylon black; steep it hard so it survives the ice and milk.", amt:"4 tbsp", shelf:"tea" },
      { n:"Sugar", q:"Dissolved into the hot tea before it chills; the drink is meant to be sweet.", amt:"3 tbsp", shelf:"unrefined-sugar" },
      { n:"Sweetened condensed milk", q:"Some in the tea, some floated on top for the two-tone look and rich finish.", amt:"3 tbsp", shelf:"milk" },
      { n:"Ice", q:"A tall glass packed with ice; pour the sweet tea over and top with milk.", amt:"2 cups", local:true }
    ],
    steps:[
      { b:"Steep strong", t:"Steep the tea in just-off-boil water for 4 to 5 minutes; it should be very dark." },
      { b:"Sweeten hot", t:"Strain, then stir in the sugar and a little condensed milk while the tea is still hot." },
      { b:"Chill", t:"Let the sweet tea cool to room temperature or chill it in the fridge." },
      { b:"Build the glass", t:"Pour over a tall glass of ice and float condensed milk on top; stir before drinking." }
    ],
    tools:["Saucepan|2 quart saucepan","Fine strainer|fine mesh strainer","Tall glass|tall drinking glass","Long spoon|long bar spoon","Measuring spoons|measuring spoon set"]
  }
];

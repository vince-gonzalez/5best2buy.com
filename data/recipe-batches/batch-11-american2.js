module.exports = [
  {
    slug: "fried-chicken",
    title: "Fried Chicken, and where to source it",
    cuisine: "American",
    category: "Main",
    kw: "buttermilk fried chicken, southern fried chicken, crispy fried chicken",
    iso: ["PT20M", "PT25M", "PT45M"],
    prep: "20 min",
    cook: "25 min",
    makes: "4 servings",
    desc: "Buttermilk-brined chicken dredged in seasoned flour and fried in lard until shatteringly crisp.",
    dek: "Pastured chicken and real cultured buttermilk from a good dairy give you meat that stays juicy under a hard-fried crust. Keep the oil at 325F and let it climb back to temperature between batches. Drop below that and the crust turns greasy and pale.",
    card: "Buttermilk-brined, lard-fried, and built on pastured chicken worth the crust.",
    ing: [
      { n: "Chicken, bone-in pieces", q: "Pastured birds have firmer meat and more fat under the skin, so they fry up moist.", amt: "3.5 lb", shelf: "regenerative-meat" },
      { n: "Buttermilk", q: "Real cultured buttermilk tenderizes and seasons deeper than a quick soak in milk.", amt: "2 cups", shelf: "milk" },
      { n: "All-purpose flour", q: "Fresh-milled flour makes a crust with more flavor and better cling.", amt: "2.5 cups", shelf: "baking-flour" },
      { n: "Lard for frying", q: "Leaf lard fries clean and gives an old-school flavor no seed oil matches.", amt: "4 cups", shelf: "lard" },
      { n: "Paprika, garlic powder, cayenne", q: "A good ground paprika carries the whole dredge.", amt: "3 tbsp total", shelf: "spices" },
      { n: "Yellow onion, grated", q: "A little grated onion in the brine sweetens the meat.", amt: "half an onion", local: true }
    ],
    steps: [
      { b: "Brine", t: "Whisk buttermilk, grated onion, 2 tsp salt, and a spoon of the spice blend; submerge chicken and refrigerate at least 4 hours, ideally overnight." },
      { b: "Dredge", t: "Combine flour with the remaining spices and 2 tsp salt. Lift chicken from the brine, let it drip, then press hard into the flour so it clings; rest the dredged pieces 15 minutes." },
      { b: "Heat the fat", t: "Melt lard in a heavy skillet or Dutch oven to a depth of 1.5 inches and bring it to 350F. It will drop toward 325F once chicken goes in." },
      { b: "Fry", t: "Fry dark meat 12-14 minutes and white meat 10-12, turning once, holding the oil near 325F. Pull at 165F internal at the bone." },
      { b: "Drain and rest", t: "Rest on a rack, not paper, for 5 minutes so the crust stays crisp and the juices settle." }
    ],
    tools: ["Cast iron skillet|cast iron skillet 12 inch", "Frying thermometer|deep fry thermometer clip", "Wire rack|cooling rack half sheet"]
  },
  {
    slug: "chicken-pot-pie",
    title: "Chicken Pot Pie, and where to source it",
    cuisine: "American",
    category: "Main",
    kw: "chicken pot pie, homemade pot pie, double crust pot pie",
    iso: ["PT30M", "PT45M", "PT75M"],
    prep: "30 min",
    cook: "45 min",
    makes: "6 servings",
    desc: "A double-crust pie of pulled chicken and vegetables bound in a broth-and-cream veloute.",
    dek: "A rich bone broth and real butter make the gravy taste like it came off the bird rather than a bouillon cube. Cook the butter-and-flour roux for a full two minutes before you add any liquid. Skip that and the sauce ends up raw and pasty.",
    card: "A butter crust over pulled chicken in a real-broth gravy.",
    ing: [
      { n: "Chicken thighs", q: "Thigh meat stays tender through the bake where breast dries out.", amt: "1.5 lb", shelf: "regenerative-meat" },
      { n: "All-purpose flour", q: "You need it for both the crust and the roux; good flour helps both.", amt: "3 cups", shelf: "baking-flour" },
      { n: "Butter", q: "A high-fat cultured butter makes a flakier crust and a glossier gravy.", amt: "1.5 sticks", shelf: "butter" },
      { n: "Whole milk", q: "Milk plus broth gives a gravy that is rich without being heavy.", amt: "1 cup", shelf: "milk" },
      { n: "Chicken bone broth", q: "A real gelatin-rich broth sets the filling so slices hold.", amt: "2 cups", shelf: "bone-broth" },
      { n: "Onion, carrot, celery, peas", q: "The classic mix; dice small so everything cooks evenly.", amt: "3 cups total", local: true }
    ],
    steps: [
      { b: "Poach the chicken", t: "Simmer thighs in the broth 18-20 minutes to 165F internal, then pull the meat and reserve the broth." },
      { b: "Build the roux", t: "Melt 4 tbsp butter, whisk in 4 tbsp flour, and cook 2 full minutes over medium until it smells nutty and turns pale gold." },
      { b: "Make the gravy", t: "Whisk in the reserved broth and milk off the heat, then simmer 5 minutes until it coats a spoon. Fold in chicken and vegetables." },
      { b: "Fill and top", t: "Line a pie dish with rolled dough, add the cooled filling, lay the top crust, crimp, and cut vents." },
      { b: "Bake", t: "Bake at 400F for 40-45 minutes until the crust is deep golden and the filling bubbles through the vents. Rest 15 minutes before slicing." }
    ],
    tools: ["Pie dish|deep dish pie plate ceramic", "Rolling pin|wood rolling pin", "Whisk|balloon whisk stainless"]
  },
  {
    slug: "shepherds-pie",
    title: "Shepherd's Pie, and where to source it",
    cuisine: "American",
    category: "Main",
    kw: "shepherds pie, cottage pie, ground lamb pie",
    iso: ["PT25M", "PT40M", "PT65M"],
    prep: "25 min",
    cook: "40 min",
    makes: "6 servings",
    desc: "Braised ground lamb under a broiled mash of buttery potatoes.",
    dek: "Grass-fed lamb and a gelatin-rich broth give the filling body without a wall of flour. Dry the mashed potatoes over the heat for a minute before you work in the butter. That way the topping browns under the broiler instead of weeping water.",
    card: "Ground lamb braised in broth under a browned potato crown.",
    ing: [
      { n: "Ground lamb", q: "Grass-fed lamb has the depth this dish is built on; beef works as cottage pie.", amt: "1.5 lb", shelf: "regenerative-meat" },
      { n: "Potatoes", q: "A dry, starchy potato mashes fluffy and browns well under the broiler.", amt: "2.5 lb", shelf: "potatoes" },
      { n: "Butter", q: "Real butter in the mash is what makes the crust turn golden.", amt: "1 stick", shelf: "butter" },
      { n: "Lamb or beef broth", q: "A good broth carries the braise; add it in stages.", amt: "1.5 cups", shelf: "bone-broth" },
      { n: "Onion, carrot, peas", q: "Diced small so they soften into the meat layer.", amt: "2.5 cups total", local: true }
    ],
    steps: [
      { b: "Brown the meat", t: "Sear lamb hard in a wide pan until well browned, 8 minutes, then spoon off excess fat." },
      { b: "Braise", t: "Add onion and carrot, cook 5 minutes, stir in 2 tbsp flour, then the broth; simmer 12 minutes until thick. Fold in peas." },
      { b: "Mash", t: "Boil potatoes until fork-tender, drain, and dry them in the hot pot 1 minute before mashing with butter and a splash of milk." },
      { b: "Assemble", t: "Spread the meat in a baking dish, top with mash, and rake the surface with a fork for browning ridges." },
      { b: "Broil", t: "Bake at 400F for 20 minutes, then broil 3-4 minutes until the peaks are deep brown. Rest 10 minutes." }
    ],
    tools: ["Baking dish|ceramic baking dish 9x13", "Potato masher|potato masher stainless", "Wide skillet|stainless skillet 12 inch"]
  },
  {
    slug: "pot-roast",
    title: "Pot Roast, and where to source it",
    cuisine: "American",
    category: "Main",
    kw: "pot roast, braised chuck roast, sunday pot roast",
    iso: ["PT25M", "PT180M", "PT205M"],
    prep: "25 min",
    cook: "3 hr",
    makes: "6 servings",
    desc: "A chuck roast braised low with potatoes and root vegetables until it pulls apart.",
    dek: "A well-marbled grass-fed chuck and a real broth carry the whole dish, so there is nowhere to hide. Sear every side of the roast to a hard brown crust before any liquid goes in. That fond is where the flavor lives.",
    card: "Chuck roast braised low in real broth until it forks apart.",
    ing: [
      { n: "Beef chuck roast", q: "A fatty, well-marbled chuck breaks down tender where lean cuts stay tough.", amt: "3.5 lb", shelf: "regenerative-meat" },
      { n: "Potatoes", q: "Waxy potatoes hold their shape through the long braise.", amt: "2 lb", shelf: "potatoes" },
      { n: "Beef bone broth", q: "A gelatin-rich broth makes a braise that turns silky, not watery.", amt: "3 cups", shelf: "bone-broth" },
      { n: "Onion, carrot, garlic", q: "The aromatic base; leave carrots in big chunks so they survive.", amt: "4 cups total", local: true }
    ],
    steps: [
      { b: "Sear", t: "Pat the roast bone dry, salt it well, and sear all sides in a Dutch oven until deeply browned, about 4 minutes a side." },
      { b: "Build the base", t: "Remove the meat, soften onion and garlic in the fat, then deglaze with the broth, scraping up every brown bit." },
      { b: "Braise", t: "Return the roast, cover, and braise at 300F for 2.5 hours until a fork twists easily." },
      { b: "Add vegetables", t: "Add potatoes and carrots and braise 45 more minutes until they are tender and the meat pulls apart at 200F internal." },
      { b: "Rest and reduce", t: "Rest the meat, then simmer the liquid on the stove 10 minutes to a loose gravy." }
    ],
    tools: ["Dutch oven|enameled dutch oven 6 quart", "Tongs|kitchen tongs 12 inch", "Fat separator|gravy fat separator"]
  },
  {
    slug: "bbq-ribs",
    title: "BBQ Ribs, and where to source it",
    cuisine: "American",
    category: "Main",
    kw: "bbq ribs, baby back ribs, oven ribs, pork ribs",
    iso: ["PT20M", "PT180M", "PT200M"],
    prep: "20 min",
    cook: "3 hr",
    makes: "4 servings",
    desc: "Dry-rubbed pork ribs cooked low and slow, then glazed with a real barbecue sauce.",
    dek: "Pastured pork ribs come with the fat cap that renders into tenderness, and a good rub and real sauce handle the rest. Start by pulling the papery membrane off the bone side of each rack. Leave it on and it seals out smoke and cooks up rubbery.",
    card: "Dry-rubbed pork ribs cooked low, then glazed with real sauce.",
    ing: [
      { n: "Pork ribs, baby back or spare", q: "Heritage pork ribs render richer and stay tender through the long cook.", amt: "2 racks", shelf: "regenerative-meat" },
      { n: "Barbecue sauce", q: "A real slow-cooked sauce glazes and caramelizes where thin sauce just runs off.", amt: "1.5 cups", shelf: "bbq-sauce" },
      { n: "Paprika, brown sugar, garlic, pepper rub", q: "A good smoked paprika is the backbone of the rub.", amt: "half a cup", shelf: "spices" }
    ],
    steps: [
      { b: "Prep the racks", t: "Peel the silverskin off the bone side with a paper towel for grip, then pat the ribs dry." },
      { b: "Rub", t: "Coat both sides with the spice rub and let them sit 30 minutes so it draws moisture and tacks up." },
      { b: "Low cook", t: "Wrap in foil and bake at 275F for 2.5 hours until the meat pulls back from the bone tips and probes tender near 200F." },
      { b: "Glaze", t: "Unwrap, brush with sauce, and finish uncovered at 425F or under the broiler 8-10 minutes until the glaze sets and bubbles." },
      { b: "Rest", t: "Rest 10 minutes, then cut between the bones." }
    ],
    tools: ["Rimmed baking sheet|half sheet pan aluminum", "Basting brush|silicone basting brush", "Instant thermometer|instant read thermometer"]
  },
  {
    slug: "brisket",
    title: "Smoked Brisket, and where to source it",
    cuisine: "American",
    category: "Main",
    kw: "smoked brisket, texas brisket, beef brisket bbq",
    iso: ["PT30M", "PT600M", "PT630M"],
    prep: "30 min",
    cook: "10 hr",
    makes: "10 servings",
    desc: "A whole packer brisket rubbed simply and smoked low until the fat renders and the bark sets.",
    dek: "A well-marbled grass-fed packer is the entire game, and the salt, pepper, and smoke are just there to serve it. Wrap the brisket once it hits 165F to push through the stall, then cook to feel rather than the clock, somewhere around 203F. It is done when a probe slides in without resistance.",
    card: "A whole packer smoked low with salt, pepper, and patience.",
    ing: [
      { n: "Whole beef brisket, packer cut", q: "A thick, well-marbled point and flat renders juicy where a lean cut dries out.", amt: "12 lb", shelf: "regenerative-meat" },
      { n: "Coarse black pepper and salt rub", q: "A coarse cracked pepper builds the bark; keep it simple.", amt: "half a cup", shelf: "spices" },
      { n: "Barbecue sauce, for serving", q: "A real sauce on the side, never to hide the meat.", amt: "1 cup", shelf: "bbq-sauce" }
    ],
    steps: [
      { b: "Trim", t: "Trim the fat cap to a quarter inch and square the edges so the bark cooks evenly." },
      { b: "Rub", t: "Coat all over with equal parts coarse salt and pepper and let it sit while the smoker comes up." },
      { b: "Smoke", t: "Smoke fat-side up at 250F over oak until the bark is set and it hits 165F internal, about 6 hours." },
      { b: "Wrap and push", t: "Wrap in butcher paper and continue to 203F in the thickest part of the flat, another 3-4 hours, where a probe slides in like butter." },
      { b: "Rest", t: "Rest wrapped in a cooler at least 1 hour, then slice against the grain pencil-thick." }
    ],
    tools: ["Offset smoker|offset smoker charcoal", "Butcher paper|pink butcher paper roll", "Slicing knife|brisket slicing knife 12 inch"]
  },
  {
    slug: "chicken-and-waffles",
    title: "Chicken and Waffles, and where to source it",
    cuisine: "American",
    category: "Main",
    kw: "chicken and waffles, fried chicken waffles, southern brunch",
    iso: ["PT25M", "PT25M", "PT50M"],
    prep: "25 min",
    cook: "25 min",
    makes: "4 servings",
    desc: "Crisp fried chicken over yeasted waffles with real maple syrup.",
    dek: "Good eggs and cultured butter build a waffle that crisps outside and stays tender within, and real maple syrup bridges the sweet and the savory. Hold the fried chicken on a rack in a warm oven while you cook the waffles one at a time. That keeps the crust from going soft before it reaches the plate.",
    card: "Crisp fried chicken over buttery waffles and real maple.",
    ing: [
      { n: "Chicken pieces or tenders", q: "Pastured chicken fries up moist under the crust.", amt: "2 lb", shelf: "regenerative-meat" },
      { n: "All-purpose flour", q: "One good flour handles both the dredge and the waffle batter.", amt: "3 cups", shelf: "baking-flour" },
      { n: "Eggs", q: "Real pastured eggs give the batter lift and color.", amt: "3", shelf: "eggs" },
      { n: "Whole milk", q: "Milk makes the batter tender; buttermilk works too.", amt: "1.5 cups", shelf: "milk" },
      { n: "Butter, melted", q: "Cultured butter in the batter and on top adds real flavor.", amt: "6 tbsp", shelf: "butter" },
      { n: "Maple syrup", q: "Grade A dark real maple, never pancake syrup, is the point of the dish.", amt: "for serving", shelf: "maple-syrup" }
    ],
    steps: [
      { b: "Fry the chicken", t: "Dredge chicken in seasoned flour and fry at 350F for 8-10 minutes to 165F internal; hold on a rack in a 200F oven." },
      { b: "Mix the batter", t: "Whisk flour, eggs, milk, melted butter, 2 tsp baking powder, and salt into a thick pourable batter; let it rest 10 minutes." },
      { b: "Iron up", t: "Heat the waffle iron fully, grease it, and cook each waffle 4-5 minutes until deep golden and no steam escapes." },
      { b: "Plate", t: "Set chicken on the waffle and pour warm maple syrup over the whole thing so it soaks the crust." }
    ],
    tools: ["Waffle iron|belgian waffle maker", "Frying thermometer|deep fry thermometer clip", "Wire rack|cooling rack half sheet"]
  },
  {
    slug: "salisbury-steak",
    title: "Salisbury Steak, and where to source it",
    cuisine: "American",
    category: "Main",
    kw: "salisbury steak, ground beef patties, mushroom gravy steak",
    iso: ["PT20M", "PT30M", "PT50M"],
    prep: "20 min",
    cook: "30 min",
    makes: "4 servings",
    desc: "Seasoned beef patties simmered in a mushroom and onion gravy.",
    dek: "Grass-fed ground beef and real mushrooms carry a dish that is otherwise humble, and a gelatin-rich broth gives the gravy its body. Brown the mushrooms in a dry pan until they squeak and take on color before you add any fat. Rush that step and the gravy tastes flat.",
    card: "Beef patties braised in a real mushroom-and-broth gravy.",
    ing: [
      { n: "Ground beef", q: "An 80/20 grass-fed grind stays moist and holds the patty together.", amt: "1.5 lb", shelf: "regenerative-meat" },
      { n: "Mushrooms", q: "Real cremini or a fresh mix build the savory backbone of the gravy.", amt: "12 oz", shelf: "mushrooms" },
      { n: "Beef bone broth", q: "A gelatin-rich broth makes a gravy that clings instead of running.", amt: "2 cups", shelf: "bone-broth" },
      { n: "Breadcrumbs", q: "A handful of real bread crumbs keeps the patties tender.", amt: "half a cup", shelf: "bread" },
      { n: "Onion, garlic", q: "Sliced onion goes into the gravy; grated garlic into the meat.", amt: "1 onion", local: true }
    ],
    steps: [
      { b: "Mix patties", t: "Combine beef, breadcrumbs, one egg, grated garlic, salt, and pepper; form 4 oval patties without packing them tight." },
      { b: "Sear", t: "Brown patties in a hot skillet 3 minutes a side to build fond, then set them aside; they finish in the gravy." },
      { b: "Brown mushrooms", t: "In the same pan cook mushrooms and onion until deeply browned and the moisture cooks off, 8 minutes." },
      { b: "Build gravy", t: "Stir in 2 tbsp flour, cook 1 minute, then whisk in broth and simmer to a spoon-coating gravy." },
      { b: "Finish", t: "Nestle patties back in, cover, and simmer 10 minutes to 160F internal, spooning gravy over the top." }
    ],
    tools: ["Wide skillet|stainless skillet 12 inch", "Whisk|balloon whisk stainless", "Fish spatula|fish spatula stainless"]
  },
  {
    slug: "chicken-fried-steak",
    title: "Chicken-Fried Steak, and where to source it",
    cuisine: "American",
    category: "Main",
    kw: "chicken fried steak, country fried steak, cube steak gravy",
    iso: ["PT20M", "PT20M", "PT40M"],
    prep: "20 min",
    cook: "20 min",
    makes: "4 servings",
    desc: "Tenderized beef cutlets fried crisp and served under a peppery milk gravy.",
    dek: "A well-raised cube steak and real whole milk make a gravy that tastes like more than flour and pepper. Coat each cutlet in flour, dip it in egg, then dredge it a second time for a double crust. That double coat is what stays glued to the meat once it hits the oil.",
    card: "Crisp-fried beef cutlets under a peppery real-milk gravy.",
    ing: [
      { n: "Cube steak or tenderized round", q: "A grass-fed round pounded thin fries up tender and quick.", amt: "1.5 lb", shelf: "regenerative-meat" },
      { n: "All-purpose flour", q: "Good flour builds the crust and thickens the gravy.", amt: "2 cups", shelf: "baking-flour" },
      { n: "Whole milk", q: "Whole milk makes a gravy rich enough to stand on its own.", amt: "2.5 cups", shelf: "milk" },
      { n: "Eggs", q: "Real eggs in the wash glue the crust to the meat.", amt: "2", shelf: "eggs" }
    ],
    steps: [
      { b: "Set up the dredge", t: "Season the flour heavily with salt and black pepper; beat eggs with a splash of milk in a second dish." },
      { b: "Double coat", t: "Press each cutlet in flour, dip in egg, then flour again, pressing so the coat clings." },
      { b: "Fry", t: "Fry in half an inch of oil at 350F for 3 minutes a side until golden and 145F internal; drain on a rack." },
      { b: "Make gravy", t: "Pour off all but 3 tbsp of drippings, whisk in 3 tbsp flour, cook 1 minute, then whisk in the milk and simmer to a thick, peppery gravy." },
      { b: "Serve", t: "Ladle gravy over the steak just before serving so the crust stays crisp underneath." }
    ],
    tools: ["Cast iron skillet|cast iron skillet 12 inch", "Meat mallet|meat tenderizer mallet", "Whisk|balloon whisk stainless"]
  },
  {
    slug: "jambalaya",
    title: "Jambalaya, and where to source it",
    cuisine: "Cajun",
    category: "Main",
    kw: "jambalaya, cajun jambalaya, andouille jambalaya, one pot rice",
    iso: ["PT25M", "PT45M", "PT70M"],
    prep: "25 min",
    cook: "45 min",
    makes: "6 servings",
    desc: "A one-pot Cajun rice cooked with andouille, chicken, and tomatoes.",
    dek: "Real andouille and a good long-grain rice separate jambalaya from plain spiced rice. First build a browned bottom on the sausage and chicken, then leave the rice alone once the liquid goes in so it steams evenly. Stir it and you get gummy pockets instead of distinct grains.",
    card: "One-pot Cajun rice built on real andouille and browned meat.",
    ing: [
      { n: "Andouille sausage", q: "A real smoked andouille sets the whole flavor; skip the mild grocery links.", amt: "1 lb", shelf: "sausage" },
      { n: "Chicken thighs", q: "Thigh meat stays tender through the simmer.", amt: "1 lb", shelf: "regenerative-meat" },
      { n: "Long-grain rice", q: "A good long-grain rice cooks up separate, not gummy.", amt: "2 cups", shelf: "rice" },
      { n: "Canned tomatoes", q: "Real whole tomatoes crushed by hand beat watery diced cans.", amt: "1 can", shelf: "canned-tomatoes" },
      { n: "Cajun spice blend", q: "A fresh paprika-heavy blend is the backbone of the pot.", amt: "3 tbsp", shelf: "spices" },
      { n: "Onion, celery, bell pepper", q: "The Cajun trinity; dice it all before you start.", amt: "3 cups total", local: true }
    ],
    steps: [
      { b: "Brown the meat", t: "Sear sliced andouille and cubed chicken in a Dutch oven until browned and stuck to the bottom, 8 minutes." },
      { b: "Cook the trinity", t: "Add onion, celery, and pepper; cook 6 minutes, scraping up the browned bits as they release moisture." },
      { b: "Toast the rice", t: "Stir in the spices and rice and toast 2 minutes until the grains turn translucent at the edges." },
      { b: "Simmer", t: "Add tomatoes and 3 cups broth or water, bring to a boil, cover, and cook on low 22-25 minutes without stirring." },
      { b: "Rest", t: "Kill the heat and let it sit covered 10 minutes, then fluff with a fork." }
    ],
    tools: ["Dutch oven|enameled dutch oven 6 quart", "Wooden spoon|wooden cooking spoon", "Chef knife|chef knife 8 inch"]
  },
  {
    slug: "smash-burger",
    title: "Smash Burger, and where to source it",
    cuisine: "American",
    category: "Main",
    kw: "smash burger, smashed cheeseburger, diner burger",
    iso: ["PT15M", "PT10M", "PT25M"],
    prep: "15 min",
    cook: "10 min",
    makes: "4 servings",
    desc: "Thin beef patties smashed hard on a hot griddle for a lacy crust, with melted cheese and pickles.",
    dek: "A fresh grass-fed grind and real cheese make a burger where the crust does the talking, not the toppings. Smash each ball flat within thirty seconds of it hitting the screaming-hot steel, then leave it be until the edges lace and crisp. Moving it early tears off the crust you are after.",
    card: "Beef balls smashed hard on hot steel, cheese, pickles, done.",
    ing: [
      { n: "Ground beef, 80/20", q: "A fresh, fatty grass-fed grind gives the crust and the beef flavor.", amt: "1.5 lb", shelf: "regenerative-meat" },
      { n: "Cheese slices", q: "A real melting cheese, cut thin, blankets the patty as it sets.", amt: "8 slices", shelf: "cheese" },
      { n: "Burger buns", q: "A soft real-bread bun, toasted in the beef fat, holds up without going soggy.", amt: "4 buns", shelf: "bread" },
      { n: "Dill pickles", q: "Real crunchy dill pickles cut the fat; skip the limp ones.", amt: "for topping", shelf: "pickles" },
      { n: "Onion, thin-sliced", q: "Optional smashed into the patty diner-style.", amt: "half an onion", local: true }
    ],
    steps: [
      { b: "Roll the balls", t: "Divide beef into 8 loose 3 oz balls; do not pack them, and keep them cold until the griddle is ripping hot." },
      { b: "Heat the steel", t: "Get a cast iron or griddle screaming hot over high, 3-4 minutes, with a thin film of oil." },
      { b: "Smash", t: "Set a ball down, smash flat with a stiff spatula for 10 seconds, salt it, and leave it until the edges lace and darken, about 2 minutes." },
      { b: "Flip and melt", t: "Scrape up with the crust intact, flip, top with cheese, and cook 1 more minute to 155F internal." },
      { b: "Stack", t: "Toast the buns in the fat, then double-stack two patties with pickles on a bun." }
    ],
    tools: ["Cast iron griddle|cast iron flat griddle", "Stiff spatula|smash burger spatula", "Bench scraper|metal bench scraper"]
  },
  {
    slug: "corn-dogs",
    title: "Corn Dogs, and where to source it",
    cuisine: "American",
    category: "Appetizer",
    kw: "corn dogs, cornmeal battered hot dogs, fair food",
    iso: ["PT20M", "PT15M", "PT35M"],
    prep: "20 min",
    cook: "15 min",
    makes: "8 corn dogs",
    desc: "Real hot dogs dipped in a cornmeal batter and deep-fried on sticks.",
    dek: "A good natural-casing sausage and real eggs and milk make a batter that fries up crisp and tastes like food instead of the freezer aisle. Pat the dogs dry and dust them in flour before the batter goes on. The flour gives the coating something to grip so it does not slide off in the oil.",
    card: "Real sausages in a cornmeal batter, fried crisp on a stick.",
    ing: [
      { n: "Hot dogs or frankfurters", q: "A real natural-casing sausage snaps and tastes like meat under the batter.", amt: "8 links", shelf: "sausage" },
      { n: "All-purpose flour", q: "Half the batter and the dusting coat that grips the dogs.", amt: "1 cup", shelf: "baking-flour" },
      { n: "Egg", q: "A real egg binds the batter so it clings to the stick.", amt: "1", shelf: "eggs" },
      { n: "Whole milk or buttermilk", q: "Milk thins the batter to a coat that clings without dripping off.", amt: "1 cup", shelf: "milk" },
      { n: "Cornmeal", q: "A stone-ground cornmeal gives the crust its crunch and corn flavor.", amt: "1 cup", local: true }
    ],
    steps: [
      { b: "Make the batter", t: "Whisk cornmeal, flour, egg, milk, 2 tsp sugar, 2 tsp baking powder, and salt into a thick batter and pour it into a tall glass." },
      { b: "Prep the dogs", t: "Pat dogs bone dry, skewer each on a stick, and roll in a little flour so the batter grips." },
      { b: "Heat oil", t: "Bring 3 inches of oil to 350F in a deep pot; hold it steady with a thermometer." },
      { b: "Dip and fry", t: "Dunk each dog in the glass to coat, then fry 3-4 minutes, rolling, until deep golden and 165F internal." },
      { b: "Drain", t: "Drain on a rack a minute before serving so the crust sets crisp." }
    ],
    tools: ["Deep pot|dutch oven 6 quart", "Frying thermometer|deep fry thermometer clip", "Wooden skewers|corn dog sticks wooden"]
  }
];

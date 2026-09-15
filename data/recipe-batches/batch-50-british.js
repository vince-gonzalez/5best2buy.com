module.exports = [
  {
    slug:"cottage-pie",
    title:"Cottage Pie, and where to source it",
    cuisine:"British",
    category:"Main",
    kw:"cottage pie, shepherds pie, beef mince pie, mashed potato pie, british comfort food",
    iso:["PT25M","PT40M","PT65M"],
    prep:"25 min", cook:"40 min", makes:"6 servings",
    desc:"Braised beef mince under a browned mashed-potato crust, baked until the edges bubble.",
    dek:"Cottage pie is beef and potatoes, so both carry the whole dish and cheap versions taste like it. The filling needs to cook down until the gravy clings rather than pools, or the mash sinks into a swamp.",
    card:"Savory beef mince capped with mash and forked into ridges that crisp in the oven.",
    ing:[
      { n:"Ground beef", q:"An 80/20 chuck gives the fat that makes the gravy taste of beef instead of flour.", amt:"1.5 lb", shelf:"regenerative-meat" },
      { n:"Potatoes", q:"Starchy russets or Maris Pipers mash smooth and hold their ridges under the broiler.", amt:"2 lb", shelf:"potatoes" },
      { n:"Butter", q:"Beaten into the hot mash for a topping that browns; do not skimp.", amt:"4 tbsp", shelf:"butter" },
      { n:"Milk", q:"Warmed and worked in until the mash is spreadable but still stiff.", amt:"1/2 cup", shelf:"milk" },
      { n:"Tomato paste", q:"A spoonful deepens the gravy and adds the savory backbone.", amt:"2 tbsp", shelf:"canned-tomatoes" },
      { n:"Beef bone broth", q:"The braising liquid; a real stock gives body a bouillon cube cannot.", amt:"1.5 cups", shelf:"bone-broth" },
      { n:"Onion and carrot", q:"Diced fine and softened first, they build the sweet base of the filling.", amt:"1 each", local:true }
    ],
    steps:[
      { b:"Brown the meat", t:"Cook the mince over high heat until it is deeply browned and the fat renders, breaking it into small crumbs." },
      { b:"Build the gravy", t:"Soften onion and carrot, stir in tomato paste and a spoon of flour, then add broth and simmer 15 minutes until it thickens and coats a spoon." },
      { b:"Mash", t:"Boil the potatoes until a knife slides through, then mash with butter and warm milk until smooth and stiff." },
      { b:"Top and bake", t:"Spread the mash over the filling, fork the surface into ridges, and bake at 400F for 30 minutes until the peaks brown." }
    ],
    tools:["Large skillet|12 inch cast iron skillet","Potato masher|stainless potato masher","Baking dish|9x13 ceramic baking dish","Wooden spoon|wooden cooking spoon set","Fine grater|microplane grater"]
  },
  {
    slug:"bangers-and-mash",
    title:"Bangers and Mash, and where to source it",
    cuisine:"British",
    category:"Main",
    kw:"bangers and mash, sausage and mash, onion gravy, british pub food, sausages mashed potato",
    iso:["PT15M","PT30M","PT45M"],
    prep:"15 min", cook:"30 min", makes:"4 servings",
    desc:"Browned pork sausages over buttery mash, blanketed in a slow onion gravy.",
    dek:"This is three simple things done right: good sausages, real mash, and an onion gravy cooked long enough to go sweet. Rush the onions and the gravy stays sharp and thin; give them 20 minutes and they turn to jam.",
    card:"Plump sausages, a mound of mash, and dark onion gravy poured over the lot.",
    ing:[
      { n:"Pork sausages", q:"Coarse butcher's bangers with real casings snap when you bite them; the cheap ones weep water.", amt:"8 links", shelf:"sausage" },
      { n:"Potatoes", q:"Russets or Yukons mash into the pillowy pile the gravy pools in.", amt:"2 lb", shelf:"potatoes" },
      { n:"Butter", q:"Half in the mash, a knob in the gravy for gloss.", amt:"5 tbsp", shelf:"butter" },
      { n:"Milk", q:"Warmed into the mash so it stays loose and does not tighten as it cools.", amt:"1/2 cup", shelf:"milk" },
      { n:"Beef bone broth", q:"The base of the gravy; a good stock means you can skip the gravy granules.", amt:"2 cups", shelf:"bone-broth" },
      { n:"Onions", q:"Sliced thin and cooked slow until deep brown, they are the whole point of the gravy.", amt:"2 large", local:true }
    ],
    steps:[
      { b:"Brown sausages", t:"Fry the sausages over medium heat, turning, for about 15 minutes until browned all over and cooked to 160F; set aside." },
      { b:"Caramelize onions", t:"In the same pan, cook the sliced onions with a pinch of salt over medium-low for 20 minutes until they are soft and dark brown." },
      { b:"Make gravy", t:"Stir a spoon of flour into the onions, then pour in broth and simmer until it thickens to a pourable gravy." },
      { b:"Mash and plate", t:"Mash the boiled potatoes with butter and warm milk, pile onto plates, top with sausages, and flood with gravy." }
    ],
    tools:["Large skillet|12 inch stainless skillet","Potato masher|stainless potato masher","Saucepan|3 quart saucepan","Wooden spoon|wooden cooking spoon set","Instant thermometer|instant read thermometer"]
  },
  {
    slug:"toad-in-the-hole",
    title:"Toad in the Hole, and where to source it",
    cuisine:"British",
    category:"Main",
    kw:"toad in the hole, sausages yorkshire pudding, batter sausages, british batter bake, onion gravy",
    iso:["PT15M","PT35M","PT50M"],
    prep:"15 min", cook:"35 min", makes:"4 servings",
    desc:"Sausages baked in a Yorkshire-pudding batter that puffs tall around them.",
    dek:"The batter is just eggs, flour, and milk, so it stands or falls on getting the fat smoking hot before the batter hits it. A cold pan gives you a dense pancake; a screaming-hot one gives you the dramatic golden puff.",
    card:"Sausages set in a batter that rises up crisp and hollow around them.",
    ing:[
      { n:"Pork sausages", q:"Full-fat bangers render enough grease to help the batter climb; lean sausages leave it flat.", amt:"8 links", shelf:"sausage" },
      { n:"Flour", q:"Plain flour whisked into the batter builds the walls that puff.", amt:"1 cup", shelf:"baking-flour" },
      { n:"Eggs", q:"Three eggs give the lift and the golden color.", amt:"3", local:true },
      { n:"Milk", q:"Whole milk loosens the batter to heavy cream; rest it so the flour hydrates.", amt:"1 cup", shelf:"milk" },
      { n:"Lard or beef drippings", q:"A high-smoke-point fat heated until it smokes is what makes the batter leap.", amt:"3 tbsp", shelf:"lard" }
    ],
    steps:[
      { b:"Rest the batter", t:"Whisk flour, eggs, milk, and salt to a smooth cream and rest at least 30 minutes at room temperature." },
      { b:"Heat the fat", t:"Add fat to a metal roasting dish and heat at 425F for 10 minutes until it is smoking hot; brown the sausages in it." },
      { b:"Pour and bake", t:"Pour the rested batter around the sausages all at once and slam the door shut to trap the heat." },
      { b:"Do not peek", t:"Bake 25 to 30 minutes without opening the oven until the batter is tall, crisp, and deep gold." }
    ],
    tools:["Metal roasting dish|steel roasting pan","Mixing bowl|large mixing bowl","Balloon whisk|stainless balloon whisk","Measuring jug|glass measuring jug","Oven mitts|heat resistant oven mitts"]
  },
  {
    slug:"scotch-egg",
    title:"Scotch Eggs, and where to source it",
    cuisine:"British",
    category:"Appetizer",
    kw:"scotch egg, sausage wrapped egg, picnic egg, breaded egg, british pub snack",
    iso:["PT30M","PT10M","PT40M"],
    prep:"30 min", cook:"10 min", makes:"6 eggs",
    desc:"Soft-boiled eggs wrapped in sausage, breaded, and fried until the yolk stays jammy.",
    dek:"The whole trick is timing the egg so the yolk is still soft after it takes a second cooking inside the sausage. Boil for exactly six minutes and shock in ice water, or you get the chalky gray center that ruins them.",
    card:"A jammy yolk inside soft-boiled egg, sausage, and a crackly fried crust.",
    ing:[
      { n:"Eggs", q:"Six for wrapping plus two for the breading dip; fresh eggs peel cleaner after the ice bath.", amt:"8", local:true },
      { n:"Pork sausage", q:"Seasoned bulk sausage is the wrapping; squeeze it around the egg with no gaps.", amt:"1 lb", shelf:"sausage" },
      { n:"Flour", q:"The first dry coat that helps the egg wash grab.", amt:"1/2 cup", shelf:"baking-flour" },
      { n:"Breadcrumbs", q:"Panko or dry crumbs give the loud crunch; roll firmly to coat.", amt:"1.5 cups", shelf:"bread" },
      { n:"Mustard", q:"A spoon worked into the sausage and served alongside for dipping.", amt:"2 tbsp", shelf:"mustard" }
    ],
    steps:[
      { b:"Soft-boil", t:"Boil six eggs for exactly 6 minutes, then plunge into ice water and peel carefully." },
      { b:"Wrap", t:"Flatten a portion of sausage in your palm, set an egg in the center, and mold the meat around it in an even layer." },
      { b:"Bread", t:"Roll each in flour, then beaten egg, then breadcrumbs, pressing so the crust holds." },
      { b:"Fry", t:"Deep-fry at 340F for about 7 minutes until the sausage is cooked through and the crust is deep gold." }
    ],
    tools:["Heavy pot|dutch oven for frying","Spider strainer|spider skimmer strainer","Instant thermometer|instant read thermometer oil","Slotted spoon|stainless slotted spoon","Wire rack|stainless cooling rack"]
  },
  {
    slug:"cornish-pasty",
    title:"Cornish Pasty, and where to source it",
    cuisine:"British",
    category:"Main",
    kw:"cornish pasty, beef pasty, hand pie, crimped pastry, miners lunch",
    iso:["PT40M","PT50M","PT90M"],
    prep:"40 min", cook:"50 min", makes:"6 pasties",
    desc:"Raw diced beef, potato, and swede folded into shortcrust and baked into a crimped hand pie.",
    dek:"A real pasty uses raw filling that steams inside the sealed pastry, so the beef and vegetables must be cut small and even to cook through in the time the crust takes. Use a sturdy shortcrust with cold fat, or the seam splits and the juices run out.",
    card:"A crimped crescent of pastry packed with beef, potato, and swede.",
    ing:[
      { n:"Beef skirt or chuck", q:"Diced small and left raw, it renders its juice into the vegetables as it bakes.", amt:"12 oz", shelf:"regenerative-meat" },
      { n:"Flour", q:"Strong bread flour makes a pastry sturdy enough to hold the filling and survive handling.", amt:"3.5 cups", shelf:"baking-flour" },
      { n:"Butter and lard", q:"A mix of cold fats keeps the crust flaky yet strong; cut it in cold.", amt:"6 oz total", shelf:"butter" },
      { n:"Potatoes", q:"Cut in small dice so they cook in the sealed pastry; they hold the filling together.", amt:"12 oz", shelf:"potatoes" },
      { n:"Swede and onion", q:"Diced turnip-swede and onion are the traditional partners to the beef and potato.", amt:"8 oz", local:true }
    ],
    steps:[
      { b:"Make the pastry", t:"Rub cold fats into flour and salt, add just enough cold water to bind, and rest the dough 30 minutes in the fridge." },
      { b:"Fill", t:"Roll circles, layer raw beef, potato, swede, and onion on one half, and season each layer well." },
      { b:"Crimp", t:"Fold over, press out the air, and crimp the seam into a rope along the top edge to seal it fully." },
      { b:"Bake", t:"Bake at 400F for 15 minutes, then drop to 350F for 35 more until deep gold and the filling is tender." }
    ],
    tools:["Rolling pin|wooden rolling pin","Pastry cutter|dough pastry blender","Baking sheet|rimmed baking sheet","Pastry brush|silicone pastry brush","Bench scraper|stainless bench scraper"]
  },
  {
    slug:"welsh-rarebit",
    title:"Welsh Rarebit, and where to source it",
    cuisine:"British",
    category:"Main",
    kw:"welsh rarebit, cheese on toast, cheddar sauce toast, welsh rabbit, savory cheese toast",
    iso:["PT10M","PT10M","PT20M"],
    prep:"10 min", cook:"10 min", makes:"4 servings",
    desc:"A thick sharp-cheddar sauce cut with mustard and ale, spread on toast and grilled.",
    dek:"This is not cheese on toast; it is a cooked sauce that must be thick enough to hold its shape when it hits the broiler. Melt the cheddar low and steady with the ale and mustard so it stays smooth instead of splitting into a greasy pool.",
    card:"A tangy molten cheddar sauce broiled onto toast until it blisters.",
    ing:[
      { n:"Sharp cheddar", q:"A mature cheddar with real bite is the whole flavor; mild cheese makes a bland sauce.", amt:"8 oz", shelf:"cheese" },
      { n:"Bread", q:"Thick slices of a sturdy loaf, toasted first so they hold the heavy sauce.", amt:"4 slices", shelf:"bread" },
      { n:"Mustard", q:"English mustard gives the sharp heat that cuts the richness.", amt:"1 tbsp", shelf:"mustard" },
      { n:"Butter", q:"Cooked with a little flour into a roux that keeps the sauce from splitting.", amt:"1 tbsp", shelf:"butter" },
      { n:"Brown ale", q:"A splash of dark ale loosens the sauce and adds a bitter malt note.", amt:"1/4 cup", local:true }
    ],
    steps:[
      { b:"Start a roux", t:"Melt butter, stir in a spoon of flour, and cook one minute to lose the raw taste." },
      { b:"Build the sauce", t:"Whisk in the ale, then melt the grated cheddar and mustard over low heat into a thick, glossy paste." },
      { b:"Toast the bread", t:"Toast the slices on both sides so the base is crisp and will not go soggy." },
      { b:"Broil", t:"Spread the sauce thick to the edges and broil until it bubbles and browns in spots, about 3 minutes." }
    ],
    tools:["Saucepan|2 quart saucepan","Box grater|stainless box grater","Whisk|small stainless whisk","Sheet pan|rimmed baking sheet","Offset spatula|small offset spatula"]
  },
  {
    slug:"victoria-sponge",
    title:"Victoria Sponge, and where to source it",
    cuisine:"British",
    category:"Dessert",
    kw:"victoria sponge, victoria sandwich, jam sponge cake, british layer cake, tea cake",
    iso:["PT20M","PT25M","PT45M"],
    prep:"20 min", cook:"25 min", makes:"8 slices",
    desc:"Two light butter-sponge layers sandwiched with jam and softly whipped cream.",
    dek:"A Victoria sponge is a plain cake, so weigh the eggs and match butter, sugar, and flour to that weight for a reliable crumb. Cream the butter and sugar until pale and fluffy, which is the only air the cake gets before the flour goes in.",
    card:"Two golden sponge layers holding a seam of jam and cream.",
    ing:[
      { n:"Butter", q:"Room-temperature butter creams to a pale fluff that lifts the cake; cold butter will not.", amt:"1 cup", shelf:"butter" },
      { n:"Sugar", q:"Caster or fine sugar dissolves fast into the butter for an even crumb.", amt:"1 cup", shelf:"unrefined-sugar" },
      { n:"Flour", q:"Self-raising or plain with baking powder gives the tender rise.", amt:"2 cups", shelf:"baking-flour" },
      { n:"Eggs", q:"Four eggs, added one at a time so the batter does not curdle.", amt:"4", local:true },
      { n:"Raspberry jam", q:"A good seedy jam is the classic filling and carries most of the flavor.", amt:"1/2 cup", shelf:"jam" },
      { n:"Cream", q:"Whipped to soft peaks and layered over the jam.", amt:"1 cup", local:true }
    ],
    steps:[
      { b:"Cream", t:"Beat butter and sugar 4 to 5 minutes until pale and fluffy, scraping down the bowl." },
      { b:"Add eggs", t:"Beat in eggs one at a time, adding a spoon of flour with the last to keep the batter from splitting." },
      { b:"Fold and bake", t:"Fold in the remaining flour, divide between two tins, and bake at 350F for 25 minutes until a skewer comes out clean." },
      { b:"Fill", t:"Cool completely, spread jam on one layer and whipped cream over it, and sandwich the second on top." }
    ],
    tools:["Two round tins|8 inch cake pans set","Stand mixer|stand mixer with paddle","Cooling rack|wire cooling rack","Offset spatula|offset icing spatula","Kitchen scale|digital kitchen scale"]
  },
  {
    slug:"eton-mess",
    title:"Eton Mess, and where to source it",
    cuisine:"British",
    category:"Dessert",
    kw:"eton mess, meringue strawberries cream, crushed meringue dessert, summer berry dessert, british pudding",
    iso:["PT15M","PT0M","PT15M"],
    prep:"15 min", cook:"0 min", makes:"4 servings",
    desc:"Crushed meringue folded through whipped cream and crushed strawberries.",
    dek:"Eton mess is assembly, not cooking, so every part must be good on its own: crisp meringue, real cream, and ripe fruit. Fold it together at the last minute so the meringue keeps some crunch instead of dissolving into paste.",
    card:"Broken meringue, whipped cream, and berries tumbled together in a glass.",
    ing:[
      { n:"Cream", q:"Heavy cream whipped to soft peaks is the body of the dish; do not overwhip to butter.", amt:"1.5 cups", local:true },
      { n:"Strawberries", q:"Ripe berries, half crushed for sauce and half sliced for bite.", amt:"1 lb", local:true },
      { n:"Sugar", q:"A spoonful tossed with the crushed berries draws out their juice.", amt:"2 tbsp", shelf:"unrefined-sugar" },
      { n:"Strawberry jam", q:"A spoonful rippled through loosens the crushed fruit and deepens the berry flavor.", amt:"2 tbsp", shelf:"jam" },
      { n:"Eggs", q:"Whites whipped with sugar and baked low make the meringue, if you make your own.", amt:"3 whites", local:true },
      { n:"Vanilla", q:"A drop folded into the cream rounds it out.", amt:"1 tsp", shelf:"spices" }
    ],
    steps:[
      { b:"Macerate", t:"Crush half the strawberries with sugar and let them sit 15 minutes until syrupy." },
      { b:"Whip", t:"Whip the cream with vanilla to soft peaks that just hold their shape." },
      { b:"Break meringue", t:"Snap the meringue into rough shards, keeping a few larger pieces for texture." },
      { b:"Fold and serve", t:"Fold cream, meringue, sliced berries, and the syrup together loosely and spoon into glasses right away." }
    ],
    tools:["Mixing bowl|large glass mixing bowl","Electric whisk|handheld electric mixer","Serving glasses|dessert coupe glasses","Rubber spatula|silicone spatula","Fork|stainless dinner forks"]
  },
  {
    slug:"irish-stew",
    title:"Irish Stew, and where to source it",
    cuisine:"Irish",
    category:"Soup",
    kw:"irish stew, lamb stew, mutton potato stew, one pot lamb, irish comfort food",
    iso:["PT20M","PT120M","PT140M"],
    prep:"20 min", cook:"2 hr", makes:"6 servings",
    desc:"Lamb, potatoes, and onions simmered slowly into a plain, deeply savory broth.",
    dek:"Traditional Irish stew has few ingredients, so the lamb has to be good and the cooking slow enough to break it down. Half the potatoes go in early to melt and thicken the broth, half go in late to stay whole.",
    card:"Fall-apart lamb and potatoes in a clean, long-simmered broth.",
    ing:[
      { n:"Lamb shoulder or neck", q:"Bone-in, well-marbled cuts give the collagen that makes the broth silky.", amt:"2.5 lb", shelf:"regenerative-meat" },
      { n:"Potatoes", q:"Some cut small to dissolve and thicken, some in chunks to hold their shape.", amt:"2.5 lb", shelf:"potatoes" },
      { n:"Beef or lamb broth", q:"A real stock deepens what is otherwise a very plain pot.", amt:"5 cups", shelf:"bone-broth" },
      { n:"Onions", q:"Sliced thick, they melt into the broth over the long simmer.", amt:"2 large", local:true },
      { n:"Carrots", q:"Cut in rounds for sweetness and color against the pale broth.", amt:"3", local:true }
    ],
    steps:[
      { b:"Brown the lamb", t:"Sear the lamb pieces in batches until browned, then set aside to build flavor in the fond." },
      { b:"Layer", t:"Layer onions, half the potatoes, carrots, and lamb in the pot and pour in the broth to barely cover." },
      { b:"Simmer low", t:"Cover and simmer gently for 90 minutes until the lamb is nearly falling off the bone." },
      { b:"Finish potatoes", t:"Add the reserved potato chunks and cook 30 minutes more until tender and the broth has thickened." }
    ],
    tools:["Dutch oven|enameled dutch oven","Ladle|stainless soup ladle","Cutting board|large cutting board","Chef knife|8 inch chef knife","Wooden spoon|wooden cooking spoon"]
  },
  {
    slug:"colcannon",
    title:"Colcannon, and where to source it",
    cuisine:"Irish",
    category:"Side",
    kw:"colcannon, irish mashed potatoes, potato kale, cabbage mash, irish side dish",
    iso:["PT15M","PT25M","PT40M"],
    prep:"15 min", cook:"25 min", makes:"6 servings",
    desc:"Mashed potatoes folded with wilted kale or cabbage and finished with butter.",
    dek:"Colcannon is mash with greens, so the potatoes must be dry and fluffy or the whole thing goes gluey. Cook the cabbage or kale just until it collapses so it stays green, and pour a well of melted butter in the center to serve.",
    card:"Fluffy mash shot through with green cabbage and a pool of butter.",
    ing:[
      { n:"Potatoes", q:"Floury russets mash light and absorb the butter; waxy ones turn sticky.", amt:"2.5 lb", shelf:"potatoes" },
      { n:"Butter", q:"Generous butter in the mash plus a melted well on top; this is where the flavor lives.", amt:"6 tbsp", shelf:"butter" },
      { n:"Milk", q:"Warmed and worked in a little at a time to loosen the mash.", amt:"1/2 cup", shelf:"milk" },
      { n:"Kale or cabbage", q:"Shredded and wilted in butter until tender but still bright green.", amt:"4 cups", local:true },
      { n:"Scallions", q:"The white and green sliced thin and softened for a mild onion note.", amt:"4", local:true }
    ],
    steps:[
      { b:"Boil potatoes", t:"Boil the peeled potatoes until a knife slides through easily, then drain and dry over low heat." },
      { b:"Wilt greens", t:"Cook the shredded cabbage or kale and scallions in butter until just tender, 5 to 7 minutes." },
      { b:"Mash", t:"Mash the dry potatoes with warm milk and butter until fluffy, then fold in the greens." },
      { b:"Serve", t:"Pile into a bowl, make a well in the center, and fill it with more melted butter." }
    ],
    tools:["Potato masher|stainless potato masher","Large pot|8 quart stockpot","Skillet|10 inch skillet","Colander|stainless colander","Wooden spoon|wooden cooking spoon"]
  },
  {
    slug:"soda-bread",
    title:"Irish Soda Bread, and where to source it",
    cuisine:"Irish",
    category:"Side",
    kw:"irish soda bread, quick bread, buttermilk bread, no yeast bread, soda farl",
    iso:["PT10M","PT45M","PT55M"],
    prep:"10 min", cook:"45 min", makes:"1 loaf",
    desc:"A rustic buttermilk loaf leavened with baking soda and baked with a cross cut in the top.",
    dek:"Soda bread needs no yeast, so the acid in the buttermilk and the baking soda do all the lifting and you must bake it right after mixing. Handle the dough as little as possible; overworking develops gluten and turns a tender loaf tough.",
    card:"A dense buttermilk loaf with a crackly crust and a slashed cross on top.",
    ing:[
      { n:"Flour", q:"A mix of white and wholemeal gives the classic rough crumb; all-white works too.", amt:"4 cups", shelf:"baking-flour" },
      { n:"Buttermilk", q:"The acid reacts with the soda to leaven the loaf; do not substitute plain milk.", amt:"1.75 cups", shelf:"milk" },
      { n:"Butter", q:"A little rubbed in enriches the crumb; the traditional plain loaf uses none.", amt:"2 tbsp", shelf:"butter" },
      { n:"Raisins", q:"Optional in the sweeter version, folded through for a spotted loaf.", amt:"1/2 cup", shelf:"dried-fruit" },
      { n:"Baking soda", q:"The whole rise depends on it; sift it in with the flour and salt.", amt:"1 tsp", local:true }
    ],
    steps:[
      { b:"Mix dry", t:"Whisk flour, baking soda, and salt, then rub in the butter until it disappears." },
      { b:"Bring together", t:"Pour in the buttermilk and stir just until a shaggy dough forms; do not knead." },
      { b:"Shape and cut", t:"Pat into a round on a floured sheet and cut a deep cross in the top to let it open as it bakes." },
      { b:"Bake", t:"Bake at 425F for 15 minutes, drop to 400F for 30 more, until it sounds hollow when tapped underneath." }
    ],
    tools:["Baking sheet|rimmed baking sheet","Mixing bowl|large mixing bowl","Bench scraper|stainless bench scraper","Sharp knife|serrated bread knife","Cooling rack|wire cooling rack"]
  },
  {
    slug:"bread-and-butter-pudding",
    title:"Bread and Butter Pudding, and where to source it",
    cuisine:"British",
    category:"Dessert",
    kw:"bread and butter pudding, custard bread pudding, baked bread dessert, british pudding, stale bread pudding",
    iso:["PT15M","PT45M","PT60M"],
    prep:"15 min", cook:"45 min", makes:"6 servings",
    desc:"Buttered bread layered with dried fruit and baked in a vanilla egg custard.",
    dek:"This turns stale bread into something worth eating, so the custard has to be rich and the bread left to soak it up before baking. Let the dish sit 20 minutes so the bread drinks the custard, or the top browns while the middle stays dry.",
    card:"Golden buttered bread set in a soft vanilla custard studded with raisins.",
    ing:[
      { n:"Bread", q:"Day-old white bread or brioche soaks up the custard without turning to mush.", amt:"8 slices", shelf:"bread" },
      { n:"Butter", q:"Spread on every slice; it is what crisps the exposed edges in the oven.", amt:"4 tbsp", shelf:"butter" },
      { n:"Eggs", q:"The custard base; whisk whole eggs with the sugar until smooth.", amt:"4", local:true },
      { n:"Milk and cream", q:"A mix of both makes a custard rich enough to carry the dish.", amt:"2.5 cups", shelf:"milk" },
      { n:"Sugar", q:"Sweetens the custard and a sprinkle on top helps the surface caramelize.", amt:"1/2 cup", shelf:"unrefined-sugar" },
      { n:"Raisins", q:"Scattered between the layers, they plump in the custard as it bakes.", amt:"1/2 cup", shelf:"dried-fruit" }
    ],
    steps:[
      { b:"Butter and layer", t:"Butter the bread, cut into triangles, and layer in a dish with raisins scattered between." },
      { b:"Make custard", t:"Whisk eggs, sugar, and a splash of vanilla, then whisk in the warmed milk and cream." },
      { b:"Soak", t:"Pour the custard over the bread and let it stand 20 minutes so the bread soaks it up." },
      { b:"Bake", t:"Sprinkle sugar on top and bake at 350F for 45 minutes until set with a golden, puffed top." }
    ],
    tools:["Baking dish|9x13 ceramic baking dish","Mixing bowl|large mixing bowl","Whisk|stainless balloon whisk","Saucepan|2 quart saucepan","Butter knife|butter spreader knife"]
  }
];

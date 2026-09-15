module.exports = [
  {
    slug:"cherry-pie",
    title:"Cherry Pie, and where to source it",
    cuisine:"American",
    category:"Dessert",
    kw:"cherry pie, sour cherry pie, lattice pie, double crust pie, tart cherry filling",
    iso:["PT40M","PT55M","PT1H35M"],
    prep:"40 min", cook:"55 min", makes:"one 9-inch pie",
    desc:"A double-crust cherry pie with tart cherries thickened to a glossy, sliceable gel under a vented lattice.",
    dek:"Sour cherries are what make this pie; sweet ones bake out flat, so tart fruit and real sugar carry it. Cook the filling with cornstarch on the stove until it visibly thickens before it ever reaches the shell. That step is the difference between clean slices and a soupy bottom.",
    card:"Tart cherries cooked to a glossy gel under a vented lattice, cut clean.",
    ing:[
      { n:"Sour cherries", q:"Tart cherries hold their shape and acidity through baking; sweet ones turn to mush.", amt:"5 cups pitted", local:true },
      { n:"Cornstarch", q:"Thickens the released juice into a gel that slices instead of running.", amt:"1/4 cup", local:true },
      { n:"Unrefined sugar", q:"Balances the tartness without burying the fruit; adjust to how sour the cherries are.", amt:"1 cup", shelf:"unrefined-sugar" },
      { n:"Baking flour", q:"A low-protein flour keeps the crust tender rather than tough.", amt:"2 1/2 cups", shelf:"baking-flour" },
      { n:"Butter", q:"Cold butter cut into the flour makes the flaky layers; it has to stay cold.", amt:"1 cup", shelf:"butter" },
      { n:"Egg", q:"Beaten for the wash that browns and gilds the lattice.", amt:"1", shelf:"eggs" }
    ],
    steps:[
      { b:"Make the dough", t:"Cut cold butter into flour and a pinch of salt until pea-sized, add ice water until it just holds, then chill both disks 1 hour." },
      { b:"Cook the filling", t:"Simmer cherries, sugar, and cornstarch over medium until the juice turns glossy and thick, about 5 minutes, then cool." },
      { b:"Build the lattice", t:"Roll the bottom crust, fill, then weave strips over the top and crimp the edge." },
      { b:"Wash and vent", t:"Brush the lattice with beaten egg; the open weave vents steam so the filling sets." },
      { b:"Bake", t:"Bake at 425F for 20 minutes, drop to 375F for 30-35 more until the filling bubbles thickly through the gaps." },
      { b:"Cool fully", t:"Rest at least 3 hours; the gel finishes setting as it cools or it will run when cut." }
    ],
    tools:["Pie dish 9-inch|9 inch glass pie dish","Cherry pitter|handheld cherry pitter","Rolling pin|wood rolling pin","Pastry blender|pastry cutter blender","Pastry brush|silicone pastry brush","Cooling rack|wire cooling rack"]
  },
  {
    slug:"blueberry-pie",
    title:"Blueberry Pie, and where to source it",
    cuisine:"American",
    category:"Dessert",
    kw:"blueberry pie, double crust pie, summer berry pie, lattice pie, blueberry filling",
    iso:["PT35M","PT55M","PT1H30M"],
    prep:"35 min", cook:"55 min", makes:"one 9-inch pie",
    desc:"A double-crust blueberry pie with the berries cooked to a jammy, sliceable set and a squeeze of lemon.",
    dek:"Ripe summer blueberries carry this, and a little lemon keeps the filling from tasting one-note sweet. The move is cooking half the berries down with cornstarch so the filling sets, then folding in the rest raw so you keep whole fruit.",
    card:"Half-cooked, half-raw blueberries set to a jam under a lemon-brightened lattice.",
    ing:[
      { n:"Blueberries", q:"Ripe berries give both the juice and the whole fruit; underripe ones stay sour and firm.", amt:"6 cups", local:true },
      { n:"Cornstarch", q:"Sets the released juice so slices hold their shape.", amt:"1/4 cup", local:true },
      { n:"Unrefined sugar", q:"Sweetens without masking the berry; scale down for very ripe fruit.", amt:"3/4 cup", shelf:"unrefined-sugar" },
      { n:"Lemon", q:"Juice and zest cut the sweetness and keep the flavor bright.", amt:"1", shelf:"citrus" },
      { n:"Baking flour", q:"Low-protein flour for a tender, flaky crust.", amt:"2 1/2 cups", shelf:"baking-flour" },
      { n:"Butter", q:"Kept cold, it makes the flaky layers in the crust.", amt:"1 cup", shelf:"butter" }
    ],
    steps:[
      { b:"Chill the dough", t:"Cut cold butter into flour and salt, add ice water to just bind, and chill both disks 1 hour." },
      { b:"Cook half", t:"Simmer 3 cups berries with sugar, cornstarch, and lemon until glossy and thick, about 4 minutes." },
      { b:"Fold in raw", t:"Off heat, stir in the remaining 3 cups raw berries and the zest, then cool slightly." },
      { b:"Assemble", t:"Roll the bottom crust, fill, top with a woven lattice, and crimp." },
      { b:"Bake", t:"Bake at 425F for 20 minutes, then 375F for 30-35 until the juices bubble thickly." },
      { b:"Set", t:"Cool at least 3 hours so the cornstarch gel firms before slicing." }
    ],
    tools:["Pie dish 9-inch|9 inch glass pie dish","Rolling pin|wood rolling pin","Microplane|microplane zester","Pastry brush|silicone pastry brush","Saucepan|3 quart saucepan","Cooling rack|wire cooling rack"]
  },
  {
    slug:"sweet-potato-pie",
    title:"Sweet Potato Pie, and where to source it",
    cuisine:"American",
    category:"Dessert",
    kw:"sweet potato pie, custard pie, single crust pie, southern dessert, spiced pie",
    iso:["PT30M","PT1H","PT1H30M"],
    prep:"30 min", cook:"1 hr", makes:"one 9-inch pie",
    desc:"A single-crust sweet potato pie with roasted potatoes and warm spice baked into a barely-set custard.",
    dek:"Roasting the sweet potatoes instead of boiling drives off water and concentrates the flavor, which is the difference between a rich pie and a watery one. Bake the custard only until the center barely jiggles; it sets as it cools.",
    card:"Roasted sweet potato and warm spice baked into a barely-set custard on a par-baked crust.",
    ing:[
      { n:"Sweet potatoes", q:"Roasting concentrates the sugar and dries the flesh so the custard sets clean.", amt:"2 lb", local:true },
      { n:"Eggs", q:"They set the custard; do not overbake or they curdle and weep.", amt:"3", shelf:"eggs" },
      { n:"Milk", q:"Evaporated milk or cream gives the custard body and richness.", amt:"1 cup", shelf:"milk" },
      { n:"Unrefined sugar", q:"Sweetens and deepens the color; brown sugar works well here.", amt:"3/4 cup", shelf:"unrefined-sugar" },
      { n:"Spices", q:"Cinnamon, nutmeg, and vanilla carry the warmth this pie is built on.", amt:"2 tsp", shelf:"spices" },
      { n:"Butter", q:"Melted into the filling for richness and used in the crust.", amt:"3/4 cup", shelf:"butter" },
      { n:"Baking flour", q:"Low-protein flour for a tender single crust.", amt:"1 1/4 cups", shelf:"baking-flour" }
    ],
    steps:[
      { b:"Roast the potatoes", t:"Roast whole at 400F for 50-60 minutes until collapsing soft, then scoop and mash smooth." },
      { b:"Par-bake the shell", t:"Line the crust with parchment and weights, blind-bake at 375F for 15 minutes, then remove weights." },
      { b:"Mix the filling", t:"Whisk mashed potato with eggs, milk, sugar, melted butter, and spices until smooth." },
      { b:"Fill and bake", t:"Pour into the par-baked shell and bake at 350F for 45-55 minutes." },
      { b:"Check doneness", t:"Pull it when the edge is set but the center still jiggles slightly; it firms as it cools." },
      { b:"Cool", t:"Cool completely, at least 2 hours, before slicing." }
    ],
    tools:["Pie dish 9-inch|9 inch glass pie dish","Potato masher|stainless potato masher","Pie weights|ceramic pie weights","Whisk|balloon whisk","Rolling pin|wood rolling pin","Cooling rack|wire cooling rack"]
  },
  {
    slug:"buttermilk-pie",
    title:"Buttermilk Pie, and where to source it",
    cuisine:"American",
    category:"Dessert",
    kw:"buttermilk pie, custard pie, southern pie, single crust pie, chess pie",
    iso:["PT20M","PT50M","PT1H10M"],
    prep:"20 min", cook:"50 min", makes:"one 9-inch pie",
    desc:"A tangy single-crust buttermilk custard pie with a lightly caramelized top on a par-baked shell.",
    dek:"Real cultured buttermilk gives this pie its tang, which is the only thing keeping it from being cloying. The trick is pulling it while the center still jiggles so the custard stays silky instead of grainy.",
    card:"Tangy buttermilk custard baked to a barely-set, lightly browned top.",
    ing:[
      { n:"Milk", q:"Cultured buttermilk provides the signature tang and thin body; do not sub sweet milk.", amt:"1 1/2 cups", shelf:"milk" },
      { n:"Eggs", q:"They set the loose custard; overbaking makes it curdle and weep.", amt:"3", shelf:"eggs" },
      { n:"Unrefined sugar", q:"Sweetens and forms the faint caramelized skin on top.", amt:"1 1/2 cups", shelf:"unrefined-sugar" },
      { n:"Butter", q:"Melted into the filling for richness and cut into the crust.", amt:"3/4 cup", shelf:"butter" },
      { n:"Baking flour", q:"A spoonful thickens the custard; the rest makes the crust.", amt:"1 1/2 cups", shelf:"baking-flour" },
      { n:"Spices", q:"A little vanilla and nutmeg round out the tang.", amt:"1 tsp", shelf:"spices" },
      { n:"Lemon", q:"A squeeze of juice sharpens the buttermilk tang.", amt:"1/2", shelf:"citrus" }
    ],
    steps:[
      { b:"Par-bake the shell", t:"Blind-bake the crust with weights at 375F for 15 minutes, then remove the weights." },
      { b:"Whisk the base", t:"Beat sugar with 3 tablespoons flour and melted butter, then whisk in eggs one at a time." },
      { b:"Add buttermilk", t:"Stir in buttermilk, vanilla, nutmeg, and lemon juice until smooth." },
      { b:"Bake", t:"Pour into the shell and bake at 350F for 45-50 minutes." },
      { b:"Check doneness", t:"The top should be golden and the center should still wobble like set jelly." },
      { b:"Cool", t:"Cool at least 2 hours; the custard sets as it drops to room temperature." }
    ],
    tools:["Pie dish 9-inch|9 inch glass pie dish","Whisk|balloon whisk","Pie weights|ceramic pie weights","Rolling pin|wood rolling pin","Mixing bowl|stainless mixing bowl","Cooling rack|wire cooling rack"]
  },
  {
    slug:"strawberry-pie",
    title:"Strawberry Pie, and where to source it",
    cuisine:"American",
    category:"Dessert",
    kw:"strawberry pie, fresh strawberry pie, glazed pie, single crust pie, no-bake filling",
    iso:["PT30M","PT20M","PT50M"],
    prep:"30 min", cook:"20 min", makes:"one 9-inch pie",
    desc:"A fresh strawberry pie with raw berries held in a cooked cornstarch glaze on a fully baked crust.",
    dek:"This pie lives on ripe raw berries, so the crust is baked separately and the fruit never really cooks. The technique is a cooked glaze thickened with cornstarch that sets around whole berries and holds a clean slice.",
    card:"Ripe raw strawberries set in a cooked glaze on a fully blind-baked crust.",
    ing:[
      { n:"Strawberries", q:"Ripe, in-season berries are the whole point; out-of-season fruit is watery and pale.", amt:"2 lb", local:true },
      { n:"Cornstarch", q:"Thickens the crushed-berry juice into a clear glaze that sets the fruit.", amt:"3 tbsp", local:true },
      { n:"Unrefined sugar", q:"Sweetens the glaze; scale to how ripe the berries are.", amt:"3/4 cup", shelf:"unrefined-sugar" },
      { n:"Lemon", q:"A little juice keeps the glaze bright and the color clear.", amt:"1/2", shelf:"citrus" },
      { n:"Baking flour", q:"Low-protein flour for a crisp, fully baked shell.", amt:"1 1/4 cups", shelf:"baking-flour" },
      { n:"Butter", q:"Cold butter cut into the flour for a flaky crust.", amt:"1/2 cup", shelf:"butter" }
    ],
    steps:[
      { b:"Blind-bake the crust", t:"Line with parchment and weights, bake at 400F for 15 minutes, remove weights, and bake 8 more until golden; cool." },
      { b:"Make the glaze", t:"Crush 1 cup berries, simmer with sugar, cornstarch, lemon, and 1/2 cup water until clear and thick, about 3 minutes." },
      { b:"Coat the berries", t:"Halve the remaining berries and fold them into the cooled glaze to coat." },
      { b:"Fill", t:"Pile the glazed berries into the cooled crust in an even layer." },
      { b:"Chill", t:"Refrigerate at least 3 hours until the glaze sets firm enough to slice." },
      { b:"Serve", t:"Serve cold the same day so the crust stays crisp." }
    ],
    tools:["Pie dish 9-inch|9 inch glass pie dish","Pie weights|ceramic pie weights","Saucepan|2 quart saucepan","Potato masher|stainless potato masher","Rolling pin|wood rolling pin","Cooling rack|wire cooling rack"]
  },
  {
    slug:"peach-pie",
    title:"Peach Pie, and where to source it",
    cuisine:"American",
    category:"Dessert",
    kw:"peach pie, double crust pie, summer pie, lattice pie, fresh peach filling",
    iso:["PT40M","PT55M","PT1H35M"],
    prep:"40 min", cook:"55 min", makes:"one 9-inch pie",
    desc:"A double-crust peach pie with ripe peaches macerated and thickened to a set filling under a vented top.",
    dek:"Ripe freestone peaches at their peak carry this pie; hard supermarket fruit stays sour and stringy. The key is macerating the sliced peaches, draining the juice, and reducing it with cornstarch so the filling sets instead of flooding the crust.",
    card:"Ripe peaches macerated, drained, and set with a reduced cornstarch glaze under a lattice.",
    ing:[
      { n:"Peaches", q:"Ripe freestone peaches slice clean and taste sweet; hard fruit stays sour.", amt:"3 lb", local:true },
      { n:"Cornstarch", q:"Thickens the reduced juice so the filling holds a slice.", amt:"3 tbsp", local:true },
      { n:"Unrefined sugar", q:"Draws out juice during maceration and sweetens the filling.", amt:"3/4 cup", shelf:"unrefined-sugar" },
      { n:"Spices", q:"A little cinnamon and vanilla round out the peach without covering it.", amt:"1 tsp", shelf:"spices" },
      { n:"Lemon", q:"Juice keeps the fruit bright and stops it browning.", amt:"1", shelf:"citrus" },
      { n:"Baking flour", q:"Low-protein flour for a tender double crust.", amt:"2 1/2 cups", shelf:"baking-flour" },
      { n:"Butter", q:"Cold butter cut in for flaky layers.", amt:"1 cup", shelf:"butter" }
    ],
    steps:[
      { b:"Chill the dough", t:"Cut cold butter into flour and salt, bind with ice water, and chill both disks 1 hour." },
      { b:"Macerate", t:"Toss sliced peaches with sugar and lemon and let sit 30 minutes to release juice." },
      { b:"Reduce the juice", t:"Drain the juice, simmer it with cornstarch until glossy, then toss it back with the peaches and spices." },
      { b:"Assemble", t:"Fill the bottom crust, top with a lattice, and crimp the edge." },
      { b:"Bake", t:"Bake at 425F for 20 minutes, then 375F for 30-35 until the filling bubbles through the gaps." },
      { b:"Cool", t:"Rest at least 3 hours so the set holds when sliced." }
    ],
    tools:["Pie dish 9-inch|9 inch glass pie dish","Rolling pin|wood rolling pin","Paring knife|paring knife","Colander|stainless colander","Pastry brush|silicone pastry brush","Cooling rack|wire cooling rack"]
  },
  {
    slug:"apple-turnover",
    title:"Apple Turnovers, and where to source it",
    cuisine:"American",
    category:"Dessert",
    kw:"apple turnovers, puff pastry apples, hand pies, breakfast pastry, spiced apples",
    iso:["PT25M","PT25M","PT50M"],
    prep:"25 min", cook:"25 min", makes:"8 turnovers",
    desc:"Flaky puff pastry turnovers filled with spiced apples cooked down to a thick, jammy filling.",
    dek:"The filling has to be cooked and cooled before it goes in, or the steam blows the pastry open and leaves it soggy. Cook the apples with a little cornstarch until the juice is thick and the pieces are tender but still hold shape.",
    card:"Spiced apples cooked to a thick jam, sealed in puff pastry and baked until flaky.",
    ing:[
      { n:"Apples", q:"Firm tart apples like Granny Smith hold their shape and balance the sugar.", amt:"4", local:true },
      { n:"Puff pastry", q:"An all-butter puff gives the flaky layers; keep it cold until it goes in the oven.", amt:"2 sheets", local:true },
      { n:"Cornstarch", q:"Thickens the apple juice so the filling doesn't leak and steam the pastry.", amt:"1 tbsp", local:true },
      { n:"Unrefined sugar", q:"Sweetens the filling; brown sugar adds a little depth.", amt:"1/2 cup", shelf:"unrefined-sugar" },
      { n:"Spices", q:"Cinnamon and a little nutmeg carry the classic apple flavor.", amt:"1 tsp", shelf:"spices" },
      { n:"Butter", q:"A knob to cook the apples and gloss the filling.", amt:"2 tbsp", shelf:"butter" },
      { n:"Egg", q:"Beaten for the wash that browns the pastry.", amt:"1", shelf:"eggs" }
    ],
    steps:[
      { b:"Cook the apples", t:"Saute diced apples in butter with sugar and spice, add cornstarch slurry, and cook until thick and jammy; cool fully." },
      { b:"Cut the pastry", t:"Roll each sheet slightly and cut into 4 squares." },
      { b:"Fill and seal", t:"Spoon cooled filling onto one half, fold into a triangle, and crimp the edges with a fork." },
      { b:"Wash and vent", t:"Brush with beaten egg and cut two small vents in each top." },
      { b:"Bake", t:"Bake at 400F for 22-25 minutes until deep golden and puffed." },
      { b:"Cool", t:"Cool 15 minutes; the filling is molten straight from the oven." }
    ],
    tools:["Sheet pan|half sheet baking pan","Parchment paper|parchment sheets","Rolling pin|wood rolling pin","Pastry brush|silicone pastry brush","Saute pan|10 inch saute pan","Cooling rack|wire cooling rack"]
  },
  {
    slug:"blackberry-cobbler",
    title:"Blackberry Cobbler, and where to source it",
    cuisine:"American",
    category:"Dessert",
    kw:"blackberry cobbler, drop biscuit cobbler, summer berry dessert, baked fruit, southern cobbler",
    iso:["PT20M","PT45M","PT1H5M"],
    prep:"20 min", cook:"45 min", makes:"8 servings",
    desc:"A blackberry cobbler with tart berries under craggy drop biscuits baked until the fruit bubbles.",
    dek:"Ripe blackberries and real butter in the biscuit make this; the fruit needs enough acid to stay interesting under all that sugar. Use a drop-biscuit topping, not a batter, so you get a craggy, crisp lid that soaks up juice underneath.",
    card:"Tart blackberries bubbling under craggy, butter-rich drop biscuits.",
    ing:[
      { n:"Blackberries", q:"Ripe berries give juice and tartness; the seeds are part of the character.", amt:"6 cups", local:true },
      { n:"Cornstarch", q:"Thickens the juice so the cobbler isn't watery.", amt:"2 tbsp", local:true },
      { n:"Unrefined sugar", q:"Sweetens both the fruit and the biscuit topping.", amt:"1 cup", shelf:"unrefined-sugar" },
      { n:"Baking flour", q:"The base of the drop-biscuit topping; do not overmix it.", amt:"1 1/2 cups", shelf:"baking-flour" },
      { n:"Butter", q:"Cold butter cut into the flour makes the biscuit flaky.", amt:"1/2 cup", shelf:"butter" },
      { n:"Milk", q:"Just enough to bring the biscuit dough together into a shaggy drop batter.", amt:"3/4 cup", shelf:"milk" },
      { n:"Lemon", q:"A squeeze keeps the berries from tasting flat.", amt:"1/2", shelf:"citrus" }
    ],
    steps:[
      { b:"Toss the fruit", t:"Mix berries with half the sugar, the cornstarch, and lemon, then spread in a baking dish." },
      { b:"Cut the biscuit", t:"Cut cold butter into flour, the rest of the sugar, baking powder, and salt until pea-sized." },
      { b:"Add milk", t:"Stir in milk until it just forms a shaggy, wet dough; do not overwork." },
      { b:"Drop the topping", t:"Drop spoonfuls over the fruit, leaving gaps for steam to escape." },
      { b:"Bake", t:"Bake at 375F for 40-45 minutes until the biscuits are golden and the fruit bubbles at the edges." },
      { b:"Rest", t:"Cool 20 minutes so the juices thicken before serving." }
    ],
    tools:["Baking dish|9x13 ceramic baking dish","Pastry blender|pastry cutter blender","Mixing bowl|stainless mixing bowl","Cookie scoop|large cookie scoop","Microplane|microplane zester","Cooling rack|wire cooling rack"]
  },
  {
    slug:"dutch-apple-pie",
    title:"Dutch Apple Pie, and where to source it",
    cuisine:"American",
    category:"Dessert",
    kw:"dutch apple pie, crumb top pie, streusel apple pie, single crust pie, spiced apples",
    iso:["PT35M","PT55M","PT1H30M"],
    prep:"35 min", cook:"55 min", makes:"one 9-inch pie",
    desc:"A single-crust apple pie topped with a buttery streusel crumb over spiced apples.",
    dek:"The crumb top is what sets this apart from a standard apple pie, and it lives or dies on cold butter rubbed into flour and sugar so it bakes up craggy, not sandy. Tossing the apples with cornstarch keeps the filling from flooding under that crumb.",
    card:"Spiced apples under a craggy butter-and-sugar streusel on a par-baked crust.",
    ing:[
      { n:"Apples", q:"A mix of tart and firm apples holds shape and balances the sweet crumb.", amt:"3 lb", local:true },
      { n:"Cornstarch", q:"Thickens the apple juice so it doesn't soak the crumb.", amt:"2 tbsp", local:true },
      { n:"Baking flour", q:"Builds both the crust and the streusel; low-protein keeps it tender.", amt:"2 1/2 cups", shelf:"baking-flour" },
      { n:"Butter", q:"Cold butter makes flaky crust and craggy crumb; it must stay cold.", amt:"1 cup", shelf:"butter" },
      { n:"Unrefined sugar", q:"Sweetens the filling and the streusel; brown sugar deepens the crumb.", amt:"1 cup", shelf:"unrefined-sugar" },
      { n:"Spices", q:"Cinnamon and nutmeg carry the apple flavor.", amt:"2 tsp", shelf:"spices" },
      { n:"Lemon", q:"Juice keeps the apples bright and stops browning.", amt:"1", shelf:"citrus" }
    ],
    steps:[
      { b:"Par-bake the shell", t:"Blind-bake the bottom crust with weights at 375F for 15 minutes, then remove the weights." },
      { b:"Prep the apples", t:"Toss sliced apples with sugar, cornstarch, spices, and lemon." },
      { b:"Make the streusel", t:"Rub cold butter into flour and brown sugar until it clumps into craggy crumbs." },
      { b:"Assemble", t:"Pile apples into the shell and cover completely with the crumb." },
      { b:"Bake", t:"Bake at 375F for 50-55 minutes until the crumb is deep golden and the filling bubbles." },
      { b:"Cool", t:"Cool at least 2 hours so the filling sets before slicing." }
    ],
    tools:["Pie dish 9-inch|9 inch glass pie dish","Pie weights|ceramic pie weights","Apple peeler|apple peeler corer","Pastry blender|pastry cutter blender","Rolling pin|wood rolling pin","Cooling rack|wire cooling rack"]
  },
  {
    slug:"custard-pie",
    title:"Custard Pie, and where to source it",
    cuisine:"American",
    category:"Dessert",
    kw:"custard pie, egg custard pie, single crust pie, nutmeg custard, baked custard",
    iso:["PT20M","PT50M","PT1H10M"],
    prep:"20 min", cook:"50 min", makes:"one 9-inch pie",
    desc:"A plain baked custard pie of eggs, milk, and nutmeg set silky on a par-baked shell.",
    dek:"With this few ingredients, the eggs and dairy have to be good, because there's nothing to hide behind. Bake it to 170F in the center and no further; carryover heat finishes the set, and going past it curdles the custard.",
    card:"Eggs, milk, and nutmeg baked to a silky 170F custard on a par-baked shell.",
    ing:[
      { n:"Eggs", q:"The whole structure; fresh eggs set the custard smooth.", amt:"4", shelf:"eggs" },
      { n:"Milk", q:"Whole milk or a milk-cream blend gives the custard body without heaviness.", amt:"2 1/2 cups", shelf:"milk" },
      { n:"Unrefined sugar", q:"Sweetens gently; this pie is meant to be mild.", amt:"1/2 cup", shelf:"unrefined-sugar" },
      { n:"Spices", q:"Vanilla in the custard and nutmeg grated over the top are the whole seasoning.", amt:"1 tsp", shelf:"spices" },
      { n:"Baking flour", q:"Low-protein flour for a tender single crust.", amt:"1 1/4 cups", shelf:"baking-flour" },
      { n:"Butter", q:"Cold butter cut into the flour for a flaky shell.", amt:"1/2 cup", shelf:"butter" }
    ],
    steps:[
      { b:"Par-bake the shell", t:"Blind-bake the crust with weights at 375F for 15 minutes, then remove the weights." },
      { b:"Warm the milk", t:"Heat the milk just to steaming to help the custard set evenly." },
      { b:"Make the custard", t:"Whisk eggs and sugar, then temper in the warm milk and the vanilla." },
      { b:"Fill and dust", t:"Pour into the shell through a strainer and grate nutmeg over the top." },
      { b:"Bake to temp", t:"Bake at 325F for 40-50 minutes until the center reads 170F and jiggles as one set piece." },
      { b:"Cool", t:"Cool completely; the custard finishes setting off the heat." }
    ],
    tools:["Pie dish 9-inch|9 inch glass pie dish","Pie weights|ceramic pie weights","Fine strainer|fine mesh strainer","Instant thermometer|instant read thermometer","Whisk|balloon whisk","Microplane|microplane zester"]
  },
  {
    slug:"cherry-cobbler",
    title:"Cherry Cobbler, and where to source it",
    cuisine:"American",
    category:"Dessert",
    kw:"cherry cobbler, sour cherry cobbler, drop biscuit cobbler, baked cherries, summer dessert",
    iso:["PT20M","PT45M","PT1H5M"],
    prep:"20 min", cook:"45 min", makes:"8 servings",
    desc:"A cherry cobbler with tart cherries thickened to a gel under golden drop biscuits.",
    dek:"Sour cherries make a cobbler worth eating; sweet ones bake out flat. Cook the cherries with cornstarch first so the fruit is already set when the biscuit lid finishes, and use a drop biscuit for that craggy, crisp top.",
    card:"Tart cherries set to a gel under craggy golden drop biscuits.",
    ing:[
      { n:"Sour cherries", q:"Tart cherries hold their shape and acidity through baking.", amt:"6 cups pitted", local:true },
      { n:"Cornstarch", q:"Thickens the cherry juice into a gel so the cobbler isn't soupy.", amt:"3 tbsp", local:true },
      { n:"Unrefined sugar", q:"Balances the tart fruit and sweetens the biscuit.", amt:"1 cup", shelf:"unrefined-sugar" },
      { n:"Baking flour", q:"The base of the drop-biscuit topping.", amt:"1 1/2 cups", shelf:"baking-flour" },
      { n:"Butter", q:"Cold butter cut in makes the biscuit flaky.", amt:"1/2 cup", shelf:"butter" },
      { n:"Milk", q:"Binds the biscuit dough into a shaggy drop batter.", amt:"3/4 cup", shelf:"milk" }
    ],
    steps:[
      { b:"Cook the cherries", t:"Simmer cherries with half the sugar and the cornstarch until glossy and thick, then spread in a baking dish." },
      { b:"Cut the biscuit", t:"Cut cold butter into flour, the rest of the sugar, baking powder, and salt until pea-sized." },
      { b:"Add milk", t:"Stir in milk to a shaggy, wet dough; do not overmix." },
      { b:"Top the fruit", t:"Drop spoonfuls over the hot cherries, leaving gaps for steam." },
      { b:"Bake", t:"Bake at 375F for 35-40 minutes until the biscuits are golden and the fruit bubbles." },
      { b:"Rest", t:"Cool 20 minutes so the filling sets." }
    ],
    tools:["Baking dish|9x13 ceramic baking dish","Cherry pitter|handheld cherry pitter","Pastry blender|pastry cutter blender","Saucepan|3 quart saucepan","Cookie scoop|large cookie scoop","Cooling rack|wire cooling rack"]
  },
  {
    slug:"blueberry-cobbler",
    title:"Blueberry Cobbler, and where to source it",
    cuisine:"American",
    category:"Dessert",
    kw:"blueberry cobbler, drop biscuit cobbler, summer berry dessert, baked blueberries, southern cobbler",
    iso:["PT20M","PT45M","PT1H5M"],
    prep:"20 min", cook:"45 min", makes:"8 servings",
    desc:"A blueberry cobbler with berries thickened and brightened with lemon under buttery drop biscuits.",
    dek:"Ripe blueberries and a squeeze of lemon keep this from going one-note sweet under the biscuit. Toss the berries with cornstarch so the juice sets, and use a drop-biscuit lid for the craggy top that soaks up the fruit.",
    card:"Lemon-brightened blueberries set under craggy, butter-rich drop biscuits.",
    ing:[
      { n:"Blueberries", q:"Ripe berries give the juice and sweetness; underripe fruit stays sour.", amt:"6 cups", local:true },
      { n:"Cornstarch", q:"Thickens the berry juice so the cobbler isn't runny.", amt:"2 tbsp", local:true },
      { n:"Lemon", q:"Juice and zest cut the sweetness and lift the flavor.", amt:"1", shelf:"citrus" },
      { n:"Unrefined sugar", q:"Sweetens the fruit and the biscuit topping.", amt:"1 cup", shelf:"unrefined-sugar" },
      { n:"Baking flour", q:"The base of the drop-biscuit lid.", amt:"1 1/2 cups", shelf:"baking-flour" },
      { n:"Butter", q:"Cold butter cut in makes the biscuit flaky.", amt:"1/2 cup", shelf:"butter" },
      { n:"Milk", q:"Brings the biscuit dough together into a shaggy drop batter.", amt:"3/4 cup", shelf:"milk" }
    ],
    steps:[
      { b:"Toss the fruit", t:"Mix berries with half the sugar, the cornstarch, lemon juice, and zest, then spread in a baking dish." },
      { b:"Cut the biscuit", t:"Cut cold butter into flour, the rest of the sugar, baking powder, and salt until pea-sized." },
      { b:"Add milk", t:"Stir in milk to a shaggy, wet dough; do not overwork it." },
      { b:"Drop the topping", t:"Spoon dough over the berries, leaving gaps for steam to escape." },
      { b:"Bake", t:"Bake at 375F for 40-45 minutes until the biscuits are golden and the berries bubble." },
      { b:"Rest", t:"Cool 20 minutes so the juices thicken before serving." }
    ],
    tools:["Baking dish|9x13 ceramic baking dish","Pastry blender|pastry cutter blender","Microplane|microplane zester","Mixing bowl|stainless mixing bowl","Cookie scoop|large cookie scoop","Cooling rack|wire cooling rack"]
  }
];

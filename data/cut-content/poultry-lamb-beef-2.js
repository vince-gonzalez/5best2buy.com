// poultry-lamb-beef-2.js — the second pass at the gaps.
//
// The section had no chicken wing on a site that sells to Americans, no
// drumstick, no rack of lamb, no shank, no short rib, no oxtail, and neither
// turkey nor duck existed at all despite both having shelves.
//
// Same depth as the original five files. Where a cut has a genuinely contested
// technique — wing texture, duck breast rendering, tri-tip grain — the argument
// is stated rather than smoothed over.
module.exports = [

// ------------------------------------------------------------------ CHICKEN
{
  slug: "chicken-wing",
  name: "Chicken Wing",
  animal: "chicken",
  shelf: "chicken",
  aka: ["drumette", "flat", "wingette", "party wings", "whole wing"],
  match: ["chicken wing", "wings", "buffalo wings"],
  dek: "Three segments with different meat-to-skin ratios, sold whole or split. The entire craft of a good wing is getting the skin to render and crisp before the small amount of meat inside overcooks, and every reliable method is some way of removing water from the skin first.",
  anatomy: "A whole wing is three joints. The drumette attaches to the body and is a single bone with a compact bundle of meat, closest to a tiny drumstick. The flat — or wingette — is the middle section with two thin parallel bones and the best skin-to-meat ratio, which is why people fight over them. The tip is mostly skin, cartilage and bone with essentially no meat; it burns before the rest is done and belongs in the stock pot. Wings work constantly on a bird that barely flies, but they carry little muscle mass, so the cut is dominated by skin and connective tissue rather than muscle. That ratio is the whole reason wings behave unlike any other chicken cut.",
  science: "Chicken skin is roughly half water, held in a collagen matrix with fat beneath. Crisping requires driving that water off and rendering the fat, and both need either time at moderate heat or a very high, fast heat that outruns the meat. The problem is that the meat inside is thin and reaches doneness quickly, so a straight high-temperature roast gives cooked meat under flabby skin. Two mechanisms fix it. Drying the skin in advance — a salt and baking powder coating left uncovered in the fridge — pulls water out osmotically and raises the surface pH, which speeds Maillard browning and gives a blistered texture close to fried. Or par-cooking gently first and then blasting the exterior, which separates the two jobs entirely.",
  methods: [
    { m: "Baking powder and a night in the fridge, then hot oven",
      why: "The most reliable non-fried route. Baking powder raises surface pH so browning happens faster and at lower temperature, while the overnight air-dry removes the water that would otherwise steam the skin.",
      how: "Toss dry wings with a teaspoon of baking powder and half a teaspoon of salt per pound. Rack over a tray, uncovered, in the fridge eight to twenty-four hours. 425°F on a rack, forty to fifty minutes, turning once. Use aluminium-free baking powder or it tastes metallic. Not baking soda." },
    { m: "Double fry",
      why: "The first fry at low temperature cooks the meat and renders the skin fat; the second at high temperature drives off surface moisture and crisps. One fry cannot do both.",
      how: "250°F oil for eight to ten minutes, drain and rest at least ten minutes (or refrigerate hours). Then 400°F for ninety seconds to two minutes until deep gold. Sauce immediately." },
    { m: "Grill two-zone",
      why: "Indirect renders the fat and cooks the meat without flare-ups; direct at the end crisps the skin. Rendering fat over direct flame is how wings catch fire.",
      how: "Indirect at 350-400°F for twenty-five to thirty minutes, then two to three minutes directly over the coals, turning constantly. Sauce after, never before — sugar burns." },
    { m: "Smoke then sear",
      why: "Wings take smoke exceptionally well because of their surface area, but a smoker alone will never crisp the skin.",
      how: "250°F smoke for forty-five minutes to an hour, then either a hot grill for three minutes or a 425°F oven for ten. The intermediate step is not optional if you want to bite through the skin." }
  ],
  avoid: {
    m: "Saucing before cooking, and crowding the pan",
    why: "Both mistakes work the same way — they put water where the skin needs dryness. Buffalo sauce is largely water and vinegar with butter, and coating raw wings in it means the skin spends the entire cook steaming under a wet layer, so it never renders and never browns. The sugar in most barbecue sauces adds a second problem by burning long before the meat is done. Sauce goes on hot wings after they leave the heat, in a bowl, tossed. Crowding does the same thing by another route: wings packed together trap the moisture coming off each other, so the tray becomes a steam chamber and nothing crisps. Space between every wing and a rack underneath so air moves below them are both doing real work, not being fussy."
  },
  buying: "Whole wings are cheaper per pound than pre-split party wings and take thirty seconds each to break down — feel for the joint, cut through the gap, not the bone. Save the tips for stock. Fresh beats frozen noticeably here because freezing damages the skin structure and frozen wings release more water; if you buy frozen, thaw fully and dry very thoroughly. Look for wings with intact, unbroken skin. Larger wings are easier to get right since there's more thermal mass between the skin and the meat. Figure six to eight whole wings per person as a main, which is more than people plan for.",
  temps: "Wings are the one chicken cut to deliberately overshoot. 165°F is safe but the connective tissue is still tight; 175-185°F gives noticeably better texture as the collagen softens. Skin crisps above 400°F surface. Fry at 250°F then 400°F.",
  faq: [
    { q: "Does the baking powder trick actually work?",
      a: "Yes, and the mechanism is real. Alkaline surfaces brown faster — raising pH accelerates the Maillard reaction — and the powder also helps draw moisture from the skin. The result is genuinely close to fried. Two rules: use baking powder, not baking soda, which is far more alkaline and will taste soapy; and use an aluminium-free brand, since sodium aluminium sulfate leaves a metallic edge. About a teaspoon per pound, no more." },
    { q: "Flats or drums?",
      a: "Flats have more skin relative to meat and two thin bones that conduct heat well, so they crisp better and cook more evenly — which is why they disappear first. Drumettes have more meat and are easier to eat. Cooking them together is fine, though flats will finish a few minutes earlier if you're being precise about it." },
    { q: "Why is 165°F wrong for wings?",
      a: "It's not unsafe, it's just not optimal. 165°F is the food-safety threshold for poultry, and it's the right target for a lean breast that dries out past it. A wing is mostly skin and connective tissue, and that connective tissue needs to get to 175-185°F before it softens. Pulled at 165°F a wing is safe and slightly rubbery. There's no lean muscle here to protect, so the extra twenty degrees costs nothing." }
  ]
},

{
  slug: "chicken-drumstick",
  name: "Chicken Drumstick",
  animal: "chicken",
  shelf: "chicken",
  aka: ["drumstick", "chicken leg", "lower leg"],
  match: ["drumstick", "chicken leg"],
  dek: "The lower leg — dark meat with a heavy load of connective tissue and a bundle of hard tendons running through it. Cheap, nearly impossible to dry out, and better at 185°F than at the 165°F most people stop at.",
  anatomy: "The drumstick is the tibia and fibula wrapped in the gastrocnemius and associated muscles — the muscles that carry a bird that spends its whole life standing and walking. Constant low-intensity work means high myoglobin, which is why it's dark, and a dense network of collagen and tendon. Those tendons are the distinguishing feature: five to eight tough white cords run from the meat down into the foot, and they do not soften at any cooking temperature. On a commercial bird they're usually cut but left in. The muscle tapers sharply toward the knuckle end, which is why that end always looks overcooked.",
  science: "Dark meat is a different problem from white. Higher fat, higher myoglobin, and substantially more collagen mean the meat holds moisture far better and actively improves with extra heat. Collagen begins converting to gelatin above 160°F and continues over time, so a drumstick at 185°F has softer connective tissue and reads as more succulent than the same drumstick at 165°F — the opposite of a breast, which is drying by then. That is the practical reason a whole bird is a compromise: legs want 180°F+, breast wants 155-160°F, and cooking them attached means one of them loses.",
  methods: [
    { m: "Roast hot on a rack",
      why: "Dark meat tolerates high heat, and elevation lets fat drip away so the skin crisps rather than sitting in it.",
      how: "425°F on a wire rack, thirty-five to forty-five minutes, to 180-185°F. Dry-brine with salt overnight uncovered for better skin. No turning needed on a rack." },
    { m: "Braise",
      why: "The high collagen content means drumsticks give back to a braising liquid instead of drying into it, unlike breast.",
      how: "Brown hard, then simmer forty-five minutes to an hour in liquid two-thirds up. The meat should retract from the knuckle and pull off with no resistance." },
    { m: "Grill indirect then direct",
      why: "The fat renders slowly and will flare over direct flame; indirect first cooks it through safely, direct at the end colours the skin.",
      how: "Indirect at 375°F for twenty-five minutes, then five minutes over the coals, turning. Sauce only in the final two minutes." },
    { m: "Confit",
      why: "Submerged in fat at low temperature, the collagen converts completely while the meat can't dry out, giving a texture no other method reaches.",
      how: "Salt overnight, rinse, then submerge in duck fat or lard at 200-215°F for two to three hours. Cool in the fat, then crisp the skin hard in a pan before serving. Keeps weeks under its fat." }
  ],
  avoid: {
    m: "Pulling at 165°F because that's the safe temperature",
    why: "165°F is where poultry is safe, and for a breast it's also close to where it stops being good. A drumstick is a different animal entirely. Its value is in a large quantity of collagen, and collagen doesn't begin converting until roughly 160°F and needs time above that to become gelatin. A drumstick pulled the instant it hits 165°F is safe, technically cooked, and unpleasantly chewy, with the connective tissue still intact and the meat clinging to the bone. Another fifteen to twenty degrees and twenty minutes turns that tissue to gelatin, and because dark meat carries far more fat and holds water far better than breast, nothing is lost in the process. This is the cut where the safety number and the quality number are furthest apart."
  },
  buying: "Among the cheapest protein in any shop, frequently under a dollar a pound. Look for intact skin without tears, and avoid packages sitting in liquid. Size varies a lot — larger drumsticks from bigger birds are easier to cook evenly. Air-chilled birds have noticeably drier skin that crisps better than water-chilled, which absorb water during processing. Buying leg quarters and separating them yourself is usually cheaper still and gives you thighs at the same time. Skin-on always; skinless drumsticks lose the fat that keeps them good and there's no upside.",
  temps: "180-185°F internal, measured against the bone but not touching it. 165°F is safe but tough. Confit runs 200-215°F ambient for two to three hours.",
  faq: [
    { q: "Why is dark meat safe at a higher temperature?",
      a: "It isn't a safety question — it's a quality one. 165°F is where salmonella is killed instantly, and that applies to all poultry. The difference is what happens above that. Breast meat is lean and starts drying immediately past 160°F, so you stop as soon as it's safe. Leg meat has fat and collagen that only improve with more heat and time, so there's no reason to stop early. Same safety threshold, completely different optimum." },
    { q: "What are the white cords, and can I remove them?",
      a: "Tendons running from the leg muscles down to the foot. They're elastin-heavy and won't soften no matter how long you cook. You can pull them with pliers through the knuckle end before cooking — grip and twist while holding the meat — but it's fiddly and most people just eat around them. Restaurants that serve drumsticks whole usually do remove them." },
    { q: "Drumstick or thigh?",
      a: "Thigh has more meat, less connective tissue, no tendons and a flatter shape that cooks more evenly, which makes it the better cut for most purposes. The drumstick's advantages are price, the handle, and a slightly richer result when taken to high temperature. For a braise or a curry, use thighs. For grilling, roasting, or feeding people who want to hold their food, drumsticks are fine and cheaper." }
  ]
},

{
  slug: "chicken-leg-quarter",
  name: "Chicken Leg Quarter",
  animal: "chicken",
  shelf: "chicken",
  aka: ["leg quarter", "whole leg", "thigh and drumstick", "chicken maryland"],
  match: ["leg quarter", "chicken maryland", "whole chicken leg"],
  dek: "Thigh and drumstick still joined, usually with a piece of back attached. The cheapest chicken on the shelf by a wide margin, and because it's all dark meat it cooks as one thing rather than as the compromise a whole bird forces.",
  anatomy: "The quarter takes the whole leg from the hip joint down to the knuckle, and on a commercially cut bird it includes a section of the backbone and often the oyster — the small round muscle sitting in the hollow of the pelvis, which is the best bite on the animal and gets thrown away by anyone who buys parts. Thigh meat is the femur surrounded by relatively even, flat muscle; the drumstick tapers and carries the tendons. Both are dark, both are fatty, and critically both want the same finishing temperature, which is what makes the quarter easier to cook than a whole bird.",
  science: "The whole-bird problem is that breast is done at 155-160°F and legs want 180°F+, so roasting them attached guarantees one is wrong. A leg quarter removes that conflict entirely: every muscle on it is dark, high in collagen and fat, and improves through 180-190°F. There's still a minor gradient — the thigh is thicker than the drumstick and takes slightly longer — but they're close enough that the whole piece finishes together. The attached back section also contributes: it's bone and cartilage, which release gelatin into a braise or into pan drippings.",
  methods: [
    { m: "Sheet pan roast",
      why: "One tray, high heat, no turning, and the rendering fat cooks whatever vegetables are underneath.",
      how: "425°F, skin side up on top of vegetables, forty-five to fifty-five minutes to 180-185°F. Dry-brine overnight for better skin. Don't cover — steam kills the skin." },
    { m: "Braise or stew",
      why: "The collagen from thigh, drumstick and the attached back all dissolves into the liquid, so it builds its own sauce.",
      how: "Brown hard skin-side first, then simmer covered forty-five minutes to an hour. Remove the lid for the last fifteen if you want the skin to recover any texture." },
    { m: "Grill indirect",
      why: "Enough thermal mass to survive real heat, and enough fat to baste itself, but flare-ups will burn the skin if it's over direct flame the whole time.",
      how: "Indirect at 375-400°F for thirty-five to forty-five minutes, skin side up, then a few minutes directly over the coals at the end." },
    { m: "Spatchcock-style flatten",
      why: "Pressing the quarter flat evens the thickness between thigh and drumstick so they finish simultaneously and the skin contacts the pan fully.",
      how: "Cut along either side of the femur to open it out, or just press hard with a weight in the pan. Skin down in a cold pan, weighted, over medium heat for fifteen minutes to render, then finish in the oven." }
  ],
  avoid: {
    m: "Cooking them from frozen, or covering the pan",
    why: "Leg quarters are usually the cheapest thing in the shop and are often bought in large frozen bags, which invites cooking them straight from frozen. The exterior then spends a long stretch in the temperature range where surface bacteria multiply while the interior is still thawing, and more practically, the water coming off as it thaws sits in the pan and steams the skin into something pale and rubbery. Covering does the same thing deliberately. The skin is a large part of what you're buying on this cut — it's most of the fat and all of the texture — and both mistakes trade it away. Thaw fully, dry the surface, and leave the pan open."
  },
  buying: "Frequently under a dollar a pound and often sold in ten-pound bags, which is the cheapest way to buy chicken that isn't a whole bird. Look for quarters with the oyster still attached in the hollow of the back section — some processors cut higher and include it, some don't, and it's worth choosing the ones that do. Skin should be intact and dry-looking. Air-chilled is better than water-chilled for skin. Separating them yourself into thighs and drumsticks takes one cut through the joint and is usually cheaper than buying either separately.",
  temps: "180-185°F in the thigh, which is the thicker of the two. The drumstick will be slightly ahead and that's fine — both cuts are improved rather than harmed by the extra heat.",
  faq: [
    { q: "Why is this cheaper than breast?",
      a: "Demand, not quality. The American market pays a large premium for boneless skinless breast, so the dark meat that comes off the same bird is priced to move — and a good deal of it is exported for exactly that reason. Dark meat has more fat, more flavour, more collagen and a much wider margin for error. It's the better cut sold at the lower price because of what people ask for." },
    { q: "What's the oyster?",
      a: "Two small round muscles sitting in hollows on either side of the backbone near the hip. They're dark, well-worked, protected, and generally considered the best bite on a chicken — the French call them sot-l'y-laisse, roughly 'only a fool leaves it'. On a leg quarter cut high enough, they come attached to the back section. Check for them and don't throw that part away." },
    { q: "Can I use these where a recipe says thighs?",
      a: "Yes, with more time. A quarter is thicker than a thigh alone, so add roughly ten to fifteen minutes and check in the thigh rather than the drumstick. If the recipe calls for boneless thighs the timing will be badly off — that's a much faster cut — so go by internal temperature instead." }
  ]
},

// --------------------------------------------------------------------- LAMB
{
  slug: "rack-of-lamb",
  name: "Rack of Lamb",
  animal: "lamb",
  shelf: "lamb",
  aka: ["lamb rib roast", "carré d'agneau", "frenched rack", "lamb cutlets"],
  match: ["rack of lamb", "lamb rack", "lamb cutlets"],
  dek: "The rib section, the lamb equivalent of a beef rib roast — eight small chops in a row along a single loin muscle. Expensive, fast, and the one lamb cut where the fat cap does the entire job of keeping a very lean muscle edible.",
  anatomy: "The rack is ribs six through twelve or thirteen, carrying the front portion of the longissimus dorsi along the top with a cap of fat and a thin layer of the spinalis over it. A full rack is seven or eight bones and about a pound and a half to two pounds, feeding two to three. Frenching — scraping the meat and membrane off the last inch or two of each bone — is cosmetic and also useful, since that thin intercostal meat would burn before the eye is done. The chine bone, the section of spine along the base, has to be removed or the rack cannot be carved into chops; ask the butcher, because it's very hard with a home knife.",
  science: "A rack is a lean back muscle with an external fat cap and almost no intramuscular fat, which makes it behave like a beef tenderloin rather than a ribeye — very little internal buffering, so temperature control is everything. The fat cap is doing two jobs: rendering to baste the surface, and physically insulating the meat from direct heat. That's why the standard approach sears the fat side first and gives it longer. Lamb fat also carries most of what people mean when they say lamb tastes gamey — branched-chain fatty acids concentrated in the fat rather than the muscle — so trimming the cap changes the flavour substantially, not just the richness.",
  methods: [
    { m: "Reverse sear",
      why: "A lean, expensive, thin muscle with a tight window benefits more than almost anything from arriving at temperature slowly and evenly.",
      how: "Score the fat cap in a diamond pattern, salt an hour ahead. 250°F oven to 120°F internal, twenty-five to thirty-five minutes. Rest, then sear fat-side down in a hot pan for two to three minutes until the cap is deep brown and rendered." },
    { m: "Sear then roast",
      why: "The traditional order, faster than a reverse sear and easier to time for a dinner where the oven is busy.",
      how: "Hard sear fat-side down in a hot ovenproof pan, three to four minutes, then all other sides briefly. Into a 400°F oven, twelve to eighteen minutes to 125-130°F. Rest ten minutes." },
    { m: "Herb and mustard crust",
      why: "A crumb crust protects the lean meat from direct radiant heat while adding the texture the cut otherwise lacks.",
      how: "Sear first, then paint with dijon and press on a mix of breadcrumbs, parsley, garlic and thyme. Roast at 400°F. The mustard is glue and acid, not a dominant flavour." },
    { m: "Grill over indirect heat",
      why: "Dripping lamb fat over direct flame flares hard and coats the meat in soot, so the rack goes on the cool side with the bones as a shield.",
      how: "Indirect at 350-375°F with the bones angled toward the fire, twenty to twenty-five minutes, then a short direct sear on the fat cap at the end." }
  ],
  avoid: {
    m: "Cooking it past medium, and trimming off all the fat first",
    why: "Two ways to waste an expensive cut. Lamb loin is very lean — comparable to pork tenderloin — with no marbling to give back once the fibers contract, so past about 140°F it goes grey, firm and dry, and there is nothing in the muscle to disguise it. Medium-rare at 130-135°F is not a preference here so much as the range where the cut works. The second error usually comes from people who think they dislike lamb: trimming the fat cap off entirely. It removes the insulation that keeps the surface from overcooking, removes the basting fat, and takes away most of the flavour, since the branched-chain fatty acids that give lamb its character live in the fat rather than the meat. If the flavour is too strong, trim the cap thinner and score it — don't remove it."
  },
  buying: "Ask for the chine bone removed and the rack frenched, both of which are butcher work rather than home work. A rack should be eight bones; racks sold as six or seven have been shortened. Look for a firm white fat cap — yellow fat usually means an older animal and a stronger flavour, which some people want. American lamb is larger, milder and grain-finished; New Zealand and Australian lamb is smaller, grass-fed and more pronounced, and the racks are noticeably smaller per bone. Two racks tied together standing up is a crown roast, which looks impressive and cooks unevenly. One rack feeds two generously.",
  temps: "125-130°F pulled, resting to 130-135°F for medium-rare. 140°F is medium and about the limit. Carryover on a small rack is three to five degrees, so pull early.",
  faq: [
    { q: "What does frenched mean and do I need it?",
      a: "Scraping the meat, fat and membrane off the exposed ends of the rib bones so they stand clean. It's mostly presentation, but it has a practical benefit — that thin intercostal meat would char to nothing before the loin was done. Ask the butcher to do it; scraping bones clean with a home knife is tedious and you'll leave grey shreds behind." },
    { q: "Why does lamb taste gamey to some people, and can I reduce it?",
      a: "The flavour comes largely from branched-chain fatty acids that concentrate in the fat, and grass-fed animals have more of them than grain-finished. So it's the fat, not the meat, carrying what people react to. Trimming the cap thinner reduces it. Choosing American grain-finished lamb over New Zealand grass-fed reduces it further. Serving it hot matters too — lamb fat has a high melting point and congeals on a cool plate, which makes the flavour much more assertive." },
    { q: "Rack or loin chops?",
      a: "The rack is the same muscle before it's cut into chops, and roasting it whole gives you far better control — one large piece has more thermal mass and a wider margin than eight thin ones. Cut it into chops after cooking. Buying individual rib chops is convenient and costs more per pound while being harder to cook well." }
  ]
},

{
  slug: "lamb-shank",
  name: "Lamb Shank",
  animal: "lamb",
  shelf: "lamb",
  aka: ["fore shank", "hind shank", "lamb hock"],
  match: ["lamb shank", "braised lamb shank"],
  dek: "The lower leg — one bone wrapped in hard-working muscle bound by heavy connective tissue. It is inedible cooked quickly and superb cooked for three hours, with no useful territory in between.",
  anatomy: "Shanks come from the bottom of either the front or hind leg. Hind shanks are larger and meatier, usually twelve to sixteen ounces each and enough for one person; fore shanks are smaller and often sold two per portion. The muscle wraps a single straight bone with a marrow core, and the whole thing is sheathed in a thick layer of silverskin and tendon. It's the most heavily worked muscle on the animal, which means the highest collagen concentration of any lamb cut. The marrow in the bone contributes fat and body to the braising liquid, which is why shanks make a self-saucing dish.",
  science: "Collagen at high concentration, muscle fibers that were built for endurance, and almost no intramuscular fat. That combination means it follows the same curve as beef shin or oxtail: nothing good happens until the connective tissue starts converting above 160°F, and the conversion needs hours, not minutes. Around 200°F and roughly three hours the collagen has hydrolyzed to gelatin and the muscle bundles separate under a fork. The gelatin dissolves into the liquid and gives it the glossy, lip-sticking body that a shank braise is known for — which is a physical property, not a seasoning one, and can't be replicated with a thickener.",
  methods: [
    { m: "Braise",
      why: "The definitive method. Wet heat holds the meat in the conversion band for hours without the surface drying, and the liquid becomes the sauce.",
      how: "Brown hard on all sides, then 300-325°F covered with liquid two-thirds up the shank, two and a half to three hours, turning once. Done when a fork twists with no resistance and the meat has retracted an inch up the bone." },
    { m: "Pressure cook",
      why: "Raises the temperature above boiling so collagen converts far faster, turning a three-hour dish into a forty-five minute one.",
      how: "Brown first, then forty-five minutes at high pressure with aromatics and liquid halfway up, natural release. Reduce the liquid hard afterwards, since nothing evaporates under pressure." },
    { m: "Low oven overnight",
      why: "A very long, very low cook converts collagen completely while keeping the muscle fibers from squeezing out as aggressively as they do at higher heat.",
      how: "250°F, tightly covered, six to eight hours. The meat falls away entirely. Best done a day ahead — chill overnight, lift the set fat off, and reheat in the sauce." },
    { m: "Sous vide then sear",
      why: "Precisely controls the collagen conversion and produces a sliceable rather than falling texture, which a braise can't do.",
      how: "158°F for twenty-four to thirty-six hours, then chilled, dried and seared hard. Holds shape while being fully tender. At 176°F for eight hours it goes closer to conventional braise texture." }
  ],
  avoid: {
    m: "Roasting or grilling them",
    why: "A shank looks like a small leg roast and gets treated like one, and dry heat is exactly what it cannot survive. There is essentially no intramuscular fat protecting the muscle and a very large amount of collagen locking the fibers together. Under dry heat the surface dehydrates long before the interior collagen has had the hours it needs, so you end up with a hard shell over meat that is simultaneously dry and rubbery — the fibers have expelled their water while the connective tissue is still fully intact. It cannot be rescued by resting, because resting does not convert collagen. Nothing converts collagen except sustained time above 160°F, and dry heat reaches that temperature at the surface long before the centre and burns the outside waiting."
  },
  buying: "Hind shanks are the better buy — meatier, and one per person is a proper portion. Ask the butcher whether they're fore or hind if it isn't marked; fore shanks are noticeably smaller. Some are sold with the top of the bone frenched for presentation, which is optional. Look for shanks with the silverskin intact; it's tough but it holds the shape during a long braise and the collagen in it converts along with everything else. Weight around a pound each is right. Lamb shanks are still relatively cheap compared to rack or loin, which given how good the result is makes them among the best value on the animal.",
  temps: "195-205°F internal, but texture is the real test — a fork should twist freely and the meat should have pulled back visibly up the bone. Three hours at 300-325°F, forty-five minutes under pressure, or twenty-four hours at 158°F sous vide.",
  faq: [
    { q: "How do I know when it's done?",
      a: "The meat retracts up the bone by an inch or more, leaving it exposed, and a fork twists in the thickest part with no resistance at all. Internal temperature around 200°F confirms it, but the fork test is more reliable because the shank's shape makes probe placement inconsistent. If there's any springiness left, it needs more time — undercooked shank is the most common failure and the only fix is another forty-five minutes." },
    { q: "Can I make it ahead?",
      a: "It's better made ahead. Chill it in the braising liquid overnight — the fat sets on top and lifts off cleanly, which is far easier than skimming hot, and the meat reabsorbs liquid as it cools. Reheat gently in the sauce at 300°F for forty minutes. This is a dish that improves on day two, which is unusual and worth exploiting." },
    { q: "Why is my sauce thin?",
      a: "Either not enough time — the collagen hadn't converted, so the gelatin never made it into the liquid — or too much liquid to start. The shank should be two-thirds submerged, not swimming. If it's cooked through and the sauce is still thin, lift the shanks out and reduce the liquid hard on the stove; a properly converted braise will go glossy and coat a spoon as it reduces." }
  ]
},

{
  slug: "lamb-leg",
  name: "Leg of Lamb",
  animal: "lamb",
  shelf: "lamb",
  aka: ["gigot", "bone-in leg", "butterflied leg", "boneless leg"],
  match: ["leg of lamb", "lamb leg", "butterflied lamb"],
  dek: "The hind leg, five to eight pounds, and the cut most Easter and holiday tables mean by lamb. Several distinct muscles of different thickness under one fat cap, which is why butterflying it — flattening the whole thing to an even depth — is usually the better decision than roasting it whole.",
  anatomy: "The leg runs from the hip through to the shank, containing the top round (inside), bottom round (outside), sirloin tip and eye — the same architecture as a beef round on a smaller scale. Sold three ways: whole bone-in with the shank attached, semi-boneless with the aitch bone removed, or boned and butterflied into a rough flat sheet. The muscles are separated by clean seams and differ substantially in thickness and tenderness, which is the central difficulty. Whole and bone-in, the thin end near the shank is well done by the time the thick sirloin end is medium-rare. Butterflied, everything is roughly the same depth.",
  science: "A working limb, so more collagen than the loin and less than the shank, with modest intramuscular fat and a good external cap. The muscles are large enough to hold a temperature gradient, which cuts both ways — a whole leg gives you a range of doneness from the ends inward, which some people want, while a butterflied one gives uniformity. The leg has enough connective tissue that it can also be taken the other direction entirely: held for many hours above 170°F it converts and pulls, which is what a seven-hour gigot does. Both approaches work. The failure zone is the middle, around 150-160°F, where the fibers have contracted but the collagen hasn't converted.",
  methods: [
    { m: "Butterfly and grill",
      why: "Flattening removes the thickness problem entirely, cuts the cooking time to half an hour, and exposes far more surface to char.",
      how: "Bone it out or buy it butterflied, open to an even inch and a half — score the thick parts to flatten. Marinate with garlic, rosemary, lemon and oil. Hot direct heat, six to eight minutes a side, then indirect to 130°F. Rest fifteen." },
    { m: "Roast whole bone-in",
      why: "The traditional presentation, and the bone conducts heat and adds flavour. Accept a gradient of doneness rather than fighting it.",
      how: "Studded with garlic and rosemary, 450°F for twenty minutes then 325°F for the remainder — roughly fifteen minutes per pound to 130-135°F at the thickest point. Rest twenty-five minutes." },
    { m: "Seven-hour gigot",
      why: "Goes the other way deliberately, holding the leg long enough above 170°F that the collagen converts and the whole thing pulls apart with a spoon.",
      how: "250°F, covered, with wine, stock and aromatics, seven hours. It is not carved; it's served in pieces. Completely different dish from the same cut." },
    { m: "Reverse sear",
      why: "A large roast benefits from arriving at temperature evenly and then browning, rather than browning first and cooking inward from a hot exterior.",
      how: "250°F to 120°F internal — around two hours for a five-pound leg — rest, then 500°F for ten to fifteen minutes to colour the fat cap." }
  ],
  avoid: {
    m: "Roasting it whole to a single target and expecting it all to be medium-rare",
    why: "A bone-in leg tapers from a thick sirloin end to a thin shank end, and the muscles inside differ in density as well. Cook to 130°F at the thickest point and the shank end has been past 150°F for half an hour; cook until the thin end is right and the centre is raw. This is not a technique failure, it is geometry, and no amount of resting or tenting changes it. The realistic options are to accept the gradient and serve people the doneness they prefer, which is how it has traditionally been done, or to butterfly the leg so the whole thing is one depth. What doesn't work is following a single temperature instruction on a whole leg and being surprised that half of it missed."
  },
  buying: "Butterflied is the more practical buy for most cooking and most butchers will do it if asked. Bone-in whole legs are five to eight pounds and feed eight to twelve; ask for the aitch bone removed, since it makes carving far easier and is difficult at home. Look for firm white fat rather than yellow, which indicates an older animal. American lamb is bigger and milder; New Zealand legs are smaller — often three to four pounds — and more strongly flavoured, which suits a marinade. If you buy boneless and rolled, unroll it and check the inside; some are tied around large pockets of fat and sinew that should have been trimmed.",
  temps: "130-135°F at the thickest point for medium-rare, resting twenty-five minutes for a whole leg — carryover on a piece this size can be eight to ten degrees, so pull early. Butterflied: 130°F. Seven-hour version: 190-200°F.",
  faq: [
    { q: "Bone-in or boneless?",
      a: "Bone-in has more flavour, cooks slightly more gently near the bone, and looks better on the table, but it carves awkwardly and cooks unevenly. Boneless and butterflied cooks evenly in a third of the time and takes marinade far better because there's more exposed surface. For a holiday centrepiece, bone-in. For anything you actually want to taste consistent, butterflied." },
    { q: "How long should it rest?",
      a: "Twenty-five to thirty minutes for a whole leg, which is longer than people expect. A five-pound roast has enough thermal mass that carryover will raise the interior eight to ten degrees, so pulling at 130°F and resting lands you at 138-140°F. Cutting early also loses a substantial amount of juice, since the fibers haven't relaxed enough to reabsorb it." },
    { q: "Do I need to marinate it?",
      a: "For butterflied, yes — the exposed surface area makes it genuinely effective, and garlic, rosemary, lemon and oil for four to twenty-four hours changes the result. For a whole bone-in leg, marinade only reaches a few millimetres in, so studding it with garlic slivers and rosemary pushed into knife slits does far more than soaking it. Salt is the exception; salt penetrates and should go on a day ahead either way." }
  ]
},

// --------------------------------------------------------------------- BEEF
{
  slug: "short-rib",
  name: "Beef Short Rib",
  animal: "beef",
  shelf: "beef",
  aka: ["English cut", "flanken", "plate short rib", "chuck short rib", "kalbi"],
  match: ["short rib", "short ribs", "kalbi", "flanken"],
  dek: "Ribs six through ten off the plate or chuck, with a thick slab of well-marbled muscle on top of the bone. Cut lengthwise between the bones it's English style for braising; cut thin across them it's flanken, and it grills in four minutes. Same cut, two entirely different dishes.",
  anatomy: "Short ribs come from below the rib primal, where the ribs continue down toward the belly after the ribeye has been removed above. Plate short ribs — ribs six to eight — are the big ones, with three to four inches of meat over the bone; chuck short ribs, from further forward, are smaller. The muscle is intercostal and serratus, both hard-working, laced with fat and heavy sheets of connective tissue. English cut separates the ribs into individual bones with the meat sitting on top. Flanken cut runs the saw across all the bones at once, giving thin strips with several bone cross-sections — the Korean kalbi format.",
  science: "One of the highest combinations of fat and collagen on the animal, which is why it's forgiving in a braise and why it has become the standard for barbecue beef ribs. The collagen needs hours above 160°F to convert; the abundant intramuscular fat renders across the same period and coats the fibers, so unlike a lean cut it doesn't dry out as it passes 180 and 190°F. Cut thin as flanken, the geometry changes everything — a quarter-inch strip cooks through in under two minutes, so there's no time for collagen conversion, and instead the thin slices sever the connective tissue mechanically. That's why flanken works fast and English cut doesn't.",
  methods: [
    { m: "Braise (English cut)",
      why: "Sustained wet heat converts a very high collagen load into gelatin, and the fat renders into the liquid to make a sauce with real body.",
      how: "Brown hard, then 300-325°F covered with liquid two-thirds up, two and a half to three and a half hours to 200-205°F. Chill overnight in the liquid, lift the fat cap, reheat. This is the dish that most rewards being made a day ahead." },
    { m: "Smoke (plate ribs)",
      why: "The fat and collagen content survives eight hours of dry heat, and plate short ribs are the cut behind Texas 'dino ribs'.",
      how: "250-275°F, unwrapped the whole way for bark, six to nine hours to 203-208°F. Probe should slide in like warm butter. Salt and coarse pepper only — the meat doesn't need more." },
    { m: "Grill flanken as kalbi",
      why: "Thin cross-cut strips cook through before connective tissue matters, and the marinade's sugar caramelizes hard over direct fire.",
      how: "Marinate quarter-inch flanken in soy, pear, garlic, sesame and sugar for four to twelve hours. Screaming hot grill, ninety seconds to two minutes a side. Any longer and it's leather." },
    { m: "Sous vide",
      why: "Holds the meat in the collagen conversion band for a long time at a temperature low enough to keep steak-like texture, which no other method achieves.",
      how: "War between two targets: 133-140°F for forty-eight to seventy-two hours gives a medium-rare texture that's still tender, while 165°F for twenty-four hours gives conventional braise texture. Sear hard after either." }
  ],
  avoid: {
    m: "Braising flanken, or grilling English cut",
    why: "The two cuts share a name and a price bracket and are not interchangeable in either direction. English cut on a grill is the more expensive mistake: a three-inch block of collagen-heavy muscle over direct heat chars on the outside while the interior stays well below the temperature where connective tissue converts, and what comes off is burnt on the surface and rubbery throughout. Flanken in a braise fails the other way — quarter-inch strips have already been mechanically tenderized by the saw, and two hours in liquid pushes the thin muscle far past the point where it holds any water, so it disintegrates into stringy shreds with no texture left. Check the cut direction before you decide the method: bones in a row along one edge means braise, bones as several small circles across the strip means grill."
  },
  buying: "Ask which primal — plate short ribs are meatier and better for smoking, chuck short ribs are cheaper and fine for braising. Bone-in always; the bone contributes gelatin and the meat shrinks away from it as a doneness cue. Look for a thick, even layer of meat over the bone rather than ribs that have been trimmed close, and real marbling through the muscle. Boneless short rib is usually chuck trim and is not the same thing. For kalbi, ask specifically for flanken cut at a quarter inch — most butchers will do it, and Korean groceries sell it ready cut. Figure one English-cut rib per person, or a pound of flanken for two.",
  temps: "Braised or smoked: 200-208°F, with a probe sliding in unresisted as the real test. Flanken: hot and fast, no internal target — pull it at two minutes a side. Sous vide: 133-140°F for 48-72 hours, or 165°F for 24.",
  faq: [
    { q: "What's the difference between short ribs and beef back ribs?",
      a: "Position and meat. Back ribs come from the top of the ribcage after the ribeye is removed, so most of the meat has already been cut away and what's left is between the bones. Short ribs come from lower down and carry a thick slab of meat on top of the bone. Back ribs are cheap and mostly about gnawing; short ribs are a proper piece of meat with a bone attached, and they cost accordingly." },
    { q: "Can I use boneless short ribs?",
      a: "Usually, but check what you're buying. Genuine boneless short rib is the same muscle with the bone removed and works fine in a braise, losing a little gelatin. A lot of what's labelled boneless short rib is actually chuck cut into rib-shaped strips — decent meat, but less marbled and less collagen-rich, so it won't give the same richness. If it's much cheaper than the bone-in, that's usually what it is." },
    { q: "Why do mine come out greasy?",
      a: "Short rib carries a lot of fat and a braise renders most of it into the liquid, where it sits on top. The fix is to make it a day ahead: chill the whole pot overnight and the fat sets into a solid disc you can lift off in one piece, which is far more effective than skimming a hot liquid. Skipping that step is the single most common reason a short rib braise tastes heavy rather than rich." }
  ]
},

{
  slug: "oxtail",
  name: "Oxtail",
  animal: "beef",
  shelf: "beef",
  aka: ["beef tail", "cola de res", "kare-kare cut"],
  match: ["oxtail", "ox tail"],
  dek: "The tail, cut crosswise into segments. Almost nothing but bone, marrow, cartilage and hard-worked muscle wrapped in connective tissue — which makes it a poor piece of meat and the single best source of body in a braise anywhere on the animal.",
  anatomy: "The tail is a chain of vertebrae, tapering from a thick base to a thin tip, sold cut between the joints into rounds an inch or two thick. Each segment is a cross-section of bone with a marrow core, surrounded by small muscles that spend the animal's life in constant low-level motion, all bound together by heavy sheets of connective tissue and cartilage. The pieces from the base are meaty and the ones from the tip are almost entirely bone, which is why a package sold by weight can be a poor buy if it's all thin end. It was genuinely cheap within living memory and is not any more, largely because chefs worked out what it does to a sauce.",
  science: "The highest ratio of collagen to muscle of any commonly sold beef cut. Over three to four hours above 160°F that collagen hydrolyzes into gelatin and dissolves into the surrounding liquid, giving a viscosity and mouthfeel that no starch or reduction reproduces — a properly cooked oxtail braise will set to a firm jelly in the fridge. The marrow contributes fat and its own emulsifiers. The muscle itself is fine-grained and, once the connective tissue holding it together has gone, falls into short tender shreds. Nothing about this is fast: the collagen load is so high that under-cooking by even forty-five minutes leaves it noticeably chewy.",
  methods: [
    { m: "Braise long",
      why: "The definitive treatment. Enough time above 160°F for a very heavy collagen load to convert, with the gelatin going straight into the sauce.",
      how: "Brown very hard — the surface area is high and browning is most of the flavour — then 300°F covered with liquid two-thirds up, three and a half to four hours. Chill overnight, lift the fat, reheat. Meat should slide off the bone with no pressure." },
    { m: "Pressure cook",
      why: "Higher temperature accelerates collagen hydrolysis, turning a four-hour braise into just over an hour.",
      how: "Brown first, then fifty to sixty minutes at high pressure, natural release. Reduce the liquid hard afterwards. Slightly less depth than a long oven braise, and most of the benefit." },
    { m: "Stock and broth",
      why: "The gelatin yield is so high that oxtail added to a stock pot produces a stock that sets like rubber, which is the point of most Caribbean and Chinese oxtail soups.",
      how: "Blanch first to clear the scum, then simmer four hours with aromatics. Skim often. The result gels firmly when cold, which is the sign it worked." },
    { m: "Kare-kare or peanut-based stews",
      why: "The gelatin body pairs with ground nut thickeners, and the long cook lets the sauce and the meat exchange flavour completely.",
      how: "Simmer the oxtail three hours until tender, then build the sauce with ground toasted peanuts and annatto in the strained liquid, returning the meat at the end." }
  ],
  avoid: {
    m: "Stopping at three hours because it looks done",
    why: "Oxtail looks tender long before it is. After two and a half to three hours the exterior has softened, the liquid has coloured and the fat has rendered, and it presents as finished — and then every mouthful has a chewy, rubbery quality that people mistake for the cut simply being like that. It isn't. Oxtail carries more collagen per gram of muscle than almost anything else in the butcher's case, and collagen conversion is a rate, not a threshold: the sheets of connective tissue between those small muscles need the full three and a half to four hours above 160°F to hydrolyze. The tell is whether the meat slides off the bone under its own weight when you lift a piece with tongs. If it clings at all, it is not done, and the only remedy is another forty-five minutes."
  },
  buying: "Ask for pieces from the thick end — a package of nothing but tail-tip rounds is mostly bone and poor value at current prices. Segments an inch and a half to two inches thick with a visible ring of meat around the bone are what you want. It is no longer a cheap cut and has not been for years, so compare price per pound against short rib before assuming it's the budget option. Frozen is common and perfectly acceptable here, since the long cook makes texture damage from freezing irrelevant. Figure a pound per person, since a large proportion of the weight is bone.",
  temps: "Not a temperature cut. Three and a half to four hours at 300°F, or fifty to sixty minutes under pressure. Done when the meat falls off the bone under its own weight and the liquid gels solid when chilled.",
  faq: [
    { q: "Why is oxtail so expensive now?",
      a: "Supply and demand both moved. There is only one tail per animal and it's a small fraction of the carcass, and over the last two decades restaurant and home cooks worked out that the gelatin it produces can't be faked. It went from an offcut sold cheaply to a specialty item. Short rib and beef shin will give you a similar richness for less money, though neither quite matches it." },
    { q: "Do I need to blanch it first?",
      a: "For a clear soup or broth, yes — cover with cold water, bring to a boil for ten minutes, then drain and rinse the pieces. It removes the scum that would otherwise cloud the liquid. For a dark braise where you're browning the pieces anyway, skip it; browning is doing more for flavour than blanching would do for clarity, and you'd be washing away what you want." },
    { q: "How do I know the collagen actually converted?",
      a: "Chill some of the liquid. If it sets to a firm jelly you can turn a spoon in, the collagen has hydrolyzed into gelatin and the meat will be tender. If it stays liquid or only slightly thickened, it needed more time — and so did the meat. It's a more reliable test than probing, because the tail's shape makes internal temperature readings inconsistent." }
  ]
},

{
  slug: "hanger-steak",
  name: "Hanger Steak",
  animal: "beef",
  shelf: "beef",
  aka: ["butcher's steak", "onglet", "hanging tender", "solomillo de pulmón"],
  match: ["hanger steak", "onglet", "butcher's steak"],
  dek: "One per animal, hanging from the diaphragm — which is why butchers historically kept it for themselves. Deeply beefy, coarse-grained, and split down the middle by an inedible sinew that has to come out before you cook it.",
  anatomy: "The hanger is part of the diaphragm, suspended between the last rib and the loin, near the kidneys. It's not a locomotive muscle — it works constantly but gently, contracting with every breath — which gives it an unusual combination of very coarse grain and reasonable tenderness. There is exactly one per carcass, weighing a pound to a pound and a half trimmed. Down the centre runs a thick band of connective tissue, and the two lobes of muscle on either side run their grain in different directions. That sinew does not soften at any temperature and must be cut out, leaving two long strips. Its proximity to the kidneys gives it a faintly mineral, organ-adjacent note that is either the reason to buy it or the reason not to.",
  science: "Coarse muscle fibers with substantial intramuscular fat and a high myoglobin content from constant use, which is where the strong flavour comes from. The coarse grain means it drinks marinade well and, more importantly, that slicing direction matters enormously — the fibers are thick enough that cutting with the grain rather than across it produces genuinely stringy meat regardless of how well it was cooked. Because the two lobes have different grain directions, they should be separated and sliced independently. It's a thin cut with little thermal mass, so it moves fast; hanger goes from rare to medium in about ninety seconds over high heat.",
  methods: [
    { m: "Hot and fast over direct heat",
      why: "Thin, coarse-grained and best rare to medium-rare — high heat builds crust before the interior climbs past 130°F.",
      how: "Remove the central sinew first. Dry thoroughly, salt an hour ahead. Screaming-hot grill or cast iron, three to four minutes a side to 125-130°F. Rest ten minutes, slice thin across the grain." },
    { m: "Marinate then sear",
      why: "The coarse open grain takes marinade further in than fine-grained cuts, and acid plus salt improves both flavour and water retention.",
      how: "Four to twelve hours in something with acid, salt and oil — soy, garlic, shallot and red wine is classic for onglet. Dry the surface completely before it hits the pan or it will steam." },
    { m: "Sous vide then sear",
      why: "Removes the narrow window on a cut that's easy to overshoot, and a long hold softens the coarse fibers slightly.",
      how: "130°F for two to four hours, then chilled briefly, dried, and seared sixty seconds a side in a smoking pan." },
    { m: "Pan sear for steak frites",
      why: "The cut's traditional home. Its strong flavour stands up to a butter pan sauce in a way a lean tenderloin doesn't.",
      how: "Sear hard, rest, then build a sauce in the pan with shallot, wine and butter. Slice across the grain and spoon the sauce over." }
  ],
  avoid: {
    m: "Cooking past medium, and slicing with the grain",
    why: "Two failures that both make a good steak inedible. Past about 135°F the coarse fibers contract hard, and because there's no fine-grained structure to disguise it, hanger goes from tender to genuinely tough in a very short temperature range — much faster than a ribeye, which has fat throughout to buffer it. The slicing error is worse because it's invisible until someone chews. Hanger's fibers are thick enough to see, and a slice cut along them leaves those fibers full-length, so eating it means chewing through inch-long strands. Cut across them and each bite is short segments. Compounding it, the two lobes either side of the sinew run their grain in different directions, so you cannot slice the whole piece one way — separate them, look at each, and cut each across its own grain."
  },
  buying: "Ask for it by name and call ahead, since there's one per animal and shops often have none. It should come already trimmed of the central sinew at a good butcher; if not, take it out yourself with a boning knife, cutting close along either side. Trimmed weight around a pound feeds two to three. Look for deep red colour and visible marbling through the coarse grain. It's usually cheaper than ribeye or strip and has more flavour than either, which is the argument for it. The related cuts — skirt and flank — are more widely available and behave similarly, though skirt is thinner and flank is finer-grained.",
  temps: "125-130°F pulled, resting to about 130-135°F. Do not go past 135°F. Sous vide 130°F. Rest ten minutes, then slice thin across the grain.",
  faq: [
    { q: "Why is it called butcher's steak?",
      a: "Because butchers kept it. There's one per animal, it was historically not a recognised retail cut, and it happens to be one of the most flavourful things on the carcass — so it went home with whoever was breaking the carcass rather than into the case. The French name onglet is more common in restaurants, where it's the traditional cut for steak frites." },
    { q: "Hanger, skirt or flank — what's the difference?",
      a: "All three are thin, coarse-grained, strongly flavoured cuts from the underside that want fast high heat and cross-grain slicing. Hanger is from the diaphragm, one per animal, most tender and most mineral-tasting. Skirt is also diaphragm, thinner and fattier, the traditional fajita cut, and the most forgiving. Flank is from the abdominal wall, leaner, wider and finer-grained. Hanger is the best of the three and the hardest to find." },
    { q: "Do I have to remove the sinew?",
      a: "Yes. It's a thick band of elastin running the length of the cut, and unlike collagen it doesn't convert to anything at cooking temperatures — it stays as a rubber cord. It also contracts as it heats, which bows the steak and makes it cook unevenly. Cut down either side of it with a thin knife and you're left with two clean lobes, which you'll want to separate anyway because their grain runs differently." }
  ]
},

{
  slug: "tri-tip",
  name: "Tri-Tip",
  animal: "beef",
  shelf: "beef",
  aka: ["triangle roast", "Santa Maria steak", "bottom sirloin butt", "culotte"],
  match: ["tri tip", "tri-tip", "santa maria"],
  dek: "A triangular muscle off the bottom sirloin, popularised on the central California coast and largely unknown elsewhere until recently. Lean, well-flavoured, and notorious for one thing: the grain changes direction partway through, so half of any carved tri-tip is sliced wrong.",
  anatomy: "The tri-tip is the tensor fasciae latae, a triangular muscle at the bottom of the sirloin near the hip, weighing one and a half to two and a half pounds. It has a fat cap on one side and tapers from a thick end to a thin point, which is the first problem — the tip is done well before the thick end. The second and more serious problem is that the muscle fibers run in two distinct directions that meet at an angle roughly in the middle, so a single straight cut across the roast will be across the grain for one half and along it for the other. Correct carving means finding the junction, cutting the roast in two at that point, and slicing each half separately.",
  science: "Leaner than a ribeye with a moderate amount of intramuscular fat and enough connective tissue that it benefits from being cooked no further than medium-rare. It's thick enough to hold a real temperature gradient, which is why the reverse sear suits it so well — a hot-and-fast cook gives a grey band around a rare centre, while a slow approach followed by a sear gives an even interior with a crust. Its leanness also means it takes smoke well and dries quickly past 140°F, since there is no marbling to compensate. The traditional Santa Maria treatment — red oak coals, salt, pepper and garlic — works because the muscle's own flavour is strong enough not to need more.",
  methods: [
    { m: "Reverse sear",
      why: "The tapering shape and lean muscle both benefit from a slow even climb, and the sear at the end handles the crust the low heat can't.",
      how: "Salt an hour or more ahead. 250°F oven or indirect grill to 120-125°F, forty-five minutes to an hour. Rest ten, then sear hard over direct coals or in cast iron, ninety seconds a side." },
    { m: "Santa Maria grill",
      why: "The traditional method, cooking over live coals with the roast raised and lowered to control heat, which gives a smoky char the oven can't.",
      how: "Red oak if you can get it. Fat cap down over direct heat to render and colour, ten minutes, then moved to indirect, fat cap up, twenty to thirty minutes to 130°F. Rub is salt, black pepper and granulated garlic — nothing else." },
    { m: "Smoke",
      why: "Takes smoke well and cooks fast enough for a weeknight, unlike brisket, which is why it's sometimes called the poor man's brisket.",
      how: "225-250°F to 125°F internal, about ninety minutes, then a hard sear. Do not take it to brisket temperatures — it has none of brisket's fat and will be dry and crumbly." },
    { m: "Sous vide then sear",
      why: "Sidesteps the taper entirely, since the thin end can't overshoot a bath set to the target temperature.",
      how: "130-133°F for four to six hours, then dried thoroughly and seared hard. Longer holds soften the connective tissue further without raising doneness." }
  ],
  avoid: {
    m: "Carving it in one direction, and cooking it like brisket",
    why: "The carving error is the one that defines this cut. Tri-tip's fibers run in two directions meeting at an angle near the middle of the roast, so slicing straight across the whole thing means half the slices are cut along the grain, leaving long intact fibers that chew like rope. The meat can be cooked perfectly and still be described as tough purely because of this. Find the seam where the grain changes, cut the roast into two pieces there, then slice each piece across its own grain. The second error comes from the nickname: tri-tip is sometimes sold as a budget brisket, and taken to brisket's 200°F+ it falls apart into dry crumbs, because it has neither the fat nor the collagen that lets brisket survive that. It is a lean roast that stops at 130-135°F."
  },
  buying: "Widely available on the US west coast and increasingly elsewhere; ask for bottom sirloin tri-tip if the counter doesn't know the name. Buy it with the fat cap on and trim it yourself to about a quarter inch — many are sold trimmed bare, which removes the basting and the flavour. One and a half to two and a half pounds is standard and feeds four to six. Look for even marbling; a very lean tri-tip has nothing to give at medium-rare. Untrimmed and bone-in versions are rare. It is usually priced between chuck and ribeye, which makes it one of the better value-per-flavour cuts in the case.",
  temps: "125-130°F pulled, resting to 130-135°F for medium-rare. It is a lean cut and 140°F is already noticeably dry. Rest ten to fifteen minutes, then find the grain junction before carving.",
  faq: [
    { q: "How do I actually find the grain change?",
      a: "Look at the surface of the cooked roast before cutting — the fiber direction is visible, especially after a sear. You'll see lines running one way from the thick end and another way from the tip, meeting at a rough diagonal near the middle. Cut the roast in two along that line first, then turn each piece and slice across its own fibers. If you can't see it, cut the roast in half at its widest point and check the grain on each cut face before slicing further." },
    { q: "Is it really the poor man's brisket?",
      a: "Only in the sense that it's a cheaper beef roast that takes smoke well. Compositionally they're opposites: brisket is heavily collagenated and fatty and needs to reach 200°F+ for hours, tri-tip is lean and needs to stop at 130°F. Following brisket instructions on a tri-tip destroys it. The nickname causes more bad dinners than it prevents." },
    { q: "Why can't I find it outside California?",
      a: "You increasingly can, but historically most of the US ground this muscle into hamburger — it's a small awkward triangle that doesn't fit the standard retail cutting pattern. Santa Maria in central California developed it as a barbecue cut in the mid-twentieth century and it stayed regional for decades. Butchers elsewhere will often cut one for you from the bottom sirloin if you ask by the anatomical name." }
  ]
},

// ---------------------------------------------------------- TURKEY AND DUCK
{
  slug: "turkey-breast",
  name: "Turkey Breast",
  animal: "turkey",
  shelf: "turkey",
  aka: ["turkey crown", "boneless turkey breast", "bone-in breast", "London broil turkey"],
  match: ["turkey breast", "turkey crown"],
  dek: "The largest lean muscle sold in any supermarket, and the reason most people's turkey is dry. It is done at 157°F and it is sawdust at 175°F, which is a problem when it's attached to legs that want 180°F.",
  anatomy: "The pectoralis major is enormous on a commercial turkey — modern broad-breasted whites have been selected so hard for breast yield that the birds cannot fly or breed naturally, and a single breast can weigh six to nine pounds. Because it's a flight muscle on a bird that never flies, it's almost entirely fast-twitch white fibers with very little myoglobin, minimal fat and almost no connective tissue. It's also thick and domed, which is the practical difficulty: the outer inch reaches temperature long before the centre. Sold as a whole bone-in crown, as a boneless roast tied in netting, or as cutlets.",
  science: "Lean white muscle with under 2% fat and negligible collagen means there is nothing buffering the cook. Water loss accelerates sharply past 155°F, and by 170°F a turkey breast has lost roughly a quarter of its weight. Salmonella pasteurization is a function of time as well as temperature — the 165°F figure is for instantaneous kill, but the same lethality is achieved by holding 157°F for about a minute, or 150°F for around three minutes. Since a large roast spends many minutes climbing through that range, pulling at 157°F is both safe and dramatically better eating. Brining works particularly well here because the muscle has so little fat: dissolved salt lets the protein matrix hold water it would otherwise expel.",
  methods: [
    { m: "Dry-brine then roast separately from the legs",
      why: "Removes the fundamental conflict of roasting a whole bird, where breast and legs want temperatures twenty degrees apart.",
      how: "Salt at 1% of weight, uncovered in the fridge, one to three days. Roast the breast at 325°F to 157°F internal — about two hours for a bone-in crown — while the legs go separately at 350°F to 180°F." },
    { m: "Spatchcock the whole bird",
      why: "Flattening the bird exposes the legs to more heat and shields the breast, narrowing the gap between how fast each cooks.",
      how: "Backbone out, press flat, roast at 425°F. The legs sit at the hot edges and the breast in the centre. Roughly eighty minutes for a fourteen-pound bird, pulling when the breast reads 157°F." },
    { m: "Sous vide then sear",
      why: "Makes the temperature problem disappear entirely — the breast cannot exceed the bath, so it's impossible to overshoot.",
      how: "145-150°F for three to four hours (safe by extended hold), then chilled, dried and browned hard in a pan or under a broiler for colour." },
    { m: "Buttermilk or wet brine",
      why: "A lean muscle with no fat benefits more than any other from being pre-loaded with water and having its proteins modified to hold it.",
      how: "5-6% brine for eight to twelve hours, or buttermilk with salt for twenty-four. Rinse, then dry uncovered in the fridge for several hours before roasting or the skin will never crisp." }
  ],
  avoid: {
    m: "Cooking the whole bird to 165°F in the breast",
    why: "This is the standard instruction and it is the reason for the standard result. Two separate problems compound. First, 165°F is an instantaneous-kill number, but pasteurization is time-and-temperature — 157°F held for a minute achieves the same lethality, and a large roast passes through that range slowly enough to be safe several times over. So the target is unnecessarily high by about eight degrees, which on a muscle this lean is the difference between juicy and chalky. Second, the legs genuinely need 175-180°F for their connective tissue to convert, so cooking the bird as one unit means the breast is dragged well past even 165°F while you wait. Separating the two, or spatchcocking, is the only real fix. Basting doesn't help; it just opens the oven."
  },
  buying: "A bone-in crown roasts better than a boneless netted roast — the bone moderates the heat and the shape holds together. Check the label for a salt solution: a great many supermarket turkeys are pre-injected at 8-15%, which means brining them again makes them inedibly salty and also means you're paying meat prices for water. Heritage breeds have smaller breasts and proportionally more leg, which cooks far more evenly and tastes better, at roughly double the price. For a crowd, buying a breast and legs separately rather than a whole bird is almost always the better decision and nobody at the table minds.",
  temps: "157°F pulled, resting to about 160-165°F. That is safe — pasteurization at 157°F takes under a minute and the roast spends far longer than that in the range. Legs are a separate matter at 175-180°F. Sous vide 145-150°F for three hours.",
  faq: [
    { q: "Is 157°F actually safe for turkey?",
      a: "Yes. The 165°F figure is the temperature at which salmonella is killed instantly, which makes it a convenient single number for a food-safety poster. Lethality is really a function of both temperature and time: 157°F for about a minute, or 150°F for roughly three minutes, achieves the same seven-log reduction. A large roast takes many minutes to climb through that range, so it's pasteurized well before it reaches the target. The USDA's own tables include these equivalencies." },
    { q: "Should I brine or dry-brine?",
      a: "Dry-brine, in almost every case. Salting the surface and leaving it uncovered in the fridge for one to three days seasons the meat all the way through, improves water retention through the same protein mechanism as a wet brine, and dries the skin so it actually crisps. Wet brining adds water that then has to evaporate, which makes the skin flabby, and it takes up an enormous amount of fridge space. Check first that the bird isn't already injected with solution." },
    { q: "Why does my breast dry out even at the right temperature?",
      a: "Usually the thermometer placement. The breast is thick and domed, and probing too shallow or too close to the bone reads high, so you pull when the centre has already gone past. Measure at the thickest point, angled in from the neck end, and check two or three places. The other common cause is a pre-injected bird that was then brined again, which damages the protein structure and leaves the meat spongy and unable to hold water." }
  ]
},

{
  slug: "duck-breast",
  name: "Duck Breast",
  animal: "duck",
  shelf: "duck-meat",
  aka: ["magret", "duck magret", "Pekin breast", "Moulard breast"],
  match: ["duck breast", "magret"],
  dek: "Red meat under a thick cap of fat, cooked like a steak rather than like poultry — medium-rare at 130-135°F. Getting it right is entirely about rendering that fat cap, which means starting in a cold pan and being far more patient than feels reasonable.",
  anatomy: "Unlike chicken, duck actually flies, so the breast is a working muscle: dark, dense, high in myoglobin and closer to beef than to poultry in both colour and behaviour. Over it sits a fat layer up to half an inch thick, separated from the muscle by a thin membrane, with skin on top. There's essentially no intramuscular fat — all of it is in that cap. Pekin breasts run six to eight ounces and are the common supermarket duck; magret, from the Moulard ducks raised for foie gras, are twice the size and much richer. The fat cap needs scoring in a crosshatch through the fat but not into the meat, which opens channels for the fat to escape.",
  science: "The problem is that the fat cap and the muscle want opposite things. Rendering fat requires sustained moderate heat and time — the fat has to melt and flow out, which takes ten to fifteen minutes — while the muscle beneath is thin and reaches medium-rare in a few minutes. Starting in a cold pan solves it: as the pan heats slowly, the fat renders and drains before the muscle has climbed much at all, and the meat effectively cooks in a bath of its own rendering fat at a controlled temperature. Drop a duck breast into a hot pan and the skin seizes and browns while the fat underneath stays solid, giving a flabby layer of unrendered fat between crisp skin and cooked meat.",
  methods: [
    { m: "Cold pan render",
      why: "The only reliable way to fully render a thick fat cap without overcooking the thin muscle beneath it.",
      how: "Score the fat in a crosshatch, salt, and place fat-side down in a cold dry pan. Turn the heat to medium-low. Twelve to eighteen minutes, pouring off fat as it accumulates, until the cap is thin, golden and crisp. Flip for ninety seconds to two minutes. Rest five to ten." },
    { m: "Render then finish in the oven",
      why: "For thicker magret breasts, the stovetop render alone may not bring the centre to temperature without over-browning the skin.",
      how: "Render as above, flip, then into a 400°F oven for three to five minutes to 130°F. Rest ten minutes before slicing." },
    { m: "Sous vide then crisp",
      why: "Separates the two jobs completely — the bath sets the doneness precisely, then a hot pan handles only the skin.",
      how: "130-135°F for one to two hours, then dried thoroughly and placed fat-side down in a hot dry pan for three to four minutes to render and crisp. Slightly less fat renders this way, so score deeply first." },
    { m: "Grill over indirect heat",
      why: "Rendering fat over direct flame flares violently, so the breast starts away from the fire and finishes over it briefly.",
      how: "Fat side up over indirect heat at 350°F for eight to ten minutes, then fat side down over direct for two to three minutes, watching for flare-ups." }
  ],
  avoid: {
    m: "Treating it like chicken — hot pan, cooked through to 165°F",
    why: "Duck is poultry taxonomically and red meat in every way that matters at the stove. Cooking a breast to 165°F takes a dense, dark, iron-rich muscle with no intramuscular fat well past the point where its fibers hold water, and produces something grey, tight and livery — which is where the belief that people dislike duck usually comes from. It belongs at 130-135°F, medium-rare, the same as a steak. Whole ducks and duck legs are different: those benefit from long cooking to 175°F+ because of their connective tissue. The other half of the error is the hot pan. A hot start seizes the skin before the fat beneath can melt, leaving a thick unrendered layer that reads as greasy no matter how crisp the surface looks."
  },
  buying: "Pekin (also sold as Long Island) breasts are six to eight ounces, milder, and what most shops carry — one per person. Moulard magret is twelve to sixteen ounces, much richer and deeper in flavour, and serves two. Look for a thick, unbroken white fat cap and dry-looking skin; any moisture in the package works against rendering. Frozen is generally fine, but thaw fully and dry the skin thoroughly, ideally uncovered in the fridge overnight. Ask whether the breast has been scored — most aren't, and it's easy to do at home with a sharp knife at a shallow angle. The rendered fat is a valuable by-product; buy accordingly and keep a jar for it.",
  temps: "130-135°F for medium-rare, pulled at about 128°F to allow for carryover. Rest five to ten minutes and slice thin across the grain. Duck legs are a different cut entirely and want 175-185°F.",
  faq: [
    { q: "Is pink duck breast safe?",
      a: "It's the standard preparation in every cuisine that takes duck seriously, and the risk profile is closer to beef than to chicken. Duck carries a much lower incidence of salmonella than chicken, the muscle is intact so contamination is a surface matter, and the surface is thoroughly seared. Whole ducks and ground duck are different, as is anything served to someone immunocompromised. But a seared whole-muscle breast at 130-135°F is a normal, widely accepted preparation." },
    { q: "How much fat should render out?",
      a: "A great deal — often a quarter to a third of a cup from a single magret. The cap should go from half an inch thick to a thin crisp layer maybe an eighth of an inch deep. If you're pouring off very little, the pan was too hot at the start and the skin sealed before the fat could escape, or the scoring wasn't deep enough. Deep enough means through the fat with the knife just short of the meat." },
    { q: "What do I do with the rendered fat?",
      a: "Keep every drop. Strained into a jar it lasts months in the fridge and is arguably the best roasting fat there is — potatoes cooked in duck fat are a different food. It's also what you need for confit if you go on to cook the legs. Throwing it out is throwing out one of the main reasons to buy duck." }
  ]
}

];

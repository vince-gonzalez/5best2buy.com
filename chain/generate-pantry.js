// generate-pantry.js — builds /what-can-i-make/ : a client-side "cook from what you've got" matcher.
// Reads data-ingredients.json (slug -> core ingredient tokens) and renders a pantry search.
// Ad-supported (non-recipe page). Run after generate-recipes.js. Append URL to sitemap in generate-aisles.
const fs = require('fs'), path = require('path');
const ROOT = 'C:/tmp/5b2b-live';
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'data-ingredients.json'), 'utf8'));
const DATA = JSON.stringify(data.filter(r => r.c && r.c.length));

const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/png" href="/logo.png" />
<link rel="apple-touch-icon" href="/logo.png" />
<link rel="manifest" href="/manifest.webmanifest" />
<meta name="theme-color" content="#0d1421" />
<title>What Can I Make? — Cook From What You've Got | 5best2buy.com</title>
<meta name="description" content="Tell us what's in your fridge and pantry — broccoli, some frozen fish, half an onion — and we'll show you what you can actually cook tonight, ad-free, with where to buy anything you're missing." />
<link rel="canonical" href="https://www.5best2buy.com/what-can-i-make/" />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GG5QF6LH0D"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GG5QF6LH0D');</script>
<meta name="google-adsense-account" content="ca-pub-8826956454892311" />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8826956454892311" crossorigin="anonymous"></script>
<style>
  :root{--navy:#0d1421;--surface:#121e30;--card:#16223a;--blue:#5fb0ef;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fd:'Rajdhani','Arial Narrow',sans-serif;--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--navy);color:var(--text);font-family:Georgia,'Times New Roman',serif;line-height:1.7;padding:18px 18px 60px;max-width:740px;margin:0 auto;font-size:17px;}
  .crumb{font-family:var(--fm);font-size:12.5px;letter-spacing:1px;text-transform:uppercase;color:var(--meta);}
  .crumb a{color:var(--meta);text-decoration:none;}
  .eyebrow{font-family:var(--fm);font-size:12.5px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin:22px 0 8px;}
  h1{font-family:var(--fd);font-size:clamp(34px,7vw,54px);font-weight:700;line-height:1.02;margin-bottom:12px;}
  .dek{color:var(--soft);max-width:60ch;margin-bottom:20px;}
  .box{width:100%;background:var(--surface);border:1px solid var(--line);border-radius:10px;color:var(--text);font-family:var(--fm);font-size:16px;padding:13px 15px;}
  .box:focus{outline:none;border-color:var(--gold);}
  .hint{font-family:var(--fm);font-size:15px;color:var(--meta);margin:7px 2px 0;}
  .chips{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 4px;}
  .tok{font-family:var(--fm);font-size:15px;font-weight:600;color:#10203a;background:var(--green);border-radius:20px;padding:5px 12px 5px 14px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;}
  .tok b{font-weight:700;font-size:15px;line-height:1;}
  .count{font-family:var(--fm);font-size:12px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);margin:22px 0 10px;}
  .sect{font-family:var(--fd);font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin:24px 0 10px;border-top:1px solid var(--line);padding-top:20px;}
  .sect.a{color:var(--soft);}
  .card{display:block;background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:10px;padding:12px 15px;margin-bottom:9px;text-decoration:none;}
  .card:hover{border-color:var(--gold);}
  .card .t{font-family:var(--fd);font-size:20px;font-weight:700;color:var(--text);line-height:1.12;}
  .card .m{font-family:var(--fm);font-size:15px;letter-spacing:.3px;color:var(--meta);margin-top:2px;}
  .card .need{color:var(--gold);}
  .empty{font-family:var(--fm);color:var(--meta);padding:24px 0;text-align:center;line-height:1.7;}
  .back{font-family:var(--fm);font-size:12px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);text-decoration:none;display:inline-block;margin-top:26px;}
</style>
</head>
<body>
  <nav class="crumb"><a href="/">5best2buy.com</a> &rsaquo; What Can I Make?</nav>
  <div class="eyebrow">5best2buy &middot; Pantry Search</div>
  <h1>What Can I Make?</h1>
  <p class="dek">Type what you've actually got — <em>broccoli, half an onion, some frozen fish</em> — and we'll show you what you can cook tonight. No sign-up, no ads on the recipe, and where to buy anything you're short.</p>
  <input class="box" id="box" type="text" placeholder="Type an ingredient and hit enter — chicken, rice, garlic…" autocomplete="off" autocapitalize="off" />
  <div class="hint">Add a few. Pantry basics (salt, pepper, oil, water) are assumed — no need to type them.</div>
  <div class="chips" id="chips"></div>
  <div id="out"></div>
  <a class="back" href="/recipes/">&larr; Browse all recipes instead</a>
<script>
const R=${DATA};
const box=document.getElementById('box'),chipsEl=document.getElementById('chips'),out=document.getElementById('out');
let have=[];
function add(v){v=v.trim().toLowerCase().replace(/[^a-z0-9 &-]/g,'');if(v.length<2)return;if(have.indexOf(v)<0)have.push(v);draw();}
function drawChips(){chipsEl.innerHTML=have.map(function(h,i){return '<span class="tok" data-i="'+i+'">'+h+' <b>&times;</b></span>';}).join('');}
function covered(item){return have.some(function(u){return item.indexOf(u)>-1;});}
function tl(m){return m>=60?(m%60?Math.floor(m/60)+'h '+(m%60)+'m':Math.floor(m/60)+'h'):m+' min';}
function draw(){
  drawChips();box.value='';
  if(!have.length){out.innerHTML='<div class="empty">Add a couple of things you have on hand and we\\'ll do the rest.</div>';return;}
  var scored=R.map(function(r){var miss=r.c.filter(function(i){return !covered(i);});return {r:r,matched:r.c.length-miss.length,miss:miss};})
    .filter(function(x){return x.matched>=Math.min(2,x.r.c.length) && x.miss.length<=4;})
    .sort(function(a,b){return a.miss.length-b.miss.length||b.matched-a.matched||a.r.c.length-b.r.c.length;});
  var ready=scored.filter(function(x){return x.miss.length===0;});
  var near=scored.filter(function(x){return x.miss.length>=1&&x.miss.length<=2;});
  var few=scored.filter(function(x){return x.miss.length>=3;});
  var dc={1:'var(--green)',2:'var(--gold)',3:'#e0894f'};
  function card(x,showNeed){var r=x.r;return '<a class="card" href="/recipes/'+r.s+'/" style="border-left-color:'+(dc[r.d]||'var(--gold)')+'"><div class="t">'+r.n+'</div><div class="m">'+r.g+(r.t?' &middot; '+tl(r.t):'')+(showNeed&&x.miss.length?' &middot; <span class="need">grab: '+x.miss.slice(0,3).join(', ')+'</span>':'')+'</div></a>';}
  var html='';
  if(ready.length) html+='<div class="count">'+ready.length+' you can make right now</div><div class="sect">Ready to cook</div>'+ready.slice(0,40).map(function(x){return card(x,false);}).join('');
  if(near.length) html+='<div class="sect a">One or two ingredients away</div>'+near.slice(0,30).map(function(x){return card(x,true);}).join('');
  if(few.length) html+='<div class="sect a">A short shopping list away</div>'+few.slice(0,20).map(function(x){return card(x,true);}).join('');
  if(!scored.length) html='<div class="empty">Nothing lines up yet — try adding another ingredient or two, or <a href="/recipes/" style="color:var(--gold);">browse everything</a>.</div>';
  out.innerHTML=html;
}
box.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===','){e.preventDefault();box.value.split(',').forEach(add);}});
box.addEventListener('blur',function(){if(box.value.trim())box.value.split(',').forEach(add);});
chipsEl.addEventListener('click',function(e){var t=e.target.closest('.tok');if(t){have.splice(+t.dataset.i,1);draw();}});
draw();
</script>
</body>
</html>`;

fs.mkdirSync(path.join(ROOT, 'what-can-i-make'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'what-can-i-make', 'index.html'), page);
console.log('pantry search built:', data.filter(r => r.c && r.c.length).length, 'recipes indexed');

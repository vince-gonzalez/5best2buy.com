// generate-recipe-index.js — builds the searchable/filterable recipe browse at /recipes/.
// Scans every /recipes/*/index.html for name + cuisine + category, then writes an
// index page that renders + filters client-side from inline JSON. Run after generate-recipes.js.
const fs = require('fs'), path = require('path');
const ROOT = 'C:/tmp/5b2b-live';

const METHOD_PAGES = new Set(['air-fryer','instant-pot','slow-cooker','one-pot','sheet-pan','grill','no-cook']);
const dirs = fs.readdirSync(path.join(ROOT, 'recipes')).filter(d =>
  !METHOD_PAGES.has(d) && fs.existsSync(path.join(ROOT, 'recipes', d, 'index.html')));
const recipes = [];
for (const d of dirs) {
  const h = fs.readFileSync(path.join(ROOT, 'recipes', d, 'index.html'), 'utf8');
  const hm = h.match(/<h1>([\s\S]*?)<\/h1>/);
  const name = hm ? hm[1].replace(/<[^>]+>/g, '').replace(/,?\s*and where to source (it|them).*$/i, '').trim() : d;
  const cm = h.match(/"recipeCuisine":"([^"]*)"/);
  const gm = h.match(/"recipeCategory":"([^"]*)"/);
  recipes.push({ s: d, n: name, c: cm ? cm[1] : 'Other', g: gm ? gm[1] : 'Main' });
}
const facets = {}; try { for (const f of JSON.parse(fs.readFileSync(path.join(ROOT, 'data-facets.json'), 'utf8'))) facets[f.s] = f; } catch (e) {}
recipes.forEach(r => { const f = facets[r.s] || {}; r.t = f.t || 0; r.d = f.d || 2; r.x = f.x || 0; });
recipes.sort((a, b) => a.n.localeCompare(b.n));

const cuisines = [...new Set(recipes.map(r => r.c))].sort();
const cats = [...new Set(recipes.map(r => r.g))].sort();
const data = JSON.stringify(recipes);

const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/png" href="/logo.png" />
<title>Recipes — ${recipes.length}, Ingredients First | 5best2buy.com</title>
<meta name="description" content="Search ${recipes.length} recipes across dozens of cuisines — the real method, ingredients first, every recipe page ad-free, and exactly where to buy the best of every one. No pop-ups, no 2,000-word story." />
<link rel="canonical" href="https://www.5best2buy.com/recipes/" />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GG5QF6LH0D"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GG5QF6LH0D');</script>
<meta name="google-adsense-account" content="ca-pub-8826956454892311" />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8826956454892311" crossorigin="anonymous"></script>
<style>
  :root{--navy:#0d1421;--surface:#121e30;--blue:#5fb0ef;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fd:'Rajdhani','Arial Narrow',sans-serif;--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--navy);color:var(--text);font-family:Georgia,'Times New Roman',serif;line-height:1.72;padding:18px 18px 60px;max-width:820px;margin:0 auto;font-size:17px;}
  a{color:var(--blue);}
  nav.crumb{font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);}
  nav.crumb a{color:var(--meta);text-decoration:none;}
  .eyebrow{font-family:var(--fm);font-size:12.5px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin:22px 0 8px;}
  h1{font-family:var(--fd);font-size:clamp(32px,6.5vw,52px);font-weight:700;letter-spacing:.5px;line-height:1.02;margin-bottom:14px;}
  .dek{color:var(--soft);max-width:64ch;margin-bottom:16px;}
  .promise{font-family:var(--fm);font-size:15px;line-height:1.7;color:var(--soft);background:linear-gradient(180deg,rgba(95,227,154,.07),rgba(95,227,154,0));border:1px solid var(--line);border-left:3px solid var(--green);border-radius:10px;padding:14px 16px;margin-bottom:18px;}
  .promise b{color:var(--green);}
  .promise a{color:var(--gold);text-decoration:none;font-weight:600;}
  .controls{position:sticky;top:0;background:var(--navy);padding:12px 0 10px;border-bottom:1px solid var(--line);z-index:5;margin-bottom:6px;}
  #q{width:100%;font-family:var(--fm);font-size:16px;color:var(--text);background:var(--surface);border:1px solid var(--line);border-radius:9px;padding:12px 14px;outline:none;}
  #q:focus{border-color:var(--gold);}
  .row{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:center;}
  select{font-family:var(--fm);font-size:15px;color:var(--text);background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:8px 10px;}
  .chip{font-family:var(--fm);font-size:15px;letter-spacing:.3px;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:6px 13px;cursor:pointer;user-select:none;}
  .chip.on{color:#10203a;background:var(--gold);border-color:var(--gold);font-weight:600;}
  .count{font-family:var(--fm);font-size:12px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);margin:14px 0 10px;}
  .grid{display:block;}
  .card{display:block;background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:10px;padding:13px 16px;margin-bottom:9px;text-decoration:none;}
  .card:hover{border-color:var(--gold);}
  .card .t{font-family:var(--fd);font-size:21px;font-weight:700;color:var(--text);line-height:1.12;}
  .card .m{font-family:var(--fm);font-size:12.5px;letter-spacing:.4px;text-transform:uppercase;color:var(--meta);margin-top:2px;}
  .empty{font-family:var(--fm);color:var(--meta);padding:30px 0;text-align:center;}
  .back{font-family:var(--fm);font-size:12px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);text-decoration:none;display:inline-block;margin-top:24px;}
  .qk{font-family:var(--fm);font-size:12.5px;color:var(--soft);display:inline-flex;align-items:center;gap:6px;cursor:pointer;}
  .qk input{accent-color:var(--gold);}
</style>
</head>
<body>
  <nav class="crumb"><a href="/">5best2buy.com</a> &rsaquo; Recipes</nav>
  <div class="eyebrow">5best2buy &middot; Recipes</div>
  <h1>${recipes.length} Recipes, Ingredients First</h1>
  <p class="dek">Tired of scrolling past a wall of ads and a 2,000-word story to reach the ingredient list &mdash; while the pan burns? So are we. Search the whole library below: the real method, and next to every ingredient, exactly where to buy the best version of it.</p>
  <div class="promise"><b>The promise.</b> No ads. No pop-ups. No life story. Just the recipe. &mdash; New to cooking? <a href="/kitchen-fundamentals/">The pro moves most recipes skip &rarr;</a></div>
  <div class="controls">
    <input id="q" type="search" placeholder="Search ${recipes.length} recipes — try &quot;chicken&quot;, &quot;pasta&quot;, &quot;chocolate&quot;…" autocomplete="off" />
    <div class="row">
      <select id="cuisine"><option value="">All cuisines</option>${cuisines.map(c => `<option value="${c}">${c}</option>`).join('')}</select>
      <span class="chip on" data-cat="">All</span>${cats.map(c => `<span class="chip" data-cat="${c}">${c}</span>`).join('')}
    </div>
    <div class="row">
      <select id="time"><option value="0">Any time</option><option value="15">15 min or less</option><option value="30">30 min or less</option><option value="45">45 min or less</option><option value="60">1 hour or less</option></select>
      <span class="chip con on" data-diff="">Any level</span><span class="chip con" data-diff="1">Easy</span><span class="chip con" data-diff="2">Some doing</span><span class="chip con" data-diff="3">A project</span>
      <label class="qk"><input type="checkbox" id="quick" /> No marinating / soaking</label>
    </div>
  </div>
  <div class="count" id="count"></div>
  <div class="grid" id="grid"></div>
  <a class="back" href="/">&larr; Back to 5best2buy</a>
<script>
const R=${data};
const grid=document.getElementById('grid'),count=document.getElementById('count'),q=document.getElementById('q'),cui=document.getElementById('cuisine'),tm=document.getElementById('time'),qk=document.getElementById('quick');
let cat="",diff="";
function tlabel(m){return m>=60?(m%60?Math.floor(m/60)+'h '+(m%60)+'m':Math.floor(m/60)+'h'):m+' min';}
function render(){
  const t=q.value.trim().toLowerCase(),cc=cui.value,mt=+tm.value,qo=qk.checked;
  const out=R.filter(r=>(!t||r.n.toLowerCase().includes(t))&&(!cc||r.c===cc)&&(!cat||r.g===cat)&&(!diff||r.d==diff)&&(!mt||(r.t&&r.t<=mt))&&(!qo||!r.x));
  count.textContent=out.length+(out.length===1?" recipe":" recipes");
  if(!out.length){grid.innerHTML='<div class="empty">No recipes match — try loosening a filter.</div>';return;}
  const dc={1:'var(--green)',2:'var(--gold)',3:'#e0894f'};
  grid.innerHTML=out.map(function(r){return '<a class="card" href="/recipes/'+r.s+'/" style="border-left-color:'+(dc[r.d]||'var(--gold)')+'"><div class="t">'+r.n+'</div><div class="m">'+r.c+' &middot; '+r.g+(r.t?' &middot; '+tlabel(r.t):'')+(r.x?' &middot; plan ahead':'')+'</div></a>';}).join('');
}
q.addEventListener('input',render);cui.addEventListener('change',render);tm.addEventListener('change',render);qk.addEventListener('change',render);
document.querySelectorAll('.chip:not(.con)').forEach(ch=>ch.addEventListener('click',()=>{document.querySelectorAll('.chip:not(.con)').forEach(x=>x.classList.remove('on'));ch.classList.add('on');cat=ch.dataset.cat;render();}));
document.querySelectorAll('.chip.con').forEach(ch=>ch.addEventListener('click',()=>{document.querySelectorAll('.chip.con').forEach(x=>x.classList.remove('on'));ch.classList.add('on');diff=ch.dataset.diff;render();}));
var _q=new URLSearchParams(location.search).get('q');if(_q){q.value=_q;}
render();
</script>
</body>
</html>`;

fs.writeFileSync(path.join(ROOT, 'recipes', 'index.html'), page);
console.log('recipe browse built:', recipes.length, 'recipes |', cuisines.length, 'cuisines |', cats.length, 'categories');

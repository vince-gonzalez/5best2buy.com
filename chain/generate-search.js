// generate-search.js — /search/ : one search box across the WHOLE site (recipes + shelves + hubs + tools).
// Client-side over /search-index.json (written by generate-aisles.js). Reads ?q=, live-filters, groups by
// type, ranks title-startsWith > title-contains > keyword-contains. Run after generate-aisles (needs the
// index) and before inject-navbar/header/skim/awin so it gets stamped.
const fs = require('fs'), path = require('path');

// ---- paths resolve from this file, not from the working directory -------
// Every path here used to be the literal string 'C:/tmp/...'. That made the
// chain unmovable and made the restore procedure depend on cloning to one
// exact directory. __site is the site being written; __work is the folder
// holding the chain and the corpus. A script sitting inside the site finds
// 'hunt' beside it; one sitting in the workspace does not. SITE_ROOT wins
// over both when it is set.
const __path_ = require('path'), __fs_ = require('fs');
const __work = __fs_.existsSync(__path_.join(__dirname, 'recipe-batches'))
  ? __dirname : __path_.resolve(__dirname, '..');
const __site = process.env.SITE_ROOT
  || (__fs_.existsSync(__path_.join(__dirname, 'hunt'))
        ? __dirname : __path_.join(__work, '5b2b-live'));
// ------------------------------------------------------------------------
const ROOT = __site;
const AD_CLIENT = 'ca-pub-8826956454892311';

const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/png" href="/logo.png" />
<meta name="theme-color" content="#0d1421" />
<title>Search — 5best2buy</title>
<meta name="description" content="Search every recipe, shelf, hub, and tool on 5best2buy — 1,000+ recipes and 230+ small-maker shelves in one place." />
<link rel="canonical" href="https://www.5best2buy.com/search/" />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GG5QF6LH0D"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GG5QF6LH0D');</script>
<meta name="google-adsense-account" content="${AD_CLIENT}" />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}" crossorigin="anonymous"></script>
<style>
  :root{--navy:#0d1421;--surface:#121e30;--blue:#5fb0ef;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;--fd:'Rajdhani','Arial Narrow',sans-serif;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--navy);color:var(--text);font-family:Georgia,'Times New Roman',serif;line-height:1.6;padding:18px 18px 80px;max-width:840px;margin:0 auto;}
  nav.bc{font-family:var(--fm);font-size:12.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--meta);}
  nav.bc a{color:var(--meta);text-decoration:none;}
  h1{font-family:var(--fd);font-size:clamp(30px,6vw,44px);font-weight:700;letter-spacing:.5px;margin:14px 0 4px;}
  .sub{color:var(--soft);font-family:var(--fm);font-size:15px;margin-bottom:16px;}
  .searchbar{display:flex;gap:8px;position:sticky;top:8px;z-index:5;}
  #q{flex:1;font-family:var(--fm);font-size:17px;padding:14px 16px;border-radius:10px;border:1px solid var(--line);background:var(--surface);color:var(--text);}
  #q:focus{outline:none;border-color:var(--green);}
  #count{font-family:var(--fm);font-size:15px;color:var(--meta);margin:14px 0 6px;letter-spacing:.4px;}
  .grp{margin-top:18px;}
  .grp h2{font-family:var(--fd);font-size:20px;font-weight:700;color:var(--gold);letter-spacing:.3px;border-bottom:1px solid var(--line);padding-bottom:5px;margin-bottom:9px;}
  .hits{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:8px;}
  a.hit{display:flex;justify-content:space-between;align-items:center;gap:8px;text-decoration:none;background:var(--surface);border:1px solid var(--line);border-radius:9px;padding:10px 13px;color:var(--text);}
  a.hit:hover{border-color:var(--green);}
  a.hit .t{font-family:var(--fm);font-weight:600;font-size:15px;line-height:1.25;}
  a.hit .x{font-family:var(--fm);font-size:12px;color:var(--meta);text-transform:uppercase;letter-spacing:.5px;white-space:nowrap;}
  .empty{color:var(--soft);font-family:var(--fm);font-size:14px;margin-top:22px;}
  .empty a{color:var(--blue);}
  .foot{font-family:var(--fm);font-size:12.5px;color:var(--meta);margin-top:34px;border-top:1px solid var(--line);padding-top:14px;}
  .foot a{color:var(--blue);text-decoration:none;}
</style>
</head>
<body>
  <nav class="bc" aria-label="Breadcrumb"><a href="/">5best2buy.com</a> &rsaquo; Search</nav>
  <h1>Search the Hunt</h1>
  <p class="sub">Every recipe, shelf, hub, and tool in one box — 1,000+ recipes and 230+ small-maker shelves.</p>
  <div class="searchbar"><input id="q" type="search" autocomplete="off" placeholder="Try &ldquo;chicken&rdquo;, &ldquo;kosher&rdquo;, &ldquo;mojito&rdquo;, &ldquo;olive oil&rdquo;&hellip;" aria-label="Search" /></div>
  <div id="count"></div>
  <div id="results"></div>
  <p class="foot">No paywall. Recipes stay ad-free. <a href="/recipes/">All recipes</a> &middot; <a href="/shelves/">All shelves</a> &middot; <a href="/">Home</a></p>
<script>
(function(){
  var ORDER=['Recipe','Mocktail','Shelf','Hub','Aisle','Tool'];
  var LABEL={Recipe:'Recipes',Mocktail:'Mocktails',Shelf:'Shelves (where to buy)',Hub:'Hubs & guides',Aisle:'Aisles',Tool:'Tools & pages'};
  var input=document.getElementById('q'),res=document.getElementById('results'),cnt=document.getElementById('count'),DATA=[];
  var q0=new URLSearchParams(location.search).get('q')||'';
  input.value=q0;
  fetch('/search-index.json').then(function(r){return r.json();}).then(function(d){DATA=d;render();}).catch(function(){cnt.textContent='Search index unavailable.';});
  function esc(s){return String(s).replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c];});}
  function render(){
    var q=input.value.trim().toLowerCase();
    var url=new URL(location);if(q)url.searchParams.set('q',q);else url.searchParams.delete('q');history.replaceState(null,'',url);
    if(q.length<2){res.innerHTML='';cnt.textContent='Type at least two letters.';return;}
    var terms=q.split(/\\s+/),scored=[];
    for(var i=0;i<DATA.length;i++){
      var it=DATA[i],hay=(it.t+' '+(it.x||'')+' '+(it.a||'')).toLowerCase(),tl=it.t.toLowerCase(),ok=true;
      for(var j=0;j<terms.length;j++){if(hay.indexOf(terms[j])<0){ok=false;break;}}
      if(!ok)continue;
      var sc=tl.indexOf(q)===0?0:(tl.indexOf(q)>=0?1:2);
      scored.push([sc,it]);
    }
    scored.sort(function(a,b){return a[0]-b[0]||a[1].t.length-b[1].t.length;});
    if(!scored.length){res.innerHTML='<p class="empty">No matches for &ldquo;'+esc(q)+'&rdquo;. Try a broader word, or <a href="/recipes/">browse all recipes</a> / <a href="/shelves/">all shelves</a>.</p>';cnt.textContent='0 results';return;}
    var groups={};for(var k=0;k<scored.length;k++){var it2=scored[k][1];(groups[it2.k]=groups[it2.k]||[]).push(it2);}
    var html='',shown=0,CAP=400;
    for(var g=0;g<ORDER.length;g++){var kind=ORDER[g],arr=groups[kind];if(!arr||!arr.length)continue;
      html+='<div class="grp"><h2>'+LABEL[kind]+' <span style="font-family:var(--fm);font-size:15px;color:var(--meta);font-weight:400;">('+arr.length+')</span></h2><div class="hits">';
      for(var m=0;m<arr.length&&shown<CAP;m++){var h=arr[m];html+='<a class="hit" href="'+h.u+'"><span class="t">'+esc(h.t)+'</span>'+(h.x?'<span class="x">'+esc(h.x)+'</span>':'')+'</a>';shown++;}
      html+='</div></div>';
    }
    res.innerHTML=html;cnt.textContent=scored.length+' result'+(scored.length===1?'':'s')+(scored.length>CAP?' (showing '+CAP+')':'');
  }
  var t;input.addEventListener('input',function(){clearTimeout(t);t=setTimeout(render,120);});
  input.focus();
})();
</script>
</body>
</html>`;

fs.mkdirSync(path.join(ROOT, 'search'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'search', 'index.html'), page);
// add to sitemap if not present
const smp = path.join(ROOT, 'sitemap.xml');
if (fs.existsSync(smp)) {
  let sm = fs.readFileSync(smp, 'utf8');
  if (!sm.includes('/search/')) { sm = sm.replace('</urlset>', `  <url>\n    <loc>https://www.5best2buy.com/search/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n</urlset>`); fs.writeFileSync(smp, sm); }
}
console.log('search page built: /search/');

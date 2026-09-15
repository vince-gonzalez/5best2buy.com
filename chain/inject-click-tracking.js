// inject-click-tracking.js — know which shelf actually earns.
//
// The site had ONE gtag event across 2,091 pages, so there was no way to answer
// "which shelf made money" -- every optimisation would have been a guess.
//
// One delegated listener per page rather than an onclick on 2,010 anchors: it is
// a fraction of the bytes, it survives any link the generators add later, and it
// cannot desync from the markup.
//
// Fires GA4 'select_item' (a standard ecommerce event, so it reports without
// custom setup) with the maker, the destination host resolved through any
// affiliate redirect, and the shelf it was clicked from.
// Idempotent via <!--CLKTRK-->.
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

const SNIP = `<!--CLKTRK--><script>
(function(){
  function host(h){try{var u=new URL(h.replace(/&amp;/g,'&'));
    var p=['ued','url','u','murl','destination','dest','r'];
    for(var i=0;i<3;i++){var inner=null;
      for(var j=0;j<p.length;j++){var v=u.searchParams.get(p[j]);
        if(v&&/^https?%3A|^https?:/i.test(v)){inner=decodeURIComponent(v);break;}}
      if(!inner)break; u=new URL(inner);}
    return u.hostname.replace(/^www\\./,'');}catch(e){return '';}}
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href^="http"]');
    if(!a)return;
    var d=host(a.getAttribute('href')||'');
    if(!d||d.indexOf('5best2buy.com')>-1)return;
    var card=a.closest('.find'), nm=card&&card.querySelector('h2');
    if(typeof gtag!=='function')return;
    // select_item is the standard ecommerce event and reports without setup,
    // but it cannot be marked as a key event in a way that reads clearly. Fire a
    // plainly-named one alongside it so "did anyone click a buy link" is one
    // toggle in the GA4 UI rather than an interpretation.
    gtag('event','affiliate_click',{
      destination:d, maker:(nm?nm.textContent:d).slice(0,90),
      shelf:location.pathname, link_kind:a.className||'link'
    });
    gtag('event','select_item',{
      item_list_id:location.pathname,
      items:[{item_id:d,item_name:(nm?nm.textContent:d).slice(0,90),
              item_category:a.className||'link',affiliation:d}]
    });
  },{passive:true});
})();
</script><!--/CLKTRK-->`;

const RE = /<!--CLKTRK-->[\s\S]*?<!--\/CLKTRK-->/;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

let done = 0, updated = 0, skipped = 0;
for (const f of walk(ROOT)) {
  let h = fs.readFileSync(f, 'utf8');
  if (!h.includes('gtag(')) { skipped++; continue; }   // no GA on the page, nothing to send to
  const before = h;
  if (RE.test(h)) { h = h.replace(RE, SNIP); if (h !== before) updated++; }
  else if (h.includes('</body>')) { h = h.replace('</body>', SNIP + '\n</body>'); done++; }
  else { skipped++; continue; }
  if (h !== before) fs.writeFileSync(f, h);
}
console.log(`click tracking: ${done} page(s) instrumented, ${updated} refreshed, ${skipped} skipped (no gtag / no body)`);

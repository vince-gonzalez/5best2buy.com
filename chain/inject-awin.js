const fs=require('fs'),path=require('path');
const ROOT='C:/tmp/5b2b-live';
const AWIN='<script src="https://www.dwin2.com/pub.2961345.min.js" type="text/javascript" defer></script>';
const files=[];
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(e.name==='.git')continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(e.name.endsWith('.html'))files.push(p);}}
walk(ROOT);
let n=0,skip=0;
for(const f of files){let h=fs.readFileSync(f,'utf8');if(h.includes('dwin2.com')){skip++;continue;}if(h.includes('</body>')){h=h.replace('</body>',AWIN+'\n</body>');fs.writeFileSync(f,h);n++;}}
console.log('Awin MasterTag added to',n,'files; skipped',skip,'; total',files.length);

const fs=require('fs'),path=require('path');
const ROOT='C:/tmp/5b2b-live';
const MARK='<meta name="viewport" content="width=device-width, initial-scale=1" />';
const FAV='<link rel="icon" type="image/png" href="/logo.png" />\n<link rel="apple-touch-icon" href="/logo.png" />';
const files=[];
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(e.name==='.git')continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(e.name.endsWith('.html'))files.push(p);}}
walk(ROOT);
let n=0,skip=0;
for(const f of files){
  let h=fs.readFileSync(f,'utf8');
  if(h.includes('rel="icon"')){skip++;continue;}
  if(h.includes(MARK)){h=h.replace(MARK,MARK+'\n'+FAV);fs.writeFileSync(f,h);n++;}
}
console.log('favicon added to',n,'files; skipped',skip);

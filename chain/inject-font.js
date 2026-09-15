const fs=require('fs'),path=require('path');
const ROOT='C:/tmp/5b2b-live';
const SANS="system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif";
const files=[];
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(e.name==='.git')continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(e.name.endsWith('.html'))files.push(p);}}
walk(ROOT);
let n=0;
for(const f of files){
  let h=fs.readFileSync(f,'utf8'), o=h;
  h=h.split("'IBM Plex Mono','Courier New',monospace").join(SANS);
  h=h.split("'IBM Plex Mono',monospace").join(SANS);
  if(h!==o){fs.writeFileSync(f,h);n++;}
}
console.log('font legibility fix applied to',n,'files');

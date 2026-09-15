const fs=require("fs"),path=require("path");
const TAG="5best2buy-20", ROOT=process.argv[2]||".";
function walk(d,o=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(e.name===".git"||e.name==="node_modules")continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p,o);else if(e.name.endsWith(".html"))o.push(p);}return o;}
let total=0,ok=0;const bad=[];
for(const f of walk(ROOT)){const h=fs.readFileSync(f,"utf8");
  for(const m of h.matchAll(/href="(https?:\/\/(?:www\.)?amazon\.[^"]*)"/g)){total++;
    const url=m[1].replace(/&amp;/g,"&");
    const tags=(url.match(/[?&]tag=/g)||[]).length;
    const right=new URL(url).searchParams.getAll("tag");
    if(tags===1&&right.length===1&&right[0]===TAG){ok++;continue;}
    bad.push(f+"  tags="+tags);}}
console.log("  amazon links: "+total+"   correctly tagged: "+ok+"   bad: "+bad.length);
if(bad.length){bad.slice(0,3).forEach(b=>console.log("    "+b));process.exit(1);}
if(total===0){console.log("  ZERO links found -- matcher broken");process.exit(1);}
process.exit(0);

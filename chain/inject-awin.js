const fs=require('fs'),path=require('path');

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
const ROOT=__site;
const AWIN='<script src="https://www.dwin2.com/pub.2961345.min.js" type="text/javascript" defer></script>';
const files=[];
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(e.name==='.git')continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(e.name.endsWith('.html'))files.push(p);}}
walk(ROOT);
let n=0,skip=0;
for(const f of files){let h=fs.readFileSync(f,'utf8');if(h.includes('dwin2.com')){skip++;continue;}if(h.includes('</body>')){h=h.replace('</body>',AWIN+'\n</body>');fs.writeFileSync(f,h);n++;}}
console.log('Awin MasterTag added to',n,'files; skipped',skip,'; total',files.length);

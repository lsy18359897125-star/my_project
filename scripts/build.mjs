import {mkdir,cp} from 'node:fs/promises';
import {resolve} from 'node:path';
const root = resolve(import.meta.dirname,'..');
await mkdir(resolve(root,'dist'),{recursive:true});
for(const file of ['index.html','src']) await cp(resolve(root,file),resolve(root,'dist',file),{recursive:true});
console.log('Built static application to dist/');

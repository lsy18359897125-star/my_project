import {writeFile, mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';

// Public problem metadata only; never requests statements, solutions or account data.
const endpoint='https://leetcode.cn/graphql/';
const query='query Catalog($limit:Int,$skip:Int){problemsetQuestionList(categorySlug:"",limit:$limit,skip:$skip,filters:{}){total hasMore questions{frontendQuestionId title titleCn titleSlug difficulty paidOnly topicTags{name nameTranslated slug}}}}';
const root=resolve(import.meta.dirname,'..');
async function request(url,options={}) {
  for(let attempt=0;attempt<3;attempt++) {
    const response=await fetch(url,{...options,signal:AbortSignal.timeout(45000)});
    if(response.ok)return response.json();
    if(![429,502,503,504].includes(response.status)||attempt===2)throw Error(`HTTP ${response.status}: ${url}`);
    await new Promise(done=>setTimeout(done,Math.min(5000,1000*(attempt+1))));
  }
}
async function page(skip) {
  const data=await request(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({query,variables:{limit:100,skip}})});
  if(data.errors)throw Error(JSON.stringify(data.errors));
  if(!data.data?.problemsetQuestionList?.questions)throw Error('Official catalog response is missing questions');
  return data.data.problemsetQuestionList;
}
const [base,first]=await Promise.all([request('https://leetcode.cn/api/problems/all/'),page(0)]);
const ids=new Map(base.stat_status_pairs.map(p=>[p.stat.question__title_slug,p.stat.question_id]));
const questions=[...first.questions];
for(let skip=100;skip<first.total;skip+=300) {
  const offsets=[skip,skip+100,skip+200].filter(n=>n<first.total);
  const pages=await Promise.all(offsets.map(page));
  for(const data of pages) {
    if(data.total!==first.total)throw Error('Official catalog changed during retrieval; retry for a consistent snapshot');
    questions.push(...data.questions);
  }
  console.log(`Read ${questions.length}/${first.total} public catalog entries`);
}
if(questions.length!==first.total||new Set(questions.map(p=>p.titleSlug)).size!==first.total)throw Error('Incomplete or duplicate catalog; existing snapshot was preserved');
const tags=[],tagIds=new Map();
const rows=questions.map(p=>{
  const questionId=ids.get(p.titleSlug);
  if(!Number.isInteger(questionId)||!p.frontendQuestionId||!p.titleSlug)throw Error(`Missing official identity for ${p.titleSlug}`);
  const topics=p.topicTags.map(t=>{
    if(!tagIds.has(t.slug)){tagIds.set(t.slug,tags.length);tags.push([t.slug,t.nameTranslated||t.name]);}
    return tagIds.get(t.slug);
  });
  return [String(p.frontendQuestionId),questionId,p.titleCn||p.title,p.title,p.titleSlug,{EASY:1,MEDIUM:2,HARD:3}[p.difficulty],p.paidOnly?1:0,topics];
});
const snapshot={schemaVersion:1,updatedAt:new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Shanghai'}),source:'https://leetcode.cn/problemset/',endpoints:['https://leetcode.cn/api/problems/all/',endpoint],total:first.total,tags,rows};
await mkdir(resolve(root,'src'),{recursive:true});
await writeFile(resolve(root,'src/leetcode-catalog.json'),JSON.stringify(snapshot)+'\n');
const meta={total:snapshot.total,updatedAt:snapshot.updatedAt,topics:tags.length,premium:rows.filter(row=>row[6]).length};
await writeFile(resolve(root,'src/catalog-meta.js'),`export const catalogMeta = ${JSON.stringify(meta)};\n`);
console.log(`Saved ${snapshot.total} problems (${tags.length} topics) to src/leetcode-catalog.json`);

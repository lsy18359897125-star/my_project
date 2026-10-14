import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {decodeCatalog,filterCatalog,paginateCatalog,catalogPractice} from '../src/catalog.js';
import {catalogMeta} from '../src/catalog-meta.js';
import {problems} from '../src/problems.js';
import {initialState,validateBackup} from '../src/model.js';
const snapshot=JSON.parse(readFileSync(new URL('../src/leetcode-catalog.json',import.meta.url),'utf8'));
const entries=decodeCatalog(snapshot);
const adaptedIds=new Set(problems.map(p=>p.id));

test('Full official snapshot has matching counts, identities, Chinese titles and premium metadata',()=>{
  assert.equal(entries.length,snapshot.total);
  assert.equal(entries.length,catalogMeta.total);
  assert.equal(new Set(entries.map(p=>p.id)).size,entries.length);
  assert.equal(new Set(entries.map(p=>p.slug)).size,entries.length);
  assert.equal(entries.filter(p=>p.paidOnly).length,catalogMeta.premium);
  assert.equal(snapshot.tags.length,catalogMeta.topics);
  assert.equal(snapshot.updatedAt,catalogMeta.updatedAt);
  assert.equal(entries.find(p=>p.frontendId==='1').title,'两数之和');
  assert.ok(entries.some(p=>p.frontendId.startsWith('LCP ')));
  assert.ok(entries.some(p=>p.frontendId.startsWith('LCR ')));
  assert.ok(entries.some(p=>p.frontendId.startsWith('面试题 ')));
  assert.ok(entries.length>4000);
});
test('Number, Chinese, English, named series and topic searches find official records',()=>{
  assert.deepEqual(filterCatalog(entries,{query:'#1'}).map(p=>p.frontendId),['1']);
  assert.ok(filterCatalog(entries,{query:'两数之和'}).some(p=>p.frontendId==='1'));
  assert.ok(filterCatalog(entries,{query:'TWO SUM'}).some(p=>p.frontendId==='1'));
  assert.ok(filterCatalog(entries,{query:'LCP 82'}).some(p=>p.frontendId==='LCP 82'));
  assert.ok(filterCatalog(entries,{query:'哈希表'}).some(p=>p.frontendId==='1'));
});
test('Combined difficulty, access, topic, favorite and adapted filters do not leak unrelated rows',()=>{
  const found=filterCatalog(entries,{difficulty:'简单',access:'free',topic:'hash-table'});
  assert.ok(found.length>0);
  assert.ok(found.every(p=>p.difficulty==='简单'&&!p.paidOnly&&p.tags.some(t=>t.slug==='hash-table')));
  const adapted=filterCatalog(entries,{mode:'adapted',adaptedIds});
  assert.equal(adapted.length,problems.length);
  assert.ok(adapted.every(p=>adaptedIds.has(p.id)));
  assert.equal(filterCatalog(entries,{mode:'custom',adaptedIds}).length,entries.length-problems.length);
  const special=entries.find(p=>p.frontendId==='LCP 82');
  assert.deepEqual(filterCatalog(entries,{mode:'favorites',favorites:[special.id]}).map(p=>p.id),[special.id]);
});
test('Every catalog entry can be reached once through pagination, including the last partial page',()=>{
  const collected=[];
  for(let n=1;n<=Math.ceil(entries.length/30);n++)collected.push(...paginateCatalog(entries,n,30).items);
  assert.deepEqual(collected.map(p=>p.id),entries.map(p=>p.id));
  const last=paginateCatalog(entries,999999,30);
  assert.equal(last.page,last.pages);
  assert.equal(last.end,entries.length);
  assert.equal(paginateCatalog(entries,-4,60).page,1);
  assert.deepEqual(paginateCatalog([],999,100).items,[]);
  assert.equal(paginateCatalog([],999,100).pages,1);
  assert.equal(filterCatalog(entries,{query:'不存在的题目xyz'}).length,0);
  assert.equal(filterCatalog(entries,{order:'desc'})[0].id,entries.at(-1).id);
});
test('Adapted entries reuse existing samples; generic entries never invent statements or judge cases',()=>{
  for(const p of problems)assert.strictEqual(catalogPractice(entries.find(e=>e.slug===p.slug),problems),p);
  const p=catalogPractice(entries.find(e=>e.frontendId==='9'),problems);
  assert.equal(p.catalogOnly,true);
  assert.deepEqual(p.cases,[]);
  assert.equal(p.py,undefined);
  assert.equal(p.title,'回文数');
});
test('Named series cannot collide with existing numeric/custom progress and survive backup restoration',()=>{
  const special=entries.find(p=>p.frontendId==='LCP 82');
  assert.ok(special.id<0);
  const state=initialState();state.favorites=[1,special.id,10001];
  state.drafts[`${special.id}:py`]='print(1)';state.notes[special.id]='树上动态规划';
  state.reviews[special.id]={due:1000,interval:1};
  const restored=validateBackup(JSON.parse(JSON.stringify(state)));
  assert.deepEqual(restored.favorites,state.favorites);
  assert.equal(restored.notes[special.id],state.notes[special.id]);
  assert.equal(restored.drafts[`${special.id}:py`],'print(1)');
});
test('Incomplete snapshots and conflicting identities are rejected before use',()=>{
  assert.throws(()=>decodeCatalog({...snapshot,total:snapshot.total+1}));
  assert.throws(()=>decodeCatalog({...snapshot,schemaVersion:99}));
  assert.throws(()=>decodeCatalog({...snapshot,rows:[...snapshot.rows.slice(1),snapshot.rows[1]]}));
});

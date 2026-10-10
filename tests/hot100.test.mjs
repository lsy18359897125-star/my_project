import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {problems,codeFor} from '../src/problems.js';
import {compareOutput} from '../src/model.js';
const manifest=JSON.parse(readFileSync(new URL('../src/hot100-manifest.json',import.meta.url)));
test('Hot100 matches the official 100 unique IDs and 17 topic groups',()=>{
  const plan=problems.filter(p=>p.hot100);
  assert.equal(plan.length,100);
  assert.equal(new Set(plan.map(p=>p.id)).size,100);
  assert.deepEqual(plan.map(p=>p.id),manifest.ids);
  assert.equal(new Set(plan.map(p=>p.tag)).size,17);
  assert.equal(problems.find(p=>p.id===704).hot100,false);
});
test('Every Hot100 problem has a complete Python ACM adaptation',()=>{
  for(const p of problems.filter(p=>p.hot100)){
    for(const key of ['title','description','input','output','constraints','py','hint','complexity','slug'])assert.ok(p[key]?.trim(),`#${p.id}: missing ${key}`);
    assert.ok(p.cases.length>=3,`#${p.id}: insufficient cases`);
    const solution=codeFor(p,'py',true);assert.ok(solution.includes('sys.stdin.read()'));assert.ok(solution.includes('print('));assert.ok(!solution.includes('TODO'));
    if(p.outputFormat==='json')for(const c of p.cases){JSON.parse(c.input);JSON.parse(c.expected);}
  }
});
test('Structured output compares JSON values including numeric equivalence and string spaces',()=>{
  const p={outputFormat:'json'};
  assert.ok(compareOutput(p,'[2.0, null, true]','[2,null,true]'));
  assert.ok(compareOutput(p,'{"a":1,"b":2}','{"b":2,"a":1}'));
  assert.ok(!compareOutput(p,'[2,1]','[1,2]'));
  assert.ok(!compareOutput(p,'"a b"','"ab"'));
  assert.ok(!compareOutput(p,'not-json','null'));
});

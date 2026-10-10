import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {problems,codeFor} from '../src/problems.js';
import {initialState,normalizeOutput,compareOutput,markSolved,rateReview,dayKey,streak,validateBackup,validateProblem} from '../src/model.js';
import {runPython} from '../src/runner.js';
for(const p of problems){
  if(p.js)test(`JavaScript ACM #${p.id}: all sample and edge cases`,()=>{
    for(const c of p.cases){const output=[];new Function('stdin','print',codeFor(p,'js',true))(c.input,(...args)=>output.push(args.join(' ')));assert.equal(normalizeOutput(output.join('\n')),normalizeOutput(c.expected));}
  });
  // Optional locally: CI installs Python using setup-python in the workflow.
  test(`Python ACM #${p.id}: all sample and edge cases`,()=>{
    for(const c of p.cases){const result=spawnSync(process.env.PYTHON_BIN||'python',['-c',codeFor(p,'py',true)],{input:c.input,encoding:'utf8',timeout:3000});assert.equal(result.error,undefined,'Python interpreter must be available');assert.equal(result.status,0,result.stderr);assert.ok(compareOutput(p,result.stdout,c.expected),`expected ${c.expected}, got ${result.stdout}`);}
  });
}
test('Completion is unique per problem and per day; review due time is preserved',()=>{
  const s=initialState(),now=new Date(2026,9,10,12).getTime();markSolved(s,11,now);markSolved(s,11,now+1000);assert.deepEqual(s.solved,[11]);assert.deepEqual(s.activity[dayKey(now)],[11]);assert.equal(s.reviews[11].due,now+86400000);markSolved(s,11,now+86400000);assert.equal(Object.keys(s.activity).length,2);
});
test('Review ratings schedule exact intervals and extend mature reviews',()=>{
  const s=initialState();rateReview(s,11,'again',1000);assert.equal(s.reviews[11].due,601000);rateReview(s,11,'good',1000);assert.equal(s.reviews[11].interval,3);rateReview(s,11,'easy',1000);assert.equal(s.reviews[11].interval,9);assert.throws(()=>rateReview(s,11,'invalid'));
});
test('Streak tolerates today not checked in and breaks across gaps',()=>{
  const s=initialState(),now=new Date(2026,9,10,12).getTime();s.checkins=['2026-10-08','2026-10-09'];assert.equal(streak(s,now),2);s.checkins.push('2026-10-10');assert.equal(streak(s,now),3);assert.equal(streak(s,now+2*86400000),0);
});
test('Backup and custom problem validation reject malformed data',()=>{
  assert.equal(validateBackup(initialState()).language,'py');assert.throws(()=>validateBackup({version:1}));assert.throws(()=>validateBackup({...initialState(),reviews:{11:{due:'oops'}}}));assert.throws(()=>validateProblem({...problems[0],id:10000,cases:[]}));assert.equal(validateProblem({...problems[0],id:10000}).id,10000);
});
test('Output normalization ignores whitespace but never changes values or order',()=>{
  assert.equal(normalizeOutput(' 1\n 2\t3 '),'1 2 3');assert.notEqual(normalizeOutput('2 1'),'1 2');assert.notEqual(normalizeOutput('TRUE'),'true');
});
test('Python adapter sends complete program and stdin; preserves runtime failures',async()=>{
  const old=globalThis.fetch;let request;
  try{globalThis.fetch=async(url,options)=>{request={url:String(url),...JSON.parse(options.body)};return {ok:true,json:async()=>({status:'1',program_output:'partial',program_error:'ValueError'})};};const r=await runPython('print(input())','test');assert.equal(request.compiler,'cpython-3.12.7');assert.equal(request.stdin,'test');assert.equal(request.save,false);assert.equal(r.status,1);assert.equal(r.error,'ValueError');assert.equal(r.output,'partial');}finally{globalThis.fetch=old;}
});
test('Python adapter reports network and HTTP failures',async()=>{
  const old=globalThis.fetch;try{globalThis.fetch=async()=>{throw Error('offline');};await assert.rejects(runPython('',''),/无法连接/);globalThis.fetch=async()=>({ok:false,status:429});await assert.rejects(runPython('',''),/429/);await assert.rejects(runPython('','','http://untrusted.example'),/HTTPS/);}finally{globalThis.fetch=old;}
});

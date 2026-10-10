export const STORAGE_KEY='acm-garden-v1';
export const dayKey=(time=Date.now())=>{const d=new Date(time);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
export const initialState=()=>({version:1,drafts:{},notes:{},favorites:[],reviews:{},solved:[],activity:{},checkins:[],goal:3,language:'py',runner:'https://wandbox.org',custom:[]});
export const normalizeOutput=s=>String(s).trim().split(/\s+/).filter(Boolean).join(' ');
export function compareOutput(problem,actual,expected){
  if(problem.outputFormat!=='json')return normalizeOutput(actual)===normalizeOutput(expected);
  const canonical=value=>value&&typeof value==='object'?(Array.isArray(value)?value.map(canonical):Object.fromEntries(Object.keys(value).sort().map(k=>[k,canonical(value[k])]))):value;
  try{return JSON.stringify(canonical(JSON.parse(actual)))===JSON.stringify(canonical(JSON.parse(expected)));}catch{return false;}
}
export function validateBackup(s){
  if(!s||s.version!==1||!Array.isArray(s.solved)||!Array.isArray(s.favorites)||!Array.isArray(s.checkins)||!Array.isArray(s.custom)||!Number.isInteger(s.goal)||s.goal<1||s.goal>20)throw Error('备份格式无效');
  for(const key of ['drafts','notes','reviews','activity'])if(!s[key]||Array.isArray(s[key])||typeof s[key]!=='object')throw Error('备份缺少 '+key);
  if(!['py','js'].includes(s.language)||typeof s.runner!=='string')throw Error('运行设置无效');
  if(!s.solved.every(Number.isInteger)||!s.favorites.every(Number.isInteger)||!s.checkins.every(x=>typeof x==='string'))throw Error('进度格式无效');
  for(const value of Object.values(s.drafts))if(typeof value!=='string'||value.length>100000)throw Error('代码草稿无效');
  for(const value of Object.values(s.notes))if(typeof value!=='string'||value.length>100000)throw Error('笔记无效');
  for(const r of Object.values(s.reviews))if(!r||!Number.isFinite(r.due)||!Number.isFinite(r.interval)||r.interval<0)throw Error('复习数据无效');
  for(const ids of Object.values(s.activity))if(!Array.isArray(ids)||!ids.every(Number.isInteger))throw Error('学习记录无效');
  s.custom.forEach(validateProblem);return {...initialState(),...s};
}
export function validateProblem(p){
  if(!p||!Number.isInteger(p.id)||p.id<10000)throw Error('自定义题目 id 必须为 ≥10000 的整数');
  for(const key of ['title','description','input','output','constraints','tag'])if(typeof p[key]!=='string'||!p[key].trim()||p[key].length>20000)throw Error('题目缺少或无效字段：'+key);
  if(!['简单','中等','困难'].includes(p.difficulty)||!Array.isArray(p.cases)||p.cases.length<1||p.cases.length>20)throw Error('难度或测试用例无效');
  for(const c of p.cases)if(typeof c.input!=='string'||typeof c.expected!=='string'||c.input.length>100000||c.expected.length>100000)throw Error('测试用例必须有 input 与 expected 字符串');
  for(const key of ['js','py','hint','complexity','slug'])if(p[key]!==undefined&&typeof p[key]!=='string')throw Error('字段类型无效：'+key);
  if(p.outputFormat!==undefined&&!['text','json'].includes(p.outputFormat))throw Error('outputFormat 必须是 text 或 json');
  return p;
}
export function markSolved(state,id,now=Date.now()){
  if(!state.solved.includes(id))state.solved.push(id);
  const day=dayKey(now);state.activity[day]??=[];if(!state.activity[day].includes(id))state.activity[day].push(id);
  state.reviews[id]??={interval:1,due:now+86400000};
}
export function rateReview(state,id,rating,now=Date.now()){
  const previous=state.reviews[id]?.interval||1;
  const intervals={again:10/1440,hard:1,good:Math.max(3,previous*2),easy:Math.max(7,previous*3)};
  const interval=intervals[rating];if(interval===undefined)throw Error('无效复习等级');
  state.reviews[id]={interval,due:now+interval*86400000};
  const day=dayKey(now);state.activity[day]??=[];if(!state.activity[day].includes(id))state.activity[day].push(id);
}
export function streak(state,now=Date.now()){
  let d=new Date(now),n=0;if(!state.checkins.includes(dayKey(d.getTime())))d.setDate(d.getDate()-1);
  while(state.checkins.includes(dayKey(d.getTime()))){n++;d.setDate(d.getDate()-1);}return n;
}

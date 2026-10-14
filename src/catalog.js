const difficulties=['','简单','中等','困难'];
const collator=new Intl.Collator('zh-CN',{numeric:true,sensitivity:'base'});

export function decodeCatalog(snapshot) {
  if(snapshot?.schemaVersion!==1||!Array.isArray(snapshot.tags)||!Array.isArray(snapshot.rows)||snapshot.rows.length!==snapshot.total)throw Error('题库数据不完整，请重试');
  const seenIds=new Set(),seenSlugs=new Set();
  const entries=snapshot.rows.map(row=>{
    const [frontendId,questionId,title,englishTitle,slug,level,paidOnly,tagIds]=row;
    if(typeof frontendId!=='string'||!Number.isInteger(questionId)||typeof title!=='string'||!title||typeof slug!=='string'||!slug||!difficulties[level]||!Array.isArray(tagIds))throw Error('题目目录格式无效');
    // Named series use negative official IDs, leaving existing Hot 100 and custom IDs intact.
    const id=/^[1-9]\d*$/.test(frontendId)?Number(frontendId):-questionId;
    if(!Number.isSafeInteger(id)||seenIds.has(id)||seenSlugs.has(slug))throw Error('题库包含重复题目');
    seenIds.add(id);seenSlugs.add(slug);
    const tags=tagIds.map(index=>{
      const tag=snapshot.tags[index];
      if(!Array.isArray(tag)||typeof tag[0]!=='string'||typeof tag[1]!=='string')throw Error('题目标签无效');
      return {slug:tag[0],name:tag[1]};
    });
    return {id,frontendId,questionId,title,englishTitle,slug,difficulty:difficulties[level],level,paidOnly:!!paidOnly,tags};
  });
  return entries.sort((a,b)=>collator.compare(a.frontendId,b.frontendId));
}

export function filterCatalog(entries,{query='',difficulty='',topic='',access='',mode='',favorites=[],adaptedIds=new Set(),order='asc'}={}) {
  const search=query.trim().toLocaleLowerCase();
  const favoriteIds=new Set(favorites);
  const exactId=/^#\s*\d+$/.test(search)?search.replace(/^#\s*/,''):null;
  const result=entries.filter(p=>
    (!search||(exactId!==null?p.frontendId===exactId:`${p.frontendId} ${p.title} ${p.englishTitle} ${p.slug} ${p.tags.map(t=>t.name).join(' ')}`.toLocaleLowerCase().includes(search)))&&
    (!difficulty||p.difficulty===difficulty)&&
    (!topic||p.tags.some(t=>t.slug===topic))&&
    (!access||(access==='premium'?p.paidOnly:!p.paidOnly))&&
    (!mode||(mode==='adapted'?adaptedIds.has(p.id):mode==='custom'?!adaptedIds.has(p.id):favoriteIds.has(p.id)))
  );
  if(order==='desc')result.reverse();
  return result;
}

export function paginateCatalog(entries,page=1,pageSize=30) {
  const size=[30,60,100].includes(Number(pageSize))?Number(pageSize):30;
  const pages=Math.max(1,Math.ceil(entries.length/size));
  const current=Math.max(1,Math.min(pages,Math.floor(Number(page))||1));
  const start=(current-1)*size;
  return {items:entries.slice(start,start+size),page:current,pages,total:entries.length,start:entries.length?start+1:0,end:Math.min(entries.length,start+size),pageSize:size};
}

export function catalogPractice(entry,adaptedProblems=[]) {
  const adapted=adaptedProblems.find(p=>p.slug===entry.slug);
  if(adapted)return adapted;
  return {...entry,catalogOnly:true,tag:entry.tags[0]?.name||'综合',hot100:false,cases:[],
    description:'阅读官方原题后，在右侧编写完整 Python 程序，用自定义标准输入输出练习。这里提供题目目录和练习工具，尚未为本题内置 ACM 改编题面、参考解法或评测用例。',
    input:'按你为本题设计的 ACM 格式读取 sys.stdin；可以使用空白分隔的数字、字符串或 JSON。',
    output:'使用 print 输出你的答案。可填入期望输出进行比较；不填写时只执行代码。',
    constraints:'数据范围、题意和官方样例请查看原题。',
    hint:'本题暂未提供内置题解。可以在官方原题中阅读题意，并在笔记中记录自己的解法。',
    complexity:'复杂度由你的算法决定'};
}

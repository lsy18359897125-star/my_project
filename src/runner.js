export function runJavaScript(code,input,{timeout=3000}={}){
  return new Promise((resolve,reject)=>{
    const worker=new Worker(new URL('./worker.js',import.meta.url),{type:'module'});
    const started=performance.now();
    const finish=()=>{clearTimeout(timer);worker.terminate();};
    const timer=setTimeout(()=>{finish();reject(Error('运行超时（3 秒），请检查循环是否能够结束。'));},timeout);
    worker.onmessage=({data})=>{finish();resolve({...data,elapsed:Math.round(performance.now()-started)});};
    worker.onerror=e=>{finish();reject(Error(e.message||'运行器出错'));};
    worker.postMessage({code,input});
  });
}
export async function runPython(code,input,base='https://wandbox.org'){
  const url=new URL(base);if(url.protocol!=='https:'&&!(url.protocol==='http:'&&['localhost','127.0.0.1'].includes(url.hostname)))throw Error('编译服务必须使用 HTTPS');
  const started=performance.now();
  let response;
  try {
    response=await fetch(new URL('/api/compile.json',url),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({compiler:'cpython-3.12.7',code,stdin:input,save:false}),signal:AbortSignal.timeout(30000)});
  }catch(e){throw Error(e.name==='TimeoutError'?'编译服务超时，请稍后再试。':'无法连接编译服务。请检查网络，或切换 JavaScript 本地运行。');}
  if(!response.ok)throw Error(`编译服务返回 HTTP ${response.status}，请稍后再试。`);
  const data=await response.json();
  return {output:data.program_output||'',error:[data.compiler_error,data.program_error,data.signal].filter(Boolean).join('\n'),status:Number(data.status??1),elapsed:Math.round(performance.now()-started)};
}

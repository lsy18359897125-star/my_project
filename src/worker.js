self.onmessage=({data})=>{
  let output='',size=0;
  const print=(...args)=>{const line=args.map(String).join(' ')+'\n';size+=line.length;if(size>200000)throw Error('输出超过 200 KB');output+=line;};
  try {
    new Function('stdin','print','console', '"use strict";\n'+data.code)(data.input,print,{log:print,error:print,warn:print});
    self.postMessage({output,error:'',status:0});
  }catch(e){self.postMessage({output,error:e.name+': '+e.message,status:1});}
};

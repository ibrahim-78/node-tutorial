const {readFileSync,writeFileSync}=require('fs')
const first = readFileSync('./content/first.txt','utf8');
const test = readFileSync('./content/subfolder/test.txt','utf8');
writeFileSync('./content/result.txt',`Here is the result bitch : ${first},${test}`,{flag:'a'});


const{readFile,writeFile} =require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
 if(err){
    console.log(err);
    return
 }
 const first =result
 readFile('./content/subfolder/test.txt','utf8',(err,result)=>{
    if(err){
       console.log(err);
       return
    }
   const test = result;
   writeFile('./content/result',`Whats up, ${first}, ${test}`,(err,result)=>{
    if(err){
       console.log(err);
       return
    }
   console.log(result);
}
   )
}
 )
}

)
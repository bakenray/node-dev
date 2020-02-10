const fs = require('fs')
//使用string写入文件
fs.appendFile('message.txt','string to append','utf-8',(err)=>{
  if(err){
    console.log(err)
    return 
  }
  console.log('字符串写入成功')
}
)

//使用buffer写入文件
fs.appendFile('message.txt','buffer to append',(err)=>{
  if(err) throw err;
  console.log('buffer 写入成功！')
})
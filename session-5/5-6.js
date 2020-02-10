const fs = require('fs')
console.log('准备打开文件')
fs.open('./temp/text.txt','r+',function(err,fd){
  if(err){
    return console.error(err)
  }
  console.log('文件打开成功')
  fs.close(fd,function(err){
    if(err){console.log(err)}
    console.log('关闭文件成功')
  })
})
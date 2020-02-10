const fs = require('fs')
console.log('准备打开文件')
fs.open('./temp/text.txt','r+',function(err,fd){
  if(err){
    return console.error(err)
  }
  console.log('成功打开文件')
})
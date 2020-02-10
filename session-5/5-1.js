const fs = require("fs")

// 异步操作读取文件
fs.unlink('./temp/hello',(err)=>{
  if(err) throw err
  console.log('成功删除hello 文件')
})

// 同步操作读取文件
// fs.unlinkSync('./temp/hello')
// console.log('成功删除hello 文件')
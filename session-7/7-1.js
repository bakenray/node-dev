const mongoose = require('mongoose')
// mongodb地址
const uri = 'mongodb://localhost/article'
// 连接mongodb
mongoose.connect(uri,function(err){
  if(err){
    console.log('connect failed')
    console.log(err)
    return
  }
  console.log('connect success')
})
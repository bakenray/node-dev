var MongoClient = require('mongodb').MongoClient

// 定义mongodb 地址
var url = 'mongodb://localhost:27017/student'

// 连接mongodb
MongoClient.connect(url,function(err,db){
  if(err){
    console.log('connect failed')
    console.log(err)
    return;
  }
  console.log('connect success!')
})
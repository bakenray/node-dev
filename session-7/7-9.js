var MongoClient = require('mongodb').MongoClient
var Db = require('mongodb').Db
var server = require('mongodb').Server
var studentDb = new Db('student', new server('localhost','27017'))

// 定义数据
var student = {
  id:'1101',
  name:'bakenray',
  age:27
}

console.log('studentDb',studentDb)
// 打开数据库
studentDb.open(function(err,db){
  if(err){
    console.log('open err')
    console.log(err)
    return
  }
  // 打开集合
  db.collection('student',function(err,collection){
    if(err){
      console.log('collection error')
      studentDb.close()
      console.log(err)
      return
    }
    // 插入文档
    collection.insertOne(student,function(err,doc){
      // 关闭数据库
      studentDb.close()
      if(err){
        console.log('document error')
        console.log(err)
        return;
      }
      console.log(doc[0])
    })
  })
})
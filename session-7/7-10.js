var MongoClient = require('mongodb').MongoClient;
var Db = require('mongodb').Db;
var server = require('mongodb').Server;
var studentDb = new Db('student',new server('localhost','27017'));

// 打开数据库
studentDb.open(function(err,db){
  if(err){
    console.log('open err')
    console.log(err)
    return
  }
  // 打开集合
  db.collection('student',function(err,collection){
    // 出错关闭数据库
    if(err){
      console.log('collection error')
      studentDb.close()
      console.log(err)
      return
    }
    // 查找文档
    collection.findOne({},function(err,doc){
      // 关闭数据库
      studentDb.close()
      if(err){
        console.log('document error')
        console.log(err)
        return
      }
      console.log(doc)
    })
  })
})
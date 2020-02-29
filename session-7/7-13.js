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
    // 出错则关闭数据库
    if(err){
      studentDb.close()
      console.log(err)
      return
    }
    // 删除单个数据
    collection.deleteOne({name:'jack'},function(err,doc){
      studentDb.close()
      if(err){
        console.log('delete failed')
        console.log(err)
        return
      }
      console.log('delete success')
    })
  })
})

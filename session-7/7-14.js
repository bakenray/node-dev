var MongoClient = require('mongodb').MongoClient;
var Db = require('mongodb').Db;
var server = require('mongodb').Server;
var studentDb = new Db('student',new server('localhost','27017'));

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
    // 更新数据
    collection.updateOne({name:'张三'},{$set:{name:'张四'}},function(err,doc){
      studentDb.close()
      if(err){
        console.log('update failed')
        console.log(err)
        return
      }
      console.log('update success')
    })
  })
})
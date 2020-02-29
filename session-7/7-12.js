var MongoClient = require('mongodb').MongoClient;
var Db = require('mongodb').Db;
var server = require('mongodb').Server;
var studentDb = new Db('student',new server('localhost','27017'));

// 定义数据
var student1 = {
  id:1201,
  name:'张三',
  age:13
}
var student2 ={
  id:1202,
  name:'李四',
  age:14
}
var student3 ={
  id:1203,
  name:'王五',
  age:15
}

// 打开数据库
studentDb.open(function(err,db){
    if(err){
      console.log('open err')
      console.log(err)
      return
    }
    // 打开集合
    db.collection('student',function(err,coolection){
      if(err){
        console.log('collection error')
        studentDb.close()
        console.log(err)
        return
      }
      // 将查询记录转化为数组
      collection.find().toArray(function(err,docs){
        studentDb.close()
        if(err){
          console.log('docuemnt error')
          console.log(err)
          return
        }
        console.log(docs)
      })
    })
})
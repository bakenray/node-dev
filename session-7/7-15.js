// 引入mysql模块
const mysql= require('mysql')

// 创建连接
const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'xxxx'
})

// 连接mysql
connection.connect(function(err){
  // 连接出错处理
  if(err){
    console.error('error connnectioning :' + err.stack)
    return
  }
  console.log('connectied as id ' + connection.threadId)
})

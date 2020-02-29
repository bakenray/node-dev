const mysql = require('mysql')

// 创建连接
const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'xxx',
  database:'database'
})

// 连接mysql
connection.connect(function(err){
  // 连接出错的处理
  if(err){
    console.error('error connectioning:' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

const table = 'mytable'

// 查询数据
connection.query('SELECT * FROM ?',[table],function(err,rows){
  if(err){
    console.log(err)
  }else{
    console.log(rows)
  }
})
const mysql =require('mysql')
const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'xxx',
  database:'database'
})

connection.connect(function(err){
  if(err){
    console.error('error connection: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

let sql = 'SELECT * FROM users  WHERE userid=' + connection.escape(userid)
connection.query(sql,function(err,rows){
  if(err){
    console.log(err)
  }
  else{
    console.log(rows)
  }
})
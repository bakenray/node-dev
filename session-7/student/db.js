const mysql = require('mysql')
const DB = {
  host:'localhost',
  port:3306,
  user:'root',
  password:'xxx',
  database:'student'
}
const DBConnection = mysql.createConnection({
  host:DB.host,
  user:DB.user,
  password:DB.password,
  database:DB.database,
  multipleStatements:true
})
DBConnection.connect()

module.exports.DBConnection = DBConnection;
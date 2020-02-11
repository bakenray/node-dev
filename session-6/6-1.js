const net =  require('net')
const server = net.createServer(function(socket){
  console.log('有人连接了',socket)
})
const net = require('net')
//创建TCP服务器
const server = net.createServer(function(socket){
  console.log('socket',socket)
})
server.listen(18001)
server.on('listening',function(){
  console.log('server is listening')
})

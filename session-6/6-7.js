const net = require('net')
const server = net.createServer(function(socket){
    socket.on('data',function(data){
      console.log('data: ',data.toString())
    })
})
server.listen(18001,function(){
  console.log('server is listening')
})
const net = require('net')
const server = net.createServer(function(socket){
  console.log("本地端口",socket.localPort)
  console.log("本地IP地址",socket.localAddress)
  console.log("远程端口",socket.remotePort)
  console.log("远程IP协议族",socket.remoteFamily)
  console.log("远程IP地址",socket.remoteAddress)
  socket.write('我是服务器发送的数据',()=>{
    console.log('数据大小为',socket.bytesWritten)
  })
  socket.on('data',function(data){
    console.log(data.toString())
  })
})
server.listen(18001,function(){
  console.log('server is listening')
})

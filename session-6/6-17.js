const dgram = require('dgram')
const message = new Buffer('some message from client')
const socket = dgram.createSocket('udp4')
socket.send(message,0,message.length,41234,'localhost',function(err,bytes){
  if(err){
    console.log(err)
    return
  }
  console.log('client send ' + bytes + 'message')
})
socket.on('message',function(msg,rinfo){
  console.log('客户端收到的msg: ' , msg.toString())
})
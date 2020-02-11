const net = require('net')
const server = net.createServer(function(socket){
  let address = socket.address()
  let message = 'client , the server address is ' + JSON.stringify(address)
  
  socket.write(message,function(){
     let writeSize = socket.bytesWritten
     console.log(message + 'has send')
     console.log('the size of message is ' + writeSize)
  })
  socket.on('data',function(data){
    console.log(data.toString())
    let readSize = socket.bytesRead
    console.log('the size  of data is ' + readSize)
  })
})

server.listen(18001,function(){
  console.log('server is listening')
})
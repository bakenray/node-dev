const net = require('net')
const server = net.createServer(function(socket){
  console.log('someone connects')
})

server.listen(18001,function(){
  let address = server.address()
  console.log('port: ',address.port)
  console.log('family: ',address.family)
  console.log('address:',address.address)
})
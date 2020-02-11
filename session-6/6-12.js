const net = require('net')

// 创建客户端
const client = new net.Socket()

// 连接服务器
client.connect(18001,'127.0.0.1',function(){
  console.log('connect the server')
  client.write('我是客户端发送的数据')
})

//接受数据
client.on('data',function(data){
  console.log('the data of server is :' , data.toString())
})
//监听 end事件
client.on('end',function(){
  console.log('data end')
})
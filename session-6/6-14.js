const http =require('http')
const fs = require('fs')
const server = http.createServer(function(req,res){
  res.writeHead(200,{
    'content-type':'text/html'
  })
  const data = fs.readFileSync('./index.html')
  res.write(data)
  res.end()
})
server.listen(3000,function(){
  console.log('listening port 3000')
})

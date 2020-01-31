const http = require('http');
const server = http.createServer();

server.on('request',function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello Node.js');
})
server.listen(3000,function(){
    console.log('在浏览器中打开','http://localhost:3000')
})

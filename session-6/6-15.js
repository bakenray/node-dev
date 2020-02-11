const http = require('http')
const fs = require('fs')
const url = require("url")
const mime = require('./mime')
const path = require('path')

const server = http.createServer(function(req,res){
  var filePath = '.' + url.parse(req.url).pathname
  if(filePath ==='./'){
    filePath =  './index.html'
  }
  // 判断文件是否存在
  fs.exists(filePath,function(exist){
    // 如果文件存在，则返回相应文件数据
    if(exist){
      var data = fs.readFileSync(filePath)
      var contentType = mime[path.extname(filePath)]
      res.writeHead(200,{
        'content-type':contentType
      })
      res.write(data)
      res.end()
    }
    else{
      res.end('404')
    }
  })
})

server.listen(3000,function(){
  console.log('listening port 3000')
})
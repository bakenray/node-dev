const fs = require('fs')
fs.open('./temp/test.js','r', function(err,fd){
  if(err){ 
    console.log(err) 
    return
  }
  let readBuffer = new Buffer(1024),
      offset = 0 ,
      len = readBuffer.length,
      filePosition = 100;
  
  fs.read(fd,readBuffer,offset,len,filePosition,function(err,readByte,buffer){
    if(err){
      console.log(err)
      return
    }
    console.log(readBuffer.slice(0,readByte))
    console.log('buffer',buffer)
  })
})
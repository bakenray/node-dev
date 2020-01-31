const http = require('http')
let resData = ''
let options = {
    'host':'127.0.0.1',
    'port':'3000'
}

http.get(options,function(res){
    res.on('data',function(chunk){
        resData += chunk
    })
    res.on('end',function(){
        console.log('resData',resData)
    })
}).end()
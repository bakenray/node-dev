const http = require('http')
let reqData = ''
let options = {
    'host':'127.0.0.1',
    'port':'3000'
}
http.request(options,function(res){
    res.on('data',function(chunk){
        reqData +=chunk
    })
    res.on('end',function(){
        console.log(reqData)
    })
}).end()
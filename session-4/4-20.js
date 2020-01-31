const dns = require('dns')
dns.reverse('114.114.114.114',function(err,domain){
    if(err){
        console.log(err)
        return 
    }
    console.log(domain)
})
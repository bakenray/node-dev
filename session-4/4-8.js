const url = require('url')
let urlObj = {
    protocol:'https',
    slashes:true,
    auth:null,
    host:'www.bakenray.com',
    port:null,
    hostname:'www.bakenray.com',
    hash:null,
    search:'?q=node.js',
    query:'q=node.js',
    pathname:'/',
    path:'/?q=node.js',
    href:'https://www.bakenray.com/?q=node.js'
}
let urlStr = url.format(urlObj)
console.log('urlStr',urlStr)
const url = require('url')
let parseUrl  = 'https://www.bakenray.com/?q=node.js'
let urlObj = url.parse(parseUrl)

console.log("转换对象为：",urlObj)
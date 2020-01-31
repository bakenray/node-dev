const qs = require('querystring')
let str = 'keyword=node.js&name=bakenray'
let obj = qs.parse(str)
console.log(obj)
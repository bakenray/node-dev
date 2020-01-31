const qs = require('querystring')
let obj = {keyword:'node.js',name:'bakenray'}
let str = qs.stringify(obj)
console.log(str)
const util = require('util')
let obj = {
    keyword:'node.js',
    name:'bakenray'
}
let str = util.inspect(obj)
console.log(str)
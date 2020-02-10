const path = require('path')

let pathUrl = path.normalize('/foo//sdfsd /sdf//')
console.log('规范化路径后',pathUrl)

let joinPath = path.join('/foo' ,'bar','baz/asdf','euxadf','..')
console.log('连接后的路径',joinPath)

// let joinErrorPath = path.join('foo',{},'bar')
// 抛出异常
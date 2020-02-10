const fs = require('fs')
fs.stat('./5-3.js',(err,stats)=>{
  console.log(stats)
})
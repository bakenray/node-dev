const fs = require('fs')
fs.rename('./temp/hello','./temp/world',(err)=>{
  if(err) throw err;
  console.log('renamed complete');
  
  fs.stat('./temp/world',(err,stats)=>{
    if(err) throw err;
    console.log(`stats:${JSON.stringify(stats)}`)
  })

})

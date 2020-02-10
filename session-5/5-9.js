const csv = require('csv')
let generator = csv.generate({seed:1,columns:2,length:20})
let parser = csv.parse()
let transformer = csv.transform(function(data){
  return data.map(function(value){return value.toUpperCase()})
})
let stringifier = csv.stringify()

generator.on('readable',function(){
  while(data = generator.read()){
    parser.write(data)
  }
})

//解析生成的csv文件
parser.on('readable',function(){
  while(data = parser.read()){
    transformer.write(data)
  }
})

//将从csv文件转换为txt文件
transformer.on('readable',function(){
  while(data = transformer.read()){
    stringifier.write(data)
  }
})

stringifier.on('readable',function(){
  while(data = stringifier.read()){
    process.stdout.write(data)
  }
})
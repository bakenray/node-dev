const mongoose = require('mongoose')
const uri = 'mongodb://localhost/article'
mongoose.connect(uri,function(err){
  if(err){
    console.log('connect failed')
    console.log(err)
    return
  }
  console.log("connect success")
})
const ArticleSchema = new mongoose.Schema({
  title:String,
  author:String,
  content:String,
  publishTime:Date
})
mongoose.model('Article',ArticleSchema)

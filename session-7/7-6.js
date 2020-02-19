const mongoose = require('mongoose')
const uri = 'mongodb://localhost/article'
mongoose.connect(uri,function(err){
  if(err){
    console.log('connect filed')
    console.log(err)
    return
  }
  console.log('connect success')
})

const ArticleSchema = new mongoose.Schema({
  title:String,
  author:String,
  content:String,
  publishTime:Date
})

mongoose.model('Article',ArticleSchema)
const Article = mongoose.model('Article')
Article.find({title:'node.js'},function(err,docs){
  if(err){
    console.log('err',err)
    return
  }
  // 修改数据
  docs[0].title = 'javascript'
  docs[0].save()
  console.log('result:', docs)
})
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

mongoose.model('Article', ArticleSchema)
const Article = mongoose.model('Article')

Article.find({},function(err,docs){
  if(err){
    console.log('err',err)
    return
  }
  if(docs){
    docs.forEach(function(ele){
      ele.remove()
    })
  }
})
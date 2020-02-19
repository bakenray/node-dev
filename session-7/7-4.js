const mongoose =require('mongoose')
const uri = 'mongodb://localhost/article'
mongoose.connect(uri,function(err){
  if(err){
    console.log('connect failed')
    console.log(err)
    return
  }
  console.log('connect success')
})

// 定义schame
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
    console.log('error')
    return
  }
  console.log('result:' + docs)
})
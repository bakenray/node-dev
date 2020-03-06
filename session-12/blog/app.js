var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 设置视图文件夹位置
app.set('views', path.join(__dirname, 'views'));
//设置项目使用ejs模板引擎
app.set('view engine', 'ejs');
// 使用日志记录中间件
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 使用cookieParse中间件
app.use(cookieParser());


// 使用express默认的static中间件设置静态资源文件夹的位置
app.use(express.static(path.join(__dirname, 'public')));

// 使用路由index
app.use('/', indexRouter);
// 使用路由user
app.use('/users', usersRouter);

// 处理 404 错误
app.use(function(req, res, next) {
  next(createError(404));
});

// 错误处理
app.use(function(err, req, res, next) {
  // 设置本地错误信息仅在开发环境中提供
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染错误请求页面
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000,function(){
  console.log('listening port 3000')
})

module.exports = app;

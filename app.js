var express = require('express');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon'); //设置favicon 模块 1
var logger = require('morgan'); //打印日志模块
var cookieParser = require('cookie-parser'); //格式化cookie模块
var bodyParser = require('body-parser'); //解析http请求体 

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.set('views', path.join(__dirname, 'views'));//设置模版访问路径
app.engine('.html', require('ejs').__express);//设置ejs识别.html后缀文件 express3 版本以上
app.set('view engine', 'html');//设置模版访问引擎

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); 
var logStream = fs.createWriteStream(path.join(__dirname, 'access.log')); //日志打印到指定文件
app.use(logger('combined',{stream:logStream}));
app.use(bodyParser.json()); //解析json数据格式
app.use(bodyParser.urlencoded({ extended: false }));//解析form表单提交的数据
app.use(cookieParser());  //启用格式化cookie中间件
app.use(express.static(path.join(__dirname, 'public')));//设置静态资源挂载点

//启用路由文件
app.use('/', index); 
app.use('/domList', users); // 匹配/domList开头url

// app.get('/domList/*', function(req, res){  
     
//     res.send('Get Over');    
// }); 


// 匹配404 执行 err中间件
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// err中间件
app.use(function(err, req, res, next) {
  // 在开发环境启用error信息
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染error页面
  res.status(err.status || 500);
  res.render('error',{title:"传入数据"});
});

module.exports = app;

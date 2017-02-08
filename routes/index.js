var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'hello express' });
});
router.get('/project02', function(req, res, next) {
  res.render('project02/index', { title: '神鉴系统-首页' });//直接找view目录
});
router.get('/project01/index', function(req, res, next) {
  res.render('project01/index.html', { title: 'express应用实例' });
});
router.get('/project01/sec', function(req, res, next) {
  res.render('project01/sec.html', { title: 'express应用实例' });
});

router.get('/404', function(req, res, next) {
  res.render('error.ejs', { title: '404页面找不到了' });
});

module.exports = router;

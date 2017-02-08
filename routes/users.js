var express = require('express');
var router = express.Router();
var request = require('request');

// 监听请求
router.get('/*', function(req, res, next) {
  console.log(req.header);
  	
	var obj = {
		"sever1":"http://www.baidu.com",
		"sever2":"10.24.56.88:8080/sever2"
	}
	// 查找对应sever端请求地址
	function searchRequest(e){
		if(!e){
			return;
		}
		var str = ""
		for (index in obj)
		{
		  	if(req.params[0] == index){
		  		str = obj[index]
		  	}
		}
		return str;
	}
   	request(searchRequest(req.params[0]), function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // 向前端加入返回数据
        res.send(body);
      }
    })
});

module.exports = router;

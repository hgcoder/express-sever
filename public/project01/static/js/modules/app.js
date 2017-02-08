/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-05 16:06:35
 * @version $Id$
 */

import $ from "jquery";

var page ={
	init:function(){
		document.write("这里添加文本内容")
		$.ajax({
			url: '/orderLink1',
			type: 'GET',
			data: {pt: 'value1'},
			success:function(json){
				console.log(json)
			}
		})
		
	}
}.init()

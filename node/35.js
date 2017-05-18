/**
 * Created by wanghao on 17/5/18.
 */
var http = require('http');
http.get('http://m.baidu.com',(response)=>{
    console.log(response);
});
/**
 * Created by wanghao on 17/5/11.
 */
'use strict';

const http = require('http');

let count = 0;

const  server = http.createServer((request,response)=>{
    response.write(`你是第${count++}个用户`);
    response.end();
});

server.listen(2080,(error)=>{
    if (error){throw  error}
console.log("成功启动web服务器");

});
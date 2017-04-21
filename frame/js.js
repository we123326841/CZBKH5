/**
 * Created by wanghao on 17/4/14.
 */
// console.log("你他妈的射了吗");
// console.log("你他妈的射了吗");
// console.log("你这个鸡巴养的");
// console.log("呼呼呼");
// console.log("xixix");
// console.log("你他妈的射了吗");

var http = require('http');

var server = http.createServer(function (request,response) {
    console.log(request.url);
    response.writeHead(200,{'Content-Type':'text/html','key':'value1'});
    response.write('<h1>wwww</h1>');
    response.end();
});
server.listen(8080,function (error) {
    console.log("成果监听8080端口");
});
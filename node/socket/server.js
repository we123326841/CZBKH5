/**
 * Created by wanghao on 17/5/17.
 */
const  net = require('net');
var server = net.createServer((socket)=>{
    socket.on('data',(chunk)=>{
        console.log(chunk.toString());
        socket.write('server > 你说啥> ');
    });
});


var port = 2080;
server.listen(port,(err)=>{
    if (err){console.log('端口被占用');return false;}
    console.log('服务器正常启动..');
});
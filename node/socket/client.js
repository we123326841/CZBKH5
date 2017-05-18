/**
 * Created by wanghao on 17/5/17.
 */
const net = require('net');

const  socket = net.connect({port:2080},()=>{
   console.log("已经连接到服务器...");
    process.stdout.write('\nclient > ');
    process.stdin.on('data',(chunk)=>{
        socket.write(chunk.toString().trim());
        process.stdout.write('\nclient > ');
    });

    socket.on('data',(data)=>{
        console.log('\n'+data.toString());
    });
});
// > var buffer = new Buffer(4);
// undefined
// > buffer.write('ssssss');
// 4
// > buffer.toString('utf-8');
// 'ssss'
// > buffer.write('12');
// 2
// > buffer.toString('utf-8');
// '12ss'
// > buffer.toString('utf-8',0);
// '12ss'
// > buffer.toString('utf-8',0,1);
// '1'
// > buffer.toString('utf-8',0,2);
// '12'
// > buffer.write('uu',2);
// 2
// > buffer.toString('utf-8',0);
// '12uu'
// > var buffer = new Buffer(2);
// undefined
// > buffer.writeInt16LE(1);
// 2
// > buffer.writeInt16LE(1122);
// 2
// > var buffer = new Buffer(4);
// undefined
// > buffer.writeInt32LE(1122);
// 4
// > buffer.writeInt32LE(1);
// 4
// > buffer
// <Buffer 01 00 00 00>
// > buffer.writeInt32LE(2);
// 4
// > buffer
// <Buffer 02 00 00 00>
// > buffer.writeInt32LE(16);
// 4
// > buffer
// <Buffer 10 00 00 00>
// > buffer.writeInt32LE(15);
// 4
// > buffer
// <Buffer 0f 00 00 00>
// > buffer.writeInt32BE(15);
// 4
// > buffer
// <Buffer 00 00 00 0f>
// >
const fs =require('fs');
const path =require('path');
const  temp = path.join(__dirname,'./one.jpg');
fs.readFile( path.join(__dirname,'./one.jpg'),(err,data)=>{
    console.log(data.toString('base64'));
});


/**
 * Created by wanghao on 17/5/13.
 */
const fs =require('fs');
const path =require('path');
const  temp = path.join(__dirname,'./lyrics/血染的风采.lrc');
console.log(temp);
// console.log(path.basename(temp));
// console.log(path.basename(temp,'.lrc'));
//默认的路径分隔符
// console.log(path.delimiter);

// console.log(process.env.PATH);
// console.log(process.env.PATH.split(path.delimiter));

// console.log(path.dirname(temp));
// console.log(path.extname(temp));


// console.log(path.parse(temp));
// console.log(path.format(path.parse(temp)));
// console.log(path.isAbsolute(temp));
// console.log(path.isAbsolute('../1.txt'));
// ./ 和 . 一样
// var join = path.join(__dirname,'.','..','./temp','../1.txt');
// console.log(join);

// var a = path.normalize('c:/dev\\dadw//ooo////adv/1.txt');
// console.log(a);

// console.log(path.relative(__dirname,'/Users/wanghao/Documents/CZBKH5/node/02.js'));
// console.log(path.resolve(__dirname,'..','./','./code'));
// console.log(path.resolve(__dirname,'/Users/','./','./code'));

//获取当前操作系统中默认用的路径分隔符
// console.log(path.sep);

console.log(path === path.win32);
console.log(path === path.posix);
/**
 * Created by wanghao on 17/5/17.
 */
const  fs =require('fs');
const  path =require('path');

console.time('read');
fs.readFile('/Users/wanghao/Desktop/name.mkv',(err,data)=>{
    if(err) throw err;
    console.timeEnd('read');
    console.time('write');

    fs.writeFile('/Users/wanghao/Desktop/jiba.mkv',data,(err)=>{
        if(err) throw err;
        console.timeEnd('write');
        console.log("拷贝完成");
    })
})
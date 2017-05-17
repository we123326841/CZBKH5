/**
 * Created by wanghao on 17/5/17.
 */
const fs =require('fs');
const path =require('path');

var reader = fs.createReadStream('/Users/wanghao/Desktop/name.mkv');
var write = fs.createWriteStream('/Users/wanghao/Desktop/name2.mkv');
fs.stat('/Users/wanghao/Desktop/name.mkv',(err,stats)=>{
    if(stats){
        var readTotal = 0;
        reader.on('data',(chunk)=>{
            console.log(stats.size);
            // console.log('读了一点,进度'+(readTotal+=chunk.length) / stats.size*100);
            write.write(chunk,(err)=>{
                if (err) throw  err;
                console.log('写了一点,进度'+(readTotal+=chunk.length) / stats.size*100);
            })
        });
    }
});



/**
 * Created by wanghao on 17/5/14.
 */
// console.log(__dirname);
const fs = require('fs');
const path = require('path');
require('./proto.js')

var target = path.join(__dirname, process.argv[2] || './');

console.log(target);

fs.readdir(target, (err, files)=> {
    console.log(files);
    files.forEach((file)=> {
        console.log(file);
        fs.stat(path.join(target,file),(err,stats)=>{
            console.log(`${stats.mtime.format('yyyy/MM//dd HH:mm')}\t , ${stats.size}\t , ${file}`);
        })
        // var stats=fs.statSync(path.join(target,file));
        // console.log(`${stats.mtime.format('yyyy/MM//dd HH:mm')}\t , ${stats.size}\t , ${file}`);
    });
});
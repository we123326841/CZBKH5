/**
 * Created by wanghao on 17/5/16.
 */
var fs= require('fs');
var path = require('path');
var p =path.join(__dirname,'allen');
console.log(p);

// fs.mkdir(p,(err)=>{
//     if (err) {console.log(err);return}
//     console.log("创建成功");
//
// });

var req =  require('./module/mkdirs');
req('allen/zhangsan',(err)=>{
    if (err){console.log(err);return}
    console.log("创建成功");
})
/**
 * Created by wanghao on 17/5/12.
 */
'use strict';
// var a ="你妹的";
// const  str = `console.log(312);(function(ss){
//     console.log(ss);
// })(a);
// `;
// console.log("哈哈");
// eval(str);
//


function $require(id) {
    let path = require('path');
    let fs = require('fs');
    let filename = path.join(__dirname, id);
    // console.log(filename);
    let dirName = path.dirname(filename);
    // console.log(dirName);
    var contentText = fs.readFileSync(filename,'utf-8');
    console.log(contentText);
    var exports = {};
    module.exports = exports;


    var code = `(function ($require, exports, module,dirname,filename) {
        ${contentText}
    })($require,exports,module,dirName,filename);`
    eval(code);

    return module.exports;


}


let req = $require('./module/module3.js');

req.say("什么鸡巴毛啊");
req.say("我日你吗的逼");


let req2 = $require('./module/demo1.js');
req2.a.say("日你妈");
req2.b.say("日你妈");






/**
 * Created by wanghao on 17/5/12.
 */
"use strict";

// setInterval(()=>{
//    Object.keys(require.cache).forEach((item)=>{
//         delete require.cache[item];
//     });
//     console.log(require('./date').getTime());
// },1000);




//
function $require(id) {
    let path = require('path');
    let fs = require('fs');
    let filename = path.join(__dirname, id);
    // console.log(filename);

    if($require[filename])
    {
        return $require[filename].exports;
    }
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

    $require[filename] = module;

    return module.exports;


}



setInterval(()=>{
    console.log($require('./date.js').getTime());
},1000);

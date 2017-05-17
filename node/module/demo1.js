/**
 * Created by wanghao on 17/5/12.
 */


var b = require('./module/demo2.js');

module.exports = {
    a:{say:(message)=>{
        console.log("我他妈的是1在说"+message);
    }},

    b:b


};
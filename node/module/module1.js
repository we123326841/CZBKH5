/**
 * Created by wanghao on 17/5/12.
 */
console.log(__dirname);
console.log(__filename);

const  fs = require('fs');

fs.readFile('../list.md',(err,data)=>{
    if (err){throw err}
    console.log(data.toString());
});
console.log("什么鸡巴");
/**
 * Created by wanghao on 17/5/11.
 */
const fs = require('fs');

fs.stat('./list.md', (err, stats)=> {
    if (err) {
        console.log("文件不存在");
        fs.writeFile('./list.md', new Date(), (err)=> {
            if (err) {
                console.error(err);
                return false;
            }
            console.log("文件创建成功");
        });
        return false;
    }

    fs.unlink('./list.md',(err)=>{
        if(err){
            console.log(err);
            return false;
        }

        fs.writeFile('./list.md', new Date(), (err)=> {
            if (err) {
                console.error(err);
                return false;
            }
            console.log("文件删除后创建成功");
        });

    });




});
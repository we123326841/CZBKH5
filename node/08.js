/**
 * Created by wanghao on 17/5/11.
 */
// console.log("开始执行");
// console.time('main');
// for(var i = 0 ;i<10000000;i++){
//
//
// }
// console.timeEnd('main');
//
// console.log("完成");


function ifjiou(num, callback) {
    if (typeof num === 'number') {
        if (num % 2 == 0) {
            callback(null, '这是一个偶数');
        } else if (num % 2 === 1) {
            callback(null, '这是一个奇数');
        }
    } else {

        callback(new Error("这他妈不是一个数字"), null);

    }
}


ifjiou(4, (error, data)=> {
    if (error) {
        try {
            throw error;
        } catch
            (e) {
            console.log("哎哟")
        }

    } else {
        console.log(data);
    }
    ;
});


ifjiou(5, (error, data)=> {
    if (error) {
        try {
            throw error;
        } catch
            (e) {
            console.log("哎哟")
        }

    } else {
        console.log(data);
    }
    ;
});

ifjiou("皮肤", (error, data)=> {
    if (error) {
        try {
            throw error;
        } catch
            (e) {
            console.log("哎哟"+error);
        }

    } else {
        console.log(data);
    }
    ;
});






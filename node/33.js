/**
 * Created by wanghao on 17/5/17.
 */
// pipe

const fs = require('fs');
const path = require('path');


var reader = fs.createReadStream('/Users/wanghao/Desktop/name.mkv');
var write = fs.createWriteStream('/Users/wanghao/Desktop/name2.mkv')
var write2 = fs.createWriteStream('/Users/wanghao/Desktop/name3.mkv')


write.on('pipe', (src) => {
    console.log(src === reader);
});
// var z = zlib.createGzip();

reader
    .pipe(write);

reader
    .pipe(write2);


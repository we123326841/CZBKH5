/**
 * Created by wanghao on 17/5/14.
 */

// 动态显示歌词


const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');


fs.readFile(path.join(__dirname, './lyrics/血染的风采.lrc'), (error, data) => {
    var lines = iconv.decode(data, 'gbk').split('\n');
    // console.log(lines.length);
    var regex = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s(.+)/;

    var begin = new Date().getTime();
    // 遍历
    lines.forEach((line) => {
        // [00:32.67] 也许我告别 将不再回来
        var matches = regex.exec(line);
        if (matches) {
            var m = parseFloat(matches[1]);
            var s = parseFloat(matches[2]);
            var f = parseFloat(matches[3]);
            var lyric = matches[4]; // 当前行歌词不是立即执行
            // 由于下达输出任务的时刻不同
            var offset = new Date().getTime() - begin;
            setTimeout(() => {
                console.log(lyric);
            }, m * 60 * 1000 + s * 1000 + f - offset);
        } else {
            // 不是一行歌词
            console.log(line);
        }
    });
});


/**
 * Created by wanghao on 17/5/17.
 */
// node-progress

var ProgressBar = require('progress');

var bar = new ProgressBar('progress: [:bar]', { total: 50, width: 30, complete: '*' });


var timer = setInterval(function () {
    bar.tick(5);
    if (bar.complete) {
        console.log('\ncomplete\n');
        clearInterval(timer);
    }
}, 100);

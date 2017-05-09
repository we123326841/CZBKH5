/**
 * Created by wanghao on 17/5/4.
 */
define(function (require,exports,module) {
    console.log("main...");
    var pagein = require('./pagein.js');
    var  p = new pagein(5,30,5);
    p.render('pagination');
});
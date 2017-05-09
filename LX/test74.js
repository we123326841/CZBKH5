/**
 * Created by wanghao on 17/5/4.
 */
define(function (require,exports,module) {
    console.log("start");
    var expor = require('./test75.js');
    // require.async("./test75.js",function () {
    //
    // });
    console.log("end");

    var $= require('./jquery.js');
    console.log($);
    expor.mober();
    function add(a, b) {
        return parseFloat(a) + parseFloat(b);
    }

    function subtract(a, b) {
        return parseFloat(a) - parseFloat(b);
    }

    function multiply(a, b) {
        return parseFloat(a) * parseFloat(b);
    }

    function divide(a, b) {
        return parseFloat(a) / parseFloat(b);
    }
    // module.exports = {hahah: "hainimabi"};
    exports.add = add;
    exports.subtract = subtract;
    exports.multiply = multiply;
    exports.divide = divide;

    // console.log(module.exports);

    // return {jdded:"yiyiyi"};
});
/**
 * Created by wanghao on 17/5/12.
 */

    function convert(input) {
        return parseFloat(input);
    }


    function add(a,b) {
        return convert(a) + convert(b);
    }

    function subtract(a,b) {
        return convert(a) - convert(b);
    }

    function mutiply(a,b) {
        return convert(a) * convert(b);
    }

    function divide(a,b) {
        return convert(a) / convert(b);
    }


    module.exports = {add,subtract,mutiply,divide};//等价于module.exports = {add:add,subtract:subtract,mutiply:mutiply,divide:divide};


    // let result = 0;
    // switch (operator){
    //     case '+':
    //         result  = parseFloat(parameter1) + parseFloat(parameter2);
    //         break;
    //     case  "-":
    //         result  = parseFloat(parameter1) - parseFloat(parameter2);
    //         break;
    //     case  "x":
    //         result  = parseFloat(parameter1) * parseFloat(parameter2);
    //         break;
    //     case "/":
    //         result  = parseFloat(parameter1) / parseFloat(parameter2);
    //         break;
    //     default:
    //         throw new Error("你他妈的输入的语法有误");
    //
    // }
    // console.log(result);



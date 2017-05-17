'use strict';
const args = process.argv.slice(2);
let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];

let result = 0;
let res = require('./module/calculator.js');

switch (operator){
    case '+':
      result  = res.add(parameter1,parameter2)
        break;
    case  "-":
        result  = res.subtract(parameter1,parameter2);
        break;
    case  "x":
        result  = res.mutiply(parameter1,parameter2);
        break;
    case "/":
        result  = res.subtract(parameter1,parameter2);
        break;
    default:
        throw new Error("你他妈的输入的语法有误");

}
console.log(result);

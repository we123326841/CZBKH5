const module2  = require('./module/module2.js');
//
// var obj = {name:"张三"};
// console.log(obj);
// obj.name = "鸡巴";
// console.log(obj);
// console.log(module);



function CCCat() {
    this.name  = "王浩";
    this.show = function () {
        console.log(this);
    }
}

var cc = new CCCat();
console.log(cc);

var kk = {name:"张三",age:31};
console.log(kk);
kk.name = "鸡巴";
console.log(kk);
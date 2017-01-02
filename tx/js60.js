/**
 * Created by allen on 2016/12/30.
 */
function demo(name, age) {
   y = age;
    nameo = name;

}


var d = new demo("王浩", 27);
console.log(d.y);
console.log(d.nameo);
console.log(window.y);
console.log(window.nameo);
console.log(y);

console.log(nameo);


console.log(this.y);

console.log(this.nameo);


alert(this);
alert(window);

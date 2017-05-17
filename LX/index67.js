/**
 * Created by wanghao on 17/4/1.
 */
function demo() {
    console.log("pipi="+window.pp);
}



function CCCat() {
    this.name  = "王浩";
    this.show = function () {
        console.log(this);
    }
}

var cc = new CCCat();
console.log(cc);
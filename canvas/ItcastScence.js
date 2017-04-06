/**
 * Created by wanghao on 17/3/31.
 */
function ItcastScence(op) {
        this._init(op);


}


ItcastScence.prototype = {
    constructor:ItcastScence,
    mydream : function () {
        console.log("haha");
    },

    _init:function (opotion) {
        this.post = opotion.post;
        this.name = opotion.name;
        var  self =this;
        var demo =  function(){
            console.log("demo:"+self.name);
        }


        if (ItcastScence.curr){
            // this.demo();
            ItcastScence.curr.post(demo);
        }else{
            ItcastScence.curr = this;
        }
    },

    show:function () {
        this.hoho = function (){
            console.log("ni shuo sm");
            console.log(this);
        }
       this.hoho();
    }


}
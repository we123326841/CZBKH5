/**
 * Created by wanghao on 17/3/31.
 */
function ItcastScence1(opotion) {
    this._init = opotion._init || function () {
        };
    this.stage = opotion.stage;
    this.pre = opotion.pre || function () {
        };
    this.post = opotion.post || function () {
        };
    this.name = opotion.name || "鸡巴";
    this.layers = opotion.layers || [];

    this._init();

}


ItcastScence1.prototype = {


    play: function () {


        var self = this;

        function doPre() {
            ItcastScence1.curr = self;
            console.log("执行柱状图"+self.name);
            self.layers.forEach(function (layer) {
                self.stage.add(layer);
            });
            self.pre();
        }


        if (ItcastScence1.curr) {
            console.log("执行柱状图play方法");
            ItcastScence1.curr.post(doPre);
        } else {
            doPre();
        }
    }
}
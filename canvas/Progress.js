/**
 * Created by wanghao on 17/3/29.
 */
function Progress(op) {
    this._init(op)
}


Progress.prototype = {
    _init:function (opotion) {
        this.x = opotion.x || 0;
        this.y = opotion.y || 0;
        this.w = opotion.w || 100;
        this.h = opotion.h || 20;
        this.strokeWidth = opotion.strokeWidth || 10;
        this.stroke = opotion.stroke || "black";
        this.fill = opotion.fill || "green";
        this.opacity = opotion.opacity||1;

     var innerRect  =  new Konva.Rect({
            cornerRadius:this.h/2,
            x:this.x,
            y:this.y,
            width:100,
            height:this.h,
            fill:this.fill,

            id:"inner"

        });

        var outterRect = new Konva.Rect({
            cornerRadius:this.h/2,
            x:this.x,
            y:this.y,
            width:this.w,
            height:this.h,
            stroke:this.stroke,
            strokeWidth:this.strokeWidth,
            opacity:this.opacity,
        });

        this.group = new Konva.Group({
            x:0,
            y:0
        });

        this.group.add(innerRect);
        this.group.add(outterRect);




    },

    addGroupToLayer:function (layer) {
        layer.add(this.group);
    },

    changeValue:function (val) {
        if(val >1){
            val = val/100;
        }

        var inner = this.group.findOne("#inner");
        inner.to({
            width:val*this.w,
            duration:.5,
            ease:Konva.Easings.StrongEaseIn
        });

    }

};
/**
 * Created by wanghao on 17/3/30.
 */
function CircleText(op) {
    this._init(op);
}


CircleText.prototype = {
    _init: function (opotion) {
        this.x = opotion.x,
            this.y = opotion.y,
            this.innerRadius = opotion.innerRadius || 10,
            this.outerRadius = opotion.outerRadius || 20,
            this.ringstroke = opotion.ringstroke || "black",
            this.fill = opotion.fill || "red",
            this.angleDeg = opotion.angleDeg||0,
            this.text = opotion.text||"你妹",
            this.opacity = opotion.opacity || 1,
            this.align = opotion.align || "left",
            this.fontSize = opotion.fontSize || 17,
            this.fontFamily = opotion.fontFamily || "微软雅黑",
            this.textfill = opotion.textfill || "white"


        var  circle = new Konva.Circle({
            x:0,
            y:0,
            radius:this.innerRadius,
            fill:this.fill,
            opacity:this.opacity
        });


        var ring = new Konva.Ring({
            x:0,
            y:0,
            innerRadius:this.innerRadius,
            outerRadius:this.outerRadius,
            fill:this.ringstroke,
            opacity:this.opacity

        });


        var text = new Konva.Text({
            x:0 - this.outerRadius/2,
            y:-9,
            width:this.outerRadius,
            fontSize:this.fontSize,
            fontFamily:this.fontFamily,
            fontStyle:"bold",
            align:this.align,
            text:this.text,
            fill:this.textfill

        });

         this.group = new Konva.Group({
            x:this.x,
            y:this.y
        });
        this.group.add(circle);
        this.group.add(ring);
        this.group.add(text);









    },


    groupAddtoLayer:function (arg) {
        arg.add(this.group);
    }


}
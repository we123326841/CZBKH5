/**
 * Created by wanghao on 17/3/28.
 */
function RotateRect(op) {
    this._init(op)
}


RotateRect.prototype = {
    _init : function (option) {
        this.x = option.x ===0?0:option.x||10;
        this.y = option.y ===0?0:option.y||10;
        this.w = option.w||100;
        this.h = option.h||100;
        this.rotate = option.rotate === 0 ? 0 : option.rotate||10;
        this.globalAlpha = option.globalAlpha ||1;
        this.scaleX = option.scaleX||1;
        this.scaleY = option.scaleY||1;
        this.fillStyle = option.fillStyle||"red";
        this.strokeStyle = option.strokeStyle || "green";


    },


    render: function (cxt) {
        cxt.save();
        cxt.beginPath();
        cxt.translate(this.x,this.y);
        cxt.rotate(this.rotate);
        cxt.globalAlpha = this.globalAlpha;
        cxt.scale(this.scaleX,this.scaleY);


        cxt.rect(0,0,this.w,this.h);
        cxt.fillStyle = this.fillStyle;
        cxt.fill();
        cxt.strokeStyle = this.strokeStyle;
        cxt.stroke();


        cxt.restore();
    }
}
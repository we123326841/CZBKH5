/**
 * Created by wanghao on 17/3/28.
 */
function Sprite(opotion) {
    this._init(opotion);
}


Sprite.prototype = {
    _init: function (option) {
        this.x = option.x || 10;
        this.y = option.y || 10;

        this.w = option.w || 10;
        this.h = option.h || 10;
        this.img = option.img || null;
        this.fps = option.fps || 1000;

        this.indexDir = 0;
        this.originX = option.originX || 0;
        this.originY = option.originY || 0;
    },


    draw: function (cxt) {
        var height = cxt.canvas.height;
        var width = cxt.canvas.width;
        var self = this;
        // console.log(self);
        index = 0;
        var currindex = 0;
        this.img.onload = function () {

            console.log(this);

            setInterval(function () {
                cxt.clearRect(0, 0, width, height);
                cxt.drawImage(self.img, currindex * 40, self.indexDir*65, self.w, self.h, self.x, self.y, self.originX, self.originY);

                index++;
                currindex = index % 4;
            }, 1000/self.fps);

        };

    },



    swtch: function (index) {
        if(index === 1) {
            this.indexDir = 1;
        }else if
        (index === 2) {
            this.indexDir = 2;
        }else if
        (index === 3) {
            this.indexDir = 3;
        }else if
        (index === 4) {
            this.indexDir = 0;
        }
    }

};
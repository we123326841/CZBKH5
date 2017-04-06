/**
 * Created by wanghao on 17/3/31.
 */
function Pie(ap) {
    this._init(ap);
}


Pie.prototype = {
    _init: function (opotion) {
        this.x = opotion.x || 10,
            this.y = opotion.y || 10,
            this.radius = opotion.radius === 0? 0:opotion.radius|| 10,
            this.data = opotion.data || [],
            this.stroke = opotion.stroke || "red"


        this.group = new Konva.Group({
            x:this.x,
            y:this.y
        })
        var circle = new Konva.Circle({
            x: 0,
            y:0,
            radius:this.radius + 10,
            stroke:this.stroke
        });
        this.group.add(circle);
        var self = this;
        var tmpAngle = -90;
        this.wedgeGroup = new Konva.Group({
            x:0,
            y:0
        });

        this.group.add(this.wedgeGroup);

        this.textGroup = new Konva.Group({
            x:0,
            y:0
        });
        this.group.add(this.textGroup);
        data.forEach(function (item,index) {
            var wedge = new Konva.Wedge({
                x: 0,
                y: 0,
                radius:self.radius,
                angle:item.value*360,
                fill:item.color,
                rotation:tmpAngle
            });

            var textAngle = tmpAngle + item.value*360/2;
            var text = new Konva.Text({
                x: (self.radius+20)*Math.cos(textAngle*Math.PI/180),
                y: (self.radius+20)*Math.sin(textAngle*Math.PI/180),
                text:item.value*100 + "%",
                fill:item.color
            });

            if (textAngle > 90 && textAngle < 270){
                text.x(text.x() - text.width());
            }
            tmpAngle += item.value*360;


            self.wedgeGroup.add(wedge);
            self.textGroup.add(text);


        });


    },

    groupAddtoLayer: function (layer) {
        layer.add(this.group);
    },
    
    
    startAnimation:function () {
        // var wedges = layer.find("Wedge");
        var wedges = this.wedgeGroup.getChildren();
        this.data.forEach(function (item,index) {
            wedges[index].angle(0);
        });
        var index = 0;
        function animation() {




            wedges[index].to({
                angle:this.data[index].value*360,
                duration:2*this.data[index].value,
                onFinish:function () {
                    index++;
                    if(index>=this.data.length){

                        return;
                    }
                    animation();

                }
            });



        }

        animation();
    }
};
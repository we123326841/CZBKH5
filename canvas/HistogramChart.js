function HistogramChart(op) {
    this._init(op);
}

HistogramChart.prototype = {
    _init: function (opotion) {
        this.maxWidth = opotion.w || 100;
        this.maxHeight = opotion.h || 100;
        this.x = opotion.x || 100;
        this.y = opotion.y || 100;
        this.data = opotion.data || [];

        var maxWidth = this.maxWidth;
        var maxHeight = this.maxHeight;
        var x = this.x;
        var y = this.y;
        var data = this.data;


        var line = new Konva.Line({
            points: [0, 0,  maxWidth, 0], stroke: 'green'
        });

        this.lineGroup = new Konva.Group({
            x:this.x,
            y:this.y
        });
        this.lineGroup.add(line);


        var rectWidth = maxWidth / data.length;

        this.rectRroup = new Konva.Group({
            x:this.x,
            y:this.y
        });

        this.textGroup = new Konva.Group({
            x:this.x,
            y:this.y
        });


        this.bottowGroup = new Konva.Group({
            x:0,
            y:0
        });

        var self = this;
        data.forEach(function (item, index) {

            var rect = new Konva.Rect({
                x:  (1 / 4 + index) * rectWidth,
                y:  - item.value * maxHeight,
                width: rectWidth / 2,
                height: item.value * maxHeight,
                fill: item.color,
                opacity: .5,
                cornerRadius: 6,
                name: "Rect"
            });
            self.rectRroup.add(rect);


            var text = new Konva.Text({
                fontFamily: "微软雅黑",
                fontSize: 17,
                text: item.value * 100 + "%",
                fill: item.color,
                align: "center",
                width: rectWidth,

                x: index * rectWidth,
                y:  -item.value * maxHeight - 17,
                name: "contentText"

            });
            self.textGroup.add(text);


            var group = new Konva.Group({
                x: x + (1 / 4 + index) * rectWidth,
                y: y
            });
            var textbottow = new Konva.Text({
                fontFamily: "微软雅黑",
                fontSize: 17,
                text: item.name,
                fill: item.color,
                align: "left",
//            width:rectWidth, 宽度不设置是自适应

                x: 0,
                y: 0,


            });
            group.add(textbottow);
            group.rotate(10);
            self.bottowGroup.add(group);


        });
    },


    groupAddtoLayer : function (layer) {
        layer.add(this.lineGroup);
        layer.add(this.rectRroup);
        layer.add(this.textGroup);
        layer.add(this.bottowGroup);
    },


    startAnimate:function () {
        var self =this;
        this.rectRroup.getChildren().each(function (item,index) {
//            console.log(item);

            item.y(0);
            item.height(0);
            item.to(
                {
                    y:-self.data[index].value*self.maxHeight,

                    height:self.data[index].value*self.maxHeight,
                    duration:1.0
                }
            );

        });




        this.textGroup.getChildren().each(function (item,index) {
                console.log(item);

                item.y(-17);
                item.to(
                    {
                        y:-self.data[index].value*self.maxHeight - 17,


                        duration:1.0
                    }
                );
        });
    }





};
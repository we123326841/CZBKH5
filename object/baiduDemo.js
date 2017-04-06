/**
 * Created by wanghao on 17/4/3.
 */
// <div class="item num-0">
//     <div class="image"></div>
//     <div class="description"><p class="name">白羊座</p>
//     <p class="time">3.21-4.19</p>
//     <div class="mark"></div>
//     </div>
//     </div>


var data = [{
    name: '白羊座',
    time: '3.21-4.19'
}
    , {
        name: '金牛座',
        time: '4.20-5.20'
    }
    , {
        name: '双子座',
        time: '5.21-6.21'
    }
    , {
        name: '巨蟹座',
        time: '6.22-7.22'
    }
    , {
        name: '狮子座',
        time: '7.23-8.22'
    }
    , {
        name: '处女座',
        time: '8.23-9.22'
    }
    , {
        name: '天秤座',
        time: '9.23-10.23'
    }
    , {
        name: '天蝎座',
        time: '10.24-11.22'
    }
    , {
        name: '射手座',
        time: '11.23-12.21'
    }
    , {
        name: '摩羯座',
        time: '12.22-1.19'
    }
    , {
        name: '水瓶座',
        time: '1.20-2.18'
    }
    , {
        name: '双鱼座',
        time: '2.19-3.20'
    }
];


function BaiduXingzuo(data, i) {
    this.init(data, i);
}


BaiduXingzuo.prototype = {
    init: function (data, num) {
        this.data = data;
        this.num = num;

        this.config = {container: $(".xingzuo")};
        this.bindDom();
        this.bindEvent();
    },

    bindDom: function () {
        // var str = '<div class="item num-'+this.num+'">';
        //
        //     str += '<div class="image"></div>';
        //     str += '<div class="description">';
        //      str += '<p class="name">@(name)</p>';
        //      str += '<p class="time">@(time)</p>';
        //      str += '<div class="mark"></div>';
        //     str += '</div>';
        // str += '</div>';
        // var htmlStr= $$$.formateString(str,this.data);
        // this.config.container.append(htmlStr);


        var str = '<div class="item num-'+this.num+'">';

        str += '<div class="image"></div>';
        str += '<div class="description">';
        str += '<p class="name">{{name}}</p>';
        str += '<p class="time">{{time}}</p>';
        str += '<div class="mark"></div>';
        str += '</div>';
        str += '</div>';
        var htmlStr= $$$.bindRender(str,this.data);
        this.config.container.append(htmlStr);

        this.dom= $(".num-"+this.num);


    },

    bindEvent: function () {
        var self = this;
       var rr= this.dom.on("mouseenter",function () {
            console.log("鼠标进入");
                self.dom.addClass("is-hover");
        });
        console.log(rr === this.dom);
        this.dom.on("mouseleave",function () {
            console.log("鼠标离开");
            self.dom.removeClass("is-hover");
        });

        this.dom.on("click",function () {
           self.dom.toggleClass("selected");
            window.location="detail.html?num="+self.num+"&id=14";
        });





    }
};



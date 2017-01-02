/**
 * Created by allen on 2016/12/28.
 */
window.onload = function () {
    function $(id) {
        return document.getElementById(id);
    }

    var w_slider = $("w_slider");
    var silder_content = $("silder_content");
    var childImgs = silder_content.children;
    var slider_control = $("slider_control");

    for(var i = 0; i < childImgs.length ; i++){
        var span = document.createElement("span");
        if (i == childImgs.length-1) {
            span.className = "con-item current";
        }else{
            span.className = "con-item";
        }
        span.innerHTML = childImgs.length - i;
        slider_control.insertBefore(span,slider_control.children[1]);
    }
    
     var scrollWith = w_slider.clientWidth;
    for (var i = 1; i <childImgs.length; i++){
            childImgs[i].style.left = scrollWith + "px";
    }
    var num = 0;
    for(var k in slider_control.children){
        slider_control.children[k].onclick = function () {
            if (this.className == "pre"){
                    animate(childImgs[num],{left:scrollWith});
                    --num < 0 ? num = childImgs.length - 1 : num;
                childImgs[num].style.left = -scrollWith + "px";
                animate(childImgs[num],{left:0});


            }else if (this.className == "next"){
                moveToNext();
            }else {
                // alert("什么哟"+this.innerHTML);
                that = this.innerHTML - 1;
                if(that > num){
                    animate(childImgs[num],{left:-scrollWith});
                    childImgs[that].style.left = scrollWith + "px";
                }else if(that < num){
                    animate(childImgs[num],{left:scrollWith});
                    childImgs[that].style.left = -scrollWith + "px";
                }

                num = that;
                animate(childImgs[num],{left:0});
            }
            demond();
        }

    }

   var timer = setInterval(moveTonexts , 2000);

    function moveTonexts() {
        moveToNext();
        demond();
    }
    function moveToNext() {
        animate(childImgs[num],{left:-scrollWith});
        ++num > childImgs.length - 1 ? num = 0 : num;
        childImgs[num].style.left = scrollWith + "px";
        animate(childImgs[num],{left:0});
    }

    function demond() {
        for(var i = 1 ; i < slider_control.children.length-1 ;i++){
            slider_control.children[i].className = "con-item";
        }

        slider_control.children[num+1].className = "con-item current";
    }


    w_slider.onmouseover = function () {
            clearInterval(timer);
    }

    w_slider.onmouseout = function () {
            clearInterval(timer);
             timer = setInterval(moveTonexts,2000);
    }







    function getStyle(obj, attri) {
        return obj.currentStyle ? obj.currentStyle[attri] : window.getComputedStyle(obj, null)[attri];
    }
    function animate(obj, json) {
        clearInterval(obj.timer);
        var timer =  obj.timer = setInterval(function () {

            var flag = true;
            for (var key in json) {
                var styleValue = 0
                if(key == "opacity"){
                    styleValue = getStyle(obj,key)*100;
                }else {
                    styleValue = parseInt(getStyle(obj, key));
                }

                var step = (json[key] - styleValue) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                if(key == "opacity"){
                    if("opacity" in obj.style) {
//                        obj.style[key] = json[key];
                        obj.style[key] = (styleValue + step)/100 ;
                    }else{
                        obj.style.filter = "alpha(opacity = "+styleValue + step+")";
                    }
                }
                else if(key == "zIndex"){
                    obj.style.zIndex = json[key];
                }
                else {
                    obj.style[key] = styleValue + step + "px";
                }
                if (styleValue != json[key]) {
                    flag = false;
                }

                // console.log("key:" + key + ",styleValue:" + styleValue + ",step:" + step+",timer"+timer+",objTimer"+obj.timer);
            }

            if(flag){
                // console.log("清理成功timer"+timer);
                clearInterval(obj.timer);
            }
        }, 5);

//        console.log("什么鸡巴男子毛啊");

    }
}
/**
 * Created by allen on 2016/12/29.
 */
function getStyle(obj, attri) {
    return obj.currentStyle ? obj.currentStyle[attri] : window.getComputedStyle(obj, null)[attri];
}
function animate(obj, json,fn) {
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
            console.log("清理成功timer"+timer);
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    }, 5);

//        console.log("什么鸡巴男子毛啊");

}
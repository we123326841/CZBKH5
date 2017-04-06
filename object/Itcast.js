/**
 * Created by wanghao on 17/4/2.
 */
var $$ = function () {

}


$$.prototype = {

    formateString: function (str, data) {
        // replace 第一个参数是正则表达式  第二个参数是函数(match表示匹配的参数 key括号中的值)
        return str.replace(/@\((\w+)\)/g, function (match, key) {
            console.log("m=" + match);
            console.log("k=" + key);
            console.log(data[key]);
            return typeof data[key] === "undefined" ? '' : data[key]
        });
    },

    ltrim: function (str) {
        return str.replace(/(^\s+)/g, "");
    },

    rtrim: function (str) {
        return str.replace(/(\s*$)/g, "");
    },

    trim: function (str) {
        return str.replace(/(\s*$)|(^\s*)/g, "");
    },

    nikeName :function (str) {
        return str.replace(/^[0-9]{9}$/g,"鸡巴");
    },
    
    bindTemplate:function (mytemplateid,data) {
        return template(mytemplateid,data);
        
    },

    bindRender: function (str , data) {
     var render =template.compile(str);
        return render(data);
    },


    queryString:function () {
        var json = {};
        var sear = window.location.search;
        var name =sear.substring(1);
        var arr  = name.split("&");

        for(var a in arr){
            var num = arr[a].indexOf("=");
            if(num == -1){continue}
            var key = arr[a].substring(0,num);
            var value = arr[a].substring(num+1);
            json[key] = value;
        }
        return json;
    },

    pp:function (idstr) {
        return document.getElementById(idstr);
    },

    //ajax - «∞√ÊŒ“√«—ßœ∞µƒ
    myAjax:function(URL,fn){
        var xhr = createXHR();	//∑µªÿ¡À“ª∏ˆ∂‘œÛ£¨’‚∏ˆ∂‘œÛIE6ºÊ»›°£
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                    fn(xhr.responseText);
                }else{
                    alert("¥ÌŒÛµƒŒƒº˛£°");
                }
            }
        };
        xhr.open("get",URL,true);
        xhr.send();

        //±’∞¸–Œ Ω£¨“ÚŒ™’‚∏ˆ∫Ø ˝÷ª∑˛ŒÒ”⁄ajax∫Ø ˝£¨À˘“‘∑≈‘⁄¿Ô√Ê
        function createXHR() {
            //±æ∫Ø ˝¿¥◊‘”⁄°∂JavaScript∏ﬂº∂≥Ã–Ú…Ëº∆ µ⁄3∞Ê°∑µ⁄21’¬
            if (typeof XMLHttpRequest != "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                if (typeof arguments.callee.activeXString != "string") {
                    var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"
                        ],
                        i, len;

                    for (i = 0, len = versions.length; i < len; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            break;
                        } catch (ex) {
                            //skip
                        }
                    }
                }

                return new ActiveXObject(arguments.callee.activeXString);
            } else {
                throw new Error("No XHR object available.");
            }
        }
    },
};

$$$ = new $$();
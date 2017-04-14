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
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },

    nikeName: function (str) {
        return str.replace(/^[0-9]{9}$/g, "鸡巴");
    },

    bindTemplate: function (mytemplateid, data) {
        return template(mytemplateid, data);

    },

    bindRender: function (str, data) {
        var render = template.compile(str);
        return render(data);
    },


    queryString: function () {
        var json = {};
        var sear = window.location.search;
        var name = sear.substring(1);
        var arr = name.split("&");

        for (var a in arr) {
            var num = arr[a].indexOf("=");
            if (num == -1) {
                continue
            }
            var key = arr[a].substring(0, num);
            var value = arr[a].substring(num + 1);
            json[key] = value;
        }
        return json;
    },

    pp: function (idstr) {
        return document.getElementById(idstr);
    },

    //ajax - «∞√ÊŒ“√«—ßœ∞µƒ
    myAjax: function (URL, fn) {
        var xhr = createXHR();	//∑µªÿ¡À“ª∏ˆ∂‘œÛ£¨’‚∏ˆ∂‘œÛIE6ºÊ»›°£
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    fn(xhr.responseText);
                } else {
                    alert("¥ÌŒÛµƒŒƒº˛£°");
                }
            }
        };
        xhr.open("get", URL, true);
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

    //随机数
    random: function (begin, end) {
        return Math.floor(Math.random() * (end - begin)) + begin;
    },
    //数据类型检测
    isNumber: function (val) {
        return typeof val === 'number' && isFinite(val)
    },
    isBoolean: function (val) {
        return typeof val === "boolean";
    },
    isString: function (val) {
        return typeof val === "string";
    },
    isUndefined: function (val) {
        return typeof val === "undefined";
    },
    isObj: function (str) {
        if (str === null || typeof str === 'undefined') {
            return false;
        }
        return typeof str === 'object';
    },
    isNull: function (val) {
        return val === null;
    },
    isArray: function (arr) {
        if (arr === null || typeof arr === 'undefined') {
            return false;
        }
        return arr.constructor === Array;
    },

    id: function (id) {
        return document.getElementById(id);
    },

    exend: function (obj, name) {
        for (var key in name) {
            obj[key] = name[key];
        }

        return obj;
    },


};

$$$ = new $$();

$$$.exend($$$, {
    on: function (id, type, fn) {
        var dom = !$$$.isString() ? document.getElementById(id) : id;
        if (dom.addEventListener) {
            dom.addEventListener(type, fn, false);
        } else if (dom.attachEvent) {
            dom.attachEvent("on" + type, fn);
        }
    },

    un: function (id, type, fn) {
        var dom = !$$$.isString() ? document.getElementById(id) : id;
        if (dom.removeEventListener) {
            dom.removeEventListener(type, fn);
        } else if (dom.detachEvent) {
            dom.detachEvent(type, fn);
        }
    },
    click: function (id, fn) {
        this.on(id, "click", fn);
    },

    mouseover: function (id, fn) {
        this.on(id, "mouseover", fn);
    },
    mouseout: function (id, fn) {
        this.on(id, "mouseout", fn);
    },

    hover: function (id, fnover, fnout) {
        if (fnover) {
            this.on(id, "mouseover", fnover);
        }
        if (fnout) {
            this.on(id, "mouseout", fnout);
        }
    },

    getevent: function (e) {
        return e ? e : window.event;
    },

    getTarget: function (e) {
        var event = this.getevent(e);
        return event.target || event.srcElement;
    },

    preventDefault: function (e) {
        var event = this.getevent(e);
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    stopPropagation: function (e) {
        var event = this.getevent(e);
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    //事件委托
    delegate: function (pid, eventType, selector, fn) {
        //参数处理
        var parent = this.id(pid);
        var that = this;

        function handle(e) {
            var target = that.getTarget(e);
            if (target.nodeName.toLowerCase() === selector || target.id === selector || target.className.indexOf(selector) != -1) {
                // 在事件冒泡的时候，回以此遍历每个子孙后代，如果找到对应的元素，则执行如下函数
                // 为什么使用call，因为call可以改变this指向
                // 大家还记得，函数中的this默认指向window，而我们希望指向当前dom元素本身
                fn.call(target);
            }
        }

        //当我们给父亲元素绑定一个事件，他的执行顺序：先捕获到目标元素，然后事件再冒泡
        //这里是是给元素对象绑定一个事件
        parent[eventType] = handle;
    },

    $tag: function (context, tag) {
        if (typeof context == 'string') {
            context = $$.$id(context);
        }
        if (context) {
            return context.getElementsByTagName(tag);
        } else {
            return document.getElementsByTagName(tag);
        }
    },
    //class—°‘Ò∆˜
    $class: function (context, className) {
        var elements;
        var dom;
        //»Áπ˚¥´µ›π˝¿¥µƒ «◊÷∑˚¥Æ £¨‘Ú◊™ªØ≥…‘™Àÿ∂‘œÛ
        if ($$.isString(context)) {
            context = document.getElementById(context);
        }
        //»Áπ˚ºÊ»›getElementsByClassName
        if (context.getElementsByClassName) {
            return context.getElementsByClassName(className);
        } else {
            //»Áπ˚‰Ø¿¿∆˜≤ª÷ß≥÷
            dom = context.getElementsByTagName('*');
            for (var i, len = dom.length; i < len; i++) {
                if (dom[i].className && dom[i].className == className) {
                    elements.push(dom[i]);
                }
            }
        }
        return elements;
    }


});


$$$.exend($$$, {
    //∏¯ƒ≥∏ˆ‘™Àÿ…Ë÷√—˘ Ω
    css: function (id, key, value) {
        $$$.id(id).style[key] = value;
    },
    //∏¯ƒ≥∏ˆ‘™Àÿ…Ë÷√ Ù–‘
    attr: function (id, key, value) {
        $$$.id(id)[key] = value;
    },
    //∏¯ƒ≥∏ˆ‘™Àÿ…Ë÷√ƒ⁄»›
    html: function (id, value) {
        $$$.id(id).innerHTML = value;
    }

});


$$$.exend($$$,{
    //id—°‘Ò∆˜
    $id:function(id){
        return document.getElementById(id);
    },
    //tag—°‘Ò∆˜
    $tag:function(tag,context){
        if(typeof context == 'string'){
            context = $$.$id(context);
        }

        if(context){
            return context.getElementsByTagName(tag);
        }else{
            return document.getElementsByTagName(tag);
        }
    },
    //class—°‘Ò∆˜
    $class:function(className,context){
        var i=0,len,dom=[],arr=[];
        //»Áπ˚¥´µ›π˝¿¥µƒ «◊÷∑˚¥Æ £¨‘Ú◊™ªØ≥…‘™Àÿ∂‘œÛ
        if($$.isString(context)){
            context = document.getElementById(context);
        }else{
            context = document;
        }
//        »Áπ˚ºÊ»›getElementsByClassName
        if(context.getElementsByClassName){
            return context.getElementsByClassName(className);
        }else{
            //»Áπ˚‰Ø¿¿∆˜≤ª÷ß≥÷
            dom = context.getElementsByTagName('*');

            for(i;len=dom.length,i<len;i++)
            {
                if(dom[i].className)
                {
                    arr.push(dom[i]);
                }
            }
        }
        return arr;
    },
    //∑÷◊È—°‘Ò∆˜
    $group:function(content) {
        var result=[],doms=[];
        var arr = $$.trim(content).split(',');
        //alert(arr.length);
        for(var i=0,len=arr.length;i<len;i++) {
            var item = $$.trim(arr[i])
            var first= item.charAt(0)
            var index = item.indexOf(first)
            if(first === '.') {
                doms=$$.$class(item.slice(index+1))
                //√ø¥Œ—≠ª∑Ω´doms±£¥Ê‘⁄reult÷–
                //result.push(doms);//¥ÌŒÛ¿¥‘¥

                //œ›⁄Â1Ω‚æˆ ∑‚◊∞÷ÿ∏¥µƒ¥˙¬Î≥…∫Ø ˝
                pushArray(doms,result)

            }else if(first ==='#'){
                doms=[$$.$id(item.slice(index+1))]//œ›⁄Â£∫÷Æ«∞Œ“√«∂®“Âµƒdoms « ˝◊È£¨µ´ «$idªÒ»°µƒ≤ª « ˝◊È£¨∂¯ «µ•∏ˆ‘™Àÿ
                //∑‚◊∞÷ÿ∏¥µƒ¥˙¬Î≥…∫Ø ˝
                pushArray(doms,result)
            }else{
                doms = $$.$tag(item)
                pushArray(doms,result)
            }
        }
        return result;

        //∑‚◊∞÷ÿ∏¥µƒ¥˙¬Î
        function pushArray(doms,result){
            for(var j= 0, domlen = doms.length; j < domlen; j++){
                result.push(doms[j])
            }
        }
    },
    //≤„¥Œ—°‘Ò∆˜
    $cengci:function (select){
        //∏ˆ∏ˆª˜∆∆∑®‘Ú -- —∞’“ª˜∆∆µ„
        var sel = $$.trim(select).split(' ');
        var result=[];
        var context=[];
        for(var i = 0, len = sel.length; i < len; i++){
            result=[];
            var item = $$.trim(sel[i]);
            var first = sel[i].charAt(0)
            var index = item.indexOf(first)
            if(first ==='#'){
                //»Áπ˚ «#£¨’“µΩ∏√‘™Àÿ£¨
                pushArray([$$.$id(item.slice(index + 1))]);
                context = result;
            }else if(first ==='.'){
                //»Áπ˚ «.
                //»Áπ˚ «.
                //’“µΩcontext÷–À˘”–µƒclassŒ™°æs-1°øµƒ‘™Àÿ --context «∏ˆºØ∫œ
                if(context.length){
                    for(var j = 0, contextLen = context.length; j < contextLen; j++){
                        pushArray($$.$class(item.slice(index + 1), context[j]));
                    }
                }else{
                    pushArray($$.$class(item.slice(index + 1)));
                }
                context = result;
            }else{
                //»Áπ˚ «±Í«©
                //±È¿˙∏∏«◊£¨’“µΩ∏∏«◊÷–µƒ‘™Àÿ==∏∏«◊∂º¥Ê‘⁄context÷–
                if(context.length){
                    for(var j = 0, contextLen = context.length; j < contextLen; j++){
                        pushArray($$.$tag(item, context[j]));
                    }
                }else{
                    pushArray($$.$tag(item));
                }
                context = result;
            }
        }

        return context;

        //∑‚◊∞÷ÿ∏¥µƒ¥˙¬Î
        function pushArray(doms){
            for(var j= 0, domlen = doms.length; j < domlen; j++){
                result.push(doms[j])
            }
        }
    },
    //∂‡◊È+≤„¥Œ
    $select:function(str) {
        var result = [];
        var item = $$.trim(str).split(',');
        for(var i = 0, glen = item.length; i < glen; i++){
            var select = $$.trim(item[i]);
            var context = [];
            context = $$.$cengci(select);
            pushArray(context);

        };
        return result;

        //∑‚◊∞÷ÿ∏¥µƒ¥˙¬Î
        function pushArray(doms){
            for(var j= 0, domlen = doms.length; j < domlen; j++){
                result.push(doms[j])
            }
        }
    },
    //html5 µœ÷µƒ—°‘Ò∆˜
    $all:function(selector,context){
        context = context || document;
        return  context.querySelectorAll(selector);
    },
})


// $$$.exend($$$, {
//     $id: function (id) {
//         return document.getElementById(id);
//
//     },
//
//     $tag: function (tag, content) {
//         if (this.isString(content)) {
//             content = document.getElementById(content);
//         } else {
//             content = document;
//         }
//
//         return content.getElementsByTagName(tag);
//     },
//
//     $class: function (cn, context) {
//         var i = 0, len, dom = [], arr = [];
//         if (this.isString(context)) {
//             context = this.$id(context);
//         } else {
//             context = document;
//         }
//
//         if (context.getElementsByClassName) {
//             return context.getElementsByClassName(cn);
//         } else {
//
//
//             dom = context.getElementsByTagName("*");
//             for (i; i < dom.length; i++) {
//                 if (dom[i].className === cn) {
//                     arr.push(dom[i]);
//                 }
//             }
//             return arr;
//         }
//
//     },
//
//
//     $group: function (content) {
//         var reuslt = [], doms = [];
//         var arr = this.trim(content).split(",");
//         for (var i = 0; i < arr.length; i++) {
//             var item = this.trim(arr[i]);
//             var first = item.charAt(0);
//             if (first === "#") {
//                 pushArray([this.$id(item.slice(1))]);
//             } else if (first === ".") {
//                 pushArray(this.$class(item.slice(1)));
//             } else {
//                 pushArray(this.$tag(item.slice(0)));
//             }
//         }
//
//         function pushArray(name) {
//             for(var j = 0 ; j < name.length;j++){
//                 reuslt.push(name[j]);
//             }
//         }
//
//
//         return reuslt;
//     }
//
//
// })
// ;
/**
 * Created by wanghao on 17/4/30.
 */
(function (window,document) {



   function $jsonp(url,data,callbackFunc){
    //    http://api.douban.com/v2/movie/in_theaters?count=2&start=5&callback=func
       for(var key in data ){
          var queryString = url.indexOf("?") == -1 ?"?":"&";
           url += queryString + key + "="+ data[key];
       }
       var callbackName = "cb_"+ Math.random().toString().replace(".","");
       url += (url.indexOf("?") == -1 ?"?":"&")+"callback="+callbackName;


       var scriptEle = document.createElement("script");

       // window[callbackName] = function (data) {
       //     callbackFunc(data);
       // }

       window[callbackName] = callbackFunc;
       scriptEle.src = url;
       document.body.appendChild(scriptEle);




    }
    window.$jsonp = $jsonp;
})(window,document);


/**
 * Created by wanghao on 17/4/30.
 */
(function (window,angular) {
	var app2 = angular.module('moviecat.services',[]);
	app2.service('MainService',['$window','$document',function ($window,$document) {


	 this.$jsonp =function(url,data,callbackFunc){
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


			scriptEle.src = url;
			$document[0].body.appendChild(scriptEle);
		 $window[callbackName] = function (data) {
			 callbackFunc(data);
			 $document[0].body.removeChild(scriptEle);
		 };



		}

	}]);

	})(window,angular);

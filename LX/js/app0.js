/**
 * Created by wanghao on 17/4/28.
 */
(function (angular,window) {
    'use strict';

    console.log("app0js");
    // var o = [1,2,3,4,5];
    // for(var i = 0; i < o.length ; i++){
    //
    // 	if(i==2){
    // 		o.splice(i,1);
    // 	}
    // 	console.log(i);
    // 	// console.log(o[i]);
    // }
    // Your starting point. Enjoy the ride!

    var app = angular.module("app", ['ngRoute','app.controllers.main']);

    app.config(['$routeProvider',function ($routeProvider){
        console.log("打印了");
        $routeProvider.when('/:status?',{
            controller:'myvc',
            templateUrl:'ttttp'

        });
        // .otherwise(
        // 	{
        // 		redirectTo:'/'
        // 	}
        // )
    }]);



})(angular,window);

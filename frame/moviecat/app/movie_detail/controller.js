/**
 * Created by wanghao on 17/5/3.
 */
'use strict';

// angular.module('myApp.view1', ['ngRoute'])
//
// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl'
//   });
// }])
//
// .controller('View1Ctrl', [function() {
//
// }]);


(function (angular) {
	console.log("thear");
	var app = angular.module('moviecat.movie_detail',['ngRoute','moviecat.services']);

	app.config(['$routeProvider',function ($routeProvider) {
		$routeProvider.when('/detail/:id',{
			templateUrl:'movie_detail/view.html',
			controller:'MovieDetailController'
		});
	}]);

	app.controller("MovieDetailController",['$scope','$route','$http','MainService','$routeParams','AppConfig',function ($scope,$route,$http,MainService,$routeParams,AppConfig) {

		$scope.needshow = true;
		MainService.$jsonp(AppConfig.detailApiAddress+$routeParams.id,
			{},
			function (data) {
				console.log("data==="+data);
				// divid.innerHTML = JSON.stringify(data);
				$scope.data = data;
				$scope.$apply();
			});


	}]);
})(angular);


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
	var app = angular.module('moviecat.in_theaters',['ngRoute','moviecat.services']);

	app.config(['$routeProvider',function ($routeProvider) {
		$routeProvider.when('/:catergory/:page',{
			templateUrl:'in_theaters/view.html',
			controller:'IntheatersController'
		});
	}]);

	app.controller("IntheatersController",['$scope','$route','$http','MainService','$routeParams','AppConfig',function ($scope,$route,$http,MainService,$routeParams,AppConfig) {
		// var addressUrl = "http://api.douban.com/v2/movie/in_theaters";

		// $http.get('./subject.json').then(function (data) {
		// 	console.log("哎哟不错哦");
		// 	if(data.status == 200) {
		// 		$scope.subjects = data.data.subjects;
		// 	}else{
		// 		$scope.message = "没有您想要的数据:"+ data.statusText;
		// 	}
		// },function (err) {
		// 	$scope.message = "没有您想要的数据:"+ err.statusText;
		// });


		// $http.jsonp('http://api.douban.com/v2/movie/in_theaters').then(function (data) {
		// 	console.log("哎哟不错哦");
		// 	if(data.status == 200) {
		// 		$scope.subjects = data.data.subjects;
		// 	}else{
		// 		$scope.message = "没有您想要的数据:"+ data.statusText;
		// 	}
		// },function (err) {
		// 	$scope.message = "没有您想要的数据:"+ err.statusText;
		// });
		$scope.totalCount = 0;
		$scope.title = "loading...";
		var  count = AppConfig.pageSize;
		$scope.page = parseInt($routeParams.page);
		var start = ($scope.page - 1)*count;

		$scope.needshow = true;
		MainService.$jsonp(AppConfig.listApiAddress+$routeParams.catergory,
			{start:start,count:count,q:$routeParams.q},
			function (data) {
				console.log("data==="+data);
				// divid.innerHTML = JSON.stringify(data);
				$scope.subjects = data.subjects;
				$scope.total = data.total;
				$scope.needshow = false;
				$scope.totalCount =Math.ceil(($scope.total)/count);
				$scope.title = data.title;
				$scope.$apply();
			});
		$scope.go = function (page) {
			console.log("有打印吗");
			if (page>=1&&page<=$scope.totalCount) {
				$route.updateParams({page: page});
			}
		}
	}]);
	console.log("哈哈哈哈");
})(angular);


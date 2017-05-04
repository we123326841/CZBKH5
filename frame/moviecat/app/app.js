'use strict';

// Declare app level module which depends on views, and components
console.log("执行了没有");
angular.module('moviecat', [
	'ngRoute',
	'moviecat.movie_detail',
	'moviecat.in_theaters',
	'moviecat.directives.auto_focus'
]).constant('AppConfig',
	{pageSize:10,listApiAddress:'http://api.douban.com/v2/movie/',detailApiAddress:'http://api.douban.com/v2/movie/subject/'}).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]).controller('SearchVC',['$scope','$route',function ($scope,$route) {
	$scope.searchC = '';
	$scope.search = function () {
		$route.updateParams({catergory:'search',q:$scope.searchC});
	};


}]);

// 	.controller('navVC', ['$scope', '$location', function ($scope, $location) {
//
// 	$scope.$location = $location;
// 	$scope.$watch('$location.path()', function (now, old) {
// 		console.log(now);
// 		if (now.startsWith('/in_theaters')) {
// 			$scope.type = 'in_theaters';
// 		} else if (now.startsWith('/coming_soon')) {
// 			$scope.type = "coming_soon";
// 		} else if (now.startsWith('/top250')) {
// 			$scope.type = "top250";
// 		}
// 	});
//
// }]);

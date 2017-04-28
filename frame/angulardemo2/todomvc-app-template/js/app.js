(function (angular,window) {
	'use strict';


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
	var myapp = angular.module("myapp",[]);
	myapp.controller("myvc",['$scope','$location', function ($scope,$location) {
		// console.log("谁谁谁");

        //
		// function getId() {
		// 	var id = Math.random();
		// 	for(var i = 0; i < $)
		// }

		function getId() {
			var id = Math.random();
			for(var i = 0 ; i < $scope.lists.length; i++){
				if ($scope.lists[i].id === id){
					getId();
				}
			}
			return id;

		}


		$scope.text = "";
		$scope.lists = [{id:1, text:"什么鬼",completed:true},{id:2,text:"洗刷刷",completed:true},{id:3,text:"吃饭饭",completed:false}];

		$scope.add = function () {
			if($scope.text === "")return;
			var ido = getId();
			$scope.lists.push({id:ido,text:$scope.text,completed:false});

			$scope.text= "";
		};

		$scope.remove = function (id) {
			console.log(id);
			for(var i = 0 ; i < $scope.lists.length; i++){
				if ($scope.lists[i].id === id){
					$scope.lists.splice(i,1);
				}
			}
		};


		$scope.clear = function () {
			var result = [];
			for(var i = 0 ; i < $scope.lists.length; i++){
				if (!$scope.lists[i].completed){
					result.push($scope.lists[i]);
				}
			}

			$scope.lists = result;
		};


		$scope.show = function () {
			for(var i = 0 ; i < $scope.lists.length; i++){
				if ($scope.lists[i].completed){
					return true
				}
			}

			return false;
		}

		$scope.currentid = -1;

		$scope.edit = function (id) {
			$scope.currentid = id;
		}

		$scope.save = function () {
			$scope.currentid = -1;
		}

		var now = true;
		$scope.checkall = function () {
			for(var i = 0 ; i < $scope.lists.length; i++){
				$scope.lists[i].completed = now;


			}
			now = !now;

		};






		$scope.$location = $location;
		window.loca = $location;



		$scope.$watch("$location.hash()",function (now,old) {

			switch (now){
				case "/":
					$scope.search = { };
					break;
				case "/active":
					$scope.search = {completed:false};
					break;
				case "/completed":
					$scope.search = {completed:true};
					break;
			}
		});



		$scope.equalCompare = function (source,target) {
			console.log("source="+source);
			console.log("target="+target);
			return source === target;
		}





	}]);


})(angular,window);

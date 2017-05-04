/**
 * Created by wanghao on 17/4/28.
 */
(function (angular,window) {
    console.log("controller");
    var app1 = angular.module("app.controllers.main",['app.services.main']);




    //
    app1.controller("myvc",['$scope','$routeParams','$route','MainService', function ($scope,$routeParams,$route,MainService) {
        console.log("谁谁谁");

        //
        // function getId() {
        // 	var id = Math.random();
        // 	for(var i = 0; i < $)
        // }

        $scope.lists = MainService.getlists();

        $scope.text = "";





        // $scope.add= function () {
        //     MainService.add();
        //     $scope.text = MainService.text;
        // };

        function getId() {
            var id = Math.random();
            for(var i = 0 ; i < $scope.lists.length; i++){
                if ($scope.lists[i].id === id){
                    id = getId();
                    break;
                }
            }
            return id;

        }

        $scope.checkBox = function () {
            MainService.save();
        }


        $scope.add = function () {
            if($scope.text === "")return;
            var ido = getId();
            $scope.lists.push({id:ido,text:this.text,completed:false});

            $scope.text= "";
            MainService.save();
        };

        $scope.remove = function (id) {
            MainService.remove(id);
            MainService.save();
        };


        $scope.clear = function () {
          $scope.lists =  MainService.clear();
            MainService.save();
        };

        $scope.contentShow = function () {
           return $scope.lists.length !== 0;
        }



        $scope.show = function () {

            return MainService.show();
        };

        $scope.currentid = -1;

        $scope.edit = function (id) {
            $scope.currentid = id;
        };

        $scope.save = function () {
            $scope.currentid = -1;
        };






        //方法1


        // $scope.$location = $location;
        // window.loca = $location;



        // $scope.$watch("$location.path()",function (now,old) {
        //
        // 	switch (now){
        // 		case "/":
        // 			$scope.search = { };
        // 			break;
        // 		case "/active":
        // 			$scope.search = {completed:false};
        // 			break;
        // 		case "/completed":
        // 			$scope.search = {completed:true};
        // 			break;
        // 	}
        // });
        //
        //
        //
        $scope.equalCompare = function (source,target) {
            console.log("source="+source);
            console.log("target="+target);
            return source === target;
        }


        $scope.checkall = function () {
            MainService.checkall();
        }

        //方法2

        switch ($routeParams.status){


            case "active":
                $scope.search = {completed:false};
                break;
            case "completed":
                $scope.search = {completed:true};
                break;

            default:
                $route.updateParams({status:''});
                $scope.search = {};
                break;
        };



        console.log($routeParams.status);






    }]);


})(angular,window);
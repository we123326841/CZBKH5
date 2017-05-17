// 商品列表页面功能
angular.module('goodsList.controller', ['goodsList.service'])
  .controller('GoodsListCtrl', function ($scope, $window, GoodsListFty, $stateParams, $ionicLoading) {
    // console.log($stateParams);
    // // 列表数据
    $scope.obj_goodsListData=[];
    $scope.pms_isMoreItemsAvailable = false;
    // $scope.pms_isMoreItemsAvailable=true;
    // // 分页查询对象
    $scope.obj_pagingInfo = {
      amountMax: "",
      amountMin: "",
      billNum: "",
      createUser: "",
      dateFrom: "",
      dateTo: "",
      deptID: "",
      deptName: "",
      keyWord: "",
      loginName: "",
      billType: "",
      pageNum: 1,
      pageSize: 10,
      sortFlag: "0",
      sortType: "desc",
      typeNumber:""
    };
    //
    //
    // 事件监听
    $scope.$on('$ionicView.beforeEnter', function (e) {
      $scope.func_refreshGoodsList();
    });
    //
    // // 获取最新数据方法
    // $scope.func_refreshGoodsList=function(){
    //   $scope.pms_isMoreItemsAvailable=true;
    //   $scope.obj_pagingInfo.pageNum=1;
    //   $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
    //   var message=JSON.stringify($scope.obj_pagingInfo);
    //   // 通过方法获取promise对象
    //   var promise=GoodsListFty.refreshGoodsList(message);
    //   // 通过then方法触发状态监听
    //   promise.then(
    //     function(data){
    //       if(data==null){
    //         $scope.pms_isMoreItemsAvailable=false;
    //       }else {
    //         $scope.obj_goodsListData=data;
    //       }
    //     },
    //     function(reason){
    //     }
    //   ).finally(function(){
    //     // 停止广播ion-refresher
    //     $scope.$broadcast('scroll.refreshComplete');
    //   });
    // }
    //
    // // 加载更多数据方法
    // $scope.func_loadMoreGoodsList=function(){
    //   $ionicLoading.show({
    //     template: "正在载入数据，请稍后..."
    //   });
    //
    //
    //   $scope.obj_pagingInfo.pageNum=$scope.obj_pagingInfo.pageNum+1;
    //   $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
    //   var message=JSON.stringify($scope.obj_pagingInfo);
    //   console.log(message);
    //   // 通过方法获取promise对象
    //   var promise=GoodsListFty.refreshGoodsList();
    //   // 通过then方法触发状态监听
    //   promise.then(
    //     function(data){
    //       if($scope.obj_pagingInfo.pageNum==4){
    //         $scope.pms_isMoreItemsAvailable=false;
    //       }
    //       if(data==null){
    //         $scope.pms_isMoreItemsAvailable=false;
    //       }else {
    //         $.each(data,function(i,item){
    //           $scope.obj_goodsListData.push(item);
    //         })
    //       }
    //     },
    //     function(reason){
    //     }
    //   ).finally(function(){
    //     $scope.$broadcast('scroll.infiniteScrollComplete');
    //     setTimeout(function(){
    //       $ionicLoading.hide();
    //     },1000)
    //
    //   });
    // }


    // console.log("1");
    // // 通过方法获取promise对象
    // var promise=GoodsListFty.testPromise();
    // // 通过then方法触发状态监听
    // promise.then(
    //  function(data){
    //    console.log("2");
    //    return data;
    //  },
    //  function(reason){
    //
    //  }
    // ).then(function(data){
    //  console.log("8");
    //  console.log(data);
    // }).finally(
    //  function(){
    //    console.log("9");
    //  });
    //
    // console.log("4");

    // var promise= GoodsListFty.refreshGoodsList();
    // promise.then(function (data) {
    //   console.log("有哦");
    //   console.log(data);
    // },function (resone) {
    //   console.log("呵呵")
    //   console.log(resone);
    // });
    // console.log("11111");


    $scope.func_refreshGoodsList = function () {
      var promise = GoodsListFty.refreshGoodsList();
      promise.then(function (data) {
        console.log("1111111");
        console.log(data);
        if(data) {
          $scope.obj_goodsListData = data;
        }else{
          $scope.pms_isMoreItemsAvailable = false;
        }
      }, function () {
      }).finally(function () {
        console.log("21212121");
        // 停止广播ion-refresher
            $scope.$broadcast('scroll.refreshComplete');
        $scope.pms_isMoreItemsAvailable = true;

      });
    }


    $scope.func_loadMoreGoodsList = function () {
      console.log("哦哦哦哦哦哦");
        $ionicLoading.show({
          template : 'Loading...'
        });
      $scope.pms_isMoreItemsAvailable = true;
      $scope.obj_pagingInfo.pageNum =  $scope.obj_pagingInfo.pageNum + 1;
      console.log( $scope.obj_pagingInfo.pageNum);
      var promise = GoodsListFty.loadMoreGoodsList();
      promise.then(function (data) {
        $.each(data,function (index,item) {
          $scope.obj_goodsListData.push(item);
        })
      },function () {

      }).finally(function () {
        $scope.$broadcast('scroll.infiniteScrollComplete');
        setTimeout(function () {
          $ionicLoading.hide();
        },2000);
      });
    }

  })





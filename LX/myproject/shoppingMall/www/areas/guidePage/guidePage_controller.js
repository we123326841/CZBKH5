angular.module('guidePage.controller',[]).controller('GuidePageCtrl',function ($scope,GlobalVariable,$state) {
  console.log(GlobalVariable.SERVER_PATH);
  var guideSlide = new Swiper('#guideSlide', {
    pagination: '.swiper-pagination',
    onSlideChangeEnd: function(swiper){
      var index = guideSlide.activeIndex+1;
      if(index==2||index==3){
        var item = $("#tips-"+index);
        if(item.hasClass("hidden")){
          item.removeClass("hidden");
          item.addClass("guide-show");
        }
      }
    }
  });


  $scope.func_goHome = function () {
    $state.go("tab.home");
  }



});

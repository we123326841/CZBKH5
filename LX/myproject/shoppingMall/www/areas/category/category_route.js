angular.module('category.route', ['APT.category.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab.category', {
        url: '/category',
        views: {
          'tab-category': {
            templateUrl: 'areas/category/category2.html',
            controller: 'CategoryCtrl'
          }
        }
      });
  });

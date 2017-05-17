angular.module('details.route', ['APT.details.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('details', {
        url: '/details/:productId',
        templateUrl: 'areas/details/details.html',
        controller: 'DetailsCtrl'
      })
  });

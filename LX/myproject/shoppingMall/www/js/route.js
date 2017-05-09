 /**
 * Created by wanghao on 17/5/8.
 */
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
 angular.module('route', ['tabs.route','guidePage.route','home.route','category.route'])
   .config(function($stateProvider, $urlRouterProvider) {

     // Ionic uses AngularUI Router which uses the concept of states
     // Learn more here: https://github.com/angular-ui/ui-router
     // Set up the various states which the app can be in.
     // Each state's controller can be found in controllers.js
     $stateProvider

     // setup an abstract state for the tabs directive


       // Each tab has its own nav history stack:

       // .state('tab.dash', {
       //   url: '/dash',
       //   views: {
       //     'tab-dash': {
       //       templateUrl: 'templates/tab-dash.html',
       //       controller: 'DashCtrl'
       //     }
       //   }
       // })
       //
       // .state('tab.chats', {
       //   url: '/chats',
       //   views: {
       //     'tab-chats': {
       //       templateUrl: 'templates/tab-chats.html',
       //       controller: 'ChatsCtrl'
       //     }
       //   }
       // })
       // .state('tab.chat-detail', {
       //   url: '/chats/:chatId',
       //   views: {
       //     'tab-chats': {
       //       templateUrl: 'templates/chat-detail.html',
       //       controller: 'ChatDetailCtrl'
       //     }
       //   }
       // })
       //
       // .state('tab.account', {
       //   url: '/account',
       //   views: {
       //     'tab-account': {
       //       templateUrl: 'templates/tab-account.html',
       //       controller: 'AccountCtrl'
       //     }
       //   }
       // });

     // if none of the above states are matched, use this as the fallback
     $urlRouterProvider.otherwise('/tab/home');

   });

angular.module('starter', ['ionic', 'MyApp'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//menu
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'template/menu.html'
  })  
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'template/home.html',
        controller: 'cHome'
      }
    }
  })
  $urlRouterProvider.otherwise('app/home');
})
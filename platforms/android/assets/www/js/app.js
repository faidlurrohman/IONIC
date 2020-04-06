angular.module('starter', ['ionic','MyApp','firebase','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function(){
  var config = {
    apiKey: "AIzaSyBnAnxW98flyXbuSsGDrdRk4z7CIEBWtGE",
    authDomain: "haru-biru.firebaseapp.com",
    databaseURL: "https://haru-biru.firebaseio.com",
    storageBucket: "haru-biru.appspot.com",
    messagingSenderId: "746337544674"
  };
  firebase.initializeApp(config);
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'Ctrl_Login'
  })
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'Ctrl_Login'
  })
  .state('app.map', {
    url: "/map",
    views: {
      'tab-map': {
        templateUrl: "templates/map.html",
        controller: 'Ctrl_Map'
      }
    }
  })
  .state('app.data', {
    url: "/data",
    views: {
      'tab-data': {
        templateUrl: "templates/data.html",
        controller: 'Ctrl_Data'
      }
    }
  })
  .state('app.about', {
    url: "/about",
    views: {
      'tab-about': {
        templateUrl: "templates/about.html"
      }
    }
  })
  .state('app.profile', {
    url: "/profile",
    views: {
      'tab-profile': {
        templateUrl: "templates/profile.html",
        controller: 'Ctrl_Profile'
      }
    }
  });
  $urlRouterProvider.otherwise('app/map');
});

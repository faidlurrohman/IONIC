angular.module('starter', ['ionic', 'MyApp','firebase', 'ngCordova'])

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

.config(function(){
  var config = {
    apiKey: "AIzaSyCw_G0NAxJtSBntEVhgXGW79S_Z8_DjmlU",
    authDomain: "skripsi-1501771359107.firebaseapp.com",
    databaseURL: "https://skripsi-1501771359107.firebaseio.com",
    projectId: "skripsi-1501771359107",
    storageBucket: "skripsi-1501771359107.appspot.com",
    messagingSenderId: "14037451501"
  };
  firebase.initializeApp(config);
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  //home
  .state('home', {
    cache: false,
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'Ctrl_Home'
  })
  //sidelist supir
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu_supir.html',
    controller: 'Ctrl_Profil'
  })
  .state('app.supir', {
    url: '/supir',
    views: {
      'menuContent': {
        templateUrl: 'templates/supir.html'
      }
    }
  })
  .state('app.profil_supir', {
    url: '/profil_supir',
    views: {
      'menuContent': {
        templateUrl: 'templates/profil_supir.html',
        controller: 'Ctrl_Profil'
      }
    }
  })
  .state('app.pesanan', {
    url: '/pesanan',
    views: {
      'menuContent': {
        templateUrl: 'templates/pesanan.html',
        controller: 'Ctrl_Profil'
      }
    }
  })
  ///////////////////////////////////////////////////////////////////////
  $urlRouterProvider.otherwise('home');
})

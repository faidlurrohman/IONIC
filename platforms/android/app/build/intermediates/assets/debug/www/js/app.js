angular.module('starter', ['ionic', 'starter.controllers','firebase','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function(){
  var config = {
    apiKey: "AIzaSyAfRGFWaOx8-8Ie9hW59tbFzwViT3kVYkI",
    authDomain: "laka-4d6d4.firebaseapp.com",
    databaseURL: "https://laka-4d6d4.firebaseio.com",
    projectId: "laka-4d6d4",
    storageBucket: "laka-4d6d4.appspot.com",
    messagingSenderId: "518063814671"
  };
  firebase.initializeApp(config);
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'DashCtrl'
  })

  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl'
      }
    }
  })

  .state('app.form-modal', {
    url: '/form-modal',
    views: {
      'menuContent': {
        templateUrl: 'templates/form-modal.html',
        controller: 'MapCtrl'
      }
    }
  })
  
  .state('app.daftar-kecelakaan', {
    url: '/daftar-kecelakaan',
    views: {
      'menuContent': {
        templateUrl: 'templates/daftar-kecelakaan.html',
        controller: 'DashCtrl'
      }
    }
  })
  
  .state('app.detail-kecelakaan', {
    url: '/detail-kecelakaan',
    views: {
      'menuContent': {
        templateUrl: 'templates/detail-kecelakaan.html',
        controller: 'DashCtrl'
      }
    }
  })
  
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
  
  .state('app.daftar', {
    url: '/daftar',
    views: {
      'menuContent': {
        templateUrl: 'templates/daftar.html',
        controller: 'DaftarCtrl'
      }
    }
  })
  
  .state('app.profil', {
    url: '/profil',
    views: {
      'menuContent': {
        templateUrl: 'templates/profil.html',
        controller: 'ProfilCtrl'
      }
    }
  })
  $urlRouterProvider.otherwise('/app/daftar-kecelakaan');
});

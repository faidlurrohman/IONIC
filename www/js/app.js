angular.module('starter', ['ionic', 'firebase', 'MyApp'])

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
//firebase
.config(function(){
  var config = {
    apiKey: "AIzaSyCLF8Qev0TegWjyHW2mMo7jXfk9xvzmrPA",
    authDomain: "kuisoner-f1b38.firebaseapp.com",
    databaseURL: "https://kuisoner-f1b38.firebaseio.com",
    projectId: "kuisoner-f1b38",
    storageBucket: "kuisoner-f1b38.appspot.com",
    messagingSenderId: "488530775572"
  };
  firebase.initializeApp(config);
})
//menu
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  //login
  .state('login', {
    cache: false,
    url: '/login',
    templateUrl: 'template/login.html',
    controller: 'cHome'
  })
  //daftar
  .state('daftar', {
    cache: false,
    url: '/daftar',
    templateUrl: 'template/daftar.html',
    controller: 'cHome'
  })
  //kuis
  .state('kuesioner', {
    url: '/kuesioner/:dptNama:dptUmur',
    templateUrl: 'template/kuesioner.html',
    controller: 'cKuis'
  })
  //in aplikasi
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'template/menu.html',
    controller: 'cMenu'
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
  .state('app.profil', {
    url: '/profil',
    views: {
      'menuContent': {
        templateUrl: 'template/profil.html',
        controller: 'cProfil'
      }
    }
  })
  .state('app.info', {
    url: '/info',
    views: {
      'menuContent': {
        templateUrl: 'template/info.html'
      }
    }
  })
  .state('app.data', {
    url: '/data',
    views: {
      'menuContent': {
        templateUrl: 'template/data.html'
      }
    }
  })
  $urlRouterProvider.otherwise('login');
})

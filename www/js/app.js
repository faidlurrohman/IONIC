angular.module('starter', ['ionic', 'MyApp', 'ngCordova','firebase'])

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
	    templateUrl: 'templates/pangkalan/home.html',
	    controller: 'Ctrl_Home'
	})
	//tab
	.state('pangkalan', {
	    url: '/pangkalan',
	    abstract: true,
	    templateUrl: 'templates/pangkalan/pangkalan.html'
	})
	.state('pangkalan.profil', {
	    url: '/profil',
	    views: {
	      	'pangkalan-profil': {
	        	templateUrl: 'templates/pangkalan/profil.html',
	    		controller: 'Ctrl_Pangkalan'
	      	}
	    }
	})
	.state('pangkalan.supir', {
	    url: '/supir',
	    views: {
	        'pangkalan-supir': {
	          	templateUrl: 'templates/pangkalan/supir.html',
	          	controller: 'Ctrl_Pangkalan'
	        }
	    }
	})

	$urlRouterProvider.otherwise('home');
});

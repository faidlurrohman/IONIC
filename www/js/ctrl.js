angular.module('MyApp', [])

.controller('cHome', function($scope, $http, $state, $window, $ionicPopup, $firebaseAuth, $ionicHistory, $ionicLoading){
  //cek user login;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $ionicHistory.clearCache().then(function(){
        $state.go('app.home');
      });
    }
    else{
      $state.go('login');
    }
  });
  //button back
  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
  //daftar
  $scope.dftNormal = function(dft){
    $scope.dft = {
      'nama': '',
      'email': '',
      'sandi': ''
    };
    var auth = firebase.auth();
    auth.createUserWithEmailAndPassword(dft.email, dft.sandi).then(function(result){
      var user = firebase.auth().currentUser;
      if(user){
        firebase.database().ref('pengguna/' + user.uid).set({
          email: dft.email,
          nama: dft.nama,
          sandi: dft.sandi,
          img: 'img/user.png'
        });
      }
      $state.go('login');
    }).catch(function(error){
      var alertPopup = $ionicPopup.alert({
        title: 'Opps!',
        template: error
      });
    });
  };
  //login
  $scope.mskNormal = function(msk){
    $scope.msk = {
      'email': '',
      'sandi': ''
    };
    var auth = firebase.auth();
    auth.signInWithEmailAndPassword(msk.email, msk.sandi).then(function(result){
      $state.go('app.home');
    }).catch(function(error){
        var alertPopup = $ionicPopup.alert({
          title: 'Opps!',
          template: error
        });
    });
  };
  //logout
  $scope.logout = function(){
    firebase.auth().signOut().then(function() {
      $ionicHistory.clearCache().then(function(){
        $state.go('login');
        location.reload();
      });
    }, function(error) {
        console.log(error);
    });
  }
  //profil
  $scope.prf = function(){
    $state.go('app.profil');
  }
  // info
  $scope.info = function(){
    $state.go('app.info');
  }
  //kuisoner
  $scope.dftAnak = {};
  $scope.kuisoner = function(){
    var myPopup  = $ionicPopup.show({
      title: '<b>Keterangan Anak</b>',
      noBackdrop: true,
      template: '<div class="list"><label class="item item-input"><span class="input-label">Nama Anak :</span><input type="text" ng-model="dftAnak.nama"></label><label class="item item-input item-select"><div class="input-label">Umur Anak :</div><select ng-model="dftAnak.umur"><option selected value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></label></div>',
      scope: $scope,
      buttons: [
        {
          text: 'Batal',
          type: 'button-assertive',
        },
        {
          text: '<b>Mulai</b>',
          type: 'button-calm',
          onTap: function(e) {
            if($scope.dftAnak.nama == null && $scope.dftAnak.umur == null){
              console.log('nama dan umur dulu');
            }
            else if($scope.dftAnak.nama == null){
              console.log('nama dulu');
            }
            else if($scope.dftAnak.umur == null){
              console.log('umur dulu');
            }
            else{
              $state.go('kuesioner', {dptNama: $scope.dftAnak.nama, dptUmur: $scope.dftAnak.umur});
            }
          }
        }
      ]
    })
  }
})

.controller('cMenu', function($scope, $http, $state, $window, $firebaseAuth){
  $scope.home = function(){
    $state.go('app.home');
  }
  $scope.profil = function(){
    $state.go('app.profil');
  }
	$scope.data = function(){
		$state.go('app.data');
	}
  //logout
  $scope.logout = function(){
    firebase.auth().signOut().then(function() {
      $state.go('login');
    }, function(error) {
        console.log(error);
    });
  }
})

.controller('cProfil', function($scope, $http, $state, $window, $firebaseAuth, $ionicLoading){
  $ionicLoading.show({
    template: '<ion-spinner class="spinner-calm" icon="crescent">Loading...</ion-spinner>',
    // content: 'Loading',
    //    animation: 'fade-in',
    //    showBackdrop: false,
    //    maxWidth: 300,
    //    showDelay: 0
    // templateUrl: 'template/loading.html'
  });
  //ambil data
  var user = firebase.auth().currentUser;
  firebase.database().ref('pengguna/' + user.uid).on('value', function(snapshot) {
    $scope.lgnNama = snapshot.val().nama;
    $scope.lgnEmail = snapshot.val().email;
    $scope.lgnImg = snapshot.val().img;
    $ionicLoading.hide();
  });
  //upload foto
  var fileButton = document.getElementById('fileButton');
  fileButton.addEventListener('change', function(e){
    $ionicLoading.show({
      template: '<ion-spinner class="spinner-calm" icon="crescent">Loading...</ion-spinner>'
    });
    //get file
    var file = e.target.files[0];

    //create a storage
    var storageRef = firebase.storage().ref('pengguna/' + file.name);

    //upload task
    var task = storageRef.put(file);

    //progress
    task.on('state_changed', function (snapshot){}, function error(err){}, function complete(){
        console.log("sukses");
        firebase.database().ref('pengguna/').child(user.uid).update({
          img: task.snapshot.downloadURL
        });
        $ionicLoading.hide();
      }
    )
  })
  // console.log($scope.lgnNama);
  // console.log($scope.lgnEmail);
})


.controller('cKuis', function($scope, $http, $state, $window, $firebaseAuth, $ionicLoading, $ionicHistory){
  //button back
  $scope.goBack = function(){
    $state.go('app.home');
  }
  //hapus histori
  // $ionicHistory.nextViewOptions({
  //     disableBack: true,
  //     historyRoot: true
  // });
  $ionicLoading.show({
      template: '<ion-spinner class="spinner-calm" icon="crescent">Loading...</ion-spinner>'
  });
  $scope.nmrUrut = 1;
  var nmr = 1;
  var nmrNew = 2;
  $scope.jwb = {
    j1:'',
    j2:'',
    j3:''
  };
  var kat = 'kecerdasan';
  $scope.btnVal = 'Lanjut';
  var ttlkec = 0;
  var ttlmot = 0;
  var ttl = 0;
  firebase.database().ref('kuisoner/' + $state.params.dptUmur + '/' + kat + '/' + nmr).on('value', function(snapshot) {
    $scope.soalKuis = snapshot.val();
    $ionicLoading.hide();
  });
  $scope.prosesKuis = function(){
    // var elem = document.getElementsByClassName('hamba');
    // for(var i=0; i<elem.length; i++) {
    //   elem[i].checked = false;
    // }
    $ionicLoading.show({
      template: '<ion-spinner class="spinner-calm" icon="crescent">Loading...</ion-spinner>'
    });
    firebase.database().ref('kuisoner/' + $state.params.dptUmur + '/' + kat + '/' + nmrNew).on('value', function(snapshot) {
      // console.log($state.params.dptUmur);
      // console.log(kat);
      // console.log($scope.nmrKuis);
      // console.log(snapshot.val());
      $scope.soalKuis = snapshot.val();
      $ionicLoading.hide();
    });
    nmrNew++;
    $scope.nmrUrut++;

    if(nmrNew == 6){
      nmrNew = 1;
      kat = 'motorik';
    }

    if(kat == 'kecerdasan'){
      ttlkec = ttlkec + parseInt($scope.jwb.j1);
    }

    if(kat == 'motorik'){
      ttlmot = ttlmot + parseInt($scope.jwb.j1);
    }

    if($scope.nmrUrut == 10){
      $scope.btnVal = 'Selesai';
    }

    if($scope.nmrUrut == 11){
      $state.go('app.home');
      ttl = ttlkec + ttlmot;
      console.log(ttl);
    }
    // if($scope.nmrKuis == 7){
    //   $scope.nmrKuis = 1;
    //   kat = 'motorik';
    // }
    // console.log("nhaaaaaaa:"+ $state.params.dptNama);
    // console.log("nhaaaaaaa:"+ $state.params.dptUmur);
  }
})

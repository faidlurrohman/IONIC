angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicLoading, $ionicHistory, $state, $ionicModal, $timeout) {
  $scope.profilSidemenu = false;
  $scope.loginSidemenu = true;
  $scope.logoutSidemenu = false;
  $scope.mapSidemenu = false;
  $scope.loadingDataLaka = true;
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      // console.log(firebaseUser);
      $scope.loginSidemenu = false;
      $scope.logoutSidemenu = true;
      $scope.mapSidemenu = true;
      $scope.profilSidemenu = true;
      loadDataLaka();
    }
    else{
      // console.log('not login');
      $scope.loginSidemenu = true;
      $scope.logoutSidemenu = false;
      $scope.mapSidemenu = false;
      $scope.profilSidemenu = false;
      loadDataLaka();
    }
  })

  function loadDataLaka() {
    firebase.database().ref('infolaka').on('value', function(_snapshot){
      var getDataLaka = [];
      _snapshot.forEach(function(_childSnapshot){
        var elementDataLaka = _childSnapshot.val();
        // elementDataLaka.id = _childSnapshot.key;
        getDataLaka.push(elementDataLaka);
      })
      $timeout(function(){
        $scope.infoLaka = getDataLaka;
        $scope.loadingDataLaka = false;
      }, 2);
    })
  }
  //detail data kecelakaan
  $ionicModal.fromTemplateUrl('templates/detail-kecelakaan.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.detailLaka = modal;
  });
  $scope.detail_laka = function(id){
    $scope.detailLaka.show();
    $scope.imgShow = true;
    $scope.mapShow = false;
    $scope.showImage = function(){
      $scope.imgShow = true;
      $scope.mapShow = false;
    } 
    $scope.showMap = function(){
      $scope.mapShow = true;
      $scope.imgShow = false;
    } 
		firebase.database().ref('infolaka/' + id).on('value', function(snapshotLaka) {
      $scope.detail_judul = snapshotLaka.val().judul;
      $scope.detail_tgl = snapshotLaka.val().tgl;
      $scope.detail_deskripsi = snapshotLaka.val().deskripsi;
      $scope.detail_foto = snapshotLaka.val().foto;
      var parseLat = parseFloat(snapshotLaka.val().lat);
      var parseLong = parseFloat(snapshotLaka.val().long);
      var mapDiv = document.getElementById('detail_map');
      var detailLatLong = {lat: parseLat, lng: parseLong};
      var map = new google.maps.Map(mapDiv, {
        zoom: 16,
        disableDefaultUI: true,
        center: detailLatLong
      });
      var infoWindowLaka = new google.maps.InfoWindow({
        content: snapshotLaka.val().lokasi,
        maxWidth: 200
      });
      infoWindowLaka.setPosition(detailLatLong);
      infoWindowLaka.open(map);
	  });	
    $scope.cancelDetail = function() {
        $scope.detailLaka.hide();
    };
  }
  //logout
	$scope.logout = function(){
		firebase.auth().signOut().then(function() {
		  $state.go('app.daftar-kecelakaan');
      $ionicHistory.clearHistory();
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
		}, function(error) {
		  	console.log(error);
		});
	}
})

.controller('MapCtrl', function($scope, $state, $http, $ionicHistory, $cordovaGeolocation, $ionicModal) {
  //initial form modal
  $ionicModal.fromTemplateUrl('templates/form-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.formModal = modal;
  });
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
    //current lokasi
    var lat  = position.coords.latitude
    var long = position.coords.longitude
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: lat, lng: long},
      zoom: 13,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    //map klik
    map.addListener('click', function(e) {
      var tmp = map.setCenter(e.latLng);
      var klikMap = map.getCenter(tmp);
      var dptLat = klikMap.lat();
      var dptLong = klikMap.lng();
      var dptLatLong = dptLat+","+dptLong;
      var LatLongStr = dptLatLong.split(',', 2);
      var geoLatLong = {lat: parseFloat(LatLongStr[0]), lng: parseFloat(LatLongStr[1])};
      $scope.tmb = {};
      var geocoder = new google.maps.Geocoder;
      geocoder.geocode({'location': geoLatLong}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            //show modal form
            $scope.formModal.show().then(function(){
              document.getElementById('tmb_jdl').value = "";
              document.getElementById('tmb_ketKorban').value = "";
              document.getElementById('tmb_saksi').value = "";
              document.getElementById('tmb_des').value = "";
              document.getElementById('tmb_foto').value = "";
            });
            var dateNow = new Date();
            var tgl = dateNow.getDate();
            var bln = dateNow.getMonth();
            var thn = dateNow.getFullYear();
            var jam = dateNow.getHours();
            var menit = dateNow.getMinutes();
            var fullDate = tgl+"/"+bln+"/"+thn+", "+jam+":"+menit;
            document.getElementById('tmb_lat').value = dptLat;
            document.getElementById('tmb_long').value = dptLong;
            document.getElementById('tmb_lks').value = results[0].formatted_address;
            //ambil data pelapor di firebase
            var user = firebase.auth().currentUser;
            firebase.database().ref('user/' + user.uid).on('value', function(snapshot) {
                document.getElementById('tmb_pelapor').value = snapshot.val().nama;
            });	
            //hidden form modal
            $scope.cancelForm = function() {
                $scope.formModal.hide();
            };
            //tambah data kecelakaan
            $scope.tmbData = function () {
              // var fotoUpload = document.getElementById('tmb_foto').value;
              var fotoUpload = document.forms['formTambah']['myfile'].files[0];
              //tanpa foto
              if(fotoUpload == undefined){
                var dataFoto = 'img/img-default.png';
                var tmbJudul = document.getElementById('tmb_jdl').value;
                var tmbLat = document.getElementById('tmb_lat').value;
                var tmbLong = document.getElementById('tmb_long').value;
                var tmbLokasi = document.getElementById('tmb_lks').value;
                var tmbKorban = document.getElementById('tmb_ketKorban').value;
                var tmbPelapor = user.uid;
                var tmbSaksi = document.getElementById('tmb_saksi').value;
                var tmbDes = document.getElementById('tmb_des').value;

                //simpan database
                var messageListRef = firebase.database().ref('infolaka');
                var newMessageRef = messageListRef.push();
                var genKey = newMessageRef.key;
                var queryFirebase = newMessageRef.set({
                  'id': genKey,
                  'judul': tmbJudul,
                  'lat': tmbLat,
                  'long': tmbLong,
                  'lokasi': tmbLokasi,
                  'keterangan_korban': tmbKorban,
                  'id_user': tmbPelapor,
                  'keterangan_saksi': tmbSaksi,
                  'deskripsi': tmbDes,
                  'tgl': fullDate,
                  'foto': dataFoto,
                });

                if(queryFirebase){
                  $state.go('app.daftar-kecelakaan');
                  $ionicHistory.clearHistory();
                  $ionicHistory.clearCache();
                  $ionicHistory.nextViewOptions({
                    disableAnimate: true,
                    disableBack: true
                  });
                  $scope.formModal.hide();
                }
              }
              //dengan foto
              else{
                //simpan foto
                var storageRef = firebase.storage().ref('fotolaka/' + fotoUpload.name);
                //upload task
                var task = storageRef.put(fotoUpload);
                //progress
                task.on('state_changed', function (snapshot){}, function error(err){}, function complete(){
                  var tmbJudul = document.getElementById('tmb_jdl').value;
                  var tmbLat = document.getElementById('tmb_lat').value;
                  var tmbLong = document.getElementById('tmb_long').value;
                  var tmbLokasi = document.getElementById('tmb_lks').value;
                  var tmbKorban = document.getElementById('tmb_ketKorban').value;
                  var tmbPelapor = user.uid;
                  var tmbSaksi = document.getElementById('tmb_saksi').value;
                  var tmbDes = document.getElementById('tmb_des').value;

                  //simpan database
                  var messageListRef = firebase.database().ref('infolaka');
                  var newMessageRef = messageListRef.push();
                  var genKey = newMessageRef.key;
                  var queryFirebase = newMessageRef.set({
                    'id': genKey,
                    'judul': tmbJudul,
                    'lat': tmbLat,
                    'long': tmbLong,
                    'lokasi': tmbLokasi,
                    'keterangan_korban': tmbKorban,
                    'id_user': tmbPelapor,
                    'keterangan_saksi': tmbSaksi,
                    'deskripsi': tmbDes,
                    'tgl': fullDate,
                    'foto': task.snapshot.downloadURL,
                  });

                  if(queryFirebase){
                    $state.go('app.daftar-kecelakaan');
                    $ionicHistory.clearHistory();
                    $ionicHistory.clearCache();
                    $ionicHistory.nextViewOptions({
                      disableAnimate: true,
                      disableBack: true
                    });
                    $scope.formModal.hide();
                  }
                })
              }
            }
          } 
          else {
            var geoErr1 = $ionicPopup.alert({
              title: 'Error!',
              template: 'No results found!'
            });
          }
        } 
        else {
          var geoErr2 = $ionicPopup.alert({
            title: 'Error!',
            template: 'Geocoder failed due to: ' + status
          });
        }
      });
    });
    //cari lokasi
    var input = document.getElementById('cari');
    $scope.disableTap = function() {
      var container = document.getElementsByClassName('pac-container');
      angular.element(container).attr('data-tap-disabled', 'true');
      angular.element(container).on("click", function() {
          document.getElementById('pac-input').blur();
      });
    };
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function (event) {
      var place = autocomplete.getPlace();
      if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
      } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
      }
      var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: place.geometry.location
      })
    });
  }, function(err) {
    // error
  });
})

.controller('LoginCtrl', function($scope, $state, $ionicHistory) {
  $scope.msk = {};
  $scope.login = function() {
    firebase.auth().signInWithEmailAndPassword($scope.msk.email, $scope.msk.password).then(function(result){
      $state.go('app.daftar-kecelakaan');
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
    }).catch(function(error){
      var alertPopup = $ionicPopup.alert({
        title: 'Opps!',
        template: error
      });
    });
  }
  $scope.daftar = function () {
    $state.go('app.daftar');
  }
})

.controller('DaftarCtrl', function($scope, $ionicHistory, $ionicPopup, $state, $http) {
  $scope.dft = {};
  $scope.daftar = function() {
    firebase.auth().createUserWithEmailAndPassword($scope.dft.email, $scope.dft.password).then(function(result){
      $state.go('app.daftar-kecelakaan');
      $ionicHistory.clearHistory();
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
      // simpan database
      var user = firebase.auth().currentUser;
      firebase.database().ref('user/' + user.uid).set({
        nama: $scope.dft.nama,
        alamat: $scope.dft.alamat,
        email: $scope.dft.email,
        password: $scope.dft.password,
        foto: 'prf-default.png'
      });	
    }).catch(function(error){
      var alertPopup = $ionicPopup.alert({
      title: 'Opps!',
      template: error
      });
    });
  }
})

.controller('ProfilCtrl', function($scope, $ionicPopup, $ionicHistory, $ionicPopup, $timeout) {
  //ambil data user
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      loadDataProfil();
      //edit foto
      var user = firebase.auth().currentUser;
      var fileButton = document.getElementById('uploadFotoProfil');
      fileButton.addEventListener('change', function(e){
        //get file
        var file = e.target.files[0];
        //create a storage
        var storageRef = firebase.storage().ref('profil/' + file.name);
        //upload task
        var task = storageRef.put(file);
        //progress
        task.on('state_changed', function (snapshot){}, function error(err){}, function complete(){
          firebase.database().ref('user/').child(user.uid).update({
            foto: task.snapshot.downloadURL
          });
          loadDataProfil();
        })
      })
    }
    else{
      // console.log('not login');
    }
  })

  function loadDataProfil(){
    var user = firebase.auth().currentUser;
    //ambil data profil
    var getDataProfil = []
    firebase.database().ref('user/' + user.uid).on('value', function(snapshot) {
        // $scope.nama_user = snapshot.val().nama;
        // $scope.email_user = snapshot.val().email; 
        // $scope.foto_user = snapshot.val().foto;
        // $scope.alamat_user = snapshot.val().alamat;
        
        var elementDataProfil = snapshot.val();
        getDataProfil.push(elementDataProfil);

        $timeout(function(){
          $scope.nama_user = getDataProfil[0].nama;
          $scope.email_user = getDataProfil[0].email; 
          $scope.foto_user = getDataProfil[0].foto;
          $scope.alamat_user = getDataProfil[0].alamat;
        }, 2);
    });	
    //ambil data laka
    var query = firebase.database().ref('infolaka/');
    query.on('value', function(snapshot) {
        $scope.infoLakaUser = [];
        snapshot.forEach(function(childSnapshot) {
          if(childSnapshot.val().id_user == user.uid){
            var data = childSnapshot.val();
            $scope.infoLakaUser.push(data);
          }
        });
    });
    //hapus data laka
    $scope.dtl_laka = function(id){
      $ionicPopup.confirm({
        template: 'Anda yakin ingin menghapus laporan ini?',
        buttons: [
          {
            text: '<b>OK</b>',
            type: 'button-positive',
            onTap: function(e) {
              firebase.database().ref('infolaka/' + id).remove();
            }
          },
          { text: 'Batal' }
        ]
      });
    }
    //edit nama
    $scope.edt_nama = function(){
      $scope.edt = {};
      $ionicPopup.show({
        title: '<b>Edit Nama Profil</b>',
        template: '<div class="list"><label class="item item-input"><input ng-model="edt.nama" type="text" placeholder="Masukkan Nama Baru"></label></div>',
        scope: $scope,
        buttons: [
          { text: 'Batal' },
          {
            text: '<b>Simpan</b>',
            type: 'button-positive',
            onTap: function(e) {
              firebase.database().ref('user/').child(user.uid).update({
                nama: $scope.edt.nama
              });
            }
          }
        ]
      })
    }
    //edit email
    $scope.edt_email = function(){
      $scope.edt = {};
      var myPopup  = $ionicPopup.show({
        title: '<b>Edit Email Profil</b>',
        template: '<div class="list"><label class="item item-input"><input ng-model="edt.email" type="email" placeholder="Masukkan Email Baru"></label></div>',
        scope: $scope,
        buttons: [
          { text: 'Batal' },
          {
            text: '<b>Simpan</b>',
            type: 'button-positive',
            onTap: function(e) {
              firebase.database().ref('user/').child(user.uid).update({
                email: $scope.edt.email
              });
              var newEmail = $scope.edt.email;
              user.updateEmail(newEmail);
            }
          }
        ]
      })
    }
    //edit alamat
    $scope.edt_alamat = function(){
      $scope.edt = {};
      $ionicPopup.show({
        title: '<b>Edit Alamat Profil</b>',
        template: '<div class="list"><label class="item item-input"><input ng-model="edt.alamat" type="text" placeholder="Masukkan Alamat Baru"></label></div>',
        scope: $scope,
        buttons: [
          { text: 'Batal' },
          {
            text: '<b>Simpan</b>',
            type: 'button-positive',
            onTap: function(e) {
              firebase.database().ref('user/').child(user.uid).update({
                alamat: $scope.edt.alamat
              });
            }
          }
        ]
      })
    }
  }
})
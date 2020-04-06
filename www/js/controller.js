angular.module('MyApp', [])

.controller('Ctrl_Home', function($scope,$http,$state,$ionicPopup,$firebaseAuth,$ionicLoading,$ionicHistory){
  //cek user login;
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      $ionicHistory.clearCache().then(function(){
        $state.go('app.penumpang');
      });
    }
    else{
      $state.go('home');
    }
  });
  //proses masuk
	$scope.msk = function(){
		$scope.dataMsk = {};
		var myPopup1  = $ionicPopup.show({
			title: 'Masuk',
			template: '<div class="list"><label class="item item-input"><input ng-model="dataMsk.email" type="text" placeholder="Email"></label><label class="item item-input"><input ng-model="dataMsk.pass" type="password" placeholder="Sandi"></label></div>',
		    scope: $scope,
		    buttons: [
	      	{
	        	text: 'Kembali',
	        	type: 'button-assertive'
	        },
	      	{
	        	text: 'Masuk',
	        	type: 'button-positive',
		        onTap: function(e) {
		        	var auth = firebase.auth();
  						$ionicLoading.show({
  				  			template: '<ion-spinner class="spinner-energized" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #ffc900;">Sedang Memuat...</h6>',
  				  			duration: 3000
  						});
  						auth.signInWithEmailAndPassword($scope.dataMsk.email, $scope.dataMsk.pass).then(function(result){
  							$state.go('app.penumpang');
  						}).catch(function(error){
  						   	var alertPopup = $ionicPopup.alert({
  						    	title: 'Opps!',
  						    	template: error
  						   	});
  						});
		        }
	        }
		    ]
		})
	}
  //proses daftar
  $scope.dft = function(){
    $scope.dataDft = {};
    var myPopup2  = $ionicPopup.show({
      title: 'Daftar',
      template: '<div class="list"><label class="item item-input"><input ng-model="dataDft.email" type="text" placeholder="Email"></label><label class="item item-input"><input ng-model="dataDft.pass" type="password" placeholder="Sandi"></label><label class="item item-input"><input ng-model="dataDft.nama" type="text" placeholder="Nama"></label><label class="item item-input"><input ng-model="dataDft.tlp" type="text" placeholder="No. Tlp"></label></div>',
        scope: $scope,
        buttons: [
          {
            text: 'Kembali',
            type: 'button-assertive'
          },
          {
            text: 'Daftar',
            type: 'button-positive',
            onTap: function(e) {
              var auth = firebase.auth();
              $ionicLoading.show({
                  template: '<ion-spinner class="spinner-energized" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #ffc900;">Sedang Memuat...</h6>',
                  duration: 3000
              });
              auth.createUserWithEmailAndPassword($scope.dataDft.email, $scope.dataDft.pass).then(function(result){
              var alertPopup = $ionicPopup.alert({
                title: 'Daftar Berhasil!'
              });
              var userDaftar = firebase.auth().currentUser;
              firebase.database().ref('penumpang/' + userDaftar.uid).set({
                email: $scope.dataDft.email,
                password: $scope.dataDft.pass,
                nama: $scope.dataDft.nama,
                tlp: $scope.dataDft.tlp,
                img: "img/user.png",
                status: "0"
              });
              }).catch(function(error){
                var alertPopup = $ionicPopup.alert({
                  title: 'Opps!',
                  template: error
                });
              });
            }
          }
        ]
    })
  }
})

.controller('Ctrl_Penumpang', function($scope,$http,$state,$cordovaGeolocation,$firebaseAuth,$ionicPopup,$ionicModal,$ionicLoading,$timeout){
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      // console.log(firebaseUser);
      loadMap();
    }
    else{
      // console.log('not login');
      loadMap();
    }
  })
  $scope.disableTap = function() {
    var container = document.getElementsByClassName('pac-container');
    angular.element(container).attr('data-tap-disabled', 'true');
    var backdrop = document.getElementsByClassName('backdrop');
    angular.element(backdrop).attr('data-tap-disabled', 'true');
    angular.element(container).on("click", function() {
      document.getElementById('origin-input').blur();
      document.getElementById('destination-input').blur();
    });
  };
  //map
  // var options = {timeout: 10000, enableHighAccuracy: false};
  // $cordovaGeolocation.getCurrentPosition(options).then(function(position){
  //   var latLng = new google.maps.LatLng(-7.9747434, 112.6232224);
  //   var mapOptions = {
  //     center: latLng,
  //     zoom: 15,
  //     disableDefaultUI: true
  //   };

  //   var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  //   new AutocompleteDirectionsHandler(map);
  // });
  $scope.loadingMap = true;
  $scope.showMap = false;
  $scope.showError = false;
  function loadMap(){
    var options = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
      var latLng = new google.maps.LatLng(-7.9747434, 112.6232224);
      var mapOptions = {
        center: latLng,
        zoom: 15,
        disableDefaultUI: true
      };

      var map = new google.maps.Map(document.getElementById('map'), mapOptions);
      new AutocompleteDirectionsHandler(map);
      $timeout(function(){
        $scope.showMap = true;
        $scope.loadingMap = false;
      }, 2);
    }).catch(err => {
        $scope.loadingMap = false;
        $scope.showError = true;
        $scope.showMap = false;
    });

    //direction
    function AutocompleteDirectionsHandler(map) {
      this.map = map;
      this.originPlaceId = null;
      this.destinationPlaceId = null;
      this.travelMode = 'DRIVING';
      var originInput = document.getElementById('origin-input');
      var destinationInput = document.getElementById('destination-input');
      this.directionsService = new google.maps.DirectionsService;
      this.directionsDisplay = new google.maps.DirectionsRenderer;
      this.directionsDisplay.setMap(map);
      var originAutocomplete = new google.maps.places.Autocomplete(originInput, {fields: ['place_id']});
      var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput, {fields: ['place_id']});
      this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
      this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');
      this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(originInput);
      this.map.controls[google.maps.ControlPosition.CENTER].push(destinationInput);

      //modal button pesan
      $ionicModal.fromTemplateUrl('templates/pesan.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
          $scope.mdl_psn = modal;
      });
      //hitung KM
      $scope.pesan = function() {
        $ionicLoading.show({
          template: '<ion-spinner class="spinner-energized" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #ffc900;">Sedang Memuat...</h6>',
          duration: 3000
        }).then(function(w){
          $scope.mdl_psn.show();
           //ambil id penumpang
          var user = firebase.auth().currentUser;
          $scope.id_pnp = user.uid;
          var adr_satu = originInput.value;
          var adr_dua = destinationInput.value;
          var directionsService = new google.maps.DirectionsService;
          var directionsDisplay = new google.maps.DirectionsRenderer;
          directionsService.route({
            origin: adr_satu,
            destination: adr_dua,
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
          }, function(response, status) {
            if (status == 'OK') {
              directionsDisplay.setDirections(response);
              var route = response.routes[0];
              for (var i = 0; i < route.legs.length; i++) {
                $scope.ttlKm = route.legs[i].distance.text;
              }
              //detail modal
              $scope.lks_awal = originInput.value;
              $scope.lks_tjn = destinationInput.value;
              $scope.dtl_awal = function(){
                var alertPopup = $ionicPopup.alert({
                  title: 'Lokasi Anda',
                  template: originInput.value
                });
              }
              $scope.dtl_tjn = function(){
                var alertPopup = $ionicPopup.alert({
                  title: 'Tujuan Anda',
                  template: destinationInput.value
                });
              }
              //ambil data pangkalan yg terdekat
              var dptJarak = [];
              var query = firebase.database().ref("pangkalan").orderByKey();
              query.once("value").then(function(snapshot) {
                var tmpIf = 0;
                var jmlKey = snapshot.numChildren();
                snapshot.forEach(function(childSnapshot) {
                  var key = childSnapshot.key;
                  var childDataLat = childSnapshot.val().lat;
                  var childDataLong = childSnapshot.val().long;
                  //convert latlong ke address
                  var Pklgeocoder = new google.maps.Geocoder;
                    var PklgeoLatLong = {lat: parseFloat(childDataLat), lng: parseFloat(childDataLong)};
                  Pklgeocoder.geocode({'location': PklgeoLatLong}, function(results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                      if (results[1]) {
                        var lks_pnp = $scope.lks_awal;
                        var lks_pkl = results[0].formatted_address;
                        var directionsService = new google.maps.DirectionsService;
                        var directionsDisplay = new google.maps.DirectionsRenderer;
                        directionsService.route({
                          origin: lks_pnp,
                          destination: lks_pkl,
                          optimizeWaypoints: true,
                          travelMode: 'DRIVING'
                        }, function(response, status) {
                          if (status == 'OK') {
                            var jarak = response.routes[0];
                            // console.log(jarak);
                            for (var i = 0; i < jarak.legs.length; i++) {
                              dptJarak.push({arrKey:key,arrJrk:parseFloat(jarak.legs[i].distance.value)});
                            }
                          }
                          else {
                            window.alert('Directions request failed due to ' + status);
                          }
                          dptJarak.sort(function(a, b){return a.arrJrk - b.arrJrk});
                          tmpIf++;
                          // console.log(dptJarak);
                          // console.log(dptJarak[0].arrKey +"<br>"+ dptJarak[0].arrJrk);
                          // console.log(dptJarak[0].arrJrk);
                          // console.log("tmpIf = "+tmpIf);
                          // console.log("jmlKey = "+jmlKey);
                          // cek status penumpang
                          var query_cekPnp = firebase.database().ref('penumpang/' + user.uid).on('value', function(snapshot) {
                            $scope.statusPnp = snapshot.val().status;
                          });
                          //seleksi pesanan
                          if(dptJarak[0].arrJrk > 5034 && tmpIf == jmlKey){
                            $scope.mdl_psn.hide().then(function(){
                               var alertPsn = $ionicPopup.alert({
                                title: 'Peringatan!',
                                template: '<center>Maaf, Tidak Ada Pangkalan Ojek Yang Dekat Dengan Lokasi Anda Sekarang!</center>'
                               });
                            });
                          }
                          else if($scope.statusPnp == 1){
                            $scope.mdl_psn.hide().then(function(){
                               var alertPsn = $ionicPopup.alert({
                                title: 'Peringatan!',
                                template: '<center>Maaf, Anda Tidak Bisa Melakukan Pemesanan!</center>'
                               });
                            });
                          }
                          else if(dptJarak[0].arrJrk <= 5034 && tmpIf == jmlKey && $scope.statusPnp == 0){
                            //ambil data pangkalan terdekat
                            var query_adPkl = firebase.database().ref('pangkalan/' + dptJarak[0].arrKey).on('value', function(snapshot) {
                              $scope.HrgNearPkl = snapshot.val().harga;
                              $scope.ttlKali = parseFloat($scope.ttlKm) * parseFloat($scope.HrgNearPkl);
                              $scope.ttlHrg = parseInt($scope.ttlKali);
                              $scope.nmPkl = snapshot.val().nama;
                            });
                            //ambil data supir
                            var query_adSpr = firebase.database().ref('supir/');
                            query_adSpr.on('value', function(snapshot) {
                              $scope.supirTmp = [];
                              snapshot.forEach(function(childSnapshot) {
                                if(childSnapshot.val().id_pangkalan == dptJarak[0].arrKey && childSnapshot.val().deposit > 0 && childSnapshot.val().status == 0){
                                  var data = childSnapshot.val();
                                  $scope.supirTmp.push(data);
                                }
                                // console.log($scope.supirTmp);
                              });
                            });
                            //modal detail supir
                            $ionicModal.fromTemplateUrl('templates/detail_supir.html', {
                              scope: $scope,
                              animation: 'slide-in-up'
                            }).then(function(modal) {
                                $scope.mdl_dtlSpr = modal;
                            });
                            //detail supir
                            $scope.dtl_spr = function(id){
                              $scope.dtl = {};
                              $scope.mdl_dtlSpr.show();
                              firebase.database().ref('supir/' + id).on('value', function(snapshot) {
                                $scope.dtl_email = snapshot.val().email;
                                $scope.dtl_nama = snapshot.val().nama;
                                $scope.dtl_tlp = snapshot.val().tlp;
                                $scope.dtl_kdr = snapshot.val().kendaraan;
                                $scope.dtl_img = snapshot.val().img;
                                $scope.dtl_imgKdr = snapshot.val().img_kendaraan;
                              });
                              $scope.lht_kdr = function(){
                                var alertKdr = $ionicPopup.show({
                                  template: '<center><img class="full-image" src="'+$scope.dtl_img+'"><p>'+$scope.dtl_kdr+'</p></center>',
                                  title: 'Detail Kendaraan!'
                                });
                                $timeout(function() {
                                  alertKdr.close();
                                }, 3000);
                              }
                            }
                            $scope.$on('modal.removed', function() {
                              $ionicModal.fromTemplateUrl('templates/detail_supir.html', {
                                scope: $scope,
                                animation: 'slide-in-up'
                              }).then(function(modal) {
                                  $scope.mdl_dtlSpr = modal;
                              });
                            });
                          }
                        });
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
              });
            }
            else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        });
        //proses pemesanan penumpang
        $scope.choice = {};
        $scope.prs_psn = function($choice){
          $ionicLoading.show({
              template: '<ion-spinner class="spinner-energized" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #ffc900;">Mengirim Pesanan...</h6>',
              duration: 3000
          }).then(function(w){
            //tanggal
            var date = new Date();
            var hr = ["Ahad","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
            var bln = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            var tgl = hr[date.getDay()]+", "+date.getDate()+" "+bln[date.getMonth()]+" "+date.getFullYear();
            // console.log($choice.val);
            var psn_idPnp = $scope.id_pnp;
            var psn_idSpr = $choice.val;
            var psn_awl = $scope.lks_awal;
            var psn_tjn = $scope.lks_tjn;
            var psn_hrg = $scope.ttlHrg;
            var messageListRef = firebase.database().ref('pesanan');
            var newMessageRef = messageListRef.push();
            var dpt_id = newMessageRef.key;
            newMessageRef.set({
               'id_pesanan': dpt_id,
               'id_penumpang': psn_idPnp,
              'id_supir': psn_idSpr,
              'lokasi': psn_awl,
              'tujuan': psn_tjn,
              'harga': psn_hrg,
              'tanggal': tgl,
              'status' : "true"
            });
            //update status penumpang
            firebase.database().ref('penumpang/').child(psn_idPnp).update({
              status: "1"
            })
            //update status supir
            firebase.database().ref('supir/').child(psn_idSpr).update({
              status: "1"
            })
             var hbsPsn = $ionicPopup.alert({
              title: 'Pesanan Anda Berhasil Dikirim!',
              template: '<center>Silahkan Ke Daftar Pesanan Untuk Proses Lanjut Pemesanan Anda!</center>'
             });
             hbsPsn.then(function(res) {
              $scope.mdl_psn.hide();
             });
            document.getElementById('origin-input').value = "";
            document.getElementById('destination-input').value = "";
          });
        }
      };
    }
    AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
      var me = this;
      autocomplete.bindTo('bounds', this.map);
      autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        if(!place.place_id){
          window.alert("Please select an option from the dropdown list.");
          return;
        }
        if(mode === 'ORIG'){
          me.originPlaceId = place.place_id;
        }
        else{
          me.destinationPlaceId = place.place_id;
        }
        me.route();
      });
    };
    AutocompleteDirectionsHandler.prototype.route = function() {
      if(!this.originPlaceId || !this.destinationPlaceId){
        return;
      }
      var me = this;

      this.directionsService.route({
        origin: {'placeId': this.originPlaceId},
        destination: {'placeId': this.destinationPlaceId},
        travelMode: this.travelMode
      }, function(response, status){
        if(status === 'OK'){
          me.directionsDisplay.setDirections(response);
        }
        else{
           var alertBts = $ionicPopup.alert({
            title: 'Peringatan!',
            template: '<center>Tujuan Anda Melewati Batas Maksimum!</center>'
           });
        }
      });
    };
  }
  $scope.reloadMapPage = function(){
    location.reload();
  }
})

.controller('Ctrl_Profil', function($scope, $http, $state, $ionicPopup, $firebaseAuth, $ionicLoading, $ionicModal, $timeout, $ionicHistory){
	$scope.map = function(){
		$state.go('app.penumpang');
	}
	//profil
	var user = firebase.auth().currentUser;
	$scope.profil = function(){
		$state.go('app.profil_penumpang');
		$ionicLoading.show({
			template: '<ion-spinner class="spinner-energized" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #ffc900;">Sedang Memuat...</h6>',
			duration: 3000
		});
		var usersRef = firebase.database().ref('penumpang/' + user.uid).on('value', function(snapshot) {
      $scope.pnpNama = snapshot.val().nama;
      $scope.pnpEmail = snapshot.val().email;
      $scope.pnpPass = snapshot.val().password;
      $scope.pnpTlp = snapshot.val().tlp;
      $scope.pnpImg = snapshot.val().img;
    });
	}
  //upload foto
  var fileButton = document.getElementById('fileButton');
  if(fileButton){
    fileButton.addEventListener('change', function(e){
      $ionicLoading.show({
        template: '<ion-spinner class="spinner-energized" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #ffc900;">Sedang Memuat...</h6>',
        duration: 3000
      });
      //get file
      var file = e.target.files[0];

      //create a storage
      var storageRef = firebase.storage().ref('penumpang/' + file.name);

      //upload task
      var task = storageRef.put(file);

      //progress
      task.on('state_changed', function (snapshot){
      }, function error(err){
      }, function complete(){
        firebase.database().ref('penumpang/').child(user.uid).update({
          img: task.snapshot.downloadURL
        });
      })
    })
  }
  $scope.edt_nama = function(){
		$scope.edt = {};
		var myPopup  = $ionicPopup.show({
			title: '<b>Edit Profil</b>',
			template: '<div class="list"><label class="item item-input"><input ng-model="edt.nama" type="text" placeholder="Masukkan Nama Baru"></label></div>',
		    scope: $scope,
		    buttons: [
		      { text: 'Batal' },
		      {
		        text: '<b>Simpan</b>',
		        type: 'button-positive',
		        onTap: function(e) {
					var user = firebase.auth().currentUser;
					firebase.database().ref('penumpang/').child(user.uid).update({
						nama: $scope.edt.nama
					}).then(function(){
						var alertPopup = $ionicPopup.alert({
						    title: 'Edit Profil',
						    template: 'Nama Berhasil Diganti!'
						});
					});
		        }
		      }
		    ]
		})
	}
  $scope.edt_email = function(){
		$scope.edt = {};
		var myPopup  = $ionicPopup.show({
			title: '<b>Edit Profil</b>',
			template: '<div class="list"><label class="item item-input"><input ng-model="edt.email" type="email" placeholder="Masukkan Email Baru"></label></div>',
		    scope: $scope,
		    buttons: [
		      { text: 'Batal' },
		      {
		        text: '<b>Simpan</b>',
		        type: 'button-positive',
		        onTap: function(e) {
					var user = firebase.auth().currentUser;
					firebase.database().ref('penumpang/').child(user.uid).update({
						email: $scope.edt.email
					}).then(function(){
						var newEmail = $scope.edt.email;
						user.updateEmail(newEmail);
						var alertPopup = $ionicPopup.alert({
						    title: 'Edit Profil',
						    template: 'Email Berhasil Diganti!'
						});
					});
		        }
		      }
		    ]
		})
	}
  $scope.edt_pass = function(){
		$scope.edt = {};
		var myPopup  = $ionicPopup.show({
			title: '<b>Edit Profil</b>',
			template: '<div class="list"><label class="item item-input"><input ng-model="edt.pass" type="text" placeholder="Masukkan Sandi Baru"></label></div>',
		    scope: $scope,
		    buttons: [
		      { text: 'Batal' },
		      {
		        text: '<b>Simpan</b>',
		        type: 'button-positive',
		        onTap: function(e) {
					var user = firebase.auth().currentUser;
					firebase.database().ref('penumpang/').child(user.uid).update({
						password: $scope.edt.pass
					}).then(function(){
						var newPassword = $scope.edt.pass;
						user.updatePassword(newPassword);
						var alertPopup = $ionicPopup.alert({
						    title: 'Edit Profil',
						    template: 'Sandi Berhasil Diganti!'
						});
					});
		        }
		      }
		    ]
		})
	}
  $scope.edt_tlp = function(){
		$scope.edt = {};
		var myPopup  = $ionicPopup.show({
			title: '<b>Edit Profil</b>',
			template: '<div class="list"><label class="item item-input"><input ng-model="edt.tlp" type="text" placeholder="Masukkan No. Telepon Baru"></label></div>',
		    scope: $scope,
		    buttons: [
		      { text: 'Batal' },
		      {
		        text: '<b>Simpan</b>',
		        type: 'button-positive',
		        onTap: function(e) {
					var user = firebase.auth().currentUser;
					firebase.database().ref('penumpang/').child(user.uid).update({
						tlp: $scope.edt.tlp
					}).then(function(){
						var alertPopup = $ionicPopup.alert({
						    title: 'Edit Profil',
						    template: 'No. Telepon Berhasil Diganti!'
						});
					});
		        }
		      }
		    ]
		})
	}
	//pesanan
	$scope.pesanan = function(){
		$state.go('app.pesanan');
		$ionicLoading.show({
  			template: '<ion-spinner class="spinner-energized" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #ffc900;">Sedang Memuat...</h6>',
  			duration: 3000
		});
		var query = firebase.database().ref('pesanan/');
		query.on('value', function(snapshot) {
	  		$scope.pesananTmp = [];
		    snapshot.forEach(function(childSnapshot) {
		    	if(childSnapshot.val().id_penumpang == user.uid){
	  				var data = childSnapshot.val();
  					$scope.pesananTmp.push(data);
  				}
	  		});
		});
	}
  //modal detail pesanan
	$ionicModal.fromTemplateUrl('templates/detail_pesanan.html', {
  	scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
	  $scope.mdl_dtlPsn = modal;
	});
  //modal chat
  $ionicModal.fromTemplateUrl('templates/chat.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.mdl_chatPsn = modal;
  });
	//detail pesanan
	$scope.dtl_psn = function(id){
  	$scope.mdl_dtlPsn.show();
  	firebase.database().ref('pesanan/' + id).on('value', function(snapshotPsn) {
      $scope.dtlPsn_id = snapshotPsn.val().id_pesanan;
      $scope.dtlPsn_sts = snapshotPsn.val().status;
  		$scope.dtlPsn_lks = snapshotPsn.val().lokasi;
  		$scope.dtlPsn_tjn = snapshotPsn.val().tujuan;
  		$scope.dtlPsn_hrg = snapshotPsn.val().harga;
  		$scope.dtlPsn_tgl = snapshotPsn.val().tanggal;
  		//ambil data supir
  		$scope.tmp_spr = snapshotPsn.val().id_supir;
  		firebase.database().ref('supir/' + $scope.tmp_spr).on('value', function(snapshotSpr) {
  			$scope.dtlPsn_nmSpr = snapshotSpr.val().nama;
  			$scope.dtlPsn_imgSpr = snapshotSpr.val().img;
  			$scope.dtlPsn_tlpSpr = snapshotSpr.val().tlp;
	    });
    });
    //modal hide
  	$scope.cancel = function() {
	    $scope.mdl_dtlPsn.hide();
  	};
  	//detail supir yang dipilih
  	$scope.dtlPsn_spr = function(id){
  		firebase.database().ref('supir/' + id).on('value', function(snapshotPuDtlSpr) {
		  	var puDtlSpr = $ionicPopup.show({
		    	template: '<ul class="list"><li class="item"><h4>Nama :</h4><p>'+snapshotPuDtlSpr.val().nama+'</p></li><li class="item"><h4>No. Telepon :</h4><p>'+snapshotPuDtlSpr.val().tlp+'</p></li><li class="item"><h4>Jenis Kendaraan :</h4><p>'+snapshotPuDtlSpr.val().kendaraan+'</p></li><li class="item"><center><img class="full-image" src='+snapshotPuDtlSpr.val().img_kendaraan+'></center></li></ul>',
			    title: 'Detail Supir',
		  	});
		  	$timeout(function() {
		    	puDtlSpr.close();
		  	}, 5000);
	    });
  	}
    //order selesai
    $scope.psn_sls = function(id){
      console.log(id);
      //update status pesanan
      firebase.database().ref('pesanan/').child(id).update({
        status: "false"
      })
      //update status penumpang
      firebase.database().ref('penumpang/').child(user.uid).update({
        status: "0"
      })
    }
	}
  //chat
  $scope.chat_psn = function(key){
    $scope.mdl_chatPsn.show();
    $scope.dtlIdPsn = key;
    // ambil data pesanan
    firebase.database().ref('pesanan/' + $scope.dtlIdPsn).on('value', function(snapshotDataPsn) {
      $scope.data_idpnp = snapshotDataPsn.val().id_penumpang;
      $scope.data_idpsn = snapshotDataPsn.val().id_pesanan;
      $scope.data_idspr = snapshotDataPsn.val().id_supir;
    });
    //ambil data supir
    firebase.database().ref('supir/' + $scope.data_idspr).on('value', function(snapshotDataSpr) {
      $scope.data_nmSpr = snapshotDataSpr.val().nama;
      $scope.data_imgSpr = snapshotDataSpr.val().img;
    });
    //ambil data penumpang
    firebase.database().ref('penumpang/' + $scope.data_idpnp).on('value', function(snapshotDataPnp) {
      $scope.data_nmPnp = snapshotDataPnp.val().nama;
      $scope.data_imgPnp = snapshotDataPnp.val().img;
    });
    //list chat
    // $scope.imgChatUser = "";
    // $scope.imgChatNotUser = "";
    $scope.userIdLog = user.uid;
    var query = firebase.database().ref('chat/');
    query.on('value', function(snapshot) {
      $scope.chatTmp = [];
      snapshot.forEach(function(childSnapshot) {
        if(childSnapshot.val().id_psn == $scope.data_idpsn){
          // if(childSnapshot.val().sender == $scope.userIdLog){
          //   firebase.database().ref('penumpang/' + $scope.userIdLog).on('value', function(snapshotDataPnp) {
          //     $scope.imgChatUser = snapshotDataPnp.val().img;
          //   });
          // }
          // else if(childSnapshot.val().sender != $scope.userIdLog){
          //   firebase.database().ref('supir/' + $scope.data_idspr).on('value', function(snapshotDataSpr) {
          //     $scope.imgChatNotUser = snapshotDataSpr.val().img;
          //   });
          // }
          var data = childSnapshot.val();
          $scope.chatTmp.push(data);
        }
      });
    });
    //modal hide
    $scope.cancel = function() {
      $scope.mdl_chatPsn.hide();
    };
  }
  $scope.krm_chat = function(chat){
    // ambil data pesanan
    firebase.database().ref('pesanan/' + $scope.dtlIdPsn).on('value', function(snapshotDataPsn) {
      $scope.data_idpnp = snapshotDataPsn.val().id_penumpang;
      $scope.data_idpsn = snapshotDataPsn.val().id_pesanan;
      $scope.data_idspr = snapshotDataPsn.val().id_supir;
    });
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var tmpJam = h+":"+m;
    var addDB = firebase.database().ref('chat/');
    var prcDB = addDB.push();
    prcDB.set({
      'id_psn': $scope.data_idpsn,
      'sender': user.uid,
      'chat': chat.dtlChat,
      'jam':  tmpJam
    })
    chat.dtlChat = "";
  }
  //logout
	$scope.logout = function(){
    firebase.auth().signOut().then(function() {
      $ionicHistory.clearCache().then(function(){
        $state.go('home');
        // location.reload();
      });
    }, function(error) {
        console.log(error);
    });
	}
})

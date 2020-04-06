angular.module('MyApp', [])

.controller('Ctrl_Home', function($scope,$http,$state,$ionicModal,$ionicPopup,$ionicLoading,$cordovaGeolocation,$firebaseAuth,$ionicHistory){
  //cek user login;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $ionicHistory.clearCache().then(function(){
        $state.go('pangkalan.profil');
      });
    }
    else{
      $state.go('home');
    }
  });
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
		        	type: 'button-royal',
			        onTap: function(e) {
			        	var auth = firebase.auth();
						$ionicLoading.show({
				  			template: '<ion-spinner class="spinner-royal" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #886aea;">Sedang Memuat...</h6>',
				  			duration: 3000
						});
						auth.signInWithEmailAndPassword($scope.dataMsk.email, $scope.dataMsk.pass).then(function(result){
							$state.go('pangkalan.profil');
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
	$scope.bHome = function(){
		window.history.back();
	}
})

.controller('Ctrl_Pangkalan', function($scope,$http,$state,$ionicModal,$ionicHistory,$ionicPopup,$ionicLoading,$cordovaGeolocation,$firebaseAuth){
	//profil
	var pklUser = firebase.auth().currentUser;
	var ambilProfil = firebase.database().ref('pangkalan/' + pklUser.uid).on('value', function(snapshot) {
    $scope.pkl_nama = snapshot.val().nama;
    $scope.pkl_email = snapshot.val().email;
    $scope.pkl_pass = snapshot.val().password;
    $scope.pkl_tlp = snapshot.val().tlp;
    $scope.pkl_hrg = snapshot.val().harga;
    $scope.pkl_img = snapshot.val().img;
    $scope.pkl_lat = snapshot.val().lat;
    $scope.pkl_long = snapshot.val().long;

  	var Pklgeocoder = new google.maps.Geocoder;
 	 	var PklgeoLatLong = {lat: parseFloat($scope.pkl_lat), lng: parseFloat($scope.pkl_long)};
	  Pklgeocoder.geocode({'location': PklgeoLatLong}, function(results, status) {
	    if (status === google.maps.GeocoderStatus.OK) {
	      	if (results[1]) {
	        	// console.log(results[0].formatted_address);
	        	$scope.pkl_lks = results[0].formatted_address;
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
      var storageRef = firebase.storage().ref('pangkalan/' + file.name);

      //upload task
      var task = storageRef.put(file);

      //progress
      task.on('state_changed', function (snapshot){
      }, function error(err){
      }, function complete(){
        firebase.database().ref('pangkalan/').child(pklUser.uid).update({
          img: task.snapshot.downloadURL
        });
      })
    })
  }
    //edit supir
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
					firebase.database().ref('pangkalan/').child(pklUser.uid).update({
						nama: $scope.edt.nama
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
					firebase.database().ref('pangkalan/').child(pklUser.uid).update({
						email: $scope.edt.email
					});
					var newEmail = $scope.edt.email;
					pklUser.updateEmail(newEmail);
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
					firebase.database().ref('pangkalan/').child(pklUser.uid).update({
						password: $scope.edt.pass
					});
					var newPassword = $scope.edt.pass;
					pklUser.updatePassword(newPassword);
		        }
		      }
		    ]
		})
	}
    $scope.edt_tlp = function(){
		$scope.edt = {};
		var myPopup  = $ionicPopup.show({
			title: '<b>Edit Profil</b>',
			template: '<div class="list"><label class="item item-input"><input ng-model="edt.tlp" type="text" placeholder="Masukkan No. Tlp Baru"></label></div>',
		    scope: $scope,
		    buttons: [
		      { text: 'Batal' },
		      {
		        text: '<b>Simpan</b>',
		        type: 'button-positive',
		        onTap: function(e) {
					firebase.database().ref('pangkalan/').child(pklUser.uid).update({
						tlp: $scope.edt.tlp
					});
		        }
		      }
		    ]
		})
	}
    $scope.edt_hrg = function(){
		$scope.edt = {};
		var myPopup  = $ionicPopup.show({
			title: '<b>Edit Profil</b>',
			template: '<div class="list"><label class="item item-input"><input ng-model="edt.hrg" type="text" placeholder="Masukkan Harga Baru"></label></div>',
		    scope: $scope,
		    buttons: [
		      { text: 'Batal' },
		      {
		        text: '<b>Simpan</b>',
		        type: 'button-positive',
		        onTap: function(e) {
					firebase.database().ref('pangkalan/').child(pklUser.uid).update({
						harga: $scope.edt.hrg
					});
		        }
		      }
		    ]
		})
	}
	//list supir
	var query = firebase.database().ref('supir/');
	query.on('value', function(snapshot) {
  		$scope.supirTmp = [];
	    snapshot.forEach(function(childSnapshot) {
	    	if(childSnapshot.val().id_pangkalan == pklUser.uid){
  				var data = childSnapshot.val();
				$scope.supirTmp.push(data);
			}
  		});
	});
    // tambah supir
	$scope.tmb_spr = function(){
		$scope.dftSpr = {};
		var myPopup  = $ionicPopup.show({
			title: '<b>Tambah Supir</b>',
			template: '<div class="list"><label class="item item-input"><input ng-model="dftSpr.email" type="Email" placeholder="Email"></label><label class="item item-input"><input ng-model="dftSpr.snd" type="password" placeholder="Sandi"></label><label class="item item-input"><input ng-model="dftSpr.nama" type="text" placeholder="Nama"></label><label class="item item-input"><input ng-model="dftSpr.tlp" type="text" placeholder="No. Tlp"></label><label class="item item-input"><input ng-model="dftSpr.kendaraan" type="text" placeholder="Detail Kendaraan"></label></div>',
		    scope: $scope,
		    buttons: [
		      { text: 'Batal' },
		      {
		        text: '<b>Simpan</b>',
		        type: 'button-royal',
		        onTap: function(e) {
		        	var authSpr = firebase.auth();
					authSpr.createUserWithEmailAndPassword($scope.dftSpr.email, $scope.dftSpr.snd).then(function(result){
					   	var alertPopup = $ionicPopup.alert({
							title: 'Supir Baru Berhasil Di Tambahkan!'
					   	});
						firebase.database().ref('supir/' + result.uid).set({
							email: $scope.dftSpr.email,
							nama: $scope.dftSpr.nama,
							password: $scope.dftSpr.snd,
							img: "img/user.png",
							id: result.uid,
							id_pangkalan: pklUser.uid,
							tlp: $scope.dftSpr.tlp,
							kendaraan: $scope.dftSpr.kendaraan,
							img_kendaraan: "img/user.png",
							deposit: "0",
							status: "0"
						});
					}).catch(function(error){
					   	var alertPopup = $ionicPopup.alert({
					    	title: 'Opps!',
					    	template: error
					   	});
					})
		        }
		      }
		    ]
		})
	}
	$scope.data = {
    	showDelete: false
  	};
  	//modal detail supir
	$ionicModal.fromTemplateUrl('templates/pangkalan/detail_supir.html', {
    	scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
	    $scope.modal = modal;
	});
  	//detail supir
  	$scope.dtl_spr = function(id){
		$scope.edt = {};
		$scope.modal.show();
		firebase.database().ref('supir/' + id).on('value', function(snapshot) {
	    	document.getElementById('edt.email').value = snapshot.val().email;
	    	document.getElementById('edt.pass').value = snapshot.val().password;
	    	document.getElementById('edt.nama').value = snapshot.val().nama;
	    	document.getElementById('edt.tlp').value = snapshot.val().tlp;
	    	document.getElementById('edt.dps').value = snapshot.val().deposit;
	    	document.getElementById('edt.kdr').value = snapshot.val().kendaraan;
	    });
		$scope.cancel = function() {
		    $scope.modal.hide();
		};
		// $scope.simpanEdit = function() {
		// 	$scope.edt.nama = document.getElementById('edt.nama').value;
	 //    	$scope.edt.pass = document.getElementById('edt.pass').value;
	 //    	$scope.edt.email = document.getElementById('edt.email').value;
	 //    	$scope.edt.tlp = document.getElementById('edt.tlp').value;
		// 	firebase.database().ref('supir/').child(id).update({
		// 		nama: $scope.edt.nama,
		// 		password: $scope.edt.pass,
		// 		email: $scope.edt.email,
		// 		tlp: $scope.edt.tlp
		// 	});
		// };
  	}
  	//hapus supir
  	$scope.hapus = function(spr_id) {
    	firebase.database().ref('supir/' + spr_id).remove();
  	};
  	//keluar app
  	$scope.keluar = function(){
      firebase.auth().signOut().then(function() {
        $ionicHistory.clearCache().then(function(){
          $state.go('home');
          location.reload();
        });
      }, function(error) {
        console.log(error);
      });
  	}
})

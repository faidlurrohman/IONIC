angular.module('MyApp', [])

.controller('Ctrl_Home', function($scope,$http,$state,$ionicPopup,$firebaseAuth,$ionicLoading,$ionicHistory){
  //cek user login;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $ionicHistory.clearCache().then(function(){
        $state.go('app.supir');
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
		        	type: 'button-positive',
			        onTap: function(e) {
			        	var auth = firebase.auth();
						$ionicLoading.show({
				  			template: '<ion-spinner class="spinner-energized" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #ffc900;">Sedang Memuat...</h6>',
				  			duration: 3000
						});
						auth.signInWithEmailAndPassword($scope.dataMsk.email, $scope.dataMsk.pass).then(function(result){
							$state.go('app.supir');
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

.controller('Ctrl_Profil', function($scope, $http, $state, $cordovaGeolocation, $ionicPopup, $firebaseAuth, $ionicLoading, $ionicModal, $ionicHistory){
	//beranda supir
	var userBrd = firebase.auth().currentUser;
	var usersBrdRef = firebase.database().ref('supir/' + userBrd.uid).on('value', function(snapshot) {
    // $scope.sprNamaBrd = snapshot.val().nama;
    $scope.sprDepositBrd = snapshot.val().deposit;
  });
	var htgPsn = firebase.database().ref('pesanan/');
	htgPsn.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    	if(childSnapshot.val().id_supir == userBrd.uid && childSnapshot.val().status == "true"){
  			$scope.jmlPsnBrd = 1;
  			// alert("pesan baru");
  		}
  		else{
  			$scope.jmlPsnBrd = 0;
  		}
		});
	});
	//profil supir
	$scope.profil = function(){
		$state.go('app.profil_supir');
		$ionicLoading.show({
			template: '<ion-spinner class="spinner-energized" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #ffc900;">Sedang Memuat...</h6>',
			duration: 3000
		});
		var user = firebase.auth().currentUser;
		var usersRef = firebase.database().ref('supir/' + user.uid).on('value', function(snapshot) {
      $scope.sprNama = snapshot.val().nama;
      $scope.sprEmail = snapshot.val().email;
      $scope.sprPass = snapshot.val().password;
      $scope.sprTlp = snapshot.val().tlp;
      $scope.sprImg = snapshot.val().img;
      $scope.sprDeposit = snapshot.val().deposit;
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
      var storageRef = firebase.storage().ref('supir/' + file.name);

      //upload task
      var task = storageRef.put(file);

      //progress
      task.on('state_changed', function (snapshot){
      }, function error(err){
      }, function complete(){
        firebase.database().ref('supir/').child(userBrd.uid).update({
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
  					firebase.database().ref('supir/').child(user.uid).update({
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
    				firebase.database().ref('supir/').child(user.uid).update({
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
  					firebase.database().ref('supir/').child(user.uid).update({
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
					firebase.database().ref('supir/').child(user.uid).update({
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
  $scope.deposit = function(){
		$scope.tmb = {};
		var myPopup  = $ionicPopup.show({
			title: '<b>Tambah Deposit</b>',
			template: '<div class="list"><label class="item item-input"><input ng-model="tmb.dps" type="text" placeholder="Masukkan Jumlah Deposit"></label></div>',
	    scope: $scope,
	    buttons: [
	      { text: 'Batal' },
	      {
	        text: '<b>Simpan</b>',
	        type: 'button-positive',
	        onTap: function(e) {
  					var user = firebase.auth().currentUser;
  					firebase.database().ref('supir/').child(user.uid).update({
  						deposit: $scope.tmb.dps
  					}).then(function(){
  						var alertPopup = $ionicPopup.alert({
						    title: 'Tambah Deposit',
						    template: 'Deposit Berhasil Ditambahkan!'
  						});
  					});
	        }
	      }
	    ]
		})
	}
	//btn beranda
	$scope.beranda = function(){
		$state.go('app.supir');
	}
	//pesanan penumpang
	$scope.pesanan = function(){
		$state.go('app.pesanan');
		$ionicLoading.show({
			template: '<ion-spinner class="spinner-energized" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #ffc900;">Sedang Memuat...</h6>',
			duration: 3000
		});
		var listPsn = firebase.database().ref('pesanan/');
    var globalIdPsn = "";
		listPsn.on('value', function(snapshot) {
  		$scope.dftPsn = [];
	    snapshot.forEach(function(childSnapshot) {
	    	if(childSnapshot.val().id_supir == userBrd.uid && childSnapshot.val().status == "true"){
          globalIdPsn = childSnapshot.val().id_pesanan;
  				var data = childSnapshot.val();
					$scope.dftPsn.push(data);
          $scope.dtlPsn_lks = childSnapshot.val().lokasi;
          $scope.dtlPsn_tjn = childSnapshot.val().tujuan;
          //ambil data penumpang
          $scope.tmp_pnp = childSnapshot.val().id_penumpang;
          firebase.database().ref('penumpang/' + $scope.tmp_pnp).on('value', function(snapshotPnp) {
            $scope.dtlPsn_nmPnp = snapshotPnp.val().nama;
            $scope.dtlPsn_imgPnp = snapshotPnp.val().img;
            $scope.dtlPsn_tlpPnp = snapshotPnp.val().tlp;
          });
				}
  		});
		});
    //modal detail rute map
    $ionicModal.fromTemplateUrl('templates/detail_map.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.mdl_dtlMap = modal;
    });
    $scope.dtl_map = function() {
      var lht_lks = $scope.dtlPsn_lks;
      var lht_tjn = $scope.dtlPsn_tjn;
      //ambil map pesanan
      $ionicLoading.show({
        template: '<ion-spinner class="spinner-energized" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #ffc900;">Sedang Memuat...</h6>',
        duration: 3000
      }).then(function(){
        $scope.mdl_dtlMap.show();
        var optMapDtl = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation.getCurrentPosition(optMapDtl).then(function(position){
          var directionsDisplay = new google.maps.DirectionsRenderer;
          var directionsService = new google.maps.DirectionsService;
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            disableDefaultUI: true,
            center: {lat: -7.9747434, lng: 112.6232224}
          });
          directionsDisplay.setMap(map);
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
          directionsService.route({
            origin: lht_lks,
            destination: lht_tjn,
            travelMode: 'DRIVING'
          }, function(response, status) {
            if (status == 'OK') {
              directionsDisplay.setDirections(response);
            }
            else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        }
      })
      //button detail map
      //cek status supir
      firebase.database().ref('supir/' + userBrd.uid).on('value', function(snapshot) {
        $scope.cekStatusSupir = snapshot.val().status;
      });
      //cek status pesanan
      firebase.database().ref('pesanan/' + globalIdPsn).on('value', function(snapshot) {
        $scope.cekStatusPesanan = snapshot.val().status;
      });
      $scope.eventBtnMulai = function(){
        //update status supir
        firebase.database().ref('supir/').child(userBrd.uid).update({
          status: "2"
        })
      }
      $scope.eventBtnSelesai = function(){
        //update status pesanan
        firebase.database().ref('pesanan/').child(globalIdPsn).update({
          status: "false"
        })
        //update status supir
        var jmlDpsAwal = 0;
        firebase.database().ref('supir/' + userBrd.uid).on('value', function(snapshot) {
          jmlDpsAwal = snapshot.val().deposit;
        });
        var minDps = 1000;
        var ttlDps = jmlDpsAwal-minDps;
        firebase.database().ref('supir/').child(userBrd.uid).update({
          status: "0",
          deposit: ttlDps
        }).then(function(){
          //tanggal
          var date = new Date();
          var hr = ["Ahad","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
          var bln = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
          var tgl = hr[date.getDay()]+", "+date.getDate()+" "+bln[date.getMonth()]+" "+date.getFullYear();
          // console.log($choice.val);
          var messageListRef = firebase.database().ref('laporan');
          var newMessageRef = messageListRef.push();
          var dpt_idLap = newMessageRef.key;
          newMessageRef.set({
            'id_laporan': dpt_idLap,
            'id_pesanan': globalIdPsn,
            'tanggal': tgl
          });
          $scope.mdl_dtlMap.hide().then(function(){
            $state.go('app.supir');
          })
        })
      }
    };
    $scope.$on('modal.removed', function() {
      $ionicModal.fromTemplateUrl('templates/detail_map.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.mdl_dtlMap = modal;
      });
    });
	}
  //modal chat
  $ionicModal.fromTemplateUrl('templates/chat.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.mdl_chatPsn = modal;
  });
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
    $scope.userIdLog = userBrd.uid;
    var query = firebase.database().ref('chat/');
    query.on('value', function(snapshot) {
      $scope.chatTmp = [];
      snapshot.forEach(function(childSnapshot) {
        if(childSnapshot.val().id_psn == $scope.data_idpsn){
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
      'sender': userBrd.uid,
      'chat': chat.dtlChat,
      'jam':  tmpJam
    })
    chat.dtlChat = "";
  }
	//keluar
	$scope.logout = function(){
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

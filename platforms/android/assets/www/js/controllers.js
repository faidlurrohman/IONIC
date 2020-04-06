angular.module('MyApp', [])

.controller('Ctrl_Login', function($scope, $http, $state, $ionicPopup, $firebaseAuth, $ionicLoading){
	//auth firebase
	var user = firebase.auth().currentUser;
	if(user){
		var foto_tmp = "img/prf.png";
		var nama_tmp = "Edit Your Name!";
	    //mengambil data user yang login
		$email = user.email;
		if(user.displayName == null && user.photoURL == null){
			$nama = nama_tmp;
			$foto = foto_tmp;	
		}
		else{
			$nama = user.displayName;
			$foto = user.photoURL;
		}
	  	//membuat database firebase
		firebase.database().ref('users/' + user.uid).set({
			email: $email,
			nama: $nama,
			foto: $foto
		});
	}
	$scope.lgnFB = function(){
		$scope.nama_lgn="";
		var auth = firebase.auth();
		var provider = new firebase.auth.FacebookAuthProvider();
		$ionicLoading.show({
  			template: '<ion-spinner class="spinner-positive" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #387ef5;">Please Wait...</h6>',
  			duration: 3000
		});
		auth.signInWithPopup(provider).then(function(result){
			$ionicLoading.hide();
			$state.go('app.map');
		});
	}
	$scope.lgnGG = function(){
		var auth = firebase.auth();
		var provider = new firebase.auth.GoogleAuthProvider();
		$ionicLoading.show({
  			template: '<ion-spinner class="spinner-positive" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #387ef5;">Please Wait...</h6>',
  			duration: 3000
		});
		auth.signInWithPopup(provider).then(function(result){
			$ionicLoading.hide();
			$state.go('app.map');
		});
	}
	$scope.alt_msk = function(){
		$scope.msk = {};
		var myPopup  = $ionicPopup.show({
			title: '<b>Login</b>',
			template: '<div class="list"><label class="item item-input"><input ng-model="msk.email" type="Email" placeholder="Email"></label><label class="item item-input"><input ng-model="msk.snd" type="password" placeholder="Password"></label></div>',
		    scope: $scope,
		    buttons: [
		      { text: 'Cancel' },
		      {
		        text: '<b>Login</b>',
		        type: 'button-positive',
		        onTap: function(e) {
		        	var auth = firebase.auth();
					$ionicLoading.show({
			  			template: '<ion-spinner class="spinner-positive" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #387ef5;">Please Wait...</h6>',
			  			duration: 3000
					});
					auth.signInWithEmailAndPassword($scope.msk.email, $scope.msk.snd).then(function(result){
						$ionicLoading.hide();
						$state.go('app.map');
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
	$scope.alt_dft = function(){
		$scope.dft = {};
		var myPopup  = $ionicPopup.show({
			title: '<b>Sign Up</b>',
			template: '<div class="list"><label class="item item-input"><input ng-model="dft.email" type="Email" placeholder="Email"></label><label class="item item-input"><input ng-model="dft.snd" type="password" placeholder="Password"></label></div>',
		    scope: $scope,
		    buttons: [
		      { text: 'Cancel' },
		      {
		        text: '<b>Sign Up</b>',
		        type: 'button-positive',
		        onTap: function(e) {
					var auth = firebase.auth();
					$ionicLoading.show({
			  			template: '<ion-spinner class="spinner-positive" icon="crescent">Loading...</ion-spinner><br/><h6 style="color: #387ef5;">Please Wait...</h6>',
			  			duration: 3000
					});
					auth.createUserWithEmailAndPassword($scope.dft.email, $scope.dft.snd).then(function(result){
						$ionicLoading.hide();
						$state.go('app.map');
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
	$scope.logout = function(){
		firebase.auth().signOut().then(function() {
		 	$state.go('login');
		}, function(error) {
		  	console.log(error);
		});
	}
})

.controller('Ctrl_Map', function($scope, $state, $cordovaGeolocation, $firebaseAuth, $ionicPopup, $ionicModal, $ionicLoading) {
	//modal save location
	$ionicModal.fromTemplateUrl('templates/save_location.html', {
	    scope: $scope,
    	animation: 'slide-in-up'
	}).then(function(modal) {
	    $scope.modal = modal;
	});
	//map
	var options = {timeout: 10000, enableHighAccuracy: false};
  	$cordovaGeolocation.getCurrentPosition(options).then(function(position){
	    // lokasi map
	    // malang long:112.6232224 lat:-7.9747434
	    // ina long:116.8283 lat:6.1750
		var user = firebase.auth().currentUser;
	    var latLng = new google.maps.LatLng(-7.9747434, 112.6232224);
	    var mapOptions = {
	      	center: latLng,
	      	zoom: 13,
	      	mapTypeControl: false,
	      	streetViewControl: false,
          	fullscreenControl: false,
      		mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

	    $scope.rfs = function(){
    		google.maps.event.trigger($scope.map, 'resize');	
	    }
		// icon wisata
	    var iconWisata = {
          	url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        };
	    //mengambil data latlong di firebase
	    var data_lat = "";
	    var data_long = "";
		firebase.database().ref('data_wisata/' + user.uid).orderByKey().once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
		      	data_lat = childSnapshot.val().lat;
		      	data_long = childSnapshot.val().long;
		      	data_nama = childSnapshot.val().nama;
		      	data_kategori = childSnapshot.val().kategori;
		      	data_alamat = childSnapshot.val().alamat;

    	      	var markerWisata = new google.maps.Marker({
        		    position: {lat: data_lat, lng: data_long},
            		map: $scope.map,
            		icon: iconWisata,
            		clickable: true
          		});
	        	markerWisata.info = new google.maps.InfoWindow({
	            	position: {lat: data_lat, lng: data_long},
	          		content: '<p><b>Name:</b> '+data_nama+'</p>'+
	          		'<p><b>Category:</b> '+data_kategori+'</p>'+
	          		'<p><b>Address:</b> '+data_alamat+'</p>'
	        	});
	        	google.maps.event.addListener(markerWisata, 'click', function() {
				    var marker_map = this.getMap();
				    this.info.open(marker_map);
				});
		  	});
		});
	    // map klik
	    var mapTmp = $scope.map;
	    var markerPilih = [];
	    mapTmp.addListener('click', function(e) {
			$scope.arr = 0;
			firebase.database().ref('data_wisata/').child(user.uid).on("value", function(snapshot) {
			  	var htg = snapshot.numChildren();
			  	if(htg == 0){
					$scope.arr = 0;
			  	}
			  	else{
					$scope.arr = htg++;
			  	}
			})
	    	var geocoder = new google.maps.Geocoder;
			var tmp = mapTmp.setCenter(e.latLng);
			var klikMap = mapTmp.getCenter(tmp);
			var dptLat = klikMap.lat();
			var dptLong = klikMap.lng();
			var dptLatLong = dptLat+","+dptLong; 
			// console.log("https://maps.googleapis.com/maps/api/streetview?size=400x400&location="+dptLatLong+"&fov=90&heading=235&pitch=10&key=AIzaSyDtqluglDv4yCebhs_eolgSPojS1U-iYA0");
			var LatLongStr = dptLatLong.split(',', 2);
       	 	var geoLatLong = {lat: parseFloat(LatLongStr[0]), lng: parseFloat(LatLongStr[1])};
       	 	$scope.smp = {};
			geocoder.geocode({'location': geoLatLong}, function(results, status) {
			    if (status === google.maps.GeocoderStatus.OK) {
			      	if (results[1]) {
						$scope.modal.show();
			        	document.getElementById('smp.lat').value = dptLat;
			        	document.getElementById('smp.long').value = dptLong;
			        	document.getElementById('smp.almt').value = results[0].formatted_address;
						$scope.cancel = function() {
						    $scope.modal.hide();
						};
						$scope.simpanLks = function() {
							firebase.database().ref('data_wisata/' + user.uid + '/' + $scope.arr).set({
								id: $scope.arr+1,
								lat: dptLat,
								long: dptLong,
								nama: $scope.smp.nama,
								kategori: $scope.smp.ktg,
								alamat: results[0].formatted_address
							});	
							var marker = new google.maps.Marker({
					          	position: e.latLng,
            					icon: iconWisata,
					          	map: mapTmp,
            					clickable: true
					        });
				        	marker.info = new google.maps.InfoWindow({
				            	position: e.latLng,
				          		content: '<p><b>'+$scope.smp.nama+'</b></p>'+
				          		'<p>'+results[0].formatted_address+'</p>'
				        	});
				        	google.maps.event.addListener(marker, 'click', function() {
							    var marker_map = this.getMap();
							    this.info.open(marker_map);
							});
					        // markerPilih.push(marker);
						    $scope.modal.hide();
						};
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
	    // cari lokasi
	    var input = document.getElementById('cari');
        var searchBox = new google.maps.places.SearchBox(input);
        mapTmp.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
        mapTmp.addListener('bounds_changed', function() {
          	searchBox.setBounds(mapTmp.getBounds());
        });
	    var autocomplete = new google.maps.places.Autocomplete(input, {
	        types: ["geocode"]
	    });
	    google.maps.event.addListener(autocomplete, 'place_changed', function (event) {
            var place = autocomplete.getPlace();
            if (place.geometry.viewport) {
                mapTmp.fitBounds(place.geometry.viewport);
            } else {
                mapTmp.setCenter(place.geometry.location);
                mapTmp.setZoom(17);
            }
      		var marker = new google.maps.Marker({
      			map: mapTmp,
        		animation: google.maps.Animation.DROP,
        		position: place.geometry.location
      		})
        });

	    // geolokasi
	    var controlDiv = document.createElement('div');

	    var firstChild = document.createElement('button');
	    firstChild.style.backgroundColor = '#fff';
	    firstChild.style.border = 'none';
	    firstChild.style.outline = 'none';
	    firstChild.style.width = '28px';
	    firstChild.style.height = '28px';
	    firstChild.style.borderRadius = '2px';
	    firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
	    firstChild.style.cursor = 'pointer';
	    firstChild.style.marginRight = '10px';
	    firstChild.style.padding = '0px';
	    firstChild.title = 'Your Location';
	    controlDiv.appendChild(firstChild);

	    var secondChild = document.createElement('div');
	    secondChild.style.margin = '5px';
	    secondChild.style.width = '18px';
	    secondChild.style.height = '18px';
	    secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
	    secondChild.style.backgroundSize = '180px 18px';
	    secondChild.style.backgroundPosition = '0px 0px';
	    secondChild.style.backgroundRepeat = 'no-repeat';
	    secondChild.id = 'you_location_img';
	    firstChild.appendChild(secondChild);

	    firstChild.addEventListener('click', function() {
	      	if (navigator.geolocation) {
	          	navigator.geolocation.getCurrentPosition(function(position) {
		        	var markerGeo = new google.maps.Marker({
		        		map: $scope.map,
				        animation: google.maps.Animation.DROP
		        	});
	            	var pos = {
	              		lat: position.coords.latitude,
	              		lng: position.coords.longitude
	            	};
	            	markerGeo.setPosition(pos);
	            	$scope.map.setCenter(pos);
	            	$scope.map.setZoom(17);
	          	}, function() {
	            	handleLocationError(true, markerGeo, $scope.map.getCenter());
	          	});
	        } 
	        else {
	          	handleLocationError(false, markerGeo, $scope.map.getCenter());
	        }
	    });

	    controlDiv.index = 1;
	    $scope.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
	}, function(error){
	    var geoErr = $ionicPopup.alert({
		    title: 'Error!',
		    template: 'Make sure your location setting actived!'
		});
	});
})

.controller('Ctrl_Data', function($scope, $http, $state, $firebaseAuth, $ionicPopup, $ionicModal) {
	$ionicModal.fromTemplateUrl('templates/edit_location.html', {
	    scope: $scope
	}).then(function(modal) {
	    $scope.modal = modal;
	});
	var user = firebase.auth().currentUser;
	var usersRef = firebase.database().ref('data_wisata/' + user.uid).on('value', function(snapshot) {
        $scope.wisataTmp = snapshot.val();
    });
	$scope.edt = {};
  	$scope.edit = function(id) {
		$scope.modal.show();
		firebase.database().ref('data_wisata/' + user.uid + '/' + id).on('value', function(snapshot) {
	    	document.getElementById('edt.lat').value = snapshot.val().long;
	    	document.getElementById('edt.long').value = snapshot.val().lat;
	    	document.getElementById('edt.nama').value = snapshot.val().nama;
	    	document.getElementById('edt.ktg').value = snapshot.val().kategori;
	    	document.getElementById('edt.almt').value = snapshot.val().alamat;
	    	document.getElementById('edt.id').value = snapshot.val().id;
	    });	
		$scope.cancel = function() {
		    $scope.modal.hide();
		};
		$scope.simpanEdit = function() {	
			firebase.database().ref('data_wisata/').child(user.uid + '/' + id).update({
				nama: $scope.edt.nama,
				kategori: $scope.edt.ktg
			});
		    $scope.modal.hide();
		};
  	};
  	$scope.hapus = function(id) {
    	firebase.database().ref('data_wisata/' + user.uid + '/' + id).remove();
  	};
})

.controller('Ctrl_Profile', function($scope, $http, $state, $ionicPopup, $firebaseAuth){
	var user = firebase.auth().currentUser;
	var usersRef = firebase.database().ref('users/' + user.uid).on('value', function(snapshot) {
        $scope.lgnNama = snapshot.val().nama;
        $scope.lgnEmail = snapshot.val().email;
        $scope.lgnFoto = snapshot.val().foto;
    });
	$scope.edt_prf = function(){
		$scope.edt = {};
		var myPopup  = $ionicPopup.show({
			title: '<b>Edit Profile Name</b>',
			template: '<div class="list"><label class="item item-input"><input ng-model="edt.nama" type="text" placeholder="New Profile Name"></label></div>',
		    scope: $scope,
		    buttons: [
		      { text: 'Cancel' },
		      {
		        text: '<b>Save</b>',
		        type: 'button-positive',
		        onTap: function(e) {
					var user = firebase.auth().currentUser;
					firebase.database().ref('users/').child(user.uid).update({
						nama: $scope.edt.nama
					});
		        }
		      }
		    ]
		})
	}
})
webpackJsonp([0],{

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\File\Imas\VoteKetuaPondok\src\pages\tabs\tabs.html"*/`<ion-tabs color="color2" tabsLayout="icon-start">\n  <ion-tab [root]="tab1Root" tabTitle="VOTING" tabIcon="md-megaphone"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="HASIL" tabIcon="md-pulse"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"E:\File\Imas\VoteKetuaPondok\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(navCtrl, afDB) {
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.ktgVote = "total";
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //total vote
        var tempArrayTtl = [];
        this.afDB.list('/total').snapshotChanges().subscribe(function (res) {
            res.forEach(function (ele) {
                tempArrayTtl.push(ele.payload.val());
            });
            _this.vote1 = tempArrayTtl[0];
            _this.vote2 = tempArrayTtl[1];
            _this.vote3 = tempArrayTtl[2];
            _this.vote4 = tempArrayTtl[3];
        });
        //perkamar vote
        // let tempArrayKmr:any = [];
        // this.afDB.list('/hasil').snapshotChanges().subscribe((res) => {
        // res.forEach((ele) => {
        // console.log(ele.payload.val())
        //     tempArrayKmr.push(ele.payload.val())
        // });
        //   console.log(tempArrayKmr.key)
        // })
        // let tmpKey:any = [];
        var tmpHsl = [];
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref("hasil").once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                tmpHsl.push({
                    'kmr': childSnapshot.key,
                    'calon1': childSnapshot.val().calon1,
                    'calon2': childSnapshot.val().calon2,
                    'calon3': childSnapshot.val().calon3,
                    'calon4': childSnapshot.val().calon4
                });
                // tmpKey.push(childSnapshot.key);
                // tmpHsl.push(childSnapshot.val());
                // this.hslKmr = childSnapshot.key;
                // this.hslCalon1 = childSnapshot.val().calon1;
                // this.hslCalon2 = childSnapshot.val().calon2;
                // this.hslCalon3 = childSnapshot.val().calon3;
                // this.hslCalon4 = childSnapshot.val().calon4;
                // console.log(childSnapshot.key);
                // console.log(childSnapshot.val());
            });
        });
        console.log(tmpHsl);
        // this.displayKey = tmpKey;
        this.displayHsl = tmpHsl;
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\File\Imas\VoteKetuaPondok\src\pages\about\about.html"*/`<ion-header>\n  <ion-navbar text-center>\n    <ion-title><b>Pondok Pesantren<br>Al-Jihad Surabaya</b></ion-title>\n  </ion-navbar>\n  <ion-segment [(ngModel)]="ktgVote">\n    <ion-segment-button value="total">Total</ion-segment-button>\n    <ion-segment-button value="kamar">Perkamar</ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="ktgVote">\n    <ion-list *ngSwitchCase="\'total\'">\n      <ion-grid padding>\n        <ion-row>\n          <ion-col col-6 col-md-4 col-xl-3 text-center>\n            <div class="contImg" [style.background-image]="\'url(assets/calon/calon1.jpeg)\'">\n            </div>\n            <ion-item no-lines text-center>\n              <ion-badge color="color1">{{vote1}} Voter</ion-badge>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-md-4 col-xl-3 text-center>\n            <div class="contImg" [style.background-image]="\'url(assets/calon/calon2.jpeg)\'">\n            </div>\n            <ion-item no-lines text-center>\n              <ion-badge color="color1">{{vote2}} Voter</ion-badge>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-md-4 col-xl-3 text-center>\n            <div class="contImg" [style.background-image]="\'url(assets/calon/calon3.jpeg)\'">\n            </div>\n            <ion-item no-lines text-center>\n              <ion-badge color="color1">{{vote3}} Voter</ion-badge>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-md-4 col-xl-3 text-center>\n            <div class="contImg" [style.background-image]="\'url(assets/calon/calon4.jpeg)\'">\n            </div>\n            <ion-item no-lines text-center>\n              <ion-badge color="color1">{{vote4}} Voter</ion-badge>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'kamar\'">\n      <ion-item-group *ngFor="let item of displayHsl">\n        <ion-item-divider color="light">\n          <b style="font-variant: all-petite-caps; font-size: 1.5rem;">kamar {{item.kmr}}</b>\n        </ion-item-divider>\n        <ion-item>\n          <b style="font-variant: all-petite-caps; font-size: 1.5rem;">Calon 1</b>\n          <ion-badge color="color1" item-end>{{item.calon1}} Voter</ion-badge>\n        </ion-item>\n        <ion-item>\n            <b style="font-variant: all-petite-caps; font-size: 1.5rem;">Calon 2</b>\n          <ion-badge color="color1" item-end>{{item.calon2}} Voter</ion-badge>\n        </ion-item>\n        <ion-item>\n            <b style="font-variant: all-petite-caps; font-size: 1.5rem;">Calon 3</b>\n          <ion-badge color="color1" item-end>{{item.calon3}} Voter</ion-badge>\n        </ion-item>\n        <ion-item>\n            <b style="font-variant: all-petite-caps; font-size: 1.5rem;">Calon 4</b>\n          <ion-badge color="color1" item-end>{{item.calon4}} Voter</ion-badge>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n  </div>\n</ion-content>\n`/*ion-inline-end:"E:\File\Imas\VoteKetuaPondok\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, afDB) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
    }
    HomePage.prototype.vote1 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Masukkan kode :',
            cssClass: 'alertKode',
            inputs: [
                {
                    name: 'kode',
                    placeholder: 'Kode'
                }
            ],
            buttons: [
                {
                    text: 'Batal',
                    role: 'cancel',
                    cssClass: 'alertBtnBtl'
                },
                {
                    text: 'Vote!',
                    cssClass: 'alertBtnCnf',
                    handler: function (data) {
                        var requestRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('kamar');
                        requestRef.orderByKey().equalTo(data.kode).once('value').then(function (snapshot) {
                            console.log(snapshot.child(data.kode).child("kmr").val());
                            if (snapshot.child(data.kode).child("vote").val() == null) {
                                // console.log("tidal ada")
                            }
                            else if (snapshot.child(data.kode).child("vote").val() != 0) {
                                // console.log("sudah voting")
                            }
                            else {
                                _this.afDB.list('/kamar').update(data.kode, { vote: 1 });
                                var querySatu = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('hasil/' + snapshot.child(data.kode).child("kmr").val() + '/calon1');
                                querySatu.transaction(function (currentVote) {
                                    return currentVote + 1;
                                });
                                var queryDua = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('total/calon1');
                                queryDua.transaction(function (currentVote) {
                                    return currentVote + 1;
                                });
                                // console.log("sukses voting")
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.vote2 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Masukkan kode :',
            cssClass: 'alertKode',
            inputs: [
                {
                    name: 'kode',
                    placeholder: 'Kode'
                }
            ],
            buttons: [
                {
                    text: 'Batal',
                    role: 'cancel',
                    cssClass: 'alertBtnBtl'
                },
                {
                    text: 'Vote!',
                    cssClass: 'alertBtnCnf',
                    handler: function (data) {
                        var requestRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('kamar');
                        requestRef.orderByKey().equalTo(data.kode).once('value').then(function (snapshot) {
                            if (snapshot.child(data.kode).child("vote").val() == null) {
                                // console.log("tidal ada")
                            }
                            else if (snapshot.child(data.kode).child("vote").val() != 0) {
                                // console.log("sudah voting")
                            }
                            else {
                                _this.afDB.list('/kamar').update(data.kode, { vote: 2 });
                                var querySatu = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('hasil/' + snapshot.child(data.kode).child("kmr").val() + '/calon2');
                                querySatu.transaction(function (currentVote) {
                                    return currentVote + 1;
                                });
                                var queryDua = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('total/calon2');
                                queryDua.transaction(function (currentVote) {
                                    return currentVote + 1;
                                });
                                // console.log("sukses voting")
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.vote3 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Masukkan kode :',
            cssClass: 'alertKode',
            inputs: [
                {
                    name: 'kode',
                    placeholder: 'Kode'
                }
            ],
            buttons: [
                {
                    text: 'Batal',
                    role: 'cancel',
                    cssClass: 'alertBtnBtl'
                },
                {
                    text: 'Vote!',
                    cssClass: 'alertBtnCnf',
                    handler: function (data) {
                        var requestRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('kamar');
                        requestRef.orderByKey().equalTo(data.kode).once('value').then(function (snapshot) {
                            if (snapshot.child(data.kode).child("vote").val() == null) {
                                // console.log("tidal ada")
                            }
                            else if (snapshot.child(data.kode).child("vote").val() != 0) {
                                // console.log("sudah voting")
                            }
                            else {
                                _this.afDB.list('/kamar').update(data.kode, { vote: 3 });
                                var querySatu = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('hasil/' + snapshot.child(data.kode).child("kmr").val() + '/calon3');
                                querySatu.transaction(function (currentVote) {
                                    return currentVote + 1;
                                });
                                var queryDua = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('total/calon3');
                                queryDua.transaction(function (currentVote) {
                                    return currentVote + 1;
                                });
                                // console.log("sukses voting")
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.vote4 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Masukkan kode :',
            cssClass: 'alertKode',
            inputs: [
                {
                    name: 'kode',
                    placeholder: 'Kode'
                }
            ],
            buttons: [
                {
                    text: 'Batal',
                    role: 'cancel',
                    cssClass: 'alertBtnBtl'
                },
                {
                    text: 'Vote!',
                    cssClass: 'alertBtnCnf',
                    handler: function (data) {
                        var requestRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('kamar');
                        requestRef.orderByKey().equalTo(data.kode).once('value').then(function (snapshot) {
                            if (snapshot.child(data.kode).child("vote").val() == null) {
                                // console.log("tidal ada")
                            }
                            else if (snapshot.child(data.kode).child("vote").val() != 0) {
                                // console.log("sudah voting")
                            }
                            else {
                                _this.afDB.list('/kamar').update(data.kode, { vote: 4 });
                                var querySatu = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('hasil/' + snapshot.child(data.kode).child("kmr").val() + '/calon4');
                                querySatu.transaction(function (currentVote) {
                                    return currentVote + 1;
                                });
                                var queryDua = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('total/calon4');
                                queryDua.transaction(function (currentVote) {
                                    return currentVote + 1;
                                });
                                // console.log("sukses voting")
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\File\Imas\VoteKetuaPondok\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar text-center>\n    <ion-title><b>Pondok Pesantren<br>Al-Jihad Surabaya</b></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 col-md-4 col-xl-3 text-center>\n        <div class="contImg" [style.background-image]="\'url(assets/calon/calon1.jpeg)\'">\n        </div>\n        <h6>Calon Ketua 1</h6>\n        <button ion-button small icon-end color="color1" class="btnVote" (click)="vote1()">\n          Vote  \n          <ion-icon name="md-megaphone"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 col-md-4 col-xl-3 text-center>\n        <div class="contImg" [style.background-image]="\'url(assets/calon/calon2.jpeg)\'">\n        </div>\n        <h6>Calon Ketua 2</h6>\n        <button ion-button small icon-end color="color1" class="btnVote" (click)="vote2()">\n          Vote  \n          <ion-icon name="md-megaphone"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 col-md-4 col-xl-3 text-center>\n        <div class="contImg" [style.background-image]="\'url(assets/calon/calon3.jpeg)\'">\n        </div>\n        <h6>Calon Ketua 3</h6>\n        <button ion-button small icon-end color="color1" class="btnVote" (click)="vote3()">\n          Vote  \n          <ion-icon name="md-megaphone"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 col-md-4 col-xl-3 text-center>\n        <div class="contImg" [style.background-image]="\'url(assets/calon/calon4.jpeg)\'">\n        </div>\n        <h6>Calon Ketua 4</h6>\n        <button ion-button small icon-end color="color1" class="btnVote" (click)="vote4()">\n          Vote  \n          <ion-icon name="md-megaphone"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"E:\File\Imas\VoteKetuaPondok\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(404);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire_database__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire_auth__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var firebaseConfig = {
    apiKey: "AIzaSyCvgu3KPw6xLxkIj5Pm8uVx7imWBPMKltc",
    authDomain: "vote-ca428.firebaseapp.com",
    databaseURL: "https://vote-ca428.firebaseio.com",
    projectId: "vote-ca428",
    storageBucket: "vote-ca428.appspot.com",
    messagingSenderId: "835587274887",
    appId: "1:835587274887:web:0d8af375d353767b"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_10__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_fire_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__angular_fire_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\File\Imas\VoteKetuaPondok\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"E:\File\Imas\VoteKetuaPondok\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map
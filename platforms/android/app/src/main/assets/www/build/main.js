webpackJsonp([0],{

/***/ 138:
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
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioBackgroundProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AudioBackgroundProvider = (function () {
    function AudioBackgroundProvider() {
    }
    AudioBackgroundProvider.prototype.loadAudio = function (tmp) {
        this._AUDIO = tmp;
        // this._AUDIO.oncanplaythrough = () => {
        this._AUDIO.play();
        this._AUDIO.volume = 0.5;
        this._AUDIO.loop = true;
        this.statAudio = 'play';
        // };
    };
    AudioBackgroundProvider.prototype.cekAudio = function () {
        if (this.statAudio == 'pause') {
            // console.log('pause');
            this.statAudio = 'pause';
            return Promise.resolve(this.statAudio);
        }
        else {
            // console.log('play');
            this.statAudio = 'play';
            return Promise.resolve(this.statAudio);
        }
    };
    AudioBackgroundProvider.prototype.pauseAudio = function () {
        this._AUDIO.pause();
        this.statAudio = 'pause';
    };
    AudioBackgroundProvider.prototype.playAudio = function () {
        this._AUDIO.play();
        this.statAudio = 'play';
    };
    AudioBackgroundProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AudioBackgroundProvider);
    return AudioBackgroundProvider;
}());

//# sourceMappingURL=audio-background.js.map

/***/ }),

/***/ 181:
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
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_menu_menu__ = __webpack_require__(247);
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
    function HomePage(navCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        //loading
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            showBackdrop: false,
            cssClass: 'my-loading-class'
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_menu_menu__["a" /* MenuPage */]);
        }, 5000);
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\home\home.html"*/`<ion-content padding>\n  <div class="headerApp">\n    <div class="boxLogo">\n      <img src="assets/imgs/unesa.png" class="lgApp">\n    </div>\n    <div class="boxJdl">\n      <p class="jdlApp">Petunjuk</p>\n    </div>\n    <div class="boxBtn">\n      <p class="pkaApp">PKA 2017</p>\n    </div>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 class="anm" text-center>\n        <img src="assets/imgs/anm.gif" class="anmCont">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 class="jdl" text-center>\n        <p class="jdlCont">ChemOnDro LARI "Laju Reaksi"</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_petunjuk_petunjuk__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tujuan_tujuan__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_materi_materi__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_praktikum_praktikum__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_evaluasi_evaluasi__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profil_profil__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MenuPage = (function () {
    function MenuPage(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.onSound = true;
        this.offSound = false;
        //private button
        this.pmbBool = true;
        this.mtrBool = true;
        this.prkBool = true;
        this.evlBool = true;
        this.prfBool = true;
        this.pmbImg = "assets/imgs/lock.png";
        this.mtrImg = "assets/imgs/lock.png";
        this.prkImg = "assets/imgs/lock.png";
        this.evlImg = "assets/imgs/lock.png";
        this.prfImg = "assets/imgs/lock.png";
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
            var alert = _this.alertCtrl.create({
                message: 'Keluar Aplikasi?',
                buttons: [
                    {
                        text: 'BATAL',
                        role: 'cancel',
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            _this.platform.exitApp();
                        }
                    }
                ]
            });
            alert.present();
        }, 2);
    }
    MenuPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    MenuPage.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    MenuPage.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    MenuPage.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    MenuPage.prototype.petunjuk = function () {
        this.pmbBool = false;
        this.pmbImg = "assets/imgs/unlock.png";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_petunjuk_petunjuk__["a" /* PetunjukPage */]);
    };
    MenuPage.prototype.tujuan = function () {
        this.mtrBool = false;
        this.mtrImg = "assets/imgs/unlock.png";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_tujuan_tujuan__["a" /* TujuanPage */]);
    };
    MenuPage.prototype.materi = function () {
        this.prkBool = false;
        this.prkImg = "assets/imgs/unlock.png";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_materi_materi__["a" /* MateriPage */]);
    };
    MenuPage.prototype.praktikum = function () {
        this.evlBool = false;
        this.evlImg = "assets/imgs/unlock.png";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_praktikum_praktikum__["a" /* PraktikumPage */]);
    };
    MenuPage.prototype.evaluasi = function () {
        this.prfBool = false;
        this.prfImg = "assets/imgs/unlock.png";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_evaluasi_evaluasi__["a" /* EvaluasiPage */]);
    };
    MenuPage.prototype.profil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_profil_profil__["a" /* ProfilPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\menu\menu.html"*/`<ion-content padding>\n  <div class="headerApp">\n    <div class="boxLogo">\n      <img src="assets/imgs/unesa.png" class="lgApp">\n    </div>\n    <div class="boxJdl">\n      <p class="jdlApp">ChemOnDro LARI "Laju Reaksi"</p>\n    </div>\n    <div class="boxBtn">\n      <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n      <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n      <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n    </div>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 class="menu1" text-center>\n        <button ion-button color="peach" (click)="petunjuk()">\n          <p class="btnText">Petunjuk</p>\n          &nbsp;&nbsp;\n          <img src="assets/imgs/unlock.png" class="icnBtn">\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3 class="menu2" text-center>\n        <button ion-button block color="peach" (click)="tujuan()" [disabled]="pmbBool">\n          <p class="btnText">Tujuan<br>Pembelajaran</p>\n          &nbsp;&nbsp;\n          <img [src]="pmbImg" class="icnBtn">\n        </button>\n      </ion-col>\n      <ion-col col-3 class="menu2" text-center>\n        <button ion-button block color="peach" (click)="materi()" [disabled]="mtrBool">\n          <p class="btnText">Materi</p>\n          &nbsp;&nbsp;\n          <img [src]="mtrImg" class="icnBtn">\n        </button>\n      </ion-col>\n      <ion-col col-3 class="menu2" text-center>\n        <button ion-button block color="peach" (click)="praktikum()" [disabled]="prkBool">\n          <p class="btnText">Praktikum</p>\n          &nbsp;&nbsp;\n          <img [src]="prkImg" class="icnBtn">\n        </button>\n      </ion-col>\n      <ion-col col-3 class="menu2" text-center>\n        <button ion-button block color="peach" (click)="evaluasi()" [disabled]="evlBool">\n          <p class="btnText">Evaluasi</p>\n          &nbsp;&nbsp;\n          <img [src]="evlImg" class="icnBtn">\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 class="menu3" text-center>\n        <button ion-button color="peach" (click)="profil()" [disabled]="prfBool">\n          <p class="btnText">Profil</p>\n          &nbsp;&nbsp;\n          <img [src]="prfImg" class="icnBtn">\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetunjukPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetunjukPage = (function () {
    function PetunjukPage(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    PetunjukPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    PetunjukPage.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    PetunjukPage.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    PetunjukPage.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    PetunjukPage.prototype.menu = function () {
        this.navCtrl.pop();
    };
    PetunjukPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-petunjuk',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\petunjuk\petunjuk.html"*/`<ion-content padding>\n    <div class="headerApp">\n        <div class="boxLogo">\n            <img src="assets/imgs/unesa.png" class="lgApp">\n        </div>\n        <div class="boxJdl">\n            <p class="jdlApp">PETUNJUK</p>\n        </div>\n        <div class="boxBtn">\n            <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n            <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n            <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n        </div>\n    </div>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 class="cont">\n                <!-- <div class="isi"> -->\n                    <ion-row>\n                        <ion-col col-12 class="dtlPetunjuk">\n                            <h6>\n                                <img src="assets/imgs/speaker.png" class="icnBtn">\n                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                Untuk non/mengaktifkan volume suara aplikasi.\n                            </h6>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-12 class="dtlPetunjuk">\n                            <h6>\n                                <img src="assets/imgs/power-off.png" class="icnBtn">\n                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                Untuk keluar dari aplikasi.\n                            </h6>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-12 class="dtlPetunjuk">\n                            <h6>\n                                <img src="assets/imgs/home.png" class="icnBtn">\n                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                Untuk kembali ke slide menu utama.\n                            </h6>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-12 class="dtlPetunjuk">\n                            <h6>\n                                <img src="assets/imgs/back.png" class="icnBtn">\n                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                Untuk kembali ke slide yang sebelumnya.\n                            </h6>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-12 class="dtlPetunjuk">\n                            <h6>\n                                <img src="assets/imgs/next.png" class="icnBtn">\n                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                Untuk menuju ke slide yang selanjutnya.\n                            </h6>\n                        </ion-col>\n                    </ion-row>\n                    <!-- <ion-row>\n                        <ion-col> -->\n                            <!-- <h6 style="text-align: end; margin-right: 15px; margin-bottom: 1.5rem;"> -->\n                            <!-- <img src="assets/imgs/home.png" class="icnBtnFooter" (click)="menu()">\n                        </ion-col>\n                    </ion-row> -->\n                <!-- </div> -->\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <img src="assets/imgs/home.png" class="icnBtnFooter" (click)="menu()">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\petunjuk\petunjuk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], PetunjukPage);
    return PetunjukPage;
}());

//# sourceMappingURL=petunjuk.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TujuanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TujuanPage = (function () {
    function TujuanPage(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.isiPertama = false;
        this.isiKedua = true;
        this.isiKetiga = true;
        this.backPertama = true;
        this.backKedua = true;
        this.tjnKedua = false;
        this.tjnKetiga = true;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    TujuanPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    TujuanPage.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    TujuanPage.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    TujuanPage.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    TujuanPage.prototype.satu = function () {
        this.isiPertama = false;
        this.isiKedua = true;
        this.isiKetiga = true;
        this.backPertama = true;
        this.backKedua = true;
        this.tjnKedua = false;
        this.tjnKetiga = true;
    };
    TujuanPage.prototype.dua = function () {
        this.isiPertama = true;
        this.isiKedua = false;
        this.isiKetiga = true;
        this.backPertama = false;
        this.backKedua = true;
        this.tjnKedua = true;
        this.tjnKetiga = false;
    };
    TujuanPage.prototype.tiga = function () {
        this.isiPertama = true;
        this.isiKedua = true;
        this.isiKetiga = false;
        this.backPertama = true;
        this.backKedua = false;
        this.tjnKedua = true;
        this.tjnKetiga = true;
    };
    TujuanPage.prototype.menu = function () {
        this.navCtrl.pop();
    };
    TujuanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tujuan',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\tujuan\tujuan.html"*/`<ion-content padding>\n    <div class="headerApp">\n        <div class="boxLogo">\n            <img src="assets/imgs/unesa.png" class="lgApp">\n        </div>\n        <div class="boxJdl">\n            <p class="jdlApp">TUJUAN PEMBELAJARAN</p>\n        </div>\n        <div class="boxBtn">\n            <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n            <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n            <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n        </div>\n    </div>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 class="cont">\n                <!-- <div class="isi" [class.hide]="isiPertama"> -->\n                    <ion-row [class.hide]="isiPertama">\n                        <ion-col col-12>\n                            <h6>\n                                <b>Kompetensi Inti :</b><br><br>\n                                Memahami, menerapkan, menganalisa dan mengevaluasi pengetahuan faktual, \n                                konseptual, prosedural dan metakognitif berdasarkan rasa ingin tahunya \n                                tentang ilmu pengetahuan, teknologi, seni, budaya dan humaniora dengan \n                                wawasan kemanusiaan, kebangsaan, kenegaraan dan peradaban terkait penyebab \n                                fenomena dan kejadian, serta menerapkan pengetahuan prosedural pada bidang \n                                kajian yang spesifik sesuai dengan bakat dan minatnya untuk memecahkan masalah.\n                            </h6>\n                        </ion-col>\n                    </ion-row>\n                <!-- </div> -->\n                <!-- <div class="isi" [class.hide]="isiKedua"> -->\n                    <ion-row [class.hide]="isiKedua">\n                        <ion-col col-12>\n                            <ion-row>\n                                <ion-col col-12>\n                                    <h6><b>Kompetensi Dasar :</b></h6>\n                                </ion-col>    \n                            </ion-row>\n                            <ion-row>\n                                <ion-col col-1>\n                                    <h6 style="font-size: 1.5rem;">1.</h6>\n                                </ion-col>    \n                                <ion-col col-11>\n                                    <h6 style="font-size: 1.5rem;">Memahami teori tumbukan (tabrakan) untuk menjelaskan reaksi kimia.</h6>\n                                </ion-col>    \n                            </ion-row>\n                            <ion-row>\n                                <ion-col col-1>\n                                    <h6 style="font-size: 1.5rem;">2.</h6>\n                                </ion-col>    \n                                <ion-col col-11>\n                                    <h6 style="font-size: 1.5rem;">Menganalisis faktor-faktor yang mempengaruhi laju reaksi dan menentukan \n                                        orde reaksi berdasarkan data hasil percobaan.</h6>\n                                </ion-col>    \n                            </ion-row>\n                            <ion-row>\n                                <ion-col col-1>\n                                    <h6 style="font-size: 1.5rem;">3.</h6>\n                                </ion-col>    \n                                <ion-col col-11>\n                                    <h6 style="font-size: 1.5rem;">Menyajikan hasil pemahaman terhadap teori tumbukan (tabrakan) untuk \n                                        menjelaskan reaksi kimia.</h6>\n                                </ion-col>    \n                            </ion-row>\n                            <ion-row>\n                                <ion-col col-1>\n                                    <h6 style="font-size: 1.5rem;">4.</h6>\n                                </ion-col>    \n                                <ion-col col-11>\n                                    <h6 style="font-size: 1.5rem;">Merancang, melakukan dan menyimpulkan serta menyajikan hasil percobaan \n                                        faktor-faktor yang mempengaruhi laju reaksi dan orde reaksi.</h6>\n                                </ion-col>    \n                            </ion-row>\n                            <!-- <h6>\n                                <b>Kompetensi Dasar :</b><br><br>\n                                Memahami teori tumbukan (tabrakan) untuk menjelaskan reaksi kimia.<br>\n                                Menganalisis faktor-faktor yang mempengaruhi laju reaksi dan menentukan \n                                orde reaksi berdasarkan data hasil percobaan.<br>\n                                Menyajikan hasil pemahaman terhadap teori tumbukan (tabrakan) untuk \n                                menjelaskan reaksi kimia.<br>\n                                Merancang, melakukan dan menyimpulkan serta menyajikan hasil percobaan \n                                faktor-faktor yang mempengaruhi laju reaksi dan orde reaksi.\n                            </h6> -->\n                        </ion-col>\n                    </ion-row>\n                <!-- </div> -->\n                <!-- <div class="isi" [class.hide]="isiKetiga"> -->\n                    <ion-row [class.hide]="isiKetiga">\n                        <ion-col col-12>\n                            <ion-row>\n                                <ion-col col-12>\n                                    <h6><b>Tujuan Pembelajaran :</b></h6>\n                                </ion-col>    \n                            </ion-row>\n                            <ion-row>\n                                <ion-col>\n                                    <h6>1.</h6>\n                                </ion-col>    \n                                <ion-col col-11>\n                                    <h6>Siswa dapat menganalisis hubungan teori tumbuhan dengan faktor-faktor \n                                        yang mempengaruhi laju reaksi.</h6>\n                                </ion-col>    \n                            </ion-row>\n                            <ion-row>\n                                <ion-col col-1>\n                                    <h6>2.</h6>\n                                </ion-col>    \n                                <ion-col col-11>\n                                    <h6>Siswa dapat menjelaskan pengaruh luas permukaan bidang sentuh terhadap \n                                        laju reaksi melalui percobaan.</h6>\n                                </ion-col>    \n                            </ion-row>\n                            <!-- <h6>\n                                <b>Tujuan Pembelajaran :</b><br><br>\n                                Siswa dapat menganalisis hubungan teori tumbuhan dengan faktor-faktor \n                                yang mempengaruhi laju reaksi.<br>\n                                Siswa dapat menjelaskan pengaruh luas permukaan bidang sentuh terhadap \n                                laju reaksi melalui percobaan.\n                            </h6> -->\n                        </ion-col>\n                    </ion-row>\n                <!-- </div> -->\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6>\n                <img src="assets/imgs/back.png" class="icnBtnFooter1" [class.hide]="backPertama" (click)="satu()">\n                <img src="assets/imgs/back.png" class="icnBtnFooter1" [class.hide]="backKedua" (click)="dua()">\n                <img src="assets/imgs/next.png" class="icnBtnFooter2" [class.hide]="tjnKedua" (click)="dua()">\n                <img src="assets/imgs/next.png" class="icnBtnFooter2" [class.hide]="tjnKetiga" (click)="tiga()">\n            </ion-col>\n            <ion-col col-6>\n                <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\tujuan\tujuan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], TujuanPage);
    return TujuanPage;
}());

//# sourceMappingURL=tujuan.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_mindmap_mindmap__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_submateri_submateri__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MateriPage = (function () {
    function MateriPage(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    MateriPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    MateriPage.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    MateriPage.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    MateriPage.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    MateriPage.prototype.mindMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_mindmap_mindmap__["a" /* MindmapPage */]);
    };
    MateriPage.prototype.subMateri = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_submateri_submateri__["a" /* SubmateriPage */]);
    };
    MateriPage.prototype.menu = function () {
        this.navCtrl.pop();
    };
    MateriPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-materi',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\materi\materi.html"*/`<ion-content padding>\n  <div class="headerApp">\n    <div class="boxLogo">\n      <img src="assets/imgs/unesa.png" class="lgApp">\n    </div>\n    <div class="boxJdl">\n      <p class="jdlApp">MATERI</p>\n    </div>\n    <div class="boxBtn">\n      <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n      <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n      <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n    </div>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 class="menuMateri" text-end>\n        <img src="assets/imgs/mm.png" class="btnImg" (click)="mindMap()">\n      </ion-col>\n      <ion-col col-6 class="menuMateri">\n        <img src="assets/imgs/sm.png" class="btnImg" (click)="subMateri()">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <img src="assets/imgs/home.png" class="icnBtnFooter" (click)="menu()">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\materi\materi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], MateriPage);
    return MateriPage;
}());

//# sourceMappingURL=materi.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MindmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MindmapPage = (function () {
    function MindmapPage(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    MindmapPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    MindmapPage.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    MindmapPage.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    MindmapPage.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    MindmapPage.prototype.materi = function () {
        this.navCtrl.pop();
    };
    MindmapPage.prototype.menu = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
    };
    MindmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mindmap',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\mindmap\mindmap.html"*/`<ion-content padding>\n  <div class="headerApp">\n    <div class="boxLogo">\n      <img src="assets/imgs/unesa.png" class="lgApp">\n    </div>\n    <div class="boxJdl">\n      <p class="jdlApp">MATERI - MIND MAP</p>\n    </div>\n    <div class="boxBtn">\n      <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n      <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n      <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n    </div>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 class="menuMateri" text-center>\n        <img src="assets/imgs/mindMap.png" class="mmImg" imageViewer>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <img src="assets/imgs/back.png" class="icnBtnFooter1" (click)="materi()">\n      </ion-col>\n      <ion-col col-6>\n        <img src="assets/imgs/home.png" class="icnBtnFooter2" (click)="menu()">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\mindmap\mindmap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], MindmapPage);
    return MindmapPage;
}());

//# sourceMappingURL=mindmap.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmateriPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_sm1_sm1__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_sm2_sm2__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sm3_sm3__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sm4_sm4__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sm5_sm5__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SubmateriPage = (function () {
    function SubmateriPage(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    SubmateriPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    SubmateriPage.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    SubmateriPage.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    SubmateriPage.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    SubmateriPage.prototype.sub1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_sm1_sm1__["a" /* Sm1Page */]);
    };
    SubmateriPage.prototype.sub2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_sm2_sm2__["a" /* Sm2Page */]);
    };
    SubmateriPage.prototype.sub3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_sm3_sm3__["a" /* Sm3Page */]);
    };
    SubmateriPage.prototype.sub4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_sm4_sm4__["a" /* Sm4Page */]);
    };
    SubmateriPage.prototype.sub5 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_sm5_sm5__["a" /* Sm5Page */]);
    };
    SubmateriPage.prototype.materi = function () {
        this.navCtrl.pop();
    };
    SubmateriPage.prototype.menu = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
    };
    SubmateriPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-submateri',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\submateri\submateri.html"*/`<ion-content padding>\n  <div class="headerApp">\n    <div class="boxLogo">\n      <img src="assets/imgs/unesa.png" class="lgApp">\n    </div>\n    <div class="boxJdl">\n      <p class="jdlApp">MATERI - SUB MATERI</p>\n    </div>\n    <div class="boxBtn">\n      <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n      <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n      <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n    </div>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 class="menuMateri" text-center>\n        <!-- <div class="isi">\n          <ion-row>\n            <ion-col col-12 text-center> -->\n              <img src="assets/imgs/sub1.png" class="smImg1" (click)="sub1()">\n              <img src="assets/imgs/sub2.png" class="smImg2" (click)="sub2()">\n              <img src="assets/imgs/sub3.png" class="smImg3" (click)="sub3()">\n              <img src="assets/imgs/sub4.png" class="smImg4" (click)="sub4()">\n              <img src="assets/imgs/sub5.png" class="smImg5" (click)="sub5()">\n            <!-- </ion-col>\n          </ion-row>\n        </div> -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <img src="assets/imgs/back.png" class="icnBtnFooter1" (click)="materi()">\n      </ion-col>\n      <ion-col col-6>\n        <img src="assets/imgs/home.png" class="icnBtnFooter2" (click)="menu()">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\submateri\submateri.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], SubmateriPage);
    return SubmateriPage;
}());

//# sourceMappingURL=submateri.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Sm1Page = (function () {
    function Sm1Page(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.isiPertama = false;
        this.isiKedua = true;
        this.isiKetiga = true;
        this.isiKeempat = true;
        this.backPertama = true;
        this.backKedua = true;
        this.backKetiga = true;
        this.tjnKedua = false;
        this.tjnKetiga = true;
        this.tjnKeempat = true;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    Sm1Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    Sm1Page.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    Sm1Page.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    Sm1Page.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    Sm1Page.prototype.satu = function () {
        this.isiPertama = false;
        this.isiKedua = true;
        this.isiKetiga = true;
        this.isiKeempat = true;
        this.backPertama = true;
        this.backKedua = true;
        this.backKetiga = true;
        this.tjnKedua = false;
        this.tjnKetiga = true;
        this.tjnKeempat = true;
    };
    Sm1Page.prototype.dua = function () {
        this.isiPertama = true;
        this.isiKedua = false;
        this.isiKetiga = true;
        this.isiKeempat = true;
        this.backPertama = false;
        this.backKedua = true;
        this.backKetiga = true;
        this.tjnKedua = true;
        this.tjnKetiga = false;
        this.tjnKeempat = true;
    };
    Sm1Page.prototype.tiga = function () {
        this.isiPertama = true;
        this.isiKedua = true;
        this.isiKetiga = false;
        this.isiKeempat = true;
        this.backPertama = true;
        this.backKedua = false;
        this.backKetiga = true;
        this.tjnKedua = true;
        this.tjnKetiga = true;
        this.tjnKeempat = false;
    };
    Sm1Page.prototype.empat = function () {
        this.isiPertama = true;
        this.isiKedua = true;
        this.isiKetiga = true;
        this.isiKeempat = false;
        this.backPertama = true;
        this.backKedua = true;
        this.backKetiga = false;
        this.tjnKedua = true;
        this.tjnKetiga = true;
        this.tjnKeempat = true;
    };
    Sm1Page.prototype.subMateri = function () {
        this.navCtrl.pop();
    };
    Sm1Page.prototype.menu = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 4));
    };
    Sm1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sm1',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\sm1\sm1.html"*/`<ion-content padding>\n  <div class="headerApp">\n    <div class="boxLogo">\n      <img src="assets/imgs/unesa.png" class="lgApp">\n    </div>\n    <div class="boxJdl">\n      <p class="jdlApp">MATERI - SUB MATERI</p>\n    </div>\n    <div class="boxBtn">\n      <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n      <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n      <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n    </div>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col class="cont">\n        <ion-slides>\n          <ion-slide>\n            <img src="assets/imgs/pengertian/pengertian1.png" style="max-width: 100% !important;">\n          </ion-slide>\n          <ion-slide>\n            <img src="assets/imgs/pengertian/pengertian2.png" style="max-width: 85% !important;">\n          </ion-slide>\n          <ion-slide>\n            <img src="assets/imgs/pengertian/pengertian3.png" style="max-width: 90% !important;">\n          </ion-slide>\n          <ion-slide>\n            <img src="assets/imgs/pengertian/pengertian4.png" style="max-width: 70% !important;">\n          </ion-slide>\n        </ion-slides>\n        <!-- <ion-row [class.hide]="isiPertama">\n          <ion-col col-12 text-center>\n            <img src="assets/imgs/pengertian/pengertian1.png" class="p1Img">\n          </ion-col>\n        </ion-row>\n        <ion-row [class.hide]="isiKedua">\n          <ion-col col-12 text-center>\n            <img src="assets/imgs/pengertian/pengertian2.png" class="p2Img">\n          </ion-col>\n        </ion-row>\n        <ion-row [class.hide]="isiKetiga">\n          <ion-col col-12 text-center>\n            <img src="assets/imgs/pengertian/pengertian3.png" class="p3Img">\n          </ion-col>\n        </ion-row>\n        <ion-row [class.hide]="isiKeempat">\n          <ion-col col-12 text-center>\n            <img src="assets/imgs/pengertian/pengertian4.png" class="p4Img">\n          </ion-col>\n        </ion-row> -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <img src="assets/imgs/back.png" class="icnBtnFooter1" (click)="subMateri()">\n        <!-- <img src="assets/imgs/back.png" class="icnBtnFooter1" [class.hide]="backPertama" (click)="satu()">\n        <img src="assets/imgs/back.png" class="icnBtnFooter1" [class.hide]="backKedua" (click)="dua()">\n        <img src="assets/imgs/back.png" class="icnBtnFooter1" [class.hide]="backKetiga" (click)="tiga()">\n        <img src="assets/imgs/next.png" class="icnBtnFooter2" [class.hide]="tjnKedua" (click)="dua()">\n        <img src="assets/imgs/next.png" class="icnBtnFooter2" [class.hide]="tjnKetiga" (click)="tiga()">\n        <img src="assets/imgs/next.png" class="icnBtnFooter2" [class.hide]="tjnKeempat" (click)="empat()"> -->\n      </ion-col>\n      <ion-col col-6>\n        <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\sm1\sm1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], Sm1Page);
    return Sm1Page;
}());

//# sourceMappingURL=sm1.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Sm2Page = (function () {
    function Sm2Page(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    Sm2Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    Sm2Page.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    Sm2Page.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    Sm2Page.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    Sm2Page.prototype.subMateri = function () {
        this.navCtrl.pop();
    };
    Sm2Page.prototype.menu = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 4));
    };
    Sm2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sm2',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\sm2\sm2.html"*/`<ion-content padding>\n    <div class="headerApp">\n      <div class="boxLogo">\n        <img src="assets/imgs/unesa.png" class="lgApp">\n      </div>\n      <div class="boxJdl">\n        <p class="jdlApp">MATERI - SUB MATERI</p>\n      </div>\n      <div class="boxBtn">\n          <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n          <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n        <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n      </div>\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col class="cont">\n          <ion-slides>\n            <ion-slide>\n              <img src="assets/imgs/orde/orde1.png" style="max-width: 70% !important;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/orde/orde2.png" style="max-width: 75% !important;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/orde/orde3.png" style="max-width: 60% !important;">\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <img src="assets/imgs/back.png" class="icnBtnFooter1" (click)="subMateri()">\n        </ion-col>\n        <ion-col col-6>\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\sm2\sm2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], Sm2Page);
    return Sm2Page;
}());

//# sourceMappingURL=sm2.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Sm3Page = (function () {
    function Sm3Page(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    Sm3Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    Sm3Page.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    Sm3Page.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    Sm3Page.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    Sm3Page.prototype.subMateri = function () {
        this.navCtrl.pop();
    };
    Sm3Page.prototype.menu = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 4));
    };
    Sm3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sm3',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\sm3\sm3.html"*/`<ion-content padding>\n    <div class="headerApp">\n      <div class="boxLogo">\n        <img src="assets/imgs/unesa.png" class="lgApp">\n      </div>\n      <div class="boxJdl">\n        <p class="jdlApp">MATERI - SUB MATERI</p>\n      </div>\n      <div class="boxBtn">\n        <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n        <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n        <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n      </div>\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col class="cont">\n          <ion-slides>\n            <ion-slide>\n              <img src="assets/imgs/teori/teori1.png" style="max-width: 95% !important;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/teori/teori2.png" style="max-width: 70% !important;">\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <img src="assets/imgs/back.png" class="icnBtnFooter1" (click)="subMateri()">\n        </ion-col>\n        <ion-col col-6>\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\sm3\sm3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], Sm3Page);
    return Sm3Page;
}());

//# sourceMappingURL=sm3.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Sm4Page = (function () {
    function Sm4Page(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    Sm4Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    Sm4Page.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    Sm4Page.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    Sm4Page.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    Sm4Page.prototype.subMateri = function () {
        this.navCtrl.pop();
    };
    Sm4Page.prototype.menu = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 4));
    };
    Sm4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sm4',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\sm4\sm4.html"*/`<ion-content padding>\n    <div class="headerApp">\n      <div class="boxLogo">\n        <img src="assets/imgs/unesa.png" class="lgApp">\n      </div>\n      <div class="boxJdl">\n        <p class="jdlApp">MATERI - SUB MATERI</p>\n      </div>\n      <div class="boxBtn">\n          <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n          <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n        <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n      </div>\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col class="cont">\n          <ion-slides>\n            <ion-slide>\n              <img src="assets/imgs/faktor/faktor1.png" style="max-width: 70% !important;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/faktor/faktor2.png" style="max-width: 100% !important;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/faktor/faktor3.png" style="max-width: 75% !important;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/faktor/faktor4.png" style="max-width: 80% !important;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/faktor/faktor5.png" style="max-width: 75% !important;">\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <img src="assets/imgs/back.png" class="icnBtnFooter1" (click)="subMateri()">\n        </ion-col>\n        <ion-col col-6>\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\sm4\sm4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], Sm4Page);
    return Sm4Page;
}());

//# sourceMappingURL=sm4.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Sm5Page = (function () {
    function Sm5Page(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    Sm5Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    Sm5Page.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    Sm5Page.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    Sm5Page.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    Sm5Page.prototype.subMateri = function () {
        this.navCtrl.pop();
    };
    Sm5Page.prototype.menu = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 4));
    };
    Sm5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sm5',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\sm5\sm5.html"*/`<ion-content padding>\n    <div class="headerApp">\n      <div class="boxLogo">\n        <img src="assets/imgs/unesa.png" class="lgApp">\n      </div>\n      <div class="boxJdl">\n        <p class="jdlApp">MATERI - SUB MATERI</p>\n      </div>\n      <div class="boxBtn">\n        <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n        <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n        <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n      </div>\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col class="cont">\n          <ion-slides>\n            <ion-slide>\n              <img src="assets/imgs/laju/laju1.png" style="max-width: 90% !important;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/laju/laju2.png" style="max-width: 80% !important;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/laju/laju3.png" style="max-width: 100% !important;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/laju/laju4.png" style="max-width: 80% !important;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/laju/laju5.png" style="max-width: 75% !important;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/laju/laju6.png" style="max-width: 100% !important;">\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <img src="assets/imgs/back.png" class="icnBtnFooter1" (click)="subMateri()">\n        </ion-col>\n        <ion-col col-6>\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\sm5\sm5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], Sm5Page);
    return Sm5Page;
}());

//# sourceMappingURL=sm5.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PraktikumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PraktikumPage = (function () {
    function PraktikumPage(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.prkPertama = false;
        this.prkKedua = true;
        this.prkKetiga = true;
        this.prkKeempat = true;
        this.prkKelima = true;
        this.prkKeenam = true;
        this.prkKetuju = true;
        this.videoAlat = true;
        this.videoBahan = true;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    PraktikumPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    PraktikumPage.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    PraktikumPage.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    PraktikumPage.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    PraktikumPage.prototype.prk1 = function () {
        this.prkPertama = false;
        this.prkKedua = true;
        this.prkKetiga = true;
        this.prkKeempat = true;
        this.prkKelima = true;
        this.prkKeenam = true;
        this.prkKetuju = true;
        this.videoAlat = true;
        this.videoBahan = true;
        this.prosedurVideo.nativeElement.pause();
        this.alatVideo.nativeElement.pause();
        this.bahanVideo.nativeElement.pause();
    };
    PraktikumPage.prototype.prk2 = function () {
        this.prkPertama = true;
        this.prkKedua = false;
        this.prkKetiga = true;
        this.prkKeempat = true;
        this.prkKelima = true;
        this.prkKeenam = true;
        this.prkKetuju = true;
        this.videoAlat = true;
        this.videoBahan = true;
        this.prosedurVideo.nativeElement.pause();
        this.alatVideo.nativeElement.pause();
        this.bahanVideo.nativeElement.pause();
    };
    PraktikumPage.prototype.prk3 = function () {
        this.prkPertama = true;
        this.prkKedua = true;
        this.prkKetiga = false;
        this.prkKeempat = true;
        this.prkKelima = true;
        this.prkKeenam = true;
        this.prkKetuju = true;
        this.videoAlat = true;
        this.videoBahan = true;
        this.prosedurVideo.nativeElement.pause();
        this.alatVideo.nativeElement.pause();
        this.bahanVideo.nativeElement.pause();
    };
    PraktikumPage.prototype.prk4 = function () {
        this.prkPertama = true;
        this.prkKedua = true;
        this.prkKetiga = true;
        this.prkKeempat = false;
        this.prkKelima = true;
        this.prkKeenam = true;
        this.prkKetuju = true;
        this.videoAlat = true;
        this.videoBahan = true;
        this.alatVideo.nativeElement.pause();
        this.bahanVideo.nativeElement.pause();
    };
    PraktikumPage.prototype.prk5 = function () {
        this.prkPertama = true;
        this.prkKedua = true;
        this.prkKetiga = true;
        this.prkKeempat = true;
        this.prkKelima = false;
        this.prkKeenam = true;
        this.prkKetuju = true;
        this.videoAlat = true;
        this.videoBahan = true;
        this.prosedurVideo.nativeElement.pause();
        this.alatVideo.nativeElement.pause();
        this.bahanVideo.nativeElement.pause();
    };
    PraktikumPage.prototype.prk6 = function () {
        this.prkPertama = true;
        this.prkKedua = true;
        this.prkKetiga = true;
        this.prkKeempat = true;
        this.prkKelima = true;
        this.prkKeenam = false;
        this.prkKetuju = true;
        this.videoAlat = true;
        this.videoBahan = true;
        this.prosedurVideo.nativeElement.pause();
        this.alatVideo.nativeElement.pause();
        this.bahanVideo.nativeElement.pause();
    };
    PraktikumPage.prototype.prk7 = function () {
        this.prkPertama = true;
        this.prkKedua = true;
        this.prkKetiga = true;
        this.prkKeempat = true;
        this.prkKelima = true;
        this.prkKeenam = true;
        this.prkKetuju = false;
        this.videoAlat = true;
        this.videoBahan = true;
        this.prosedurVideo.nativeElement.pause();
        this.alatVideo.nativeElement.pause();
        this.bahanVideo.nativeElement.pause();
    };
    PraktikumPage.prototype.lhtVideoAlat = function () {
        this.prkPertama = true;
        this.prkKedua = true;
        this.prkKetiga = true;
        this.prkKeempat = true;
        this.prkKelima = true;
        this.prkKeenam = true;
        this.prkKetuju = true;
        this.videoAlat = false;
        this.videoBahan = true;
    };
    PraktikumPage.prototype.lhtVideoBahan = function () {
        this.prkPertama = true;
        this.prkKedua = true;
        this.prkKetiga = true;
        this.prkKeempat = true;
        this.prkKelima = true;
        this.prkKeenam = true;
        this.prkKetuju = true;
        this.videoAlat = true;
        this.videoBahan = false;
    };
    PraktikumPage.prototype.bAlat = function () {
        this.prkPertama = true;
        this.prkKedua = false;
        this.prkKetiga = true;
        this.prkKeempat = true;
        this.prkKelima = true;
        this.prkKeenam = true;
        this.prkKetuju = true;
        this.videoAlat = true;
        this.videoBahan = true;
        this.alatVideo.nativeElement.pause();
    };
    PraktikumPage.prototype.bBahan = function () {
        this.prkPertama = true;
        this.prkKedua = true;
        this.prkKetiga = false;
        this.prkKeempat = true;
        this.prkKelima = true;
        this.prkKeenam = true;
        this.prkKetuju = true;
        this.videoAlat = true;
        this.videoBahan = true;
        this.bahanVideo.nativeElement.pause();
    };
    PraktikumPage.prototype.menu = function () {
        this.navCtrl.pop();
        this.prosedurVideo.nativeElement.pause();
        this.alatVideo.nativeElement.pause();
        this.bahanVideo.nativeElement.pause();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('prosedur'),
        __metadata("design:type", Object)
    ], PraktikumPage.prototype, "prosedurVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('alat'),
        __metadata("design:type", Object)
    ], PraktikumPage.prototype, "alatVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('bahan'),
        __metadata("design:type", Object)
    ], PraktikumPage.prototype, "bahanVideo", void 0);
    PraktikumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-praktikum',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\praktikum\praktikum.html"*/`<ion-content padding>\n  <div class="headerApp">\n    <div class="boxLogo">\n      <img src="assets/imgs/unesa.png" class="lgApp">\n    </div>\n    <div class="boxJdl">\n      <p class="jdlApp">PRAKTIKUM</p>\n    </div>\n    <div class="boxBtn">\n        <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n        <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n      <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n    </div>\n  </div>\n  <ion-grid>\n      <ion-row>\n        <ion-col col-4 class="contBtn">\n          <img src="assets/imgs/praktikum/prkTjn.png" class="btnPrk" (click)="prk1()">\n          <img src="assets/imgs/praktikum/prkAlat.png" class="btnPrk" (click)="prk2()">\n          <img src="assets/imgs/praktikum/prkBahan.png" class="btnPrk" (click)="prk3()">\n          <img src="assets/imgs/praktikum/prkProsedur.png" class="btnPrk" (click)="prk4()">\n          <img src="assets/imgs/praktikum/prkHasil.png" class="btnPrk" (click)="prk5()">\n          <img src="assets/imgs/praktikum/prkAnalis.png" class="btnPrk" (click)="prk6()">\n          <img src="assets/imgs/praktikum/prkKesimpulan.png" class="btnPrk" (click)="prk7()">\n        </ion-col>\n        <ion-col col-8 class="cont" [class.hide]="prkPertama" text-center>\n          <h6 style="margin-top: 20%; text-align: center;">\n            Mengetahui pengaruh luas permukaan terhadap laju reaksi suatu zat.\n          </h6>\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n        <ion-col col-8 class="cont" [class.hide]="prkKedua" text-center>\n          <ion-row>\n            <ion-col col-3 text-center>\n              <img src="assets/imgs/alat/kaca_arloji.jpg" class="alat1">\n              <h6 style="font-size: 1.2rem; margin-top: 0; text-align: center;">\n                Kaca Arloji\n              </h6>\n            </ion-col>  \n            <ion-col col-3 text-center>\n              <img src="assets/imgs/alat/mortar_alu.jpg" class="alat2">\n              <h6 style="font-size: 1.2rem; margin-top: 0; text-align: center;">\n                Mortar dan Alu\n              </h6>\n            </ion-col>  \n            <ion-col col-3 text-center style="align-self:flex-end;">\n              <img src="assets/imgs/alat/pipet_tetes.jpg" class="alat3">\n              <h6 style="font-size: 1.2rem; margin-top: 0; text-align: center;">\n                Pipet Tetes\n              </h6>\n            </ion-col>  \n            <ion-col col-3 text-center style="align-self:flex-end;">\n              <img src="assets/imgs/alat/spatula.png" class="alat4">\n              <h6 style="font-size: 1.2rem; margin-top: 0; text-align: center;">\n                Spatula\n              </h6>\n            </ion-col>  \n          </ion-row>\n          <ion-row>\n            <ion-col col-4 text-center>\n              <img src="assets/imgs/alat/gelas_ukur.jpg" class="alat6">\n              <h6 style="font-size: 1.2rem; margin-top: 0; text-align: center;">\n                Gelas Ukur 10 mL\n              </h6>\n            </ion-col>  \n            <ion-col col-4 text-center>\n              <img src="assets/imgs/alat/gelas_kimia.png" class="alat5">\n              <h6 style="font-size: 1.2rem; margin-top: 0; text-align: center;">\n                Gelas Kimia 100 mL\n              </h6>\n            </ion-col>  \n            <ion-col col-4 text-center>\n              <img src="assets/imgs/alat/erlenmeyer.png" class="alat7">\n              <h6 style="font-size: 1.2rem; margin-top: 0; text-align: center;">\n                Erlenmeyer 100 mL\n              </h6>\n            </ion-col>  \n          </ion-row>\n          <button ion-button small color="peach" class="btnAlat" (click)="lhtVideoAlat()">Lihat Video</button>\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n        <ion-col col-8 class="cont" [class.hide]="prkKetiga" text-center>\n          <ion-row>\n            <ion-col col-4 text-center>\n              <img src="assets/imgs/bahan/redoxon.png" class="bahan1">\n              <h6 style="font-size: 1.2rem; margin-top: 0; text-align: center;">\n                Redoxon\n              </h6>\n            </ion-col>  \n            <ion-col col-4 text-center style="align-self: center;">\n              <img src="assets/imgs/bahan/balon.png" class="bahan2">\n              <h6 style="font-size: 1.2rem; margin-top: 0; text-align: center;">\n                Balon\n              </h6>\n            </ion-col>  \n            <ion-col col-4 text-center>\n              <img src="assets/imgs/bahan/aquades.png" class="bahan3">\n              <h6 style="font-size: 1.2rem; margin-top: 0; text-align: center;">\n                Aquades\n              </h6>\n            </ion-col>\n          </ion-row>\n          <button ion-button small color="peach" class="btnBahan" (click)="lhtVideoBahan()">Lihat Video</button>\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n        <ion-col col-8 class="cont" [class.hide]="prkKeempat" text-center>\n          <video #prosedur style="max-width: 85%;" controls>\n            <source src="assets/video/prosedur.mp4" type="video/mp4">\n          </video>\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n        <ion-col col-8 class="cont" [class.hide]="prkKelima" text-center>\n          <img src="assets/imgs/praktikum/hasil_pengamatan.png" class="imgPengamatan" style="margin-top: 15%;">\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n        <ion-col col-8 class="cont" [class.hide]="prkKeenam" text-center>\n          <h6 style="text-align: center; margin-top: 5%;">\n            Pada percobaan yang dilakukan, diperoleh hasil bahwa waktu yang diperlukan untuk menegakkan balon menggunakan bahan redoxon berbentuk serbuk lebih cepat daripada menggunakan redoxon berbentuk tablet utuh. Hal tersebut disebabkan karena pada bentuk serbuk, luas permukaan bidang sentuh zat untuk bereaksi dengan air semakin besar sehingga reaksi dapat berjalan lebih cepat. Hal tersebut dapat dibuktikan dengan menegaknya balon pada percobaan ini.\n          </h6>\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n        <ion-col col-8 class="cont" [class.hide]="prkKetuju" text-center>\n          <h6 style="margin-top: 20%; text-align: center;">\n            Luas permukaan dapat memengaruhi laju reaksi semakin besar luas permukaan bidang sentuh, semakin besar pula laju reaksinya.\n          </h6>\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n        <ion-col col-8 class="cont" [class.hide]="videoAlat" text-center>\n          <video #alat style="max-width: 85%;" controls>\n            <source src="assets/video/alat.mp4" type="video/mp4">\n          </video>\n          <img src="assets/imgs/back.png" class="icnBtnFooter1" (click)="bAlat()">\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n        <ion-col col-8 class="cont" [class.hide]="videoBahan" text-center>\n          <video #bahan style="max-width: 85%;" controls>\n            <source src="assets/video/bahan.mp4" type="video/mp4">\n          </video>\n          <img src="assets/imgs/back.png" class="icnBtnFooter1" (click)="bBahan()">\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row>\n        <ion-col col-12>\n          <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n        </ion-col>\n      </ion-row> -->\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\praktikum\praktikum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], PraktikumPage);
    return PraktikumPage;
}());

//# sourceMappingURL=praktikum.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_audio_background_audio_background__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pembahasan_pembahasan__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EvaluasiPage = (function () {
    function EvaluasiPage(navCtrl, platform, fb, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.isName = false;
        this.arrEvl = new Array();
        this.arrJwb = ['D', 'D', 'A', 'C', 'B', 'D', 'C', 'C', 'D', 'C'];
        this.evlMulai = false;
        this.soalEvl1 = true;
        this.soalEvl2 = true;
        this.soalEvl3 = true;
        this.soalEvl4 = true;
        this.soalEvl5 = true;
        this.soalEvl6 = true;
        this.soalEvl7 = true;
        this.soalEvl8 = true;
        this.soalEvl9 = true;
        this.soalEvl10 = true;
        this.hslSoal1 = true;
        this.hslSoal2 = true;
        this.hslSoal3 = true;
        this.hslSoal4 = true;
        this.hslSoal5 = true;
        this.hslSoal6 = true;
        this.hslSoal7 = true;
        this.hslSoal8 = true;
        this.hslSoal9 = true;
        this.hslSoal10 = true;
        this.skorAkhir = true;
        this.pmbSoal1 = true;
        this.pmbSoal2 = true;
        this.pmbSoal3 = true;
        this.pmbSoal4 = true;
        this.pmbSoal5 = true;
        this.pmbSoal6 = true;
        this.pmbSoal7 = true;
        this.pmbSoal8 = true;
        this.pmbSoal9 = true;
        this.pmbSoal10 = true;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        //validation form
        this.myForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    EvaluasiPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    EvaluasiPage.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    EvaluasiPage.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    EvaluasiPage.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    EvaluasiPage.prototype.validate = function (data) {
        if (data == 'name') {
            this.isName = true;
        }
    };
    EvaluasiPage.prototype.mulai = function () {
        this.evlMulai = true;
        this.soalEvl1 = false;
        this.arrEvl.push(this.nama);
    };
    /////////////////////////////////////////////////////
    EvaluasiPage.prototype.jwbSoalA1 = function () {
        this.arrEvl.push("A");
        this.soalEvl1 = true;
        this.soalEvl2 = false;
    };
    EvaluasiPage.prototype.jwbSoalB1 = function () {
        this.arrEvl.push("B");
        this.soalEvl1 = true;
        this.soalEvl2 = false;
    };
    EvaluasiPage.prototype.jwbSoalC1 = function () {
        this.arrEvl.push("C");
        this.soalEvl1 = true;
        this.soalEvl2 = false;
    };
    EvaluasiPage.prototype.jwbSoalD1 = function () {
        this.arrEvl.push("D");
        this.soalEvl1 = true;
        this.soalEvl2 = false;
    };
    //////////////////////////////////////////////////////////////
    EvaluasiPage.prototype.jwbSoalA2 = function () {
        this.arrEvl.push("A");
        this.soalEvl2 = true;
        this.soalEvl3 = false;
    };
    EvaluasiPage.prototype.jwbSoalB2 = function () {
        this.arrEvl.push("B");
        this.soalEvl2 = true;
        this.soalEvl3 = false;
    };
    EvaluasiPage.prototype.jwbSoalC2 = function () {
        this.arrEvl.push("C");
        this.soalEvl2 = true;
        this.soalEvl3 = false;
    };
    EvaluasiPage.prototype.jwbSoalD2 = function () {
        this.arrEvl.push("D");
        this.soalEvl2 = true;
        this.soalEvl3 = false;
    };
    //////////////////////////////////////////////////////////////
    EvaluasiPage.prototype.jwbSoalA3 = function () {
        this.arrEvl.push("A");
        this.soalEvl3 = true;
        this.soalEvl4 = false;
    };
    EvaluasiPage.prototype.jwbSoalB3 = function () {
        this.arrEvl.push("B");
        this.soalEvl3 = true;
        this.soalEvl4 = false;
    };
    EvaluasiPage.prototype.jwbSoalC3 = function () {
        this.arrEvl.push("C");
        this.soalEvl3 = true;
        this.soalEvl4 = false;
    };
    EvaluasiPage.prototype.jwbSoalD3 = function () {
        this.arrEvl.push("D");
        this.soalEvl3 = true;
        this.soalEvl4 = false;
    };
    //////////////////////////////////////////////////////////////
    EvaluasiPage.prototype.jwbSoalA4 = function () {
        this.arrEvl.push("A");
        this.soalEvl4 = true;
        this.soalEvl5 = false;
    };
    EvaluasiPage.prototype.jwbSoalB4 = function () {
        this.arrEvl.push("B");
        this.soalEvl4 = true;
        this.soalEvl5 = false;
    };
    EvaluasiPage.prototype.jwbSoalC4 = function () {
        this.arrEvl.push("C");
        this.soalEvl4 = true;
        this.soalEvl5 = false;
    };
    EvaluasiPage.prototype.jwbSoalD4 = function () {
        this.arrEvl.push("D");
        this.soalEvl4 = true;
        this.soalEvl5 = false;
    };
    //////////////////////////////////////////////////////////////
    EvaluasiPage.prototype.jwbSoalA5 = function () {
        this.arrEvl.push("A");
        this.soalEvl5 = true;
        this.soalEvl6 = false;
    };
    EvaluasiPage.prototype.jwbSoalB5 = function () {
        this.arrEvl.push("B");
        this.soalEvl5 = true;
        this.soalEvl6 = false;
    };
    EvaluasiPage.prototype.jwbSoalC5 = function () {
        this.arrEvl.push("C");
        this.soalEvl5 = true;
        this.soalEvl6 = false;
    };
    EvaluasiPage.prototype.jwbSoalD5 = function () {
        this.arrEvl.push("D");
        this.soalEvl5 = true;
        this.soalEvl6 = false;
    };
    //////////////////////////////////////////////////////////////
    EvaluasiPage.prototype.jwbSoalA6 = function () {
        this.arrEvl.push("A");
        this.soalEvl6 = true;
        this.soalEvl7 = false;
    };
    EvaluasiPage.prototype.jwbSoalB6 = function () {
        this.arrEvl.push("B");
        this.soalEvl6 = true;
        this.soalEvl7 = false;
    };
    EvaluasiPage.prototype.jwbSoalC6 = function () {
        this.arrEvl.push("C");
        this.soalEvl6 = true;
        this.soalEvl7 = false;
    };
    EvaluasiPage.prototype.jwbSoalD6 = function () {
        this.arrEvl.push("D");
        this.soalEvl6 = true;
        this.soalEvl7 = false;
    };
    //////////////////////////////////////////////////////////////
    EvaluasiPage.prototype.jwbSoalA7 = function () {
        this.arrEvl.push("A");
        this.soalEvl7 = true;
        this.soalEvl8 = false;
    };
    EvaluasiPage.prototype.jwbSoalB7 = function () {
        this.arrEvl.push("B");
        this.soalEvl7 = true;
        this.soalEvl8 = false;
    };
    EvaluasiPage.prototype.jwbSoalC7 = function () {
        this.arrEvl.push("C");
        this.soalEvl7 = true;
        this.soalEvl8 = false;
    };
    EvaluasiPage.prototype.jwbSoalD7 = function () {
        this.arrEvl.push("D");
        this.soalEvl7 = true;
        this.soalEvl8 = false;
    };
    //////////////////////////////////////////////////////////////
    EvaluasiPage.prototype.jwbSoalA8 = function () {
        this.arrEvl.push("A");
        this.soalEvl8 = true;
        this.soalEvl9 = false;
    };
    EvaluasiPage.prototype.jwbSoalB8 = function () {
        this.arrEvl.push("B");
        this.soalEvl8 = true;
        this.soalEvl9 = false;
    };
    EvaluasiPage.prototype.jwbSoalC8 = function () {
        this.arrEvl.push("C");
        this.soalEvl8 = true;
        this.soalEvl9 = false;
    };
    EvaluasiPage.prototype.jwbSoalD8 = function () {
        this.arrEvl.push("D");
        this.soalEvl8 = true;
        this.soalEvl9 = false;
    };
    //////////////////////////////////////////////////////////////
    EvaluasiPage.prototype.jwbSoalA9 = function () {
        this.arrEvl.push("A");
        this.soalEvl9 = true;
        this.soalEvl10 = false;
    };
    EvaluasiPage.prototype.jwbSoalB9 = function () {
        this.arrEvl.push("B");
        this.soalEvl9 = true;
        this.soalEvl10 = false;
    };
    EvaluasiPage.prototype.jwbSoalC9 = function () {
        this.arrEvl.push("C");
        this.soalEvl9 = true;
        this.soalEvl10 = false;
    };
    EvaluasiPage.prototype.jwbSoalD9 = function () {
        this.arrEvl.push("D");
        this.soalEvl9 = true;
        this.soalEvl10 = false;
    };
    //////////////////////////////////////////////////////////////
    EvaluasiPage.prototype.jwbSoalA10 = function () {
        this.arrEvl.push("A");
        this.soalEvl10 = true;
        this.hslSoal1 = false;
        console.log(this.arrEvl);
        if (this.arrEvl[1] == this.arrJwb[0]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    EvaluasiPage.prototype.jwbSoalB10 = function () {
        this.arrEvl.push("B");
        this.soalEvl10 = true;
        this.hslSoal1 = false;
        console.log(this.arrEvl);
        if (this.arrEvl[1] == this.arrJwb[0]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    EvaluasiPage.prototype.jwbSoalC10 = function () {
        this.arrEvl.push("C");
        this.soalEvl10 = true;
        this.hslSoal1 = false;
        console.log(this.arrEvl);
        if (this.arrEvl[1] == this.arrJwb[0]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    EvaluasiPage.prototype.jwbSoalD10 = function () {
        this.arrEvl.push("D");
        this.soalEvl10 = true;
        this.hslSoal1 = false;
        console.log(this.arrEvl);
        if (this.arrEvl[1] == this.arrJwb[0]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    //////////////////////////////////////////////////////////////
    EvaluasiPage.prototype.next1 = function () {
        this.hslSoal1 = true;
        this.hslSoal2 = false;
        if (this.arrEvl[2] == this.arrJwb[1]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    EvaluasiPage.prototype.next2 = function () {
        this.hslSoal2 = true;
        this.hslSoal3 = false;
        if (this.arrEvl[3] == this.arrJwb[2]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    EvaluasiPage.prototype.next3 = function () {
        this.hslSoal3 = true;
        this.hslSoal4 = false;
        if (this.arrEvl[4] == this.arrJwb[3]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    EvaluasiPage.prototype.next4 = function () {
        this.hslSoal4 = true;
        this.hslSoal5 = false;
        if (this.arrEvl[5] == this.arrJwb[4]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    EvaluasiPage.prototype.next5 = function () {
        this.hslSoal5 = true;
        this.hslSoal6 = false;
        if (this.arrEvl[6] == this.arrJwb[5]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    EvaluasiPage.prototype.next6 = function () {
        this.hslSoal6 = true;
        this.hslSoal7 = false;
        if (this.arrEvl[7] == this.arrJwb[6]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    EvaluasiPage.prototype.next7 = function () {
        this.hslSoal7 = true;
        this.hslSoal8 = false;
        if (this.arrEvl[8] == this.arrJwb[7]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    EvaluasiPage.prototype.next8 = function () {
        this.hslSoal8 = true;
        this.hslSoal9 = false;
        if (this.arrEvl[9] == this.arrJwb[8]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    EvaluasiPage.prototype.next9 = function () {
        this.hslSoal9 = true;
        this.hslSoal10 = false;
        if (this.arrEvl[10] == this.arrJwb[9]) {
            this.cekEmot = "assets/imgs/betul.png";
        }
        else {
            this.cekEmot = "assets/imgs/salah.png";
        }
    };
    EvaluasiPage.prototype.lhtSkor = function () {
        this.hslSoal10 = true;
        this.skorAkhir = false;
        var jmlSkor = 0;
        for (var i = 0; i < this.arrJwb.length; i++) {
            if (this.arrEvl[i + 1] == this.arrJwb[i]) {
                jmlSkor += 10;
            }
        }
        console.log(jmlSkor);
        this.ttlSkor = jmlSkor;
        if (jmlSkor > 75) {
            this.quoteSkor = "Jangan mudah puas dengan apa yang telah Anda dapatkan. Ingat diatas langit masih ada langit";
        }
        else {
            this.quoteSkor = "Jangan mudah menyerah. Coba pejamkan mata dan ingat kembali mungkin Anda belum belajar dengan sungguh-sungguh";
        }
        // console.log(this.arrEvl);
    };
    EvaluasiPage.prototype.ulangiEvl = function () {
        this.skorAkhir = true;
        this.evlMulai = false;
        this.arrEvl = [];
        // console.log(this.arrEvl);
    };
    /////////////////////////////////////////////////////////
    EvaluasiPage.prototype.lhtHsl1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pembahasan_pembahasan__["a" /* PembahasanPage */], {
            id: "1",
        });
    };
    EvaluasiPage.prototype.lhtHsl2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pembahasan_pembahasan__["a" /* PembahasanPage */], {
            id: "2",
        });
    };
    EvaluasiPage.prototype.lhtHsl3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pembahasan_pembahasan__["a" /* PembahasanPage */], {
            id: "3",
        });
    };
    EvaluasiPage.prototype.lhtHsl4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pembahasan_pembahasan__["a" /* PembahasanPage */], {
            id: "4",
        });
    };
    EvaluasiPage.prototype.lhtHsl5 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pembahasan_pembahasan__["a" /* PembahasanPage */], {
            id: "5",
        });
    };
    EvaluasiPage.prototype.lhtHsl6 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pembahasan_pembahasan__["a" /* PembahasanPage */], {
            id: "6",
        });
    };
    EvaluasiPage.prototype.lhtHsl7 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pembahasan_pembahasan__["a" /* PembahasanPage */], {
            id: "7",
        });
    };
    EvaluasiPage.prototype.lhtHsl8 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pembahasan_pembahasan__["a" /* PembahasanPage */], {
            id: "8",
        });
    };
    EvaluasiPage.prototype.lhtHsl9 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pembahasan_pembahasan__["a" /* PembahasanPage */], {
            id: "9",
        });
    };
    EvaluasiPage.prototype.lhtHsl10 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pembahasan_pembahasan__["a" /* PembahasanPage */], {
            id: "10",
        });
    };
    EvaluasiPage.prototype.menu = function () {
        this.navCtrl.pop();
    };
    EvaluasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evaluasi',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\evaluasi\evaluasi.html"*/`<ion-content padding>\n  <div class="headerApp">\n    <div class="boxLogo">\n      <img src="assets/imgs/unesa.png" class="lgApp">\n    </div>\n    <div class="boxJdl">\n      <p class="jdlApp">EVALUASI</p>\n    </div>\n    <div class="boxBtn">\n        <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n        <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n      <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n    </div>\n  </div>\n  <ion-grid>\n    <ion-row class="contMulai" [class.hide]="evlMulai">\n      <ion-col col-6>\n        <img src="assets/imgs/panduan.png" class="evlImg">\n      </ion-col>\n      <ion-col col-6 text-center>\n        <form [formGroup]="myForm" (ngSubmit)="mulai()" novalidate>\n          <ion-item [class.invalid]="(!myForm.controls.name.valid) && isName">\n            <ion-label color="dark" floating>Masukkan Nama</ion-label>\n            <ion-input type="text" (keyup)="validate(\'name\')" formControlName="name" [(ngModel)]="nama"></ion-input>\n          </ion-item>\n          <p *ngIf="myForm.get(\'name\').errors && myForm.get(\'name\').dirty" style="text-align: right; font-size: 10px; padding-right: 16px;">\n            <span style="color: red" ion-text *ngIf="myForm.get(\'name\').hasError(\'required\')">Masukkan Nama Anda!</span>\n          </p>\n          <button ion-button color="peach" round style="margin-top: 5%;" [disabled]="myForm.invalid">Mulai</button>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row class="cont1" [class.hide]="soalEvl1">\n      <ion-col col-12>\n        <ion-row>\n          <ion-col col-12>\n            <img src="assets/imgs/soal/1/soal1.png" class="soal1Img">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalA1()"><img src="assets/imgs/soal/1/a1.png"></button>\n          </ion-col>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalB1()"><img src="assets/imgs/soal/1/b1.png"></button>\n          </ion-col>\n        <!-- </ion-row>\n        <ion-row> -->\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalC1()"><img src="assets/imgs/soal/1/c1.png"></button>\n          </ion-col>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalD1()"><img src="assets/imgs/soal/1/d1.png"></button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class="cont2" [class.hide]="soalEvl2">\n      <ion-col col-12>\n        <ion-row>\n          <ion-col col-12>\n            <img src="assets/imgs/soal/2/soal2.png" class="soal2Img">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalA2()"><img src="assets/imgs/soal/2/a2.png"></button>\n          </ion-col>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalB2()"><img src="assets/imgs/soal/2/b2.png"></button>\n          </ion-col>\n        <!-- </ion-row>\n        <ion-row> -->\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalC2()"><img src="assets/imgs/soal/2/c2.png"></button>\n          </ion-col>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalD2()"><img src="assets/imgs/soal/2/d2.png"></button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class="cont3" [class.hide]="soalEvl3">\n      <ion-col col-12>\n        <ion-row>\n          <ion-col col-12>\n            <img src="assets/imgs/soal/3/soal3.png" class="soal3Img">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalA3()"><img src="assets/imgs/soal/3/a3.png"></button>\n          </ion-col>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalB3()"><img src="assets/imgs/soal/3/b3.png"></button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalC3()"><img src="assets/imgs/soal/3/c3.png"></button>\n          </ion-col>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalD3()"><img src="assets/imgs/soal/3/d3.png"></button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class="cont4" [class.hide]="soalEvl4">\n      <ion-col col-12>\n        <ion-row>\n          <ion-col col-12>\n            <img src="assets/imgs/soal/4/soal4.png" class="soal4Img">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalA4()"><img src="assets/imgs/soal/4/a4.png"></button>\n          </ion-col>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalB4()"><img src="assets/imgs/soal/4/b4.png"></button>\n          </ion-col>\n        <!-- </ion-row>\n        <ion-row> -->\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalC4()"><img src="assets/imgs/soal/4/c4.png"></button>\n          </ion-col>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalD4()"><img src="assets/imgs/soal/4/d4.png"></button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class="cont5" [class.hide]="soalEvl5">\n      <ion-col col-12>\n        <ion-row>\n          <ion-col col-12>\n            <img src="assets/imgs/soal/5/soal5.png" class="soal5Img">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalA5()"><img src="assets/imgs/soal/5/a5.png"></button>\n          </ion-col>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalB5()"><img src="assets/imgs/soal/5/b5.png"></button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalC5()"><img src="assets/imgs/soal/5/c5.png"></button>\n          </ion-col>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalD5()"><img src="assets/imgs/soal/5/d5.png"></button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class="cont6" [class.hide]="soalEvl6">\n      <ion-col col-12>\n        <ion-row>\n          <ion-col col-12>\n            <img src="assets/imgs/soal/6/soal6.png" class="soal6Img">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalA6()"><img src="assets/imgs/soal/6/a6.png"></button>\n          </ion-col>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalB6()"><img src="assets/imgs/soal/6/b6.png"></button>\n          </ion-col>\n        <!-- </ion-row>\n        <ion-row> -->\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalC6()"><img src="assets/imgs/soal/6/c6.png"></button>\n          </ion-col>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalD6()"><img src="assets/imgs/soal/6/d6.png"></button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class="cont7" [class.hide]="soalEvl7">\n      <ion-col col-12>\n        <ion-row>\n          <ion-col col-12>\n            <img src="assets/imgs/soal/7/soal7.png" class="soal7Img">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button block outline color="peach" (click)="jwbSoalA7()"><img src="assets/imgs/soal/7/a7.png"></button>\n          </ion-col>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button block outline color="peach" (click)="jwbSoalB7()"><img src="assets/imgs/soal/7/b7.png"></button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button block outline color="peach" (click)="jwbSoalC7()"><img src="assets/imgs/soal/7/c7.png"></button>\n          </ion-col>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button block outline color="peach" (click)="jwbSoalD7()"><img src="assets/imgs/soal/7/d7.png"></button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class="cont8" [class.hide]="soalEvl8">\n      <ion-col col-12>\n        <ion-row>\n          <ion-col col-12>\n            <img src="assets/imgs/soal/8/soal8.png" class="soal8Img">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalA8()"><img src="assets/imgs/soal/8/a8.png"></button>\n          </ion-col>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalB8()"><img src="assets/imgs/soal/8/b8.png"></button>\n          </ion-col>\n        <!-- </ion-row>\n        <ion-row> -->\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalC8()"><img src="assets/imgs/soal/8/c8.png"></button>\n          </ion-col>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalD8()"><img src="assets/imgs/soal/8/d8.png"></button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class="cont9" [class.hide]="soalEvl9">\n      <ion-col col-12>\n        <ion-row>\n          <ion-col col-12>\n            <img src="assets/imgs/soal/9/soal9.png" class="soal9Img">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalA9()"><img src="assets/imgs/soal/9/a9.png"></button>\n          </ion-col>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalB9()"><img src="assets/imgs/soal/9/b9.png"></button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalC9()"><img src="assets/imgs/soal/9/c9.png"></button>\n          </ion-col>\n          <ion-col col-6 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalD9()"><img src="assets/imgs/soal/9/d9.png"></button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class="cont10" [class.hide]="soalEvl10">\n      <ion-col col-12>\n        <ion-row>\n          <ion-col col-12>\n            <img src="assets/imgs/soal/10/soal10.png" class="soal10Img">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalA10()"><img src="assets/imgs/soal/10/a10.png"></button>\n          </ion-col>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalB10()"><img src="assets/imgs/soal/10/b10.png"></button>\n          </ion-col>\n        <!-- </ion-row>\n        <ion-row> -->\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalC10()"><img src="assets/imgs/soal/10/c10.png"></button>\n          </ion-col>\n          <ion-col col-3 style="padding: 0; padding-left: 5px; padding-right: 5px;">\n            <button ion-button small block outline color="peach" (click)="jwbSoalD10()"><img src="assets/imgs/soal/10/d10.png"></button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class="contHsl1" [class.hide]="hslSoal1">\n      <ion-col col-12>\n        <img src="assets/imgs/hasil/1.png" class="hsl1" [class.hide]="hslSoal1">\n        <img [src]="cekEmot" class="cekImg">\n        <img src="assets/imgs/next.png" class="nextHsl" [class.hide]="hslSoal1" (click)="next1()">\n        <!-- <button ion-button small color="primary" class="lhtHsl">Lihat Pembahasan</button> -->\n        <!-- <img src="assets/imgs/next.png" class="nextHsl"> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class="contHsl2" [class.hide]="hslSoal2">\n      <ion-col col-12>\n        <img src="assets/imgs/hasil/2.png" class="hsl2" [class.hide]="hslSoal2">\n        <img [src]="cekEmot" class="cekImg">\n        <img src="assets/imgs/next.png" class="nextHsl" [class.hide]="hslSoal2" (click)="next2()">\n      </ion-col>\n    </ion-row>\n    <ion-row class="contHsl3" [class.hide]="hslSoal3">\n      <ion-col col-12>\n        <img src="assets/imgs/hasil/3.png" class="hsl3" [class.hide]="hslSoal3">\n        <img [src]="cekEmot" class="cekImg">\n        <img src="assets/imgs/next.png" class="nextHsl" [class.hide]="hslSoal3" (click)="next3()">\n      </ion-col>\n    </ion-row>\n    <ion-row class="contHsl4" [class.hide]="hslSoal4">\n      <ion-col col-12>\n        <img src="assets/imgs/hasil/4.png" class="hsl4" [class.hide]="hslSoal4">\n        <img [src]="cekEmot" class="cekImg">\n        <img src="assets/imgs/next.png" class="nextHsl" [class.hide]="hslSoal4" (click)="next4()">\n      </ion-col>\n    </ion-row>\n    <ion-row class="contHsl5" [class.hide]="hslSoal5">\n      <ion-col col-12>\n        <img src="assets/imgs/hasil/5.png" class="hsl5" [class.hide]="hslSoal5">\n        <img [src]="cekEmot" class="cekImg">\n        <img src="assets/imgs/next.png" class="nextHsl" [class.hide]="hslSoal5" (click)="next5()">\n      </ion-col>\n    </ion-row>\n    <ion-row class="contHsl6" [class.hide]="hslSoal6">\n      <ion-col col-12>\n        <img src="assets/imgs/hasil/6.png" class="hsl6" [class.hide]="hslSoal6">\n        <img [src]="cekEmot" class="cekImg">\n        <img src="assets/imgs/next.png" class="nextHsl" [class.hide]="hslSoal6" (click)="next6()">\n      </ion-col>\n    </ion-row>\n    <ion-row class="contHsl7" [class.hide]="hslSoal7">\n      <ion-col col-12>\n        <img src="assets/imgs/hasil/7.png" class="hsl7" [class.hide]="hslSoal7">\n        <img [src]="cekEmot" class="cekImg">\n        <img src="assets/imgs/next.png" class="nextHsl" [class.hide]="hslSoal7" (click)="next7()">\n      </ion-col>\n    </ion-row>\n    <ion-row class="contHsl8" [class.hide]="hslSoal8">\n      <ion-col col-12>\n        <img src="assets/imgs/hasil/8.png" class="hsl8" [class.hide]="hslSoal8">\n        <img [src]="cekEmot" class="cekImg">\n        <img src="assets/imgs/next.png" class="nextHsl" [class.hide]="hslSoal8" (click)="next8()">\n      </ion-col>\n    </ion-row>\n    <ion-row class="contHsl9" [class.hide]="hslSoal9">\n      <ion-col col-12>\n        <img src="assets/imgs/hasil/9.png" class="hsl9" [class.hide]="hslSoal9">\n        <img [src]="cekEmot" class="cekImg">\n        <img src="assets/imgs/next.png" class="nextHsl" [class.hide]="hslSoal9" (click)="next9()">\n      </ion-col>\n    </ion-row>\n    <ion-row class="contHsl10" [class.hide]="hslSoal10">\n      <ion-col col-12>\n        <img src="assets/imgs/hasil/10.png" class="hsl10" [class.hide]="hslSoal10">\n        <img [src]="cekEmot" class="cekImg">\n        <button ion-button small color="peach" class="lhtSkor" [class.hide]="hslSoal10" (click)="lhtSkor()">Lihat Skor</button>\n      </ion-col>\n    </ion-row>\n    <ion-row class="skorAkhir" [class.hide]="skorAkhir">\n      <ion-col col-6 class="contKiri" text-center>\n        <img src="assets/imgs/star.png" class="starImg">\n        <p class="nilai">\n          <b>\n            Nilai Anda:\n            <br>\n            {{ttlSkor}}\n          </b>\n        </p>\n        <p class="quote">\n          {{quoteSkor}}\n        </p>\n      </ion-col>\n      <ion-col col-6 class="contKanan" text-center>\n        <img src="assets/imgs/kunci.png" class="kunciImg">\n        <img src="assets/imgs/kkm.png" class="kkmImg">\n        <div class="contKunci">\n          <p class="kunci">\n            <b>\n              1.&nbsp;&nbsp;D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.&nbsp;&nbsp;D<br>\n              2.&nbsp;&nbsp;D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.&nbsp;&nbsp;C<br>\n              3.&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.&nbsp;&nbsp;C<br>\n              4.&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.&nbsp;&nbsp;D<br>\n              5.&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.&nbsp;&nbsp;C<br>\n            </b>\n          </p>\n        </div>\n        <button ion-button small color="peach" class="ulangiEvl" (click)="ulangiEvl()">Ulangi</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button small color="peach" class="lhtHsl" [class.hide]="hslSoal1" (click)="lhtHsl1()">Lihat Pembahasan</button>\n        <button ion-button small color="peach" class="lhtHsl" [class.hide]="hslSoal2" (click)="lhtHsl2()">Lihat Pembahasan</button>\n        <button ion-button small color="peach" class="lhtHsl" [class.hide]="hslSoal3" (click)="lhtHsl3()">Lihat Pembahasan</button>\n        <button ion-button small color="peach" class="lhtHsl" [class.hide]="hslSoal4" (click)="lhtHsl4()">Lihat Pembahasan</button>\n        <button ion-button small color="peach" class="lhtHsl" [class.hide]="hslSoal5" (click)="lhtHsl5()">Lihat Pembahasan</button>\n        <button ion-button small color="peach" class="lhtHsl" [class.hide]="hslSoal6" (click)="lhtHsl6()">Lihat Pembahasan</button>\n        <button ion-button small color="peach" class="lhtHsl" [class.hide]="hslSoal7" (click)="lhtHsl7()">Lihat Pembahasan</button>\n        <button ion-button small color="peach" class="lhtHsl" [class.hide]="hslSoal8" (click)="lhtHsl8()">Lihat Pembahasan</button>\n        <button ion-button small color="peach" class="lhtHsl" [class.hide]="hslSoal9" (click)="lhtHsl9()">Lihat Pembahasan</button>\n        <button ion-button small color="peach" class="lhtHsl" [class.hide]="hslSoal10" (click)="lhtHsl10()">Lihat Pembahasan</button>\n        <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\evaluasi\evaluasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], EvaluasiPage);
    return EvaluasiPage;
}());

//# sourceMappingURL=evaluasi.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PembahasanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PembahasanPage = (function () {
    function PembahasanPage(navCtrl, navParams, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        var id = navParams.get('id');
        if (id == "1") {
            this.imgPmb = 'assets/imgs/pembahasan/1.png';
            this.cssClass = 'pmb1';
        }
        else if (id == "2") {
            this.imgPmb = 'assets/imgs/pembahasan/2.png';
            this.cssClass = 'pmb2';
        }
        else if (id == "3") {
            this.imgPmb = 'assets/imgs/pembahasan/3.png';
            this.cssClass = 'pmb3';
        }
        else if (id == "4") {
            this.imgPmb = 'assets/imgs/pembahasan/4.png';
            this.cssClass = 'pmb4';
        }
        else if (id == "5") {
            this.imgPmb = 'assets/imgs/pembahasan/5.png';
            this.cssClass = 'pmb5';
        }
        else if (id == "6") {
            this.imgPmb = 'assets/imgs/pembahasan/6.png';
            this.cssClass = 'pmb6';
        }
        else if (id == "7") {
            this.imgPmb = 'assets/imgs/pembahasan/7.png';
            this.cssClass = 'pmb7';
        }
        else if (id == "8") {
            this.imgPmb = 'assets/imgs/pembahasan/8.png';
            this.cssClass = 'pmb8';
        }
        else if (id == "9") {
            this.imgPmb = 'assets/imgs/pembahasan/9.png';
            this.cssClass = 'pmb9';
        }
        else if (id == "10") {
            this.imgPmb = 'assets/imgs/pembahasan/10.png';
            this.cssClass = 'pmb10';
        }
    }
    PembahasanPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    PembahasanPage.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    PembahasanPage.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    PembahasanPage.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    PembahasanPage.prototype.evaluasi = function () {
        this.navCtrl.pop();
    };
    PembahasanPage.prototype.menu = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
    };
    PembahasanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pembahasan',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\pembahasan\pembahasan.html"*/`<ion-content padding>\n  <div class="headerApp">\n    <div class="boxLogo">\n      <img src="assets/imgs/unesa.png" class="lgApp">\n    </div>\n    <div class="boxJdl">\n      <p class="jdlApp">EVALUASI</p>\n    </div>\n    <div class="boxBtn">\n      <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n      <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n      <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n    </div>\n  </div>\n  <ion-grid>\n      <ion-row>\n        <ion-col col-12 class="cont">\n          <img [src]="imgPmb" [class]="cssClass">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <img src="assets/imgs/back.png" class="icnBtnFooter1" (click)="evaluasi()">\n        </ion-col>\n        <ion-col col-6>\n          <img src="assets/imgs/home.png" class="icnBtnFooter" (click)="menu()">\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\pembahasan\pembahasan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], PembahasanPage);
    return PembahasanPage;
}());

//# sourceMappingURL=pembahasan.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilPage = (function () {
    function ProfilPage(navCtrl, platform, alertCtrl, myAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.myAudio = myAudio;
        this.onSound = true;
        this.offSound = false;
        //back button device
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    ProfilPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //cek audio
        this.myAudio.cekAudio().then(function (response) {
            // console.log(response);
            if (response == 'play') {
                _this.onSound = true;
                _this.offSound = false;
            }
            else {
                _this.onSound = false;
                _this.offSound = true;
            }
        });
    };
    ProfilPage.prototype.soundOff = function () {
        this.onSound = false;
        this.offSound = true;
        this.myAudio.pauseAudio();
    };
    ProfilPage.prototype.soundOn = function () {
        this.onSound = true;
        this.offSound = false;
        this.myAudio.playAudio();
    };
    ProfilPage.prototype.keluar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Keluar Aplikasi?',
            buttons: [
                {
                    text: 'BATAL',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilPage.prototype.menu = function () {
        this.navCtrl.pop();
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\pages\profil\profil.html"*/`<ion-content padding>\n    <div class="headerApp">\n        <div class="boxLogo">\n            <img src="assets/imgs/unesa.png" class="lgApp">\n        </div>\n        <div class="boxJdl">\n            <p class="jdlApp">Profil</p>\n        </div>\n        <div class="boxBtn">\n            <img src="assets/imgs/mute.png" class="btnApp" (click)="soundOn()" [class.hide]="onSound">\n            <img src="assets/imgs/speaker.png" class="btnApp" (click)="soundOff()" [class.hide]="offSound">\n            <img src="assets/imgs/power-off.png" class="btnApp" (click)="keluar()">\n        </div>\n    </div>\n    <ion-grid>\n        <ion-slides>\n            <ion-slide class="slide1">\n                <ion-row>\n                    <ion-col col-12 class="slideProfil1" text-center>\n                        <h6>\n                            Merupakan media pembelajaran kimia berbasis android. \n                            Seri dalam ChemOnDro ini berisi materi konsep laju reaksi yang merupakan materi kelas XI SMA/MA\n                        </h6>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4 class="slideProfil2" text-center>\n                        <img src="assets/imgs/pengembangImg.jpg" class="pengembangImg">\n                    </ion-col>\n                    <ion-col col-8 class="slideProfil2" text-center>\n                        <img src="assets/imgs/pengembang.png" class="jdlPengembang">\n                        <div class="nmr1">\n                            <p class="pnmr">1.</p><p class="pnm">Khofifah Indah Farawansyah</p><p class="pnim">(17030194001)</p>\n                        </div>\n                        <div class="nmr2">\n                            <p class="pnmr">2.</p><p class="pnm">Wara Mulyaning Utami</p><p class="pnim">(17030194037)</p>\n                        </div>\n                        <div class="nmr3">\n                            <p class="pnmr">3.</p><p class="pnm">Rizky Ulfianah</p><p class="pnim">(17030194054)</p>\n                        </div>\n                        <div class="nmr4">\n                            <p class="pnmr">4.</p><p class="pnm">Angelina Nur Afni</p><p class="pnim">(17030194063)</p>\n                        </div>\n                        <div class="nmr5">\n                            <p class="pnmr">5.</p><p class="pnm">Lucky Prima</p><p class="pnim">(17030194070)</p>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n            </ion-slide>\n            <ion-slide class="slide2">\n                <ion-row>\n                    <ion-col col-12 class="slideProfil1" text-center>\n                        <img src="assets/imgs/pembimbing.png" class="jdlPembimbing">\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-3 class="slideProfil2" text-center>\n                        <img src="assets/imgs/pembimbingImg1.jpg" class="pembimbingImg1">\n                        <p class="pnm1">Drs. Achmad Luthfi, M.Pd.</p>\n                    </ion-col>\n                    <ion-col col-3 class="slideProfil2" text-center>\n                        <img src="assets/imgs/pembimbingImg2.jpg" class="pembimbingImg2">\n                        <p class="pnm2">Dian Novita, S.T., M.Pd.</p>\n                    </ion-col>\n                    <ion-col col-3 class="slideProfil2" text-center>\n                        <img src="assets/imgs/pembimbingImg3.jpg" class="pembimbingImg3">\n                        <p class="pnm3">Bertha Yonatha, S.Pd., M.Pd.</p>\n                    </ion-col>\n                    <ion-col col-3 class="slideProfil2" text-center>\n                        <img src="assets/imgs/pembimbingImg4.jpg" class="pembimbingImg4">\n                        <p class="pnm4">Drs. Sukarmin, M.Pd.</p>\n                    </ion-col>\n                </ion-row>\n                <img src="assets/imgs/home.png" class="icnBtnFooter3" (click)="menu()">\n            </ion-slide>\n        </ion-slides>\n    </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(272);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_evaluasi_evaluasi__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_petunjuk_petunjuk__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_praktikum_praktikum__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profil_profil__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tujuan_tujuan__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_materi_materi__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mindmap_mindmap__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_submateri_submateri__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_pembahasan_pembahasan__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sm1_sm1__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_sm2_sm2__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_sm3_sm3__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_sm4_sm4__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_sm5_sm5__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_audio_background_audio_background__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_evaluasi_evaluasi__["a" /* EvaluasiPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_petunjuk_petunjuk__["a" /* PetunjukPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_praktikum_praktikum__["a" /* PraktikumPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tujuan_tujuan__["a" /* TujuanPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_materi_materi__["a" /* MateriPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mindmap_mindmap__["a" /* MindmapPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_submateri_submateri__["a" /* SubmateriPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sm1_sm1__["a" /* Sm1Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sm2_sm2__["a" /* Sm2Page */],
                __WEBPACK_IMPORTED_MODULE_23__pages_sm3_sm3__["a" /* Sm3Page */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sm4_sm4__["a" /* Sm4Page */],
                __WEBPACK_IMPORTED_MODULE_25__pages_sm5_sm5__["a" /* Sm5Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_pembahasan_pembahasan__["a" /* PembahasanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_evaluasi_evaluasi__["a" /* EvaluasiPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_petunjuk_petunjuk__["a" /* PetunjukPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_praktikum_praktikum__["a" /* PraktikumPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tujuan_tujuan__["a" /* TujuanPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_materi_materi__["a" /* MateriPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mindmap_mindmap__["a" /* MindmapPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_submateri_submateri__["a" /* SubmateriPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sm1_sm1__["a" /* Sm1Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sm2_sm2__["a" /* Sm2Page */],
                __WEBPACK_IMPORTED_MODULE_23__pages_sm3_sm3__["a" /* Sm3Page */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sm4_sm4__["a" /* Sm4Page */],
                __WEBPACK_IMPORTED_MODULE_25__pages_sm5_sm5__["a" /* Sm5Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_pembahasan_pembahasan__["a" /* PembahasanPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__["a" /* PhotoViewer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_audio_background_audio_background__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(246);
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
    function MyApp(platform, statusBar, splashScreen, screenOrientation, myAudio) {
        this.myAudio = myAudio;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //orientation  
            screenOrientation.lock(screenOrientation.ORIENTATIONS.LANDSCAPE);
            statusBar.styleDefault();
            statusBar.hide();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngAfterViewInit = function () {
        this._AUDIO = this.audio.nativeElement;
        this.myAudio.loadAudio(this._AUDIO);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("audio"),
        __metadata("design:type", Object)
    ], MyApp.prototype, "audio", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\File\Indah\Aplikasi\storyboard\src\app\app.html"*/`<audio #audio>\n\n    <source src="assets/audio/track.mpeg" type="audio/mpeg">\n\n</audio>\n\n<ion-nav [root]="rootPage"></ion-nav>`/*ion-inline-end:"E:\File\Indah\Aplikasi\storyboard\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_5__providers_audio_background_audio_background__["a" /* AudioBackgroundProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[262]);
//# sourceMappingURL=main.js.map
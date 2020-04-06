import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';

import { PetunjukPage } from '../../pages/petunjuk/petunjuk';
import { TujuanPage } from '../../pages/tujuan/tujuan';
import { MateriPage } from '../../pages/materi/materi';
import { PraktikumPage } from '../../pages/praktikum/praktikum';
import { EvaluasiPage } from '../../pages/evaluasi/evaluasi';
import { ProfilPage } from '../../pages/profil/profil';
import { AudioBackgroundProvider } from '../../providers/audio-background/audio-background';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  onSound;
  offSound;

  pmbBool;
  mtrBool;
  prkBool;
  evlBool;
  prfBool;
  pmbImg;
  mtrImg;
  prkImg;
  evlImg;
  prfImg;
  
  constructor(public navCtrl: NavController, public platform: Platform, private alertCtrl: AlertController, public myAudio: AudioBackgroundProvider) {    
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
    let backAction =  platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
      backAction();
      let alert = this.alertCtrl.create({
        message: 'Keluar Aplikasi?',
        buttons: [
          {
            text: 'BATAL',
            role: 'cancel',
          },
          {
            text: 'OK',
            handler: () => {
              this.platform.exitApp();
            }
          }
        ]
      });
      alert.present();
    },2);

  }

  ionViewDidEnter(){
    //cek audio
    this.myAudio.cekAudio().then((response)=>{
      // console.log(response);
      if(response == 'play'){
        this.onSound = true;
        this.offSound = false;
      }
      else{
        this.onSound = false;
        this.offSound = true;
      }
    })
  }

  soundOff() {
    this.onSound = false;
    this.offSound = true;
    this.myAudio.pauseAudio();
  }

  soundOn() {
    this.onSound = true;
    this.offSound = false;
    this.myAudio.playAudio();
  }

  keluar() {
    let alert = this.alertCtrl.create({
      message: 'Keluar Aplikasi?',
      buttons: [
        {
          text: 'BATAL',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present();
  }

  petunjuk() {
    this.pmbBool = false;
    this.pmbImg = "assets/imgs/unlock.png";
    this.navCtrl.push(PetunjukPage);
  }

  tujuan() {
    this.mtrBool = false;
    this.mtrImg = "assets/imgs/unlock.png";
    this.navCtrl.push(TujuanPage);
  }

  materi() {
    this.prkBool = false;
    this.prkImg = "assets/imgs/unlock.png";
    this.navCtrl.push(MateriPage);
  }

  praktikum() {
    this.evlBool = false;
    this.evlImg = "assets/imgs/unlock.png";
    this.navCtrl.push(PraktikumPage);
  }

  evaluasi() {
    this.prfBool = false;
    this.prfImg = "assets/imgs/unlock.png";
    this.navCtrl.push(EvaluasiPage);
  }

  profil() {
    this.navCtrl.push(ProfilPage);
  }
}

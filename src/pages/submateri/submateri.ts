import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';

import { Sm1Page } from '../../pages/sm1/sm1';
import { Sm2Page } from '../../pages/sm2/sm2';
import { Sm3Page } from '../../pages/sm3/sm3';
import { Sm4Page } from '../../pages/sm4/sm4';
import { Sm5Page } from '../../pages/sm5/sm5';
import { AudioBackgroundProvider } from '../../providers/audio-background/audio-background';

@Component({
  selector: 'page-submateri',
  templateUrl: 'submateri.html',
})
export class SubmateriPage {

  onSound;
  offSound;

  constructor(public navCtrl: NavController, public platform: Platform, private alertCtrl: AlertController, public myAudio: AudioBackgroundProvider) {    
    this.onSound = true;
    this.offSound = false;
    //back button device
    let backAction =  platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
      backAction();
    },2)
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

  sub1() {
    this.navCtrl.push(Sm1Page);
  }

  sub2() {
    this.navCtrl.push(Sm2Page);
  }
  
  sub3() {
    this.navCtrl.push(Sm3Page);
  }
  
  sub4() {
    this.navCtrl.push(Sm4Page);
  }
  
  sub5() {
    this.navCtrl.push(Sm5Page);
  }

  materi() {
    this.navCtrl.pop();
  }

  menu() {
    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
  }

}

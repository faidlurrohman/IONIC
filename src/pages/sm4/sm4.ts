import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { AudioBackgroundProvider } from '../../providers/audio-background/audio-background';

@Component({
  selector: 'page-sm4',
  templateUrl: 'sm4.html',
})
export class Sm4Page {

  onSound;
  offSound;

  constructor(public navCtrl: NavController, public platform: Platform, private alertCtrl: AlertController, public myAudio: AudioBackgroundProvider) {    
    this.onSound = true;
    this.offSound = false;
    //back button device
    let backAction =  platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
      backAction();
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

  subMateri() {
    this.navCtrl.pop();
  }

  menu() {
    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 4));
  }

}

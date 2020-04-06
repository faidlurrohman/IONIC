import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { AudioBackgroundProvider } from '../../providers/audio-background/audio-background';

@Component({
  selector: 'page-pembahasan',
  templateUrl: 'pembahasan.html',
})
export class PembahasanPage {
  onSound;
  offSound;

  imgPmb: string;
  cssClass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private alertCtrl: AlertController, public myAudio: AudioBackgroundProvider) {    
    this.onSound = true;
    this.offSound = false;
    
    //back button device
    let backAction =  platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
      backAction();
    },2);

    let id = navParams.get('id');

    if(id == "1") {
      this.imgPmb = 'assets/imgs/pembahasan/1.png';
      this.cssClass = 'pmb1';
    }
    else if(id == "2") {
      this.imgPmb = 'assets/imgs/pembahasan/2.png';
      this.cssClass = 'pmb2';
    }
    else if(id == "3") {
      this.imgPmb = 'assets/imgs/pembahasan/3.png';
      this.cssClass = 'pmb3';
    }
    else if(id == "4") {
      this.imgPmb = 'assets/imgs/pembahasan/4.png';
      this.cssClass = 'pmb4';
    }
    else if(id == "5") {
      this.imgPmb = 'assets/imgs/pembahasan/5.png';
      this.cssClass = 'pmb5';
    }
    else if(id == "6") {
      this.imgPmb = 'assets/imgs/pembahasan/6.png';
      this.cssClass = 'pmb6';
    }
    else if(id == "7") {
      this.imgPmb = 'assets/imgs/pembahasan/7.png';
      this.cssClass = 'pmb7';
    }
    else if(id == "8") {
      this.imgPmb = 'assets/imgs/pembahasan/8.png';
      this.cssClass = 'pmb8';
    }
    else if(id == "9") {
      this.imgPmb = 'assets/imgs/pembahasan/9.png';
      this.cssClass = 'pmb9';
    }
    else if(id == "10") {
      this.imgPmb = 'assets/imgs/pembahasan/10.png';
      this.cssClass = 'pmb10';
    }
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
  
  evaluasi() {
    this.navCtrl.pop();
  }

  menu() {
    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
  }
}

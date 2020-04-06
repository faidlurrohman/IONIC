import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { AudioBackgroundProvider } from '../../providers/audio-background/audio-background';

@Component({
  selector: 'page-sm1',
  templateUrl: 'sm1.html',
})
export class Sm1Page {

  onSound;
  offSound;

  isiPertama: boolean = false;
  isiKedua: boolean = true;
  isiKetiga: boolean = true;
  isiKeempat: boolean = true;

  backPertama: boolean = true;
  backKedua: boolean = true;
  backKetiga: boolean = true;

  tjnKedua: boolean = false;
  tjnKetiga: boolean = true;
  tjnKeempat: boolean = true;

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

  satu(){
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
  }

  dua(){
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
  }

  tiga(){
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
  }

  empat(){
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
  }

  subMateri() {
    this.navCtrl.pop();
  }

  menu() {
    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 4));
  }
}

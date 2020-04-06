import { Component } from '@angular/core';
import { NavController, Platform, AlertController} from 'ionic-angular';
import { AudioBackgroundProvider } from '../../providers/audio-background/audio-background';

@Component({
  selector: 'page-tujuan',
  templateUrl: 'tujuan.html',
})
export class TujuanPage {

  onSound;
  offSound;

  isiPertama: boolean = false;
  isiKedua: boolean = true;
  isiKetiga: boolean = true;

  backPertama: boolean = true;
  backKedua: boolean = true;

  tjnKedua: boolean = false;
  tjnKetiga: boolean = true;

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

    this.backPertama = true;
    this.backKedua = true;

    this.tjnKedua = false;
    this.tjnKetiga = true;
  }

  dua(){
    this.isiPertama = true;
    this.isiKedua = false;
    this.isiKetiga = true;

    this.backPertama = false;
    this.backKedua = true;

    this.tjnKedua = true;
    this.tjnKetiga = false;
  }

  tiga(){
    this.isiPertama = true;
    this.isiKedua = true;
    this.isiKetiga = false;

    this.backPertama = true;
    this.backKedua = false;

    this.tjnKedua = true;
    this.tjnKetiga = true;
  }

  menu() {
    this.navCtrl.pop();
  }

}

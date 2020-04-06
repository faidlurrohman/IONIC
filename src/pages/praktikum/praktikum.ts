import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { AudioBackgroundProvider } from '../../providers/audio-background/audio-background';

@Component({
  selector: 'page-praktikum',
  templateUrl: 'praktikum.html',
})
export class PraktikumPage {

  @ViewChild('prosedur') prosedurVideo;
  @ViewChild('alat') alatVideo;
  @ViewChild('bahan') bahanVideo;

  onSound;
  offSound;

  prkPertama: boolean = false;
  prkKedua: boolean = true;
  prkKetiga: boolean = true;
  prkKeempat: boolean = true;
  prkKelima: boolean = true;
  prkKeenam: boolean = true;
  prkKetuju: boolean = true;

  videoAlat: boolean = true;
  videoBahan: boolean = true;

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

  prk1() {
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
  }
  
  prk2() {
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
  }

  prk3() {
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
  }
  
  prk4() {
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
  }
  
  prk5() {
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
  }
  
  prk6() {
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
  }
  
  prk7() {
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
  }

  lhtVideoAlat() {
    this.prkPertama = true;
    this.prkKedua = true;
    this.prkKetiga = true;
    this.prkKeempat = true;
    this.prkKelima = true;
    this.prkKeenam = true;
    this.prkKetuju = true;

    this.videoAlat = false;
    this.videoBahan = true;
  }

  lhtVideoBahan() {
    this.prkPertama = true;
    this.prkKedua = true;
    this.prkKetiga = true;
    this.prkKeempat = true;
    this.prkKelima = true;
    this.prkKeenam = true;
    this.prkKetuju = true;

    this.videoAlat = true;
    this.videoBahan = false;
  }

  bAlat() {
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
  }

  bBahan() {
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
  }

  menu() {
    this.navCtrl.pop();
    this.prosedurVideo.nativeElement.pause();
    this.alatVideo.nativeElement.pause();
    this.bahanVideo.nativeElement.pause();
  }
}

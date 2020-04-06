import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AudioBackgroundProvider } from '../../providers/audio-background/audio-background';

import { PembahasanPage } from '../../pages/pembahasan/pembahasan';

@Component({
  selector: 'page-evaluasi',
  templateUrl: 'evaluasi.html',
})
export class EvaluasiPage {
  onSound;
  offSound;

  myForm: FormGroup;
  isName: boolean = false;
  ttlSkor: number;
  quoteSkor: string;

  nama: string;
  cekEmot: string;
  public arrEvl: Array<string> = new Array();
  public arrJwb: Array<string> = ['D','D','A','C','B','D','C','C','D','C'];

  evlMulai: boolean = false;

  soalEvl1: boolean = true;
  soalEvl2: boolean = true;
  soalEvl3: boolean = true;
  soalEvl4: boolean = true;
  soalEvl5: boolean = true;
  soalEvl6: boolean = true;
  soalEvl7: boolean = true;
  soalEvl8: boolean = true;
  soalEvl9: boolean = true;
  soalEvl10: boolean = true;

  hslSoal1: boolean = true;
  hslSoal2: boolean = true;
  hslSoal3: boolean = true;
  hslSoal4: boolean = true;
  hslSoal5: boolean = true;
  hslSoal6: boolean = true;
  hslSoal7: boolean = true;
  hslSoal8: boolean = true;
  hslSoal9: boolean = true;
  hslSoal10: boolean = true;
  
  skorAkhir: boolean = true;

  pmbSoal1: boolean = true;
  pmbSoal2: boolean = true;
  pmbSoal3: boolean = true;
  pmbSoal4: boolean = true;
  pmbSoal5: boolean = true;
  pmbSoal6: boolean = true;
  pmbSoal7: boolean = true;
  pmbSoal8: boolean = true;
  pmbSoal9: boolean = true;
  pmbSoal10: boolean = true;

  constructor(public navCtrl: NavController, public platform: Platform, public fb: FormBuilder, private alertCtrl: AlertController, public myAudio: AudioBackgroundProvider) {
    this.onSound = true;
    this.offSound = false;

    //back button device
    let backAction =  platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
      backAction();
    },2);

    //validation form
    this.myForm = this.fb.group({
      name: ['', [Validators.required]]
    });
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

  validate(data){
    if(data == 'name'){
      this.isName = true;
    }
  }

  mulai() {
    this.evlMulai = true;
    this.soalEvl1 = false;
    this.arrEvl.push(this.nama);
  }

  /////////////////////////////////////////////////////

  jwbSoalA1() {
    this.arrEvl.push("A");
    this.soalEvl1 = true;
    this.soalEvl2 = false;
  }
  
  jwbSoalB1() {
    this.arrEvl.push("B");
    this.soalEvl1 = true;
    this.soalEvl2 = false;
  }
  
  jwbSoalC1() {
    this.arrEvl.push("C");
    this.soalEvl1 = true;
    this.soalEvl2 = false;
  }
  
  jwbSoalD1() {
    this.arrEvl.push("D");
    this.soalEvl1 = true;
    this.soalEvl2 = false;
  }

  //////////////////////////////////////////////////////////////

  jwbSoalA2() {
    this.arrEvl.push("A");
    this.soalEvl2 = true;
    this.soalEvl3 = false;
  }
  
  jwbSoalB2() {
    this.arrEvl.push("B");
    this.soalEvl2 = true;
    this.soalEvl3 = false;
  }
  
  jwbSoalC2() {
    this.arrEvl.push("C");
    this.soalEvl2 = true;
    this.soalEvl3 = false;
  }
  
  jwbSoalD2() {
    this.arrEvl.push("D");
    this.soalEvl2 = true;
    this.soalEvl3 = false;
  }

  //////////////////////////////////////////////////////////////

  jwbSoalA3() {
    this.arrEvl.push("A");
    this.soalEvl3 = true;
    this.soalEvl4 = false;
  }
  
  jwbSoalB3() {
    this.arrEvl.push("B");
    this.soalEvl3 = true;
    this.soalEvl4 = false;
  }
  
  jwbSoalC3() {
    this.arrEvl.push("C");
    this.soalEvl3 = true;
    this.soalEvl4 = false;
  }
  
  jwbSoalD3() {
    this.arrEvl.push("D");
    this.soalEvl3 = true;
    this.soalEvl4 = false;
  }

  //////////////////////////////////////////////////////////////

  jwbSoalA4() {
    this.arrEvl.push("A");
    this.soalEvl4 = true;
    this.soalEvl5 = false;
  }
  
  jwbSoalB4() {
    this.arrEvl.push("B");
    this.soalEvl4 = true;
    this.soalEvl5 = false;
  }

  jwbSoalC4() {
    this.arrEvl.push("C");
    this.soalEvl4 = true;
    this.soalEvl5 = false;
  }
  
  jwbSoalD4() {
    this.arrEvl.push("D");
    this.soalEvl4 = true;
    this.soalEvl5 = false;
  }

  //////////////////////////////////////////////////////////////
  
  jwbSoalA5() {
    this.arrEvl.push("A");
    this.soalEvl5 = true;
    this.soalEvl6 = false;
  }
  
  jwbSoalB5() {
    this.arrEvl.push("B");
    this.soalEvl5 = true;
    this.soalEvl6 = false;
  }
  
  jwbSoalC5() {
    this.arrEvl.push("C");
    this.soalEvl5 = true;
    this.soalEvl6 = false;
  }
  
  jwbSoalD5() {
    this.arrEvl.push("D");
    this.soalEvl5 = true;
    this.soalEvl6 = false;
  }

  //////////////////////////////////////////////////////////////
  
  jwbSoalA6() {
    this.arrEvl.push("A");
    this.soalEvl6 = true;
    this.soalEvl7 = false;
  }
  
  jwbSoalB6() {
    this.arrEvl.push("B");
    this.soalEvl6 = true;
    this.soalEvl7 = false;
  }
  
  jwbSoalC6() {
    this.arrEvl.push("C");
    this.soalEvl6 = true;
    this.soalEvl7 = false;
  }
  
  jwbSoalD6() {
    this.arrEvl.push("D");
    this.soalEvl6 = true;
    this.soalEvl7 = false;
  }

  //////////////////////////////////////////////////////////////
  
  jwbSoalA7() {
    this.arrEvl.push("A");
    this.soalEvl7 = true;
    this.soalEvl8 = false;
  }
  
  jwbSoalB7() {
    this.arrEvl.push("B");
    this.soalEvl7 = true;
    this.soalEvl8 = false;
  }
  
  jwbSoalC7() {
    this.arrEvl.push("C");
    this.soalEvl7 = true;
    this.soalEvl8 = false;
  }
  
  jwbSoalD7() {
    this.arrEvl.push("D");
    this.soalEvl7 = true;
    this.soalEvl8 = false;
  }

  //////////////////////////////////////////////////////////////
  
  jwbSoalA8() {
    this.arrEvl.push("A");
    this.soalEvl8 = true;
    this.soalEvl9 = false;
  }
  
  jwbSoalB8() {
    this.arrEvl.push("B");
    this.soalEvl8 = true;
    this.soalEvl9 = false;
  }
  
  jwbSoalC8() {
    this.arrEvl.push("C");
    this.soalEvl8 = true;
    this.soalEvl9 = false;
  }
  
  jwbSoalD8() {
    this.arrEvl.push("D");
    this.soalEvl8 = true;
    this.soalEvl9 = false;
  }

  //////////////////////////////////////////////////////////////
  
  jwbSoalA9() {
    this.arrEvl.push("A");
    this.soalEvl9 = true;
    this.soalEvl10 = false;
  }
  
  jwbSoalB9() {
    this.arrEvl.push("B");
    this.soalEvl9 = true;
    this.soalEvl10 = false;
  }
  
  jwbSoalC9() {
    this.arrEvl.push("C");
    this.soalEvl9 = true;
    this.soalEvl10 = false;
  }
  
  jwbSoalD9() {
    this.arrEvl.push("D");
    this.soalEvl9 = true;
    this.soalEvl10 = false;
  }

  //////////////////////////////////////////////////////////////
  
  jwbSoalA10() {
    this.arrEvl.push("A");
    this.soalEvl10 = true;
    this.hslSoal1 = false;
    console.log(this.arrEvl);
    if(this.arrEvl[1] == this.arrJwb[0]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }
  
  jwbSoalB10() {
    this.arrEvl.push("B");
    this.soalEvl10 = true;
    this.hslSoal1 = false;
    console.log(this.arrEvl);
    if(this.arrEvl[1] == this.arrJwb[0]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }
  
  jwbSoalC10() {
    this.arrEvl.push("C");
    this.soalEvl10 = true;
    this.hslSoal1 = false;
    console.log(this.arrEvl);
    if(this.arrEvl[1] == this.arrJwb[0]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }
  
  jwbSoalD10() {
    this.arrEvl.push("D");
    this.soalEvl10 = true;
    this.hslSoal1 = false;
    console.log(this.arrEvl);
    if(this.arrEvl[1] == this.arrJwb[0]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }

  //////////////////////////////////////////////////////////////

  next1() {
    this.hslSoal1 = true;
    this.hslSoal2 = false;
    if(this.arrEvl[2] == this.arrJwb[1]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }

  next2() {
    this.hslSoal2 = true;
    this.hslSoal3 = false;
    if(this.arrEvl[3] == this.arrJwb[2]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }
  
  next3() {
    this.hslSoal3 = true;
    this.hslSoal4 = false;
    if(this.arrEvl[4] == this.arrJwb[3]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }
  
  next4() {
    this.hslSoal4 = true;
    this.hslSoal5 = false;
    if(this.arrEvl[5] == this.arrJwb[4]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }
  
  next5() {
    this.hslSoal5 = true;
    this.hslSoal6 = false;
    if(this.arrEvl[6] == this.arrJwb[5]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }
  
  next6() {
    this.hslSoal6 = true;
    this.hslSoal7 = false;
    if(this.arrEvl[7] == this.arrJwb[6]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }
  
  next7() {
    this.hslSoal7 = true;
    this.hslSoal8 = false;
    if(this.arrEvl[8] == this.arrJwb[7]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }
  
  next8() {
    this.hslSoal8 = true;
    this.hslSoal9 = false;
    if(this.arrEvl[9] == this.arrJwb[8]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }
  
  next9() {
    this.hslSoal9 = true;
    this.hslSoal10 = false;
    if(this.arrEvl[10] == this.arrJwb[9]){
      this.cekEmot = "assets/imgs/betul.png";
    }
    else{
      this.cekEmot = "assets/imgs/salah.png";
    }
  }
  
  lhtSkor() {
    this.hslSoal10 = true;
    this.skorAkhir = false;
    let jmlSkor = 0;
    for(let i=0; i<this.arrJwb.length; i++){
      if(this.arrEvl[i+1] == this.arrJwb[i]){
        jmlSkor+=10;
      }
    }
    console.log(jmlSkor);
    this.ttlSkor = jmlSkor;
    if(jmlSkor > 75){
      this.quoteSkor = "Jangan mudah puas dengan apa yang telah Anda dapatkan. Ingat diatas langit masih ada langit"
    }
    else{
      this.quoteSkor = "Jangan mudah menyerah. Coba pejamkan mata dan ingat kembali mungkin Anda belum belajar dengan sungguh-sungguh"
    }
    // console.log(this.arrEvl);
  }

  ulangiEvl() {
    this.skorAkhir = true;
    this.evlMulai = false;
    this.arrEvl = [];
    // console.log(this.arrEvl);
  }

  /////////////////////////////////////////////////////////

  lhtHsl1() {
    this.navCtrl.push(PembahasanPage, {
      id: "1",
    });
  }

  lhtHsl2() {
    this.navCtrl.push(PembahasanPage, {
      id: "2",
    });
  }
  
  lhtHsl3() {
    this.navCtrl.push(PembahasanPage, {
      id: "3",
    });
  }
  
  lhtHsl4() {
    this.navCtrl.push(PembahasanPage, {
      id: "4",
    });
  }
  
  lhtHsl5() {
    this.navCtrl.push(PembahasanPage, {
      id: "5",
    });
  }
  
  lhtHsl6() {
    this.navCtrl.push(PembahasanPage, {
      id: "6",
    });
  }
  
  lhtHsl7() {
    this.navCtrl.push(PembahasanPage, {
      id: "7",
    });
  }
  
  lhtHsl8() {
    this.navCtrl.push(PembahasanPage, {
      id: "8",
    });
  }
  
  lhtHsl9() {
    this.navCtrl.push(PembahasanPage, {
      id: "9",
    });
  }
  
  lhtHsl10() {
    this.navCtrl.push(PembahasanPage, {
      id: "10",
    });
  }

  menu() {
    this.navCtrl.pop();
  }
}

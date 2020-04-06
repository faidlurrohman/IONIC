import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private afDB: AngularFireDatabase) {
  }

  vote1() {
    let alert = this.alertCtrl.create({
      message: 'Masukkan kode :',
			cssClass:'alertKode',
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
          handler: data => {
            const requestRef = firebase.database().ref('kamar');
            requestRef.orderByKey().equalTo(data.kode).once('value').then((snapshot) => {
              console.log(snapshot.child(data.kode).child("kmr").val());
              if(snapshot.child(data.kode).child("vote").val() == null){
                // console.log("tidal ada")
              }
              else if(snapshot.child(data.kode).child("vote").val() != 0){
                // console.log("sudah voting")
              }
              else{
                this.afDB.list('/kamar').update(data.kode,{ vote: 1 });
                var querySatu = firebase.database().ref('hasil/' + snapshot.child(data.kode).child("kmr").val() + '/calon1');
                querySatu.transaction(function(currentVote) {
                  return currentVote + 1;
                });
                var queryDua = firebase.database().ref('total/calon1');
                queryDua.transaction(function(currentVote) {
                  return currentVote + 1;
                });
                // console.log("sukses voting")
              }
            })
          }
        }
      ]
    });
    alert.present();
  }
  vote2() {
    let alert = this.alertCtrl.create({
      message: 'Masukkan kode :',
			cssClass:'alertKode',
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
          handler: data => {
            const requestRef = firebase.database().ref('kamar');
            requestRef.orderByKey().equalTo(data.kode).once('value').then((snapshot) => {
              if(snapshot.child(data.kode).child("vote").val() == null){
                // console.log("tidal ada")
              }
              else if(snapshot.child(data.kode).child("vote").val() != 0){
                // console.log("sudah voting")
              }
              else{
                this.afDB.list('/kamar').update(data.kode,{ vote: 2 });
                var querySatu = firebase.database().ref('hasil/' + snapshot.child(data.kode).child("kmr").val() + '/calon2');
                querySatu.transaction(function(currentVote) {
                  return currentVote + 1;
                });
                var queryDua = firebase.database().ref('total/calon2');
                queryDua.transaction(function(currentVote) {
                  return currentVote + 1;
                });
                // console.log("sukses voting")
              }
            })
          }
        }
      ]
    });
    alert.present();
  }
  vote3() {
    let alert = this.alertCtrl.create({
      message: 'Masukkan kode :',
			cssClass:'alertKode',
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
          handler: data => {
            const requestRef = firebase.database().ref('kamar');
            requestRef.orderByKey().equalTo(data.kode).once('value').then((snapshot) => {
              if(snapshot.child(data.kode).child("vote").val() == null){
                // console.log("tidal ada")
              }
              else if(snapshot.child(data.kode).child("vote").val() != 0){
                // console.log("sudah voting")
              }
              else{
                this.afDB.list('/kamar').update(data.kode,{ vote: 3 });
                var querySatu = firebase.database().ref('hasil/' + snapshot.child(data.kode).child("kmr").val() + '/calon3');
                querySatu.transaction(function(currentVote) {
                  return currentVote + 1;
                });
                var queryDua = firebase.database().ref('total/calon3');
                queryDua.transaction(function(currentVote) {
                  return currentVote + 1;
                });
                // console.log("sukses voting")
              }
            })
          }
        }
      ]
    });
    alert.present();
  }
  vote4() {
    let alert = this.alertCtrl.create({
      message: 'Masukkan kode :',
			cssClass:'alertKode',
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
          handler: data => {
            const requestRef = firebase.database().ref('kamar');
            requestRef.orderByKey().equalTo(data.kode).once('value').then((snapshot) => {
              if(snapshot.child(data.kode).child("vote").val() == null){
                // console.log("tidal ada")
              }
              else if(snapshot.child(data.kode).child("vote").val() != 0){
                // console.log("sudah voting")
              }
              else{
                this.afDB.list('/kamar').update(data.kode,{ vote: 4 });
                var querySatu = firebase.database().ref('hasil/' + snapshot.child(data.kode).child("kmr").val() + '/calon4');
                querySatu.transaction(function(currentVote) {
                  return currentVote + 1;
                });
                var queryDua = firebase.database().ref('total/calon4');
                queryDua.transaction(function(currentVote) {
                  return currentVote + 1;
                });
                // console.log("sukses voting")
              }
            })
          }
        }
      ]
    });
    alert.present();
  }
}

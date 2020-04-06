import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';

import firebase from 'firebase';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  ktgVote: string;
  vote1;
  vote2;
  vote3;
  vote4;
  hslKmr;
  hslCalon1;
  hslCalon2;
  hslCalon3;
  hslCalon4;
  // displayKey;
  displayHsl;
  
  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase) {
    this.ktgVote = "total";
  }

  ionViewWillEnter(){
    //total vote
    let tempArrayTtl:any = [];
    this.afDB.list('/total').snapshotChanges().subscribe((res) => {
      res.forEach((ele) => {
        tempArrayTtl.push(ele.payload.val())
      });
      this.vote1 = tempArrayTtl[0];
      this.vote2 = tempArrayTtl[1];
      this.vote3 = tempArrayTtl[2];
      this.vote4 = tempArrayTtl[3];
    })

    
    //perkamar vote
    // let tempArrayKmr:any = [];
    // this.afDB.list('/hasil').snapshotChanges().subscribe((res) => {
      // res.forEach((ele) => {
        // console.log(ele.payload.val())
    //     tempArrayKmr.push(ele.payload.val())
      // });
    //   console.log(tempArrayKmr.key)
    // })
    // let tmpKey:any = [];
    let tmpHsl:any = [];
    firebase.database().ref("hasil").once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        tmpHsl.push({
          'kmr': childSnapshot.key,
          'calon1': childSnapshot.val().calon1,
          'calon2': childSnapshot.val().calon2,
          'calon3': childSnapshot.val().calon3,
          'calon4': childSnapshot.val().calon4
        })
        // tmpKey.push(childSnapshot.key);
        // tmpHsl.push(childSnapshot.val());
        // this.hslKmr = childSnapshot.key;
        // this.hslCalon1 = childSnapshot.val().calon1;
        // this.hslCalon2 = childSnapshot.val().calon2;
        // this.hslCalon3 = childSnapshot.val().calon3;
        // this.hslCalon4 = childSnapshot.val().calon4;
        // console.log(childSnapshot.key);
        // console.log(childSnapshot.val());
      });
    });
    console.log(tmpHsl)
    // this.displayKey = tmpKey;
    this.displayHsl = tmpHsl;
  }
}

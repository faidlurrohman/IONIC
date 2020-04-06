import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { MenuPage } from '../../pages/menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    //loading
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      showBackdrop: false,
      cssClass: 'my-loading-class'
    });

    loading.present();
  
    setTimeout(() => {
      this.navCtrl.push(MenuPage);
    }, 5000);
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
}

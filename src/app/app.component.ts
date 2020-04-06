import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AudioBackgroundProvider } from '../providers/audio-background/audio-background';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild("audio") audio;
  private _AUDIO: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, screenOrientation: ScreenOrientation, public myAudio: AudioBackgroundProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //orientation  
      screenOrientation.lock(screenOrientation.ORIENTATIONS.LANDSCAPE);
      statusBar.styleDefault();
      statusBar.hide();
      splashScreen.hide();
    });
  }

  ngAfterViewInit() {
    this._AUDIO = this.audio.nativeElement;
    this.myAudio.loadAudio(this._AUDIO);
  }
}


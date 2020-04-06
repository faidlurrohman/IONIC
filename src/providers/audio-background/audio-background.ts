import { Injectable } from '@angular/core';

@Injectable()
export class AudioBackgroundProvider {
  
  _AUDIO: any;
  statAudio: any;

  constructor() {
  }

  loadAudio(tmp) {
    this._AUDIO = tmp;
    // this._AUDIO.oncanplaythrough = () => {
      this._AUDIO.play();
      this._AUDIO.volume = 0.5;
      this._AUDIO.loop = true;
      this.statAudio = 'play';
    // };
  }

  cekAudio() {
    if(this.statAudio == 'pause' ){
      // console.log('pause');
      this.statAudio = 'pause';
      return Promise.resolve(this.statAudio);
    }
    else{
      // console.log('play');
      this.statAudio = 'play';
      return Promise.resolve(this.statAudio);
    }
  }

  pauseAudio() {
    this._AUDIO.pause();
    this.statAudio = 'pause';
  }

  playAudio() {
    this._AUDIO.play();
    this.statAudio = 'play';
  }

  // play(tmp) {
  //   tmp.pause()
  // }

  // pause(tmp) {
  //   tmp.play()
  // }
}

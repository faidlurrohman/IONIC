import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HttpClientModule } from '@angular/common/http'; 
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { EvaluasiPage } from '../pages/evaluasi/evaluasi';
import { PetunjukPage } from '../pages/petunjuk/petunjuk';
import { PraktikumPage } from '../pages/praktikum/praktikum';
import { ProfilPage } from '../pages/profil/profil';
import { TujuanPage } from '../pages/tujuan/tujuan';
import { MateriPage } from '../pages/materi/materi';
import { MindmapPage } from '../pages/mindmap/mindmap';
import { SubmateriPage } from '../pages/submateri/submateri';
import { PembahasanPage } from '../pages/pembahasan/pembahasan';
import { Sm1Page } from '../pages/sm1/sm1';
import { Sm2Page } from '../pages/sm2/sm2';
import { Sm3Page } from '../pages/sm3/sm3';
import { Sm4Page } from '../pages/sm4/sm4';
import { Sm5Page } from '../pages/sm5/sm5';

import { AudioBackgroundProvider } from '../providers/audio-background/audio-background';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    EvaluasiPage,
    PetunjukPage,
    PraktikumPage,
    ProfilPage,
    TujuanPage,
    MateriPage,
    MindmapPage,
    SubmateriPage,
    Sm1Page,
    Sm2Page,
    Sm3Page,
    Sm4Page,
    Sm5Page,
    PembahasanPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    EvaluasiPage,
    PetunjukPage,
    PraktikumPage,
    ProfilPage,
    TujuanPage,
    MateriPage,
    MindmapPage,
    SubmateriPage,
    Sm1Page,
    Sm2Page,
    Sm3Page,
    Sm4Page,
    Sm5Page,
    PembahasanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AudioBackgroundProvider,
    PhotoViewer
  ]
})
export class AppModule {}

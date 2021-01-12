import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';


// environment
import { environment } from '../environments/environment';


export const firebaseConfig = {
  apiKey: 'AIzaSyC7LZfQ_SqiIBgaHnWdyotbxKUjmRNE6qc',
  authDomain: 'lost-found-113c2.firebaseapp.com',
  projectId: 'lost-found-113c2',
  storageBucket: 'lost-found-113c2.appspot.com',
  
  messagingSenderId: '661634314618',
  appId: '1:661634314618:web:8d44750299fae58a6be6c3',
  measurementId: 'G-QRFDLR071Y'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    
],
  providers: [
    StatusBar,
    SplashScreen,
   Camera,
   // VideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotothequePageRoutingModule } from './phototheque-routing.module';

import { PhotothequePage } from './phototheque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotothequePageRoutingModule
  ],
  declarations: [PhotothequePage]
})
export class PhotothequePageModule {}

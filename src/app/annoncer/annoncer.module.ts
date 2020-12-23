import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnoncerPageRoutingModule } from './annoncer-routing.module';

import { AnnoncerPage } from './annoncer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnoncerPageRoutingModule
  ],
  declarations: [AnnoncerPage]
})
export class AnnoncerPageModule {}

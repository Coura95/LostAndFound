import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnoncesPageRoutingModule } from './annonces-routing.module';

import { AnnoncesPage } from './annonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnoncesPageRoutingModule
  ],
  declarations: [AnnoncesPage]
})
export class AnnoncesPageModule {}

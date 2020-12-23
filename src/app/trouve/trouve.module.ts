import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrouvePageRoutingModule } from './trouve-routing.module';

import { TrouvePage } from './trouve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrouvePageRoutingModule
  ],
  declarations: [TrouvePage]
})
export class TrouvePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerduPageRoutingModule } from './perdu-routing.module';

import { PerduPage } from './perdu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerduPageRoutingModule
  ],
  declarations: [PerduPage]
})
export class PerduPageModule {}

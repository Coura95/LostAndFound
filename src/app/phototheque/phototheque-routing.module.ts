import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotothequePage } from './phototheque.page';

const routes: Routes = [
  {
    path: '',
    component: PhotothequePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotothequePageRoutingModule {}

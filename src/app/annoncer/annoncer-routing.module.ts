import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnoncerPage } from './annoncer.page';

const routes: Routes = [
  {
    path: '',
    component: AnnoncerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnoncerPageRoutingModule {}

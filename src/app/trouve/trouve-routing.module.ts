import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrouvePage } from './trouve.page';

const routes: Routes = [
  {
    path: '',
    component: TrouvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrouvePageRoutingModule {}

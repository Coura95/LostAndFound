import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerduPage } from './perdu.page';

const routes: Routes = [
  {
    path: '',
    component: PerduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerduPageRoutingModule {}

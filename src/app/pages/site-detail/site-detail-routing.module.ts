import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteDetailPage } from './site-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SiteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteDetailPageRoutingModule {}

import { MapComponent } from './../../components/map/map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteDetailPageRoutingModule } from './site-detail-routing.module';

import { SiteDetailPage } from './site-detail.page';

import { GoogleMapsModule } from '@angular/google-maps'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteDetailPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [
    SiteDetailPage,
    MapComponent
  ]
})
export class SiteDetailPageModule {}

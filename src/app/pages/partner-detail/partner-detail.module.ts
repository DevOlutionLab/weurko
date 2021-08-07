import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerDetailPageRoutingModule } from './partner-detail-routing.module';

import { PartnerDetailPage } from './partner-detail.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerDetailPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [PartnerDetailPage]
})
export class PartnerDetailPageModule {}

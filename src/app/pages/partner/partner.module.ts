import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerPageRoutingModule } from './partner-routing.module';

import { PartnerPage } from './partner.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerPageRoutingModule,
    SharedDirectivesModule,
    Ng2SearchPipeModule
  ],
  declarations: [PartnerPage]
})
export class PartnerPageModule {}

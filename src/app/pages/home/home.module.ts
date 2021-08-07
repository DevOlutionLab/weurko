import { SearchComponent } from './../../components/search/search.component';
import { ScrollVanishDirective } from './../../directives/scroll-vanish.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Ng2SearchPipeModule,
    SharedDirectivesModule
  ],
  declarations: [
    HomePage,
    SearchComponent
  ]
})
export class HomePageModule {}

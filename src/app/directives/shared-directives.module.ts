import { ParallaxHeaderDirective } from './parallax-header.directive';
import { ScrollVanishDirective } from './scroll-vanish.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ScrollVanishDirective,
    ParallaxHeaderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollVanishDirective,
    ParallaxHeaderDirective
  ]
})
export class SharedDirectivesModule { }

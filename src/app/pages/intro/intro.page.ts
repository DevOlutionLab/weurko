import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})

export class IntroPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }

  previous() {
    this.slides.slidePrev();
  }

  async start() {
    await this.storageService.set(INTRO_KEY, true).then(_ => this.router.navigateByUrl('/home'));
  }
}

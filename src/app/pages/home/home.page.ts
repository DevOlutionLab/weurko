import { PartnerService } from './../../services/partner.service';
import { SearchComponent } from './../../components/search/search.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Partner } from 'src/app/models/Partner';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  sliderOptions = {
    loop: true,
    slidesPerView: 2.5
  }

  filterTerm: string;

  partners: Partner[];

  constructor(
    private modalCtrl: ModalController,
    private partnerService: PartnerService
  ) { }

  ngOnInit() {
    this.getFeaturedPartners();
  }

  doRefresh(event) {
    // console.log('Begin async operation');

    setTimeout(() => {
      // console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getFeaturedPartners() {
    this.partnerService.getFeaturedPartners().subscribe((res: Partner[]) => {
      this.partners = res;
      console.log('featured partners: ', this.partners);
    })
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SearchComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}

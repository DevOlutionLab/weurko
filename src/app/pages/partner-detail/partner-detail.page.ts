import { Site } from './../../models/site';
import { SiteService } from './../../services/site.service';
import { PartnerService } from 'src/app/services/partner.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partner } from 'src/app/models/Partner';

@Component({
  selector: 'app-partner-detail',
  templateUrl: './partner-detail.page.html',
  styleUrls: ['./partner-detail.page.scss'],
})
export class PartnerDetailPage implements OnInit {

  id: any;
  partner: Partner;
  sites: Site[];
  showMore: boolean = false;

  constructor(
    private partnerService: PartnerService,
    private siteService: SiteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // get item id from route params
    this.id = this.route.snapshot.params.id;
    this.getPartner();
    this.getSites();
  }

  getPartner() {
    this.partnerService.getPartnerById(this.id).subscribe((res: Partner) => {
      this.partner = res;
      // console.log(this.partner);
    });
  }

  getSites() {
    this.siteService.getPartnerSites(this.id).subscribe((res: Site[]) => {
      this.sites = res;
      console.log('sites: ', this.sites);
    })
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}

import { Site } from './../../models/site';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.page.html',
  styleUrls: ['./site-detail.page.scss'],
})
export class SiteDetailPage implements OnInit {

  id: any;
  site: Site;

  constructor(
    private siteService: SiteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // get item id from route params
    this.id = this.route.snapshot.params.id;
    this.getSite();
  }

  getSite() {
    this.siteService.getSiteById(this.id).subscribe((res: Site) => {
      this.site = res;
      console.log(this.site);
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}

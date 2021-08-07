import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar, ModalController } from '@ionic/angular';
import { Partner } from 'src/app/models/Partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild(IonSearchbar) searchBar: IonSearchbar;

  filteredPartners: Partner[] = [];
  showSkeleton: boolean;
  touched: boolean;

  constructor(
    private modalCtrl: ModalController,
    private partnerService: PartnerService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 1000);
  }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  search(ev: any) {
    this.touched = false;
    this.filteredPartners = [];
    this.showSkeleton = true;
    this.partnerService.searchPartners(ev.target.value).subscribe((prods: Partner[]) => {
      console.log(prods);
      if (prods.length <= 0) {
        this.touched = true;
      } else {
        this.touched = false;
      }

      this.showSkeleton = false;
      this.filteredPartners = prods;
    }, err => console.log(err));
  }

  navigateToPartnerDetail(id: any) {
    this.dismiss();
    this.router.navigateByUrl(`/partner-detail/${id}`);
  }

}

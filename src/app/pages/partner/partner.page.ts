import { BusinessSectorService } from './../../services/business-sector.service';
import { PartnerService } from 'src/app/services/partner.service';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IonList, IonContent, IonSlides } from '@ionic/angular';
import { BusinessSector } from 'src/app/models/business-sector';
import { Partner } from 'src/app/models/Partner';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.page.html',
  styleUrls: ['./partner.page.scss'],
})
export class PartnerPage implements OnInit {

  @ViewChildren(IonList, { read: ElementRef }) lists: QueryList<ElementRef>;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonSlides) slides: IonSlides;

  opts = {
    freeMode: true,
    slidesPerView: 2.8,
    slidesOffsetBefore: 30,
    slidesOffsetAfter: 100
  };

  businessSectors: BusinessSector[];
  partners: Partner[];
  entries: BusinessSector[];

  activeSector = 0;
  listElements: ElementRef<any>[];

  filterTerm: string;

  constructor(
    private businessSectorService: BusinessSectorService,
    private partnerService: PartnerService
  ) { }

  ngOnInit() {
    this.getSectors();
    // this.getProducts();
    this.getEntries();
  }

  doRefresh(event) {
    // console.log('Begin async operation');

    setTimeout(() => {
      // console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getSectors() {
    this.businessSectorService.getBusinessSectors().subscribe((res: BusinessSector[]) => {
      this.businessSectors = res;
    });
  }

  getPartners() {
    this.partnerService.getPartners().subscribe((res: Partner[]) => {
      this.partners = res;
    });
  }

  getEntries() {
    this.businessSectorService.getBusinessSectorsWithPartners().subscribe((res: BusinessSector[]) => {
      this.entries = res;
      console.log(this.entries);
    });
  }

  ngAfterViewInit(): void {
    this.lists.changes.subscribe(_ => {
      this.listElements = this.lists.toArray();
      // console.log(this.listElements);
    });
  }

  selectSector(index) {
    const child = this.listElements[index].nativeElement;
    this.content.scrollToPoint(0, child.offsetTop - 150, 1000);
  }

  onScroll(ev) {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.listElements.length; i++) {
      const item = this.listElements[i].nativeElement;
      if (this.isElementInViewport(item)) {
        // console.log('IS VISIBLE');
        this.activeSector = i;
        this.slides.slideTo(i);
        break;
      }
    }
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.height + rect.top) - 150 > 0;
  }

}

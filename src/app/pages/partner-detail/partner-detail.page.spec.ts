import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartnerDetailPage } from './partner-detail.page';

describe('PartnerDetailPage', () => {
  let component: PartnerDetailPage;
  let fixture: ComponentFixture<PartnerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

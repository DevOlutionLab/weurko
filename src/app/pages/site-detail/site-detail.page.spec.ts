import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiteDetailPage } from './site-detail.page';

describe('SiteDetailPage', () => {
  let component: SiteDetailPage;
  let fixture: ComponentFixture<SiteDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

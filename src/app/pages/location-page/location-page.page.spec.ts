import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationPagePage } from './location-page.page';

describe('LocationPagePage', () => {
  let component: LocationPagePage;
  let fixture: ComponentFixture<LocationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

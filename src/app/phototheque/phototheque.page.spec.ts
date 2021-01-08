import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotothequePage } from './phototheque.page';

describe('PhotothequePage', () => {
  let component: PhotothequePage;
  let fixture: ComponentFixture<PhotothequePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotothequePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotothequePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

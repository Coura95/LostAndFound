import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnoncesPage } from './annonces.page';

describe('AnnoncesPage', () => {
  let component: AnnoncesPage;
  let fixture: ComponentFixture<AnnoncesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnnoncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

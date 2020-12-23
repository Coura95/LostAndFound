import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivraisonPage } from './livraison.page';

describe('LivraisonPage', () => {
  let component: LivraisonPage;
  let fixture: ComponentFixture<LivraisonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivraisonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivraisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

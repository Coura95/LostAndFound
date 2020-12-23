import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnoncerPage } from './annoncer.page';

describe('AnnoncerPage', () => {
  let component: AnnoncerPage;
  let fixture: ComponentFixture<AnnoncerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnnoncerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

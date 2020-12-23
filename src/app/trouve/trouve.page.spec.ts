import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrouvePage } from './trouve.page';

describe('TrouvePage', () => {
  let component: TrouvePage;
  let fixture: ComponentFixture<TrouvePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrouvePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrouvePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

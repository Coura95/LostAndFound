import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerduPage } from './perdu.page';

describe('PerduPage', () => {
  let component: PerduPage;
  let fixture: ComponentFixture<PerduPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerduPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

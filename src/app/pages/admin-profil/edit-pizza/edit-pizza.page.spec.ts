import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPizzaPage } from './edit-pizza.page';

describe('EditPizzaPage', () => {
  let component: EditPizzaPage;
  let fixture: ComponentFixture<EditPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPizzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

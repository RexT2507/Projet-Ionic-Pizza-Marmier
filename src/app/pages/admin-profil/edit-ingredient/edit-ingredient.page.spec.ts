import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditIngredientPage } from './edit-ingredient.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponentModule } from 'src/app/components/footer/footer.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditIngredientPage', () => {
  let component: EditIngredientPage;
  let fixture: ComponentFixture<EditIngredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIngredientPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        FooterComponentModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditIngredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

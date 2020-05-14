import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPizzaComponent } from './add-pizza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { Camera } from '@ionic-native/camera/ngx';
import { HttpClientModule } from '@angular/common/http';

describe('AddPizzaComponent', () => {
  let component: AddPizzaComponent;
  let fixture: ComponentFixture<AddPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPizzaComponent ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        Camera,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

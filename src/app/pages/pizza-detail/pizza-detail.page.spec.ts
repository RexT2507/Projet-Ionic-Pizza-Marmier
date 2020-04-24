import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaDetailPage } from './pizza-detail.page';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponentModule } from 'src/app/components/footer/footer.module';

describe('PizzaDetailPage', () => {
  let component: PizzaDetailPage;
  let fixture: ComponentFixture<PizzaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDetailPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule,
        FooterComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

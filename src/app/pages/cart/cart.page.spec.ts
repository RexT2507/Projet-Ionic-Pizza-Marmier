import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { CartPage } from './cart.page';



describe('CartPage', () => {
  let component: CartPage;
  let fixture: ComponentFixture<CartPage>;
  const exist = true;
  // tslint:disable-next-line: prefer-const
  let pizza;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPage ],
      imports: [
        HttpClientModule,
        IonicModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('decreaseCartItem', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.decreaseCartItem(pizza));
  });

  it('removeCartItem', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.removeCartItem(pizza));
  });

});

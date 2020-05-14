import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
});

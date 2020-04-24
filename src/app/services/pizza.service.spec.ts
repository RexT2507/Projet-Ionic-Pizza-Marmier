import { TestBed } from '@angular/core/testing';

import { PizzaService } from './pizza.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('PizzaService', () => {

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: PizzaService = TestBed.get(PizzaService);
    expect(service).toBeTruthy();
  });
});

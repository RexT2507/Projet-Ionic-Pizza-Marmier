import { TestBed } from '@angular/core/testing';

import { IngredientService } from './ingredient.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('IngredientService', () => {

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: IngredientService = TestBed.get(IngredientService);
    expect(service).toBeTruthy();
  });
});

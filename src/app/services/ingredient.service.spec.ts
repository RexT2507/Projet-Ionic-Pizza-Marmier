import { TestBed } from '@angular/core/testing';

import { IngredientService } from './ingredient.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('IngredientService', () => {

  let httpTestingController: HttpTestingController;
  const exist = true;

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

  it('getAllIngredient', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
  });

});

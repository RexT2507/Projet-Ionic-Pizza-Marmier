import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientUrl = 'https://api.ynov.jcatania.io/ingredient';

  constructor(private http: HttpClient) { }

  getAllIngredient() {
    return this.http.get<any>(`${this.ingredientUrl}`);
  }

  getIngredientById(id: string) {
    return this.http.get<any>(`${this.ingredientUrl}/${id}`);
  }

  addIngredient(ingredient: any) {
    return this.http.post(`${this.ingredientUrl}`, ingredient);
  }

  updateIngredient(ingredient: any) {
    return this.http.put(`${this.ingredientUrl}/${ingredient._id}`, ingredient);
  }

  deleteIngredient(id: string) {
    return this.http.delete(`${this.ingredientUrl}/${id}`);
  }

}

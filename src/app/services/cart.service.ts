import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Pizza {
  id: number;
  photo: string;
  nom: string;
  prix: number;
  amount: number;
  ingredient: Array<string>;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Pizza[] = [
    { id: 0, photo: '../../../assets/jurassic-park.jpg', nom: 'Pizza Salami', prix: 8.99, amount: 1, ingredient: []},
    { id: 1, photo: '../../../assets/jurassic-park.jpg', nom: 'Pizza Classic', prix: 5.46, amount: 1, ingredient: []},
    { id: 2, photo: '../../../assets/jurassic-park.jpg', nom: 'Pizza Royal', prix: 4.99, amount: 1, ingredient: []},
    { id: 3, photo: '../../../assets/jurassic-park.jpg', nom: 'Pizza Mozzarela', prix: 6.99, amount: 1, ingredient: []}
  ];

  private cart = [];

  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getPizza() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addPizza(pizza) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === pizza.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(pizza);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreasePizza(pizza) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === pizza.id) {
        p.amount -= 1;
        if (p.amount === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removePizza(pizza) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === pizza.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}

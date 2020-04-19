import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PizzaService } from './pizza.service';

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

  datas: any;

  private cart = [];

  private cartItemCount = new BehaviorSubject(0);

  constructor(private pizzaService: PizzaService) { }

  // Test de données mock
  // getPizza() {
  //   return this.data;
  // }

  getPizza() {
    this.pizzaService.getAllPizza().subscribe(
      res => {
        this.datas = res;
        console.log(this.datas);
      },
      err => {
        console.log(err);
      }
    );
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addPizza(pizza) {
    let added = false;
    // tslint:disable-next-line: prefer-const
    for (let p of this.cart) {
      if (p.id === pizza.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      pizza.amount = 1;
      this.cart.push(pizza);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreasePizza(pizza) {
    // tslint:disable-next-line: prefer-const
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
    // tslint:disable-next-line: prefer-const
    for (let [index, p] of this.cart.entries()) {
      if (p.id === pizza.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}

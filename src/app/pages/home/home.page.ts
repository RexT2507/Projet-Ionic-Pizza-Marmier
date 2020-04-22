import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../cart/cart.page';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cart = [];
  pizza: any;
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService, private modalCtrl: ModalController, private pizzaService: PizzaService) {}

  ngOnInit() {
    this.getPizza();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  getPizza(): void {
    this.pizzaService.getAllPizza().subscribe(
      res => {
        this.pizza = res;
        // Teste affichage des pizza
        // console.log(`Les pizza : ${this.pizza}`);
      }
    );
  }

  addToCart(pizza) {
    this.cartService.addPizza(pizza);
  }

  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  }
}

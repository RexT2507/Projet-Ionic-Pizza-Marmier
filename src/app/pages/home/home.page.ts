import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../cart/cart.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cart = [];
  pizza = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.pizza = this.cartService.getPizza();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(pizza) {
    this.cartService.addPizza(pizza);
  }

  async openCart() {
    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  }
}

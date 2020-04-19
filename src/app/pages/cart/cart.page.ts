import { Component, OnInit } from '@angular/core';
import { Pizza, CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: Pizza[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(pizza) {
    this.cartService.decreasePizza(pizza);
  }

  increaseCartItem(pizza) {
    this.cartService.addPizza(pizza);
  }

  removeCartItem(pizza) {
    this.cartService.removePizza(pizza);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.prix * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  checkout() {
    
  }

}

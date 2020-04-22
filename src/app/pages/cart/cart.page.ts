import { Component, OnInit } from '@angular/core';
import { Pizza, CartService } from 'src/app/services/cart.service';
import { ModalController, AlertController  } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: Pizza[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

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

  async checkout(cartFull) {
    const alert = await this.alertCtrl.create({
      header: 'Merci pour votre achat',
      message: 'Votre commande sera délivré le plus tôt possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
      const i = 0;
      while (i !== cartFull.length) {
        this.removeCartItem(cartFull[i]);
      }
    });
  }

}

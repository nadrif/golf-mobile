import { ViewController} from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { BarsPage } from '../bars/bars';
import { ToastController } from 'ionic-angular';
import { CartPage } from '../cart/cart';


@Component({
  templateUrl: 'bar-menu.html',
  selector: 'bar-menu'
})
export class BarMenu {

  constructor(
    private viewCtrl: ViewController, 
    public toastCtrl: ToastController,
    public navCtrl: NavController) {
  }

   GoToCart() {
    this.navCtrl.push(CartPage);
  }

  // close the modal
  dismiss() {
    this.viewCtrl.dismiss();
  }

//toast of adding to MENU
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Item added to cart',
      duration: 3000
    });
    toast.present();
  }

   removeItemFromCart() {
    let toast = this.toastCtrl.create({
      message: 'Item Removed from cart',
      duration: 3000
    });
    toast.present();
  }

}
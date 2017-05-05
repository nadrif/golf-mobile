import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { BarsPage } from '../bars/bars';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { BarEgPage } from '../bar-example/bar-example';
import { CartPage } from '../cart/cart';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController) {
  }

  openMenu() {
    console.log("where's my menu!?");
   this.menuCtrl.open();
 }

  public signIn() {
    this.navCtrl.push(BarsPage);
  }

  public signUp() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  public presentLoadingCustom(social) {

    console.log("signed in with " + social);
    let loader = this.loadingCtrl.create({
      content:  "Signing in with " + social,
      duration: 3000,
      showBackdrop: false,
    });

    loader.present();

    setTimeout(() => {
      this.navCtrl.push(BarsPage);
    }, 4000);
  }


}
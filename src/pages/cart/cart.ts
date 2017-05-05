import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { BarsPage } from '../bars/bars';
import { BarMenu } from '../bar-menu/bar-menu';


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(private navCtrl: NavController, private viewCtrl: ViewController) {

  }

}

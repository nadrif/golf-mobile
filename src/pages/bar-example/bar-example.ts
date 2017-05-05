import { Component, OnInit } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams } from 'ionic-angular';
import { BarsPage } from '../bars/bars';
import { BarMenu } from '../bar-menu/bar-menu';
import { ActionSheetController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
// import { Beerhouse }  from '../login/login';

@Component({
  selector: 'bar-example',
  templateUrl: 'bar-example.html'
})

export class BarEgPage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController, 
    private modalCtrl: ModalController) {
  }
 GoToBar() {
   this.navCtrl.push(BarMenu);
 }

 presentBarContact() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Beerhouse Contact Info',
     buttons: [
       {
         text: 'Call Beerhouse',
         handler: () => {
           console.log('Calling Beerhouse');
         }
       },
       {
         text: 'Email Beerhouse',
         handler: () => {
           console.log('Emailing Beerhouse');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }

  public BarMenuModal() {
    let modal = this.modalCtrl.create(BarMenu);
    modal.present();
  }
}

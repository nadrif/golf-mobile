import { Component, NgModule, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarEgPage } from '../bar-example/bar-example';

@Component({
  selector: 'page-bars',
  templateUrl: 'bars.html'
})

// add "implements OnInit to this"
export class BarsPage {

  constructor(public navCtrl: NavController) {
  }
    

    // Figure out how to launch this all the time
  // ngOnInit(){
  //   this.toaster= function presentToast() {
  //   let toast = this.toastCtrl.create({
  //     message: 'Signed in Successfully!',
  //     duration: 1500
  //   });
  //   toast.present();
  // }
    
  // }
  
  public Beerhouse() {
    this.navCtrl.push(BarEgPage);
  }

}
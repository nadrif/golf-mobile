import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
import { BarsPage } from '../pages/bars/bars';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any = HomePage;

  constructor(
  platform: Platform, 
  statusBar: StatusBar, 
  splashScreen: SplashScreen
    ) {


    this.rootPage = HomePage; 
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });

    
  }
}
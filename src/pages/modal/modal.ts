import { ViewController} from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
  templateUrl: 'modal.html',
  selector: 'modal-main'
})
export class ModalPage {

  constructor(private viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
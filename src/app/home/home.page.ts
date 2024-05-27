import { Component, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage implements OnInit{
  number1: any;
  number2: any;
  result: any;

  constructor(private toastController : ToastController) {}

  ngOnInit(): void {

  }

  add() {
    this.result = Number(this.number1) + Number(this.number2);
  }
  subtract() {
    this.result = Number(this.number1) - Number(this.number2);
  }
  multiply() {
    this.result = Number(this.number1) * Number(this.number2);
  }
  async divide() {
    if (Number(this.number2) != 0)
      this.result = Number(this.number1) / Number(this.number2);
    else{
      const toast = await this.toastController.create({
        message: 'Not posible divide by 0',
        duration: 3000,
        position:"middle",
        color:"danger",
      });
      await toast.present();
    }
  }
}

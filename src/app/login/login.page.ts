import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class LoginPage implements OnInit {
  User: String = '';
  Password: String = '';

  obj = [
    {
      User: 'User',
      Password: 'Us3r',
      Type: 'user',
    },
    {
      User: 'Admin',
      Password: 'admin',
      Type: 'admin',
    },
  ];

  constructor(public router: Router) {}

  ngOnInit() {}

  inicio() {
    this.obj.map((data) => {
      const { User, Password, Type } = data;
      if (this.User === User && this.Password === Password) {
        Type === 'user'
          ? this.router.navigate(['/home'])
          : this.router.navigate(['/admin']);
      } else {
        alert('No se logueó');
      }
    });
  }
}

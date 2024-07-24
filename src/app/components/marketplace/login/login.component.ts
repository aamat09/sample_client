import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {ApiService} from "../../../services/marketplace/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardContent,
    FormsModule,
    MatFormField,
    MatCardTitle,
    MatCard,
    MatInput,
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    this.apiService.login(this.username, this.password).subscribe(user => {
      localStorage.setItem('user', JSON.stringify(user));
      if (user.role === 'CUSTOMER') {
        this.router.navigate(['/marketplace/customer-dashboard']);
      } else if (user.role === 'DEALER') {
        this.router.navigate(['/marketplace/dealer-dashboard']);
      }
    });
  }
}

import { Component } from '@angular/core';
import AdminService from '../../../service/AdminService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
 username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login({ username: this.username, password: this.password })
      .subscribe({
        next: (res) => {
          if (res.token) {
            this.auth.saveToken(res.token);
            this.router.navigate(['/dashboard']);
          } else {
            this.error = res.error;
          }
        },
        error: () => this.error = 'Invalid credentials.'
      });
  }
}

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
 form = {
    username: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

// login.component.ts
// login.component.ts
onSubmit() {
  this.auth.login(this.form).subscribe({
    next: (res) => {
      if (res.token) {
        this.auth.saveToken(res.token);
        console.log('[Login] Token saved to localStorage:', res.token); // 🚨 Debug log
        this.router.navigate(['/dashboard']);
      }
    },
    error: (err) => console.error('Login error:', err),
  });
}


}

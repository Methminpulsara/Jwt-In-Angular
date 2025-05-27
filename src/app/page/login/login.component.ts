import { Component } from '@angular/core';
import AdminService from '../../../service/AdminService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

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

  onSubmit() {
    this.auth.login(this.form).subscribe({
      next: (res) => {
        if (res.token) {
          this.auth.saveToken(res.token);
          this.router.navigate(['/dashboard']);
        } else {
          alert(res.error || 'Login failed');
        }
      },
      error: () => alert('Login failed')
    });
  }


}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 form = {
    name: '',
    email: '',
    username: '',
    password: ''
  };

  error = '';
  message = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.register(this.form).subscribe({
      next: (res) => {
        // Handle based on backend structure
        if (res?.error) {
          this.error = res.error;
        } else {
          this.message = res?.message || 'Registered successfully!';
          this.router.navigate(['/login']);
        }
      },
      error: (err) => {
        this.error = err?.error?.error || 'Registration failed';
      }
    });
  }

}

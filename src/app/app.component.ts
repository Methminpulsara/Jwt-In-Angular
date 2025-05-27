import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// app.component.ts
// app.component.ts
export class AppComponent {
  constructor(private http: HttpClient, private auth: AuthService) {}

  testInterceptor() {
    this.http.get("http://localhost:8080/api/employee/all").subscribe(
      (res) => console.log('Interceptor worked!', res),
      (err) => console.error('Interceptor failed!', err)
    );
  }
}

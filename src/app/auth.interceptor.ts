import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({providedIn:"root"})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}


intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  console.log('[Interceptor] Request URL:', req.url); // 🚨 Debug
  const token = this.authService.getToken();
  console.log('[Interceptor] Token:', token); // 🚨 Debug

  if (token) {
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next.handle(cloned);
  }

  return next.handle(req);
}
}

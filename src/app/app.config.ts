import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, HTTP_INTERCEPTORS, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { authInterceptor } from './auth.interceptor';
import { provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers:[
    provideZoneChangeDetection({eventCoalescing:true}),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
}
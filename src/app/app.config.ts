import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AuthInterceptor } from './auth.interceptor';
import { provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), // ✅ HttpClient with interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, // Ensure this matches your interceptor class name
      multi: true,
    },
  ],
};

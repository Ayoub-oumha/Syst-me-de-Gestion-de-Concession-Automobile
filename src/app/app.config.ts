import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { authReducer, AuthEffects } from './store/auth';
import { carReducer, CarEffects } from './store/car';
import { brandReducer, BrandEffects } from './store/brand';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ 
      auth: authReducer,
      car: carReducer,
      brand: brandReducer
    }),
    provideEffects([AuthEffects, CarEffects, BrandEffects])
  ]
};

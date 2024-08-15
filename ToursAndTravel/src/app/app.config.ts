import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { authReducer } from './State/Reducers/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './State/Effects/auth.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideHttpClient(), provideStore({ 'auth': authReducer }), provideEffects([AuthEffects]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};

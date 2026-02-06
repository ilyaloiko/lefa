import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './counter/counter.effects';
import { UsersStore } from './users/users.store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      counter: counterReducer
    }),
    UsersStore,
    provideEffects([CounterEffects])
  ]
};

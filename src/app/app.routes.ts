import { Routes } from '@angular/router';
import { Letters } from './features/letters/letters';
import { Menu } from './features/menu/menu';
import { Numbers } from './features/numbers/numbers';
import { Counter } from './features/counter/counter';
import { Users } from './features/users/users';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu',
  },
  {
    path: 'menu',
    component: Menu,
  },
  {
    path: 'letters',
    component: Letters,
  },
  {
    path: 'numbers',
    component: Numbers,
  },
  {
    path: 'counter',
    component: Counter,
  },
  {
    path: 'users',
    component: Users,
  },
];

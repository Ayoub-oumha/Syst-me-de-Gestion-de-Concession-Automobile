import { Routes } from '@angular/router';
import { Logi } from './pages/logi/logi';

import { authGuard } from './guards/auth.guard';
import { CarsList } from './pages/cars-list/cars-list';
import { CarDetail } from './pages/car-detail/car-detail';
import { CarForm } from './pages/car-form/car-form';

export const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'login', component: Logi },

  { path: 'cars', component: CarsList },
  { path: 'cars/add', component: CarForm, canActivate: [authGuard] },
  { path: 'cars/edit/:id', component: CarForm, canActivate: [authGuard] },
  { path: 'cars/:id', component: CarDetail },
];

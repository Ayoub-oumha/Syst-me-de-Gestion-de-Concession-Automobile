import { Routes } from '@angular/router';
import { Logi } from './pages/logi/logi';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Logi },
  { path: 'dashboard', component: Dashboard },
];

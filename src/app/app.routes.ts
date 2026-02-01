import { Routes } from '@angular/router';
import { Logi } from './pages/logi/logi';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Logi },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
];

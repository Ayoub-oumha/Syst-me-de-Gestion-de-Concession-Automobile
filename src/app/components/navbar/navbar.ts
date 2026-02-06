import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated, selectUser } from '../../store/auth/auth.selectors';
import { logout } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  private store = inject(Store);
  private router = inject(Router);
  
  isAuthenticated$: Observable<boolean> = this.store.select(selectIsAuthenticated);
  user$ = this.store.select(selectUser);

  onLogout(): void {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }
  login(): void {
    this.router.navigate(['/login'])
  }
}

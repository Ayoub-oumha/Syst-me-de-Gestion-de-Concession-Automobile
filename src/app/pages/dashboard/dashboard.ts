import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout, selectUser } from '../../store/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private store = inject(Store);

  user = this.store.selectSignal(selectUser);

  onLogout(): void {
    this.store.dispatch(logout());
  }
}

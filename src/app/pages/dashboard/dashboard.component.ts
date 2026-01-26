import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout, selectUser } from '../../store/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="dashboard-container">
      <header>
        <div class="header-left">
          <h1>Dashboard</h1>
        </div>
        <div class="header-right">
          @if (user()) {
            <img [src]="user()?.image" alt="avatar" class="avatar" />
          }
          <button (click)="onLogout()">Déconnexion</button>
        </div>
      </header>
      
      <main>
        @if (user()) {
          <div class="welcome-card">
            <h2>Bienvenue, {{ user()?.firstName }} {{ user()?.lastName }} !</h2>
            <p>Email: {{ user()?.email }}</p>
            <p>Username: {{ user()?.username }}</p>
          </div>
        }
        
        <div class="content">
          <p>Vous êtes connecté avec succès.</p>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .dashboard-container {
      min-height: 100vh;
      background: #f5f5f5;
    }
    
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 40px;
      background: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .header-left h1 {
      margin: 0;
      color: #333;
    }
    
    .header-right {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    header button {
      padding: 10px 20px;
      background: #f44336;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
    }
    
    header button:hover {
      background: #d32f2f;
    }
    
    main {
      padding: 40px;
    }
    
    .welcome-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      border-radius: 16px;
      margin-bottom: 30px;
    }
    
    .welcome-card h2 {
      margin: 0 0 10px 0;
    }
    
    .welcome-card p {
      margin: 0;
      opacity: 0.9;
    }
    
    .content {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
  `]
})
export class DashboardComponent {
  private store = inject(Store);
  
  user = this.store.selectSignal(selectUser);
  
  onLogout(): void {
    this.store.dispatch(logout());
  }
}

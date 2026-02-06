import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthError, selectAuthLoading, selectIsAuthenticated } from '../../store/auth';
import { login } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-logi',
  standalone: true ,
  imports: [ReactiveFormsModule],
  templateUrl: './logi.html',
  styleUrl: './logi.css',
})
export class Logi {
  private fb = inject(FormBuilder);
  private store = inject(Store);
  private router = inject(Router);
  
  loading = this.store.selectSignal(selectAuthLoading);
  error = this.store.selectSignal(selectAuthError);
  
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.store.dispatch(login({ credentials: { username, password } }));
      
      this.store.select(selectIsAuthenticated).subscribe(isAuth => {
        if (isAuth) {
          // console.log('Login successful, navigating to /cars');
          this.router.navigate(['/cars']);
        }
      });
    }
  }

}

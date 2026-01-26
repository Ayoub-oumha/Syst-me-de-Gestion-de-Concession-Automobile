import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { selectAuthError, selectAuthLoading } from '../../store/auth';

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
    }
  }

}

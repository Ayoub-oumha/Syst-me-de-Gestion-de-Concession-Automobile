import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Brand } from '../../models/brand.model';
import { selectAllBrands } from '../../store/brand/brand.selectors';
import { selectSelectedCar, selectCarLoading } from '../../store/car/car.selectors';
import { createCar, updateCar, loadCarById, clearSelectedCar } from '../../store/car/car.actions';
import { loadBrands } from '../../store/brand/brand.actions';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './car-form.html',
  styleUrls: ['./car-form.css'],
})
export class CarForm implements OnInit {
  private fb = inject(FormBuilder);
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  carForm!: FormGroup;
  brands$: Observable<Brand[]> = this.store.select(selectAllBrands);
  loading$: Observable<boolean> = this.store.select(selectCarLoading);
  isEditMode = false;
  carId: number | null = null;

  ngOnInit(): void {
    this.store.dispatch(loadBrands());
    this.initForm();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.carId = +id;
      this.store.dispatch(loadCarById({ id: +id }));

      this.store.select(selectSelectedCar).subscribe(car => {
        if (car) {
          this.carForm.patchValue({
            marque_id: car.marque_id,
            modele: car.modele,
            prix: car.prix,
            carburant: car.carburant,
            image: car.image,
            disponibilite: car.disponibilite,
            dateDeMiseEnVente: car.dateDeMiseEnVente,
          });
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.isEditMode) {
      this.store.dispatch(clearSelectedCar());
    }
  }

  initForm(): void {
    this.carForm = this.fb.group({
      marque_id: ['', [Validators.required]],
      modele: ['', [Validators.required, Validators.minLength(2)]],
      prix: ['', [Validators.required, Validators.min(0)]],
      carburant: ['', [Validators.required]],
      image: ['', [Validators.required]],
      disponibilite: [true, [Validators.required]],
      dateDeMiseEnVente: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      const formValue = {
        ...this.carForm.value,
        marque_id: +this.carForm.value.marque_id,
        prix: +this.carForm.value.prix,
      };

      if (this.isEditMode && this.carId) {
        this.store.dispatch(updateCar({ car: { id: this.carId, ...formValue } }));
      } else {
        this.store.dispatch(createCar({ car: formValue }));
      }

      setTimeout(() => {
        this.router.navigate(['/cars']);
      }, 500);
    } else {
      Object.keys(this.carForm.controls).forEach(key => {
        this.carForm.get(key)?.markAsTouched();
      });
    }
  }

  getErrorMessage(fieldName: string): string {
    const control = this.carForm.get(fieldName);
    if (control?.hasError('required')) {
      return 'Ce champ est obligatoire';
    }
    if (control?.hasError('minlength')) {
      return `Minimum ${control.errors?.['minlength'].requiredLength} caractères`;
    }
    if (control?.hasError('min')) {
      return 'La valeur doit être positive';
    }
    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.carForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

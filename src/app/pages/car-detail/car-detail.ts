import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Car } from '../../models/car.model';
import { Brand } from '../../models/brand.model';
import { selectSelectedCar, selectCarLoading } from '../../store/car/car.selectors';
import { selectBrandById } from '../../store/brand/brand.selectors';
import { loadCarById, deleteCar, clearSelectedCar } from '../../store/car/car.actions';
import { selectIsAuthenticated } from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './car-detail.html',
  styleUrls: ['./car-detail.css'],
})
export class CarDetail implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  car$: Observable<Car | null> = this.store.select(selectSelectedCar);
  loading$: Observable<boolean> = this.store.select(selectCarLoading);
  isAuthenticated$: Observable<boolean> = this.store.select(selectIsAuthenticated);
  brand$!: Observable<Brand | undefined>;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(loadCarById({ id: +id }));
      
      this.car$.subscribe(car => {
        if (car) {
          this.brand$ = this.store.select(selectBrandById(car.marque_id));
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearSelectedCar());
  }

  deleteCar(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette voiture ?')) {
      this.store.dispatch(deleteCar({ id }));
      this.router.navigate(['/cars']);
    }
  }
}

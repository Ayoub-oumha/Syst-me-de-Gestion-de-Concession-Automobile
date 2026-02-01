import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Car } from '../../models/car.model';
import { Brand } from '../../models/brand.model';
import { selectAllCars, selectCarLoading } from '../../store/car/car.selectors';
import { selectAllBrands } from '../../store/brand/brand.selectors';
import { loadCars, deleteCar } from '../../store/car/car.actions';
import { loadBrands } from '../../store/brand/brand.actions';
import { selectIsAuthenticated } from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './cars-list.html',
  styleUrls: ['./cars-list.css'],
})
export class CarsList implements OnInit {
  private store = inject(Store);
  
  cars$: Observable<Car[]> = this.store.select(selectAllCars);
  brands$: Observable<Brand[]> = this.store.select(selectAllBrands);
  loading$: Observable<boolean> = this.store.select(selectCarLoading);
  isAuthenticated$: Observable<boolean> = this.store.select(selectIsAuthenticated);
  
  viewMode: 'table' | 'grid' = 'grid';
  searchTerm: string = '';
  filterAvailable: boolean | null = null;
  filteredCars: Car[] = [];

  ngOnInit(): void {
    this.store.dispatch(loadCars());
    this.store.dispatch(loadBrands());
    
    this.cars$.subscribe(cars => {
      this.applyFilters(cars);
    });
  }

  applyFilters(cars: Car[]): void {
    let filtered = [...cars];
    
    if (this.searchTerm) {
      filtered = filtered.filter(car =>
        car.modele.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    if (this.filterAvailable !== null) {
      filtered = filtered.filter(car => car.disponibilite === this.filterAvailable);
    }
    
    this.filteredCars = filtered;
  }

  onSearchChange(): void {
    this.cars$.subscribe(cars => this.applyFilters(cars)).unsubscribe();
  }

  onFilterChange(): void {
    this.cars$.subscribe(cars => this.applyFilters(cars)).unsubscribe();
  }

  toggleViewMode(): void {
    this.viewMode = this.viewMode === 'table' ? 'grid' : 'table';
  }

  getBrandName(brandId: number, brands: Brand[]): string {
    return brands.find(b => b.id === brandId)?.titre || 'Unknown';
  }

  deleteCar(id: number, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    
    if (confirm('Êtes-vous sûr de vouloir supprimer cette voiture ?')) {
      this.store.dispatch(deleteCar({ id }));
    }
  }
}

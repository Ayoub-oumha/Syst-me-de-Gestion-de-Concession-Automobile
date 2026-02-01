import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarState } from './car.state';

export const selectCarState = createFeatureSelector<CarState>('car');

export const selectAllCars = createSelector(
  selectCarState,
  (state) => state.cars
);

export const selectSelectedCar = createSelector(
  selectCarState,
  (state) => state.selectedCar
);

export const selectCarLoading = createSelector(
  selectCarState,
  (state) => state.loading
);

export const selectCarError = createSelector(
  selectCarState,
  (state) => state.error
);

export const selectAvailableCars = createSelector(
  selectAllCars,
  (cars) => cars.filter((car) => car.disponibilite)
);

export const selectCarsByBrand = (brandId: number) =>
  createSelector(selectAllCars, (cars) =>
    cars.filter((car) => car.marque_id === brandId)
  );

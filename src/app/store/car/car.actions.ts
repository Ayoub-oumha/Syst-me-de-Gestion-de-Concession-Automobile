import { createAction, props } from '@ngrx/store';
import { Car, CreateCarDto, UpdateCarDto } from '../../models/car.model';

// Load Cars
export const loadCars = createAction('[Car] Load Cars');
export const loadCarsSuccess = createAction(
  '[Car] Load Cars Success',
  props<{ cars: Car[] }>()
);
export const loadCarsFailure = createAction(
  '[Car] Load Cars Failure',
  props<{ error: string }>()
);

// Load Car by ID
export const loadCarById = createAction(
  '[Car] Load Car By Id',
  props<{ id: number }>()
);
export const loadCarByIdSuccess = createAction(
  '[Car] Load Car By Id Success',
  props<{ car: Car }>()
);
export const loadCarByIdFailure = createAction(
  '[Car] Load Car By Id Failure',
  props<{ error: string }>()
);

// Create Car
export const createCar = createAction(
  '[Car] Create Car',
  props<{ car: CreateCarDto }>()
);
export const createCarSuccess = createAction(
  '[Car] Create Car Success',
  props<{ car: Car }>()
);
export const createCarFailure = createAction(
  '[Car] Create Car Failure',
  props<{ error: string }>()
);

// Update Car
export const updateCar = createAction(
  '[Car] Update Car',
  props<{ car: UpdateCarDto }>()
);
export const updateCarSuccess = createAction(
  '[Car] Update Car Success',
  props<{ car: Car }>()
);
export const updateCarFailure = createAction(
  '[Car] Update Car Failure',
  props<{ error: string }>()
);

// Delete Car
export const deleteCar = createAction(
  '[Car] Delete Car',
  props<{ id: number }>()
);
export const deleteCarSuccess = createAction(
  '[Car] Delete Car Success',
  props<{ id: number }>()
);
export const deleteCarFailure = createAction(
  '[Car] Delete Car Failure',
  props<{ error: string }>()
);

// Clear Selected Car
export const clearSelectedCar = createAction('[Car] Clear Selected Car');

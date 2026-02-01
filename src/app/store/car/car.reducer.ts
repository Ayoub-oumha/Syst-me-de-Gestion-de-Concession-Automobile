import { createReducer, on } from '@ngrx/store';
import { initialCarState } from './car.state';
import * as CarActions from './car.actions';

export const carReducer = createReducer(
  initialCarState,
  
  // Load Cars
  on(CarActions.loadCars, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CarActions.loadCarsSuccess, (state, { cars }) => ({
    ...state,
    cars,
    loading: false,
    error: null,
  })),
  on(CarActions.loadCarsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Load Car by ID
  on(CarActions.loadCarById, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CarActions.loadCarByIdSuccess, (state, { car }) => ({
    ...state,
    selectedCar: car,
    loading: false,
    error: null,
  })),
  on(CarActions.loadCarByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Create Car
  on(CarActions.createCar, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CarActions.createCarSuccess, (state, { car }) => ({
    ...state,
    cars: [...state.cars, car],
    loading: false,
    error: null,
  })),
  on(CarActions.createCarFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Update Car
  on(CarActions.updateCar, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CarActions.updateCarSuccess, (state, { car }) => ({
    ...state,
    cars: state.cars.map((c) => (c.id === car.id ? car : c)),
    selectedCar: car,
    loading: false,
    error: null,
  })),
  on(CarActions.updateCarFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Delete Car
  on(CarActions.deleteCar, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CarActions.deleteCarSuccess, (state, { id }) => ({
    ...state,
    cars: state.cars.filter((c) => c.id !== id),
    selectedCar: null,
    loading: false,
    error: null,
  })),
  on(CarActions.deleteCarFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Clear Selected Car
  on(CarActions.clearSelectedCar, (state) => ({
    ...state,
    selectedCar: null,
  }))
);

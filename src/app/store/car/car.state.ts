import { Car } from '../../models/car.model';

export interface CarState {
  cars: Car[];
  selectedCar: Car | null;
  loading: boolean;
  error: string | null;
}

export const initialCarState: CarState = {
  cars: [],
  selectedCar: null,
  loading: false,
  error: null,
};

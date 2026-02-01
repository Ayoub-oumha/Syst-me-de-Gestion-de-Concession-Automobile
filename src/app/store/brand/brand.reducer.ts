import { createReducer, on } from '@ngrx/store';
import { initialBrandState } from './brand.state';
import * as BrandActions from './brand.actions';

export const brandReducer = createReducer(
  initialBrandState,
  
  // Load Brands
  on(BrandActions.loadBrands, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(BrandActions.loadBrandsSuccess, (state, { brands }) => ({
    ...state,
    brands,
    loading: false,
    error: null,
  })),
  on(BrandActions.loadBrandsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

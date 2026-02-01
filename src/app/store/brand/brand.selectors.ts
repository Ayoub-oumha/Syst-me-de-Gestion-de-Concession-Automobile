import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BrandState } from './brand.state';

export const selectBrandState = createFeatureSelector<BrandState>('brand');

export const selectAllBrands = createSelector(
  selectBrandState,
  (state) => state.brands
);

export const selectBrandLoading = createSelector(
  selectBrandState,
  (state) => state.loading
);

export const selectBrandError = createSelector(
  selectBrandState,
  (state) => state.error
);

export const selectBrandById = (id: number) =>
  createSelector(selectAllBrands, (brands) =>
    brands.find((brand) => brand.id === id)
  );

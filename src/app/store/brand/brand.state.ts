import { Brand } from '../../models/brand.model';

export interface BrandState {
  brands: Brand[];
  loading: boolean;
  error: string | null;
}

export const initialBrandState: BrandState = {
  brands: [],
  loading: false,
  error: null,
};

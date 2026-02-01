import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { BrandService } from '../../services/brand.service';
import * as BrandActions from './brand.actions';

@Injectable()
export class BrandEffects {
  private actions$ = inject(Actions);
  private brandService = inject(BrandService);

  loadBrands$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BrandActions.loadBrands),
      switchMap(() =>
        this.brandService.getBrands().pipe(
          map((brands) => BrandActions.loadBrandsSuccess({ brands })),
          catchError((error) =>
            of(BrandActions.loadBrandsFailure({ error: error.message }))
          )
        )
      )
    )
  );
}

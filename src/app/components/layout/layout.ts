import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Brand } from '../../models/brand.model';
import { selectAllBrands, selectBrandLoading } from '../../store/brand/brand.selectors';
import { loadBrands } from '../../store/brand/brand.actions';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class Layout implements OnInit {
  private store = inject(Store);
  
  brands$: Observable<Brand[]> = this.store.select(selectAllBrands);
  loading$: Observable<boolean> = this.store.select(selectBrandLoading);

  ngOnInit(): void {
    this.store.dispatch(loadBrands());
  }
}

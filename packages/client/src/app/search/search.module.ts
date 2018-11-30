import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { GlobalSearchComponent } from './containers/global-search/global-search.component';
import { StoreModule } from '@ngrx/store';
import * as fromSearch from './store/reducers/search.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GlobalSearchComponent],
  exports: [GlobalSearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    StoreModule.forFeature('search', fromSearch.reducer)
  ]
})
export class SearchModule {}

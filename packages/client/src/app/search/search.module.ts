import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { GlobalSearchComponent } from './containers/global-search/global-search.component';
import { StoreModule } from '@ngrx/store';
import * as fromSearch from './store/reducers/search.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './store/effects/search.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GlobalSearchComponent],
  exports: [GlobalSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    StoreModule.forFeature('search', fromSearch.reducer),
    EffectsModule.forFeature([SearchEffects])
  ]
})
export class SearchModule {}

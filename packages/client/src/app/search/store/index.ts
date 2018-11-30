import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSearch from './reducers/search.reducer';

const visitSearch = createFeatureSelector<fromSearch.State>('search');
export const searchQuery = createSelector(
  visitSearch,
  s => s.query
);

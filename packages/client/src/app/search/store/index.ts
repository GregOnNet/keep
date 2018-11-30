import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducers/search.reducer';

export { SearchFeature } from './reducers';

const visitSearch = createFeatureSelector<State>('search');
export const search = createSelector(
  visitSearch,
  s => s.query
);

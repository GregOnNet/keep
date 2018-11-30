import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';

import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from 'src/app/lib';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

const visitRouter = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');

export const activatedRoute = createSelector(
  visitRouter,
  router => router.state
);

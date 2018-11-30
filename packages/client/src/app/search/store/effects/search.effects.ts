import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SearchActionTypes } from '../actions/search.actions';

@Injectable()
export class SearchEffects {

  @Effect()
  loadSearchs$ = this.actions$.pipe(ofType(SearchActionTypes.LoadSearchs));

  constructor(private actions$: Actions) {}
}

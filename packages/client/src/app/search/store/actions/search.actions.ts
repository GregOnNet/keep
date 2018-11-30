import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  UpdateSearch = '[Search] Update Search'
}

export class UpdateSearch implements Action {
  readonly type = SearchActionTypes.UpdateSearch;

  constructor(public payload: string) {}
}

export type SearchActions = UpdateSearch;

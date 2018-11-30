import { NotesSlice } from './notes.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromNotes from './notes.reducer';
import * as fromRoot from '@root/reducers';

export interface NotesContext {
  board: NotesSlice;
}

export interface NotesFeature extends fromRoot.State {
  notes: NotesContext;
}

export const reducers: ActionReducerMap<NotesContext> = {
  board: fromNotes.reducer
};

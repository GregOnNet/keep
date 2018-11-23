import { NotesSlice } from './notes.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromNotes from './notes.reducer';

export interface NotesContext {
  board: NotesSlice;
}

export interface NotesFeature {
  notes: NotesContext;
}

export const reducers: ActionReducerMap<NotesContext> = {
  board: fromNotes.reducer
};

const visitNotes = createFeatureSelector<NotesContext>('notes');

export const all = createSelector(
  visitNotes,
  f => f.board.entities
);

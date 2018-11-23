import { NotesSlice } from './notes.reducer';
import { ActionReducerMap } from '@ngrx/store';

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

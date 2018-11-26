import { NotesSlice } from './notes.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromNotes from './notes.reducer';
import * as fromRoot from '../../../store/reducers';

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
  f => Object.values(f.board.entities)
);

export const current = createSelector(
  visitNotes,
  fromRoot.activatedRoute,
  (notes, route) => notes.board.entities[route.params.guid]
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '@root/reducers';
import * as fromSearch from '@search';
import { NotesContext } from './reducers';
export { NotesFeature } from './reducers';

const visitNotes = createFeatureSelector<NotesContext>('notes');

export const entities = createSelector(
  visitNotes,
  s => s.board.entities
);

export const all = createSelector(
  entities,
  noteEntities => Object.values(noteEntities)
);

export const filtered = createSelector(
  all,
  fromSearch.search,
  (notes, query) =>
    notes.filter(
      note =>
        new RegExp(query, 'i').test(note.title) ||
        new RegExp(query, 'i').test(note.text)
    )
);

export const current = createSelector(
  entities,
  fromRoot.activatedRoute,
  (noteEntities, activatedRoute) => noteEntities[activatedRoute.params.guid]
);

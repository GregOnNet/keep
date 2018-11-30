import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotesContext } from './reducers';

export { NotesFeature } from './reducers';

import * as fromRoot from '@root/reducers';
import * as fromSearch from '@search';

const visitNotes = createFeatureSelector<NotesContext>('notes');

export const all = createSelector(
  visitNotes,
  f =>
    Object.values(f.board.entities).sort((a, b) =>
      a.writtenAt > b.writtenAt ? 1 : -1
    )
);

export const filtered = createSelector(
  all,
  fromSearch.searchQuery,
  (notes, query) =>
    query.length < 1
      ? notes
      : notes.filter(
          note =>
            new RegExp(query, 'i').test(note.title) ||
            new RegExp(query, 'i').test(note.text)
        )
);

export const current = createSelector(
  visitNotes,
  fromRoot.activatedRoute,
  (notes, route) => notes.board.entities[route.params.guid]
);

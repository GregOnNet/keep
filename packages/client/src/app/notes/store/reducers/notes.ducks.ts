import { createReducerFrom, effect, wireUpActions } from '@co-it/ngrx-ducks';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Note, NoteDraft } from '../../model';

export interface NotesSlice extends EntityState<Note> {}

const adapter = createEntityAdapter<Note>({
  selectId: note => note.guid
});

export class NoteDucks {
  loadAll = effect('[Notes] Load Notes');
  createNote = effect<NoteDraft>('[Notes] Creating Note');
  updateNote = effect<Note>('[Notes] Updating Note');

  set(slice: NotesSlice, notes: Note[]) {
    return adapter.addAll(notes, slice);
  }

  create(slice: NotesSlice, note: Note) {
    return adapter.addOne(note, slice);
  }

  update(slice: NotesSlice, note: Note) {
    return adapter.updateOne({ changes: note, id: note.guid }, slice);
  }
}

export const wiredActions = wireUpActions(NoteDucks, {
  set: '[Notes/API] Loading Notes succeeded',
  create: '[Notes/API] Creating Note succeeded',
  update: '[Notes/API] Updating Note succeeded'
});

export function reducer(
  slice = adapter.getInitialState(),
  action: Action
): NotesSlice {
  return createReducerFrom(wiredActions)(slice, action);
}

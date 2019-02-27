import {
  Action,
  DucksifiedAction,
  Ducksify,
  effect,
  reducerFrom
} from '@co-it/ngrx-ducks';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Note, NoteDraft } from '../../model';

export interface NotesSlice extends EntityState<Note> {}

const adapter = createEntityAdapter<Note>({
  selectId: note => note.guid
});

@Ducksify({
  initialState: adapter.getInitialState()
})
export class NoteDucks {
  loadAll = effect('[Notes] Load Notes');
  createNote = effect<NoteDraft>('[Notes] Creating Note');
  updateNote = effect<Note>('[Notes] Updating Note');

  @Action('[Notes/API] Loading Notes succeeded')
  set(slice: NotesSlice, notes: Note[]) {
    return adapter.addAll(notes, slice);
  }

  @Action('[Notes/API] Creating Note succeeded')
  create(slice: NotesSlice, note: Note) {
    return adapter.addOne(note, slice);
  }

  @Action('[Notes/API] Updating Note succeeded')
  update(slice: NotesSlice, note: Note) {
    return adapter.updateOne({ changes: note, id: note.guid }, slice);
  }
}

export function reducer(
  slice: NotesSlice,
  action: DucksifiedAction
): NotesSlice {
  return reducerFrom(NoteDucks)(slice, action);
}

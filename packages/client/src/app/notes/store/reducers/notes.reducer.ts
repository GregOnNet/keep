import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { Note } from '../../model';
import { NotesActions, NotesActionTypes } from '../actions/notes.actions';

export interface NotesSlice extends EntityState<Note> {}

const adapter = createEntityAdapter<Note>({
  selectId: note => note.guid
});

const defaults: NotesSlice = adapter.getInitialState();

export function reducer(slice = defaults, action: NotesActions): NotesSlice {
  switch (action.type) {
    case NotesActionTypes.LoadNotesSuccess:
      return adapter.addAll(action.payload, slice);

    case NotesActionTypes.CreateNoteSuccess:
      return adapter.addOne(action.payload, slice);

    case NotesActionTypes.UpdateNoteSuccess:
      return adapter.updateOne(
        { changes: action.payload, id: action.payload.guid },
        slice
      );

    default:
      return slice;
  }
}

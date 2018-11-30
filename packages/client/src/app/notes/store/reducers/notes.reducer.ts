import { Note } from '../../model';
import { NotesActions, NotesActionTypes } from '../actions/notes.actions';
import { ActionHandlers, createReducer } from '../../../lib';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface NotesSlice extends EntityState<Note> {}

const adapter = createEntityAdapter<Note>({
  selectId: note => note.guid
});

const defaults = adapter.getInitialState();

const handlers: ActionHandlers<NotesSlice> = {
  [NotesActionTypes.LoadNotesSuccess]: adapter.addAll,
  [NotesActionTypes.UpdateNoteSuccess]: updateNote,
  [NotesActionTypes.CreateNoteSuccess]: adapter.addOne
};

export function reducer(slice = defaults, action: NotesActions): NotesSlice {
  return createReducer(handlers)(slice, action);
}

function updateNote(note: Note, slice: NotesSlice): NotesSlice {
  return adapter.updateOne({ changes: note, id: note.guid }, slice);
}

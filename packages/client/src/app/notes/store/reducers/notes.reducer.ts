import { Note } from '../../model';
import { NotesActions, NotesActionTypes } from '../actions/notes.actions';
import { ActionHandlers, createReducer } from '../../../lib';

export interface NotesSlice {
  entities: Note[];
}

const defaults: NotesSlice = {
  entities: []
};

const handlers: ActionHandlers<NotesSlice> = {
  [NotesActionTypes.LoadNotesSuccess]: setNotes,
  [NotesActionTypes.UpdateNoteSuccess]: updateNote,
  [NotesActionTypes.CreateNoteSuccess]: createNote
};

export function reducer(slice = defaults, action: NotesActions): NotesSlice {
  return createReducer(handlers)(slice, action);
}

function setNotes(notes: Note[], slice: NotesSlice): NotesSlice {
  return {
    ...slice,
    entities: notes
  };
}

function createNote(note: Note, slice: NotesSlice): NotesSlice {
  return {
    ...slice,
    entities: [...slice.entities, note]
  };
}

function updateNote(updates: Note, slice: NotesSlice): NotesSlice {
  return {
    ...slice,
    entities: slice.entities.map(note =>
      note.guid === updates.guid ? updates : note
    )
  };
}

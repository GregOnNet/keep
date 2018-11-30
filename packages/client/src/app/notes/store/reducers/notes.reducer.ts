import { Note } from '../../model';
import { NotesActions, NotesActionTypes } from '../actions/notes.actions';

export interface NotesSlice {
  entities: Note[];
}

const defaults: NotesSlice = {
  entities: []
};

export function reducer(slice = defaults, action: NotesActions): NotesSlice {
  switch (action.type) {
    case NotesActionTypes.LoadNotesSuccess:
      return setNotes(action.payload, slice);

    case NotesActionTypes.CreateNoteSuccess:
      return createNote(action.payload, slice);

    case NotesActionTypes.UpdateNoteSuccess:
      return updateNote(action.payload, slice);

    default:
      return slice;
  }
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

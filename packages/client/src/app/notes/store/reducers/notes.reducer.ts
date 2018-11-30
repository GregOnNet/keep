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
      return {
        ...slice,
        entities: action.payload
      };

    case NotesActionTypes.CreateNoteSuccess:
      return {
        ...slice,
        entities: [...slice.entities, action.payload]
      };

    case NotesActionTypes.UpdateNoteSuccess:
      return {
        ...slice,
        entities: slice.entities.map(note =>
          note.guid === action.payload.guid ? action.payload : note
        )
      };

    default:
      return slice;
  }
}

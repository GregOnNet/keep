import { Action } from '@ngrx/store';
import { NotesActions, NotesActionTypes } from '../actions/notes.actions';
import { Note } from '../../model';

export interface NotesSlice {
  entities: Note[];
  current: Note;
}

export const defaults: NotesSlice = {
  entities: [],
  current: {} as Note
};

export function reducer(slice = defaults, action: NotesActions): NotesSlice {
  switch (action.type) {
    case NotesActionTypes.LoadNotesSuccess:
      return { ...slice, entities: action.payload };

    case NotesActionTypes.CreateNoteSuccess:
      return {
        ...slice,
        entities: [...slice.entities, action.payload]
      };

    case NotesActionTypes.SetCurrentNote:
      return {
        ...slice,
        current: action.payload
      };

    default:
      return slice;
  }
}

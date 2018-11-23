import { Action } from '@ngrx/store';
import { NotesActions, NotesActionTypes } from '../actions/notes.actions';
import { Note } from '../../model';

export interface NotesSlice {
  entities: Note[];
}

export const defaults: NotesSlice = {
  entities: []
};

export function reducer(slice = defaults, action: NotesActions): NotesSlice {
  switch (action.type) {
    case NotesActionTypes.LoadNotesSuccess:
      return { ...slice, entities: action.payload };

    case NotesActionTypes.CreateNote:
      return {
        ...slice,
        entities: { ...slice.entities, [action.payload.guid]: action.payload }
      };

    default:
      return slice;
  }
}

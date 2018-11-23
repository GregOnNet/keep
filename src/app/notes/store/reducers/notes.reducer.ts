import { Action } from '@ngrx/store';
import { NotesActions, NotesActionTypes } from '../actions/notes.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: NotesActions): State {
  switch (action.type) {

    case NotesActionTypes.LoadNotess:
      return state;


    default:
      return state;
  }
}

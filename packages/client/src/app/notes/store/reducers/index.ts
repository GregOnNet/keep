import * as fromRoot from '@root/reducers';
import * as fromNotes from './notes.ducks';


export interface NotesContext {
  board: fromNotes.NotesSlice;
}

export interface NotesFeature extends fromRoot.State {
  notes: NotesContext;
}

export const reducers = {
  board: fromNotes.reducer
};

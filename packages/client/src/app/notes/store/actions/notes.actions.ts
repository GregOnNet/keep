import { Action } from '@ngrx/store';
import { Note, NoteDraft } from '../../model';
import { UpdateNum } from '@ngrx/entity/src/models';

export enum NotesActionTypes {
  LoadNotes = '[Notes] Load Notes',
  LoadNotesSuccess = '[Notes/API] Loading Notes succeeded',
  CreateNote = '[Notes] Create Note',
  CreateNoteSuccess = '[Notes/API] Creating Note succeeded',
  UpdateNote = '[Notes] Updating Note',
  UpdateNoteSuccess = '[Notes/API] Updating Note succeeded'
}

export class LoadNotes implements Action {
  readonly type = NotesActionTypes.LoadNotes;
}

export class LoadNotesSuccess implements Action {
  readonly type = NotesActionTypes.LoadNotesSuccess;

  constructor(public payload: Note[]) {}
}

export class CreateNote implements Action {
  readonly type = NotesActionTypes.CreateNote;

  constructor(public payload: NoteDraft) {}
}

export class CreateNoteSuccess implements Action {
  readonly type = NotesActionTypes.CreateNoteSuccess;

  constructor(public payload: Note) {}
}
export class UpdateNote implements Action {
  readonly type = NotesActionTypes.UpdateNote;

  constructor(public payload: Note) {}
}
export class UpdateNoteSuccess implements Action {
  readonly type = NotesActionTypes.UpdateNoteSuccess;

  constructor(public payload: Note) {}
}

export type NotesActions =
  | LoadNotes
  | LoadNotesSuccess
  | CreateNote
  | CreateNoteSuccess
  | UpdateNote
  | UpdateNoteSuccess;

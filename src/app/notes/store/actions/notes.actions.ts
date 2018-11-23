import { Action } from '@ngrx/store';
import { Note, NoteDraft } from '../../model';

export enum NotesActionTypes {
  LoadNotes = '[Notes] Load Notes',
  LoadNotesSuccess = '[Notes/API] Loading Notes succeeded',
  CreateNote = '[Notes] Create Note',
  CreateNoteSuccess = '[Notes] Creating Note succeeded'
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

export type NotesActions =
  | LoadNotes
  | LoadNotesSuccess
  | CreateNote
  | CreateNoteSuccess;

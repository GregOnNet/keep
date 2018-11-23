import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { NotesActionTypes } from '../actions/notes.actions';

@Injectable()
export class NotesEffects {

  @Effect()
  loadNotess$ = this.actions$.pipe(ofType(NotesActionTypes.LoadNotess));

  constructor(private actions$: Actions) {}
}

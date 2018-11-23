import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { NotesService } from '../../lib/notes.service';
import { LoadNotesSuccess, NotesActionTypes } from '../actions/notes.actions';

@Injectable()
export class NotesEffects {
  @Effect()
  loadNotes$ = this.actions$.pipe(
    ofType(NotesActionTypes.LoadNotes),
    exhaustMap(() => this._notes.all()),
    map(notes => new LoadNotesSuccess(notes))
  );

  constructor(private actions$: Actions, private _notes: NotesService) {}
}

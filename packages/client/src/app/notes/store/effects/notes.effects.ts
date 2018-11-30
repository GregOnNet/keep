import { Inject, Injectable } from '@angular/core';
import { Ducks } from '@co-it/ngrx-ducks';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map, switchMap } from 'rxjs/operators';
import { NotesService } from '../../lib/notes.service';
import { NoteDucks } from '../reducers/notes.ducks';
import { ActionWithPayload } from 'src/app/lib';

@Injectable()
export class NotesEffects {
  @Effect()
  loadNotes$ = this.actions$.pipe(
    ofType(this._ducks.loadAll.type),
    exhaustMap(() => this._notes.all()),
    map(notes => this._ducks.set.plain(notes))
  );

  @Effect()
  createNote$ = this.actions$.pipe(
    ofType<ActionWithPayload>(this._ducks.createNote.type),
    switchMap(({ payload: draft }) => this._notes.create(draft)),
    map(note => this._ducks.create.plain(note))
  );

  @Effect()
  updateNote$ = this.actions$.pipe(
    ofType<ActionWithPayload>(this._ducks.updateNote.type),
    switchMap(({ payload: note }) => this._notes.update(note)),
    map(note => this._ducks.update.plain(note))
  );

  constructor(
    private actions$: Actions,
    private _notes: NotesService,
    @Inject(NoteDucks) private _ducks: Ducks<NoteDucks>
  ) {}
}

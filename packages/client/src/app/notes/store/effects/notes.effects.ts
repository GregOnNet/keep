import { Inject, Injectable } from '@angular/core';
import { Duck, whereType } from '@co-it/ngrx-ducks';
import { Actions, Effect } from '@ngrx/effects';
import { exhaustMap, map, switchMap } from 'rxjs/operators';
import { NotesService } from '../../lib/notes.service';
import { NoteDucks } from '../reducers/notes.ducks';

@Injectable()
export class NotesEffects {
  @Effect()
  loadNotes$ = this.actions$.pipe(
    whereType(this._ducks.loadAll),
    exhaustMap(() => this._notes.all()),
    map(notes => this._ducks.set.plain(notes))
  );

  @Effect()
  createNote$ = this.actions$.pipe(
    whereType(this._ducks.createNote),
    switchMap(({ payload: draft }) => this._notes.create(draft)),
    map(note => this._ducks.create.plain(note))
  );

  @Effect()
  updateNote$ = this.actions$.pipe(
    whereType(this._ducks.updateNote),
    switchMap(({ payload: note }) => this._notes.update(note)),
    map(note => this._ducks.update.action(note))
  );

  constructor(
    private actions$: Actions,
    private _notes: NotesService,
    @Inject(NoteDucks) private _ducks: Duck<NoteDucks>
  ) {}
}

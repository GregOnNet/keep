import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromNotes from '../../store/reducers';
import { switchMap, map } from 'rxjs/operators';
import { Note } from '../../model';
import { Observable } from 'rxjs';
import { SetCurrentNote } from '../../store/actions/notes.actions';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.sass']
})
export class NoteEditComponent implements OnInit {
  note$: Observable<Note>;

  constructor(private _store: Store<fromNotes.NotesFeature>) {}

  ngOnInit() {
    this.note$ = this._store.pipe(select(fromNotes.current));
  }
}

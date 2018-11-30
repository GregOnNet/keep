import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromNotes from '@notes';
import { Observable } from 'rxjs';
import { Note } from '../../model';

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

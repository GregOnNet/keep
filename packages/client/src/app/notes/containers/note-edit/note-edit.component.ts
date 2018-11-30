import { Component, Inject, OnInit } from '@angular/core';
import { Ducks } from '@co-it/ngrx-ducks';
import * as fromNotes from '@notes';
import { Observable } from 'rxjs';
import { Note } from '../../model';
import { NoteDucks } from '../../store/reducers/notes.ducks';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.sass']
})
export class NoteEditComponent implements OnInit {
  note$: Observable<Note>;
  constructor(@Inject(NoteDucks) private _ducks: Ducks<NoteDucks>) {}

  ngOnInit() {
    this.note$ = this._ducks.pick(fromNotes.current);
  }

  dispatchUpdate(note: Note) {
    this._ducks.updateNote.dispatch(note);
  }
}

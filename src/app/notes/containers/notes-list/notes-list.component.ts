import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Note, NoteDraft } from '../../model';
import { CreateNote } from '../../store/actions/notes.actions';
import * as fromNotes from '../../store/reducers';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass']
})
export class NotesListComponent {
  notes$: Observable<Note[]>;

  constructor(private _store: Store<fromNotes.NotesFeature>) {
    this.notes$ = this._store.pipe(select(f => f.notes.board.entities));
  }

  addToCollection(draft: NoteDraft) {
    this._store.dispatch(new CreateNote(draft));
  }
}

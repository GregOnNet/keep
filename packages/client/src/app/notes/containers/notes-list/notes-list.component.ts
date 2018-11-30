import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Note, NoteDraft } from '../../model';
import { CreateNote } from '../../store/actions/notes.actions';
import * as fromNotes from '@notes';
import * as fromSearch from '@search';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass']
})
export class NotesListComponent {
  notes$: Observable<Note[]>;

  constructor(
    private _store: Store<fromNotes.NotesFeature & fromSearch.SearchFeature>
  ) {
    this.notes$ = this._store.pipe(
      select(s =>
        s.notes.board.entities.filter(
          note =>
            new RegExp(s.search.query, 'i').test(note.title) ||
            new RegExp(s.search.query, 'i').test(note.text)
        )
      )
    );
  }

  addToCollection(draft: NoteDraft) {
    this._store.dispatch(new CreateNote(draft));
  }
}

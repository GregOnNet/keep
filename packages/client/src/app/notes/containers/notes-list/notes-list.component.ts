import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Note, NoteDraft } from '../../model';
import * as fromNotes from '@notes';
import { NoteDucks } from '../../store/reducers/notes.ducks';
import { Ducks } from '@co-it/ngrx-ducks';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass']
})
export class NotesListComponent {
  notes$: Observable<Note[]>;

  constructor(@Inject(NoteDucks) private _ducks: Ducks<NoteDucks>) {
    this.notes$ = this._ducks.pick(fromNotes.filtered);
  }

  addToCollection(draft: NoteDraft) {
    this._ducks.createNote.dispatch(draft);
  }
}

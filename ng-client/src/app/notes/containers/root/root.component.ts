import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadNotes } from '../../store/actions/notes.actions';
import * as fromNotes from '../../store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.sass']
})
export class RootComponent implements OnInit {
  constructor(private _store: Store<fromNotes.NotesFeature>) {}

  ngOnInit() {
    this._store.dispatch(new LoadNotes());
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadNotes } from '../../store/actions/notes.actions';
import * as fromNotes from '../../store/reducers';
import { NoteDucks } from '../../store/reducers/notes.ducks';
import { Ducks } from '@co-it/ngrx-ducks';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.sass']
})
export class RootComponent implements OnInit {
  constructor(@Inject(NoteDucks) private _ducks: Ducks<NoteDucks>) {}

  ngOnInit() {
    this._ducks.loadAll.dispatch();
  }
}

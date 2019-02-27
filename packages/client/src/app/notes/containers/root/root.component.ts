import { Component, Inject, OnInit } from '@angular/core';
import { Duck } from '@co-it/ngrx-ducks';
import { NoteDucks } from '../../store/reducers/notes.ducks';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.sass']
})
export class RootComponent implements OnInit {
  constructor(@Inject(NoteDucks) private _ducks: Duck<NoteDucks>) {}

  ngOnInit() {
    this._ducks.loadAll.dispatch();
  }
}

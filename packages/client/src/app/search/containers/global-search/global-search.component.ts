import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromSearch from '../../store/reducers/search.reducer';
import { UpdateSearch } from '../../store/actions/search.actions';
import { takeUntil, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit, OnDestroy {
  searchQuery = new FormControl('');
  private _destroy$ = new Subject<void>();

  constructor(private _store: Store<fromSearch.State>) {}

  ngOnInit() {
    this.searchQuery.valueChanges
      .pipe(
        takeUntil(this._destroy$),
        distinctUntilChanged(),
        debounceTime(250)
      )
      .subscribe(value => this._store.dispatch(new UpdateSearch(value)));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}

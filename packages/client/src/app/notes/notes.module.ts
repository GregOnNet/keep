import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteQuickAddComponent } from './components/note-quick-add/note-quick-add.component';
import { NoteEditComponent } from './containers/note-edit/note-edit.component';
import { NotesListComponent } from './containers/notes-list/notes-list.component';
import { RootComponent } from './containers/root/root.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesEffects } from './store/effects/notes.effects';
import * as fromNotes from './store/reducers';
import { SearchModule } from '../search/search.module';
import { NoteQuickEditComponent } from './components/note-quick-edit/note-quick-edit.component';
import { NoteDucks, wiredActions } from './store/reducers/notes.ducks';
import { createDucks } from '@co-it/ngrx-ducks';

@NgModule({
  declarations: [
    NoteQuickAddComponent,
    NotesListComponent,
    NoteEditComponent,
    NoteCardComponent,
    RootComponent,
    NoteQuickEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    StoreModule.forFeature('notes', fromNotes.reducers),
    EffectsModule.forFeature([NotesEffects]),

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SearchModule,
    NotesRoutingModule
  ],
  providers: [
    {
      provide: NoteDucks,
      useFactory(store) {
        return createDucks(wiredActions, store);
      },
      deps: [Store]
    }
  ]
})
export class NotesModule {}

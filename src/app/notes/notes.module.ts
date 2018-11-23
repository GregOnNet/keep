import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NoteQuickAddComponent } from './components/note-quick-add/note-quick-add.component';
import { NoteEditComponent } from './containers/note-edit/note-edit.component';
import { NotesListComponent } from './containers/notes-list/notes-list.component';
import { NotesEffects } from './store/effects/notes.effects';
import * as fromNotes from './store/reducers';

@NgModule({
  declarations: [NoteQuickAddComponent, NotesListComponent, NoteEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    StoreModule.forFeature('notes', fromNotes.reducers),
    EffectsModule.forFeature([NotesEffects]),

    MatCardModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class NotesModule {}

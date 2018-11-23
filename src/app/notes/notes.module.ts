import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NotesEffects } from './store/effects/notes.effects';
import * as fromNotes from './store/reducers/notes.reducer';
import { NoteQuickAddComponent } from './components/note-quick-add/note-quick-add.component';
import { NotesListComponent } from './containers/notes-list/notes-list.component';
import { NoteEditComponent } from './containers/note-edit/note-edit.component';

@NgModule({
  declarations: [NoteQuickAddComponent, NotesListComponent, NoteEditComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('notes', fromNotes.reducer),
    EffectsModule.forFeature([NotesEffects])
  ]
})
export class NotesModule {}

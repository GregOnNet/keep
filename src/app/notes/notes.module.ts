import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NotesEffects } from './store/effects/notes.effects';
import * as fromNotes from './store/reducers/notes.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('notes', fromNotes.reducer),
    EffectsModule.forFeature([NotesEffects])
  ]
})
export class NotesModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteEditComponent } from './containers/note-edit/note-edit.component';
import { NotesListComponent } from './containers/notes-list/notes-list.component';
import { RootComponent } from './containers/root/root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      { path: '', component: NotesListComponent },
      { path: 'note/:guid/edit', component: NoteEditComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}

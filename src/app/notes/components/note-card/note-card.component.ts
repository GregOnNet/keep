import { Component, Input } from '@angular/core';
import { Note } from '../../model';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.sass']
})
export class NoteCardComponent {
  @Input() note: Note;
}

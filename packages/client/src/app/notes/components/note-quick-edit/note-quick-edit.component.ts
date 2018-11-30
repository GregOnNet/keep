import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Note } from '../../model';

@Component({
  selector: 'app-note-quick-edit',
  templateUrl: './note-quick-edit.component.html',
  styleUrls: ['./note-quick-edit.component.sass']
})
export class NoteQuickEditComponent implements OnInit {
  @Input() note: Note;
  @Output() update = new EventEmitter<Note>();

  editForm = this._declareForm();

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this._fillForm(this.note);
  }

  emitUpdate() {
    const update = { ...this.note, ...this.editForm.value };
    this.update.emit(update);
  }

  private _declareForm(): FormGroup {
    return this._fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      writtenAt: ['', Validators.required]
    });
  }
  private _fillForm(note: Note): void {
    this.editForm.setValue({
      title: note.title,
      text: note.text,
      writtenAt: note.writtenAt
    });
  }
}

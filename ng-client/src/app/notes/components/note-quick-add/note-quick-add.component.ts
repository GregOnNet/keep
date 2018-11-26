import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteDraft } from '../../model';

@Component({
  selector: 'app-note-quick-add',
  templateUrl: './note-quick-add.component.html',
  styleUrls: ['./note-quick-add.component.sass']
})
export class NoteQuickAddComponent {
  noteForm: FormGroup;

  @Output() create = new EventEmitter<NoteDraft>();

  constructor(private fb: FormBuilder) {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required]],
      text: ['']
    });
  }

  emitCreate() {
    const draft: NoteDraft = {
      ...this.noteForm.value,
      image: '/assets/images/random.jpg'
    };

    this.noteForm.reset();
    this.create.emit(draft);
  }
}

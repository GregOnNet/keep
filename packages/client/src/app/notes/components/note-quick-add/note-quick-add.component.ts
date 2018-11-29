import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteDraft } from '../../model';

@Component({
  selector: 'app-note-quick-add',
  templateUrl: './note-quick-add.component.html',
  styleUrls: ['./note-quick-add.component.sass']
})
export class NoteQuickAddComponent {
  @ViewChild('title') titleControl: ElementRef<HTMLInputElement>;
  noteForm: FormGroup;

  @Output() create = new EventEmitter<NoteDraft>();
  isInCreationMode = false;

  constructor(private fb: FormBuilder) {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required]],
      text: ['']
    });
  }

  emitCreate() {
    const draft: NoteDraft = {
      ...this.noteForm.value,
      image: '/assets/images/random.jpg',
      writtenAt: new Date()
    };

    this.noteForm.reset();
    this.create.emit(draft);
    this.hideForm();
  }

  showForm() {
    this.isInCreationMode = true;
    this.titleControl.nativeElement.focus();
  }

  hideForm() {
    this.isInCreationMode = false;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { newGuid } from 'ts-guid';
import { Note, NoteDraft } from '../model';

@Injectable({ providedIn: 'root' })
export class NotesService {
  private _endpoint = '/assets/notes/notes.json';

  constructor(private _http: HttpClient) {}

  all(): Observable<Note[]> {
    return this._http.get<Note[]>(this._endpoint);
  }

  create(draft: NoteDraft): Observable<Note> {
    return of({ guid: newGuid(), ...draft });
  }
}

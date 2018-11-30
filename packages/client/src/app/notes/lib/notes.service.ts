import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { newGuid } from 'ts-guid';
import { Note, NoteDraft } from '../model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NotesService {
  private _endpoint = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  all(): Observable<Note[]> {
    return this._http.get<Note[]>(`${this._endpoint}/notes`);
  }

  create(draft: NoteDraft): Observable<Note> {
    const note = { guid: newGuid(), ...draft };
    return this._http.post<Note>(`${this._endpoint}/notes`, note);
  }
}

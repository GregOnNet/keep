import { Injectable } from '@nestjs/common';

import JsonDb from 'node-json-db';
import NodeJsonDb = require('node-json-db');

import { Note } from './models';
import { reject } from 'q';

@Injectable()
export class NotesService {
  private readonly _db: JsonDb = new (NodeJsonDb as any)(
    'database/notes.json',
    true,
    true
  );

  read(id: string): Note {
    return this._db.find<Note>(`/`, note => note.id === id);
  }
  readAll(): Note[] {
    return Object.values(this._db.getData('/'));
  }

  create(note: Note) {
    this._db.push(`/${note.id}`, note, false);
    return note;
  }

  update(id: string, updates: Partial<Note>): Note {
    const note = this.read(updates.id);
    const updated = { ...note, ...updates };
    this._db.push(`/${id}`, updated, true);

    return updated;
  }

  delete(id: string) {
    this._db.delete(`/${id}`);
  }
}

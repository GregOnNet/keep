import {
  Get,
  Controller,
  Post,
  Body,
  Put,
  Delete,
  Param
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './models';

@Controller('notes')
export class NotesController {
  constructor(private readonly _notes: NotesService) {}

  @Get()
  all() {
    return this._notes.readAll();
  }

  @Get(':id')
  single(@Param('id') id: string) {
    return this._notes.read(id);
  }

  @Post()
  create(@Body() note: Note) {
    return this._notes.create(note);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updates: Partial<Note>) {
    return this._notes.update(id, updates);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this._notes.delete(id);
  }
}

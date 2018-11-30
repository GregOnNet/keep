import { Todo } from './todo';

export interface Note {
  guid: string;
  title: string;
  text: string;
  imageUrl: string;
  todos: Todo[];
}

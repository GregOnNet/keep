import { Todo } from './todo';

export interface Note {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  todos: Todo[];
}

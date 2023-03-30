import { createAction, props } from '@ngrx/store';
import { Book } from './book.service';

export const bookInit = createAction('Book Init', props<{ books: Book[] }>());

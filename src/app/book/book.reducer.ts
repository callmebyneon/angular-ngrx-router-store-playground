import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { bookInit } from './book.actions';
import { Book } from './book.service';

export type BookState = EntityState<Book>;

export const bookAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.id,
});

const initialState = bookAdapter.getInitialState();

export const bookReducer = createReducer<BookState>(
  initialState,
  on(bookInit, (state, { books }) => bookAdapter.addMany(books, state))
);

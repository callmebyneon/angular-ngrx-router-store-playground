import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParams } from '../router.selectors';
import { bookAdapter, BookState } from './book.reducer';

export const booksFeatureSelector = createFeatureSelector<BookState>('books');

const { selectEntities, selectAll } = bookAdapter.getSelectors();

export const selectBookEntities = createSelector(
  booksFeatureSelector,
  selectEntities
);

export const selectBooks = createSelector(booksFeatureSelector, selectAll);

export const selectBook = createSelector(
  selectBookEntities,
  selectRouteParams,
  (books, { bookId }) => {
    if (books[bookId]) return books[bookId];
  }
);

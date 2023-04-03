import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { map, tap } from 'rxjs/operators';

import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { routerNavigatedAction } from '@ngrx/router-store';
import { selectBook } from './book/book.selectors';

@Injectable()
export class RouterEffects {
  updateTitle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerNavigatedAction),
        concatLatestFrom(() => this.store.select(selectBook)),
        map(([, data]) => {
          if (data?.volumeInfo['title']) {
            return `${data.volumeInfo['title']} | Book Collection`;
          }
          return `Book Collection`;
        }),
        tap((title) => this.titleService.setTitle(title))
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private titleService: Title
  ) {}
}

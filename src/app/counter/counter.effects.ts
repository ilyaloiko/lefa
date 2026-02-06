import { inject, Injectable } from '@angular/core';
import { decrement, increment, reset } from './counter.actions';
import { tap, withLatestFrom } from 'rxjs';
import { selectCount } from './counter.selector';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class CounterEffects {

  private actions$ = inject(Actions);
  private store = inject(Store);

  saveToLocalStorage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(increment, decrement, reset),
        withLatestFrom(this.store.select(selectCount)),
        tap(([_, count]) => {
          localStorage.setItem('count', count.toString());
        })
      )
    },
    { dispatch: false }
  );
}

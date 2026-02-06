import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../counter/counter.actions';
import { selectCount } from '../../counter/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-redux',
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {

  readonly count$;

  constructor(
    private store: Store
  ) {
    this.count$ = this.store.select(selectCount);
  }

  increment(): void {
    this.store.dispatch(increment({value: 10}));
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}

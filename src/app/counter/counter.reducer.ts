import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
import { initialCounterState } from './counter.state';

export const counterReducer = createReducer(
  initialCounterState,

  on(increment, (state, { value }) => ({
    ...state,
    count: state.count + value
  })),

  on(decrement, state => ({
    ...state,
    count: state.count - 1
  })),

  on(reset, state => ({
    ...state,
    count: 0
  }))
);

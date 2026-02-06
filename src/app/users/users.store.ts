import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { User } from './user.model';

export const UsersStore = signalStore(
  withState({
    users: [] as User[]
  }),

  withMethods(store => ({
    addUser(user: User): void {
      patchState(store, {
        users: [...store.users(), user]
      });
    },

    removeUser(id: string): void {
      patchState(store, {
        users: store.users().filter(user => user.id !== id)
      });
    },

    removeAllUsers(): void {
      patchState(store, {
        users: []
      });
    },
  }))
);

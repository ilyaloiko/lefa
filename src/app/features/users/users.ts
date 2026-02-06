import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersStore } from '../../users/users.store';
import { User } from '../../users/user.model';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  imports: [
    FormsModule
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  providers: [UsersStore],
})
export class Users {

  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$);

  store = inject(UsersStore);

  name = '';
  readonly users;

  constructor() {
    this.users = this.store.users;
  }

  add(): void {
    this.intervalSignal()
    const user: User = {
      id: crypto.randomUUID(),
      name: this.name
    };

    this.store.addUser(user);

    this.name = '';
  }

  delete(id: string): void {
    this.store.removeUser(id);
  }

  deleteAll(): void {
    this.store.removeAllUsers();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumbersService {

  private numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  getNumbers(): number[] {
    return this.numbers;
  }

}

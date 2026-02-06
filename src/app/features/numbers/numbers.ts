import { Component, computed, effect, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NumbersService } from '../../core/services/numbers-service';
import { Button } from "../../shared/components/button/button";

@Component({
  selector: 'app-numbers',
    imports: [
        Button
    ],
  templateUrl: './numbers.html',
  styleUrl: './numbers.scss',
})
export class Numbers {
  private numbers: number[] = [];
  private readonly letterIndex = signal(0);

  readonly number = computed(() => this.numbers[this.letterIndex()]);

  constructor(
    private readonly numbersService: NumbersService,
    private readonly router: Router
  ) {
    this.numbers = this.numbersService.getNumbers();

    effect(() => {
      console.log('Letter:', this.number());
    });
  }

  ngOnInit(): void {
  }

  back(): void {
    this.letterIndex.update(i => Math.max(i - 1, 0));
  }

  next(): void {
    this.letterIndex.update(i => Math.min(i + 1, this.numbers.length - 1));
  }

  reset(): void {
    this.letterIndex.set(0);
  }

  menu(): void {
    this.router.navigate(['menu']);
  }
}

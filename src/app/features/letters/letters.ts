import { ChangeDetectionStrategy, Component, computed, effect, OnInit, signal } from '@angular/core';
import { LettersService } from '../../core/services/letters-service';
import { Router } from '@angular/router';
import { Button } from '../../shared/components/button/button';
import { Disabled } from '../../shared/directives/disabled';

@Component({
  selector: 'app-letters',
  imports: [
    Button,
    Disabled
  ],
  templateUrl: './letters.html',
  styleUrl: './letters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Letters implements OnInit {

  private letters: string[] = [];
  private readonly letterIndex = signal(0);

  readonly letter = computed(() => this.letters[this.letterIndex()]);
  readonly isStartMode = computed(() => this.letterIndex() === 0);

  constructor(
    private readonly lettersService: LettersService,
    private readonly router: Router
  ) {
    this.letters = this.lettersService.getLetters();

    effect(() => {
      console.log('Letter:', this.letter());
    });
  }

  ngOnInit(): void {
  }

  back(): void {
    this.letterIndex.update(i => Math.max(i - 1, 0));
  }

  next(): void {
    this.letterIndex.update(i => Math.min(i + 1, this.letters.length - 1));
  }

  reset(): void {
    this.letterIndex.set(0);
  }

  menu(): void {
    this.router.navigate(['menu']);
  }

}

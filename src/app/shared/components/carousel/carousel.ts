import { ChangeDetectionStrategy, Component, computed, Input, signal } from '@angular/core';
import { Button } from "../button/button";
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [
    Button,
    NgStyle
  ],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Carousel {

  @Input() data: (string)[] = [];
  @Input() backgroundColor: string = '';

  readonly value = computed(() => this.data[this.index()]);
  readonly isStartMode = computed(() => this.index() === 0);
  readonly canBack = computed(() => this.index() !== 0);
  readonly canNext = computed(() => this.index() !== this.data.length - 1);

  private readonly index = signal(0);

  constructor(
    private readonly router: Router
  ) {
  }

  back(): void {
    this.index.update(i => Math.max(i - 1, 0));
  }

  next(): void {
    this.index.update(i => Math.min(i + 1, this.data.length - 1));
  }

  reset(): void {
    this.index.set(0);
  }

  menu(): void {
    this.router.navigate(['menu']);
  }

  speak(value: string): void {
    const utterance = new SpeechSynthesisUtterance(value.toLowerCase());
    utterance.lang = 'ru-RU';
    speechSynthesis.speak(utterance);
  }

}

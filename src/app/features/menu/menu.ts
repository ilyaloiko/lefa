import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

  constructor(
    private readonly router: Router
  ) {
  }

  onLettersClick(): void {
    this.router.navigate(['letters']);
  }

  onNumbersClick(): void {
    this.router.navigate(['numbers']);
  }

  onSyllablesClick(): void {
    this.router.navigate(['syllables']);
  }

  onWordsClick(): void {
    this.router.navigate(['words']);
  }

}

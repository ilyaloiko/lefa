import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LettersService } from '../../core/services/letters/letters-service';
import { Carousel } from '../../shared/components/carousel/carousel';

@Component({
  selector: 'app-letters',
  imports: [
    Carousel
  ],
  templateUrl: './letters.html',
  styleUrl: './letters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Letters {

  readonly data: string[];

  constructor(
    private readonly lettersService: LettersService
  ) {
    this.data = this.lettersService.getData();
  }
}

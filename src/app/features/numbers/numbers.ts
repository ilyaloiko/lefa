import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NumbersService } from '../../core/services/numbers/numbers-service';
import { Carousel } from '../../shared/components/carousel/carousel';

@Component({
  selector: 'app-numbers',
  imports: [
    Carousel
  ],
  templateUrl: './numbers.html',
  styleUrl: './numbers.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Numbers {

  readonly data: number[];

  constructor(
    private readonly numbersService: NumbersService
  ) {
    this.data = this.numbersService.getData();
  }
}

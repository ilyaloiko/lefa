import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Carousel } from "../../shared/components/carousel/carousel";
import { WordsService } from '../../core/services/words/words-service';

@Component({
  selector: 'app-words',
    imports: [
        Carousel
    ],
  templateUrl: './words.html',
  styleUrl: './words.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Words {

  readonly data: string[];

  constructor(
    private readonly wordsService: WordsService
  ) {
    this.data = this.wordsService.getData();
  }

}

import { Component } from '@angular/core';
import { Carousel } from "../../shared/components/carousel/carousel";
import { WordsService } from '../../core/services/words/words-service';
import { SyllablesService } from '../../core/services/syllables/syllables-service';

@Component({
  selector: 'app-syllables',
    imports: [
        Carousel
    ],
  templateUrl: './syllables.html',
  styleUrl: './syllables.scss',
})
export class Syllables {

  readonly data: string[];

  constructor(
    private readonly syllablesService: SyllablesService
  ) {
    this.data = this.syllablesService.getData();
  }

}

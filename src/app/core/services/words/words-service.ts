import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordsService {

  private data = [
    'ЁЖ',
    'КОТ',
    'КИТ',
    'ЛЕВ',
    'ПЁС',
    'ЛИС',
    'РАК',
    'ОСА',
    'БЫК',
    'ЛЕС',
    'САД',
    'ЛУГ',
    'СНЕГ',
    'ДОМ',
    'СОК',
    'МЯЧ'
  ];

  getData(): string[] {
    return this.data;
  }

}

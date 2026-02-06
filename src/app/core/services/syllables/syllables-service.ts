import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SyllablesService {

  private data = [
    'МА', 'ПА', 'БА', 'ДА', 'ЛА', 'ТА', 'СА', 'РА', 'НА', 'ВА',
    'ЛЕ', 'ДЕ', 'БЕ', 'МЕ', 'ТЕ', 'СЕ', 'РЕ', 'ПЕ', 'ВЕ',
    'БУ', 'ДУ', 'МУ', 'СУ', 'ТУ', 'КУ', 'ЛУ', 'РУ', 'НУ'
  ];

  getData(): string[] {
    return this.data;
  }
}

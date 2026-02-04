import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Letters } from './letters';

describe('Letters', () => {
  let component: Letters;
  let fixture: ComponentFixture<Letters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Letters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Letters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

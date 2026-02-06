import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {

  @Input({required: true}) icon: string = '';

  @Input() class: string = '';

  @Output() clickEventEmitter = new EventEmitter();

  onClick() {
    this.clickEventEmitter.emit();
  }

}

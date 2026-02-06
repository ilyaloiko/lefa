import { Directive, effect, ElementRef, input, Input, InputSignal, OnInit, Renderer2, signal } from '@angular/core';

@Directive({
  selector: '[appDisabled]',
})
export class Disabled {

  appDisabled = input<boolean>(false);

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {
    effect(() => {
      this.renderer.setStyle(this.element.nativeElement, 'pointer-events', this.appDisabled() ? 'none' : 'auto');
    });
  }
}

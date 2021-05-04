import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { 
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyColor('');
  }

  applyColor(color) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}

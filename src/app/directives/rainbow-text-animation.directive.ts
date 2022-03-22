import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowTextAnimation]'
})
export class RainbowTextAnimationDirective {

  constructor( private el: ElementRef ) { }

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.classList.add('anim-text-flow');
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.classList.remove('anim-text-flow')
  }
}

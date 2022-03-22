import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowTextAnimation]'
})
export class RainbowTextAnimationDirective {

  // constructor( private el: ElementRef ) { }

  @HostListener('mouseenter', ['$event']) onEnter(event: any) {
    if(!event.path[0].classList.contains('anim-text-flow')) {
      event.path[0].classList.add('anim-text-flow');
    }
    // let chars = this.el.nativeElement.textContent.split("");
    // this.el.nativeElement = '<span>' + chars.join('</span><span>') + '</span>';
  }

  @HostListener('mouseleave', ['$event']) onLeave(event: any) {
    event.path[0].classList.remove('anim-text-flow')
  }
}

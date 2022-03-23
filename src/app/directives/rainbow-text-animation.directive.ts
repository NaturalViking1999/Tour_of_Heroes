import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowTextAnimation]'
})
export class RainbowTextAnimationDirective {
  private textDefault!: string;

  constructor( private el: ElementRef ) { }

  @HostListener('mouseenter', ['$event']) onEnter(event: any) {
    if(!this.el.nativeElement.classList.contains('anim-text-flow')) {
      this.el.nativeElement.classList.add('anim-text-flow');
    }
    this.textDefault = this.el.nativeElement.textContent;
    let span = document.createElement('span');
    let chars = this.el.nativeElement.textContent.trim().split("");
    chars.map((item: string) => {
      span.innerHTML += `<span>${item}</span>`;
      event.path[0].textContent = null;
      return this.el.nativeElement.append(span);
    })
  }

  @HostListener('mouseleave', ['$event']) onLeave(event: any) {
    event.path[0].classList.remove('anim-text-flow');
    event.path[0].textContent = this.textDefault;
  }
}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextModificator]'
})
export class TextModificatorDirective {
  private text!: string;

  constructor( private el: ElementRef ) {
  }

  @HostListener('mouseenter', ['$event']) onEnter(event: any) {
    this.el.nativeElement.style.backgroundColor = 'red';
    this.text = event.target.textContent;
    this.el.nativeElement.textContent = this.el.nativeElement.textContent + ' and Happy BirthDay Sergey';
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = null;
    this.el.nativeElement.textContent = this.text;
  }

}

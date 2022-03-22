import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextModificatorHost]', 
  host: {
    '(mouseenter)': 'onMouseEnter($event)',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class TextModificatorHostDirective {
  private text!: string;

  constructor( private el: ElementRef, private rend: Renderer2 ) {}

  onMouseEnter(event: any){
    this.el.nativeElement.style.backgroundColor = 'blue';
    this.text = event.target.textContent;
    this.el.nativeElement.textContent = this.el.nativeElement.textContent + ' My biceps are the biggest!';
  }

  onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = null;
    this.el.nativeElement.textContent = this.text;
  }

}

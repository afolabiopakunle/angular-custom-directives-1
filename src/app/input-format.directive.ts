import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format
  constructor(private el: ElementRef) { }

  @HostListener('blur') onFocus() {
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowerCase')
    this.el.nativeElement.value = value.toLocaleLowerCase();
    else 
    this.el.nativeElement.value = value.toLocaleUpperCase()
    console.log('We are focused')
  };



}
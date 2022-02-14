import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor() { }

  @HostListener('focus') onFocus() {
    console.log('We are focused')
  };

  @HostListener('blur') onBlur() {
    console.log('We are blured')
  };

}
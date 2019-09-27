import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
//angular create a new instance of the directive every time he detects an element html that has the attribute pkmnBorderCard
//and inject the dom element in the constructor and functions to modify it.
  constructor(private el: ElementRef) {
		this.setBorder('#f5f5f5');
		this.setHeight(180);
  }
  
  @HostListener('mouseenter') onMouseEnter(){
		this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave(){
		this.setBorder('#f5f5f5');
  } 

	private setBorder(color: string) {
		let border = 'solid 4px ' + color;
		this.el.nativeElement.style.border = border;
	}

	private setHeight(height: number) {
		this.el.nativeElement.style.height = height + 'px';
	}
}

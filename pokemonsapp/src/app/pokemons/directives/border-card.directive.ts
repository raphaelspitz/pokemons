import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  //refactoring of the code the goal is to delete the hardcoded value and replace them with declared variables.
  private initialColor:string = "#f5f5f5";
  private defaultColor:string = "#009688";
  private defaultHeight:number = 180;

//angular create a new instance of the directive every time he detects an element html that has the attribute pkmnBorderCard
//and inject the dom element in the constructor and functions to modify it.
  constructor(private el: ElementRef) {
		this.setBorder(this.initialColor);
		this.setHeight(this.defaultHeight);
  }
  
  @Input('pkmnBorderCard') borderColor:string;
  
  @HostListener('mouseenter') onMouseEnter(){
		this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
	this.setBorder(this.initialColor);
} 

	private setBorder(color: string) {
		let border = 'solid 4px ' + color;
		this.el.nativeElement.style.border = border;
	}

	private setHeight(height: number) {
		this.el.nativeElement.style.height = height + 'px';
	}
}

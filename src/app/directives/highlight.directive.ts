import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.color') highLightColor: string;
	// could ba aliased by highLightColor - @Input('highLightColor') and then in html: use <div [highLightColor]="'red'"...
  @Input('dColor') dColor: string = 'blue';
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
  }

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    this.highLightColor = this.dColor;
		// console.log('ngOnInit directive');
		// this.elementRef.nativeElement.style.color = 'blue';
		// this.renderer2.setStyle(this.elementRef.nativeElement,'background-color','green');
    }
}

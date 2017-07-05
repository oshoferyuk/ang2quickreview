import { Directive, Input, TemplateRef, ViewContainerRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStars]'
})
export class StarsDirective {
	@Input() set appStars(n:number){
		let stars = '-';
		for(let i = 0; i < n; i++){
			stars = stars + '*';
		}	
		this.viewContainerRef.createEmbeddedView(this.templateRef);
		this.templateRef.elementRef.nativeElement.innerHTML = "asdfasdf"; //DOES NOT WORK!
	}
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef, private renderer2: Renderer2 ) { }

}

import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild("localR") inputER: ElementRef;
  
  onTestHandler(params){
	  console.log(params);
  }
  
  passLocalRHandler(localR:HTMLInputElement){
	  console.log(localR.value);
	  console.log(this.inputER.nativeElement.value);
  }
}

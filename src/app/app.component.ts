import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild("localR") inputER: ElementRef;
  myname:string = "bob";
  
  
  onTestHandler(params){
	  console.log(params);
	  this.myname = "tom";
  }
  
  passLocalRHandler(localR:HTMLInputElement){
	  console.log(localR.value);
	  console.log(this.inputER.nativeElement.value);
	  
  }
}

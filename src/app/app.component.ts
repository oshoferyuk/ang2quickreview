import { Component, ViewChild, ElementRef } from '@angular/core';
import { GoodsService } from './services/goods.service';
import { LogginService } from './services/logging.service';	
import { UsersService } from './services/users.service';
import { ServerService } from './services/server.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogginService, GoodsService, UsersService, ServerService]
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

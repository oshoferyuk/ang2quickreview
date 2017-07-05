import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, ContentChild , AfterContentInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
		
	@Input() info:{serverId:number,serverName:string,activated:boolean};
	@Output() serverEE = new EventEmitter<{id:number,name:string}>();
	@Input() name: string;
	@ContentChild("contentR") contentR: ElementRef;
	
  constructor() { 
	//console.log('constructor');
  }

  ngOnInit() {
	//console.log('ngOnInit');
	//console.log(this.contentR.nativeElement.innerHTML);
  }
  
  ngOnChanges(changes: SimpleChanges){
	//console.log('ngOnChanges');
	//console.dir(changes);	
  }
  
  ngDoCheck(){
	  //console.log('ngDoCheck');
  }
 
 ngAfterContentInit(){
//	console.log('ngAfterContentInit');
//console.log(this.contentR.nativeElement.innerHTML);	
	 
 }
  
  changeServerName(){
	  this.serverEE.emit({id:23,name:'bob'});
  }

}

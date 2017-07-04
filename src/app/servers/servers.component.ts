import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
		
	@Input() info:{serverId:number,serverName:string,activated:boolean};
	@Output() serverEE = new EventEmitter<{id:number,name:string}>();
  constructor() { }

  ngOnInit() {
  }
  
  changeServerName(){
	  this.serverEE.emit({id:23,name:'bob'});
  }

}

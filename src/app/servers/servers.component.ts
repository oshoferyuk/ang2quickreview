import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, ContentChild , AfterContentInit, ElementRef} from '@angular/core';

import {GoodsService} from '../services/goods.service';
	
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: []
})
export class ServersComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
		
	@Input() info:{serverId:number,serverName:string,activated:boolean};
	@Output() serverEE = new EventEmitter<{id:number,name:string}>();
	@Input() name: string;
	@ContentChild("contentR") contentR: ElementRef;
	data:{name:string,age:number,ok:boolean}[] = [];
	
  constructor(private goodService:GoodsService) { 
	this.data = this.goodService.getData();
	console.log('***');
	console.log(this.data);
  }

  ngOnInit() {
	  this.goodService.statusee.subscribe((status:string) => {
		  this.alertInfo(status);
	  });
	  this.goodService.statusee.emit('EMIT NEW DATA');
	//console.log('ngOnInit');
	//console.log(this.contentR.nativeElement.innerHTML);
  }
  
  alertInfo(info:string){
	  alert(info);
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

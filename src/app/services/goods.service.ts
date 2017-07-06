import { Injectable, EventEmitter } from '@angular/core';
import { LogginService } from './logging.service';

@Injectable()
export class GoodsService {

  data:{name:string,age:number,ok:boolean}[] = [{name:'bob',age:23,ok:true},{name:'tom',age:88,ok:false},{name:'zok',age:55,ok:true}];	
  constructor(private lg:LogginService) { }
  
  statusee:EventEmitter<string> = new EventEmitter<string>();
  
  getData(){
	  console.log('good service using log service');
	  this.lg.log('test');
	  return this.data;
  }
  
  modifyData(index:number, data:{name:string,age:number,ok:boolean}){
	  this.data[index] = data;
  }

}

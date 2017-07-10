import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/take';

import { ServerService } from './server.service';

@Injectable()
export class UsersService {
  users:any[] = [];
  constructor(private ss:ServerService) { 
		
		//ss.getUsers().subscribe((userData) =>{
		//	this.users = userData;
		//});
  }
  
  getUsers(){
	  return this.ss.getUsers();
  }
  
  getFirst2User(){
	  return this.ss.getUsers().take(2);
  }
  
  getUserDetail(userId:number, getDataCb){
	  
	  this.ss.getUsers().subscribe(p => {
		  getDataCb(p[userId]);
	  });
	  
	  //return {street:"test street" + userId };
  }

}

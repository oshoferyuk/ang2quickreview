import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


import { Config } from '../app.config';
import {Observable} from 'rxjs';

@Injectable()
export class ServerService {
  
  constructor(private http:Http) { 
  }
  getUsers():Observable<any>{
	  return this.http.get(Config.USER_URL).map(this.extractData);
  }	
  
  private extractData(res: Response) {

	let body = res.json();
	return body || { };
  }
  
}

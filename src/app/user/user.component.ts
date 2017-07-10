import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() currentIndex: number;
  @Input("user") userInfo:{id:number,
				 name:string, 
				 username:string, 
				 email:string, 
				 address:
					{street:string, 
					 suite:string, 
					 city:string, 
					 zipcode:string,
					 geo:{
						lat:string,
						lng:string	
					 },
					 phone:string,
					 website:string,
					 company:{
						 name:string,
						 catchPhrase:string,
						 bs:string
					 }}};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
	  	 
  }

}





/*
{ "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "address": 
{ "street": "Kulas Light", 
  "suite": "Apt. 556", 
  "city": "Gwenborough", 
  "zipcode": "92998-3874", 
  
  "geo": { "lat": "-37.3159", "lng": "81.1496" } }, 
  "phone": "1-770-736-8031 x56442", "website": "hildegard.org", 
  "company": 
  { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets" } }
  
  */
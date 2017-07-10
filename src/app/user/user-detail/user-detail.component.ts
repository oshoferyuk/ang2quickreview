import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) { }
  currentUserId:number;
  userDetail:string;
  
  ngOnInit() {
	  this.currentUserId = this.route.snapshot.parent.params['id'];	
	  this.userService.getUserDetail(this.currentUserId, this.receiveData.bind(this));
	  this.userDetail = 'aaaaa';
  }

  receiveData(data){
	  
	console.log(data.address.street);
	this.userDetail = data.address.street;
  }

  
}

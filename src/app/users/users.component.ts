import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	//console.log('params: ', this.route.snapshot.params['id']);
	this.route.params.subscribe((params: Params) => {
		console.log('params: ');
		console.dir(params);
	});
	
	this.route.queryParams.subscribe((params: Params) => {
		console.log('queryParams');
		console.dir(params);
	});
  
	this.route.fragment.subscribe((params) => {
		console.log('fragment');
		console.dir(params);
	});
  
  }
  
  onNavigate(){
	  this.router.navigate(['/users',23,'edit'],{queryParams:{a:23,b:'test'},fragment:'loaging'});
  }
}

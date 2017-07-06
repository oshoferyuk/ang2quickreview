import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
	//console.log('params: ', this.route.snapshot.params['id']);
	this.route.params.subscribe((params: Params) => {
		console.log('params2: ', params['id']);
	});
  }
}

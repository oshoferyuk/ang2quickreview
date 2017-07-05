import { Component, OnInit } from '@angular/core';
import { NumberStrategy } from '../models/number.strategy.model';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
	list:number[] = [1,2,3,4,5]
	listStrategy:NumberStrategy = NumberStrategy.All;
	NUMBERSTRATEGY = NumberStrategy;
	
	constructor() { }

	ngOnInit() {
		//console.log('Number' + NumberStrategy.All);
	}
	
	getList(){
		
		switch(this.listStrategy){
			
			case NumberStrategy.All:
				return this.list;
			
			case NumberStrategy.ODD:
				return [11,12,13];
			
			case NumberStrategy.EVEN:
				return [21,22,23];
			
			default:
				return this.list;
		}
	}
	
	setClickStrategy(listStrategy:NumberStrategy){
		
		this.listStrategy = listStrategy;
	}
	
	
}

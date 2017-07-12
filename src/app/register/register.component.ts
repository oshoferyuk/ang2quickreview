import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;
  answer: string;
  genders = ['male', 'female'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.dir(form.value);
		// we can access form early before submiting by accessing
    console.dir(this.registerForm.valid);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;
  answer: string = '';
  genders = ['male', 'female'];
  userName: string = 'super bob';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.dir(form.value);
		// we can access form early before submiting by accessing
    console.dir(this.registerForm.valid);
    this.registerForm.reset();
  }

  suggestUserName() {
    // Set several items at once using setValue, need provide all fields
    // this.registerForm.setValue({
    //   userDataGroup: {
    //     username: 'bob',
    //     email: 'bob@we.re'
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.registerForm.form.patchValue({
      userDataGroup: {
        username: this.userName
      }
    })
  }
}

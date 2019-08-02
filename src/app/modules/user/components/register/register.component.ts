import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor() {}

  ngOnInit() {
    this.registerForm.valueChanges.subscribe(value => {
      console.log('Register: ', value);
    });

    // this.registerForm.setValue({
    //   username: 'bruce_wang',
    //   password: '111111',
    // });

    this.registerForm.statusChanges.subscribe(status => {
      console.log('Status: ', status);
    });
  }

  onSubmit() {
    console.log('Submit: ', this.registerForm.value);
  }
}

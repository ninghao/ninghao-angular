import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor() {}

  ngOnInit() {
    this.registerForm.valueChanges.subscribe(value => {
      console.log('Register: ', value);
    });

    this.registerForm.setValue({
      username: 'bruce_wang',
      password: '111111',
    });
  }

  onSubmit() {
    console.log('Submit: ', this.registerForm.value);
  }
}

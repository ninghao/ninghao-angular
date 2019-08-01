import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username = new FormControl();

  constructor() {}

  ngOnInit() {
    this.username.valueChanges.subscribe(value => {
      console.log('Username: ', value);
    });

    this.username.setValue('bruce_wang');
  }
}

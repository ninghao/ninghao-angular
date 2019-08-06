import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  canDeactivate() {
    console.log('Admin component canDeactivate.');
    return window.confirm('Are you sure you want to leave?');
  }
}

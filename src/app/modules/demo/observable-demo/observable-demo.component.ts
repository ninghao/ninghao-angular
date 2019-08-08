import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit {
  demoObservable: Observable<string>;

  constructor() {}

  ngOnInit() {
    this.demoObservable = of('hello', 'hola', '您好');
  }

  onClick() {
    this.demoObservable.subscribe(value => console.log(value));
  }
}

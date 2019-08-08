import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit, OnDestroy {
  demoObservable: Observable<any>;
  demoSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.demoObservable = of('hello', 'hola', '您好');
    const someNumbers = interval(1000);
    const transformValue = map(value => `# ${value}`);
    this.demoObservable = transformValue(someNumbers);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Unsubscribe demo observable.');
    this.demoSubscription.unsubscribe();
  }

  onClick() {
    const observer = {
      next: value => console.log(value),
      error: error => console.log(error),
      complete: () => console.log('Demo observable completed.'),
    };
    this.demoSubscription = this.demoObservable.subscribe(observer);
  }

  unsubscribe() {
    this.demoSubscription.unsubscribe();
  }
}

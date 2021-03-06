import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription, interval, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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

    this.demoObservable = interval(1000).pipe(
      filter((value: number) => value % 2 !== 0),
      map(value => `# ${value}`),
    );
  }

  ngOnDestroy() {
    if (this.demoSubscription) {
      console.log('ngOnDestroy: Unsubscribe demo observable.');
      this.demoSubscription.unsubscribe();
    }
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

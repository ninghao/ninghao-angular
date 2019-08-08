import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableDemoComponent } from './observable-demo.component';

describe('ObservableDemoComponent', () => {
  let component: ObservableDemoComponent;
  let fixture: ComponentFixture<ObservableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

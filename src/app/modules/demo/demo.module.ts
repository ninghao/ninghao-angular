import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { ChildRoutesComponent } from './child-routes/child-routes.component';
import { LoginComponent } from './login/login.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';

@NgModule({
  declarations: [DemoComponent, ChildRoutesComponent, LoginComponent, ObservableDemoComponent],
  imports: [CommonModule, DemoRoutingModule],
})
export class DemoModule {}

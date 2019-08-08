import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PostModule } from '../../post/post.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent],
  imports: [CommonModule, AdminRoutingModule, PostModule],
})
export class AdminModule {}

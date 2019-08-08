import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../auth/auth.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostComponent } from '../../post/post.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'posts',
        component: PostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

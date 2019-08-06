import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';
import { ChildRoutesComponent } from './child-routes/child-routes.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { PostComponent } from '../post/post.component';

const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      {
        path: 'child-routes',
        component: ChildRoutesComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}

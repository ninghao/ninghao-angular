import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './modules/user/components/register/register.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

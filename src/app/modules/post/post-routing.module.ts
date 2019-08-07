import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostDetailResolveService } from './services/post-detail-resolve.service';

const routes: Routes = [
  { path: 'posts', component: PostComponent },
  {
    path: 'posts/:id',
    resolve: {
      entity: PostDetailResolveService,
    },
    component: PostDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}

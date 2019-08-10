import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostRoutingModule } from './post-routing.module';
import { PostEditComponent } from './components/post-edit/post-edit.component';

@NgModule({
  declarations: [PostComponent, PostItemComponent, PostDetailsComponent, PostEditComponent],
  imports: [CommonModule, PostRoutingModule],
  exports: [PostComponent],
})
export class PostModule {}

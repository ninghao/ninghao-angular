import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostItemComponent } from './components/post-item/post-item.component';

@NgModule({
  declarations: [PostComponent, PostItemComponent],
  imports: [CommonModule],
  exports: [PostComponent],
})
export class PostModule {}

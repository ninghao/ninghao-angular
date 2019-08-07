import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class PostDetailResolveService implements Resolve<Post> {
  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot): Post {
    console.log('Post detail resolve service.');

    const postId = +route.paramMap.get('id');

    return this.postService.show(postId);
  }
}

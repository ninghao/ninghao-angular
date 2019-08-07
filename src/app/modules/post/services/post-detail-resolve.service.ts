import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostDetailResolveService implements Resolve<Post> {
  constructor() {}

  resolve(): Post {
    console.log('Post detail resolve service.');

    return {
      id: 1,
      title: 'hello',
    };
  }
}

import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { posts } from '../posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  entities: Post[];

  constructor() {
    this.entities = posts;
  }

  index() {
    return this.entities;
  }

  show(id: number) {
    return this.entities.find(post => post.id === id);
  }
}

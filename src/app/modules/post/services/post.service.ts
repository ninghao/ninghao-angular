import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postsApi = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  index() {
    return this.http.get(this.postsApi);
  }

  show(id: number) {
    return this.http.get<Post>(`${this.postsApi}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postsApi = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  index() {
    return this.http.get(this.postsApi);
  }

  show(id: number) {}
}

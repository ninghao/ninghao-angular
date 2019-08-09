import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/post.model';
import { throwError } from 'rxjs';
import { catchError, retry, retryWhen, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postsApi = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  index() {
    return this.http.get(this.postsApi).pipe(
      catchError(this.handleError),
      // retry(3),
      retryWhen(errors =>
        errors.pipe(
          delay(3000),
          take(3),
        ),
      ),
    );
  }

  show(id: number) {
    return this.http.get<Post>(`${this.postsApi}/${id}`);
  }

  handleError(error: HttpErrorResponse) {
    return throwError('Something went wrong.');
  }
}

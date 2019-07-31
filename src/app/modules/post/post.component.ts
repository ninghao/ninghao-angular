import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'Posts';
  entities: Post[];

  constructor(private postService: PostService) {
    this.entities = this.postService.index();
  }

  ngOnInit() {}

  removeItem(item: Post) {
    console.log('remove...');
    this.entities = this.entities.filter(entity => {
      return entity.id !== item.id;
    });
  }
}

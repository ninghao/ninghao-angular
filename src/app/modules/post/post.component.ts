import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'Posts';
  entities: Post[];
  selectedId: number;

  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.entities = this.postService.index();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedId = +params.get('id');
    });
  }

  removeItem(item: Post) {
    console.log('remove...');
    this.entities = this.entities.filter(entity => {
      return entity.id !== item.id;
    });
  }
}

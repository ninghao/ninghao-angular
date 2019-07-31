import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  entity: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const postId = +params.get('id');
      console.log(postId);

      this.entity = this.postService.show(postId);
    });
  }
}

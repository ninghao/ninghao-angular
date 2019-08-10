import { Component, OnInit } from '@angular/core';
import { Post } from '../../../post/models/post.model';
import { PostService } from '../../../post/services/post.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
})
export class MyListComponent implements OnInit {
  entities: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getMyList().subscribe(data => (this.entities = data));
  }

  removeItemFromList(entityId: number) {
    this.postService.removeItemFromList(entityId).subscribe(() => {
      this.entities = this.entities.filter(item => item.id !== entityId);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'Posts';
  entities = [
    {
      id: 1,
      title: 'hello',
      body:
        'Sit do ullamco incididunt irure veniam sint exercitation proident.',
    },
    { id: 2, title: 'hola', body: 'Culpa Lorem in qui ad aliqua cupidatat.' },
    { id: 3, title: '您好' },
  ];

  constructor() {}

  ngOnInit() {}

  removeItem(item: Post) {
    console.log('remove...');
    this.entities = this.entities.filter(entity => {
      return entity.id !== item.id;
    });
  }
}

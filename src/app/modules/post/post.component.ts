import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'Posts';
  entities = [
    {
      title: 'hello',
      body:
        'Sit do ullamco incididunt irure veniam sint exercitation proident.',
    },
    { title: 'hola', body: 'Culpa Lorem in qui ad aliqua cupidatat.' },
    { title: '您好' },
  ];

  constructor() {}

  ngOnInit() {}
}

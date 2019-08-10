import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  postEditForm = this.formBuilder.group({
    title: [''],
    body: [''],
    image: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap(params => this.postService.show(+params.get('id'))))
      .subscribe(data => {
        this.postEditForm.patchValue(data);
      });
  }

  onSubmit() {
    console.log(this.postEditForm.value);
  }
}

import { TestBed } from '@angular/core/testing';

import { PostDetailResolveService } from './post-detail-resolve.service';

describe('PostDetailResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostDetailResolveService = TestBed.get(PostDetailResolveService);
    expect(service).toBeTruthy();
  });
});

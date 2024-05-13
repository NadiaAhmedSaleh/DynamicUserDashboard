import { TestBed } from '@angular/core/testing';

import { HttpCacheInterceptorInterceptor } from './http-cache-interceptor.interceptor';

describe('HttpCacheInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpCacheInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpCacheInterceptorInterceptor = TestBed.inject(HttpCacheInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

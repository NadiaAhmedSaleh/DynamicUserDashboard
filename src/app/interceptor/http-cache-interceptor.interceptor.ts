import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpInterceptorFn, 
  HttpResponse
} from '@angular/common/http';
import { Observable,Subject, filter, finalize, tap } from 'rxjs';


const requests: {
  src: string;
  data$: Subject<HttpResponse<any>>;
  params?: any;
}[] = [];


export const httpCacheInterceptor: HttpInterceptorFn = (req, next) => {
  const prevSameRequest = () => {
    return requests.find(
      (x) =>
        x.src === req.url &&
        JSON.stringify(x.params) === JSON.stringify(req.body)
    );
  };

  const sameRequest = prevSameRequest();

  if (sameRequest) {
    if (!sameRequest.data$.closed) return sameRequest.data$;
    sameRequest.data$ = new Subject<any>();
  } else {
    requests.push({
      src: req.url,
      data$: new Subject<HttpResponse<any>>(),
      params: req.body,
    });
  }

  return next(req).pipe(
    filter((x) => x instanceof HttpResponse),
    tap((x) => {
      const r = prevSameRequest();
      !r?.data$.closed && r?.data$.next(x as HttpResponse<any>);
    }),
    finalize(() => {
      const r = prevSameRequest();
      r?.data$.complete();
      r?.data$.unsubscribe();
    })
  );

};
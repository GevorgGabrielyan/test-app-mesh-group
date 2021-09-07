import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ApiPrefixInterceptor implements HttpInterceptor {

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const linkRegexp = /https?:\/\/.*/;
    if (!linkRegexp.test(request.url)) {
      request = request.clone({ url: 'http://localhost:3000' + request.url });
    }

    return next.handle(request);
  }
}

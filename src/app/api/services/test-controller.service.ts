/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Test Controller
 */
@Injectable({
  providedIn: 'root',
})
class TestControllerService extends __BaseService {
  static readonly adminAccessUsingGETPath = '/api/test/admin';
  static readonly allAccessUsingGETPath = '/api/test/all';
  static readonly moderatorAccessUsingGETPath = '/api/test/mod';
  static readonly userAccessUsingGETPath = '/api/test/user';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * adminAccess
   * @return OK
   */
  adminAccessUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/test/admin`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * adminAccess
   * @return OK
   */
  adminAccessUsingGET(): __Observable<string> {
    return this.adminAccessUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * allAccess
   * @return OK
   */
  allAccessUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/test/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * allAccess
   * @return OK
   */
  allAccessUsingGET(): __Observable<string> {
    return this.allAccessUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * moderatorAccess
   * @return OK
   */
  moderatorAccessUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/test/mod`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * moderatorAccess
   * @return OK
   */
  moderatorAccessUsingGET(): __Observable<string> {
    return this.moderatorAccessUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * userAccess
   * @return OK
   */
  userAccessUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/test/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * userAccess
   * @return OK
   */
  userAccessUsingGET(): __Observable<string> {
    return this.userAccessUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }
}

module TestControllerService {
}

export { TestControllerService }

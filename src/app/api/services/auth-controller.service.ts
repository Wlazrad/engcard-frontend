/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LoginRequest } from '../models/login-request';
import { SignupRequest } from '../models/signup-request';

/**
 * Auth Controller
 */
@Injectable({
  providedIn: 'root',
})
class AuthControllerService extends __BaseService {
  static readonly authenticateUserUsingPOSTPath = '/api/auth/signin';
  static readonly registerUserUsingPOSTPath = '/api/auth/signup';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * authenticateUser
   * @param loginRequest loginRequest
   * @return OK
   */
  authenticateUserUsingPOSTResponse(loginRequest: LoginRequest): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = loginRequest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/signin`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * authenticateUser
   * @param loginRequest loginRequest
   * @return OK
   */
  authenticateUserUsingPOST(loginRequest: LoginRequest): __Observable<{}> {
    return this.authenticateUserUsingPOSTResponse(loginRequest).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * registerUser
   * @param signUpRequest signUpRequest
   * @return OK
   */
  registerUserUsingPOSTResponse(signUpRequest: SignupRequest): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = signUpRequest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/signup`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * registerUser
   * @param signUpRequest signUpRequest
   * @return OK
   */
  registerUserUsingPOST(signUpRequest: SignupRequest): __Observable<{}> {
    return this.registerUserUsingPOSTResponse(signUpRequest).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module AuthControllerService {
}

export { AuthControllerService }

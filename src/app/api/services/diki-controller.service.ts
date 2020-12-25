/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Diki Controller
 */
@Injectable({
  providedIn: 'root',
})
class DikiControllerService extends __BaseService {
  static readonly getAutoCompleteListUsingGETPath = '/api/diki/autocompletelist/{partWord}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAutoCompleteList
   * @param partWord partWord
   * @return OK
   */
  getAutoCompleteListUsingGETResponse(partWord: string): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/diki/autocompletelist/${encodeURIComponent(partWord)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * getAutoCompleteList
   * @param partWord partWord
   * @return OK
   */
  getAutoCompleteListUsingGET(partWord: string): __Observable<Array<string>> {
    return this.getAutoCompleteListUsingGETResponse(partWord).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }
}

module DikiControllerService {
}

export { DikiControllerService }

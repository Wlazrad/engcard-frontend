/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Pdf Word Controller
 */
@Injectable({
  providedIn: 'root',
})
class PdfWordControllerService extends __BaseService {
  static readonly downloadWordPDFUsingGETPath = '/api/pdf/download/';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * downloadWordPDF
   */
  downloadWordPDFUsingGETResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/pdf/download/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * downloadWordPDF
   */
  downloadWordPDFUsingGET(): __Observable<null> {
    return this.downloadWordPDFUsingGETResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PdfWordControllerService {
}

export { PdfWordControllerService }

/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Word } from '../models/word';

/**
 * Word Controller
 */
@Injectable({
  providedIn: 'root',
})
class WordControllerService extends __BaseService {
  static readonly getWordListUsingGETPath = '/api/word/add';
  static readonly addWordUsingPOSTPath = '/api/word/add';
  static readonly deleteWordUsingDELETEPath = '/api/word/delete/{id}';
  static readonly getWordListAllUsersUsingGETPath = '/api/word/list/all';
  static readonly getAllTeachWordUsingGETPath = '/api/word/teach/all';
  static readonly removeFromTeachWordUsingPUTPath = '/api/word/teach/remove/{id}';
  static readonly addToTeachWordUsingPUTPath = '/api/word/teach/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getWordList
   * @return OK
   */
  getWordListUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Word>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/word/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Word>>;
      })
    );
  }
  /**
   * getWordList
   * @return OK
   */
  getWordListUsingGET(): __Observable<Array<Word>> {
    return this.getWordListUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Word>)
    );
  }

  /**
   * addWord
   * @param word word
   * @return OK
   */
  addWordUsingPOSTResponse(word: Word): __Observable<__StrictHttpResponse<Word>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = word;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/word/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Word>;
      })
    );
  }
  /**
   * addWord
   * @param word word
   * @return OK
   */
  addWordUsingPOST(word: Word): __Observable<Word> {
    return this.addWordUsingPOSTResponse(word).pipe(
      __map(_r => _r.body as Word)
    );
  }

  /**
   * deleteWord
   * @param id id
   */
  deleteWordUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/word/delete/${encodeURIComponent(id)}`,
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
   * deleteWord
   * @param id id
   */
  deleteWordUsingDELETE(id: number): __Observable<null> {
    return this.deleteWordUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * getWordListAllUsers
   * @return OK
   */
  getWordListAllUsersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Word>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/word/list/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Word>>;
      })
    );
  }
  /**
   * getWordListAllUsers
   * @return OK
   */
  getWordListAllUsersUsingGET(): __Observable<Array<Word>> {
    return this.getWordListAllUsersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Word>)
    );
  }

  /**
   * getAllTeachWord
   * @return OK
   */
  getAllTeachWordUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Word>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/word/teach/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Word>>;
      })
    );
  }
  /**
   * getAllTeachWord
   * @return OK
   */
  getAllTeachWordUsingGET(): __Observable<Array<Word>> {
    return this.getAllTeachWordUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Word>)
    );
  }

  /**
   * removeFromTeachWord
   * @param id id
   */
  removeFromTeachWordUsingPUTResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/word/teach/remove/${encodeURIComponent(id)}`,
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
   * removeFromTeachWord
   * @param id id
   */
  removeFromTeachWordUsingPUT(id: number): __Observable<null> {
    return this.removeFromTeachWordUsingPUTResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * addToTeachWord
   * @param id id
   */
  addToTeachWordUsingPUTResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/word/teach/${encodeURIComponent(id)}`,
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
   * addToTeachWord
   * @param id id
   */
  addToTeachWordUsingPUT(id: number): __Observable<null> {
    return this.addToTeachWordUsingPUTResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module WordControllerService {
}

export { WordControllerService }

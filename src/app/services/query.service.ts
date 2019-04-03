import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class QueryService {

  private url: string;

  readonly API_URL: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * @name setUri
   * @memberof QueryService
   * @description concat api with base url
   * @return {void}
   */
  setUri(api: string): void {
    this.url = this.API_URL + api;
  }

  /**
   * @name get
   * @memberof QueryService
   * @description excute get
   * @return {Observable} response of api
   */
  get(): Observable<any> {
    return this.http.get(this.url);
  }

}

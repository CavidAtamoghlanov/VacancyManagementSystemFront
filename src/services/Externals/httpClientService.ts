import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReqParams } from '../../models/request/ReqParams';


@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpclient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  private url(reqParams: Partial<ReqParams>) {
    return `${reqParams.baseUrl ? reqParams.baseUrl :
      this.baseUrl}/${reqParams.controller}${reqParams.action ? `/${reqParams.action}` : ""}`;
  }

  get<T>(reqParams: Partial<ReqParams>, id?: string): Observable<T> {
    let url: string =
      reqParams.fullEndPoint ? reqParams.fullEndPoint : `${this.url(reqParams)}${id ? `/${id}` : ""}`;
    return this.httpclient.get<T>(url, { headers: reqParams.headers });
  }

  post<T>(reqParams: Partial<ReqParams>, body: Partial<T>): Observable<T> {
    let url: string =
      reqParams.fullEndPoint ? reqParams.fullEndPoint : `${this.url(reqParams)}`;
    return this.httpclient.post<T>(url, body, { headers: reqParams.headers });
  }
 
  put<T>(reqParams: Partial<ReqParams>, body: Partial<T>): Observable<T> {
    let url: string =
      reqParams.fullEndPoint ? reqParams.fullEndPoint : `${this.url(reqParams)}`;
    return this.httpclient.put<T>(url, body, { headers: reqParams.headers });
  }

  delete<T>(reqParams: Partial<ReqParams>, id?: string): Observable<T> {
    let url: string =
      reqParams.fullEndPoint ? reqParams.fullEndPoint : `${this.url(reqParams)}/${id}`;
    return this.httpclient.delete<T>(url, { headers: reqParams.headers });
  }
  
}



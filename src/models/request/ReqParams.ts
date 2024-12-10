import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ReqParams {
    controller?: string;
    action?: string;
    headers?: HttpHeaders;
    baseUrl?: string;
    fullEndPoint?: string;
  
  }
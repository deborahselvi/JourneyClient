import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  BASE_URL = 'http://localhost:8080/';

  constructor(
    private http: HttpClient
  ) { }

  postMethod(url: string, body: any) {
    return this.http.post(this.BASE_URL + url, body);
  }
}

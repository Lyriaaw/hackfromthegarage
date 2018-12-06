import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ApiService {

  url = 'http://lysking-api.herokuapp.com';

  constructor(private http: HttpClient) { }

get<T>(uri): Observable<T> {
  // console.log('Sending get to', this.url + uri);
  return this.http.get<T>(this.url + uri);
}

put<T>(uri, data): Observable<T> {
  return this.http.put<T>(this.url + uri, data);
}

post<T>(uri, data): Observable<T> {
  return this.http.post<T>(this.url + uri, data);
}

delete<T>(uri): Observable<T> {
  return this.http.delete<T>(this.url + uri);
}

fetch(file_url: string) {
  return this.http.get<any>(file_url);
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpTestService {
  protected url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get(`${this.url}/users`);
  }
}

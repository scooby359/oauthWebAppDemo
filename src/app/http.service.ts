import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = `https://httpbin.org/`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

    getTest() {
      console.log(`GET called`);
      return this.http.get(`${this.url}get`, {headers: this.getHeaders()});
    }

    putTest() {
      console.log(`PUT called`);
      const testBody = { value: `PUT Request` };
      return this.http.put(`${this.url}put`, testBody, {headers: this.getHeaders()});
    }

    postTest() {
      console.log(`POST called`);
      const testBody = { value: `POST request`};
      return this.http.post(`${this.url}post`, testBody, {headers: this.getHeaders()});
    }

    private getHeaders() {
      return {
        Authorization: `Bearer ${this.authService.idToken}`
      };
    }
}

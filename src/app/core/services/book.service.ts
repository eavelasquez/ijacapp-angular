import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = URL_SERVER + '/book';
  constructor(private http: HttpClient) { }

  async createBook(book) {
    return this.http.post(this.url, book);
  }

  getBook() {
    return this.http.get(this.url);
  }
}

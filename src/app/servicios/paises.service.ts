import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private url = 'https://restcountries.com/v2/all';

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(this.url);
  }
}

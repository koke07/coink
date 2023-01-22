import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinkTestService {

  constructor(private http: HttpClient) { }


  getCharacters(){
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
}

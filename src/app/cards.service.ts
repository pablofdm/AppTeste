import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cardsUrl = 'https://teste-simsave.getsandbox.com/home'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.cardsUrl}`)
  }
}

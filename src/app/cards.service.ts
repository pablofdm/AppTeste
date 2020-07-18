import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Card {
  title: string;
  text: string;
  color: string;
}

interface Products {
  products: Array<Card>
}

@Injectable({
  providedIn: 'root'
})

export class CardsService {

  API = 'https://teste-simsave.getsandbox.com/home'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Products>(`${this.API}`)
  }
}

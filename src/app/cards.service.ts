import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CardsService {

  API = 'https://teste-simsave.getsandbox.com/home'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.API}`)
  }
}

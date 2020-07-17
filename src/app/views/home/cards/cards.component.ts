import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  cards: Array<any>;

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.cardsService.listar().subscribe(dados => this.cards = dados);
  }

}

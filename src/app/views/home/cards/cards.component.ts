import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';

interface Card {
  title: string;
  text: string;
  color: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Array<Card> ;

  constructor(private CardService: CardsService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.CardService.listar().subscribe(dados => {
      this.cards = dados.products
      console.log(this.cards)
    })
  }
}

    



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
      // Estava recebendo this.card = dados, mas na verdade dentro do dados tinha os products
      // seria possivel fazer com desestruturacao tbm, mas teria que adicionar tipage no metodo listar()
      // exemplo de desestruturacao .subscribe({products} => this.dados = products)
      this.cards = dados.products
      console.log(this.cards)
    })
  }
}

    



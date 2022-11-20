import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './card';
import { Cards} from './cards'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  card: any;
  jsonDataResult: any;
  cards = new Array<Card>();
  msg: any;

  constructor(private http: HttpClient) {

  }

  getMessage() {
    console.log("z klienta");
  }

  loadCards() {
    this.http.get<Cards>('assets/json/data.json').subscribe(response => {
      this.cards = response.cards1;
    });
  }

  loadCardsAsync() {
    return this.http.get<Cards>('assets/json/data.json')
  }

  addCards(c: Card) {
    console.log('Karty: ', this.cards);
    this.cards.push(c);
  }

  getCards() {
    return this.cards;
  }
  updateCard(a: any, b: any) {
    if (this.cards == null) {
      return "Brak kart";
    }

    this.card = this.cards.filter(x => x.name == a)[0];

    console.log("Znaleziono kartę: " + this.card);

    if (this.card != null) {
      this.card.amount += b;
    } else {
      return "Karta nie została znaleziona";
    }

    return "";
  }
}

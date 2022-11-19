import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  jsonDataResult: any;
  cards = new Array<any>();
  constructor(private http: HttpClient) {

  }

  getMessage() {
    console.log("z klienta");
  }

  loadCards() {
    this.http.get<any>('assets/json/data.json').subscribe(response => {
      this.cards = response.cards1;
    });
  }

  addCards(c:any)
  {
    this.cards.push(c);
  }

  getCards()
  {
    return this.cards;
  }
}

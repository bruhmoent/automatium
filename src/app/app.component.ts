import { Component } from '@angular/core';
import { ClientService } from './client.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularproject1';
  msg = "q";
  count = 1;
  cards:any;

  constructor(private clientService: ClientService) {
    clientService.getMessage();
    clientService.loadCards();
   
  }

  myFunc() {
    this.msg = "click";
    console.log('--- click :: ', "abc");
    this.cards = this.clientService.getCards();
  }

  addCard() {
    this.msg = "click";
    console.log('--- click :: ', "abc");
    this.clientService.addCards({"name": "k3", "amount":56});
  }

  withdrawCard() {
    this.msg = "click";
    console.log('--- click :: ', "abc");
   this.cards[0].amount -= 1;
  }
}

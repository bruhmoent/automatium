import { Component } from '@angular/core';
import { ClientService } from './client.service';
import { Router } from '@angular/router';
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
  router: Router;

  constructor(private clientService: ClientService, private router2: Router) {
    clientService.getMessage();
    clientService.loadCards();
    this.router = router2;
  }

  loadCards(){
    console.log('--- clickss :: ', "abc");
    this.clientService.loadCards();
    this.cards = this.clientService.getCards();
    return this.cards();
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

  
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  hasCards(){
    return this.cards && this.cards.length > 0;
  }
}

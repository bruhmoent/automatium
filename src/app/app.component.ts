import { Component } from '@angular/core';
import { ClientService } from './client.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'primeng/carousel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from "primeng/inputtext";
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService]
})
export class AppComponent {
  title = 'angularproject1';
  msg = "q";
  count = 1;
  cards: Array<Card> = new Array<Card>();
  router: Router;
  responsiveOptions: any;
  numScroll: any;
  numVisible: any;
  needUpdate: boolean = false;
  display: boolean = false;
  selectedCard: any;

  constructor(private clientService: ClientService, private router2: Router, public dialogService: DialogService) {
    clientService.getMessage();
    clientService.loadCards();
    this.router = router2;
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  loadCards() {
    // console.log('--- clickss :: ', "abc");
    // this.clientService.loadCards();
    // console.log('--- clickss2 :: ', "abc");
    // this.cards = this.clientService.getCards();
    // console.log('--- clickss3 :: ', "abc");
    return this.cards;
  }

  myFunc() {
    this.msg = "click";
    console.log('--- click :: ', "abc");
    this.cards = this.clientService.getCards();
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  hasCards() {
    return this.cards && this.cards.length > 0;
  }

  ngOnInit() {
    console.log('--- clickss :: ', "abc");
    let cardsTemp = this.clientService.loadCardsAsync();
    cardsTemp.subscribe(response => {
      this.cards = response.cards1;
      console.log('--- kartr :: ', response);
    })

    console.log('--- kart :: ', this.cards);
  }

  showDialog() {
    this.display = true;
  }

  selectCard(card: any) {
    this.selectedCard = card;
    console.log('--- selectedCard :: ', this.selectedCard);
  }

  isSelectedCard(card: any) {
    return this.selectedCard == card;
  }

  addCards(c: Card) {
    console.log('--- add cards komp :: ', c);

    this.cards.push(c);
  }

  setCards(cards: any) {
    this.cards = cards;
  }

  setNeedUpdate(val: boolean) {
    this.needUpdate = val;
  }

  isNeedUpdate(){
    return this.needUpdate;
  }
}

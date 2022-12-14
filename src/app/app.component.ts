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
import { Message, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService, MessageService]
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
  messageDelete: string = "";
  msgs1: Message[];
  amount: any;
  withDrawMoneyStep: number = 0;
  pin: string = "";

  constructor(private clientService: ClientService,
    private router2: Router,
    public dialogService: DialogService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder) {
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

    this.msgs1 = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
      { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Message Content' },
      { severity: 'custom', summary: 'Custom', detail: 'Message Content', icon: 'pi-file' }
    ];
  }

  checkoutForm2 = this.formBuilder.group({
    pin: ''
  });

  loadCards() {
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
    this.withDrawMoneyStep = 0;
    this.selectedCard = card;
    this.amount = this.selectedCard.amount;
    this.selectedCard.balance = this.selectedCard.amount;
  }

  isSelectedCard(card: any) {
    return this.selectedCard == card;
  }

  isSelectCard() {
    return this.selectedCard != null;
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

  isNeedUpdate() {
    return this.needUpdate;
  }

  delCard(card: any) {
    console.log(card);

    if (card != null) {
      if (this.cards.length <= 1) {
        this.messageDelete = "Pozosta??a jedna karta, nie mo??na usun????";
        this.messageService.add({ severity: 'error', summary: 'Mened??er Kart', detail: this.messageDelete, life: 2000 });
        return;
      }
      let indexC = this.cards.indexOf(card, 0);
      console.log("indexC=" + indexC);
      if (indexC > -1) {
        this.cards.splice(indexC, 1);
      }
    }

    this.selectedCard = null;
  }

  saveCard() {
    console.log("Karta do zapisu:" + this.amount);

    if (this.selectedCard != null) {
      if (this.selectedCard.balance < 0) {
        this.messageDelete = "Saldo nie mo??e by?? ujemne";
        this.messageService.add({ severity: 'error', summary: 'Mened??er Kart', detail: this.messageDelete, life: 2000 });
        return;
      }
      this.selectedCard.amount = this.selectedCard.balance;
      console.log("Zapisano do karty");
      //this.selectedCard.amount = this.amount;
      this.selectedCard = null;
    }

  }

  cancelSaveCard() {
    if (this.selectedCard != null) {
      this.selectedCard.balance = this.selectedCard.amount;
      this.selectedCard = null;
      this.pin = "";
    }
  }

  hideEmptyCashMachine() {
    return this.selectedCard == null || this.withDrawMoneyStep != 0;
  }

  hidePinCashMachine() {
    return this.selectedCard == null || this.withDrawMoneyStep != 1;
  }

  hideAmountCashMachine() {
    return this.selectedCard == null || this.withDrawMoneyStep != 2;
  }

  hideLastStageCashMachine() {
    return this.selectedCard == null || this.withDrawMoneyStep != 3;
  }

  withDraw() {
    this.withDrawMoneyStep = 1;
    this.pin = "";
  }

  cancelWithDraw() {
    this.withDrawMoneyStep = 0;
    this.pin = "";
  }

  checkPin() {
    console.log("Pin karty: " + this.selectedCard.pin);
    console.log("Pin ts: " + this.pin);

    if (this.selectedCard.pin == this.pin) {
      this.withDrawMoneyStep = 2;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Mened??er Kart', detail: "Niepoprawny pin", life: 2000 });
      return;
    }
  }

  withDrawMoney(amount: number) {
    console.log("Kwota na karcie: " + this.selectedCard.amount);
    console.log("Wyp??acana kwota: " + amount);
    this.pin = "";

    if (this.selectedCard.amount >= amount) {
      this.selectedCard.amount = this.selectedCard.amount - amount;
      this.selectedCard.balance = this.selectedCard.amount;
      this.withDrawMoneyStep = 3;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Mened??er Kart', detail: "Niewystarczaj??ce ??rodki na karcie", life: 2000 });
      return;
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientService } from '../client.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Card } from '../card';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent {
  name: string = "";
  amount: number = 0;

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private appComponent: AppComponent,
    private route: Router
  ) { }

  checkoutForm = this.formBuilder.group({
    name: '',
    amount: ''
  });

  saveCard() {
    console.log('Your order has been submitted', this.checkoutForm.value);
    if (this.appComponent.isNeedUpdate()) {
      this.appComponent.setNeedUpdate(false);
    } else {
      this.appComponent.setNeedUpdate(true);
    }

    let card = new Card();
    card.name = this.name;
    card.amount = this.amount;

    this.clientService.addCards(card);

    this.appComponent.setCards(this.clientService.cards);

    console.log('Service cards', this.clientService.cards);
    console.log('AppComponent cards', this.appComponent.cards);
    this.checkoutForm.reset();
  }
}

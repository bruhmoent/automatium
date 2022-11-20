import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientService } from '../client.service';
@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent {
  msg: string = "";

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
  ) { }
  checkoutForm2 = this.formBuilder.group({
    name2: '',
    amount2: ''
  });

  saveCard2() {
    console.log("Aktualizuję kwotę: " + this.checkoutForm2.value);
    this.msg = this.clientService.updateCard(this.checkoutForm2.value.name2, this.checkoutForm2.value.amount2);
    this.checkoutForm2.reset();
  }
}

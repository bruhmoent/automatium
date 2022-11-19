import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientService } from '../client.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent {
  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    amount: ''
  });

saveCard()
{
  console.warn('Your order has been submitted', this.checkoutForm.value);
  this.clientService.addCards(this.checkoutForm.value);
  this.checkoutForm.reset();
}
}

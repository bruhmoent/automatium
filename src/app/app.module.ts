import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddcardComponent } from './addcard/addcard.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 
import {MatButtonModule} from '@angular/material/button';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {MatIconModule} from '@angular/material/icon';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import { InputTextModule } from "primeng/inputtext";
import {InplaceModule} from 'primeng/inplace';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputNumberModule} from 'primeng/inputnumber';
const appRoutes: Routes = [
  { path: 'addcard', component: AddcardComponent },
  { path: 'add-funds', component:  AddFundsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddcardComponent,
    AddFundsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    AccordionModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    DynamicDialogModule,
    DialogModule,
    InputTextModule,
    InplaceModule,
    InputNumberModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {
  

}

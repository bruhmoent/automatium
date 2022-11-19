import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddcardComponent } from './addcard/addcard.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms' 
const appRoutes: Routes = [
  { path: 'addcard', component: AddcardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddcardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {
 

}

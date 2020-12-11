import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbankerComponent } from './bank/addbanker/addbanker.component';
import { ListbankersComponent } from './bank/listbankers/listbankers.component';
import { DetailbankerComponent } from './bank/detailbanker/detailbanker.component';
import { BankersService } from './services/bankers.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddbankerComponent,
    ListbankersComponent,
    DetailbankerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BankersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { CartListComponent } from './cart-list/cart-list.component';

import { FormsModule } from '@angular/forms';
import { PancanniDrinksComponent } from './pancanni-drinks/pancanni-drinks.component';
import { PancanniAboutComponent } from './pancanni-about/pancanni-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DrinkListComponent,
    CartListComponent,
    PancanniDrinksComponent,
    PancanniAboutComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

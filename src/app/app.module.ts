import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './header/navigation.component';
import { NavbarComponent } from "./header/navbar/navbar.component";
import { CardsComponent } from './header/cards/cards.component';
import { FooterComponent } from './header/footer/footer.component';
import { Cards2Component } from './header/cards2/cards2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavbarComponent,
    CardsComponent,
    FooterComponent,
    Cards2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

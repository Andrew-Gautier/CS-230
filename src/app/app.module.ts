import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './header/navigation.component';
import { NavbarComponent } from "./header/navbar/navbar.component";
import { CardsComponent } from './header/cards/cards.component';
import { FooterComponent } from './header/footer/footer.component';
import { Cards2Component } from './header/cards/cards2/cards2.component';
import { CardComponent } from './header/cards/card/card.component';
import { LandingPhotoComponent } from './header/landing-photo/landing-photo.component';
import { WhyJobberComponent } from './Layouts/why-jobber/why-jobber.component';
import { PricingComponent } from './Layouts/pricing/pricing.component';
import { SignupComponent } from './Layouts/signup/signup.component';
import { HomepageComponent } from './Layouts/homepage/homepage.component';
import { PrivacyPolicyComponent } from './Layouts/privacy-policy/privacy-policy.component';
import {HttpClientModule} from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavbarComponent,
    CardsComponent,
    FooterComponent,
    Cards2Component,
    CardComponent,
    LandingPhotoComponent,
    WhyJobberComponent,
    PricingComponent,
    SignupComponent,
    HomepageComponent,
    PrivacyPolicyComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './header/cards/card/card.component';
import { CardsComponent } from './header/cards/cards.component';
import { FooterComponent } from './header/footer/footer.component';
import { PricingComponent } from './Layouts/pricing/pricing.component';
import { WhyJobberComponent } from './Layouts/why-jobber/why-jobber.component';
import { SignupComponent } from './Layouts/signup/signup.component';
import { HomepageComponent } from './Layouts/homepage/homepage.component';
import { PrivacyPolicyComponent } from './Layouts/privacy-policy/privacy-policy.component';
import { FormComponent } from './form/form.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '', 
    component: HomepageComponent,

  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'why-jobber',
    component: WhyJobberComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'form',
    component: FormComponent,
    
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

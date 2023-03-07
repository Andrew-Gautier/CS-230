import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './header/cards/card/card.component';
import { CardsComponent } from './header/cards/cards.component';
import { FooterComponent } from './header/footer/footer.component';

const routes: Routes = [
  // {
  //   path: "", 
  //   component: CardsComponent

  // },
  // {
  //   path: "test", 
  //   component: FooterComponent

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

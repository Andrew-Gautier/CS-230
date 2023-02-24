import { Component } from '@angular/core';
import { mock_list } from './header/cards/mock_list';
import { ProductModel } from './header/cards/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myWebApp';
  products = ProductModel [] = [];

  constructor(){
    for(var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
}

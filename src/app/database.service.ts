import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from './header/cards/product.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  async readCards(){
    let result = await this.httpClient.get<any>("https://cs-230-lab-ba360-default-rtdb.firebaseio.com/Cards.json")
    let product :  ProductModel [] = [];
    result.subscribe( obj => {
      for (let key in obj){
        product.push(obj[key])
      }
    })
    return product;
   
  }


  constructor(private httpClient : HttpClient) { 



  }
}

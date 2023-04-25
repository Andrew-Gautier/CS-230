import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from './header/cards/product.model';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import { onValue, push, ref } from 'firebase/database';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  async readCards(){
    let dbref = ref(this.database.database, "Cards");
    let product :  ProductModel [] = [];
    await onValue(dbref, (obj) => {
      for (let key in obj.val()){
        product.push(obj.val()[key])
      }
    });
   
    return product;
   
  }
// Create a new directory in real time db to pull data from

  writedata(data: any){
    let dbref = ref(this.database.database, "Cards-test");
    push(dbref, data);
  }

  constructor(private database : AngularFireDatabase) { 

    this.writedata({
      "name": "test",
      "price": 100,
      "description": "test",
    })


  }
}

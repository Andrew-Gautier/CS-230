import { Component } from '@angular/core';
import { mock_list } from './header/cards/mock_list';
import { ProductModel } from './header/cards/product.model';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myWebApp';
  products : ProductModel [] = [];
  



  constructor(private store: AngularFireAuth, private client:HttpClient){
    let result = client.get("https://cs-230-lab-ba360-default-rtdb.firebaseio.com/myinfo.json");
    result.subscribe(data => {
      this.FirstName = (data as any) ["FirstName"]
      this.LastName = (data as any) ["LastName"]
      this.mixId = (data as any) ["mixid"]
      this.Github = (data as any) ["Github"]
    })
    for(var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
  LastName : string = "";
  FirstName : string = "";
  mixId : string = "";
  Github : string = "";

}

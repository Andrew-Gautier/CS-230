import { Component, Input } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { mock_list_2 } from './mock_list_2';
import { ProductModel } from './product.model_2';

@Component({
  selector: 'app-cards2',
  templateUrl: './cards2.component.html',
  styleUrls: ['./cards2.component.css']
})
export class Cards2Component {
  @Input() title: string;
  @Input() imgDescription: string;
  @Input() description: string;
  @Input() img: string;
  product : ProductModel [] = [];

  constructor(private service: DatabaseService) {
    this.img ="No img found";
    this.imgDescription = "No description found"
    this.title = "N/Atest"
    this.description = "No information found"
  
   }

  ngOnInit(): void {
    this.service.readCards().then( obj => {
      this.product = obj;
      
    })
  }
  getItems(){
    return this.product;
  }

}


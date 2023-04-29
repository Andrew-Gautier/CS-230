import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ProductModel } from 'src/app/header/cards/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  constructor(private db :PricingComponent ) { }

  ngOnInit(): void {
  }

  writedata(product:ProductModel){
    console.log("You Clicked the button");
    console.log(product);
   // this.db.writedata(product)
  }
}

import { Component, Input } from '@angular/core';
import { mock_list } from './mock_list';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() title: string;
  @Input() imgDescription: string;
  @Input() description: string;
  @Input() img: string;

  constructor() {
    this.img ="No img found";
    this.imgDescription = "No description found"
    this.title = "N/Atest"
    this.description = "No information found"
   }

  ngOnInit(): void {
  }
  getItems(){
    return mock_list;
  }

  
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

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
}

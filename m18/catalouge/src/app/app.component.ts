import { Component } from '@angular/core';
import {product} from './info'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Catalouge';
  data = product;
  i=0;
  selected = false;
  indexrc(i) {
    this.i = i;
    console.log(i);
    this.selected = true;
}
}

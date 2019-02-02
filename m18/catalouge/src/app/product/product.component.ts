import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() child: EventEmitter<any>= new EventEmitter<any>();
data;
  constructor(private ds :DataService) { }

  ngOnInit() {
    this.data = this.ds.getData();

  }
  onClick(i) {
    this.child.emit(i);
  }

}

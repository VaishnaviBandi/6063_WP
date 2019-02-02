import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() i; 
deets;
  constructor(private ds :DataService) { }

  ngOnInit() {
    this.deets = this.ds.getData();
  }

}

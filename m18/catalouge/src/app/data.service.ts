import { Injectable } from '@angular/core';
import {product} from './info';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor() { }
  getData(){
    return product;
  }
}

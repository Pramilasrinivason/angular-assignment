import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'app-viewall-product',
  templateUrl: './viewall-product.component.html',
  styleUrls: ['./viewall-product.component.css']
})
export class ViewallProductComponent implements OnInit {
  list: Product[];
  constructor() {
 this.list = [
      { "pId": 1, "pName": 'mouse', "price": 1200, "stock": 1, "availability": true },
      { "pId": 2, "pName": 'keyboard', "price": 1400, "stock": 0, "availability": false },
      { "pId": 3, "pName": 'pendrive', "price": 2200, "stock": 11, "availability": true },
      { "pId": 4, "pName": 'mouse', "price": 1200, "stock": 0, "availability": false}
    ]; }

  ngOnInit() {
  }

}
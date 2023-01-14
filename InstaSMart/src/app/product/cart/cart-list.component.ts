import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../product-list/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})

export class CartListComponent implements OnChanges{
 
  title:string='';
  @Input() cartList:IProduct[]=[];

  ngOnChanges(changes: SimpleChanges): void {
  }

  ratingClick(msg:string):void{
    // console.log('inside product click')
    this.title = msg;
  } 
}
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category,IProduct } from '../products/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges,OnInit{
  @Input() cartList:IProduct[]=[];
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
  }
}
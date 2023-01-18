import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'shared/cart.service';
import { IProduct } from '../Products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  prods:IProduct[]=[];
  amt!:number;
  constructor(private cartService:CartService,private router:Router){}
  
  ngOnChanges(changes: SimpleChanges): void {}
  
  ngOnInit(): void {
    this.cartService.getProds().subscribe(res=>{
      this.prods=res;
      this.amt=this.cartService.getTotalPrice();
    });
  }
  
  emptycart(){
    this.cartService.emptyCart();
  }

  removeProd(p:IProduct){
    this.cartService.removeCartItem(p);
  }

  checkout(){
    this.router.navigate(['payment']);
  }
}
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { CartService } from 'shared/cart.service';
import { IProduct } from '../Products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnChanges{
  //initialisation
  prods:IProduct[]=[];
  amt!:number;
isCartEmpty:boolean=false;
  title:string='cart';
  constructor(private cartService:CartService,private router:Router){}
  
  ngOnChanges(changes: SimpleChanges): void {}
  
  ngOnInit(): void {
    this.cartService.getProds().subscribe(res=>{
      this.prods=res;
      this.amt=this.cartService.getTotalPrice();
      this.isCartEmpty=this.cartService.cartEmpty;
    });
  }
  
  ngOnChanges(){
  }
  
emptycart(){
    this.cartService.emptyCart();
  this.isCartEmpty=this.cartService.cartEmpty;
  }
hasCart() {
    return this.cartService.cartItemList.length>0
  }

  removeProd(p:IProduct){
    this.cartService.removeCartItem(p);
  }

  checkout(){
    this.router.navigate(['payment']);
  }
}

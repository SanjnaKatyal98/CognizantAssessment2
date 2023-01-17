import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IProduct } from "src/app/Products/product";

@Injectable({
    providedIn: 'root'
})

export class CartService{
    url="api/cart";
    constructor(private http:HttpClient){}
    cart:IProduct[]=[];
    private cartList=new BehaviorSubject<IProduct[]>([]);
    
    //getter and setter
    getProds(){
      return this.cartList.asObservable();
    }
    setProds(p:IProduct[]){
      this.cart.push(...p);
      this.cartList.next(p);
    }

    addtoCart(p:IProduct){
      this.cart.push(p);
      this.cartList.next(this.cart);
      this.getTotalPrice();
      console.log(this.cart);
    }

    emptyCart(){
      this.cart=[];
      this.cartList.next(this.cart);
    }

    getTotalPrice():number{
      let amt=0;
      this.cart.map((c:IProduct)=>{
        amt+=c.price;
      })
      return amt;
    }

    deleteItem(p:IProduct){
      const id=p.id;
      const comIndex=this.cart.findIndex(item=>item.id===id);
      if(comIndex >-1){
        this.cart.splice(comIndex,1);
      }
    }

    removeCartItem(p:IProduct){
      this.cart.map((a:IProduct, index:any)=>{
        if(p.id===a.id){
          this.cart.splice(index,1);
        }
      });
      this.cartList.next(this.cart);
    }
}
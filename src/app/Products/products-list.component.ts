import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CartService } from 'shared/cart.service';
import { ProductService } from 'shared/product.service';
import { IProduct } from './product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit,OnDestroy{
  //initialising
  dataReceived=this.prodServ.getProducts();
  product!:IProduct[];
  products!:IProduct|null;
  sub!:Subscription;
  errMssg:string='';
  filteredList:IProduct[]=[];
  c!:string;

  ngOnInit(): void {
    //subscibing to the request
    this.sub=this.prodServ.getProducts().subscribe((resp)=>{
      console.log(resp);
      this.product=resp;
      this.filteredList= this.product;
    },err=>this.errMssg=err);//for error
  }

  constructor(private router:Router,private prodServ:ProductService,private cartService:CartService){}
  //@Output() emitProductToCart:EventEmitter<IProduct>= new EventEmitter<IProduct>();

  //destroying subscription
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

  //filtering or serching data as per name
  filterData(val:string){
    this.filteredList=this.product.filter((p:IProduct)=>p.name==val);
  }

  newProduct(){
    console.log('in new product');
    this.prodServ.changeSelectedProd(this.prodServ.newProd());
    this.router.navigate(['addProduct']);
  }

  addToCart(p:IProduct){
    this.cartService.addtoCart(p);
    this.router.navigate(['cart']);
  }

  productSelected(p:IProduct):void{
    console.log(p);
    this.prodServ.changeSelectedProd(p);
  }

  //deleting specific product
  delProd(p:IProduct):void{
    if(p && p.id){
      if(confirm(`Are You sure to delete ${p.name} details?`)){
        this.prodServ.deleteProd(p.id).subscribe(
          (resp)=>this.prodServ.changeSelectedProd(null),
          err=>this.errMssg=err
        );
      }
      else{
        this.prodServ.changeSelectedProd(null);
      }
    }
  }

  //updating specific product
  prodUpdate(p:IProduct){
    console.log('in update product');
    this.prodServ.updateProd(p).subscribe(
      (resp)=>this.prodServ.changeSelectedProd(p),
      err=>this.errMssg=err);
    this.router.navigate(['editProduct']);
  }
}
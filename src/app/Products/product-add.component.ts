import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'shared/product.service';
import {Store} from "@ngrx/store";
import {getProducts} from "../../state/product/product.selector";
import {deleteProduct, loadProducts} from "../../state/product/product.action";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{
  addProduct!:FormGroup;
  form:FormGroup=this.addProduct;
  constructor(private router:Router,private prodServ:ProductService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.addProduct=this.fb.group({
      name:['',Validators.required],
      price:[Validators.required],
      image:['']
    });
  }
  onSubmit(){
    this.prodServ.createProd(this.addProduct.value).subscribe(data=>{
      console.log(data);
      this.router.navigate(['products']);
    });
  }
}
import { state, style, trigger } from '@angular/animations';
import { Component , EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from 'shared/logging.service';
import { ProductService } from 'shared/product.service';
import { Categories, IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations:[
    
    trigger('hover', [
      state('hoverIn', style({
        boxShadow:'10px 10px',
        opacity: 1,
        backgroundColor: 'pink'
      })),
      state('hoverOut', style({
        opacity: 0.8,
        backgroundColor: 'transparent'
      })),
    ])
    
  ]
})
export class ProductListComponent implements OnInit, OnDestroy{

  isHovering : boolean =false;

  errorMessage:string='';
  sub!:Subscription;
  prod!:IProduct;
  products:IProduct[]=[];
  pageTitle:string="Product List "
  filteredProducts:IProduct[]=[];
  selectedProduct!:IProduct | null;
  filterValue!:string;
  href:string='';
  dataReceived=this.productService.getProducts();

  obsProducts$ !: Observable<IProduct[]>;

  @Output() emitProductToCart:EventEmitter<IProduct>= new EventEmitter<IProduct>();

  // private logService:LoggingService
  constructor(private productService:ProductService,private router:Router){}
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  };

  toggleHover(){
    this.isHovering = !this.isHovering;
  }

  displayProd(){
      // this.logService.logProducts(this.products);
  }

  ngOnInit(): void {
    this.href=this.router.url;
    console.log(this.href);

    this.obsProducts$ = this.productService.getProducts();

    //sub object is initialized
      // this.sub =this.productService.getProducts().subscribe(
      //    (response)=>{

      //    console.log(response);
      //    this.products=response;
      //    this.filteredProducts = this.products;

      //  },
      //  err=>{this.errorMessage=err;
      //   console.log(err);
      //  }
      //  );

      //  this.productService.selectedProductChanges$.
      //  subscribe(currentProduct=>{this.selectedProduct=currentProduct;
      //  console.log(this.selectedProduct);
      // });

  }

  title: string='';
  
  category:Categories = Categories.All;
  
  // products:IProduct[]=
  // [
  //    {
  //      "id":1 ,
  //      "name":"Pizza",
  //      "price": 200,
  //      "image": "../../assets/images/pizza.jpg",
  //      "category": Categories.Food,
  //      "rating": 4,
  //      "quantity":0
  //    },
  //    {
  //      "id":5,
  //      "name":"Tshirt",
  //      "price":1200,
  //      "image": "../../assets/images/tshirt.jpg",
  //      "category": Categories.Clothing,
  //      "rating": 3.7,
  //      "quantity":0
  //    },
  //    {
  //      "id":10,
  //      "name":"Table",
  //      "price": 120000,
  //      "image": "../../assets/images/table.jpg",
  //      "category": Categories.Furniture,
  //      "rating": 4.5,
  //      "quantity":0
  //    },
  //    {
  //      "id":16,
  //      "name":"Shampoo",
  //      "price":400,
  //      "image": "../../assets/images/dog2.jpg",
  //      "category": Categories.Cosmetics,
  //      "rating": 4,
  //      "quantity":0
  //    }
  //  ];


  filterProd():void{
     this.filteredProducts = this.products.filter((p:IProduct)=>p.category === (this.category));
  }

  ratingClick(msg:string):void{
    // console.log('inside product click')
    this.title = msg;
  }

 

  increaseQuantity(p:IProduct):void{
     let index = this.products.findIndex((prod)=> p.id === prod.id);
     this.products[index].quantity+=1;
     this.emitProductToCart.emit(p);
  }

  decreaseQuantity(p:IProduct):void{
    let index = this.products.findIndex((prod)=> p.id === prod.id);
   
    if(this.products[index].quantity!=0){
      this.products[index].quantity-=1;
      this.emitProductToCart.emit(p);
    }
    
  }

  //called on click of btn add to cart and emit the product to app component
  onSelect(p:IProduct){
    this.emitProductToCart.emit(p);
  }

  newProduct():void{
    this.productService.changeSelectedProduct(this.productService.newProduct());
    // this.router.navigate(['addProduct']);
  }
   
  //when product's category is clicked
  productSelected(product:IProduct):void{
    this.productService.changeSelectedProduct(product);
  } 
}
import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Category,IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnChanges{
  dispImg:boolean=false;
  c!:string;
  filteredList:IProduct[]=[];
  mssg:string='';

  disp():void{
    this.dispImg=!this.dispImg;
  }

  ngOnInit(): void {
    this.filteredList= this.products;
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  filterData(val:string){
    this.filteredList=this.products.filter((p:IProduct)=>p.category==val);
  }

  products:IProduct[]=[{
    id:1,
    name:"Pizza",
    price:400,
    image: "../../assets/tulips.jpg",
    category:Category.Food,
    rating:4
  },{
    id:2,
    name:"Shirt",
    price:300,
    image: "../../assets/roses.jpg",
    category:Category.Clothing,
    rating:2
  },{
    id:3,
    name:"Lipstick",
    price:200,
    image: "../../assets/moon.jpeg",
    category:Category.Cosmetics,
    rating:3
  },{
    id:4,
    name:"bed",
    price:1000,
    image: "../../assets/mountain.jpg",
    category:Category.Furniture,
    rating:5
  }];

  onRatingClicked(msg:string){
    console.log('inside product');
    this.mssg=msg;
  }

  @Output() emitItemtoCart:EventEmitter<IProduct>=new EventEmitter<IProduct>();
  addItem(p:IProduct):void{
    this.emitItemtoCart.emit(p);
  }
}
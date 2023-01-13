import { I18nPluralPipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { IProduct } from "src/app/product/product-list/product";

@Injectable({
    providedIn:'root'
})

export class InMemoryDbEventService implements InMemoryDbService {
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> { 

        let products: IProduct[]= [
          {
            "id":1 ,
            "name":"Carrot",
            "price": 200,
            "image": "../../assets/carrot.jpeg",
            "quantity":0
          },
          {
            "id":2,
            "name":"Tomato",
            "price":1200,
            "image": "../../assets/tomato.jpg",
            "quantity":0
          },
          {
            "id":3,
            "name":"Potato",
            "price": 120000,
            "image": "../../assets/potato.jpg",
            "quantity":0
          },
          {
            "id":4,
            "name":"Cabbage",
            "price":400,
            "image": "../../assets/cabbage.jpg",
            "quantity":0
          },
          {
            "id":5,
            "name":"Capsicum",
            "price":400,
            "image": "../../assets/shimlamirch.jpg",
            "quantity":0
          }
         ];

        return {products};     
    }
}
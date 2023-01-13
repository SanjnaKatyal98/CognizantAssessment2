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
             "name":"Pizza",
             "price": 200,
             "image": "../../assets/images/pizza.jpg",
             "quantity":0
           },
           {
             "id":5,
             "name":"Tshirt",
             "price":1200,
             "image": "../../assets/images/tshirt.jpg",
             "quantity":0
           },
           {
             "id":10,
             "name":"Table",
             "price": 120000,
             "image": "../../assets/images/table.jpg",
             "quantity":0
           },
           {
             "id":16,
             "name":"Shampoo",
             "price":400,
             "image": "../../assets/images/dog2.jpg",
             "quantity":0
           }
         ]

        return {products};
                
    }

}
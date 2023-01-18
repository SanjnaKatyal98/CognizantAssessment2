import { I18nPluralPipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { IProduct } from "src/app/Products/product";

@Injectable({
    providedIn:'root'
})

export class DbService implements InMemoryDbService {
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> { 
        let products: IProduct[]= [
            {
                "id":1,
                "name":"Carrots",
                "price":200,
                "image": "../../assets/images/carrot.jpeg"
              },{
                "id":2,
                "name":"Cabbage",
                "price":300,
                "image": "../../assets/images/cabbage.jpg"
              },{
                "id":3,
                "name":"Onion",
                "price":100,
                "image": "../../assets/images/onion.jpg"
              },{
                "id":4,
                "name":"Tomato",
                "price":400,
                "image": "../../assets/images/tomato.jpg"
              },{
                "id":5,
                "name":"Potato",
                "price":400,
                "image": "../../assets/images/potato.jpg"
              },{
                "id":6,
                "name":"Capsicum",
                "price":400,
                "image": "../../assets/images/shimlamirch.jpg"
              }
         ];
        return {products};     
    }
}
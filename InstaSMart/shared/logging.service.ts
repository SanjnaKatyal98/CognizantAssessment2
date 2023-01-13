import { Injectable } from "@angular/core";
import { IProduct } from "src/app/product/product-list/product";


@Injectable({
    providedIn:'root'
})

export class LoggingService{
    log():string{
        return "logging service called!";
    }
    logProducts(p:IProduct[]):void{
        console.log(p);
    }
}
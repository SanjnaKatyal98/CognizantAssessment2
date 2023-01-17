import { Injectable } from "@angular/core";
import { IProduct } from "src/app/Products/product";

@Injectable({
    providedIn:'root'
})

export class LoggingService{
    logProducts(p:IProduct[]):void{
        console.log(p);
    }
}
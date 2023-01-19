import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from "rxjs";
import { IProduct } from "src/app/Products/product";
import { CartService } from './cart.service';

describe('Cart Service', () => {
    let service: CartService;
    let injector: TestBed;
    let httpMock: HttpTestingController;
    let veges:IProduct[]=[];
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule, ReactiveFormsModule,FormsModule],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
            providers: [ CartService ] 
        });
        service=TestBed.get(CartService)
        injector = getTestBed();
        veges=[
            {
                "id":1,
                "name":"tomato",
                "image":"../assets/images/tomato.jpg",
                "price":200,
                },
                {
                    "id":2,
                    "name":"Lady's finger",
                    "image":"../assets/images/lady.jpg",
                    "price":100,
                }
        ];
        service.cart=veges;
        httpMock=injector.get(HttpTestingController);
    });

    it('should create', () => {
    expect(service).toBeTruthy();
    });
     
    it('should check addtoCart()', () => {
    let vegetable ={
                "id":2,
                "name":"Lady's finger",
                "image":"../assets/images/lady.jpg",
                "price":100,
            };
         veges=[...veges,vegetable];
         service.cart.push(vegetable);
         service.addtoCart(vegetable);
         expect(service.cart.length).toEqual(4);
        });

    it('should check emptyCart()', () => {
        let vegetable ={
            "id":2,
            "name":"Lady's finger",
            "image":"../assets/images/lady.jpg",
            "price":100,
         };
         
        veges=[...veges,vegetable];
        service.cart.push(vegetable);
        service.emptyCart();
        expect(service.cart.length).toEqual(0);
        });
});
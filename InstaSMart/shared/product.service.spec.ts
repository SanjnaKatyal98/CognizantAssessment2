import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, inject, TestBed } from "@angular/core/testing";

import { of } from "rxjs";
import { Categories, IProduct } from "src/app/product/product-list/product";


import { ProductService } from "./product.service"

  describe('ProductService',()=>{
    
    let service:ProductService;
    let injector: TestBed;
    let httpMock: HttpTestingController;
    let  items:any[]=[];
    
    afterEach(() => {
        httpMock.verify();
    });

  beforeEach(()=>{
     TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[ProductService],
     });

     service=TestBed.get(ProductService);


     injector = getTestBed();

    httpMock = injector.get(HttpTestingController);
      items=[
        {
          "id":1 ,
          "name":"Pizza",
          "price": 200,
          "image": "../../assets/images/pizza.jpg",
          "category": Categories.Food,
          "rating": 4,
          "quantity":0
        },
        {
          "id":5,
          "name":"Tshirt",
          "price":1200,
          "image": "../../assets/images/tshirt.jpg",
          "category": Categories.Clothing,
          "rating": 3.7,
          "quantity":0
        },
        {
          "id":10,
          "name":"Table",
          "price": 120000,
          "image": "../../assets/images/table.jpg",
          "category": Categories.Furniture,
          "rating": 4.5,
          "quantity":0
        },
        {
          "id":16,
          "name":"Shampoo",
          "price":400,
          "image": "../../assets/images/dog2.jpg",
          "category": Categories.Cosmetics,
          "rating": 4,
          "quantity":0
        }
      ]

    });

    it('should be created',()=>{
        expect(service).toBeTruthy();
    });

    it('should getAllProducts',
        inject([HttpTestingController,ProductService],
            (httpMock:HttpTestingController,service:ProductService)=>{

      service.getProducts().subscribe(resp=>expect(items).toEqual(resp));
      const mockReq = httpMock.expectOne(service.url);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(items);
    }
  ));

  //using spyOn to test getProductById
    it('should get product by id',()=>{
        let response:IProduct;
        let item ={
            "id":16,
            "name":"Shampoo",
            "price":400,
            "image": "../../assets/images/dog2.jpg",
            "category": Categories.Cosmetics,
            "rating": 4,
            "quantity":0
        };

      const fn=spyOn(service, 'getProductById').and.returnValue(of(item));
      service.getProductById(111).subscribe(res=>{response=res;expect(response).toEqual(item);});
      expect(fn).toHaveBeenCalled();
  });
 //failed the test , tried to POST item1 and expected it to be equal to item2
 //then change it back to item and  see the test passed

   it('createProduct() should post a product and    return that new product  as data',()=>{


    const item:IProduct={
        "id":16,
        "name":"Shampoo",
        "price":400,
        "image": "../../assets/images/dog2.jpg",
        "category": Categories.Cosmetics,
        "rating": 4,
        "quantity":0
     };


    const item2:IProduct ={
      id:115,
      name:"Strawberies",
      category:Categories.Food,
      price:300,
      image:"../../assets/images/mangoes.jpg",
      rating:3.5,
      quantity:0
     };

    items =[...items,item];
     service.createProduct(item).subscribe(resp=>expect(resp).toEqual(item));
     expect(items.length).toEqual(3);
     const req = httpMock.expectOne(service.url);
     expect(req.request.method).toBe('POST');
     //here the item is the response flushed , as the response body 
     req.flush(item);

     });

     it('updateProduct () should update  a product and    return updated product as data',()=>{
      let item2 ={
        "id":16,
        "name":"Shampoo",
        "price":400,
        "image": "../../assets/images/dog2.jpg",
        "category": Categories.Cosmetics,
        "rating": 4,
        "quantity":0
       };

       service.updateProduct(item2).subscribe(resp=>expect(resp).toEqual(item2) )
       const req = httpMock.expectOne(`${service.url}/${item2.id}`);
       expect(req.request.method).toBe('PUT');
       req.flush({item2 });

    })

});
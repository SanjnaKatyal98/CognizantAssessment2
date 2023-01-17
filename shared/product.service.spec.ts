import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, inject, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { IProduct } from "src/app/Products/product";
import { ProductService } from "./product.service";

describe('ProductService',()=>{
    //initialisation
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

//checks if created or not
     it('should be created',()=>{
        expect(service).toBeTruthy();
    });

//for adding new product
    it('createProd() should post a product and return that new product  as data',()=>{

        const item:IProduct={
                "id":4,
                "name":"Tomato",
                "price":400,
                "image": "../../assets/images/tomato.jpg"
              };
    
        const item2:IProduct ={
                "id":5,
                "name":"Potato",
                "price":400,
                "image": "../../assets/images/potato.jpg"
            };
    
        items =[...items,item];
         service.createProd(item).subscribe(resp=>expect(resp).toEqual(item));
         expect(items.length).toEqual(3);
         const req = httpMock.expectOne(service.url);
         expect(req.request.method).toBe('POST');
         //here the item is the response flushed , as the response body 
         req.flush(item);
         });

//for fetch all products
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

  //for update product
  it('updateProd() should update  a product and return updated product as data',()=>{
    let item2 ={
        "id":6,
        "name":"Capsicum",
        "price":400,
        "image": "../../assets/images/shimlamirch.jpg"
      };

     service.updateProd(item2).subscribe(resp=>expect(resp).toEqual(item2) )
     const req = httpMock.expectOne(`${service.url}/${item2.id}`);
     expect(req.request.method).toBe('PUT');
     req.flush({item2 });
  });

    //for delete product
    it('deleteProd() should delete a product',()=>{
      let id=1;
       service.deleteProd(id).subscribe(resp=>expect(resp).toEqual(id) )
       const req = httpMock.expectOne(`${service.url}/${id}`);
       expect(req.request.method).toBe('PUT');
       req.flush({id});
    });
});
});

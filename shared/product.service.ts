import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap, throwError, Observable, BehaviorSubject, map } from "rxjs";
import { IProduct } from "src/app/Products/product";

//this is provided in root so we dont need to mention in app providers
@Injectable({
    providedIn:'root'
})

export class ProductService{
    private url='api/products';
    products:IProduct[]=[];
    private selectedProd=new BehaviorSubject<IProduct|null>(null);
    selectedProdChange$=this.selectedProd.asObservable();

    //this class has dependancy on httpclient
    constructor(private http:HttpClient){}

    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.url)
        //.pipe(tap(data=>console.log(JSON.stringify(data))),
        .pipe(tap(data=>{
                console.log(data);
                this.products=data;}),
            catchError(this.errHandler));
    }

    //if there is some error,this is to handle that
    errHandler=(err:any)=>{
        //throw new Error(`some error ${err}`);
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error has occured ${err.error.message}`;
        } else {
          errorMessage = `Backend error code ${err.status} ${err.body.error}`;
        }
        console.log(err);
        return throwError(errorMessage);
    }

    changeSelectedProd(p:IProduct|null):void{
      console.log(this.selectedProd.next(p));
    }

    newProd():IProduct{
      return {
        id:0,
        name:'',
        price:0,
        image:''
      };
    }

    //adding new product
    createProd(p:IProduct):Observable<IProduct>{
      const headers=new HttpHeaders({'Content-Type':'application/json'});
      const newProduct={...p,id:null};
      return this.http.post<IProduct>(this.url,newProduct,{headers})
      .pipe(tap(data=>{
        console.log('in create new product'+JSON.stringify(data));
        this.products.push(data);
      }),
      catchError(this.errHandler));
    }

    //deleting product
    deleteProd(id:number):Observable<{}>{
      const headers=new HttpHeaders({'Content-Type':'application/json'});
      const url=`${this.url}/${id}`;
      return this.http.delete<IProduct>(url,{headers})
      .pipe(tap(data=>{
        console.log('deleting product'+id);
        const foundIndex=this.products.findIndex(item=>item.id===id);
        if(foundIndex>-1){
          this.products.splice(foundIndex,1);
        }
      }),
      catchError(this.errHandler));
    }

    //updating an existing product
    updateProd(p:IProduct):Observable<IProduct>{
      const headers=new HttpHeaders({'Content-Type':'application/json'});
      const url=`${this.url}/${p.id}`;
      return this.http.put<IProduct>(url,p,{headers})
      .pipe(tap(()=>{
        console.log('updating product'+p.id);
        const foundIndex=this.products.findIndex(item=>item.id===p.id);
        if(foundIndex>-1){
          this.products[foundIndex]=p;
        }
      },
      map(()=>p)),
      catchError(this.errHandler));
    }
}
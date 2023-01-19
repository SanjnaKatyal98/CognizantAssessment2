import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, tap } from "rxjs";
import { User } from "./user";

@Injectable()

export class RequestRespInterceptor implements HttpInterceptor{
    constructor(private toastr:ToastrService){}
    intercept(req:HttpRequest<any> , next:HttpHandler):Observable<HttpEvent<any>>{
    console.log('in interceptor')
       return next.handle(req).pipe(tap((event:HttpEvent<any>)=>{
        if(event instanceof HttpResponse && event.status == 201){
             this.toastr.success('Object created')
        }
      }));
    //next.handle(req);
    }
}    
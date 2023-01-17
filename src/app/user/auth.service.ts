import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { User } from "./user";
import { HttpClientBackendService } from "angular-in-memory-web-api";

@Injectable({
    providedIn:'root'
})

export class AuthService{
    //initialisation
    //get the current user --welcome username
    //we need to know if user has logged in or not
    //we have to log out the user
    url='/api/users';
    currentUser!:User |null;
    redirectToUrl!:string;
    users:User[]=[];
    foundIndex!:number;
    isValid:boolean=false;
    isLoggedIn:boolean=false;

    constructor(private http:HttpClient){}

    fetchAllUsers():Observable<User[]>{
        return this.http.get<User[]>(this.url).pipe(
          tap(data=>{
            //we are assigning data to this.users
            this.users=data;
            console.log(this.users)
          }),
          catchError(this.errHandler)
        );
      }

    login(userName:string,password:string):void{
        //service which to validate the user
        /* this.currentUser={
            id:1,
            userName:'sanjna9',
            password:'shahid28',
            isAdmin:true
         }; */
    }

    validateUser(user:any,users:User[]):boolean{
        console.log('validating the user',user)
        user={...user};
        this.foundIndex=users.findIndex(u=>(u.userName==user.userName && u.password == user.password));
        console.log('found index ',this.foundIndex);
        if(this.foundIndex > -1){
            console.log('found the user ',this.users[this.foundIndex]);
            sessionStorage.setItem('loggedInUser',JSON.stringify(this.currentUser));
            this.isValid=true;
            this.isLoggedIn=true;
            sessionStorage.setItem('isLogged','true');
            return true;
        }
        return false;
    }

    logOut():void{
        sessionStorage.removeItem('loggedInUser');
        this.currentUser=null;
        this.isLoggedIn=false;
        sessionStorage.removeItem('isLogged');
    }

    isAdmin():boolean{
        console.log(this.currentUser)
        if(this.currentUser)
          return this.currentUser?.isAdmin;
        return false;
    }

    //for any errors,returns the Observable with errorMessage
    errHandler=(err:any)=>{
        let errorMessage:string;
        //a client side error or network error then ErrorEvent object will be thrown
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error has occured ${err.error.message}`
        }
        else{
            errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
        }
        console.log(err);
        return throwError(errorMessage);
    }
}
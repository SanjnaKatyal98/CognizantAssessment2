import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private authService:AuthService,private router:Router) { }
  //initialisation
  users:User[]=[];
  pageTitle:string='Log In';
  
  onSubmit(loginForm:NgForm){
    if(loginForm && loginForm.valid){
      const userName = loginForm.form.value.userName;
      const password=loginForm.form.value.password;
      //this user is logged in
      this.authService.validateUser({userName,password},this.users);
      console.log('after login');
      if(this.authService.redirectToUrl){
        this.router.navigateByUrl(this.authService.redirectToUrl);
      }
      else{
        this.router.navigate(['products']);
      }
    }
  }

  ngOnInit(): void {
    this.authService.fetchAllUsers().subscribe(data=>this.users=data);
  }
  
  //clears or resets form
  reset(loginForm:NgForm){
    loginForm.resetForm();
  }
  //new registeration
  reg(){
    this.router.navigate(['register']);
  }
  //cancel button
  cancel():void{
    this.router.navigate(['home']);
  }
}
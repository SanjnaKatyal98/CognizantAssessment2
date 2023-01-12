import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router){}
  onSubmit(loginForm:NgForm){
    alert('Logged in Successfully');
    console.log(loginForm.value);
    this.router.navigate(['products']);
  }
  ngOnInit(): void {
  }
  reset(loginForm:NgForm){
    loginForm.resetForm();
  }
}
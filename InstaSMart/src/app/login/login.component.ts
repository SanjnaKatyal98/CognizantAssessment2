import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  onSubmit(loginForm:NgForm){
    alert('logged in successfully');
    console.log(loginForm.value);
  }
  ngOnInit(): void {
  }
  reset(loginForm:NgForm){
    loginForm.resetForm();
  }
}
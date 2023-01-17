import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  title='registration form';
  regForm!:FormGroup;
  
  constructor(private router:Router,private fb:FormBuilder){
    this.regForm=this.fb.group({
      name:['sanjna',[Validators.required,Validators.minLength(3)]],
      email:['sanj@gmail.com',[Validators.required,Validators.email]],
      sex:['female'],
      addr:this.fb.group({
        city:['delhi',[Validators.required]],
        state:['delhi',[Validators.required]],
        country:['india',[Validators.required]]
      })
    });
  }

  ngOnInit(): void {}

  onSubmit(){
    alert('form submitted');
    console.log('success');
    this.regForm.reset();
  }
  
  get id(){
    return this.regForm.get("id");
  }
  get fullName(){
    return this.regForm.get("fullName");
  }
  get mail(){
    return this.regForm.get("mail");
  }
  get sex(){
    return this.regForm.get("sex");
  }
  get city(){
    return this.regForm.get("addr")?.get("city");
  }
  get state(){
    return this.regForm.get("addr")?.get("state");
  }
  get country(){
    return this.regForm.get("addr")?.get("country");
  }
  get username(){
    return this.regForm.get("username");
  }
  get password(){
    return this.regForm.get("password");
  }
  back(){
    alert('Registeration Successful!! Welcome!!')
    this.router.navigate(['products']);
  }
}
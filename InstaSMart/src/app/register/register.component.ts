import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  title='registration form';
  regForm!:FormGroup;
  constructor(){}
  ngOnInit(): void {}

  onSubmit(){
    alert('form submitted');
    console.log('success');
    this.regForm.reset();
  }
  /*
  constructor(private fb:FormBuilder){
    this.regForm=this.fb.group({
      id:['1',[Validators.required,Validators.max(100)]],
      name:['sanjna',[Validators.required,Validators.minLength(3)]],
      email:['sanj@gmail.com',[Validators.required,Validators.email]],
      sex:['female'],
      addr:this.fb.group({
        city:['delhi',[Validators.required]],
        state:['delhi',[Validators.required]],
        country:['india',[Validators.required]]
      })
    });
    }*/

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

}
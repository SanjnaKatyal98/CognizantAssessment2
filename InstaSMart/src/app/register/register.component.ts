import { Component, OnInit } from '@angular/core';
export class Country{
  id:string='';
  name:string='';
  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {}
  countries:Country[]=[
    new Country('0','Select..'),
    new Country('1','India'),
    new Country('2','Other')
  ];
  onSubmit(tempForm:any){
    alert('form submitted');
    console.log('success');
  }
  reset(tempForm:any){
    tempForm.resetForm();
  }
}
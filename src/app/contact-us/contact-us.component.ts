import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
  cForm!:FormGroup;
  
  title:string='contact us';
  ngOnInit(): void {}
  constructor(private router:Router){}

  onSubmit(cForm:NgForm){
    alert('successfully submitted');
    console.log(cForm.value);
    this.router.navigate(['login']);
  }
}
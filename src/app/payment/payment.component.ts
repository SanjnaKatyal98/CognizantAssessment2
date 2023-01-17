import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  ngOnInit(): void {}
  constructor(private router:Router){}
  
  onSubmit(pForm:NgForm){
    alert('Payment Successfull');
    this.router.navigate(['home']);
  }
}
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let el: HTMLElement;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ],
      imports: [
        RouterTestingModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule
      ],schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test case
  it('should call onSubmit() method', () => {
     spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.pForm).toHaveBeenCalledTimes(1);
  });
  //test case
  it('should have as title `payment gateway`', () => {
    const fixture = TestBed.createComponent(PaymentComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('payment gateway');
  });
  it("Checking form is valid or not",()=>{ 
    fixture.detectChanges();
     component.frm.setValue({
      cardnum:"7410852963",
      expdate:"09-10-1989",
      cvv:"333",
      name:"ava"
      fixture.detectChanges();
    });
  });

  it('should check the button when valid or Invalid',()=>{
    const cvv:any=component.paymentgateway.get("cvv");
    const cvv1='3';
    cvv.setValue(cvv1);

    const name:any=component.paymentgateway.get("name");
    const name2='ava max';
    name.setValue(name2);

    const expdate:any=component.paymentgateway.get("expdate");
    const expdate2='19/10/1998';
    expdate.setValue(expdate2);
    fixture.detectChanges();

    const btn=fixture.debugElement.query(By.css('#btn1'));
    expect(btn.nativeElement.disabled).toBeTruthy(); 
  });
  it('should check form is valid',()=>{
    expect(component).toBeTruthy();
  });
  it('should check button is disabled when invalid',()=>{
    expect(component).toBeTruthy();
  });
  it('should check the input type of cvv is number',()=>{
    const price3=fixture.debugElement.query(By.css('.cvv'));

    const price:any=component.paymentgateway.get("cvv");
    const price2=500;
    price.setValue(price2);

    fixture.detectChanges();

    expect(parseInt(price3.nativeElement.value)).toEqual(price2); 
  });
  it('should check the input type of card hlder name is text',()=>{
     const price3=fixture.debugElement.query(By.css('.name'));

    const price:any=component.paymentgateway.get("name");
    const price2='ava';
    price.setValue(price2);

    fixture.detectChanges();

    expect(parseInt(price3.nativeElement.value)).toEqual(price2); 
  });
  it('should check the input type of card number is number',()=>{
     const price3=fixture.debugElement.query(By.css('.price'));

    const price:any=component.paymentgateway.get("price");
    const price2=500;
    price.setValue(price2);

    fixture.detectChanges();

    expect(parseInt(price3.nativeElement.value)).toEqual(price2); 
  });
});

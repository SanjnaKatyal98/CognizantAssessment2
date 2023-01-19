import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductAddComponent } from './product-add.component';

describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddComponent ],
      imports: [
        RouterTestingModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule
      ],schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test case
  //button disable test
  it('should check addProduct button disabled', () => {
    fixture.detectChanges();
    let btn=fixture.debugElement.query(By.css('.btn')).nativeElement ;
    expect(btn.disabled).toBe(true);
   });

   it('should check addProduct button enable', () => {
    let btn=fixture.debugElement.query(By.css('.btn')).nativeElement ;
    component.addProduct.controls['name'].setValue('carrot');
    component.addProduct.controls['price'].setValue('200');
    component.addProduct.controls['image'].setValue('../../assets/images/carrot.jpeg');
    fixture.detectChanges();
    expect(btn.disabled).toBe(false);
   });

  //test for image
  it('should check Product Name', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1).toBeTruthy();
  });
  it('should have Product Name type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have name as Name', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('name');
  });
  it('should check ProductName input value is correct', () => {
    let name=component.addProduct.controls['name'];
    name.setValue('SanjnaKaytal');
    expect(name.errors).toBeNull();    
  });

  //test for price
  it('should check Price', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1).toBeTruthy();
  });
  it('should have Price type of number', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('number');
  });
  it('should have name as Price', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('price');
  });
  it('should check Price input value is correct', () => {
    let price=component.addProduct.controls['price'];
    price.setValue('1000');
    expect(price.errors).toBeNull();    
  });

  //test for image
  it('should check Image', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1).toBeTruthy();
  });
  it('should have Image type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have name as image', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('image');
  });
  it('should check image input value is correct', () => {
    let image=component.addProduct.controls['image'];
    image.setValue('../../assets/images/fruits.jpg');
    expect(image.errors).toBeNull();    
  });

  //validity of form test
  it("Checking The Validity Of The Form",()=>{
    fixture.detectChanges();
     component.form.setValue({
      name:"carrot",
      price:"200",
      image:"../../assets/images/carrot.jpeg"
    })
    fixture.detectChanges(); 
    expect(fixture.nativeElement.querySelector("#add").disabled).toBeFalse(); 
  });
});

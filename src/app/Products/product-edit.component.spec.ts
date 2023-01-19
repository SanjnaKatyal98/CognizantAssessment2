import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductEditComponent } from './product-edit.component';

describe('ProductEditComponent', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditComponent ],
      imports: [
        RouterTestingModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule
      ],schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test case
  it('should have the name',()=>{
    expect(fixture.debugElement.query(By.css('.name'))).toBeTruthy();
  });
  it('should have the Price',()=>{
    expect(fixture.debugElement.query(By.css('.price'))).toBeTruthy();
  });
  it('should have the Image',()=>{
    expect(fixture.debugElement.query(By.css('.image'))).toBeTruthy();
  });
  it('should check the update button when Invalid',()=>{
     const id:any=component.addProduct.get("id");
    const id2='3';
    id.setValue(id2);

    const name:any=component.addProduct.get("name");
    const name2='Newproduct';
    name.setValue(name2);

    const price:any=component.addProduct.get("price");
    const price2=3000;
    price.setValue(price2);

    const image:any=component.addProduct.get("image");
    const image2='../url';
    image.setValue(image2);

    fixture.detectChanges();

    const btn=fixture.debugElement.query(By.css('#btn1'));
    expect(btn.nativeElement.disabled).toBeTruthy(); 
  });
  it('should check the input type of price',()=>{
    const price3=fixture.debugElement.query(By.css('.price'));

    const price:any=component.addProduct.get("price");
    const price2=500;
    price.setValue(price2);

    fixture.detectChanges();

    expect(parseInt(price3.nativeElement.value)).toEqual(price2); 
  });
  it('should check the input type of image',()=>{
   const image3=fixture.debugElement.query(By.css('.image'));

    const image:any=component.addProduct.get("image");
    const image2='../url';
    image.setValue(image2);

    fixture.detectChanges();

    expect(image3.nativeElement.value).toEqual(image2); 
  });
  it('should check the input type of name',()=>{
    const name3=fixture.debugElement.query(By.css('.name'));

    const name:any=component.addProduct.get("name");
    const name2='Newprod';
    name.setValue(name2);

    fixture.detectChanges();

    expect(name3.nativeElement.value).toEqual(name2); 
  });
  it('should check the update button when valid',()=>{
    const id:any=component.addProduct.get("id");
    const id2='3';
    id.setValue(id2);

    const name:any=component.addProduct.get("name");
    const name2='Newproduct';
    name.setValue(name2);

    const price:any=component.addProduct.get("price");
    const price2=3000;
    price.setValue(price2);

    const image:any=component.addProduct.get("image");
    const image2='../url';
    image.setValue(image2);

    fixture.detectChanges();

    const btn=fixture.debugElement.query(By.css('#btn1'));
    expect(btn.nativeElement.disabled).toBeFalsy(); 
  });
});

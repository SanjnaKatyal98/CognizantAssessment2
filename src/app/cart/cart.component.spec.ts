import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { CartComponent } from './cart.component';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [
        RouterTestingModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule
      ],schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test case
  it('should display amt', () => {
    component.amt=100;
    fixture.detectChanges();
    const rootElem:DebugElement=fixture.debugElement;
    const h5=rootElem.query(By.css('#mssg'));
    const h5Elem:HTMLElement=h5.nativeElement;
    expect(h5Elem.textContent).toContain('100');
  });
  it('should have as title `cart`', () => {
    const fixture = TestBed.createComponent(CartComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cart');
  });
});

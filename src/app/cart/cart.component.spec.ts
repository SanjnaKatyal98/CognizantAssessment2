import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CartComponent } from './cart.component';
import { By } from '@angular/platform-browser';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
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
  it(`should have as title 'cart'`, () => {
    const fixture = TestBed.createComponent(CartComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cart');
  });
});

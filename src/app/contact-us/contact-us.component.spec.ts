import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CUSTOM_ELEMENTS_SCHEMA, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let el: HTMLElement;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      imports: [
        RouterTestingModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule
      ],schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test cases
  it('should call onSubmit(cform) method', () => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.cForm).toHaveBeenCalledTimes(1);
  });

  it('should have type text for firstname', () => {
    const element=fixture.debugElement.query(By.css('#firstname'));
    expect(element.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have type text for lastname', () => {
    const element=fixture.debugElement.query(By.css('#lastname'));
    expect(element.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have type text for store', () => {
    const element=fixture.debugElement.query(By.css('#store'));
    expect(element.nativeElement.getAttribute('type')).toEqual('text');
  });
  
  it('should have as title `contact us`', () => {
    const fixture = TestBed.createComponent(ContactUsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('contact us');
  });

  //Form Must Be Invalid If Feedback is not
  it("Checking form is valid or not",()=>{ 
    fixture.detectChanges();
    component.frm.setValue({
      firstname:"sanj",
      lasstname:"kat",
      store:"s1",
      feedback:"This is Also Our Best Selling Product.This article provides free, ready-to-use feedback form templates in Microsoft Excel and PDF formats, so you can gather information about your company, processes, products, or employees. Learn what questions to include and how to effectively craft feedback forms to get the answers you need to improve your company’s efficiency.",
    });
    fixture.detectChanges();});
});

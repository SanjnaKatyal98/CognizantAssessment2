import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule
      ],schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test case
  it("should disable the button when addProduct form is not valid", () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

  it('should have type text for username', () => {
    const element=fixture.debugElement.query(By.css('#username'));
    expect(element.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have type password for password', () => {
    const element=fixture.debugElement.query(By.css('#password'));
    expect(element.nativeElement.getAttribute('type')).toEqual('password');
  });

  it("Checking Button is disabled when the Form is Invalid",()=>{
    fixture.detectChanges();
     component.frm.setValue({
      usrname:"D",
      pass:"321"
    });
    fixture.detectChanges(); 
    expect(component.frm.valid).toBeFalse();
  });
  it("Checking form is valid or not",()=>{ 
    fixture.detectChanges();
     component.frm.setValue({
      usrname:"sanjna98",
      pass:"shahid28"
    });
    expect(component.frm.valid).toBeTrue();
  });
  it('should call onSubmit(cform) method', () => {
     spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.cForm).toHaveBeenCalledTimes(1); 
  });


  it('should check username is there or not',()=>{
    const element = fixture.debugElement.query(By.css('#userName'));
    expect(element.nativeElement.getAttribute('type')).toEqual('text');
  })
  it('should check username type is text or not',()=>{
     const element = fixture.debugElement.query(By.css('#userName'));
    expect(element.nativeElement.getAttribute('type')).toEqual('text');
  })
  it('should check name is of username ',()=>{
    const element = fixture.debugElement.query(By.css('#userName'));
    expect(element.nativeElement.getAttribute('name')).toEqual('userName'); 
  })

 

  it('should check password is there or not',()=>{
    const element = fixture.debugElement.query(By.css('#password'));
    expect(element.nativeElement.getAttribute('type')).toEqual('password');
  })

 

  it('should check password type is text or not',()=>{
    const element = fixture.debugElement.query(By.css('#password'));
    expect(element.nativeElement.getAttribute('type')).toEqual('password');
  })
  it('should check name is of password ',()=>{
    const element = fixture.debugElement.query(By.css('#password'));
    expect(element.nativeElement.getAttribute('name')).toEqual('password');
  })

 

  it('should have the login button',()=>{
    const element = fixture.debugElement.query(By.css('#bttn'));
    expect(element.nativeElement.getAttribute('button')).toEqual('button');
  })

 

  it('should check input type of login button',()=>{
    const login = fixture.debugElement.query(By.css('#login'));
    const login1= login.nativeElement.getAttribute('type');
    expect(login1).toEqual('submit'); 
  })
});

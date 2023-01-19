import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        RouterTestingModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule
      ],schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test case
  it(`should have as title 'registration form'`, () => {
     const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('registration form'); 
  });

  it('should have fullName type of text', () => {
   const element=fixture.debugElement.query(By.css('#fullName'));
   expect(element.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have mail type of text', () => {
    const element=fixture.debugElement.query(By.css('#mail'));
    expect(element.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have password type of password', () => {
    const element=fixture.debugElement.query(By.css('#password'));
    expect(element.nativeElement.getAttribute('type')).toEqual('password');
  });
  it('should have username type of text ', () => {
    const element=fixture.debugElement.query(By.css('#username'));
    expect(element.nativeElement.getAttribute('type')).toEqual('text');
  });
});

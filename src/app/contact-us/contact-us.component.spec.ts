import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let el: HTMLElement;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ]
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
  
  it(`should have as title 'contact us'`, () => {
    const fixture = TestBed.createComponent(ContactUsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('contact us');
  });
});

import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test case
  it('should display `This is not the page you were looking for!`', () => {
    fixture.detectChanges();
    const rootElem:DebugElement=fixture.debugElement;
    const h1=rootElem.query(By.css('.heading'));
    const h1Elem:HTMLElement=h1.nativeElement;
    expect(h1Elem.textContent).toContain('This is not the page you were looking for!');
  });
});

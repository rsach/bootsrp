/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Assign4Component } from './assign4.component';

describe('Assign4Component', () => {
  let component: Assign4Component;
  let fixture: ComponentFixture<Assign4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assign4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assign4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

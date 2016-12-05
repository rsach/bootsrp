/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Assign3Component } from './assign3.component';

describe('Assign3Component', () => {
  let component: Assign3Component;
  let fixture: ComponentFixture<Assign3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assign3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assign3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

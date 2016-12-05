/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Assign2Component } from './assign2.component';

describe('Assign2Component', () => {
  let component: Assign2Component;
  let fixture: ComponentFixture<Assign2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assign2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assign2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

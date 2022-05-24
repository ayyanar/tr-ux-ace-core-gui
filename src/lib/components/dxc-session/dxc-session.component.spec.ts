/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcSessionComponent } from './dxc-session.component';

describe('DxcSessionComponent', () => {
  let component: DxcSessionComponent;
  let fixture: ComponentFixture<DxcSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

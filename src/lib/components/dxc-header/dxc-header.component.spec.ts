/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcHeaderComponent } from './dxc-header.component';

describe('DxcHeaderComponent', () => {
  let component: DxcHeaderComponent;
  let fixture: ComponentFixture<DxcHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

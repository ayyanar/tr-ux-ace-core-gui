/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcAppLayoutComponent } from './dxc-app-layout.component';

describe('DxcAppLayoutComponent', () => {
  let component: DxcAppLayoutComponent;
  let fixture: ComponentFixture<DxcAppLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcAppLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

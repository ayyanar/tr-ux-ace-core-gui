/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcNavigationComponent } from './dxc-navigation.component';

describe('DxcSessionComponent', () => {
  let component: DxcNavigationComponent;
  let fixture: ComponentFixture<DxcNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

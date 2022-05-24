/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcClassSelectorComponent } from './dxc-class-selector.component';

describe('DxcSessionComponent', () => {
  let component: DxcClassSelectorComponent;
  let fixture: ComponentFixture<DxcClassSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcClassSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcClassSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

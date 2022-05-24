/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { DxcNav } from '../../models/dxc-nav-item.interface';

@Component({
  selector: 'dxc-nav',
  templateUrl: './dxc-navigation.component.html',
  styleUrls: ['./dxc-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DxcNavigationComponent implements OnInit {
  @Input('nav-items')
  public navItems: DxcNav[] = [];

  @Input('active-item')
  public activeItem: number = 0;

  // tslint:disable-next-line:no-output-rename
  @Output('itemclick')
  public onItemClick = new EventEmitter();

  constructor() {
    // to-do
  }

  public ngOnInit() {
    // to-do
  }

  public changeActiveItem(index: number) {
    this.activeItem = index;
    this.onItemClick.emit({value: index});
  }

}

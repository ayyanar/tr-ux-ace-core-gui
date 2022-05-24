/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dxc-header',
  templateUrl: './dxc-header.component.html',
  styleUrls: ['./dxc-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DxcHeaderComponent implements OnInit {
  @Input() public title: string = 'Application Title';
  @Output() public onLogoClick = new EventEmitter();
  constructor() {
    // to-do
  }

  public ngOnInit() {
    // to-do
  }

  public logoClick() {
    this.onLogoClick.emit();
  }

}

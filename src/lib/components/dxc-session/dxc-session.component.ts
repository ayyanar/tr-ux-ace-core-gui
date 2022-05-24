/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'dxc-session',
  templateUrl: './dxc-session.component.html',
  styleUrls: ['./dxc-session.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DxcSessionComponent implements OnInit {
  @Input('session-title') public sessionTitle: string = 'Session Title';
  @Input('show-header')  public showHeader: boolean = true;
  constructor() {
    // to-do
  }

  public ngOnInit() {
    // to-do
  }
}

// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'dxc-session-controls',
  template: `
    <ng-content select="[mat-button],[mat-icon-button],mat-menu"></ng-content>
  `,
  encapsulation: ViewEncapsulation.None
})
export class DxcSessionControlsComponent implements OnInit {
  public ngOnInit() {
    // to-do
  }
}

// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'dxc-session-content',
  template: `
    <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.None
})
export class DxcSessionContentComponent implements OnInit {
  public ngOnInit() {
    // to-do
  }
}

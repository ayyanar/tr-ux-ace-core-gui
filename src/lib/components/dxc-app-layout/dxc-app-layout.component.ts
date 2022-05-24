/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Component, OnInit, ViewEncapsulation, Input, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'dxc-app-layout',
  templateUrl: './dxc-app-layout.component.html',
  styleUrls: ['./dxc-app-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DxcAppLayoutComponent implements OnInit {
  constructor() {
    // to-do
  }

  public ngOnInit() {
    // to-do
  }

}

// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'dxc-content',
  template: `
    <div class="dxc-app-main">
    <ng-content select="dxc-app-top-content"></ng-content>
    <dxc-alert-message></dxc-alert-message>
    <div class="dxc-app-body-content">
      <ng-content select="dxc-app-left-content"></ng-content>
      <ng-content select="dxc-app-center-content"></ng-content>
      <ng-content select="dxc-app-right-content"></ng-content>
    </div>
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class DxcAppContentComponent implements OnInit {
  constructor() {
    // to-do
  }

  public ngOnInit() {
    // to-do
  }

}

// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'dxc-app-top-content',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None
})
export class DxcAppTopContentComponent implements OnInit {
  @Input() public height: string = '50px';

  @HostBinding('style.height') get topHeight(): string{
    return this.height;
  }
  constructor() {
    // to-do
  }

  public ngOnInit() {
    // to-do
  }

}

// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'dxc-app-left-content',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None
})
export class DxcAppLeftContentComponent implements OnInit {
  @Input() public width: string = '200px';

  @HostBinding('style.min-width') get minWidth(): string {
    return this.width;
  }
  @HostBinding('style.max-width') get maxWidth(): string {
    return this.width;
  }
  constructor() {
    // to-do
  }

  public ngOnInit() {
    // to-do
  }

}

// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'dxc-app-right-content',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None
})
export class DxcAppRightContentComponent implements OnInit {
  @Input() public width: string = '200px';

  @HostBinding('style.min-width') get minWidth(): string {
    return this.width;
  }
  @HostBinding('style.max-width') get maxWidth(): string {
    return this.width;
  }
  constructor() {
    // to-do
  }

  public ngOnInit() {
    // to-do
  }

}

// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'dxc-app-center-content',
  templateUrl: './dxc-app-center-content.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DxcAppCenterContentComponent implements OnInit {

  @Input('fixedtop') public fixedTop = false;
  @ViewChild('scrollwindow') public scrollWindow: ElementRef;
  @ViewChild('contentviewer') public contentViewer: ElementRef;

  constructor(private router: Router) {
    // to-do
  }

  public ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      try {
        this.scrollWindow.nativeElement.scrollTo(0, 0);
        this.contentViewer.nativeElement.scrollTo(0, 0);
      } catch (e) {
        // no code
      }
    });
  }
}

// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'dxc-fixed-top-content',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None
})
export class DxcFixedTopContentComponent implements OnInit {

  constructor() {
    // to-do
  }

  public ngOnInit() {
    // to-do
  }
}
